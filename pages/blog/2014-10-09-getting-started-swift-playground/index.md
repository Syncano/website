---
path: '/blog/getting-started-swift-playground/'
layout: post
title: Getting Started with Swift Playground
description: "As Apple announced during their latest event, you can now write Swift applications and submit them to the AppStore. Awesome!"
date: 2014-10-09 11:21:29
author: mariusz
categories: ['iOS', 'Swift']
image: Apple-Swift-2.png
summary: "As Apple announced during their latest event, you can now write Swift applications and submit them to the AppStore. One of the most interesting features of Swift and the new XCode IDE are its interactive playgrounds. In the playgrounds, you can type a line of code and the result appears immediately – enabling you to run your code after you make changes without creating new projects. You can finally stop flinching in pain when you’re designer tells you a button needs to be just a few pixels farther to the left."
---
<p>As Apple announced during their latest event, you can now write <a href="https://developer.apple.com/swift/">Swift</a> applications and submit them to the AppStore.</p>

<p>One of the most interesting features of Swift and the new XCode IDE are its interactive playgrounds. In the playgrounds, you can type a line of code and the result appears immediately – enabling you to run your code after you make changes without creating new projects. You can finally stop flinching in pain when you're designer tells you a button needs to be just a few pixels farther to the left.</p>

<h2>XCode</h2>

<p>Before you start working in a playground, make sure you've downloaded version 6 of XCode (available on the <a href="https://itunes.apple.com/us/app/xcode/id497799835">AppStore</a>).</p>

<p>Once you have it installed (it may take some time), don't start a  new project. Instead, hit <em>File -> New -> Playground</em>.</p>

<p>When you create a new playground file, it will be filled with this content by default:</p>

```javascript
// Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
```

<p>The code will fill whole left side of the file, and on the right you can see its corresponding results:</p>

<p><img src="SwiftPlayground_01.png" alt="SwiftPlayground_01" width="201" height="30" class="aligncenter size-full wp-image-10107" /></p>

<h2>Adding a function</h2>

<p>Let's add a function to the playground to see if it works properly. Start by calculating the sum of 3 + 7:</p>

```javascript
func sumOfTwoNumbers(firstNumber: Int, secondNumber: Int) -> Int {
&nbpsp; return firstNumber + secondNumber
}

sumOfTwoNumbers(3, 7)
```

<p><img src="SwiftPlayground_02.png" alt="SwiftPlayground_02" width="581" height="78" class="aligncenter size-full wp-image-10106" /></p>

<p>As you can see on the right, the result is 10 – meaning the playground is working as expected.</p>

<h2>Timeline</h2>

<p>If the code you write works over time and its result changes, you can enable the timeline view to see what's happening under the hood.</p>

<p>Here's an example of how this works. Add a loop to your code by entering:</p>

```javascript
for index in 0...10 {
  sumOfTwoNumbers(index, index);
}
```

<p><img src="SwiftPlayground_03.png" alt="SwiftPlayground_03" width="416" height="48" class="aligncenter size-full wp-image-10105" /></p>

<p>Notice how the result indicates the code ran 11 times - as it actually did. Next to that result, there is an eye icon and a circle icon.</p>

<p><img src="SwiftPlayground_10.png" alt="SwiftPlayground_10" width="133" height="72" class="aligncenter size-full wp-image-10098" /></p>

<p>Click on the circle icon to see the <em>Value History</em>: a chart that shows how your values changed overtime.</p>

<p>There are 11 discreet points on this graph. Click on one to see it's value. For example, when you click on the sum of 5 and 5, you'll get it's sum: 10.</p>

<p><img src="SwiftPlayground_04.png" alt="SwiftPlayground_04" width="490" height="294" class="aligncenter size-full wp-image-10104" /></p>

<p><em>This graph also helps with more advanced calculations, because you can quickly see if something is wrong (e.g. when larger or negative numbers are taken as inputs).</em></p>

<p><em>Notice what happens if we change our code to multiply both numbers when the first number is greater than 5:</em></p>

```javascript
func sumOfTwoNumbers(firstNumber: Int, secondNumber: Int) -> Int {
 &npsp; if (firstNumber > 5) {
 &npsp; &npsp; return firstNumber * secondNumber
&npsp; }
 &npsp; return firstNumber + secondNumber
}
```

<p>the chart would now look like this:</p>

<p><img src="SwiftPlayground_05.png" alt="SwiftPlayground_05" width="493" height="305" class="aligncenter size-full wp-image-10103" /></p>

<h2>Testing UI and the Quick Look Feature</h2>

<p>You can also use UI code in Playground - a pretty neat feature. Start here by creating and configuring a simple UILabel.</p>

```javascript
let label = UILabel(frame: CGRect(x: 0, y: 0, width: 200, height: 30))
label.textAlignment = NSTextAlignment.Center
label.font = UIFont.italicSystemFontOfSize(20)
label.textColor = UIColor.blueColor()
label.text = "Swift Playground"
```

<p>Now, click the <em>Quick Look</em> icon (the eye icon) next to the last line of your code to see how the label looks.</p>

<p><img src="SwiftPlayground_06.png" alt="SwiftPlayground_06" width="271" height="64" class="aligncenter size-full wp-image-10102" /></p>

<p>You can also see how the label would look with varying gray backgrounds.  Add this loop to change it to different UIColor instances:</p>

```javascript
for var grayColor : CGFloat = 0.9; grayColor > 0.0; grayColor -= 0.1 {
&nbsp; label.backgroundColor = UIColor(white: grayColor, alpha: 1.0)
}
```

<p>To see the history of how the background changed, click the <em>Value History</em> icon (plus sign icon), next to the line where we set the background color.</p>

<p><img src="SwiftPlayground_07.png" alt="SwiftPlayground_07" width="489" height="442" class="aligncenter size-full wp-image-10101" /></p>

<h2>More advanced UI testing - UITableView</h2>

<p>So what about more complicated UI things like UITableView? That also requires a data source and a delegate – and those need to be instances of existing classes, right? Fortunately, it is all possible to do in the playground.</p>

<p>You can start by creating a class conforming to a UITableViewDelegate protocol. Inside will be two functions - one defining the height of a single row, and another returning the custom header view.</p>

<p>As a requirement, your class must also conform to NSObjectProtocol. You'll do that by subclassing <em>NSObject</em>.</p>

<p>To create a custom header view, use the same code you used to create a label with one of the background colors we used earlier:</p>

```javascript
class Delegate : NSObject, UITableViewDelegate {
&nbsp; func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
&nbsp; &nbsp; return 44
&nbsp; }

&nbsp; func tableView(tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
&nbsp; &nbsp;  let label = UILabel(frame: CGRect(x: 0, y: 0, width: tableView.bounds.width, height: 50))
&nbsp; &nbsp; label.textAlignment = NSTextAlignment.Center
&nbsp; &nbsp; label.font = UIFont.italicSystemFontOfSize(20)
&nbsp; &nbsp; label.backgroundColor = UIColor(white: 0.2, alpha: 1.0)
&nbsp; &nbsp; label.textColor = UIColor.blueColor()
&nbsp; &nbsp; label.text = "Section: \(section)"
&nbsp; &nbsp; return label
&nbsp; }
}
```

<hr />

<h3>NOTE</h3>

<p>Remember this is just sample code to quickly implement a table view. In your project, try to register Nib for the header whenever possible and reuse it later with the function <em>dequeueReusableHeaderFooterViewWithIdentifier(identifier:)</em>. For simplicity, you're recreating a new UILabel here, but doing so in your own app can affect its performance.</p>

<hr />

<p>Next, add a DataSource class. Implement obligatory functions returning the number of rows in a section, a cell for index path, and as an extra - the number of sections in a table view to see how creating the header view in Delegate works:</p>

```javascript
class DataSource : NSObject, UITableViewDataSource {
&nbsp; func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
&nbsp; &nbsp; return 2
&nbsp; }

&nbsp; func numberOfSectionsInTableView(tableView: UITableView) -> Int {
&nbsp; &nbsp; return 4
&nbsp; }

&nbsp; func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
&nbsp; &nbsp; var identifier = "Identifier"
&nbsp; &nbsp; var cell : UITableViewCell? = nil
&nbsp; &nbsp; cell = tableView.dequeueReusableCellWithIdentifier(identifier) as UITableViewCell?
&nbsp; &nbsp; if (cell == nil) {
&nbsp; &nbsp; &nbsp; cell = UITableViewCell(style: UITableViewCellStyle.Subtitle, reuseIdentifier: identifier)
&nbsp; &nbsp; }
&nbsp; &nbsp; cell?.textLabel?.text = "Row: \(indexPath.row)"
&nbsp; &nbsp; cell?.detailTextLabel?.text = "Section: \(indexPath.section)"
&nbsp; &nbsp; return cell!
&nbsp; }
}
```

<p>Now you need to create Delegate and DataSource objects and set them as properties of our newly created UITableView. At the end, you have to perform a <em>reloadData()</em> function for the tableView to fetch data from your data source.</p>

```javascript
let delegate = Delegate()
let dataSource = DataSource()
let tableView = UITableView(frame: CGRect(x: 0, y: 0, width: 320, height: 480), style: UITableViewStyle.Grouped)
tableView.delegate = delegate
tableView.dataSource = dataSource
tableView.reloadData()
```

<p>Now on the last line (the one with <em>reloadData()</em>), you can use either <em>Quick Look</em> or <em>Value History</em> to see how your tableView looks. For this example, click on the latter to see how it changes while we change the code.</p>

<p><img src="SwiftPlayground_08.png" alt="SwiftPlayground_08" width="490" height="353" class="aligncenter size-full wp-image-10100" /></p>

<p>Now add some more info to your cells and change its background color as well as your header view look.</p>

<p>In the Delegate class, change the function creating header view to:</p>

```javascript
func tableView(tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
&nbsp; &nbsp; let label = UILabel(frame: CGRect(x: 0, y: 0, width: tableView.bounds.width, height: 50))
&nbsp; &nbsp; label.textAlignment = NSTextAlignment.Center
&nbsp; &nbsp; label.font = UIFont.italicSystemFontOfSize(20)
&nbsp; &nbsp; label.backgroundColor = UIColor.whiteColor()
&nbsp; &nbsp; label.textColor = UIColor(red: 0.5, green: 0.5, blue: 1.0, alpha: 1.0)
&nbsp; &nbsp; label.text = "Section: \(section)"
&nbsp; &nbsp; return label
&nbsp; }
```

<p>And then update the function creating a cell in the Data Source:</p>

```javascript
func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
&nbsp; &nbsp; var identifier = "Identifier"
&nbsp; &nbsp; var cell : UITableViewCell? = nil
&nbsp; &nbsp; cell = tableView.dequeueReusableCellWithIdentifier(identifier) as UITableViewCell?
&nbsp; &nbsp; if (cell == nil) {
&nbsp; &nbsp; &nbsp; cell = UITableViewCell(style: UITableViewCellStyle.Subtitle, reuseIdentifier: identifier)
&nbsp; &nbsp; &nbsp; cell?.backgroundColor = UIColor(red: 0.62, green: 0.86, blue: 1.0, alpha: 1.0)
&nbsp; &nbsp; }
&nbsp; &nbsp; cell?.textLabel?.text = "Row Number: \(indexPath.row)"
&nbsp; &nbsp; cell?.detailTextLabel?.text = "Section Number: \(indexPath.section)"
&nbsp; &nbsp; return cell!
&nbsp; }
```

<p>After a short while, Timeline will refresh, and your Table View will change:</p>

<p><img src="SwiftPlayground_09.png" alt="SwiftPlayground_09" width="491" height="355" class="aligncenter size-full wp-image-10099" /></p>

<h2>Final words</h2>

<p>Swift's playground can be a very useful tool, especially since you can quickly test UI element designs without creating a new project or worrying about rebuild time. Swift developers will probably begin implementing apps after testing ideas in the playground first, and then they'll continue to use the playground during the development process to quickly test small changes.</p>

<p>If you want to learn more about Swift, check out "The Swift Programming Language" – available in <a href="https://itunes.apple.com/us/book/swift-programming-language/id881256329?mt=11">iTunes</a>. You can also leave questions or additional comments below or email us at support@syncano.com - we'd be happy to help you get started!</p>
</body>
</html>