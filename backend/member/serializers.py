from rest_framework import serializers
from member.models import MemberVO as member


class MemberSerializers(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()
    name = serializers.CharField()
    email = serializers.EmailField()

    class Meta: # DB와 연결되는 클래스 -> 관리자 역할을 Django가 하도록.
        managed = member
        fields = '__all__'

    def create(self, validated_data):

        return member.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Snippet` instance, given the validated data.
    #     """
    #     instance.username = validated_data.get('username', instance.username)
    #     instance.password = validated_data.get('password', instance.password)
    #     instance.name = validated_data.get('name', instance.name)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.save()
    #     return instance




