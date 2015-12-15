---
path: '/blog/get-instant-notifications-syncano-ios/'
layout: post
title: How to Get Instant Notifications on iOS
description: "Within minutes, you can create dynamic iOS apps on Syncano that instantly reflect changes. Here’s a demo app and a quick guide so you can get started."
date: 2014-08-14 11:21:29
author: mariusz
categories: ['API', 'How Tos', 'iOS', 'Real-Time Sync']
image: data.png
summary: "Within minutes, you can create dynamic iOS apps on Syncano that instantly reflect changes in data by 'subscribing' to changes on Syncano’s Sync Server. Here’s a demo app and a quick guide so you can get started."
---
Within minutes, you can create dynamic iOS apps on Syncano that instantly reflect changes in data by “subscribing” to changes on Syncano’s Sync Server. Here’s a demo app and a quick guide so you can get started. 

## Introduction to Syncano 

Syncano offers many [features](http://www.syncano.io/features/) such as data modeling, an Admin GUI, a real-time sync API, data storage, and more. In this example, we'll focus on the latter two features - storing and syncing data. 

## Data Storage 

To store data we use _DataObjects_, which are basically containers for a set of properties. We've already created a set of keys like _Title_, _Text_, or _Link_ for each Data Object, which can store text values. 

Each object can be given a state (_Pending_, _Moderated_ or _Rejected_), something useful if you want to moderate incoming data before displaying it to your users e.g. inside an app or on a big screen. 

You can also add an image to the object, and Syncano will automatically make a thumbnail of it for you. Whenever you download the object, you will receive urls to both the image and its thumbnail. 

There are also special fields (_Data1_, _Data2_ and _Data3_) which can hold integer values - you can filter and sort your data with these fields. You can also sort your data by its creation date and the date of its last update, and you can filter it by the folder it's in. 

![DataObject_01](DataObject_01.png) 

You can also add a number of additional fields if the default ones don't meet your needs. If you're adding data on the Admin GUI, press the _Add more data_ button and additional fields will appear. 

![DataObject_02](DataObject_02.png)

## Real-time sync

Storing data is one thing, but you might also want to sync it across multiple apps and devices. Real-time communication on Syncano comes in two flavors (what we call notification/subscription processing): 

- Notifications: sending messages (defined basically as a JSON) to other apps/devices listening without storing the messages themselves. Listeners are notified instantly about messages when they are received. 
- Subscriptions: asking our server to deliver information to you in real-time whenever there is a change on the server side. This could be a new object that was added or an old one that was changed or deleted – our Sync Server will instantly notify you. 

Syncano's Sync Server uses a [stateful connection](http://stackoverflow.com/questions/5436069/what-are-the-differences-between-stateless-and-stateful-systems-and-how-do-they) and gives you the ability to make API requests inside a TCP connection.

## Getting Started

Below are simple instructions on creating a real-time synced iOS app on Syncano. You can also download the full demo app [here](https://github.com/lifcio/syncserver-ios-test).

## 1\. Install CocoaPods

Open _Terminal_ and type:

```javascript
sudo gem install cocoapods
```

## 2\. Add syncano's iOS Library through CocoaPods

In _Terminal_, navigate to the folder with the XCode project that you'd like to real-time sync, ie. 

```javascript 
cd ~/syncano-sync-server-test/
```

where _~/syncano-sync-server-test/_ is the actual path to the project. 

Then, write in _Terminal_:

```javascript
ls
``` 

and make sure you see your _.xcodeproj_ file.

Then, type:
 
```javascript
pod init
```

When the command is finished, you should see a new file named _Podfile_ in your project's folder. Open it in your favorite text editor and add following line under the target and end keywords:

```javascript
pod 'syncano-ios'
```

Your _Podfile_ should now look more less like this:

```javascript
target "My-Application-Name" do
    pod 'syncano-ios'
end
```

Close the _Podfile_, go back to _Terminal_ and type:

```javascript
pod install
```

When the command is finished, make sure you open (and from now on only use) the newly created _.xcworkspace_ file, NOT the _.xcodeproj_ file.

## 3\. Add Sync Server to your source code

For this example, we'll assume you will be adding the Syncano Sync Server file to an instance of UIViewController. If you want to add it somewhere else, use the below as a guide - you will be taking the same essential steps.

Include Syncano's header files by adding them at the top of your implementation (_.m_) file:

```javascript
#import <Syncano.h>
#import <SyncanoSyncServer.h>
```

In the interface of your class, add the following property:

```javascript
property (strong, nonatomic) SyncanoSyncServer *syncServer;
```

Initialize the _syncServer_ property (you can add this line e.g. to your _viewDidLoad_ method):

```javascript
self.syncServer = [SyncanoSyncServer syncanoSyncServerForDomain:@"PUT-YOUR-DOMAIN-HERE" apiKey:@"PUT-YOUR-API-KEY-HERE"];
```

Set yourself as a delegate of the Sync Server object after initializing it:

```javascript
self.syncServer.delegate = self;
```

Connect to Sync Server:

```javascript
NSError *error = nil;
[self.syncServer connect:&amp;error];
```

Subscribe to changes in your chosen collection (we recommend you add it to the implementation of the method mentioned below - _syncServerConnectionOpened:_): 

```javascript
SyncanoParameters_Subscriptions_SubscribeCollection *params = [[SyncanoParameters_Subscriptions_SubscribeCollection alloc] initWithProjectId:@"3800" collectionId:@"12061" context:@"connection"];
[self.syncServer sendRequest:params callback:^(SyncanoResponse *response) {
NSLog(@"Subscription response: %@",response);
}];
```

Add information about implementing _SyncanoSyncServerDelegate_:

```javascript
@protocol SyncanoSyncServerDelegate;
@interface MyViewController : UIViewController <SyncanoSyncServerDelegate>
```

Implement _SyncanoSyncServerDelegate_ required methods by adding this to your implementation file:

```javascript
- (void)syncServerConnectionOpened:(SyncanoSyncServer *)syncServer {
  NSLog(@"Sync Server Connection opened");
  SyncanoParameters_Subscriptions_SubscribeCollection *params = [[SyncanoParameters_Subscriptions_SubscribeCollection alloc] initWithProjectId:@"3800" collectionId:@"12061" context:@"connection"];
  [self.syncServer sendRequest:params callback:^(SyncanoResponse *response) {
    NSLog(@"Subscription response: %@",response);
  }];
}

- (void)syncServer:(SyncanoSyncServer *)syncServer connectionClosedWithError:(NSError *)error {
  NSLog(@"Sync Server Error: %@", error);
}
```

Add desired optional protocol methods to receive notification and subscription information.
E.g. to receive messages about new objects being added to Syncano, implement following method:

```javascript
- (void)syncServer:(SyncanoSyncServer *)syncServer notificationAdded:(SyncanoData *)addedData {
NSLog(@"Added data: %@",addedData);
}
```

That's it. From now on, you'll be able to receive information every time a new object is created.

## Add the GUI

To show new objects on the screen, you can add a label that will contain the title of the last created object.

Add the label property to your class in its interface:

```javascript
@property (strong, nonatomic) UILabel *label;
```

Initialize the label and add it to your view in the _viewDidLoad_ method:

```javascript
self.label = [[UILabel alloc] initWithFrame:CGRectMake(0, 50, CGRectGetWidth(self.view.bounds), 50)];
self.label.textAlignment = NSTextAlignmentCenter;
[self.view addSubview:self.label]; 
```

Add the following lines to the _syncServer:notificationAdded_ method (because protocol methods are invoked on an internal thread, you'll have to make sure you dispatch any UI code to the main thread):

```javascript
- (void)syncServer:(SyncanoSyncServer *)syncServer notificationAdded:(SyncanoData *)addedData {
NSLog(@"Added data: %@", addedData);
dispatch_async(dispatch_get_main_queue(), ^{
self.label.text = addedData.title;
});
}
```

You'll now see title of the last added object on your device screen changing in real-time.

## Testing the app

Open the [Syncano admin GUI](http://login.syncano.com) in your browser window, and launch the app on your computer. in your browser window and launch the app on your computer using either the iOS Simulator or your iOS device (make sure both are connected to the Internet). 

Choose the project and collection you entered in XCode. 

![ProjectsCollections_01](ProjectsCollections_01.png) 

Within the collection, choose the folder you want to add Data Objects to. Since we subscribed to changes in the whole collection, it doesn't matter which folder we will choose - we'll receive notifications either way. 

![Folders_01](Folders_01.png) 

Within the project and collection you entered in Xcode, add a new Data Object. 

![Folders_02](Folders_02.png) 

In the Title field, type “Hello world!” and hit _Save_. 

![DataObject_03](DataObject_03.png) 

The title of the new object should now instantly show in your app.

## Monitoring your App

Now that you've created a successful real-time application, how do you monitor it's performance? For the answer, check out our next tutorial in this series, ["How to Monitor Your App's Performance."](http://www.syncano.io/blog/monitor-app-performance-crittercism/)
