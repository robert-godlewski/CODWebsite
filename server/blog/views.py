from django.shortcuts import render
from rest_framework import viewsets
from .models import BlogPost
from .serializers import BlogSerializer


# Original routing
'''
def index(request):
    post_list = BlogPost.objects.order_by('-start_date')[:5]
    return render(request, 'blog/index.html', context={'posts': post_list})
'''

# Replacing the original routing index with a class to implement the serializer for react
# Acts as an api
class AllBlogsView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = BlogPost.objects.all()
