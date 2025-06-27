import django
from django.db import connection

# Assume DJANGO_SETTINGS_MODULE is already set via env
django.setup()

with connection.cursor() as cursor:
    cursor.execute("SELECT 1;")
    result = cursor.fetchone()
    if result[0] == 1:
        print("✅ Django connected to PostgreSQL successfully")
    else:
        print(" Connection check failed")