---
path: '/blog/syncanos-drawing-app-demo-and-code/'
layout: post
title: Syncano's Drawing App - Demo and Code
description: "Using Syncano’s open-sourced iOS Library, I generated real-time synchronization between every device connected to the app with less than 60 lines of code."
date: 2014-05-19 11:21:29
author: mariusz
categories: ['Demo', 'Real-Time Apps', 'Real-Time Sync']
summary: "Right now, I’m working on building a free collaborative drawing app that will allow users to sync their drawings in real time across all other connected devices – using just above 1000 lines of code. Here’s a sneak peak at the app and the snippet of code that allowed me to shorten backend development from several weeks to only a few minutes."
---
<iframe src="//player.vimeo.com/video/95049187?wmode=transparent" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-aspectratio="0.562" style="width: 800px; height: 449.6px; opacity: 1; visibility: visible;"></iframe>
Right now, I’m working on building a free collaborative drawing app that will allow users to sync their drawings in real time across all other connected devices - using just above 1000 lines of code. Here’s a sneak peak at the app and the <a href="https://gist.github.com/mkucharz/b6d3161b74b000d807c8">snippet of code</a> that allowed me to shorten backend development from several weeks to only a few minutes.

Using Syncano’s open-sourced iOS Library, I generated real-time synchronization between every device connected to the app with less than <a href="https://gist.github.com/mkucharz/b6d3161b74b000d807c8">60 lines of code</a>. With the backend taken care of, the entire app only took me one week to create. That’s pretty incredible timing for an iOS developer with no backend experience!

The video above is a demo of the app so far. Syncano’s technology is so fast, synchronization occurs within milliseconds. You can see drawings in progress without having to wait for them to be finished by other users, and you can join sessions that are currently in progress.

The app uses two main features of Syncano:
<ul>
	<li>Sending and receiving custom notifications - i.e. to inform other users of new drawings</li>
	<li>Sending and auto-downloading Data Objects - i.e. custom background images. Syncano will host the image and quickly send the url back to the app.</li>
</ul>
Now, I’m adding additional features like the possibility to create public and private collaboration “rooms” that users can join to collaborate with friends and colleagues, customizable background transparency, and custom brush sizes and colors. Once that’s finished, I’ll make it publicly available for all to use. I promise, it will be worth waiting for!