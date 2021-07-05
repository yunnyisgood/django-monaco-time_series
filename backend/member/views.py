from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.response import Response

from member.models import MemberVO
from member.serializers import MemberSerializers
from rest_framework.decorators import api_view, parser_classes
from icecream import ic

@api_view(['GET', 'POST','PUT', 'DELETE'])
@parser_classes([JSONParser])
def members(request):
    if request.method == 'GET':
        print('*'*100)
        all = MemberVO.objects.all()
        ic(type(all))
        serializer = MemberSerializers(all, many=True)
        ic(type(serializer.data))
        ic(serializer.data)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        new_member = request.data['body']
        ic(new_member)
        serializer = MemberSerializers(data=new_member)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'POST','PUT', 'DELETE'])
def member(request):  # post 방식으로 로그인할 경우 필요한 메소드
    if request.method == 'GET':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = request.data['body']
        pk = data['username']
        user_input_password = data['password']
        member = MemberVO.objects.get(pk=pk)  # 여기서 MemberVO는 테이블
        if member is not None:
            ic(member)
            if user_input_password == member.password:
                serializer = MemberSerializers(member, many=False)
                ic(type(serializer.data))
                return JsonResponse(data=serializer.data, safe=False)
            else:
                print('비밀번호가 다릅니다.')
                return JsonResponse({'result':'PASSWORD-FAILED'}, status=201)
        else:
            print('해당 아이디가 없음')
            return JsonResponse(data=["FAIL"], safe=False)
        return HttpResponse(status=104)
    elif request.method == 'PUT':
        data = request.data['body']
        update_member = data['member']
        pk = update_member['username']
        member = MemberVO.objects.get(pk=pk)  # 기존값
        user_changed_password = update_member['password']
        serializer = MemberSerializers(member, data=data['member'], partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'result':f'Update Success , {serializer.data.get("name")}'}, status=201)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = MemberSerializers()
        return JsonResponse(serializer.data, safe=False)