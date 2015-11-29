---
layout: post
title: Syncano Prototyping with Plunker
description: "Let me introduce you to Plunker. If you haven’t used Plunker yet, this is a great opportunity for you to try it out!"
date: 2015-10-29 15:00:00
author: devin
path: '/blog/syncano-prototyping-with-plunker/'
categories: ['Syncano', 'Javascript', 'Plunker']
summary: "Using Plunker to prototype Syncano API calls and web development"
keywords: 'Syncano, Javascript, Plunker'
---

There are many times when I want to prototype the backend of an app before I worry about creating the front end, or before dealing with how the whole app is going to look. Of course, I could create a sample app with a bootstrap template, but what if I want to write my idea out _right now_?

Let me introduce you to Plunker! If you haven't used Plunker yet, this is a great opportunity for you to try it out!

## What Is Plunker?

_Plunker is an online community for creating, collaborating on, and sharing your web development ideas._ <br> **- Plnkr.co**

Plunker is also one of the fastest ways to prototype simple or complex web applications. They don't offer much as far as out-of-the-box design goes, but you can create a Plunk using a template based on some of the popular frameworks (including the most recent version of Angular 2).

To benefit you as a Syncano user, we decided to create a Syncano Javascript Library template on Plunker. This will make it easier for you to prototype your Syncano API calls before you have to worry about building the rest of your app (server, middleware code, framework).

**Let's get started!**

## Setting It Up

To get started, make sure you have a Syncano account. If you don't, visit our <a href="https://dashboard.syncano.io/#/signup" target="_blank">signup page</a> to create an account.

If you already have an account, click on <a href="http://plnkr.co/edit/tpl:TjzdW0" target="_blank">this link</a> to open the Plunk.

You'll see that when you first open the code, there are a bunch of files listed on the left side of the window. These are the files you're going to edit in order to test your Syncano API calls. The only two you really have to worry about are **index.html** and **syncano-script.js**. Our Syncano JS Library is already included in that list of files, and already imported at the top of the **index.html** file, so that you can start using it right away!

## Inserting API Info

The next thing you'll need to do is insert your Account Key, Instance name, and Class name. To make it easy, we have created three variables at the top of **syncano-script.js** so that once you replace *"ACCOUNT_KEY"*, *"INSTANCE"*, and *"CLASS"* with your respective info, you'll be able to use those variables over and over to create your API calls. _Be aware that if you post your Plunk publicly, you should remove your API information!_

```
// API Variables - PUT YOUR API INFO HERE
var myAccountKey = "ACCOUNT_KEY"; // Your Account Key
var myInstance = "INSTANCE"; // Your Instance name
var myClass = "CLASS"; // The Class you want to use
```

**Can't find your info? Read this section, otherwise skip ahead!**

>To find your Account Key: log in to Syncano, click on Account, and then click on your name/email. Then, after the page loads, you will see on the left-hand side an "Authentication" option. Click that, and the "Account Key" that appears on the page is your Account Key.

>To find your Instance: the Instance you want to use will appear as soon as you log in. If you are on an Instance page already, you will see it at the top of the left sidebar (the three-part-name with an icon next to it).

>To find your Class: When you are logged in and have selected your Instance, click on "Classes" in the left sidebar and you will get a list of Classes. This is where your data is stored.

## Get Creative!

Once you have inserted your API info, it's time to get creative! The line below in the Plunker code creates a Syncano object, which you can reuse for your Syncano calls.

```
var account = new Syncano({accountKey: myAccountKey});
```

You'll see that in **syncano-script.js** we have created two examples. The first is a call that will print to the console a list of data objects in the Class you have chosen. The second (commented out) is an example of how to take that list and show it using HTML.

On Plunker, you can create an account and save your own Plunks to share with others. Go ahead and use our Syncano template to create something cool, then make it public and share it with the whole Plunker community! You can also use their templates for frameworks -- just drop in our **syncano-script.js** file and the Syncano `<script>` tag in the html header to test it with those!

Here is the link to the GitHub repo, so you can download the files and test them locally, or contribute and create Forks of your own!

<a href="https://github.com/devintyler/syncano-plunker-template" target="_blank">Plunker Template GitHub Repo</a>

**For examples on how to use Syncano, as well as different API calls that you can make, take a look at our <a href="http://docs.syncano.io/" target="_blank">docs</a>.**
