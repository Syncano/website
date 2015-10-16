---
path: '/blog/intro-to-node-js/'
layout: post
title: Intro to Node.js
date: 2015-03-18 11:21:29
author: eric
categories: ['Javascript', 'Tutorials']
image: intro-node-js.png
summary: "Node.js is an engine for running javascript locally and it is a library for doing server-side web development. In short, it is a development platform for JS on the server."
---
<p>Node.js is an engine for running javascript locally and it is a library for doing server-side web development.  In short, it is a development platform for JS on the server.<!--more--></p>

<h2>Prerequisites</h2>

<p>Writing applications with node means understanding the core of JavaScript first. Please do check out <a href="http://www.syncano.com/getting-know-javascript-intro/">this introduction</a> if you are unfamiliar.</p>

<h2>Installation</h2>

<p>Installing node varies from platform to platform.  </p>

<h3>On Ubuntu</h3>

```javascript
sudo apt-get install nodejs #installing node
```
```javascript
sudo apt-get install npm #installing node package manager
```

<p>Then you'll need to do the following on the command line:</p>

<p><code>$ sudo ln -s /usr/bin/nodejs /usr/bin/node</code></p>

<p>The final command is needed because there was already an application called Node on Ubuntu.  The last command changes the name of 'nodejs' to just 'node' when run from the command line.  </p>

<h3>On Mac and Windows</h3>

<p>Fortunately, the Node.js website has <a href="http://nodejs.org/download/">installers</a> for mac and windows.  So installation on those platforms is a breeze.</p>

<h2>Hello world</h2>

<p>Once you have node installed, the next thing to do is ensure your installation is correct. Do this by opening a terminal and typing:</p>

<code>node</code>

<p>This opens up the node REPL, which allows you to type in small pieces of code (typically one liners) to verify your code is correct.  This is great for testing small pieces of code and allows your code to be more bug free.</p>

<p>Once you've done the above, type:</p>

<code>console.log("Hello world");</code>

<h2>>Hello world with the web</h2>

<p>Now that we have verified that node works, we'll get started with our first server.</p>

<p>Open up your favorite text editor for writing code - for JS I really like vim - And type in the following:</p>

```javascript
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(5000);

console.log("Server running on http://localhost:5000");
```

<p>For those of you not used to writing your own servers, this may all seem a bit foreign.  So let's go line by line.</p>

<p>The first line, <em>var http = require("http");</em> says, we require the HTTP library (that comes with Node) and we set it equal to the variable 'http' in our current namespace.  </p>

<p>The next few lines are all connected and inter-related.  The <em>http</em> object has a method called <em>createServer</em> - this method runs our server.  A function is passed into the server that handles all the configuration.</p>

<p>For those coming from other languages, this programming paradigm may look odd, but it can be very powerful in terms of conserving lines of code.</p>

<p>Here's another way we have written the same code:</p>

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

<p>If you run both pieces of code, you should see the same thing.  </p>

<p>Breaking down the code might make it easier to digest what's going on.  The function f handles configuration for the server - specifically writing out the head of the content with <em>response.writeHead</em>, writing out the actual text that the browser displays with <em>response.write</em>, and telling the browser when to end the response with <em>response.end</em>.  </p>

<p>The last thing to observe is the <em>server.listen(5000);</em> line - this tells node to actually run the server and on port 5000.  </p>

<h2>A Real Example</h2>

<p>Now that we know how to send raw text through a browser, let's send some HTML.</p>

<strong>server.js:</strong>

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

<strong>test.html:</strong>

```javascript
<!doctype html>
<html>
    <body>
        <p>Hello world! For real!</p>
    </body>
</html>
```

<p>We haven't done too much different here.  The biggest jump is that we are reading  from a file instead of passing in a string to be interpreted by the browser.</p>

<p>Notice that we can still call res (which is short for response) from inside fs.readFile.  </p>

<h2>Understanding the power of Node.js</h2>

<p>Now that we understand how to serve content (which is mostly what the library is for) let's delve more into the Node.js execution environment.  </p>

<h3>Event-Driven Asynchronous Callbacks.</h3>

<p>For most compilers and interpreters, code is executed in order, line by line.  Examples of this include the Java compiler, the Python interpreter, the Ruby interpreter, the C compiler, and the C++ compiler.  What makes the Node.js run time different is this:</p>

```javascript
    var solution = solve_boolean_satisfiability_problem(data, function(err,data){
        var result = data;
    }); 
    console.log("Hello there");
```

<p>The first line is a function that solves the boolean satisfiability problem, which is NP-Complete - meaning it takes a long time for a computer to solve such a problem.  The point is - that first line is going to take a VERY long time to run.  The second line on the other hand simply prints out "Hello there" to the console and should complete very, very fast.  </p>

<p>So what the Node.js interpreter will do is execute the first command as a callback - which means, when the result is ready, the function will tell the program it is and return the result.  So, the Node.js interpreter starts the execution of the first command, doesn't wait for it to finish and then immediately executes the second command.  This means, even though the first command hasn't finished yet, the program can still return results quickly!</p>

<p>This kind of programming isn't really that great when you expect your results to be executed in order, but for web programming - it's a very good way to do it.</p>

<p>It's important to note the reason this is possible is because we passed an anonymous function as second parameter to the <em>solve_boolean_satisfiability_problem</em> function.  Had we merely called the function without the second anonymous function, there wouldn't be any callback and the commands would execute synchronously.  </p>

<h2>Some minor housekeeping</h2>

<p>Okay - so now you can start designing web servers with javascript and then run your front-end code (which is pretty nice!).  However, most programmers like being able to split up their work across files.  So here we'll cover that.</p>

<strong>file name - server.js</strong>

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

<p>The only thing new here is that we wrapped all our previous work in a function that we can use in other files.  All we need to do is require the code in another file.  Here is an example of how we might use the above file:</p>

<strong>filename - run.js</strong>

```javascript
var server = require("./server");

server.start();
```

<p>That's all for now.  Thanks for checking out this simple tutorial!</p>