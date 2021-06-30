from django.urls import path
from .views import POSTS

urlpatterns = [

    path('/write', POSTS.as_view())

    ]