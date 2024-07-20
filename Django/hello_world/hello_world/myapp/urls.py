from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("about/", views.about),
    path("hello/", views.hello),
    path("hello/<str:name>/<int:age>", views.hello),
    path("projects", views.projects),
    path("tasks/<int:id>", views.tasks),
]
