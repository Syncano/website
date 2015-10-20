---
layout: post
title: Create an iOS Chat App using JSQMessagesViewController – Part 1
date: 2015-10-20 13:00:00
author: mariusz
categories: ['syncano', 'iOS', 'Swift']
image: /assets/images/home-support-bg.png
share_image: /assets/images/home-support-bg.png
image_height: 450px
summary: "In this tutorial, I'm going to show you how easy it is to create a simple chat app in iOS (using Swift and Syncano). We'll start with the basics -- sending and receiving messages, then storing them on a server, and then we will move on to the topics of using user accounts, authentication, etc."
keywords: 'Syncano, iOS, Swift, Chat, Real-Time, Channels'
seo_description: "Syncano, iOS, Swift, Chat, Real-Time"
---

In this tutorial, I'm going to show you how easy it is to create a simple chat app in iOS (using Swift and Syncano). We'll start with the basics -- sending and receiving messages, then storing them on a server, and then we will move on to the topics of using user accounts, authentication, etc.

We will use Syncano and its iOS library for the backend side, and JSQMessagesViewController library for the frontend.

In part 1, we'll only cover creating a new project and adding `JSQMessagesViewController` to it (along with showing some demo messages). In part 2, we will add storing data on the server and real-time updates (receiving new messages as soon as they are visible on the server, without a need to refresh). Finally, in part 3, we will expand the app with user auth -- registration, login and proper display of the message owner.

## 1. Creating a new project

First, you'll need to create a new XCode project. Open XCode and choose

`File -> New -> Project`

from the top menu (or press ⇧⌘N). When asked about the application type, choose `Single View Application` and then click Next.

Enter SyncanoChat as your product name and pick Swift as your language and then click Next. Choose where to save your project and confirm with `Create`.

## 2. Adding CocoaPods

To add [Syncano iOS Library](https://github.com/syncano/syncano-ios) and [JSQMessagesViewController](https://github.com/jessesquires/JSQMessagesViewController) to your project, you will need to use [CocoaPods](http://cocoapods.org/about).

### 2.1 Installing CocoaPods

If you don't have CocoaPods yet, install it by opening Terminal and typing:

{% highlight bash lineanchors %}
sudo gem install cocoapods
{% endhighlight %}

type your password, hit `Enter` and wait until CocoaPods are installed.

### 2.2 Adding libraries

Open Terminal, if you haven't already done so, and navigate to the folder with your newly created .xcodeproj file, e.g., by typing:

{% highlight bash lineanchors %}
cd ~/path/to/my/project/SyncanoChat
{% endhighlight %}

Initialize CocoaPods:

{% highlight bash lineanchors %}
pod init
{% endhighlight %}

Edit Podfile by typing in Terminal:

{% highlight bash lineanchors %}
open Podfile
{% endhighlight %}

Now add missing lines with the libraries (between `target 'SyncanoChat' do` and `end`) and uncomment line with `use_frameworks!` or just replace the content of the file with:

{% highlight ruby lineanchors %}
# Uncomment this line to define a global platform for your project
# platform :ios, '8.0'
# Uncomment this line if you're using Swift
use_frameworks!

target 'SyncanoChat' do
pod 'syncano-ios'
pod 'JSQMessagesViewController'

end

target 'SyncanoChatTests' do

end

target 'SyncanoChatUITests' do

end
{% endhighlight %}

Save the file, close the text editor (we won't be changing this file anymore), and write in Terminal:

{% highlight bash lineanchors %}
pod install
{% endhighlight %}

Once this process is finished, close XCode and open the Workspace file:

{% highlight bash lineanchors %}
open SyncanoChat.xcworkspace
{% endhighlight %}

Build your project to make sure everything is installed correctly!

## 2.3 Adding an Objective-C bridging header

This step shouldn't be needed, if you uncomennted `use_frameworks!` in your Podfile. If you did that, you may proceed to step 3.

If for some reason you cannot use the `use_frameworks!` feature of CocoaPods (dynamic libraries) and/or you prefer to work with static libraries, you will need to add a bridging header.

To do that, select:

`File -> New -> File` 

from the top menu (or press ⌘N).

Choose Cocoa Class, click Next, type whatever you want for a class name (we will not be using it again later), e.g., Test, switch the language to Objective-C and then click `Next`.

When asked `Would you like to configure an Objective-C bridging header?` click `Yes`.

Create a file in the default location. Once the files are created, select them from the left menu in Xcode and delete them.

When asked `Do you want to move the 2 selected files to the Trash, or only remove the references to them?` choose `Move to Trash`.

Notice that next to the temporary class, XCode also created a bridging header named `SyncanoChat-Bridging-Header.h`. Open this file and add inside:

{% highlight javascript lineanchors %}
#import <Syncano.h>
#import <JSQMessagesViewController/JSQMessages.h>
{% endhighlight %}

Save the file and build the project again to see if it compiles properly.
From now on, you can use both libraries in your Swift code!

## 3. Message Controller

### 3.1 Subclass JSQMessagesViewController

Now you're all set to start using JSQMessagesViewController. From XCode's left menu, open `ViewController.swift`.

As you can see, it's currently a subclass of `UIViewController`. Change it to `JSQMessagesViewController`, so it looks like:

{% highlight javascript lineanchors %}
import UIKit

class ViewController: JSQMessagesViewController {
//...
// rest of the class
//...
}
{% endhighlight %}

If you didn't use the bridging header, you will need to add imports here, below the `UIKit`:

{% highlight javascript lineanchors %}
import UIKit
import JSQMessagesViewController
import syncano_ios
{% endhighlight %}

Try to build your project now, to make sure that XCode can find all files and that it recognizes `JSQMessagesViewController` class.

### 3.2 Add some properties

Now, we will add a few variables, to let us handle the storing of messages and the app UI:

* messages -- to store messages sent and received. Because messages will be added every time we send or receive something, it will be a variable
* incomingBubble -- required by JSQMessagesViewController; defines the background under incoming messages; since we won't be modifying it, it will be a constant
* outgoingBubble -- required by JSQMessagesViewController; defines background under outgoing messages; since we won't be modifying it, it will be a constant

Add all of these variables before the viewDidLoad implementation:

{% highlight javascript lineanchors %}
class ViewController: JSQMessagesViewController {
    
    let incomingBubble = JSQMessagesBubbleImageFactory().incomingMessagesBubbleImageWithColor(UIColor(red: 10/255, green: 180/255, blue: 230/255, alpha: 1.0))
    let outgoingBubble = JSQMessagesBubbleImageFactory().outgoingMessagesBubbleImageWithColor(UIColor.lightGrayColor())
    var messages = [JSQMessage]()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
{% endhighlight %}

### 3.3 Add test messages

To test our app before we add Syncano to it, let’s add some demo messages.

Before we do that, add a method at the bottom of the implementation of your `ViewController`:

{% highlight javascript lineanchors %}
func reloadMessagesView() {
   self.collectionView?.reloadData()
}
{% endhighlight %}

We will use it to reload messages, so that we can hide implementation of reloading from other places in our code.

Now, add the following class extension at the bottom of your `ViewController.swift` file:

{% highlight javascript lineanchors %}
//MARK - Setup
extension ViewController {
    func addDemoMessages() {
        for i in 1...10 {
            let sender = (i%2 == 0) ? "Server" : self.senderId
            let messageContent = "Message nr. \(i)"
            let message = JSQMessage(senderId: sender, displayName: sender, text: messageContent)
            self.messages += [message]
        }
        self.reloadMessagesView()
    }
    
    func setup() {
        self.senderId = UIDevice.currentDevice().identifierForVendor?.UUIDString
        self.senderDisplayName = UIDevice.currentDevice().identifierForVendor?.UUIDString
    }
}
{% endhighlight %}

We also added the function `setup()` which sets `senderId` and `senderDisplayName` to our device unique identifier -- they are required to be defined by the `JSQMessagesViewController` and will help us distinguish between messages coming from other people and messages sent by us. 

Make sure we actually call these functions from `viewDidLoad` method:

{% highlight javascript lineanchors %}
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        self.setup()
        self.addDemoMessages()
    }
{% endhighlight %}

Now you can try to run your app. It won't show anything interesting yet, but we're ready to display the demo messages we just added.

### 3.4 Implement `JSQMessagesViewController` protocols

We have to implement a few more functions, the first of which are required by the JSQMessagesCollectionViewDataSource protocol.

At the end of `ViewController.swift` file, add the following class extension:

{% highlight javascript lineanchors %}
//MARK - Data Source
extension ViewController {
    
    override func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return self.messages.count
    }
    
    override func collectionView(collectionView: JSQMessagesCollectionView!, messageDataForItemAtIndexPath indexPath: NSIndexPath!) -> JSQMessageData! {
        let data = self.messages[indexPath.row]
        return data
    }
    
    override func collectionView(collectionView: JSQMessagesCollectionView!, didDeleteMessageAtIndexPath indexPath: NSIndexPath!) {
        self.messages.removeAtIndex(indexPath.row)
    }
    
    override func collectionView(collectionView: JSQMessagesCollectionView!, messageBubbleImageDataForItemAtIndexPath indexPath: NSIndexPath!) -> JSQMessageBubbleImageDataSource! {
        let data = messages[indexPath.row]
        switch(data.senderId) {
        case self.senderId:
            return self.outgoingBubble
        default:
            return self.incomingBubble
        }
    }
    
    override func collectionView(collectionView: JSQMessagesCollectionView!, avatarImageDataForItemAtIndexPath indexPath: NSIndexPath!) -> JSQMessageAvatarImageDataSource! {
        return nil
    }
}
{% endhighlight %}

The functions we just added tell the controller:

* how many messages we have (we return message count inside our array)
* which message to display where
* what to do when a message is deleted (delete if from messages array)
* which bubble to choose (outgoing if we are the sender, and incoming otherwise)
* what to use as an avatar (for now we'll return nil and will not show avatars yet)

You can build the project now, and it will display our demo messages! If you try to click buttons on the bottom toolbar, unfortunately, it will cause our app to crash.

### 3.5 Handle button pressed events

To keep our app from crashing, we need to implement two more functions, which will handle pressing on the media button on the left, and the `Send` button on the right. Add one more class extension at the end of your `ViewController.swift` file:

{% highlight javascript lineanchors %}
//MARK - Toolbar
extension ViewController {
    override func didPressSendButton(button: UIButton!, withMessageText text: String!, senderId: String!, senderDisplayName: String!, date: NSDate!) {
        let message = JSQMessage(senderId: senderId, senderDisplayName: senderDisplayName, date: date, text: text)
        self.messages += [message]
        self.finishSendingMessage()
    }
    
    override func didPressAccessoryButton(sender: UIButton!) {
        
    }
}
{% endhighlight %}

When someone presses the `Send` button, we will add a typed message to the `messages` array and update the interface. Also -- for now -- our implementation of `didPressAccessoryButton(sender: UIButton!)` will do nothing, but it will prevent the app from crashing.

## Summary

That's it! You now have a fully functioning chat app interface, allowing you to send messages and see ones coming from others.

In part 2, we will add communication with Syncano -- storing messages on our servers, along with the ability for real-time sync. 

You can find this project, and all the code from this part of our demo, on [GitHub](https://github.com/lifcio/SyncanoChat/tree/v4_Part_01).

If you have any troubles implementing the app, shoot me a tweet [@lifcio](https://twitter.com/lifcio) -- I look forward to hearing from you!

