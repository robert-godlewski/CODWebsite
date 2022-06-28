from django.shortcuts import render
from .models import BlogPost

# Import statements for serializer only
#from rest_framework import viewsets
#from .serializers import BlogSerializer


# Routing for in Django build
def index(request):
    #print(request)
    post_list = BlogPost.objects.order_by('-start_date')
    return render(request, template_name='blog/index.html', context={'posts': post_list})

def oneblog(request, id):
    #print(f'request: {request}')
    #print(f'id: {id}')
    blog = BlogPost.objects.get(id=id)
    print(f'Blog data: {blog}')
    print(f'Blog img_link: {blog.img_link}')
    return render(request, template_name='blog/oneblog.html', context={'blog': blog})

# Routing for serializer to transfer data to react
'''
class AllBlogsView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = BlogPost.objects.all()
'''
