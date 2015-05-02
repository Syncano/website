---
layout: post
title: Configuring and Running Django and Celery in Docker Containers (pt. 1)
date: 2015-02-03 11:21:29
author: justyna
categories: ['Celery', 'Django', 'Docker', 'Fig.sh']
share_image: /public/docker-django-celery.png
summary: "Today, you’ll learn how to setup a distributed task processing system for quick prototyping. You will configure Celery with Django, Postgres, Redis, and Rabbitmq, and then run everything in Docker containers. You’ll need some working knowledge of Docker for this tutorial, which you can get in one my previous posts here."
---

Today, you'll learn how to setup a distributed task processing system for quick prototyping. You will configure Celery with Django, Postgres, Redis, and Rabbitmq, and then run everything in Docker containers. You'll need some working knowledge of <a href="http://www.docker.com">Docker</a> for this tutorial, which you can get in one my previous posts <a href="http://www.syncano.com/getting-started-docker">here</a>.<!--more-->

<a href="https://www.djangoproject.com/">Django</a> is a well-known Python web framework, and <a href="https://celery.readthedocs.org/en/latest/">Celery</a> is a distributed task queue. You'll use Postgres as a regular database to store jobs, Rabbitmq to route tasks to different queues, and Redis as a task storage backend.

Note: Although I don't demonstrate it in this post, Redis can be used in a variety of different ways:
- As a key value store
- As a cache
- To publish and/or subscribe
- For distributed locking
<h2>Motivation</h2>
When you build a web application, sooner or later you'll have to implement some kind of offline task processing.

Example:
A user wants to convert her cat photos from .jpg to .png or create a .pdf from her collection of .jpg cat files. Doing either of these tasks in one HTTP request will take too long to execute and will unnecessarily burden the web server - meaning we can't serve other requests at the same time. The common solution is to execute the task in the background - often on another machine - and poll for the result.

A simple setup for an offline task processing could look like this:
<ul>
	<li>User uploads cat picture</li>
	<li>Web server schedules job on worker</li>
	<li>Worker gets job and converts photo</li>
	<li>Worker creates some result of the task (in this case, a converted photo)</li>
	<li>Web browser polls for the result</li>
	<li>Web browser gets the result from db/redis</li>
</ul>
This setup looks nice, but it has one flaw - it doesn't scale. What if she has a lot of cat pictures and one server wouldn't be enough? Or if there was some other very big job and all other jobs would be blocked by it? This is why you need to be prepared to scale.

To scale, you need something between the web server and worker: a broker. The web server would schedule new tasks by communicating with the broker, and the broker would communicate with the workers. You probably also want to buffer your tasks, retry if they fail, and monitor how many of them were processed. Sooner or later, you would have to create queues for tasks with different priorities or for those suitable for a different kind of worker.

All of this can be greatly simplified by using Celery - an open source distributed tasks queue. It works like a charm after you configure it -as long as you do so correctly.
<h3>How Celery is built</h3>
Celery consists of:
<ul>
	<li>Tasks, as defined in your app</li>
	<li>A broker that routes tasks to workers and queues</li>
	<li>Workers doing the actual work</li>
	<li>A storage backend</li>
</ul>
You can watch a more in-depth introduction to Celery <a href="https://www.youtube.com/watch?v=3cyq5DHjymw">here</a> or jump straight to Celery's <a href="http://Celery.readthedocs.org/en/latest/getting-started/">getting started guide</a>.
<h3>Rapid prototyping</h3>
Sooner or later, you will end up with a pretty complex distributed system - and distributed systems have <a href="http://www.rgoarchitects.com/Files/fallacies.pdf">fallacies</a> that you should be aware of:
<ul>
	<li>Messages travel with a finite speed</li>
	<li>Services are occasionally unavailable or unreliable</li>
	<li>When you run tasks in parallel, they can run into race condition</li>
	<li>Deadlocks</li>
	<li>Data corruption</li>
	<li>Lost tasks</li>
</ul>
With Docker, it's much easier to test solutions on a system level - by prototyping different task designs and the interactions between them.
<h2>Your setup</h2>
Start with the standard Django project structure. It can be created with django-admin, if you have it installed.
{% highlight javascript linenos %}

$ tree -I *.pyc
.
├── Dockerfile
├── fig.yml
├── myproject
│   ├── manage.py
│   └── myproject
│       ├── celeryconf.py
│       ├── __init__.py
│       ├── models.py
│       ├── serializers.py
│       ├── settings.py
│       ├── tasks.py
│       ├── urls.py
│       ├── views.py
│       └── wsgi.py
├── README.md
├── requirements.txt
├── run_celery.sh
└── run_web.sh

{% endhighlight %}
<h2>Creating containers</h2>
Since we are working with Docker, we need a proper Dockerfile to specify how our image will be built.
<h3>Custom container</h3>
<strong>Dockerfile</strong>
{% highlight javascript linenos %}
 
# use base python image with python 2.7
FROM python:2.7
 
# add requirements.txt to the image
ADD requirements.txt /app/requirements.txt
 
# set working directory to /app/
WORKDIR /app/
 
# install python dependencies
RUN pip install -r requirements.txt
 
# create unprivileged user
RUN adduser --disabled-password --gecos '' myuser

{% endhighlight %}
Our dependencies are:
<strong>requirements.txt</strong>
{% highlight javascript linenos %}

django==1.7.2
celery==3.1.17
Djangorestframework==3.0.3
psycopg2==2.5.4
redis==2.10.3

{% endhighlight %}
I've frozen versions of dependencies to make sure that you will have a working setup. If you wish, you can update any of them, but it's not guaranteed to work.
<h3>Choosing images for services</h3>
Now we only need to set up Rabbitmq, Postgresql, and Redis. Since Docker introduced its official library, I use their official images whenever possible. However, even these can be broken sometimes. When that happens, you'll have to use something else.

Here are the images I tested and selected for this project:
<ul>
	<li><a href="https://github.com/docker-library/official-images">Official Postgresql image</a></li>
	<li><a href="https://registry.hub.docker.com/_/redis/">Official Redis image</a></li>
	<li><a href="https://registry.hub.docker.com/u/tutum/rabbitmq/">Rabbitmq by Tutum</a></li>
</ul>
<h3>Using Fig.sh to set up multicontainer app</h3>
Now you'll use <a href="http://www.fig.sh/">fig.sh</a> to combine your own containers with the ones we chose in the last section. If you're not familiar with Fig.sh, check out my post on <a href="http://www.syncano.com/docker-workflow-fig-sh/">making your Docker workflow awesome with fig</a>.

<strong>fig.yml</strong>
{% highlight javascript linenos %}

# database container
db:
  image: postgres:9.4
  environment:
    - POSTGRES_PASSWORD=mysecretpassword
# redis container
redis:
  image: redis:2.8.19
# rabbitmq container
rabbitmq:
  image: tutum/rabbitmq
  environment:
    - RABBITMQ_PASS=mypass
  ports:
    - "5672:5672"  # we forward this port because it's useful for debugging 
    - "15672:15672"  # here, we can access rabbitmq management plugin
# container with Django web server
web:
  build: .  # build using default Dockerfile
  command: ./run_web.sh
  volumes:
    - .:/app  # mount current directory inside container
  ports:
    - "8000:8000"
  # set up links so that web knows about db, rabbit and redis
  links:
    - db:db
    - rabbitmq:rabbit
    - redis:redis
# container with redis worker
worker:
  build: .
  command: ./run_celery.sh
  volumes:
    - .:/app
  links:
    - db:db
    - rabbitmq:rabbit
    - redis:redis

{% endhighlight %}
<h2>Configuring the webserver and worker</h2>
You've probably noticed that both the worker and web server run some starting scripts. Here they are:

<strong>run_web.sh</strong>
{% highlight javascript linenos %}

#!/bin/sh
 
cd myproject
# migrate db, so we have the latest db schema
su -m myuser -c "python manage.py migrate"
# start development server on public ip interface, on port 8000
su -m myuser -c "python manage.py runserver 0.0.0.0:8000"

{% endhighlight %}
<strong>run_celery.sh</strong>
{% highlight javascript linenos %}

#!/bin/sh
 
cd myproject
# run Celery worker for our project myproject with Celery configuration stored in Celeryconf
su -m myuser -c "celery worker -A myproject.celeryconf -Q default -n default@%h"

{% endhighlight %}
The first script - <strong>run_web.sh</strong> - will migrate the database and start django development server on port 8000.
Ths second one , <strong>run_celery.sh</strong>, will start a celery worker listening on a queue <em>default</em>.

At this stage, these scripts won't work as we'd like them to because we haven't yet configured them. Our app still doesn't know that we want to use Postgres as database and where to find it (in a container somewhere). We also have to configure Redis and Rabbitmq.

But before we get to that, there are some useful Celery settings that will make your system perform better. Below are complete settings of this django app.

<strong>myproject/settings.py</strong>
{% highlight javascript linenos %}

import os
 
from kombu import Exchange, Queue
 
 
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
 
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'megg_yej86ln@xao^+)it4e&amp;ueu#!4tl9p1h%2sjr7ey0)m25f'
 
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
TEMPLATE_DEBUG = True
ALLOWED_HOSTS = []
 
# Application definition
 
INSTALLED_APPS = (
    'django.contrib.staticfiles',

    'rest_framework',
    'myproject',
)
 
MIDDLEWARE_CLASSES = (
)
 
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': ('rest_framework.permissions.AllowAny',),
    'PAGINATE_BY': 10
}
 
ROOT_URLCONF = 'myproject.urls'
 
WSGI_APPLICATION = 'myproject.wsgi.application'
 
# Localization ant timezone settings
 
TIME_ZONE = 'UTC'
USE_TZ = True
 
CELERY_ENABLE_UTC = True
CELERY_TIMEZONE = "UTC"
 
LANGUAGE_CODE = 'en-us'
USE_I18N = True
USE_L10N = True
 
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/
STATIC_URL = '/static/'
 
# Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('DB_ENV_DB', 'postgres'),
        'USER': os.environ.get('DB_ENV_POSTGRES_USER', 'postgres'),
        'PASSWORD': os.environ.get('DB_ENV_POSTGRES_PASSWORD', ''),
        'HOST': os.environ.get('DB_PORT_5432_TCP_ADDR', ''),
        'PORT': os.environ.get('DB_PORT_5432_TCP_PORT', ''),
    },
}
 
# Redis
 
REDIS_PORT = 6379
REDIS_DB = 0
REDIS_HOST = os.environ.get('REDIS_PORT_6379_TCP_ADDR', '127.0.0.1')
 
RABBIT_HOSTNAME = os.environ.get('RABBIT_PORT_5672_TCP', 'localhost:5672')
 
if RABBIT_HOSTNAME.startswith('tcp://'):
    RABBIT_HOSTNAME = RABBIT_HOSTNAME.split('//')[1]
 
BROKER_URL = os.environ.get('BROKER_URL',
                            '')
if not BROKER_URL:
    BROKER_URL = 'amqp://{user}:{password}@{hostname}/{vhost}/'.format(
        user=os.environ.get('RABBIT_ENV_USER', 'admin'),
        password=os.environ.get('RABBIT_ENV_RABBITMQ_PASS', 'mypass'),
        hostname=RABBIT_HOSTNAME,
        vhost=os.environ.get('RABBIT_ENV_VHOST', ''))
 
# We don't want to have dead connections stored on rabbitmq, so we have to negotiate using heartbeats
BROKER_HEARTBEAT = '?heartbeat=30'
if not BROKER_URL.endswith(BROKER_HEARTBEAT):
    BROKER_URL += BROKER_HEARTBEAT
 
BROKER_POOL_LIMIT = 1
BROKER_CONNECTION_TIMEOUT = 10
 
# Celery configuration
 
# configure queues, currently we have only one
CELERY_DEFAULT_QUEUE = 'default'
CELERY_QUEUES = (
    Queue('default', Exchange('default'), routing_key='default'),
)
 
# Sensible settings for celery
CELERY_ALWAYS_EAGER = False
CELERY_ACKS_LATE = True
CELERY_TASK_PUBLISH_RETRY = True
CELERY_DISABLE_RATE_LIMITS = False
 
# By default we will ignore result
# If you want to see results and try out tasks interactively, change it to False
# Or change this setting on tasks level
CELERY_IGNORE_RESULT = True
CELERY_SEND_TASK_ERROR_EMAILS = False
CELERY_TASK_RESULT_EXPIRES = 600
 
# Set redis as celery result backend
CELERY_RESULT_BACKEND = 'redis://%s:%d/%d' % (REDIS_HOST, REDIS_PORT, REDIS_DB)
CELERY_REDIS_MAX_CONNECTIONS = 1
 
# Don't use pickle as serializer, json is much safer
CELERY_TASK_SERIALIZER = "json"
CELERY_ACCEPT_CONTENT = ['application/json']
 
CELERYD_HIJACK_ROOT_LOGGER = False
CELERYD_PREFETCH_MULTIPLIER = 1
CELERYD_MAX_TASKS_PER_CHILD = 1000

{% endhighlight %}
Those settings will configure django app so that it will discover PostgreSQL database, redis cache and celery.

Now, it's time to connect Celery to the app. Create file <em>celeryconf.py</em> and paste in this code:

<strong>myproject/celeryconf.py</strong>
{% highlight javascript linenos %}

import os
 
from celery import Celery
from django.conf import settings
 
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
 
app = Celery('myproject')
 
CELERY_TIMEZONE = 'UTC'
 
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

{% endhighlight %}
That should be enough to connect Celery to our app so the run_X scripts will work. You can read more about first steps with Django and Celery <a href="http://celery.readthedocs.org/en/latest/django/first-steps-with-django.html">here</a>.
<h2>Defining tasks</h2>
Celery looks for tasks inside the <em>tasks.py</em> file in each Django app. Usually, tasks are created either with decorator or by inheriting after the Celery Task class.

Here's how you can create a task using decorator:
{% highlight javascript linenos %}

@app.task
def power(n):
    """Return 2 to the n'th power"""
    return 2 ** n

{% endhighlight %}
And here's how you can create a task by inheriting after the Celery Task class:
{% highlight javascript linenos %}

class PowerTask(app.Task):
    def run(self, n):
    """Return 2 to the n'th power"""
        return 2 ** n

{% endhighlight %}
Both are fine and good for slightly different use cases.

<strong>myproject/tasks.py</strong>
{% highlight javascript linenos %}

from functools import wraps
 
from myproject.celeryconf import app
from .models import Job
 
# decorator to avoid code duplication
 
def update_job(fn):
    """Decorator that will update Job with result of the function"""
 
    # wraps will make the name and docstring of fn available for introspection
    @wraps(fn) 
    def wrapper(job_id, *args, **kwargs):
        job = Job.objects.get(id=job_id)
        job.status = 'started'
        job.save()
        try:
            # execute the function fn
            result = fn(*args, **kwargs)
            job.result = result
            job.status = 'finished'
            job.save()
        except:
            job.result = None
            job.status = 'failed'
            job.save()
    return wrapper
 
 
# two simple numerical tasks that can be computationally intensive
 
@app.task
@update_job
def power(n):
    """Return 2 to the n'th power"""
    return 2 ** n
 
 
@app.task
@update_job
def fib(n):
    """Return the n'th Fibonacci number.
    """
    if n &lt; 0:
        raise ValueError("Fibonacci numbers are only defined for n &gt;= 0.")
    return _fib(n)
 
 
def _fib(n):
    if n == 0 or n == 1:
        return n
    else:
        return _fib(n - 1) + _fib(n - 2)
 
# mapping from names to tasks
 
TASK_MAPPING = {
    'power': power,
    'fibonacci': fib
}

{% endhighlight %}
<h2>Building an API for scheduling tasks</h2>
If you have tasks in your system, how do you run them? In this section, you'll create a user interface for job scheduling. In a backend application, the API will be your user interface. Let's use the <a href="http://www.django-rest-framework.org/">Django REST Framework</a> for your API.

To make it as simple as possible, your app will have one model and only one ViewSet (endpoint with many HTTP methods).

Create your model, called <em>Job</em>, in <strong>myproject/models.py</strong>.
{% highlight javascript linenos %}

from django.db import models
 
 
class Job(models.Model):
    """Class describing a computational job"""
 
    # currently, available types of job are:
    TYPES = (
        ('fibonacci', 'fibonacci'),
        ('power', 'power'),
    )
 
    # list of statuses that job can have
    STATUSES = (
        ('pending', 'pending'),
        ('started', 'started'),
        ('finished', 'finished'),
        ('failed', 'failed'),
    )
 
    type = models.CharField(choices=TYPES, max_length=20)
    status = models.CharField(choices=STATUSES, max_length=20)
 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    argument = models.PositiveIntegerField()
    result = models.IntegerField(null=True)
 
    def save(self, *args, **kwargs):
        """Save model and if job is in pending state, schedule it"""
        super(Job, self).save(*args, **kwargs)
        if self.status == 'pending':
            from .tasks import TASK_MAPPING
            task = TASK_MAPPING[self.type]
            task.delay(job_id=self.id, n=self.argument)
 
{% endhighlight %}
Then create a <em>serializer</em>, <em>view</em> and url configuration to access it.

<strong>myproject/serializers.py</strong>
{% highlight javascript linenos %}

from rest_framework import serializers
 
from .models import Job
 
 
class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job

{% endhighlight %}
<strong>myproject/views.py</strong>
{% highlight javascript linenos %}

from rest_framework import mixins, viewsets
 
from .models import Job
from .serializers import JobSerializer
 
 
class JobViewSet(mixins.CreateModelMixin,
                 mixins.ListModelMixin,
                 mixins.RetrieveModelMixin,
                 viewsets.GenericViewSet):
    """
    API endpoint that allows jobs to be viewed or created.
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer

{% endhighlight %}
<strong>myproject/urls.py</strong>
{% highlight javascript linenos %}

from django.conf.urls import url, include
from rest_framework import routers
 
from myproject import views
 
 
router = routers.DefaultRouter()
# register job endpoint in the router
router.register(r'jobs', views.JobViewSet)
 
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

{% endhighlight %}
For completeness, there is also <strong>myproject/wsgi.py</strong> defining wsgi config for the project:
{% highlight javascript linenos %}

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
 
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

{% endhighlight %}
and <strong>manage.py</strong>
{% highlight javascript linenos %}

#!/usr/bin/env python
import os
import sys
 
if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
  
    from django.core.management import execute_from_command_line
  
    execute_from_command_line(sys.argv)

{% endhighlight %}
<strong><em>__init__.py</em></strong> is traditionally empty.

That's all. Uh... lots of code. Luckily everything is on <a href="https://github.com/atteroTheGreatest/docker-Django-Celery">github</a>, so you can just fork it.
<h2>Running the setup</h2>
Since everything is run from Fig, make sure you have both Docker and Fig installed before you try to start the app:
{% highlight javascript linenos %}

$ cd /path/to/myproject/where/is/fig.yml
$ fig build
$ fig up

{% endhighlight %}
The last command will start five different containers, so just start using your API and have some fun with Celery in the mean time.
<h2>Accessing the API</h2>
Navigate in your browser to 127.0.0.1:8000 to browse your API and schedule some jobs.

Put this <strong>demo gif</strong> in the queue.
<h2>Scale things out</h2>
Currently we have only one instance of each container. We can get information about our group of containers with the <em>fig ps</em> command.
{% highlight javascript linenos %}

✗ fig ps
  
            Name                           Command               State                        Ports                       
-------------------------------------------------------------------------------------------------------------------------
dockerdjangocelery_db_1         /docker-entrypoint.sh postgres   Up      5432/tcp                                         
dockerdjangocelery_rabbitmq_1   /run.sh                          Up      0.0.0.0:15672-&gt;15672/tcp, 0.0.0.0:5672-&gt;5672/tcp 
dockerdjangocelery_redis_1      /entrypoint.sh redis-server      Up      6379/tcp                                         
dockerdjangocelery_web_1        ./run_web.sh                     Up      0.0.0.0:8000-&gt;8000/tcp                           
dockerdjangocelery_web_run_5    bash                             Up      8000/tcp                                         
dockerdjangocelery_worker_1     ./run_Celery.sh                  Up       

{% endhighlight %}
Scaling out a container with Fig is extremely easy. Just use the <em>fig scale</em> command with the container name and amount:
{% highlight javascript linenos %}

✗ fig scale worker=5
  
Starting dockerdjangocelery_worker_2...
Starting dockerdjangocelery_worker_3...
Starting dockerdjangocelery_worker_4...
Starting dockerdjangocelery_worker_5...

{% endhighlight %}
Output says that Fig just created an additional four worker containers for us. We can double check it with the <em>fig ps</em> command again:
{% highlight javascript linenos %}

➜  docker-django-celery git:(master) ✗ fig ps
  
            Name                           Command               State                        Ports                       
-------------------------------------------------------------------------------------------------------------------------
dockerdjangocelery_db_1         /docker-entrypoint.sh postgres   Up      5432/tcp                                       
dockerdjangocelery_rabbitmq_1   /run.sh                          Up      0.0.0.0:15672-&gt;15672/tcp, 0.0.0.0:5672-&gt;5672/tcp
dockerdjangocelery_redis_1      /entrypoint.sh redis-server      Up      6379/tcp                                       
dockerdjangocelery_web_1        ./run_web.sh                     Up      0.0.0.0:8000-&gt;8000/tcp                         
dockerdjangocelery_web_run_5    bash                             Up      8000/tcp                                       
dockerdjangocelery_worker_1     ./run_celery.sh                  Up                                                     
dockerdjangocelery_worker_2     ./run_celery.sh                  Up                                                     
dockerdjangocelery_worker_3     ./run_celery.sh                  Up                                                     
dockerdjangocelery_worker_4     ./run_celery.sh                  Up                                                     
dockerdjangocelery_worker_5     ./run_celery.sh                  Up

{% endhighlight %}
You'll see there five powerful Celery workers. Nice!
<h2>Summary</h2>
You just married Django with Celery to build a distributed asynchronous computation system. I think you'll agree it was pretty easy to build an API and even easier to scale workers for it! However, life isn't always so nice to us, and sometimes we have to troubleshoot.

In the next post, I'll show you tools to help you debug Celery problems, like:
- The Rabbimq management plugin
- Celery flower
- Celery events

And give you some to help you introspect Docker containers by:
- Accessing logs
- Using top
- Running bash interactively on running container

Until then, <a href="mailto:justyna.ilczuk@syncano.com">email</a> me with your questions and I'd be happy to help.

&nbsp;