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
    # URLField doesn't really work with img_link - Maybe Try out FilePathField
    #img_link = models.URLField(max_length=500, default="")
    img_link = models.FilePathField(path="../client/src/static/images", allow_files=True, allow_folders=False)
    stream_link = models.URLField(max_length=500, default="")
    created_at = models.DateTimeField(timezone.now())
    updated_at = models.DateTimeField(timezone.now())

    # Returns the title of the blog post
    def __str__(self):
        return self.title
