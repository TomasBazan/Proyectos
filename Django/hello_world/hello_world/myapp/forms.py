from django import forms


class CreateNewTask(forms.Form):
    title = forms.CharField(label="Title of the Task")
    description = forms.CharField(
        label="Description of the Task", widget=forms.Textarea
    )


class CreateNewProject(forms.Form):
    name = forms.CharField(label="Name of the Project")
