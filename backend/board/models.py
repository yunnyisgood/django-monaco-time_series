from django.db import models


class PostVO(models.Model):

    # sequence = models.AutoField(primary_key=True, default=1000)  # or False
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:  # DB와 연결되는 클래스 -> 관리자 역할을 Django가 하도록.
        managed = True
        db_table = 'posts'

    def __str__(self):
        return f'[{self.pk}] sequnce {self.id},' \
               f'title = {self.title},' \
               f'content = {self.content},' \
               f'created_at = {self.created_at},' \
               f'updated_at = {self.updated_at}'




