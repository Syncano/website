---
path: '/blog/getting-started-docker/'
layout: post
title: Getting Started With Docker
description: "Since we started using Docker here at Syncano, we’ve become avid fans. Here’s some of our best knowledge on getting started with it."
date: 2014-10-17 11:21:29
author: justyna
categories: ['Docker', 'How Tos', 'Tutorials']
image: getting-started-docker.png
summary: "Since we started using Docker here at Syncano, we’ve become avid fans. Here’s some of our best knowledge on getting started with it. If you’re not sure about what Docker is or whether you should use it, check out the last post in this series."
---
Since we started using Docker here at Syncano, we've become avid fans. Here's some of our best knowledge on getting started with it. If you're not sure about what Docker is or whether you should use it, check out <a href="http://www.syncano.io/blog/reasons-use-docker/">the last post in this series.</a>

## Documentation

Docker has great <a href="http://docs.docker.com/">documentation</a> and a useful interactive <a href="https://www.docker.com/tryit/">online tutorial</a>.

## Setup

If you use Linux, setting up Docker is fairly easy. You can find great instructions straight from Docker's website <a href="http://docs.docker.com/installation/#installation">here</a>. You can also set up Docker on MacOS and Windows - it's a little more complicated, so I recommend using Vagrant's new <a href="https://www.vagrantup.com/blog/feature-preview-vagrant-1-6-docker-dev-environments.html">Docker support feature</a>.

## Using the repository

Docker's repository of images is one of it's best features. The images can be downloaded using the _pull_ command and used as the basis of containers for running applications or programming environments (ie. with an _ubuntu_ image you can run containers with _ubuntu_).

If you want to download an _ubuntu_ Docker image, all you have to do is type this into _terminal_:

```javascript
$ docker pull ubuntu
```

If you get a _permission denied_ error, add _sudo_ before _Docker_ in your commands, like below:

```javascript
$ sudo docker pull ubuntu
```

Pulling Docker images for the first time is similar to cloning a github repository. With the line above, you downloaded an ubuntu image with various versions of ubuntu, such as 14.04, 13.10 and so on. It probably took a few minutes.

You can also be more specific and download only the version you need. In Docker, versions are marked with tags. For example, to download a specific debian box, write:

```javascript
$ docker pull debian:squeeze
```

To see what Docker images are available on your machine, write:

```javascript
$ docker images

ubuntu                           14.10                                      f14704ad99b8    3 days ago          226.8 MB
ubuntu                           utopic                                     f14704ad99b8    3 days ago          226.8 MB
...
```

## Docker run command

After downloading an image, you can run it using Docker's _run_ command, which looks like:

```javascript
$ docker run [OPTIONS] IMAGE[:TAG] [COMMAND] [ARG...]
```

Use this to test the image with a simple _ls_ command run on your Docker image:

```javascript
$ docker run -t ubuntu:14.04 ls

bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
```

Congratulations! You've just run your first command on Docker container. To try your container interactively, use:

```javascript
$ docker run -t ubuntu:14.04
```

or

```javascript
$ docker run -i -t ubuntu:14:04 /bin/bash
```

Now you have the newest ubuntu with root access at your fingertips. Try some commands like  _pwd_ or _cd_ to make sure that it works.

You can close it anytime by typing _Ctrl-D_ or _exit_.

### Running a Redis container

Now that you know the basics, we can proceed with a more sophisticated example. Imagine that you want to run Redis in our container. (Redis is simple but powerful key-value store. You can read more about it <a href="https://en.wikipedia.org/wiki/Redis">here</a>.)

You can find its image in Docker's registry using Docker's search command:

```javascript
$ docker search redis
```

You'll notice the command prints almost eight houndred images!

```javascript
$ docker search redis | wc -l
779
```

Choose one of the most popular images: <a href="https://github.com/dockerfile/redis/blob/master/Dockerfile">_dockerfile/redis_</a>.

Next, create your container. There are three requirements:

*   Should run as deamon
*   Data can't disappear when you restart your container
*   Should bind to the network to be accessible


The first requirement is very simple. Just pass a _-d_ flag to your _docker run_ command.

For the second requirement, map a host directory to a directory in your container where it stores data.

From this <a href="https://github.com/dockerfile/redis">readme on dockerfile/redis</a> you probably know that a Redis image is configured to store data in the _/data_ directory. That means you must:

*   create a directory on your host system
*   map directories between your host system and the Docker container so that they instantly synchronize (the change from Docker will appear on your host and vice versa).


Creating a directory is simple:

```javascript
$ mkdir /var/docker/redis
```

You can mount by:

```javascript
$ docker run -v /host_directory:/container_directory docker_image

$ docker run -d -v /var/docker/redis:/data dockerfile/redis
```

You can find more information about docker volumes <a href="https://docs.docker.com/userguide/dockervolumes/">here</a>.

The last part is networking. Redis uses port 6379 by default, so you have to forward this port to make it accessible from your computer. To forward _$CONTAINERPORT_ to _$HOSTPORT_ on your computer use:

```javascript
$ docker run -p $HOSTPORT:$CONTAINERPORT --name CONTAINER -t someimage
```

For this example, it should look like:

```javascript
$ docker run -d -v /var/docker/redis:/data -p 6379:6379 --name=redis dockerfile/redis
```

And you're done! You can check if your Redis container works with <a href="http://redisdesktop.com/">Redis desktop manager</a> or <a href="http://webd.is/">Webdis</a> - both are pretty cool tools that you should check out if you use Redis.

## Getting more info about Docker containers

To see which Docker containers are on your computer, type:

```javascript
$ docker ps -a
```

This will show you:

*   CONTAINER ID - every container has unique id
*   IMAGE - image that container is based on
*   NAMES - names given to your container (Docker gives funny names to your containers if you don't provide your own by passing _--name container_name_ in the run command)
*   COMMAND - what command container runs inside
*   CREATED - when the container was created
*   STATUS - containers can be in two states: exited or running
*   PORTS - exposed and forwarded ports


That's a lot's of information! But wait, there's more. Let's spy a bit on our container with the _inspect_ command.

```javascript
$ docker inspect <docker_container_id or name>
```

If you run a Redis container with the _--name_ flag, you can inspect it with the below command:

```javascript
$ docker inspect redis
```

This prints a lot of useful information, including the configuration of the container, its environment variables, forwarded ports, mounted volumes, container constraints, and so on. Below is only small fragment of what you can see:

```javascript
...
"NetworkSettings": {
    "Bridge": "docker0",
    "Gateway": "172.17.42.1",
    "IPAddress": "172.17.0.143",
    "IPPrefixLen": 16,
    "PortMapping": null,
    "Ports": {
        "6379/tcp": [
            {
                "HostIp": "0.0.0.0",
                "HostPort": "6379"
            }
        ]
    }
},
"Path": "redis-server",
"ProcessLabel": "",
"ResolvConfPath": "/etc/resolv.conf",
"State": {
    "ExitCode": 0,
    "FinishedAt": "0001-01-01T00:00:00Z",
    "Paused": false,
    "Pid": 13335,
    "Running": true,
    "StartedAt": "2014-10-03T10:16:20.834865727Z"
},
"Volumes": {
    "/data": "/var/docker/redis"
},
...
```

The other valuable commands are:

```javascript
$ docker logs redis
```

Which will let you see what container prints to STDIO and STDOUT, and

```javascript
$ docker top redis
```

Which tells you what processes are currently running on you Docker container. It's similar to a unix tool called <a href="http://linux.about.com/od/commands/l/blcmdl1_top.htm">top</a>.

## What to do next

We've covered so much information about Docker, yet we've only scratched the surface!

To learn more, check out this <a href="https://github.com/wsargent/docker-cheat-sheet">docker cheatsheet</a> and the materials from <a href="https://github.com/project2051/warsjawa-docker-workshop">warsjawa workshops</a> - they will blow you away with helpful information!