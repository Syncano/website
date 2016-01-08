---
layout: post
title: How to Scrape Craigslist with CodeBoxes
description: "In this article, we're going to use a Syncano Solution to create a craigslist scraper"
date: 2016-01-08 15:00:00
author: devin
path: '/blog/craigslist-scraper-solution/'
categories: ['Syncano', 'Node.js', 'Solution', 'CodeBox']
summary: "Using a CodeBox Solution to scrape craigslist"
keywords: 'Syncano, Node.js, Solution, CodeBox'
---

There are so many solutions out there for building a website scraper, and some of them show you how to send that data to your inbox. One great example is **<a href="https://scotch.io/tutorials/scraping-the-web-with-node-js" target="_blank">this one here</a>** by <a href="https://scotch.io/" target="_blank">Scotch.io</a>.

In this article, we're going to use the methods described in that tutorial, which we have built into a Syncano Solution, to create a craigslist scraper that will email us once a week with a list of results based on the keyword we put in!

## Why Should You Use Syncano?

Syncano offers not only a fully put-together solution that you can begin using right away, it also offers a server, scheduled CodeBox executor, and the ability to have all the code hosted by Syncano. This takes the responsibility of having your own server off of your shoulders!

Let's start with installing the solution.

_If you don't have a Syncano account, sign up <a href="https://dashboard.syncano.io/#/signup" target="_blank">here</a>!_

## Installing the Solution

To install the web scraper solution, <a href="https://dashboard.syncano.io/#/solutions/list" target="_blank">click here</a> and search for "Craigslist Web Scraper", or click this <a href="https://dashboard.syncano.io/#/solutions/60/edit" target="_blank">direct link</a>. Once you find it, click the arrow icon in the bottom right corner of the box to install the solution.

You'll need to select the Instance you want to install this solution on. _I would recommend creating a new Instance before you install this solution, so you don't mix with other code._

## First Time Setup

To set up the solution so you can use it, you'll have to follow a few quick steps. These instructions are also found in the comments at the top of the "Craigslist Scraper" CodeBox.

### Step 1: Mailgun

Before putting in any information, you'll need to sign up for a <a href="www.mailgun.com" target="_blank">Mailgun</a> account.

After you sign up for an account, you'll need to grab two pieces of information. The first is the private API key that they give to you. You'll find this under the "Account Settings."

Next you'll need to find the domain name by clicking on the domain tab at the top and copying the domain name.

Write both of these things down for the next step!

_If you want to use another SMTP server to send your emails, feel free to edit the `sendResults()` function in the Craigslist Scraper CodeBox in this solution. This specific function is only set to use the Mailgun SMTP, since it's free and easy._

### Step 2: Setting Up CodeBox Config

First, open up the CodeBoxes tab on the left side of the Syncano Dashboard. Then click on the Craigslist Scraper CodeBox. It will automatically open the "Edit" window. This is where all of the scraper code is.

At the top of the CodeBox, click the "Config" tab. There you will see three fields that need to be filled out:

>email - this is the email address where you want the emails sent
>mail_api - this is the Mailgun private API key you wrote down
>mail_domain - this is the Mailgun domain name you wrote down

*Be sure to click "Save"!*

_Inside the "Edit" window of the CodeBox, you'll see `numItems` and `emailName` variables. You can change these to adjust how many items you want to see, as well as the name for your email. **And don't forget to click the "save" icon on the right side!**_

### Step 3: Stating Region and Search Arguments

These next two variables can be changed as often as you need, which is why they're a part of the CodeBox payload instead of the Config.

To temporarily test the CodeBox, you can just use the "Payload" section of the console, otherwise you can set the arguments more permanently inside the code. Find the commented line:
```
// ARGS = {"region":"newyork","search":"macbook"};
```
Here, you will replace `newyork` and `macbook` with your own region and search arguments for Craigslist, and then uncomment the line. _It's a good idea to check the actual region and possible search results on Craigslist before setting these!_

Click the "save" icon on the right to save the CodeBox. On to testing!

## Testing Your CodeBox

To test the CodeBox, just hit the "play" or "run" icon on the right side of the CodeBox. In the console window at the bottom, you should see "Message sent!" If not, please run through the setup again, or post your error message in the discussion below this blog post!

If it ran successfully, go on over to your email inbox to see if the results came in!

## Setting Up the Scheduler

We're almost there!

After you test the Scraper CodeBox, you'll need to set up the "Scraper Scheduler" CodeBox.

There are only two things you need to do to set up the scheduler. The first is to locate your Account Key, which will be under your "Account" and then "Authentication" page.

Copy and paste this key into the "Config" section for the "Scraper Scheduler" CodeBox.

Next, you'll need to set how often, and at what time you want to receive this email. This is in the `options` variable inside the "Edit" window. To learn how to use `crontab`, visit our docs <a href="http://docs.syncano.io/docs/schedules#section-creating-codebox-schedule-with-dashboard" target="_blank">here</a>. Then just change the label so you know when this is supposed to run!

That's it! Your Craigslist Scraper CodeBox Solution will now run at your desired time and date and deliver to your email inbox the most recent Craigslist items matching your region and search!

And you didn't even have to build a server to do it :)

If you have any questions or comments, feel free to comment in the discussion below, or tweet at me (@devinviss).

Happy Scraping!