---
path: '/blog/reasons-use-docker/'
layout: post
title: 3 Reasons to Use Docker for Your Next Project
description: "Docker is a tool that can be used to build apps, provide standardized environments for development, testing and production, isolate dependencies, and more."
date: 2014-09-25 11:21:29
author: justyna
categories: ['Docker']
image: docker-e1411726692554.png
summary: "Docker is a tool that can be used to build applications, provide standardized environments for development, testing and production, isolate dependencies, and more. It uses lightweight containers instead of virtual machines, making it simpler to use than virtualization. Here are three reasons why you may want to consider using Docker for your next project on Syncano."
---
Docker is a tool that can be used to build applications, provide standardized environments for development, testing and production, isolate dependencies, and more. It uses lightweight containers instead of virtual machines, making it simpler to use than virtualization. Here are three reasons why you may want to consider using Docker for your next project on Syncano.

## Develop and deploy in the same environment

An app that works on your machine doesn't always behave exactly the same on production. Making sure users on all devices have the same environment and that your application will run correctly on your workstation, your continuous integration server, and on any production environment is a task for all Linux developers. So how do you do it?

One option is to run your app on virtual machines with tools such as [Vagrant](https://www.vagrantup.com/) and [Virtualbox](https://www.virtualbox.org/) – these are useful solutions, but they have some drawbacks. Machines are heavy, often slow, and need some provisioning tools or they will quickly diverge – bringing you back to your original problem.

On the other hand, you could use Docker. It's lightweight, fast, and has it's own provisioning with [Dockerfiles](https://docs.docker.com/reference/builder/), which store instructions on how your container should be built. Docker also caches it's building steps to speed up deployment.

Setting up the same app on a virtual machine with [ansible provisioning](https://docs.vagrantup.com/v2/provisioning/ansible.html) can take up to 20 times longer than using Docker and Dockerfiles.

## Host many apps on one server (isolation)

It's a huge waste to have one application per server. When you build with Python, you avoid mixing application requirements by using [virtualenv](http://virtualenv.readthedocs.org/en/latest/), but it's a leaking abstraction. Sooner or later you need some other dependency from your system's package manager that may be written in C, Perl, or something else.

Docker embeds the entire app environment by creating a Docker image that can be stored, changed, and pushed to a Docker Repository (more about this later). It can also be shared with others as well as pushed and run in production.

Once you have an image, you can create a container - a living app that's portable and can be run in many copies.

## Access a repository of images

The Docker registry allows you to have all versions of your app ready to download and run.

At Syncano, we use a private Docker registry to store images built by our CI server. Every successful build pushes a new image to the registry, and we can download an image for any specific branch.

After creating an account on [Docker Hub Registry](https://registry.hub.docker.com/), you can also push your own images and share them with other people or inside your company. You can learn more about it [here](https://docs.docker.com/docker-hub/).

[Docker Hub Registry](https://registry.hub.docker.com/) is also a great treasure box, full of useful software such as a fully functional [postgresql server](https://registry.hub.docker.com/) or [redis](https://registry.hub.docker.com/_/redis/). You no longer have to install it on your own machine.

If you're ready to get started with Docker, check out my tutorial ["Getting Started with Docker."](http://www.syncano.io/blog/getting-started-docker/)
