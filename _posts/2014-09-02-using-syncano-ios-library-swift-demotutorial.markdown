---
layout: post
title: Using the Syncano iOS Library with Swift - Demo/Tutorial
date: 2014-09-02 11:21:29
author: mariusz
categories: ['API', 'How Tos', 'iOS', 'Real-Time Sync']
share_image: /public/Apple_Swift_Logo.png
summary: "Although written in Objective-C, the Syncano iOS library is perfectly compatible with Swift. Here are some simple steps to get started:"
---
<p>Although written in Objective-C, the Syncano iOS library is perfectly compatible with Swift. Here are some simple steps to get started:</p><!--more-->

<h2><strong>1. Install CocoaPods</strong></h2>

<p>We use <a href="http://cocoapods.org/">CocoaPods</a> to distribute our library. If you aren't familiar with CocoaPods, you can read more about it <a href="http://guides.cocoapods.org/">here</a>.</p>

<p>To install CocoaPods, open Terminal and paste the following line:</p>

{% highlight javascript linenos %}$ sudo gem install cocoapods
{% endhighlight %}

<h2><strong>2. XCode</strong></h2>

<p>If you don't have an Xcode IDE, you can find it and install using <a href="https://itunes.apple.com/en/app/xcode/id497799835?mt=12">AppStore</a>.</p>

<p>Swift is currently available only under the beta of <strong>XCode 6</strong>, which you can find in Apple's <a href="https://developer.apple.com/devcenter/ios/index.action">Developer Center</a> after logging into your Apple Developer Account.</p>

<h2><strong>3. Create a new XCode project</strong></h2>

<ol>
<li>Launch XCode.</li>
<li>Using the XCode menu, choose <strong>File -> New -> Project</strong>.</li>
<li>Choose the <strong>Single View Application</strong> template.</li>
<li>Pick a name for your project, or name it <strong>SyncanoProject</strong>.</li>
<li>In the prefix field enter <strong>SYN</strong> (you can keep devices in the <strong>Universal</strong> state or change it to either <strong>iPhone</strong> or <strong>iPad</strong>).</li>
<li>Choose where you want to keep your project on your disk and hit <strong>Create</strong>.</li>
<li>Close the XCode project for now.</li>
</ol>


<h2><strong>4. Add the Syncano library</strong></h2>

<p>Open Terminal and change the directory to the folder where you chose to save your project. If you don’t know how to do this, type:</p>

{% highlight javascript linenos %}$ cd
{% endhighlight %}

<p>then drag &amp; drop the folder which contains your XCode project into the Terminal app (if you followed previous steps, you should have a file named <strong>SyncanoProject.xcodeproj</strong> inside a folder <strong>SyncanoProject</strong>). Press ENTER to confirm.</p>

<p>Next, type:</p>

{% highlight javascript linenos %}$ pod init
{% endhighlight %}

<p>Now, open the file named <strong>Podfile</strong> in your desired text editor. Under the project's application target and before <strong>end</strong>, add line:</p>

{% highlight javascript linenos %}pod 'syncano-ios'
{% endhighlight %}

<p>If you used our naming suggestions, your <strong>Podfile</strong> should now look like this:</p>

{% highlight javascript linenos %}# Uncomment this line to define a global platform for your project
# platform :ios, "6.0"

target "SyncanoProject" do
pod 'syncano-ios'
end

target "SyncanoProjectTests" do

end
{% endhighlight %}

<p>Save the Podfile. Go back to Terminal and install the Syncano library by typing:</p>

{% highlight javascript linenos %}$ pod install
{% endhighlight %}

<p>When the process is finished, you should see a new <strong>.xworkspace</strong> file in the same folder as your project (presumably <strong>SyncanoProject.xcworkspace</strong>). From now on, use this file instead of the <strong>.xcodeproj</strong> one.</p>

<p>You can open the workspace by double clicking it in Finder or typing this in Terminal:</p>

{% highlight javascript linenos %}$ open SyncanoProject.xcworkspace
{% endhighlight %}

<p>The library has been downloaded and added to your project.</p>

<h2><strong>5. Using the Syncano library with Swift</strong></h2>

<h2>5.1 Importing Syncano headers</h2>

<p>Because the Syncano iOS library is written in Objective-C, you will need a bridging header. You can add it manually, but the easiest way is to add it with XCode:</p>

<ol>
<li>Add a new <strong>.m</strong> file to your project by choosing <strong>File -> New -> File -> “Objective-C File”</strong> (select the option with the <strong>.m</strong> icon).</li>
<li>Give it a random name e.g. <strong>SyncanoSwift</strong> (the name is not important because we won't be using the file again).</li>
<li>Leave the file type as <strong>Empty File</strong> and click <strong>Next</strong>.</li>
<li>Save the file anywhere in the project by choosing a directory and clicking <strong>Create</strong>.</li>
<li>When XCode asks you “Would you like to configure an Objective-C bridging header?”, choose <strong>Yes</strong>.</li>
<li>XCode should have added a bridging file to your project named <strong>YourProjectName-Bridging-Header.h</strong>. In our case it would be <strong>SyncanoProject-Bridging-Header.h</strong></li>
<li>Remove the previously created <strong>.m</strong> file by selecting it in your project, right clicking on it, and choosing <strong>Delete</strong> and <strong>Move to Trash</strong>.</li>
<li>Select the bridging header and paste these two <strong>#import</strong> directives inside of it:</li>
</ol>


{% highlight javascript linenos %}#import <Syncano/Syncano.h>
#import <Syncano/SyncanoSyncServer.h>
{% endhighlight %}

<p>Because you already have library files included in the bridging header, there’s no need to import anything else in your <strong>.swift</strong> files.</p>

<p>Choose the file where you’d like to add Syncano communication. We will use the <strnog>ViewController.swift</strong> in the examples below.</p>

<h2>5.2 Initializing Syncano objects</h2>

<p>In the class body, add two variables and initialize them so at the end it looks like this:</p>

{% highlight javascript linenos %}class ViewController: UIViewController {

  var syncano = Syncano(forDomain: "YOUR_DOMAIN", apiKey: "YOUR_API_KEY")
  var syncServer = SyncanoSyncServer(forDomain: "YOUR_DOMAIN", apiKey: "YOUR_API_KEY")

  override func viewDidLoad() {
    super.viewDidLoad()
  }

  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
  }
}
{% endhighlight %}

<p>You can obtain your domain name and your API key as well as the desired project and collection ID in the <a href="http://login.syncano.com/"><strong>Admin GUI</strong></a>.</p>

<h2>5.3 Creating a Data Object</h2>

<p>Add this function to create a data object:</p>

{% highlight javascript linenos %}func createDataObject() {
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
{% endhighlight %}

<h2>5.4 Downloading the newest Data Objects</h2>

<p>Add this function to download the newest data objects:</p>

{% highlight javascript linenos %}func downloadNewestDataObject() {
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
{% endhighlight %}

<h2>5.5 Deleting a Data Object</h2>

<p>Add this function to delete a specific data object. You can obtain the ID of an object to be deleted through <a href="https://login.syncano.com/"><strong>Admin GUI</strong></a>, or use the ID of a previously downloaded object.</p>

{% highlight javascript linenos %}func deleteDataObject() {
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
{% endhighlight %}

<h2>5.6 Receiving notifications</h2>

<p>Notifications can be obtained through closures or by using the SyncServer protocol. For this example, we'll use the latter.</p>

<p>Add this to the class information so that it implements the SyncanoSyncServerDelegate protocol:</p>

{% highlight javascript linenos %}class ViewController: UIViewController, SyncanoSyncServerDelegate {
  ...
}
{% endhighlight %}

<p>Set your class as a delegate on a Sync Server object:</p>

{% highlight javascript linenos %}self.syncServer.delegate = self;
{% endhighlight %}

<p>Start connection with the Sync Server by using the instance name and API key you used previously. You can pass the pointer to an error that will be set if it occurs while opening the connection:</p>

{% highlight javascript linenos %}var error : NSError?
self.syncServer.connect(&amp;error)
{% endhighlight %}

<p>After those steps, your viewDidLoad should look like this:</p>

{% highlight javascript linenos %}override func viewDidLoad() {
  super.viewDidLoad()
  self.syncServer.delegate = self

  var error : NSError?
  self.syncServer.connect(&amp;error)
}
{% endhighlight %}

<p>Implement protocol methods (there are more than what's shown here, but only two of them are required and only one more is needed to receive notifications). Add this code before the end of your class implementation:</p>

{% highlight javascript linenos %}//Called when Sync Server connection was successfully opened
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
{% endhighlight %}

<h2>5.7 Sending notifications</h2>

<p>Open the Sync Server connection as described in point <strong>5.6</strong> and add this method to send notifications:</p>

{% highlight javascript linenos %}func sendNotification() {
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
{% endhighlight %}

<h2><strong>6. Support</strong></h2>

<p>Now you’re ready to use Syncano in your iOS project. We hope you enjoy working with our platform!</p>

<p>If you have any issues, just let us know at <a href="mailto:support@syncano.com">support@syncano.com</a>. We're here to help!</p>
</body>
</html>