---
layout: post
title: Data at the Speed of Life
date: 2015-09-10 10:00:00
author: mariusz
categories: ['syncano']
image: /public/blue-background.png
share_image: /public/blue-background.png
image_height: 450px
summary: "One of the things I always struggled with when creating mobile apps, was the real-time aspect of them -- almost always nonexistent."
keywords: 'Syncano, CodeBox, code, run, backend, baas, nodejs, python, ruby'
seo_description: "real-time, channels, sync"
---

One of the things I always struggled with when creating mobile apps, was the real-time aspect of them -- almost always nonexistent.

Even now, a lot of apps you use daily still require you to manually refresh the data in order to get the new content. Even if they update in the background, it's still not in real time. If it was, who would need the pull-to-refresh gesture?

## How the real-time works

Ideally, you would like to give your user updates instantly. That is really hard if all you have is an API endpoint that gives you data back whenever you request it.

You could try to simulate the real-time by pinging your servers on a schedule, such as every minute. Or, to make it better, every 30 seconds. Or every 5 seconds. But all you're really getting is high CPU usage, high battery usage, and angry users who did not ask to have their battery drained while using your news app for only 5 minutes.

## Solution?

Some apps take advantage of platform-specific notifications systems (e.g., Apple's Push Notification system - APN, or Google's Cloud Messaging - GCM).

And, it actually works. However, it requires you to handle the server-side logic of it differently for different client devices, gathering unique identifiers for devices and adding an extra layer of complexity inside your app.

Not to mention -- if your app is running in the environment that doesn't support one of those systems (web app anyone?), you're out of luck.

## Working Solution

That's why we want you to stop wasting your time on reimplementing the same “almost real-time” capabilities in every single one of your apps.

When using Syncano, you have a great flexibility in creating your data structures (more on that [here](link to previous post on Classes)). Even better -- all that data can be easily synced between devices by using our Channels feature.

How does it work? It's really simple -- we'll use a Todo app as an example.

When creating an object, next to setting its normal properties -- such as title, description, completion state, category, etc. -- you can also set a Channel, where all notifications about this object will go. After an Object’s creation, its every update and deletion will be passed there. All you have to do to get them back, in real-time, is to subscribe to it.

## Example

Here, we'll show you how quickly you can set up Channels usage for your app.

* Log in to your Dashboard under [dashboard.syncano.io](https://dashboard.syncano.io)
* Choose your instance (or [add a new one](http://docs.syncano.com/docs/getting-started-with-syncano#adding-an-instance) if you don't have one yet)
* Create a new Channel
* Name it (e.g., `todo-list`) and set `Other permissions` to subscribe

![Adding new channel](/public/blog/Add_channel_01.png)

Now, we will move to coding. As an example, we're going to use Swift.

Start from creating a Channel object and subscribing to it.

{% highlight objc lineanchors %}
let channel : SCChannel = SCChannel(name: "todo-list", andDelegate: self)
channel.subscribeToChannel()
{% endhighlight %}

Next, implement the delegate protocol function that will be called every time there's an incoming message.

{% highlight objc lineanchors %}
extension ViewController : SCChannelDelegate {
    func chanellDidReceivedNotificationMessage(notificationMessage: SCChannelNotificationMessage!) {
    	// action will hold information about type of object change
        switch(notificationMessage.action) {
        case .Create:
            self.addItemFromMessage(notificationMessage)
        case .Delete:
            self.deleteItemFromMessage(notificationMessage)
        case .Update:
            self.updateItemFromMessage(notificationMessage)
        default:
            break
        }
    }
}
{% endhighlight %}

Create a Todo object to see if it all works.

{% highlight objc lineanchors %}
let todo = Todo()
todo.isCompleted = false //it's a new todo so it's not completed yet
todo.title = "Get milk"
todo.description = "Buy 1 gallon of whole milk"
todo.channel = "todo-list" //use channel name you created before
todo.saveWithCompletionBlock { error in
	//handle error
}
{% endhighlight %}

After the Todo object was saved, your `chanellDidReceivedNotificationMessage` function should have been called, with notification message object holding info about the new object.

It also works when you update the object:

{% highlight objc lineanchors %}
let todo = ... //todo chosen by user to be updated
todo.title = "Get more milk!"
//notice we don't need to pass the channel again - we only do so on object creation
todo.saveWithCompletionBlock { error in
	//handle error
}
{% endhighlight %}

Or when you delete it:

{% highlight objc lineanchors %}
let todo = ... //todo chosen by user to be deleted
todo.deleteWithCompletion { error in
	//handle error
}
{% endhighlight %}

As you can see, adding real-time features to your app requires you to add only a few extra lines of code. And, if you decide you don't need it after all, you can easily turn it off.

## What's next

On top of using Channels, which are a generic place for all messages, you can also decide to use Channel Rooms -- which are more private, and no one else will be able to see the data in there (unless you share the room name with them).

You can also use Channels to send your own custom messages, or to see the Channel message history. If you'd like to learn more, I encourage you to take a look at our docs on [Real-Time Communication](http://docs.syncano.com/docs/realtime-communication).

If you have any questions, mail us at [support@syncano.com](mailto:support@syncano.com).

I hope you found this information useful. Be sure to follow [@syncano](http://twitter.com/syncano) on Twitter and give us a shout @syncano if you liked it!
