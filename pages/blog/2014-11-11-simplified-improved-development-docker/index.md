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
<p>A few months ago, we started using Docker with Syncano and pretty much fell in love. The first blog posts we wrote (<a href="http://www.syncano.io/blog/reasons-use-docker/">Reasons Why We Use Docker</a>, <a href="http://www.syncano.io/blog/getting-started-docker/">Getting Started with Docker</a> and <a href="http://www.syncano.io/blog/docker-workflow-fig-sh/">Make Your Docker Workflow Awesome With Fig.sh</a>) gave you some reasons and tools to get started with Docker - now we're going to share how we use Docker ourselves (and why we can't live without it).</p>
<h2>In development</h2>

<p>Docker greatly simplified our development process. Syncano is mostly written in Python, and setting up a working development environment used to take a few hours. Now, onboarding a new developer takes just a few minutes on Linux and half an hour on OSX. All they need to do is:</p>

<ul>
<li>Install Docker</li>
<li>Install <a href="http://fig.sh">fig</a></li>
<li>Clone our syncano-platform repo</li>
<li>Type into shell:
```javascript
$ fig up
```</li>
</ul>

<p>Our stack is quite big and consists of five main components. Every component is run in a separate container, and containers are connected over the network and environment variables using Docker <em>links</em>.</p>

<p>Our development setup consisting of Docker containers is very similar to our production setup. This  gives us confidence that the application will run the same way in both development and production environments. You can read more about why your development setup should be similar to your production setup <a href="http://programmers.stackexchange.com/questions/162715/arguments-for-development-environment-being-the-same-as-production">here</a>.</p>

<h2>Testing and continuous integration</h2>

<p>To make sure that bugs are caught early and code is maintainable, we test everything we write, and every <a href="http://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is">branch in our git repository</a> is tested on our Continuous Integration server, <a href="https://circleci.com/">CircleCI</a>. You can read what Continuous Integration is and why people use it <a href="http://www.thoughtworks.com/continuous-integration">here</a>.</p>

<p>Our Continuous Integration workflow works as follows:</p>

<ol>
<li>Build container</li>
<li>Run tests on container</li>
<li>Collect metrics such as coverage and so on</li>
<li>If tests are successful, we tag the image and push it to the Docker registry</li>
<li>If the tested git branch is on the list of branches to deploy in CircleCi configuration, we deploy the new version of Syncano using the Docker image that we pushed in the step 4</li>
</ol>

<p>The first two steps are executed with help of fig:</p>

```javascript
$ fig run web ./run_tests.sh
```

<p>You can read more about <a href="link">using Fig here</a> or setting up Docker with CircleCi on their <a href="https://circleci.com/docs/docker">documentation page</a>. It's very easy!</p>

<h2>Deployment</h2>

<p>We deploy exactly what we tested on our CI using the same image. For deployment, we use <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a>.</p>

<p>Elastic Beanstalk can run different kinds of containers, including those in Docker's stack. It currently supports Docker 1.0 and Docker 1.2.</p>

<p>The best features of Elastic Beanstalk are:</p>

<ul>
<li>Easy autoscaling</li>
<li>Application version control</li>
<li>Good, predefined settings - you can utilize the power of AWS with very simple configurations</li>
</ul>

<p>You can read a tutorial on deploying Docker containers with elastic beanstalk <a href="http://blog.flux7.com/blogs/docker/10-steps-deploying-docker-containers-on-elastic-beanstalk">here</a>.</p>

<p>However, we aren't 100 percent happy about our deployment setup. Elastic Beanstalk underutilizes Docker - it usually spawns only one Docker container per machine (which is a complete waste)! It also doesn't really support inter-container communication or failure detection - it only supports health checks. And sometimes it has some stability issues. For example, I had problems with <em>already allocated ports</em> and Docker not running on the host machine.</p>

<h2>CodeBox feature</h2>

<p>We're currently working on our CodeBox feature, which offers execution of custom code on our platform. CodeBox can completely eliminate the need for implementing a custom backend with our API. It's in alpha now, but some of our customers use it every day.</p>

<p>Each time our client "runs" CodeBox, a Docker container is created, code is executed inside the container, and the container is destroyed just after code execution. We have some predefined code platforms - currently we  support node.js and python. Docker containers are great for this use case because they offer isolation and control over resources used by the executed code (memory, cores) and are pretty lightweight.</p>

<h2>Summary</h2>

<p>Using Docker in deployment gives us great confidence that we'll deploy the same app that we test. Thanks to ready-to-run Docker images, auto-scaling is fast and reliable.</p>

<p>Now that we've started using Docker, it's hard to imagine the Syncano platform without it!</p>