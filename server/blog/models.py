import datetime

from django.db import models
from django.utils import timezone


# Blog Models.
class BlogPost(models.Model):
    # id is automatically created after making migrations
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
    #is_about = check-box, default=False
    # Take out img_link, img_description, stream_link, and stream_description
    img_link = models.FilePathField(path="static/images/", allow_files=True, allow_folders=False, blank=True)
    img_description = models.CharField(max_length=200, blank=True)
    stream_link = models.URLField(max_length=500, blank=True)
    stream_description = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(timezone.now())
    updated_at = models.DateTimeField(timezone.now())

    # Returns the title of the blog post
    def __str__(self):
        return self.title
