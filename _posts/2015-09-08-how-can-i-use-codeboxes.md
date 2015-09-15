---
layout: post
title: How can I use CodeBoxes?
date: 2015-09-08 10:00:00
author: jhishan
categories: ['syncano']
image: /assets/images/home-support-bg.png
share_image: /public/codeboxes.png
image_height: 450px
summary: "You have some code that can be run in the cloud, which is great. Now, how can you use it? How does Syncano make this cloud code useful for you?"
keywords: 'Syncano, CodeBox, code, run, backend, baas, nodejs, python, ruby'
seo_description: "running custom code, codebox, run nodejs"
---

You have some code that can be run in the cloud, which is great. Now, how can you use it? How does Syncano make this cloud code useful for you?

We realize that CodeBoxes contain snippets of code, but without intuitive ways to run the code, it may not be of much use to you. This is why we added 3 new powerful and flexible ways of running your CodeBox code. We want you to use these features to make your CodeBoxes as functional as possible, so that you can worry less about backend tasks. Here is how you can do it.

## Schedules

Sometimes, you might need to run CodeBoxes on a schedule. That is why we created a feature called exactly that, Schedules. With a Schedule, you can tell Syncano exactly when to run a CodeBox.

Let’s say you have some code in your app that updates the weather for different cities. However, the thing is, you need to update the weather for every city every 5 minutes. With Schedules, you can do exactly that. Check out this CodeBox that runs on a Schedule every 5 minutes.

![update weather](https://d3rij3t703q5l6.cloudfront.net/555/6/4076b80f129a75d6fef124eda7ce5667db7459d2.png)

You can see how to set up a Schedule [here](http://docs.syncano.com/docs/schedules).

We support Schedules because we know that setting up task automation with a backend framework and server can get complex and difficult. Will you have to set up a task queue? Will your server be able to handle X number of tasks, scheduled to run every few minutes? What happens to your scheduled tasks if your servers stop running?

When using Schedules with Syncano, all of these concerns are managed for you. Instead of worrying about how your backend will handle scheduled tasks, you can simply schedule the tasks and leave the heavy lifting to us.

## Triggers

We also understand that a lot of the things that need to happen in an app are event-based actions. Imagine that a new user signs up for your service, and now you want to email that user with an activation link, or a welcome email. With Syncano, you can do exactly that. You can set up a Trigger to run a CodeBox whenever an object is created, updated or deleted. So now, when you create a new user object, you can trigger a necessary CodeBox to email that user and say “Welcome”. Below, we show one of the CodeBoxes in our SendGrid solution for sending emails when new users are created.

![alt sendemailcodebox](https://d3rij3t703q5l6.cloudfront.net/555/6/ca4ed91abfa1645070e5c1cd6de8828a262f8b28.png "Send email codebox")

With Triggers, we are tackling some of the hurdles that come with event handling in a backend. We want you to spend less time thinking about connecting databases with tangible actions and the problems that may arise from that. To do this, we are directly tying your data to logic(CodeBoxes). With a few clicks in our Dashboard, you can build a Trigger that handles a task like the one discussed above. You can imagine Triggers like a postal system. You give us the package and the destination, and then we handle it for you, on demand, and at scale.

## Webhooks

Webhooks can be a lot of fun. You [can create Webhook URLs](http://docs.syncano.com/docs/webhooks#section-step-3-create-a-webhook-that-will-run-that-codebox) that trigger [CodeBoxes](http://docs.syncano.com/docs/codebox-overview). With this feature, you can set up ways for other applications to send data and activate events in Syncano.

Let’s say you made a CodeBox that uses the Venmo API to charge someone a dollar. You can make a slack integration so that any time a user types a swear word, you execute a Webhook sending that user’s email to Syncano. Your CodeBox called “SwearJar” then executes and charges that user a dollar.

![swear har](https://d3rij3t703q5l6.cloudfront.net/555/6/efa1489760720f21903ecf167038573922e8c93d.svg "swear jar")

Fun integrations like these make Webhooks a creative tool of choice. By using CodeBoxes and Webhooks, you have a place to run your code and integrate with other services without a backend. Can you imagine having to set up a server to run something like this “SwearJar” CodeBox? It would be a lot of work for a rather small task.

---
Our goal with Schedules, Triggers, and Webhooks is to minimize as much as possible the amount of backend code you have to write. By not having to worry about things like scheduling and event-driven actions, you can build your apps and projects faster, and with more functionality.

Stay tuned for more in-depth examples!
