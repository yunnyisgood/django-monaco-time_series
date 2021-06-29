from rest_framework import serializers
from member.models import Member


class MemberSerializers(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()
    name = serializers.CharField()
    email = serializers.EmailField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Member.objects.create(**validated_data)

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



