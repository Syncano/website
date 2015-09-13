---
path: '/getting-know-javascript-intro/'
layout: post
title: Getting to Know JavaScript - An Intro
date: 2015-01-23 11:21:29
author: eric
categories: ['Javascript', 'Tutorial']
image: intro-javascript.jpg
summary: "JavaScript is probably one of the oddest languages in history – partly because of its back story. It was introduced with two different design principles for two separate communities. As a result, it developed into two distinct sets of paradigms."
---
<h2>A little history</h2>
JavaScript is probably one of the oddest languages in history - partly because of its back story. It was introduced with two different design principles for two separate communities. As a result, it developed into two distinct sets of paradigms.<!--more-->

JavaScript was originally developed at NetScape to help non-programmers use the web (keep in mind - the web was young and we weren't sure where it was going or if it would even be around in the near future). The easy-to-use, minimalistic language disgusted "real" programmers (mainly college educated C++ programmers), and since it wasn't a real "programming language" like C++, it was prone to all kinds of bugs and errors. However, it accomplished something very important: it opened up programming to others.

Thus began the age-old debate over purity versus ubiquity. Since JavaScript was easy to learn (relatively speaking), it meant that more people could program without having to understand as much about computer science or programming.

To appease the C++ developers and other hardcore computer scientists, JavaScript developed more complex conventions. AJAX was introduced into JavaScript to make it more inline with standard computer scientists, and - more recently - we've created efficient implementations of virtual machines, most notably node.js (which we will learn soon), allowing JavaScript to live server side.
<h2>Definition: JavaScript</h2>
JavaScript is primarily a language for scripting the web. It is a general, object-oriented, dynamically typed language with functional and imperative elements. As a web scripting language, JavaScript more or less sits on top of C++ (what the browser is written in) and lets you interact with C++ indirectly through a simple and obvious environment. If you try running a web browser through a system debugger like winDbg, you can actually see all the C++ elements that different pieces of JavaScript code call.
<h2>A note on security</h2>
JavaScript is probably one of the most vulnerable languages to attack (at least in the browser). Modern browsers try to limit these vulnerabilities by disallowing JavaScript to call different kinds of C++ functions, but it's an uphill battle because a browser comprises millions of lines of C++ code. This implies browsers are extremely complex applications, with trillions of potential states.  As a result the opportunity for a malicious agent to take advantage of one of these states is typically possible.  Therefore, the more diverse and powerful the application, the greater potential for finding such a vulnerability and exploiting the application. On the flip side, more security implies less functionality. The goal of the browser is to have distributed usability that scales. In order to do that, you can't sacrifice usability!

That being said, browser security is continually improving. It's a slow process because you can't just shut down all the web browsers of the world for a year or two and design something 100x better. You need incremental changes so people can adapt to changes in usability.

Because its imperative that backwards compatibility to older sites isn't broken, security issues won't be going away any time soon. It's an important danger to consider, but it shouldn't stop you from using this wonderful flexible language. Just know about the traps out there so you are mindful to not fall into them.
<h2>JavaScript and HTML</h2>
Like CSS, JavaScript can live in the same file or a separate file from your HTML. In the interest of clarity, we'll show it in the same file as the HTML:
```javascript
<!doctype html>
<html>
<body>

<h1>My first JavaScript program</h1>
<p>Click the button to display the date.</p>
<p id="demo"></p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction()
{
	document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
</html>

```
There are a bunch of things going on in this example. To run it, save it as a .html file and then open it with your favorite browser. There are some standard HTML elements, like tags. But there is also a script tag where the JavaScript is written. JavaScript can appear in either head or body tags. It's typically good practice to include all JavaScript in between the head tags. We include it here in the body for demonstrative purposes. Notice how well the HTML and the JavaScript integrate: We are including a JavaScript function inside an HTML tag! There are plenty of other languages that integrate with the web, but none of them do it as obviously as JavaScript.

Now onto the actual JavaScript. First we call document.getElementById("demo").innerHTML and set it equal to the built in Date() function. This is an example of HTML and Javascript interacting with the DOM. The getElementById part of the of code references the "demo" id which we define in the p tag. Don't worry about the .innerHTML right now. When I explain the DOM in detail, it will become clear how it fits in. The next thing to notice is the onclick event in the button tag. This tells the browser when to execute the JavaScript. The major ways that JavaScript can be executed is on click, on hover, and on load. 

In the next few examples, you will write pure JavaScript and learn the language. Here is a skeleton to run your JavaScript:
```javascript
<!doctype html>
<html>
<body>

<button type="button" onclick="main()">Execute</button>
<script>

function main(){
//all JavaScript goes here.

}

</script>

</body>
</html>

```
<h2>JavaScript and the DOM</h2>
There are two ways that JavaScript can be taught from here: (1) as a stand alone language without any reference to web development until later or (2) as a web development tool with explanations as you go. We're going to go with the latter.
<h2>Definition: The DOM</h2>
Formally:

The Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.

Intuitively:

The Document Object Model (DOM) is what you see when the browser loads HTML onto the page. The DOM is an example of a tree data structure. The nesting of HTML tags inside other tags inform the tree like structure. The outer-most tag is the root of a tree, the inner-most tag is the leaf of a given tree.
<h3>Definition: tree</h3>
In computer science, a tree data structure is any data that is organized in a hierarchical way, with a root node (forming the top of the tree) and a bunch of nodes beneath the root and ending with terminal nodes, known as leafs. The connections between nodes are referred to as branches. Nodes on the same level are referred to as sibling nodes. Here's a visual of what this structure looks like:

<img src="http://www.teach-ict.com/as_as_computing/ocr/H447/F453/3_3_5/data_structures/miniweb/images/tree.jpg" alt="" />

And here's what this looks like executed as an HTML tree:

<img src="http://www.w3schools.com/js/pic_htmltree.gif" alt="" />
```javascript

<html>
<head>
<title>My title</title>
</head>
<body>
<a href="http://www.syncano.com">My link</a>
<h1>My header</h1>
</body>
</html>

```
Notice that the DOM only shows the openning tags, because it is assumed that any openned tags will be closed.
<h2>Example #1: Hello World!</h2>
```javascript

<html>
<body>
<p id="first">Hello World!</p>
<script>
var txt = document.getElementById("first").innerHTML;
document.write(txt);
</script>
</body>
</html>

```
This first example follows traditions of the <a title="K&amp;R Book (introduction to C)" href="http://www.amazon.com/The-Programming-Language-2nd-Edition/dp/0131103628">K&amp;R book (introduction to C) </a>- a must have for any serious programmer. The document object is how JavaScript interacts with the DOM in general. Here we make use of two methods:

<strong>getElementById("first")</strong>: This method grabs any elements with id "first". It doesn't do anything specific with the element, but it's handy for interacting with a specific HTML element or set of HTML elements.

<strong>innerHTML</strong>:This simply gets the value of the innerHTML of any tag.

Notice that JavaScript is very heavy on object oriented programming. The way you interact with, access, and write data is through objects.

For those of you unfamiliar with object oriented programming, you can find a good intro <a href="http://cs.nyu.edu/courses/spring13/CSCI-UA.0101-006/Notes.pdf">here.</a>
```javascript

<HTML>
      <HEAD>
        <TITLE>Greeting</TITLE>

        <script>
          function writeName()
          {
             var name1 = document.myform.name.value;
             
             var greeting = "Hello "+ name1;
           
	     document.write(greeting);
          }
        </script>
      </HEAD>

      <BODY>
	    <p>Please input your name to receive a greeting:</p>
        <FORM NAME="myform">
          Name?<INPUT TYPE="text" NAME="name" VALUE=""> <br /> 
          
          <INPUT TYPE="button" NAME="button" Value="submit" onClick="writeName()"><br />
          
        </FORM>

      </BODY>
</HTML>

```
There is a ton of stuff going on here. First, we use a form to grab the input from the user. Then, we write a personalized greeting to the screen for the person.

<strong>Let's talk about forms:</strong>

Forms are the standard way to grab input to the user. There are few common things you can do with form data once you have it:
<ol>
	<li>Display it back to the user with some other content.</li>
	<li>Use the user supplied data to decide what to do next.</li>
	<li>Send the data off to a server for further processing or data storage.</li>
</ol>
Forms appear in the form tag. The different fields are usually similar to the example above: one or more input fields and one submission button.

The types for the input tags are text, radio, file, text area, and submit.  The input and form tags give you a lot of power of how the form is displayed and what type of input the forms accept.

Let's talk about the JavaScript:

Note that I grab the response from the form and then do extra processing. I refer to the form by document.myform because this the specified name of the form. To reference the specific field, I simply append so it appears as document.myform.name.value because the name of the input field is simply "name". The value is the only property of the tag that is universal.
<h2>Exercise:</h2>
Write a few web forms. Get different kinds of information from the user. Return this information to the screen with some extra processing.  For example, you could ask them for their birthday, their name, and their age.  And then you could return their age in days in the form [name], you are [this many] days old.

For a reference to a list of common ways to interact with the DOM see: <a href="http://www.w3schools.com/js/js_htmldom_document.asp">JavaScript DOM reference</a>

Next, we'll change a picture on click:
```javascript
<!doctype html>
<html>
<body>

<img id="image" src="http://blogdottawkifydotcom.files.wordpress.com/2012/06/man-smiling-in-black-shirt.jpeg" height="300px" width="300px">

<p id="description">The face is happy!</p>

<button onclick="makeSad()">Submit</button>

<script>
function makeSad(){

document.getElementById("image").src="http://static3.businessinsider.com/image/51c9cca7ecad048f41000003-480/samuel-alito-frowning.jpg";
document.getElementById("description").innerHTML = "The face is sad!";
}
</script>

</body>
</html>

```
Notice there isn't too much no information here.  The big difference is the type of data we are working with.  So, first off, you should copy the above code into your favorite text editor and give it a try!  In case you are lazy, here's what it does:

The code displays a picture of a many with a happy face and the text:  "The face is happy!"

Then if you click the submit button the text and picture change from the smiling face to a very serious looking man with the text "The face is sad!"

As we did in the first example, we made use of document.getElementById and then referenced two specific attributes, in this case src and innerHTML.  The src attribute of an img tag will change the image that is displayed.  We manipulate this with:
```javascript
document.getElementById([name of tag]).src = [new image source]
```
&nbsp;

We do the same thing with the text displayed by the html as follows:
```javascript
document.getElementById([name of tag]).innerHTML = [new text]
```
&nbsp;

Notice the pattern for interacting with images and text is almost the same, the difference being the specific attribute being referenced.
```javascript
<html>
<body>

<p id="changeable_text">Hello world!</p>
<p>Hello world!</p>
<script>

document.getElementById("changeable_text").style.color="blue"; 

</script>
</body>
</html>

```
Here we've made some CSS happen on the fly! Typically when dealing with Javascript you'll want it to be caused by some user interaction like an onclick event or on hover event or something, however, I think it's also important to understand that this need not be the case.  Here we show that the Javascript does execute on load of the page.  Notice that we included the same text twice, once with the id="changeable_text" and once with it.  As you can see, since I reference the element by id, only the p tag with id="changeable_text" is affected.  To experiment with this, copy and paste the above code into your favorite text editor.  

Try commenting out the
```javascript
document.getElementById("changeable_text").style.color="blue";
```

By doing this:

```javascript
//document.getElementById("changeable_text").style.color="blue";
```
&nbsp;

You should also try playing with the color of the text. Here's an example of another color you could set:
```javascript
document.getElementById("changeable_text").style.color="green";
```
&nbsp;

All the major colors will work, give it a whirl!

There is another larger point worth mentioning here. We changed the CSS on the page this time. Generally this is done by interacting with the .style attribute that comes with almost all html tags.
<h2>Exercise:</h2>
Add a button to make the p-tag with id="changeable_text" change on click, not on load.  The best way to do this is by adding a button tag and then giving it an onclick event with a javascript function call.  If these directions are unclear see <a title="this example" href="http://www.w3schools.com/jsref/event_onclick.asp">this example</a>.
<h2>Event handling</h2>
Up until this point we've been just trying to get you comfortable with javascript, html, css and their interaction.  Now we are going to look more formally at the Javascript pieces we've been working with.  Let's start by understanding when how to use Javascript in the browser.  Javascript can be thought of generally as a tool for doing event driven actions.  An 'event' is an action the user caries out that triggers the JavaScript to run. You can think of the HTML that triggers the JavaScript like one giant controller that's more intuitive for the user. By clicking in different places or typing in different things, different scripts will be executed. A good user experience creates something new that still feels somewhat familiar enough for users to trigger the events intuitively. We've sort of been making use of it in the above examples - can you spot where?

Here's a list of some common HTML 'events':
<ul>
	<li>When a user clicks the mouse.</li>
	<li>When a web page has loaded.</li>
	<li>When an image has loaded.</li>
	<li>When the mouse moves over an element.</li>
	<li>When an input field is changed.</li>
	<li>When an HTML form is submitted.</li>
	<li>When a user strokes a key.</li>
</ul>
We've already seen examples of on-click events. Let's look at one more onclick now that we understand that the javascript is being used to handle some event.
```javascript
<HTML>
 <HEAD>
 <TITLE>Greeting</TITLE>

 <script>
 function Hello(){
 
 alert("Hello, user");
 }
 function textChange(){
  document.getElementById("changeable").innerHTML = "This is the new text, yea not very exciting";
 }
 function makeOriginal(){
  document.getElementById("changeable").innerHTML = "This is the original text";
 }
 </script>
 </HEAD>

 <BODY>
 <ol>
 <li><button id="Hello" onclick="Hello();">Say hello, browser</button></li> 
 <li><button id="change_text" onclick="textChange();">Let's change some text</button>
 <p id="changeable">This is the original text</p></li>
 <li><button id="change_back" onclick="makeOriginal();">Let's revert to the original state</button></li>
 </ol>
 
 </BODY>
</HTML>
```
Here, the new stuff is

1. Making use of JavaScript's built-in alert function
2. Changing the state of a given tag through multiple javascript functions.

This covers two very big cases for onclick - manipulating something on the page and sending messages to the user. The alert pattern isn't used much in websites anymore, except when the user does something they really aren't supposed to. I personally enjoy the alert function for quick debugging. If you have a larger set of issues, you should always make use of developer tools for this! This can be accessed by right-clicking (two finger click on Mac) and going to inspect element. Then click on the console tab. This gives you a command line environment in your browser! If those steps were unclear, check out <a title="this video" href="https://www.youtube.com/watch?v=nOEw9iiopwI">this video</a> explaining how to do it, by showing you.

Now that we have a strong grasp of onclick events and some of their uses lets look at another type of event in Javascript land, onload.
```javascript
<!doctype html>
<html>
<body onload="checkCookies()">

<script>
function checkCookies()
{
if (navigator.cookieEnabled==true)
	{
		alert("Cookies are enabled");
	}
else
	{
		alert("Cookies are not enabled");
	}
}
</script>

<p>An alert box should tell you if your browser has enabled cookies or not.</p>
</body>
</html>
```
This code tells you whether or not cookies are enabled in your browser.  Notice the onload attribute in the body tag.  This ensures the Javascript is loaded first by the browser and is good practice.  The navigator class has a few useful functions, but the most useful is the cookiesEnabled method.  This let's us know if the user will be able to view the page in a stateful manner or not.  This allows us to program for both cases - when the cookies are enabled and when they are not.  If the idea of state doesn't make sense, don't worry, I'm going to get into cookies generally below.

The another thing to understand here is the use of flow - namely through if/else statements.  An if statement is a way of ensuring code only executes under certain conditions.  The condition is listed in the parenthesis after the if keyword as follows:
```javascript
if ( [boolean statement] ) {

... code goes here

}
```
If the boolean statement evaluates to true then the code inside the curly braces will be executed.  If the boolean fails one can include another case like we did above:
```javascript
if ([ boolean statement] {

..code goes here...

} else {

.. code goes here ...

}
```
So here, should the boolean statement fail the code block in the curly braces after the else keyword will be executed.

So, looking back at our example we can see - if cookies are enabled, we let the user know with an alert statement telling them so.  Otherwise we tell them cookies aren't enabled.  So this is all possible because of the navigator class.  Let's take a closer look at this class and understand some history about the modern internet, all at the same time.
<h2>The navigator</h2>
We've seen one of the useful methods in the navigator class.  Let's dive a little deeper here:

The navigator is a 'builtin' object to JavaScript. It's technically part of the window object, which is a subset of the Browser object model. All browsers define their own slightly different object models, which is why certain pages only load properly on certain browsers - they were written with that browser in mind.  The navigator class has a long and interesting history, you can read more about it <a title="here" href="http://webaim.org/blog/user-agent-string-history/">here</a>.  I'll reference to the article below quiet a bit so please do read it (its not very long).  The navigator comes with the following methods and properties:
<ul>
<ul>
	<li>navigator.appCodeName: Displays the name of the browser, which is pulled from the browser's user-agent string (rendered useless). </li>
	<li>navigator.appName: Displays the Browser's name (rendered useless).</li>
	<li>navigator.appVersion: Displays the Browser version. (rendered useless).</li>
	<li>navigator.cookieEnabled: Returns a boolean that tells you whether a cookie is enabled.</li>
	<li>navigator.language: Tells you what language the browser is set to.</li>
	<li>navigator.onLine: Tells you whether the browser is on the internet or viewing a local file.</li>
	<li>navigator.platform: Tells you what operating system the browser is running on (this is useful for marketing purposes).</li>
	<li>navigator.userAgent: Returns the user-agent string (rendered useless).</li>
	<li>navigator.systemLanguage: Returns the language edition of the installed operating system, AKA what language the browser is written in (mostly useless).</li>
</ul>
</ul>
As you can see some of the navigator class is extremely useful, while other parts you'll never use.

Now onto cookies!
<h2>Why cookies are awesome</h2>
In the above example we told the user whether or not cookies were enabled.  Now we'll understand why we would want cookies to be enabled.  Cookies provide you with state for a given user. Each cookie has a unique id for a given user that let's you create unique browsing experiences for the users of your site. Without cookies it wouldn't be possible for you to "log in" to websites, or for websites to remember anything about you. This is because servers and clients are naturally "stateless".
<h2>How cookies work</h2>
Cookies are data, stored in small text files on your computer. They are usually saved in name-value pairs like: username=Eric Schles or Syncano=awesome. When a browser requests a web page from the server, cookies belonging to the page are added to the request. This way, the server gets the necessary data to "remember" information about users. JavaScript can create cookies, read cookies, and delete cookies with the property document.cookie. Note cookies need to be enabled in order for us to create, read, or use cookies, which we get from the navigator class. So any functionality relating to cookies should be wrapped in an "if" statement that checks if cookies are enabled.
<h2>Creating cookies</h2>
```javascript
<!doctype html>
<html>
<body>

<button type="button" onclick="displayCookies();">Display all cookies</button>
<button type="button" onclick="document.cookie='firstname=Eric'">Create a cookie with firstname</button>
<button type="button" onclick="document.cookie='lastname=Schles'">Create a cookie with lastname</button>
<button type="button" onclick="document.cookie='firstname=Eric;expires=-1'">Delete firstname cookie</button>
<button type="button" onclick="document.cookie='lastname=Schles;expires=-1'">Delete lastname cookie</button>

<script>
function displayCookies()
{
 var fname=getCookie("firstname");
 if(fname==null) {fname="";}
 if(fname!=""){fname="firstname=" fname;}
 var lname=getCookie("lastname");
 if(lname==null) {lname="";}
 if(lname!=""){lname="; lastname="lname;}
 alert(fname lname);
}
</script>
</body>
</html>

```
The above code should create five buttons. One that creates the firstname cookie, one that creates the lastname cookie, one that deletes the firstname cookie, one that deletes the lastname cookie, and one that displays all the cookies. Note this is a toy example and doesn't show you how people typically use cookies. A better example that does almost the same thing, but with far greater complexity is:
```javascript
<html>
<head>
<script>
function setCookie(cname,cvalue,exdays)
{
var d = new Date();
d.setTime(d.getTime() (exdays*24*60*60*1000));
var expires = "expires=" d.toGMTString();
document.cookie = cname   "="   cvalue   "; "   expires;
}

function getCookie(cname)
{
var name = cname   "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i  ) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
}
return "";
}

function checkCookie()
{
var user=getCookie("username");
if (user!="")
  {
  alert("Welcome again "   user);
  }
else 
  {
  user = prompt("Please enter your name:","");
  if (user!="" &amp;&amp; user!=null)
    {
    setCookie("username",user,365);
    }
  }
}
</script>
</head>
<body onload="checkCookie()">
</body>
</html>
```
If you don't completely understand this example don't worry. I include it more so that you are aware of how cookies are used in practice.
<h2>Exercise:</h2>
Write a simple website that lets you log in. The start page should ask you if you already have an account. If you don't, there should be a link to a page that allows you to create a username and password. Otherwise, you should be able to log in. Once logged in, you should have three functions: One to display the user's name, one to change the user's password, and one to log you out.

If the above exercise seems too daunting check <a title="here" href="http://www.w3schools.com/js/js_cookies.asp">here</a> for the solution.
<h2>DOM Elements - Nodes</h2>
Now that we've learned some javascript, let's make use of it.  Lets make sure we have the right picture in mind when dealing with the DOM:

<img src="http://www.teach-ict.com/as_as_computing/ocr/H447/F453/3_3_5/data_structures/miniweb/images/tree.jpg" alt="" />
<h3></h3>
Up until now we've only been manipulating attributes of our tags - creating some small sense of dynamics within our webpage.  Here we will learn how to create and remove html tags.  How to truly manipulate the DOM.  Thus allowing us to dynamically alter the overall structure of our webpages, creating a richer fuller user experience.
<h3>Definition: Node</h3>
To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element
```javascript
<!doctype html>
<html>
<body>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para=document.createElement("p");
var node=document.createTextNode("This is new.");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);
</script>

</body>
</html>

```
The createElement method creates the new tag. To write to this element, you have to create the text node using createTextNode. Append the text to newly created tag, and then simply append the newly created node to the DOM at the appropriate place. In this case, we are appending to the div tag. Therefore the new tag will appear inside the div.

<a href="http://www.w3schools.com/js/js_htmldom_document.asp">DOM reference</a>
<h2>Exercises:</h2>
Write a new HTML document and append the node created above to the body tag, rather than the div tag.

Write a new HTML document, and generate all the HTML using JavaScript
<h2>JavaScript timing events</h2>
With JavaScript, like most languages, you can time events.

There are two key methods:
<ul>
<ul>
<ul>
	<li>setInterval() - executes a function over and over again, at specified time intervals.</li>
	<li>setTimeout() - executes a function once, after waiting a specified number of miliseconds</li>
</ul>
</ul>
</ul>
Let's check out an example of setInterval
```javascript
<!DOCTYPE html>
<html>
<body>

<p>Click the button to wait 3 seconds, then alert "Hello".</p>
<p>After clicking away the alert box, an new alert box will appear in 3 seconds. This goes on forever...</p>
<button onclick="myFunction()">Try it</button>

<script>
function myFunction()
{
setInterval(function(){alert("Hello")},3000);
}
</script>

</body>
</html>

```
Now we'll look at setTimeout
```javascript
<!DOCTYPE html>
<html>
<body>

<p>Click the button to wait 3 seconds, then alert "Hello".</p>
<button onclick="myFunction()">Try it</button>

<script>
function myFunction()
{
setTimeout(function(){alert("Hello")},3000);
}
</script>

</body>
</html>

```
Looking at both of these examples it should be obvious the difference between setTimeout and setInterval.  The setTimeout does an action once and the setInterval does an action continuously.  To try this, please copy paste the above examples into your favorite text editor and run the code.
<h2>Conclusion</h2>
This concludes our introduction to JavaScript. Quick shout out to the w3schools JavaScript tutorial, which heavily influenced this post. For more help with JavaScript and web development check out the great tutorials at: <a href="https://developer.mozilla.org/en-US/">MDN</a>.