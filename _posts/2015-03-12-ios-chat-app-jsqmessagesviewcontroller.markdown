---
layout: post
title: Create an iOS Chat App using JSQMessagesViewController – Part 1
date: 2015-03-12 11:21:29
author: mariusz
summary: "In this tutorial, I’m going to show you how easy it is to create a simple chat app (using Swift) on Syncano. We’ll start with the basics, and then add user accounts, user profiles, etc. in Part 2."
categories: ['javascript', 'Data Modeling']
share_image: /public/create-ios-chat-app.png
---

<p>In this tutorial, I'm going to show you how easy it is to create a simple chat app (using Swift) on Syncano. We'll start with the basics, and then add user accounts, user profiles, etc. in Part 2.<!--more--></p>

<h2>1. Creating a new project</h2>

<p>First, you'll need to create new XCode project by opening XCode and choosing</p>

<code>File -> New -> Project
</code>

<p>from the top menu. When asked about the application type, choose <em> Single View Application</em> and click <em>Next</em>.</p>

<p>Enter <em>SyncanoChat</em> as your product name and pick Swift as your language. You can uncheck <em>Use Core Data</em> at the bottom, since we won't be using it in this app.</p>

<h2>2. Adding CocoaPods</h2>

<p>At Syncano, we're big fans of <a href="http://cocoapods.org/about">CocoaPods</a>. In this tutorial, you'll use it to add the <a href="https://github.com/Syncano/syncano-ios">syncano-ios</a> library and <a href="https://github.com/jessesquires/JSQMessagesViewController">JSQMessagesViewController</a>, which you'll use to display chat messages.</p>

<h3>3.1 Installing CocoaPods</h3>

<p>If you don't have CocoaPods yet, install it by opening <em>Terminal</em> and typing</p>

{% highlight javascript lineanchors %}$ sudo gem install cocoapods
{% endhighlight %}

<h3>3.2 Adding libraries</h3>

<p>Open <em>Terminal</em> if you haven't already done so, and navigate to the folder with your newly created <em>.xcodeproj</em> file, e.g. by typing</p>

{% highlight javascript lineanchors %}$ cd ~/path/to/my/project/SyncanoChat
{% endhighlight %}

<p>Initialize CocoaPods by typing</p>

{% highlight javascript lineanchors %}$ pod init
{% endhighlight %}

<p>Open <em>Podfile</em> to edit in your text editor by typing in <em>Terminal</em>:</p>

{% highlight javascript lineanchors %}$ open Podfile
{% endhighlight %}

<p>You can now add missing lines with the libraries, or just replace the content of the file with this:</p>

{% highlight javascript lineanchors %}target 'SyncanoChat' do

pod 'syncano-ios'
pod 'JSQMessagesViewController'  

end

target 'SyncanoChatTests' do

end
{% endhighlight %}

<p>Save the file, close the text editor (we won't be changing the file anymore), and write in Terminal:</p>

{% highlight javascript lineanchors %}$ pod install
{% endhighlight %}

<p>Once this process is finished, close XCode and open the Workspace file:</p>

{% highlight javascript lineanchors %}$ open SyncanoChat.xcworkspace
{% endhighlight %}

<p>Build your project to make sure everything is installed correctly!</p>

<h2>4. Adding an Objective-C bridging header</h2>

<p>To use libraries written in Obj-C with Swift, you'll need to add a bridging header. Fortunately, it's not very complicated. Just go into</p>

<code>File -> New -> File
</code>

<p>Choose <em>Cocoa Class</em>, click <em>Next</em>, type whatever class name (we will not be using it again later), e.g. <em>Test</em>, switch the language to <em>Objective-C</em> and click next.</p>

<p>When asked <em>Would you like to configure an Objective-C bridging header?</em> click <em>Yes</em>.</p>

<p>Create a file in the default location. Once the files are created, select them from the left menu in Xcode and delete them.</p>

<p>When asked <em>Do you want to move the 2 selected files to the Trash, or only remove the references to them?</em> choose <em>Move to Trash</em>.</p>

<p>Notice that next to the temporary class, XCode also created a bridging header named <em>SyncanoChat-Bridging-Header.h</em>. Open this file and add this inside it:</p>

{% highlight javascript lineanchors %}#import <Syncano/Syncano.h>
#import <Syncano/SyncanoSyncServer.h>
#import <JSQMessagesViewController/JSQMessages.h>
{% endhighlight %}

<p>Save the file and build the project again to see if compiles properly.</p>

<p>From now on, you can use both libraries in your Swift code!</p>

<h2>5. Message Controller</h2>

<h3>5.1 Subclass JSQMessagesViewController</h3>

<p>Now you're all set to start using JSQMessagesViewController. From XCode's left menu, open <em>ViewController.swift</em>.</p>

<p>As you can see, it's currently is a subclass of <em>UIViewController</em>. Change it to <em>JSQMessagesViewController</em>, so it looks like</p>

{% highlight javascript lineanchors %}import UIKit

class ViewController: JSQMessagesViewController {
//...
// rest of the class
//...
}
{% endhighlight %}

<h3>5.2 Add variables</h3>

<p>Now, add few variables:</p>

<ul>
<li><em>userName</em> - to identify the user using the app. Since you'll want your user to have the ability to change his/her name, leave it as a variable.</li>
<li><em>messages</em> - to store messages sent and received. Because messages will be added every time we send or receive something, it will be also a variable.</li>
<li><em>incomingBubble</em> - required by JSQMessagesViewController; defines the background under incoming messages</li>
<li><em>outgoingBubble</em> - required by JSQMessagesViewController; defines background under outgoing messages</li>
</ul>


<p>Add those variables before the <em>viewDidLoad</em> implementation.</p>

{% highlight javascript lineanchors %}class ViewController: JSQMessagesViewController {

    var userName = ""
    var messages = [JSQMessage]()
    let incomingBubble = JSQMessagesBubbleImageFactory().incomingMessagesBubbleImageWithColor(UIColor(red: 10/255, green: 180/255, blue: 230/255, alpha: 1.0))
    let outgoingBubble = JSQMessagesBubbleImageFactory().outgoingMessagesBubbleImageWithColor(UIColor.lightGrayColor())

//...
}
{% endhighlight %}

<h3>5.3 Add test messages</h3>

<p>To test our app, it would be good to have some messages. Lets add them in the <em>viewDidLoad</em> function.</p>

{% highlight javascript lineanchors %}override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    self.userName = "iPhone"
    for i in 1...10 {
        var sender = (i%2 == 0) ? "Syncano" : self.userName
        var message = JSQMessage(senderId: sender, displayName: sender, text: "Text")
        self.messages += [message]
    }
    self.collectionView.reloadData()
    self.senderDisplayName = self.userName
    self.senderId = self.userName
}
{% endhighlight %}

<h3>5.4 Implement protocols</h3>

<p>For testing, set your user name to <em>iPhone</em> and the other user name to <em>Syncano</em>. We'll start by adding 10 messages, with 50% of the messages sent from us (<em>iPhone</em>) and 50% of messages sent from the server (<em>Syncano</em>). At the end we'll reload the data to make sure it's displayed properly.</p>

<p>We also have to implement a few more functions, the first of which are required by the <em>JSQMessagesCollectionViewDataSource</em> protocol.</p>

<p>Add the following code before the end of your class:</p>

{% highlight javascript lineanchors %}
override func collectionView(collectionView: JSQMessagesCollectionView!, messageDataForItemAtIndexPath indexPath: NSIndexPath!) -> JSQMessageData! {
    var data = self.messages[indexPath.row]
    return data
}

override func collectionView(collectionView: JSQMessagesCollectionView!, messageBubbleImageDataForItemAtIndexPath indexPath: NSIndexPath!) -> JSQMessageBubbleImageDataSource! {
    var data = self.messages[indexPath.row]
    if (data.senderId == self.senderId) {
        return self.outgoingBubble
    } else {
        return self.incomingBubble
    }
}

override func collectionView(collectionView: JSQMessagesCollectionView!, avatarImageDataForItemAtIndexPath indexPath: NSIndexPath!) -> JSQMessageAvatarImageDataSource! {
    return nil
}

override func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
    return self.messages.count;
}
{% endhighlight %}

<p>This code defines the sender display name and ID. For both we're using <em>self.userName</em>, which we just added. Then, we're pointing which messages to show at which position. And finally, we're defining which message bubble image to use when - if the sender ID is the same as ours, we know the message came from us, so we use <em>outgoingBubble</em>. If the ID is different from ours, we know it's not sent by us, so we use <em>incomingBubble</em>.</p>

<p>To keep our app from crashing, we need to implement one more function:</p>

{% highlight javascript lineanchors %}override func didPressSendButton(button: UIButton!, withMessageText text: String!, senderId: String!, senderDisplayName: String!, date: NSDate!) {
    var newMessage = JSQMessage(senderId: senderId, displayName: senderDisplayName, text: text);
    messages += [newMessage]
    self.finishSendingMessage()
}

override func didPressAccessoryButton(sender: UIButton!) {
}
{% endhighlight %}

<p>This will let us use the send message function of <em>JSQMessagesViewController</em>. For now, all this function will do is add a new message to the local messages array and refresh the view. But don't worry - we will revisit this later when we add Syncano to our app.</p>

<p>You probably noticed we also added a function that is called every time a user presses an accessory button. For now, we will leave it empty so a user who presses the button will not be able to attach any media files - basically to avoid crashing our app prematurely.</p>

<h2>6. Using Syncano</h2>

<p>Now, the exciting part - actually sending and receiving messages!</p>

<h3>6.1 Initializing Syncano</h3>

<p>For the chat app, we will need both Syncano and SyncServer objects. Lets define them at the beginning of our <em>ViewController</em> class.</p>

{% highlight javascript lineanchors %}
let syncano = Syncano(domain: "INSTANCE_NAME", apiKey: "API_KEY001122334455")
let syncServer = SyncanoSyncServer(domain: "INSTANCE_NAME", apiKey: "API_KEY001122334455")
let projectId = "1234"
let collectionId = "56789"
{% endhighlight %}

<p>Replace data above with your actual API Key, instance name, and project/collection IDs.</p>

<ul>
<li><a href="http://docs.syncano.com/v3.2.1/docs/instance-settings#api-keys">How to find your API Key</a></li>
<li><a href="http://docs.syncano.com/v3.2.1/docs/accessing-syncano">How to find your Instance name and project/collection ID</a></li>
</ul>


<h3>6.2 Downloading messages</h3>

<p>Now, instead of showing test messages, you'll want to show actual messages coming from Syncano. We'll do this by downloading the latest messages when the app starts in the <em>viewDidLoad</em> function. Notice we removed the code from before that added test messages:</p>

{% highlight javascript lineanchors %}
override func viewDidLoad() {
   super.viewDidLoad()
   self.userName = "iPhone"
   let params = SyncanoParameters_DataObjects_Get(projectId: projectId, collectionId: self.collectionId)
   self.syncano .dataGet(params, callback: { response in
      if let messages = response.data {
         for object in messages {
            let object = object as? SyncanoData
            if let senderId = object?.additional?["senderId"] as? String {
               let message = JSQMessage(senderId: senderId, displayName: senderId, text: object?.text)
               self.messages += [message]
         }
      }
   }
   self.finishReceivingMessage()
   })
   self.syncServer.delegate = self
   self.syncServer.connect(nil);
}
{% endhighlight %}

<p>Let's look at what we're doing here. First, we're defining parameters of the request we'll use to download data from Syncano - we need the project and collection ID we defined earlier. When those are ready, we pass them to the Syncano object and we receive a response with the latest objects/messages inside. We loop through all of them and add them to our messages list, but only if the message contains senderId.</p>

<p>Try running your app now. If your Syncano data doesn't contain any messages, the app should be empty.</p>

<h3>6.3 Sending messages</h3>

<p>We're ready to start sending messages to Syncano. To do this, we will need to change the <em>didPressSendButton</em> function, as well as add a new function that will actually communicate with Syncano and send our data there.</p>

<p>Replace the <em>didPressSendButton</em> function with:</p>

{% highlight javascript lineanchors %}
override func didPressSendButton(button: UIButton!, withMessageText text: String!, senderId: String!, senderDisplayName: String!, date: NSDate!) {
   let newMessage = JSQMessage(senderId: senderId, displayName: senderDisplayName, text: text);
   self.sendMessageToSyncano(newMessage);
}
{% endhighlight %}

<p>and add the following function at the end of your class implementation:</p>

{% highlight javascript lineanchors %}func sendMessageToSyncano(message: JSQMessage) {
    let params = SyncanoParameters_DataObjects_New(projectId: projectId, collectionId: collectionId, state: "Pending")
    params.text = message.text
    params.additional = ["senderId" : message.senderId]

    self.syncano.dataNew(params, callback: { response in
        if response.responseOK {
            self.messages += [message]
        }
        self.finishSendingMessage()
    })
}
{% endhighlight %}

<p>So what does this all do? In the modified version of the <em>didPressSendButton</em> function, we're just creating a message object and passing it to the newly added <em>sendMessageToSyncano</em>. There, we create parameters of data that we want to send to Syncano - by setting text and senderId parameters.</p>

<p>Note that because the <em>senderId</em> name is defined as a string, you can change it to any other name if you'd like. But if you do that, remember to also change the name in the <em>viewDidLoad</em> function!</p>

<h3>6.4 Real-time messaging!</h3>

<p>We're almost there - the user is already able to send new messages and download the latest messages on app start. But what about messages other users will send when the app is already running? We could try downloading all new messages every once in a while, but that means important messages could be delayed. We have a solution - we'll use Syncano's SyncServer to get those messages in real-time!</p>

<p>We will start with setting ourselves as a SyncServer delegate and opening a SyncServer connection. Modify your class definition to match this following code:</p>

{% highlight javascript lineanchors %}class ViewController: JSQMessagesViewController, SyncanoSyncServerDelegate {
{% endhighlight %}

<p>At the end of your <em>viewDidLoad</em>, add these two lines of code:</p>

{% highlight javascript lineanchors %}self.syncServer.delegate = self
self.syncServer.connect(nil);
{% endhighlight %}

<p>You may have noticed that XCode complains that <em>Type ViewController does not conform to protocol SyncanoSyncServerDelegate</em>. We will fix that by adding a few functions at the end of our class implemention:</p>

{% highlight javascript lineanchors %}func syncServerConnectionOpened(syncServer: SyncanoSyncServer!) {
    self.subscribeToCollection()
}

func syncServer(syncServer: SyncanoSyncServer!, connectionClosedWithError error: NSError!) {
    self.syncServer.connect(nil);
}

func syncServer(syncServer: SyncanoSyncServer!, notificationAdded addedData: SyncanoData!, channel: SyncanoChannel!) {
   if let senderId = addedData.additional?["senderId"] as? String {
      let message = JSQMessage(senderId: senderId, displayName: senderId, text: addedData.text)
      self.messages += [message]
   }
   self.finishReceivingMessage()
}
{% endhighlight %}

<p>In the function informing about a closed connection, we simply try to connect again. This is useful in case we lose internet connection.</p>

<p>In the <em>syncServer(syncServer: notificationAdded channel:)</em> function, we do the same check as in <em>viewDidLoad</em>. If the message received has a <em>senderId</em>, we add it to our messages list. Otherwise, we discard it.</p>

<p>In <em>syncServerConnectionOpened</em>, we invoke the <em>subscribeToCollection</em> function, which we will add now. Paste following code at the end of your class implementation: </p>

{% highlight javascript lineanchors %}func subscribeToCollection() {
    let params = SyncanoParameters_Subscriptions_SubscribeCollection(projectId: projectId, collectionId: collectionId, context: "connection")
    self.syncServer.subscriptionSubscribeCollection(params) { response in
        //take care of errors here
        if (response.responseOK) {
        }
    }
}
{% endhighlight %}

<p>In the above code, we're subscribing to changes in the Collection by passing project and collection ID to the Syncano Sync Server. It's really simple, and that's all that's required from you.</p>

<p>Now run your app and send a few messages to see what happens!</p>

<h3>6.5 Fixing bugs</h3>

<p>You probably noticed every time you send a message to Syncano, it appears on your list twice - that's because you're adding it to your list when you send it, and then again whenever something changes on Syncano.</p>

<p>Let's fix that by changing the <em>syncServer(syncServer: notificationAdded: channel:)</em> function so that it adds messages to our list only if the message wasn't sent by our user.</p>

{% highlight javascript lineanchors %}
func syncServer(syncServer: SyncanoSyncServer!, notificationAdded addedData: SyncanoData!, channel: SyncanoChannel!) {
   if let senderId = addedData.additional?["senderId"] as? String {
      if senderId == self.senderId {
         return;
      }
      let message = JSQMessage(senderId: senderId, displayName: senderId, text: addedData.text)
      self.messages += [message]
   }
   self.finishReceivingMessage()
}
{% endhighlight %}

<p>That was pretty simple! It's enough to check if the <em>senderId</em> of incoming message is the same as ours. If it is - we simply discard the message. If it's not - we add it to our list.</p>

<h2>7. Finishing Up</h2>

<p>Before we finish part 1 of our tutorial, let's change one more thing. So far, we have been setting the user name manually - and for simplicity's sake we'll keep doing so. But if you wanted to share your chat app with your friends, you'd probably like all of your messages to be distinguished from one another - which is impossible if everyone has the same user name!</p>

<p>To fix that, we'll change the beginning of the <em>viewDidLoad</em> function by removing following line:</p>

{% highlight javascript lineanchors %}self.userName = "iPhone"
{% endhighlight %}

<p>and replacing it with:</p>

{% highlight javascript lineanchors %}if let savedUserName = NSUserDefaults.standardUserDefaults().stringForKey("userName") {
    self.userName = savedUserName
} else {
    self.userName = "user" + String(arc4random_uniform(UInt32.max))
    NSUserDefaults.standardUserDefaults().setObject(self.userName, forKey: "userName")
    NSUserDefaults.standardUserDefaults().synchronize()
}
{% endhighlight %}

<p>The above code first checks if there's any user name saved on our disk. If there's none, it generates a random number and combines it with the word <em>user</em>, so everyone ends with user name like <em>user1234566789</em>.</p>

<p>It's not the most elegant solution - we'd like our users to able to change their user names, have their own avatars and be able to upload images as well! So, in Part 2, we'll go over just how to add those functions with Syncano, plus do some UI tweaking.</p>

<p>First part of our demo you can find on <a href="https://github.com/lifcio/SyncanoChat">GitHub</a>.</p>

<p>As always, if you have any troubles implementing the app, don't hesitate to leave a comment or ask for help at <a href="mailto:support@syncano.com">support@syncano.com</a>.</p>

<p>Also, check out our new docs and let us know what you think!</p>

<ul>
<li><a href="http://docs.syncano.com/v3.2.1/docs/getting-started">Developer Manual Basics</a></li>
<li><a href="http://docs.syncano.com/v3.2.1/docs/ios-library">iOS Syncano Library Reference</a></li>
</ul>