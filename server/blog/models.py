import datetime

from django.db import models
from django.utils import timezone


# Blog Models.
class BlogPost(models.Model):
    # id is automatically created?
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    #img_link = models.URLField() or models.ImageField() - Need to figure out details
    #stream_link = models.URLField() - Need to figure out details
    created_at = models.DateTimeField(timezone.now())
    updated_at = models.DateTimeField(timezone.now())
