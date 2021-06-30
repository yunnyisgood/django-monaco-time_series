from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from member.models import MemberVO as member
from board.serializers import BoardSerializers
from rest_framework.response import Response
from rest_framework.views import APIView
from icecream import ic


class POSTS(APIView):
    def post(self, request):
        data = request.data['body']
        ic(data)
        serializer = BoardSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'result':f'Welcome, {serializer.data.get("name")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)



@csrf_exempt
def member_list(request):

    if request.method == 'GET':

        serializer = BoardSerializers()
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = BoardSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)