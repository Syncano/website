---
path: '/codebox-run-your-own-code/'
layout: post
title: CodeBox - Run your own code
date: 2015-09-03 10:00:00
author: mariusz
categories: ['Syncano']
image: cloud-code.jpg
share_image: cloud-code.jpg
image_height: 450px
summary: "At Syncano, we love building new tools to speed up and simplify the development process of your next app. With the launch of the new version of our platform, we delivered lots of new features for you, and we're excited about all of them! One of the features I, personally, like the most are the `CodeBoxes`."
keywords: 'Syncano, CodeBox, code, run, backend, baas, nodejs, python, ruby'
seo_description: "running custom code, codebox, run nodejs"
---

At Syncano, we love building new tools to speed up and simplify the development process of your next app.

With the launch of the new version of our platform, we delivered lots of new features for you, and we're excited about all of them!

One of the features I, personally, like the most are the `CodeBoxes`.

# What is a CodeBox

The simplest definition of a CodeBox: It's an object that contains a script, and that can be run on Syncano's servers.

Because it gives you the ability to write and run your own code (in Python, Ruby, NodeJS or Go), it's a very powerful tool.

# Example

Instead of spending a lot of time explaining to you in detail what it is and how to use it, let's start with an example.

### Add a new CodeBox

Log in to our [Dashboard](https://dashboard.syncano.io), choose an instance (or create a new one if you don't have one yet), then go to the tab named "CodeBoxes" and click to create a new one.

Start by selecting a runtime.

![CodeBoxes](/public/blog/Add_codebox_01.png)

Name your CodeBox, add a description (optional), and confirm.

![New CodeBox](/public/blog/Add_codebox_02.png)

In the example above, we named our CodeBox `Hello World` and chose `python` runtime.

### First code

Now you can finally write some code!

Let's start with something every coding tutorial must have -- printing `Hello`.

Paste the following code into the code editor in the Dashboard:

```python
name = ARGS.get("name","")
print "Hello {name}!".format(name=name)
```

Then, save the changes, and run it.

![Hello World](/public/blog/Add_codebox_03.png)

If you scroll down, you will see a payload (we will get back to that in a minute) and a console with the result of the last run. In our case, it shows `Hello !` printed out.

### Payload

Payload is something you can use to pass additional arguments to your code. If you'd like use some parameters coming from outside of Syncano, passing them as payload is the best way to do it.

To see how it works, we will use the previous example to print a name next to `Hello`.

In the previous example, you’ll see that we used a variable named `ARGS`.

`ARGS` is a dictionary containing all the data passed to the CodeBox. In our case, we are interested only in getting the `name`, and if it doesn't exist, we want to get an empty string (that's how `name = ARGS.get("name","")` works).

Before you run your code, you will also need to change the payload in the editor. Instead of the default one, paste one with a name inserted into it:

```json
{"name":"John"}
```

Now you can save and run the code. Scroll down to the terminal to see the result.

![Hello John](https://www.evernote.com/l/AZYrwML_MgJNNb1uSj7uK2ptcPCGXuTujI0B/image.png)

### Launching CodeBox from outside of the Dashboard

You will usually want to launch the CodeBox while not using the Dashboard, but when you are using our API (directly or by using one of Syncano's libraries). While doing so, you can also pass the payload.

Here's an example of the API call in cURL:

```bash
curl -X POST \
-H "X-API-KEY: ACCOUNT_KEY" \
-d payload='{"name": "John"}'\
"https://api.syncano.io/v1/instances/INSTANCE_NAME/codeboxes/CODEBOX_ID/run/"
```

With my Account Key, instance name, and CodeBox ID, it would look like this:

```bash
curl -X POST \
-H "X-API-KEY: 1f6cd67a4da883a23e87a086e192d6a3eb775e85" \
-d payload='{"name": "John"}'\
"https://api.syncano.io/v1/instances/shy-wildflower-5156/codeboxes/1/run/"
```

Now you can try to modify the code, pass more data in the payload, and see what else you can do with it!

# Summary

That's it! As you can see, the concept of a CodeBox is really simple -- you write your own, test it, and run it.

At the same time, it allows you to create some pretty powerful functionalities, and we can't wait to see what you will develop!

In the next part, you will learn more about running your CodeBox on a schedule (e.g., every 5 minutes, or on Thursdays at 9am) and about Triggers -- executing your code when objects in a chosen class are created, updated, and deleted.

Mail us your CodeBoxes and ideas at [blog@syncano.com](blog@syncano.com); we will put the most interesting uses and ideas on our blog and will send some swag to the authors! :)
