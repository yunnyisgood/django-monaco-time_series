from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from board.models import Post
from board.serializers import BoardSerializers
from rest_framework.views  import APIView
from rest_framework.response import Response

class Auth(APIView):

    @csrf_exempt
    def get(request):
        serializer = BoardSerializers(data=request)
        if serializer.is_valid():
            serializer.save()
        return Response({'result': 'WELCOME'})



