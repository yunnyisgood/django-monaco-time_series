from django.urls import path
from .views import Members as members
from .views import Member as member
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('/signup', members.as_view()),
    path('/login/<str:pk>/', member.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)



