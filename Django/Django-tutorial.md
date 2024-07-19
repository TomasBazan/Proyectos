# Django

## Crear proyecto
- **django-admin startproject <name>** : crea un proyecto django en una nueva carpeta
- **django-admin startproject <name> <path>** : crea un proyecto django en el path
---

## manage.py
sirve para ejectuar comandos de administracion del proyecto
- **python manage.py runserver**: ejecuta un servicio en un puerto
- **python manage.py runserver <port-number>**: ejecuta un servicio django en el puerto especificado
---

## Estructura del proyecto
En Django cada carpeta es un proyecto y dentro contiene distintas aplicaciones
- manage.py: commandos administrativos ( manage.py --help)
- db.sqlite3 or other: base de datos (no para produccion)
- name-proyect: codigo fuente de app
	- **pycache:** archivos compilados
	- **settings:** configuracion del proyecto.
	  debug: flag para debuguear
	  allowed_hosts: direcciones permitidas para consultar a nuestro servidor
	  secret_key: sirve para encriptacion de usuarios
	  base_dir: donde esta el directorio del proyecto
	  installed_apps: lista de aplicaciones
	  databases: nos dice a que base de datos estamos conectados, la direccion esta en name y engine da el tipo de conexion (driver en java)
	  static_url: archivos html
	  middleware:
	  templates:
	- **__init__:** para que la carpeta sea considerada un modulo
	- **urls:** URLs que estan expuestas al cliente
	los Siguientes dos modulos se encargan de la configuracion de los modulos que se encargan de la produccion de la aplicacion
	- **asgi:** 
	- **wsgi:**
---

## Aplicaciones

En Django un proyecto esta conformado por aplicaciones
En cada proyecto tengo un conjunto de apps que se agrupan
por concepto.
Con cada comando que ejecute
  ```python manage.py startapp <name> ```
voy a crear una app que luego acoplare con el projecto entero.
Para acoplar las apps al proyecto, tengo que llamar a los archivos de cada app desde la app principal.
Normalmente se usa la carpeta principal que se crea con startproject
se utiliza para alojar todas las configuraciones que son accesibles 
desde todas las apps

## Estructura de una App

- **__init__:** same before
- **views:** Vistaas de html
- **carpeta migrations**: se llena cuando se ejecutan migraciones, tiene relacion con el orm de django 
- **admin**: sirve para integrar el panel de administrador, que se utiliza para administrar todas las aplicaciones
- **apps**: configuracion de esta aplicacion
- **models**: clases de sql
- **tests**: testing de vistas y logicas

## Manejos de Urls
Cada App es responsable de sus urls, por lo que hay que agregar un archivo urls.py dentro 
de cada app de la forma del mismo archivo dentro de la carpeta principal.
Ahora en la carpeta principal se llama a todas las urls de una app con la linea

```python
path('<prefijo>',includev'<app>.urls'v)
```
---
---

# Django REST Framework

Por lo que se hasta el dia 18-07 Django se utiliza mas con django rest framework, para utlizarlo para consumo de API


pip install djangorestframework en el entorno virtual

Crear proyecto: django-admin startproject
Crear apps: ``` python manage.py startapp <name>```
  Luego hay que agregar esta app en installed_apps dentro del directorio principal y correr 
  ``` bash
python manage.py migrate
  ```
Modulo para poder conectar servidores en browser:
```bash
pip install django-cors-headers
```
no olvidar de agregarlo a installed_apps y a middleware con

"corsheaders.middleware.COrsMiddleware",
antes de 
"django.middleware.common.CommonMiddleware",

los puertos que se pueden conectar son los que estan dentro del array
CORS_ALLOWED_ORIGINS = []
hay que agregarlo si no esta



