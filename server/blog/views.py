from django.shortcuts import render
from .models import BlogPost


def index(request):
    post_list = BlogPost.objects.order_by('-start_date')[:5]
    return render(request, 'blog/index.html', context={'posts': post_list})
