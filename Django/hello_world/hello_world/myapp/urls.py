from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("hello/", views.hello, name="hello person"),
    path("hello/<str:name>/<int:age>", views.hello, name="hello user"),
    path("projects", views.projects, name="projects"),
    path("projects/<int:id>", views.project_detail, name="project_detail"),
    path("create-project/", views.create_new_project, name="create project"),
    path("tasks/delete/<int:task_id>", views.delete_task, name="delete_task"),
    path("tasks/done/<int:task_id>", views.mark_done_task, name="mark_done_task"),
    path("tasks/undone/<int:task_id>", views.mark_undone_task, name="mark_undone_task"),
    path("create-task/", views.create_new_task, name="create task"),
]
