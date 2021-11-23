
from django.db import models

class Items(models.Model):
    position = models.IntegerField(default=0)
    title = models.CharField(max_length=30)
    type = models.CharField(max_length=30)
    img_url = models.CharField(max_length=30000)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
