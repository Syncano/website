---
layout: post
title: Looking for a Parse alternative? Here's how Syncano compares
description: "The recent news that Parse is shutting down has left many developers scrambling to find an alternative. While it may be tempting to pull out your hair or pound your keyboard in frustration, Syncano is here to help alleviate your anxiety."
date: 2016-02-10 15:00:00
author: todd
path: '/blog/looking-for-a-parse-alternative/'
categories: ['Syncano', 'Parse']
summary: "The recent news that Parse is shutting down has left many developers scrambling to find an alternative. While it may be tempting to pull out your hair or pound your keyboard in frustration, Syncano is here to help alleviate your anxiety."
keywords: 'Syncano, Parse, Alternative, BaaS, Serverless, Comparison'
---

![Keyboard Smash](http://stream1.gifsoup.com/view3/1402562/keyboard-smash-o.gif)

## We know you're frustrated. Syncano is here to help!

The recent news that Parse is shutting down has left many developers scrambling to find an alternative. While it may be tempting to pull out your hair or pound your keyboard in frustration, Syncano is here to help alleviate your anxiety. Like Parse, we provide a platform for you to build and manage your applications. Unlike Parse, however, we are committed to growing with you into the future and continuing to add new features that you care about. Currently, we are offering new users who [sign up](https://dashboard.syncano.io/#/signup) six months to try our platform **free** and determine if it is the right fit for you and your applications. 

Let’s break down Parse and Syncano.

## Comparable Features 
When switching from Parse to Syncano, there are many features that are similar. In many instances, they just have different names (to-MAY-to, to-MAH-to, right?).

Here is a quick overview of some of the terminology that Syncano uses for different features that are also supported in Parse.

<table>
<tr><th>Parse</th><th>Syncano</th></tr>
<tr><td>Apps</td><td><a href="http://docs.syncano.io/docs/getting-started-with-syncano">Instances</a></td></tr>
<tr><td>Classes</td><td><a href="http://docs.syncano.io/docs/classes">Classes</a></td></tr>
<tr><td>Objects</td><td><a href="http://docs.syncano.io/docs/data-objects">Data Objects</a></td></tr>
<tr><td>Queries</td><td><a href="http://docs.syncano.io/docs/data-objects-filtering">Filtering and Ordering</a></td></tr>
<tr><td>Users</td><td><a href="http://docs.syncano.io/docs/user-management">Users</a></td></tr>
<tr><td>Roles</td><td><a href="http://docs.syncano.io/docs/groups">Groups</a></td></tr>
<tr><td>Cloud Code</td><td><a href="http://docs.syncano.io/docs/codebox-overview">CodeBox</a></td></tr>
<tr><td>Hooks</td><td><a href="http://docs.syncano.io/docs/webhooks">Webhooks</a></td></tr>
</table>

### Feature Overview

**User Authentication & API Keys** - Both Syncano and Parse allow you to authenticate your users easily and manage a set of API Keys to give your users certain permissions. This way, you can regulate what endpoints or actions your users can utilize.

**Classes and Data Objects** - Both platforms allow you to create different classes, set up a schema for each class, and manage the data you choose to store in your classes. You can also run queries to filter, order, or paginate your data.

**Users and Groups** - Both platforms allow you to create and update users quickly and easily. Syncano's Groups are similar to Parse's Roles in that they allow you to give your users certain permissions based on what Group they are in.

**CodeBoxes** - This is Syncano for Parse's Cloud Code. This is where you can write backend code functions that can be run in the cloud. This improves your application's performance since you don't have to utilize client-side resources to run these functions. Syncano allows you to write your CodeBoxes in several different languages including Node.js, Python, Ruby, Go, PHP, and Swift. Every time a CodeBox is run in Syncano, a Trace is created so that you can easily debug any errors that occur.

**Webhooks, Schedules, and Triggers** - Webhooks are an endpoint you can use to run your CodeBoxes. These are similar to Parse's Hooks. You can also run CodeBoxes on a Schedule (such as every hour) or by setting up a Trigger. Triggers allow you to run a CodeBox whenever one of your Data Objects is created, updated, or deleted.

**Library Support** - Like Parse, we allow users to either interact with our API directly or through one of our many libraries. We currently support libraries for Python, Javascript, Ruby, iOS, Android, and Arduino.

## Features Exclusive to Syncano
While there are many features that Parse and Syncano share, there are also some features that are exclusive to Syncano.

**Realtime Channels** - Syncano's Channels allow you to add realtime communication to your application. With Channels, you can set your client-side code to watch for any changes to your data and update the front-end accordingly. This is a great tool to use for any chat application or any application where realtime updates could be useful.

**Solutions** - Syncano also allows you to download and install ready-made CodeBoxes directly into your application. Stuck reading docs trying to interface with a Third-Party API? Install a Solution and don't worry about it. Solutions are created by the community to solve the common, everyday problems that developers may face, and more are being added all the time!

## Upcoming Features Roadmap
At Syncano, we know we're not perfect. There are a few features that Parse had that we don't have currently. Luckily, we are an innovative, passionate team that listens to our users and works hard to implement the features they need to be successful. We've heard you, and we're excited to announce that the following features are already being developed.

* Parse Migration Tool - coming ASAP
* Array and Object Data Types - March
* Push Notifications - end of March


## Get Started with Syncano
If you'd like to get started with Syncano, [sign up](https://dashboard.syncano.io/#/signup) and see what you think. Like I mentioned earlier, we are offering six **free** months for all new users to get started. Also, if you need any help with the transition, reach out to our [Support Team](mailto:support@syncano.io). Thanks and happy coding!


