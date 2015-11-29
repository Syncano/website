---
path: '/blog/docker-workflow-fig-sh/'
layout: post
title: Make Your Docker Workflow Awesome With Fig.sh
description: "Fig simplified our complicated docker setup and life is awesome again. If you're looking for improving your docker workflow even more, check out our blog post."
date: 2014-10-24 11:21:29
author: justyna
categories: ['Docker', 'Fig.sh', 'How Tos']
image: figsh-y.png
summary: "Fig is a python application that helps you run groups of docker containers. The docker command line interface is awesome, but if you start working with many containers at once and link them in the development environment, typing the commands into the command line gets burdensome."
---
<h2>What is fig?</h2>

<p>Fig is a python application that helps you run groups of docker containers. The docker command line interface is awesome, but if you start working with many containers at once and link them in the development environment, typing the commands into the command line gets burdensome.

The most pragmatic approach to this problem is creating a bash script:</p>

```javascript
run_docker_containers.sh
```

```javascript
>#!/bin/bash
# Usage:
# `./run_docker_containers.sh`
# or
# `./run_docker_containers.sh python manage.py test`
&nbsp; 
# Postgres container
docker run -d -v /var/docker/postgresql:/data --name=postgres -e USER='root' \ 
    -e PASS='amazing_pass' -e DB='my_db' paintedfox/postgresql
&nbsp;
# Redis container
docker run -d -v /var/docker/redis:/data -p 0.0.0.0:6379:6379 \
    --name=redis dockerfile/redis
&nbsp; 
# Rabbit container
docker run -d -v /var/docker/rabbit:/data -p 0.0.0.0:15672:15672 \
    -p 0.0.0.0:5672:5672 -e RABBITMQ_PASS="amazing_pass" \
    --name=rabbitmq tutum/rabbitmq
&nbsp; 
# Worker container
docker run -i -t -e INSTANCE_TYPE="worker" --name='my-worker' \
    -v /home/syncano/app:/home/syncano/app \
    --link=postgres:postgres --link=redis:redis --link=rabbitmq:rabbit my_docker_image &
&nbsp; 
# Web server container
docker run -i -t -e INSTANCE_TYPE="web-server" --name='my-web' -p 0.0.0.0:8000:8000 \
    -v /home/my/app:/home/my/app
    --link=postgres:postgres --link=redis:redis --link=rabbitmq:rabbit my_docker_image "$@"
```

<p>Woah, it's super complicated and ugly – and that's only for running containers. What about inspecting containers, stopping them, or rebuilding them? You need more scripts for that. Managing docker this way can easily become a nightmare. Luckily, you can use <a href="http://www.fig.sh/">fig.sh</a> instead.</p>

<p>Fig lets you configure the setup of your docker containers with a simple <a href="http://en.wikipedia.org/wiki/YAML">yaml</a> file and provides you with commands such as:</p>

<ul>
<li>up - runs all containers; builds containers if none are available</li>
<li>rm - removes containers</li>
<li>ps - inspects the state of all containers in your app and gives you easy access to logs from all your containers at once:</li>
</ul>


<p><img src="http://i.imgur.com/2paHteu.png" alt="Fig logs" /></p>

<h2>How do you get started with fig?</h2>

<h3>Step 1 - Install it.</h3>

<p>Fig is available in pip, so all you have to do is type this into your command line:</p>

```javascript
$ sudo pip install fig
```

<p>You can more information about installing fig.sh on the <a href="http://www.fig.sh/install.html">official website</a>.</p>

<h3>Step 2 - Create a fig config.</h3>

<p>Fig config is written in yaml and is called <em>fig.yml</em> - you should place it in the directory in which you want to call fig commands.</p>

<p>Fig helps you manage docker containers, so its options are similar to those of the docker run command. In <em>fig.yml</em>, you'll start by entering the name of the container. Then, choose <em>build</em> or <em>image</em> to either run <em>docker build</em> or start a container based on the <em>image</em> you specified, respectively. You can specify many containers this way. Here's a simple example:</p>

```javascript
my_app:
  build: . # will run docker build in local directory
redis:
  image: redis
```

<p>Of course you can do more things, like forwarding ports by choosing the <em>ports</em> field , mounting directories using the <em>volumes</em> field, and linking containers with <em>links</em>. It's really intuitive! You can read more about configuration options in the <a href="http://www.fig.sh/yml.html">fig.yml reference</a>.</p>

<p>Now for a less-simple example. Here's how you can migrate your first nightmarish bash script to fig.yml.</p>

```javascript
postgres:
    image: paintedfox/postgresql
    environment:
        - USER=root
        - PASS=awesome_pass
        - DB=my_db
    ports:
        - "5432"
    volumes:
        - /var/docker/postgresql:data
redis:
    image: dockerfile/redis
    volumes:
        - /var/docker/redis:data
    ports:
        - "6379"
rabbit:
    image: tutum/rabbitmq
    volumes:
        - /var/docker/rabbit:data
    environment:
        - RABBITMQ_PASS=awesome_pass
    ports:
        - "5672"
        - "15672"
web:
    build: .
    ports:
        - "8000:8000"
    links:
        - postgres:postgres
        - redis:redis
        - rabbit:rabbit
    volumes:
        - .:/home/my/app
    environment:
        - INSTANCE_TYPE=web-server
worker:
    build: .
    links:
        - postgres:postgres
        - redis:redis
        - rabbit:rabbit
    volumes:
        - .:/home/my/app
    environment:
        - INSTANCE_TYPE=worker
```

<p>To run containers, now use:</p>

```javascript
$ fig up
```

<p>In another terminal window, you can inspect all of your containers with:</p>

```javascript
$ fig ps
&nbsp; 
Name                         Command               State                 Ports               
-------------------------------------------------------------------------------------------------------
app_redis_1      redis-server /etc/redis/re ...   Up      49417->6379/tcp                   
app_postgres_1   /sbin/my_init                    Up      49418->5432/tcp                   
app_rabbit_1     /run.sh                          Up      49419->15672/tcp, 49420->5672/tcp 
app_worker_1     /sbin/my_init                    Up      8000/tcp, 2023->22/tcp            
app_web_1        /sbin/my_init                    Up      8000->8000/tcp, 2022->22/tcp 
```

<p>That's it! Pretty easy, right?</p>

<h2>Issues with fig (troubleshooting)</h2>

<h3>Unexpected quotes in environment variables</h3>

<p>I'm used to wrapping string environment variables in double quotes <em>" "</em>. I did the same in my <em>fig.yml</em> config and to my surprise app wasn't working.</p>

<p>This is how I configured my <em>INSTANCE_TYPE</em> variable:</p>

```javascript
environment:
    - INSTANCE_TYPE="web-server"
```

<p>During debugging I noticed that fig leaves double quotes in actual variable value:</p>

```javascript
$ fig run web printenv
&nbsp; 
...
POSTGRES_1_ENV_USER=root
POSTGRES_1_ENV_PASS=amazing_pass
INSTANCE_TYPE="web-server"
HOME=/root
...
```

<p>So, my advice is to strip quotes in environment specification.</p>

<h4>Rebuilding images</h4>

<p>I also noticed fig occasionally doesn't notice when a <em>Dockerfile</em> changes and its image needs to be rebuilt. When that happens, you'll just need to enter this into the command line:</p>

```javascript
$ fig rm  # removes containers
$ fig build  # rebuild images
$ fig up  # run whole setup again
```

<h2>Summary</h2>

<p>Fig simplified our complicated docker setup and life is awesome again.
If you're looking for improving your docker workflow even more, check out <a href="https://github.com/jpetazzo/nsenter">nsenter</a> - a tool for entering docker containers - and <a href="http://www.serfdom.io/?__hstc=257401556.182ff0b6ce2fca3b36826f0cd98e0f47.1413914085927.1413914085927.1413914085927.1&amp;__hssc=257401556.1.1413914085928&amp;__hsfp=1866256635">serf</a> - a decentralized solution for cluster membership, failure detection, and orchestration.</p>