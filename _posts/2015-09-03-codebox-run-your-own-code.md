---
layout: post
title: CodeBox - Run your own code
date: 2015-09-03 10:00:00
author: mariusz
categories: ['syncano']
image: /public/blue-background.png
share_image: /public/blue-background.png
image_height: 450px
summary: "At Syncano, we love building new tools to speed up and simplify development process of your next app. With the launch of the new version of our platform, we delievered lots of new features for you, and we're excited about all of them! One of the things I like the most personally are the `CodeBoxes`."
keywords: 'Syncano, CodeBox, code, run, backend, baas, nodejs, python, ruby'
seo_description: "running custom code, codebox, run nodejs"
---

At Syncano, we love building new tools to speed up and simplify development process of your next app.

With the launch of the new version of our platform, we delievered lots of new features for you, and we're excited about all of them!

One of the things I like the most personally are the `CodeBoxes`.

# What is a CodeBox

The simplest explanation would be to say, it's an object that contains a script, that can be run on Syncano's servers.

Because it gives you ability to write and run your own code (in Python, Ruby, NodeJS or Go), it's a very powerful tool.

# Example

Instead of spending a lot of time explaining to you in details what is it and how to use it - let's start with an example.

### Add a new CodeBox

Log in into our [Dashboard](https://dashboard.syncano.io), choose an instance (or create a new one if you don't have one yet) and go to the tab named "CodeBoxes" and click to create a new one. Start from selecting a runtime.

![CodeBoxes](/public/blog/Add_codebox_01.png)

Name your CodeBox, optionally add a description and confirm.

![New CodeBox](/public/blog/Add_codebox_02.png)

In the example above we named our CodeBox `Hello World` and chose `python` runtime.

### First code

Now you can finally write some code!

For start, let's start with something every coding tutorial must have - printing `Hello`.

Paste following code into code editor in the Dashboard

{% highlight python lineanchors %}
name = ARGS.get("name","")
print "Hello {name}!".format(name=name)
{% endhighlight %}
save the changes, and run it.

![Hello World](/public/blog/Add_codebox_03.png)

If you scroll down, you will see a payload (we will get back to it in a minute) and console with a result of the last run. In our case, it shows `Hello !` printed out.

### Payload

Payload is something you can use to pass additional arguments to your code. If you'd like use some parameters coming from outside of Syncano, passing them as payload is the best way to do it.

To see how it works, we will use previous example to print a name, next to the `Hello`.

Change your code to the following

In the previous example you noticed using variable named `ARGS`. 

`ARGS` is a dictionary containing all the data passed to the CodeBox. In our case, we are interested only in getting the `name`, and if it doesn't exist, we want to get an empty string (that's how `name = ARGS.get("name","")` works).

Before you run your code, you will also need to change the payload in the editor. Instead of the default one, paste one with a name passed in

{% highlight json lineanchors %}
{"name":"John"}
{% endhighlight %}
Now you can save and run the code. Scroll down to the terminal to see the result.

![Hello John](https://www.evernote.com/l/AZYrwML_MgJNNb1uSj7uK2ptcPCGXuTujI0B/image.png)

### Launching CodeBox from outside of the Dashboard

Usually, you would want to launch the CodeBox while not using the Dashboard, but using our API (directly or by using one of the Syncano's libraries).
While doing so, you can also pass the payload.

Here's an example API call in cURL

{% highlight bash lineanchors %}
curl -X POST \
-H "X-API-KEY: ACCOUNT_KEY" \
-d payload='{"name": "John"}'\
"https://api.syncano.io/v1/instances/INSTANCE_NAME/codeboxes/CODEBOX_ID/run/"
{% endhighlight %}

with my Account Key, instance name and CodeBox id, it would look like that

{% highlight bash lineanchors %}
curl -X POST \
-H "X-API-KEY: 1f6cd67a4da883a23e87a086e192d6a3eb775e85" \
-d payload='{"name": "John"}'\
"https://api.syncano.io/v1/instances/shy-wildflower-5156/codeboxes/1/run/"
{% endhighlight %}

Now you can try to modify the code, pass more data in the payload and see what else can you do with it!

# Summary
 
That's it! As you could see, the concept of a CodeBox is really simple - you write your own, test it, and run it. 
At the same time it allows you to create some pretty powerful functionalities, and we can't wait to see what you will develop!

In the next part, we you will learn more about running your codebox on a schedule (e.g. every 5 minutes or on Thursdays at 9am) and about Triggers - executing your code when objects in chosen class are created, updated and deleted.

Mail us your CodeBoxes and ideas at [blog@syncano.com](blog@syncano.com) and most interesting use cases we will put on our blog and will send some swag to the authors :)  
