from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from member.models import Member
from member.serializers import MemberSerializers

from rest_framework.response import Response
from rest_framework.views import APIView

class Auth(APIView):


    def get(request):
        serializer = MemberSerializers(data=request)
        if serializer.is_valid():
            serializer.save()
        return Response({'result': 'WELCOME'})


@csrf_exempt
def member_list(request):

    if request.method == 'GET':
        snippets = Member.objects.all()
        serializer = Member(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MemberSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


