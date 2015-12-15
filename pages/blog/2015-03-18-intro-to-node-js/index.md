---
path: '/blog/intro-to-node-js/'
layout: post
title: Intro to Node.js
description: "Node.js is an engine for running javascript locally and it is a library for doing server-side web development. It is a development platform for JS on the server."
date: 2015-03-18 11:21:29
author: eric
categories: ['Javascript', 'Tutorials']
image: intro-node-js.png
summary: "Node.js is an engine for running javascript locally and it is a library for doing server-side web development. In short, it is a development platform for JS on the server."
---
Node.js is an engine for running javascript locally and it is a library for doing server-side web development. In short, it is a development platform for JS on the server.

## Prerequisites

Writing applications with node means understanding the core of JavaScript first. Please do check out [this introduction](http://www.syncano.io/blog/getting-know-javascript-intro/) if you are unfamiliar.

## Installation

Installing node varies from platform to platform.

### On Ubuntu

```javascript
sudo apt-get install nodejs #installing node
```
```javascript
sudo apt-get install npm #installing node package manager
```

Then you'll need to do the following on the command line:

`$ sudo ln -s /usr/bin/nodejs /usr/bin/node`

The final command is needed because there was already an application called Node on Ubuntu. The last command changes the name of 'nodejs' to just 'node' when run from the command line.

### On Mac and Windows

Fortunately, the Node.js website has [installers](http://nodejs.org/download/) for mac and windows. So installation on those platforms is a breeze.

## Hello world

Once you have node installed, the next thing to do is ensure your installation is correct. Do this by opening a terminal and typing:

`node`

This opens up the node REPL, which allows you to type in small pieces of code (typically one liners) to verify your code is correct. This is great for testing small pieces of code and allows your code to be more bug free.

Once you've done the above, type:

`console.log("Hello world");`

## >Hello world with the web

Now that we have verified that node works, we'll get started with our first server.

Open up your favorite text editor for writing code - for JS I really like vim - And type in the following:

```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(5000);

console.log("Server running on http://localhost:5000");
```

For those of you not used to writing your own servers, this may all seem a bit foreign. So let's go line by line.

The first line, _var http = require("http");_ says, we require the HTTP library (that comes with Node) and we set it equal to the variable 'http' in our current namespace.

The next few lines are all connected and inter-related. The _http_ object has a method called _createServer_ - this method runs our server. A function is passed into the server that handles all the configuration.

For those coming from other languages, this programming paradigm may look odd, but it can be very powerful in terms of conserving lines of code.

Here's another way we have written the same code:

```javascript
var http = require("http");

var f = function(request, response) {
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write("Hello world");
        response.end();
}

var server = http.createServer(f);

server.listen(5000);

console.log("Server running on http://localhost:5000");
```

If you run both pieces of code, you should see the same thing.

Breaking down the code might make it easier to digest what's going on. The function f handles configuration for the server - specifically writing out the head of the content with _response.writeHead_, writing out the actual text that the browser displays with _response.write_, and telling the browser when to end the response with _response.end_.

The last thing to observe is the _server.listen(5000);_ line - this tells node to actually run the server and on port 5000\.

## A Real Example

Now that we know how to send raw text through a browser, let's send some HTML.

**server.js:**

```javascript
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('test.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(5000);

```

**test.html:**

```javascript
<!doctype html>
<html>
    <body>
        <p>Hello world! For real!</p>
    </body>
</html>
```

We haven't done too much different here. The biggest jump is that we are reading from a file instead of passing in a string to be interpreted by the browser.

Notice that we can still call res (which is short for response) from inside fs.readFile.

## Understanding the power of Node.js

Now that we understand how to serve content (which is mostly what the library is for) let's delve more into the Node.js execution environment.

### Event-Driven Asynchronous Callbacks.

For most compilers and interpreters, code is executed in order, line by line. Examples of this include the Java compiler, the Python interpreter, the Ruby interpreter, the C compiler, and the C++ compiler. What makes the Node.js run time different is this:

```javascript
    var solution = solve_boolean_satisfiability_problem(data, function(err,data){
        var result = data;
    }); 
    console.log("Hello there");
```

The first line is a function that solves the boolean satisfiability problem, which is NP-Complete - meaning it takes a long time for a computer to solve such a problem. The point is - that first line is going to take a VERY long time to run. The second line on the other hand simply prints out "Hello there" to the console and should complete very, very fast.

So what the Node.js interpreter will do is execute the first command as a callback - which means, when the result is ready, the function will tell the program it is and return the result. So, the Node.js interpreter starts the execution of the first command, doesn't wait for it to finish and then immediately executes the second command. This means, even though the first command hasn't finished yet, the program can still return results quickly!

This kind of programming isn't really that great when you expect your results to be executed in order, but for web programming - it's a very good way to do it.

It's important to note the reason this is possible is because we passed an anonymous function as second parameter to the _solve_boolean_satisfiability_problem_ function. Had we merely called the function without the second anonymous function, there wouldn't be any callback and the commands would execute synchronously.

## Some minor housekeeping

Okay - so now you can start designing web servers with javascript and then run your front-end code (which is pretty nice!). However, most programmers like being able to split up their work across files. So here we'll cover that.

**file name - server.js**

```javascript
var http = require("http");

function start() {
  http.createServer(function(req,res){
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
    }).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
```

The only thing new here is that we wrapped all our previous work in a function that we can use in other files. All we need to do is require the code in another file. Here is an example of how we might use the above file:

**filename - run.js**

```javascript
var server = require("./server");

server.start();
```

That's all for now. Thanks for checking out this simple tutorial!
