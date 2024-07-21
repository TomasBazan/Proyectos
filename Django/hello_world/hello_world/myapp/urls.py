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
    path("tasks/", views.tasks, name="tasks"),
    path("create-task/", views.create_new_task, name="create task"),
]
