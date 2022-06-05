import datetime

from django.db import models
from django.utils import timezone


# Blog Models.
class BlogPost(models.Model):
    # id is automatically created after making migrations
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    #img_link = models.ImageField(upload_to=None) - Need to edit
    #stream_link = models.URLField(max_length=400) - Need to edit
    created_at = models.DateTimeField(timezone.now())
    updated_at = models.DateTimeField(timezone.now())
