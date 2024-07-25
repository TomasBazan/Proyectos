from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from .models import Project, Task
from .forms import TaskForm, ProjectForm


def index(request):
    titulo = "Project manager"
    return render(request, "index.html", {"title": titulo})


def about(request):
    return render(request, "about.html")


def hello(request, name=None, age=None):
    if name is None and age is None:
        return HttpResponse("<h1>Hello Random Person</h1>")
    return HttpResponse(f"<h1>Hello {name} with age {age}<h1>")


def projects(request):
    lista_projectos = list(Project.objects.values())
    return render(request, "projects/projects.html", {"project_list": lista_projectos})


def project_detail(request, id):
    project = get_object_or_404(Project, id=id)
    tasks = Task.objects.filter(project_id=id)
    return render(
        request, "projects/detail.html", {"project": project, "task_list": tasks}
    )


def create_new_project(request):
    if request.method == "GET":
        return render(
            request, "projects/create_new_project.html", {"form": ProjectForm()}
        )
    elif request.method == "POST":
        action = request.POST.get("action")
        if action == "save":
            Project.objects.create(
                name=request.POST["name"],
            )
            return redirect("projects")
    else:
        return HttpResponseNotFound("Error")


def delete_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    task.delete()
    return redirect("tasks")


def mark_done_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    task.done = True
    task.save()
    return redirect("tasks")


def mark_undone_task(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    task.done = False
    task.save()
    return redirect("tasks")


def create_new_task(request):
    if request.method == "GET":
        return render(request, "tasks/create_new_task.html", {"form": TaskForm()})
    elif request.method == "POST":
        action = request.POST.get("action")
        if action == "save":
            print(request.POST)
            Task.objects.create(
                title=request.POST["title"],
                description=request.POST["description"],
                project_id=request.POST["project"],
            )
            return redirect("tasks")
    else:
        return HttpResponseNotFound("Error")
