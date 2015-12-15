---
path: '/blog/monitor-app-performance-crittercism/'
layout: post
title: How to Monitor Your App's Performance
description: "After building a successful real-time app with Syncano with out last tutorial, it’s time to make sure your app’s performance remains on top of its game."
date: 2014-10-02 11:21:29
author: mariusz
categories: ['How Tos', 'Info']
image: crittercism-syncano2.png
summary: "After building a successful real-time app with Syncano with out last tutorial, it’s time to make sure your app’s performance remains on top of its game. We recommend using Crittercism, which allows you to monitor your app performance and do things like prioritize issues, troubleshoot, and view performance trends."
---
[After building a successful real-time app with Syncano with out last tutorial](http://www.syncano.io/blog/get-instant-notifications-syncano-ios/), it’s time to make sure your app’s performance remains on top of its game. We recommend using [Crittercism](http://www.crittercism.com/solution-overview/), which allows you to monitor your app performance and do things like prioritize issues, troubleshoot, and view performance trends. 

There are three main features of Crittercism that we particularly like: Crash Reports, Breadcrumbs, and Network Endpoints. If your app crashes at any time, the next time it’s re-launched, Crittercism's Crash Report feature will record information on what exactly caused the crash in the first place, so you can find it on the server immediately and fix it. You can also see things like how many times the crash occurred and how many users were affected - features that are especially important when you need to prioritize your troubleshooting. Breadcrumbs are great because they allow you to see the sequence of events a user took before a crash happened. For joint use with Syncano or other integrations, Network Endpoints are particularly valuable - you can see how Syncano performs in your app, how fast it’s working/responding, etc. 

Here’s an example of how you use the Crittercism framework with the [demo app you created last month](http://www.syncano.io/blog/get-instant-notifications-syncano-ios/). You can download the full demo for this tutorial [here](https://github.com/lifcio/syncserver-ios-test-crittercism).

## Install the Crittercism Framework

Crittercism is available as a Pod, so you'll add the proper information to your existing Pods file. 1\. Paste following line into your Pods file so that it’s under the _pod 'syncano-ios’_ line:

<pre>    `pod 'CrittercismSDK'`</pre>

2\. In Terminal, run:

<pre>    `pod update`</pre>

The framework should now be installed and ready to use.

## Expand Your App

Before you use the Crittercism framework, you'll need to expand your existing app. 1\. Open the workspace where your project is located. Right click on the **syncserver-ios-test** group, choose **New File**, and under iOS select **Cocoa Touch** and **Objective-C class**. 2\. Name the class **SYNSecondViewController**, and as a subclass type **UIViewController** (if checked, uncheck field **Also create XIB file**). 3\. Open the **Main.storyboard** file. 4\. Drag and drop another view controller into the scene. Select the newly added view controller and set the custom class to **SYNSecondViewController** (use the third tab under the menu on the right-hand side). 5\. Add a button to the first view controller and name it **Second Screen**. 6\. While holding the CTRL, click and drag the button to the second screen. Release your mouse and choose **Modal** from the menu that appears next. 7\. Go into the **SYNSecondViewController.m** file and add method:

<pre>    `- (void)crashTheApp {
  [NSException raise:NSGenericException format:@"We're raising a test exception"];
}`</pre>

8\. Add the crash button programatically to your new screen by changing viewDidLoad so it looks like this:

<pre>    `- (void)viewDidLoad {
	[super viewDidLoad];
	// Change background color of the view, to cleary see when it appears
  self.view.backgroundColor = [UIColor lightGrayColor];

  //Create crash button and set its properties
  UIButton *crashButton = [UIButton buttonWithType:UIButtonTypeSystem];
  [crashButton setTranslatesAutoresizingMaskIntoConstraints:NO];
  [crashButton setTitle:@"CRASH!!!" forState:UIControlStateNormal];
  [crashButton addTarget:self action:@selector(crashTheApp) forControlEvents:UIControlEventTouchUpInside];
  crashButton.titleLabel.textAlignment = NSTextAlignmentCenter;
  [crashButton sizeToFit];
  //Add button to our view
  [self.view addSubview:crashButton];
  //Center button in its superview
  [self.view addConstraint:[NSLayoutConstraint constraintWithItem:crashButton
                                                        attribute:NSLayoutAttributeCenterX
                                                        relatedBy:NSLayoutRelationEqual
                                                           toItem:self.view
                                                        attribute:NSLayoutAttributeCenterX
                                                       multiplier:1.0
                                                         constant:0.0]];
  [self.view addConstraint:[NSLayoutConstraint constraintWithItem:crashButton
                                                        attribute:NSLayoutAttributeCenterY
                                                        relatedBy:NSLayoutRelationEqual
                                                           toItem:self.view
                                                        attribute:NSLayoutAttributeCenterY
                                                       multiplier:1.0
                                                         constant:0.0]];
}` </pre>

9\. Launch the app. 10\. Press the ‘Second Screen’ button on the first screen, and ‘CRASH!!!’ on the second screen to make sure the app crashes on command.

## Obtain Your Crittercism App ID

1\. Login to your Crittercism account and go to https://app.crittercism.com/developers. 2\. Choose **Register New App**. 3\. Name your app **syncserver-ios-test-crittercism**. 4\. Select iOS as your platform. 5\. Leave the remaining options as their default values and click **Register App**. 6\. Select the newly created app **syncserver-ios-test-crittercism**. 7\. On the left menu, go into **Settings** -> **App Settings**. 8\. Copy your Crittercism App ID (will look similar to this: 531f7f9d0ee9483d3d000001). You will need it to initialize the framework.

## Initialize Crittercism

1\. Open app delegate **SYNAppDelegate.m** and add an import header at the top:

<pre>    `#import `</pre>

2\. Enable Crittercism in the **application:didFinishLaunchingWithOptions:** method:

<pre>    `- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	// Override point for customization after application launch.
	[Crittercism enableWithAppID:@"531f7f9d0ee9483d3d000001"];
	return YES;
}`</pre>

3\. We suggest you use [this guide](http://support.crittercism.com/articles/knowledge_base/Uploading-dSYMs-to-Crittercism-automatically/) to setup your project so that the dSYMs are uploaded automatically. _Note: If you installed Crittercism via CocoaPods, this guide may not work. To fix it, go into the **Pods** directory, enter the **CrittercismSDK** directory and you will see another **CrittercismSDK** which holds all of the Crittercism files. Copy that folder into the **syncserver-ios-test** directory (the same one where the **Pods** folder was located). Now the guide should work without any problems._ 4\. From now on, when your app crashes, you will be able to find a crash report on Crittercism.

## Leave Breadcrumbs

1\. Import the Crittercism header to both **SYNViewController.m** and **SYNSecondViewController.m** 2\. On both view controllers, add breadcrumbs to log info about which view controller was loaded last by adding method:

<pre>    `- (void)viewDidAppear:(BOOL)animated {
  [super viewDidAppear:animated];
  NSString *breadcrumb = [NSString stringWithFormat:@"View controller appeared on screen: %@",[self class]];
  [Crittercism leaveBreadcrumb:breadcrumb];
}` </pre>

3\. To both view controllers, add logging information about each segue being performed by implementing method:

<pre>    `- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
  NSString *breadcrumb = [NSString stringWithFormat:@"Will show view controller through segue: %@",[[segue destinationViewController] class]];
  [Crittercism leaveBreadcrumb:breadcrumb];
}` </pre>

4\. Now, when a crash happens, you will be able to see both crash reports and breadcrumbs.

## Test Your App

1\. Generate a report: Launch the app. Go to **Second Screen** and press the crash button. Re-launch the app once more. 
2\. View the report: Login to your Crittercism account, go to https://app.crittercism.com/developers, choose **syncserver-ios-test-crittercism** app, and select **Troubleshoot** -> **Crash Reports** on the left menu. 

_Note: remember to disconnect the XCode debugger if you’re testing with the simulator, as it will prevent Crittercism from capturing the crash._