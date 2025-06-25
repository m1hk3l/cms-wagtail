FROM python:3.13.3-slim-bullseye

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
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
# Set work directory
WORKDIR /opt/wcms/

# Install dependencies
COPY wcms/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY wcms/ .