from django.urls import path
from member import views
# from .views import Members as members
# from .views import Member as member
from django.conf.urls import url

urlpatterns = [

    url(r'^register', views.members),
    url(r'^list', views.members),
    url(r'^login', views.login),
    url(r'^modify', views.member_modify),
    path('delete/<slug:pk>', views.member)

]




