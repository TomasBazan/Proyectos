from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from .models import Project, Task
from .forms import TaskForm, ProjectForm


def index(request):
    titulo = "Project manager"
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
    lista_projectos = list(Project.objects.values())  # Tambien funcion con all
    return render(request, "projects/projects.html", {"project_list": lista_projectos})
    # return render(request, "projects.html")
    # projects = list(Project.objects.values())
    # return JsonResponse(projects, safe=False)


def project_detail(request, id):
    project = get_object_or_404(Project, id=id)
    tasks = Task.objects.filter(project_id=id)
    return render(
        request, "projects/detail.html", {"project": project, "task_list": tasks}
    )


def create_new_project(request):
    if request.method == "GET":
        # Render the form page
        return render(
            request, "projects/create_new_project.html", {"form": ProjectForm()}
        )
    elif request.method == "POST":
        # Create the task
        action = request.POST.get("action")
        if action == "save":
            Project.objects.create(
                name=request.POST["name"],
            )
            return redirect("projects")
    else:
        return HttpResponseNotFound("Error")


def tasks(request):
    """Ejemplo de busca por id
    Forma convensional, devuelve error feo1
    task_asked = Task.objects.get(id=id)
    Forma mas linda, error 404
    task_asked = get_object_or_404(Task, id=id)
    """
    tasks = Task.objects.all()
    return render(request, "tasks/tasks.html", {"tasks": tasks})


def create_new_task(request):
    if request.method == "GET":
        # Render the form page
        return render(request, "tasks/create_new_task.html", {"form": TaskForm()})
    elif request.method == "POST":
        # Create the task
        action = request.POST.get("action")
        if action == "save":
            Task.objects.create(
                title=request.POST["title"],
                description=request.POST["description"],
                project_id=2,
            )
            return redirect("tasks")
    else:
        return HttpResponseNotFound("Error")
