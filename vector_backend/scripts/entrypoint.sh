#!/bin/sh

set -e

# Collect static files
echo "Collect static files"
python manage.py collectstatic --noinput

uwsgi --socket :8000 --master --enable-threads --module vector_backend.wsgi
