from django.shortcuts import render
from .models import BlogPost

# Import statements for serializer only
#from rest_framework import viewsets
#from .serializers import BlogSerializer


# Routing for in Django build
def index(request):
    post_list = BlogPost.objects.order_by('-start_date')
    return render(request, template_name='blog/index.html', context={'posts': post_list})


# Routing for serializer to transfer data to react
'''
class AllBlogsView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = BlogPost.objects.all()
'''
