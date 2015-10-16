---
path: '/blog/reasons-use-docker/'
layout: post
title: 3 Reasons to Use Docker for Your Next Project
date: 2014-09-25 11:21:29
author: justyna
categories: ['Docker']
image: docker-e1411726692554.png
summary: "Docker is a tool that can be used to build applications, provide standardized environments for development, testing and production, isolate dependencies, and more. It uses lightweight containers instead of virtual machines, making it simpler to use than virtualization. Here are three reasons why you may want to consider using Docker for your next project on Syncano."
---

<p>Docker is a tool that can be used to build applications, provide standardized environments for development, testing and production, isolate dependencies, and more. It uses lightweight containers instead of virtual machines, making it simpler to use than virtualization. Here are three reasons why you may want to consider using Docker for your next project on Syncano.</p><!--more-->

<h2>Develop and deploy in the same environment</h2>

<p>An app that works on your machine doesn't always behave exactly the same on production. Making sure users on all devices have the same environment and that your application will run correctly on your workstation, your continuous integration server, and on any production environment is a task for all Linux developers. So how do you do it?</p>

<p>One option is to run your app on virtual machines with tools such as <a href="https://www.vagrantup.com/">Vagrant</a> and <a href="https://www.virtualbox.org/">Virtualbox</a> – these are useful solutions, but they  have some drawbacks. Machines are heavy, often slow, and need some provisioning tools or they will quickly diverge – bringing you back to your original problem.</p>

<p>On the other hand, you could use Docker. It's lightweight, fast, and has it's own provisioning with <a href="https://docs.docker.com/reference/builder/">Dockerfiles</a>, which store instructions on how your container should be built. Docker also caches it's building steps to speed up deployment.</p>

<p>Setting up the same app on a virtual machine with <a href="https://docs.vagrantup.com/v2/provisioning/ansible.html">ansible provisioning</a> can take up to 20 times longer than using Docker and Dockerfiles.</p>

<h2>Host many apps on one server (isolation)</h2>

<p>It's a huge waste to have one application per server. When you build with Python, you avoid mixing application requirements by using <a href="http://virtualenv.readthedocs.org/en/latest/">virtualenv</a>, but it's a leaking abstraction. Sooner or later you need some other dependency from your system's package manager that may be written in C, Perl, or something else.</p>

<p>Docker embeds the entire app environment by creating a Docker image that can be stored, changed, and pushed to a Docker Repository (more about this later). It can also be shared with others as well as pushed and run in production.</p>

<p>Once you have an image, you can create a container - a living app that's portable and can be run in many copies.</p>

<h2>Access a repository of images</h2>

<p>The Docker registry allows you to have all versions of your app ready to download and run.</p>

<p>At Syncano, we use a private Docker registry to store images built by our CI server. Every successful build pushes a new image to the registry, and we can download an image for any specific branch.</p>

<p>After creating an account on <a href="https://registry.hub.docker.com/">Docker Hub Registry</a>, you can also push your own images and share them with other people or inside your company. You can learn more about it <a href="https://docs.docker.com/docker-hub/">here</a>.</p>

<p><a href="https://registry.hub.docker.com/">Docker Hub Registry</a> is also a great treasure box, full of useful software such as a fully functional <a href="https://registry.hub.docker.com/">postgresql server</a> or <a href="https://registry.hub.docker.com/_/redis/">redis</a>. You no longer have to install it on your own machine.</p>

If you're ready to get started with Docker, check out my tutorial <a href="http://www.syncano.com/getting-started-docker/">"Getting Started with Docker."</a>