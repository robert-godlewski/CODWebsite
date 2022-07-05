# urls file controlls the routing of the apps
# Have to create this from scratch every time and represents the controllers for this app
from django.urls import path
from . import views


app_name = 'blog'
urlpatterns = [
    path('', views.index, name="blogs"),
    path('blog/<int:id>/', views.oneblog, name="oneblog")
]
