---
path: '/blog/using-syncano-ios-library-swift-demotutorial/'
layout: post
title: Using the Syncano iOS Library with Swift - Demo/Tutorial
description: "Although written in Objective-C, the Syncano iOS library is perfectly compatible with Swift. Here are some simple steps to get started!"
date: 2014-09-02 11:21:29
author: mariusz
categories: ['API', 'How Tos', 'iOS', 'Real-Time Sync']
image: Apple_Swift_Logo.png
summary: "Although written in Objective-C, the Syncano iOS library is perfectly compatible with Swift. Here are some simple steps to get started:"
---
Although written in Objective-C, the Syncano iOS library is perfectly compatible with Swift. Here are some simple steps to get started:

## 1. Install CocoaPods

We use <a href="http://cocoapods.org/">CocoaPods</a> to distribute our library. If you aren't familiar with CocoaPods, you can read more about it <a href="http://guides.cocoapods.org/">here</a>.

To install CocoaPods, open Terminal and paste the following line:

```javascript
$ sudo gem install cocoapods
```

## 2. XCode

If you don't have an Xcode IDE, you can find it and install using <a href="https://itunes.apple.com/en/app/xcode/id497799835?mt=12">AppStore</a>.

Swift is currently available only under the beta of **XCode 6**, which you can find in Apple's <a href="https://developer.apple.com/devcenter/ios/index.action">Developer Center</a> after logging into your Apple Developer Account.

## 3. Create a new XCode project

1.  Launch XCode.
2.  Using the XCode menu, choose **File -> New -> Project**.
3.  Choose the **Single View Application** template.
4.  Pick a name for your project, or name it **SyncanoProject**.
5.  In the prefix field enter **SYN** (you can keep devices in the **Universal** state or change it to either **iPhone** or **iPad**).
6.  Choose where you want to keep your project on your disk and hit **Create**.
7.  Close the XCode project for now.


## 4. Add the Syncano library

Open Terminal and change the directory to the folder where you chose to save your project. If you don’t know how to do this, type:

```javascript
$ cd
```

then drag &amp; drop the folder which contains your XCode project into the Terminal app (if you followed previous steps, you should have a file named **SyncanoProject.xcodeproj** inside a folder **SyncanoProject**). Press ENTER to confirm.

Next, type:

```javascript
$ pod init
```

Now, open the file named **Podfile** in your desired text editor. Under the project's application target and before **end**, add line:

```javascript
pod 'syncano-ios'
```

If you used our naming suggestions, your **Podfile** should now look like this:

```javascript
# Uncomment this line to define a global platform for your project
# platform :ios, "6.0"

target "SyncanoProject" do
pod 'syncano-ios'
end

target "SyncanoProjectTests" do

end
```

Save the Podfile. Go back to Terminal and install the Syncano library by typing:

```javascript
$ pod install
```

When the process is finished, you should see a new **.xworkspace** file in the same folder as your project (presumably **SyncanoProject.xcworkspace**). From now on, use this file instead of the **.xcodeproj** one.

You can open the workspace by double clicking it in Finder or typing this in Terminal:

```javascript
$ open SyncanoProject.xcworkspace
```

The library has been downloaded and added to your project.

## 5. Using the Syncano library with Swift

### 5.1 Importing Syncano headers

Because the Syncano iOS library is written in Objective-C, you will need a bridging header. You can add it manually, but the easiest way is to add it with XCode:

1.  Add a new **.m** file to your project by choosing **File -> New -> File -> “Objective-C File”** (select the option with the **.m** icon).
2.  Give it a random name e.g. **SyncanoSwift** (the name is not important because we won't be using the file again).
3.  Leave the file type as **Empty File** and click **Next**.
4.  Save the file anywhere in the project by choosing a directory and clicking **Create**.
5.  When XCode asks you “Would you like to configure an Objective-C bridging header?”, choose **Yes**.
6.  XCode should have added a bridging file to your project named **YourProjectName-Bridging-Header.h**. In our case it would be **SyncanoProject-Bridging-Header.h**
7.  Remove the previously created **.m** file by selecting it in your project, right clicking on it, and choosing **Delete** and **Move to Trash**.
8.  Select the bridging header and paste these two **#import** directives inside of it:


```javascript
#import <Syncano/Syncano.h>
#import <Syncano/SyncanoSyncServer.h>
```

Because you already have library files included in the bridging header, there’s no need to import anything else in your **.swift** files.

Choose the file where you’d like to add Syncano communication. We will use the **ViewController.swift** in the examples below.

### 5.2 Initializing Syncano objects

In the class body, add two variables and initialize them so at the end it looks like this:

```javascript
class ViewController: UIViewController {

  var syncano = Syncano(forDomain: "YOUR_DOMAIN", apiKey: "YOUR_API_KEY")
  var syncServer = SyncanoSyncServer(forDomain: "YOUR_DOMAIN", apiKey: "YOUR_API_KEY")

  override func viewDidLoad() {
    super.viewDidLoad()
  }

  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
  }
}
```

You can obtain your domain name and your API key as well as the desired project and collection ID in the <a href="http://login.syncano.com/">**Admin GUI**</a>.

### 5.3 Creating a Data Object

Add this function to create a data object:

```javascript
func createDataObject() {
  //Create parameteres for API request
  //Change "123456789" with project_id and collection_id with
  //data from your instance
  let params = SyncanoParameters_DataObjects_New(projectId: "123456", collectionId: "123456", state: kSyncanoParametersDataObjectsStatePending)

  //Set desired object properties
  params.title = "Pirate ship"
  params.text = "Full of pirates!"
  params.additional = [ "number_of_pirates" : 50 ]

  //Pass to Syncano object parameters for creating new object
  //and process the response
  self.syncano.dataNew(params) {
    response in
    //Use newly created object
    let data = response.data;
    let additional = data.additional as [String : String]
    let numberOfPirates = additional["number_of_pirates"]

    println("ID: \(data.uid), Title: \(data.title), description: \(data.text)")
    println("Number of pirates: \(numberOfPirates)")
  }
}
```

### 5.4 Downloading the newest Data Objects

Add this function to download the newest data objects:

```javascript
func downloadNewestDataObject() {
  //Create parameteres for API request
  //Change "123456789" with project_id and collection_id with
  //data from your instance
  let params = SyncanoParameters_DataObjects_Get(projectId: "123456789", collectionId: "123456789")

  //We want to download only one object
  params.limit = 1;
  //Because we want to get newest object, we ask them to be sorted descending
  //(newest id on top)
  params.order = "DESC";

  //Pass to Syncano object parameters for downloading object
  //and process the response
  self.syncano.dataGet(params) {
    response in
    //We know we asked for only one object,
    //so there will be only one in response
    // but we check if Syncano returned anything in case of error
    if (response.data.count > 0) {
      let data = response.data[0] as SyncanoData
      //Use newly created object
      println("ID: \(data.uid), Title: \(data.title), description: \(data.text)")
    }
  }
}
```

### 5.5 Deleting a Data Object

Add this function to delete a specific data object. You can obtain the ID of an object to be deleted through <a href="https://login.syncano.com/">**Admin GUI**</a>, or use the ID of a previously downloaded object.

```javascript
func deleteDataObject() {
  //Create parameteres for API request
  //Change "123456789" with project_id and collection_id with
  //data from your instance
  let params = SyncanoParameters_DataObjects_Delete(projectId: "123456789", collectionId: "123456789")

  //You can delete all objects, or pass ID of object to be deleted
  params.dataIds = ["123456789"] //or ["123456789","12345678910"]

  //Pass to Syncano object parameters for deleting object
  //and process the response
  self.syncano.dataDelete(params) {
    response in
    //Check if request to delete was successful
    if (response.responseOK) {
      println("Success")
    } else {
      println("There was some error, here it is: \(response.error)")
    }
  }
}
```

### 5.6 Receiving notifications

Notifications can be obtained through closures or by using the SyncServer protocol. For this example, we'll use the latter.

Add this to the class information so that it implements the SyncanoSyncServerDelegate protocol:

```javascript
class ViewController: UIViewController, SyncanoSyncServerDelegate {
  ...
}
```

Set your class as a delegate on a Sync Server object:

```javascript
self.syncServer.delegate = self;
```

Start connection with the Sync Server by using the instance name and API key you used previously. You can pass the pointer to an error that will be set if it occurs while opening the connection:

```javascript
var error : NSError?
self.syncServer.connect(&amp;error)
```

After those steps, your viewDidLoad should look like this:

```javascript
override func viewDidLoad() {
  super.viewDidLoad()
  self.syncServer.delegate = self

  var error : NSError?
  self.syncServer.connect(&amp;error)
}
```

Implement protocol methods (there are more than what's shown here, but only two of them are required and only one more is needed to receive notifications). Add this code before the end of your class implementation:

```javascript
//Called when Sync Server connection was successfully opened
func syncServerConnectionOpened(syncServer: SyncanoSyncServer!) {
  println("Connection opened.")
}

//Called when connection was closed, passing an error if one occurred
func syncServer(syncServer: SyncanoSyncServer!, connectionClosedWithError error: NSError!) {
  println("Connection closed, with error: \(error)")
}

//Called when notification message was sent by SyncServer and received on device
func syncServer(syncServer: SyncanoSyncServer!, messageReceived message: AnyObject!) {
  println("Message received: \(message)")
}
```

### 5.7 Sending notifications

Open the Sync Server connection as described in point **5.6** and add this method to send notifications:

```javascript
func sendNotification() {
  //Create parameteres for API request
  let params = SyncanoParameters_Notifications_Send()

  //Set message to be sent inside notification
  params.additional = [
    "ship_name" : "Parrot",
    "number_of_pirates" : 50,
    "message" : "Abandon ship!"
  ]

  //Pass to Syncano object parameters for sending notification
  //and process the response
  self.syncServer.notificationSend(params) {
    response in
    //Check if notification was sent successfully
    if (response.responseOK) {
      println("Message sent with success.")
    } else {
      println("Error occurred: \(response.error)");
    }
  }
}
```

## 6. Support

Now you’re ready to use Syncano in your iOS project. We hope you enjoy working with our platform!

If you have any issues, just let us know at <a href="mailto:support@syncano.com">support@syncano.com</a>. We're here to help!
