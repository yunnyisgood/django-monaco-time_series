from django.db import models


class Post(models.Model):

    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField()

    class Meta:  # DB와 연결되는 클래스 -> 관리자 역할을 Django가 하도록.
        managed = True
        db_table = 'posts'


