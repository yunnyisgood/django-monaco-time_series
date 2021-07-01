from django.shortcuts import render
from django.urls import path
from rest_framework import status

from . import views_cbv
# Create your views here.

from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from member.serializers import MemberSerializers
from rest_framework.response import Response
from rest_framework.views import APIView
from icecream import ic
from member.models import MemberVO

#
# class Members(APIView):
#     def post(self, request):
#         data = request.data['body']
#         ic(data)
#         serializer = MemberSerializers(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'result':f'Welcome, {serializer.data.get("name")}'}, status=201)
#         ic(serializer.errors)
#         return Response(serializer.errors, status=400)
#
# class Member(APIView):
#     def get_object(self, pk):
#         try:
#             return MemberVO.objects.get(pk=pk)
#         except MemberVO.DoesNotExist:
#             raise Http404
#
#     def post(self, request):
#         data = request.data['body']
#         pk = data['username']
#         user_input_password = data['password']
#         member = self.get_object(pk)
#         if user_input_password == member.password:
#             return Response({'result': 'you are logged in'}, status=201)
#         return HttpResponse(status=104)
#
#
# @csrf_exempt
# def member_list(request):
#
#     if request.method == 'GET':
#
#         serializer = MemberSerializers()
#         if serializer.is_valid():
#             serializer.save()
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = MemberSerializers(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)