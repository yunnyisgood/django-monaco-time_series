from django.urls import path
from .views import POSTS

urlpatterns = [

    path('/register', POSTS.as_view())

    ]