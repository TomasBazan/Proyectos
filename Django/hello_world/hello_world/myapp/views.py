from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import Project, Task
# Create your views here.


def index(request):
    titulo = "Django Course"
    return render(request, "index.html", {"title": titulo})


def about(request):
    return render(request, "about.html")
    # return HttpResponse("pepe")


def hello(request, name=None, age=None):
    """De esta manera puedo manejar dos urls con una misma funcion,
    lo mejor sigue siendo separala en dos funciones en mi opinion"""
    if name is None and age is None:
        return HttpResponse("<h1>Hello Random Person</h1>")
    return HttpResponse(f"<h1>Hello {name} with age {age}<h1>")
    # return HttpResponse("<h1>Hello %s with age %i<h1>" % (name, age))


def projects(request):
    """Ejemplo para buscar la lista de entradas, no tomo all()
    porque me devuelve las referencias
    """
    return render(request, "projects.html")
    # projects = list(Project.objects.values())
    # return JsonResponse(projects, safe=False)


def tasks(request, id):
    """Ejemplo de busca por id"""
    # task_asked = Task.objects.get(id=id)# Forma convensional, devuelve error
    #                                        feo
    return render(request, "tasks.html")
    # task_asked = get_object_or_404(Task, id=id)  # Cleaner, devuelve un error
    #                                               mas razonable
    # return HttpResponse(f"task title: {task_asked.title}")
