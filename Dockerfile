# FROM node:24.3-alpine AS vite-builder

# WORKDIR /opt/wcms/
# # RUN npm create vite@latest frontend -- --template react-ts
# # WORKDIR /opt/frontend/
# # RUN npm install
# # RUN npm run build
# # RUN npm install --save-dev @types/node
# COPY wcms/frontend .

FROM python:3.13.3-slim-bullseye AS wagtail-builder

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN apt-get update && apt-get upgrade -y && apt-get clean

RUN apt-get update \
    && apt-get install -y \
    build-essential \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
    libwebp-dev \
    libmagic1 \
    libxslt1-dev \
    libffi-dev \
    libxml2-dev \
    libssl-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/wcms/
COPY wcms/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY wcms/ .
COPY wcms/frontend .

