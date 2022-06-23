from django.shortcuts import render
from .models import BlogPost

# Import statements for serializer only
#from rest_framework import viewsets
#from .serializers import BlogSerializer


# Routing for in Django build
def index(request):
    post_list = BlogPost.objects.order_by('-start_date')
    print(post_list)
    print('First one in the list:')
    print(post_list[0])
    print(post_list[0].description)
    print(post_list[0].img_link)
    print('Second one in the list:')
    print(post_list[1])
    print(post_list[1].description)
    print(post_list[1].img_link)
    return render(request, 'blog/index.html', context={'posts': post_list})


# Routing for serializer to transfer data to react
'''
class AllBlogsView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = BlogPost.objects.all()
'''
