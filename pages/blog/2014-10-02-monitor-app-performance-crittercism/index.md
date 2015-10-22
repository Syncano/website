---
path: '/blog/monitor-app-performance-crittercism/'
layout: post
title: How to Monitor Your App's Performance
date: 2014-10-02 11:21:29
author: mariusz
categories: ['How Tos', 'Info']
image: crittercism-syncano2.png
summary: "After building a successful real-time app with Syncano with out last tutorial, it’s time to make sure your app’s performance remains on top of its game. We recommend using Crittercism, which allows you to monitor your app performance and do things like prioritize issues, troubleshoot, and view performance trends."
---
<a href="http://www.syncano.io/blog/get-instant-notifications-syncano-ios/">After building a successful real-time app with Syncano with out last tutorial</a>, it’s time to make sure your app’s performance remains on top of its game. We recommend using <a href="http://www.crittercism.com/solution-overview/">Crittercism</a>, which allows you to monitor your app performance and do things like prioritize issues, troubleshoot, and view performance trends.<!--more-->

There are three main features of Crittercism that we particularly like: Crash Reports, Breadcrumbs, and Network Endpoints. If your app crashes at any time, the next time it’s re-launched, Crittercism's Crash Report feature will record information on what exactly caused the crash in the first place, so you can find it on the server immediately and fix it. You can also see things like how many times the crash occurred and how many users were affected - features that are especially important when you need to prioritize your troubleshooting. Breadcrumbs are great because they allow you to see the sequence of events a user took before a crash happened. For joint use with Syncano or other integrations, Network Endpoints are particularly valuable - you can see how Syncano performs in your app, how fast it’s working/responding, etc.

Here’s an example of how you use the Crittercism framework with the <a href="http://www.syncano.io/blog/get-instant-notifications-syncano-ios/">demo app you created last month</a>. You can download the full demo for this tutorial <a href="https://github.com/lifcio/syncserver-ios-test-crittercism">here</a>.

<h2>Install the Crittercism Framework</h2>

Crittercism is available as a Pod, so you'll add the proper information to your existing Pods file.

1. Paste following line into your Pods file so that it’s under the <em>pod 'syncano-ios’</em> line:
<pre>    <code class="objectivec">pod 'CrittercismSDK'</code></pre>
2. In Terminal, run:
<pre>    <code class="objectivec">pod update</code></pre>
The framework should now be installed and ready to use.

<h2>Expand Your App</h2>

Before you use the Crittercism framework, you'll need to expand your existing app.

1. Open the workspace where your project is located. Right click on the <strong>syncserver-ios-test</strong> group, choose <strong>New File</strong>, and under iOS select <strong>Cocoa Touch</strong> and <strong>Objective-C class</strong>.

2. Name the class <strong>SYNSecondViewController</strong>, and as a subclass type <strong>UIViewController</strong> (if checked, uncheck field <strong>Also create XIB file</strong>).

3. Open the <strong>Main.storyboard</strong> file.

4. Drag and drop another view controller into the scene. Select the newly added view controller and set the custom class to <strong>SYNSecondViewController</strong> (use the third tab under the menu on the right-hand side).

5. Add a button to the first view controller and name it <strong>Second Screen</strong>.

6. While holding the CTRL, click and drag the button to the second screen. Release your mouse and choose <strong>Modal</strong> from the menu that appears next.

7. Go into the <strong>SYNSecondViewController.m</strong> file and add method:
<pre>    <code class="objectivec">- (void)crashTheApp {
  [NSException raise:NSGenericException format:@"We're raising a test exception"];
}</code></pre>
8. Add the crash button programatically to your new screen by changing viewDidLoad so it looks like this:
<pre>    <code class="objectivec">- (void)viewDidLoad {
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
}
</code></pre>
9. Launch the app.

10. Press the ‘Second Screen’ button on the first screen, and ‘CRASH!!!’ on the second screen to make sure the app crashes on command.

<h2>Obtain Your Crittercism App ID</h2>

1. Login to your Crittercism account and go to https://app.crittercism.com/developers.

2. Choose <strong>Register New App</strong>.

3. Name your app <strong>syncserver-ios-test-crittercism</strong>.

4. Select iOS as your platform.

5. Leave the remaining options as their default values and click <strong>Register App</strong>.

6. Select the newly created app <strong>syncserver-ios-test-crittercism</strong>.

7. On the left menu, go into <strong>Settings</strong> -> <strong>App Settings</strong>.

8. Copy your Crittercism App ID (will look similar to this: 531f7f9d0ee9483d3d000001). You will need it to initialize the framework.

<h2>Initialize Crittercism</h2>
1. Open app delegate <b>SYNAppDelegate.m</b> and add an import header at the top:
<pre>    <code class="objectivec">#import <Crittercism.h> </code></pre>
2. Enable Crittercism in the <b>application:didFinishLaunchingWithOptions:</b> method:
<pre>    <code class="objectivec">- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	// Override point for customization after application launch.
	[Crittercism enableWithAppID:@"531f7f9d0ee9483d3d000001"];
	return YES;
}</code></pre>
3. We suggest you use <a href="http://support.crittercism.com/articles/knowledge_base/Uploading-dSYMs-to-Crittercism-automatically/">this guide</a> to setup your project so that the dSYMs are uploaded automatically.

<em>Note: If you installed Crittercism via CocoaPods, this guide may not work. To fix it, go into the <strong>Pods</strong> directory, enter the<b> CrittercismSDK </b>directory and you will see another <b>CrittercismSDK </b>which holds all of the Crittercism files. Copy that folder into the <b>syncserver-ios-test</b> directory (the same one where the <b>Pods</b> folder was located). Now the guide should work without any problems.</em>

4. From now on, when your app crashes, you will be able to find a crash report on Crittercism.

<h2>Leave Breadcrumbs</h2>

1. Import the Crittercism header to both <strong>SYNViewController.m</strong> and <strong>SYNSecondViewController.m</strong>

2. On both view controllers, add breadcrumbs to log info about which view controller was loaded last by adding method:
<pre>    <code class="objectivec">- (void)viewDidAppear:(BOOL)animated {
  [super viewDidAppear:animated];
  NSString *breadcrumb = [NSString stringWithFormat:@"View controller appeared on screen: %@",[self class]];
  [Crittercism leaveBreadcrumb:breadcrumb];
}
</code></pre>
3. To both view controllers, add logging information about each segue being performed by implementing method:
<pre>    <code class="objectivec">- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
  NSString *breadcrumb = [NSString stringWithFormat:@"Will show view controller through segue: %@",[[segue destinationViewController] class]];
  [Crittercism leaveBreadcrumb:breadcrumb];
}
</code></pre>
4. Now, when a crash happens, you will be able to see both crash reports and breadcrumbs.

<h2>Test Your App</h2>

1. Generate a report: Launch the app. Go to <strong>Second Screen</strong> and press the crash button. Re-launch the app once more.

2. View the report: Login to your Crittercism account, go to https://app.crittercism.com/developers, choose <strong>syncserver-ios-test-crittercism</strong> app, and select <strong>Troubleshoot</strong> -> <strong>Crash Reports</strong> on the left menu.

<em>Note: remember to disconnect the XCode debugger if you’re testing with the simulator, as it will prevent Crittercism from capturing the crash.