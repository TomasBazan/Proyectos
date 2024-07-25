from django import forms
from .models import Task, Project


class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ["title", "description", "project"]

    project = forms.ModelChoiceField(
        queryset=Project.objects.all(), label="Select Project"
    )


class CreateNewProject(forms.Form):
    name = forms.CharField(label="Name of the Project")


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ["name"]
