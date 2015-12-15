---
path: '/blog/simplified-improved-development-docker/'
layout: post
title: How We Use Docker (And Why We Can’t Live Without It)
description: "A few months ago, we started using Docker with Syncano and pretty much fell in love. Now we're going to share how we use Docker ourselves!"
date: 2014-11-11 11:21:29
author: justyna
categories: ['Docker']
image: y-heart-docker.png
summary: "A few months ago, we started using Docker with Syncano and pretty much fell in love. The first blog posts we wrote (Reasons Why We Use Docker, Getting Started with Docker and Make Your Docker Workflow Awesome With Fig.sh) gave you some reasons and tools to get started with Docker – now we’re going to share how we use Docker ourselves (and why we can’t live without it)."
---
A few months ago, we started using Docker with Syncano and pretty much fell in love. The first blog posts we wrote (<a href="http://www.syncano.io/blog/reasons-use-docker/">Reasons Why We Use Docker</a>, <a href="http://www.syncano.io/blog/getting-started-docker/">Getting Started with Docker</a> and <a href="http://www.syncano.io/blog/docker-workflow-fig-sh/">Make Your Docker Workflow Awesome With Fig.sh</a>) gave you some reasons and tools to get started with Docker - now we're going to share how we use Docker ourselves (and why we can't live without it).

## In development

Docker greatly simplified our development process. Syncano is mostly written in Python, and setting up a working development environment used to take a few hours. Now, onboarding a new developer takes just a few minutes on Linux and half an hour on OSX. All they need to do is:

*   Install Docker
*   Install [fig](http://fig.sh)
*   Clone our syncano-platform repo
*   Type into shell: ```javascript $ fig up ```

Our stack is quite big and consists of five main components. Every component is run in a separate container, and containers are connected over the network and environment variables using Docker <em>links</em>.

Our development setup consisting of Docker containers is very similar to our production setup. This  gives us confidence that the application will run the same way in both development and production environments. You can read more about why your development setup should be similar to your production setup <a href="http://programmers.stackexchange.com/questions/162715/arguments-for-development-environment-being-the-same-as-production">here</a>.

## Testing and continuous integration

To make sure that bugs are caught early and code is maintainable, we test everything we write, and every <a href="http://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is">branch in our git repository</a> is tested on our Continuous Integration server, <a href="https://circleci.com/">CircleCI</a>. You can read what Continuous Integration is and why people use it <a href="http://www.thoughtworks.com/continuous-integration">here</a>.

Our Continuous Integration workflow works as follows:

1.  Build container
2.  Run tests on container
3.  Collect metrics such as coverage and so on
4.  If tests are successful, we tag the image and push it to the Docker registry
5.  If the tested git branch is on the list of branches to deploy in CircleCi configuration, we deploy the new version of Syncano using the Docker image that we pushed in the step 4

The first two steps are executed with help of fig:

```javascript
$ fig run web ./run_tests.sh
```

You can read more about <a href="link">using Fig here</a> or setting up Docker with CircleCi on their <a href="https://circleci.com/docs/docker">documentation page</a>. It's very easy!

## Deployment

We deploy exactly what we tested on our CI using the same image. For deployment, we use <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a>.

Elastic Beanstalk can run different kinds of containers, including those in Docker's stack. It currently supports Docker 1.0 and Docker 1.2.

The best features of Elastic Beanstalk are:

*   Easy autoscaling
*   Application version control
*   Good, predefined settings - you can utilize the power of AWS with very simple configurations

You can read a tutorial on deploying Docker containers with elastic beanstalk <a href="http://blog.flux7.com/blogs/docker/10-steps-deploying-docker-containers-on-elastic-beanstalk">here</a>.

However, we aren't 100 percent happy about our deployment setup. Elastic Beanstalk underutilizes Docker - it usually spawns only one Docker container per machine (which is a complete waste)! It also doesn't really support inter-container communication or failure detection - it only supports health checks. And sometimes it has some stability issues. For example, I had problems with <em>already allocated ports</em> and Docker not running on the host machine.

## CodeBox feature

We're currently working on our CodeBox feature, which offers execution of custom code on our platform. CodeBox can completely eliminate the need for implementing a custom backend with our API. It's in alpha now, but some of our customers use it every day.

Each time our client "runs" CodeBox, a Docker container is created, code is executed inside the container, and the container is destroyed just after code execution. We have some predefined code platforms - currently we  support node.js and python. Docker containers are great for this use case because they offer isolation and control over resources used by the executed code (memory, cores) and are pretty lightweight.

## Summary

Using Docker in deployment gives us great confidence that we'll deploy the same app that we test. Thanks to ready-to-run Docker images, auto-scaling is fast and reliable.

Now that we've started using Docker, it's hard to imagine the Syncano platform without it!