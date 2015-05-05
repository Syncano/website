---
layout: post
title: Intro to Express.js
date: 2015-03-13 11:21:29
author: eric_schles
summary: "Express.js is a web framework for the middleware of your Node.js application. It’s responsible for passing data from the backend to the front-end and vice versa. For those of you coming from Ruby, express is similar to Sinatra; for those of you coming from Python, it is similar to Flask."
categories: ['javascript', 'Tutorial']
share_image: /public/intro-express-js-node-js.png
---

Express.js is a web framework for the middleware of your Node.js application. It's responsible for passing data from the backend to the front-end and vice versa. For those of you coming from Ruby, express is similar to <a href="http://www.sinatrarb.com/">Sinatra</a>; for those of you coming from Python, it is similar to <a href="http://flask.pocoo.org/">Flask</a>.
<h2>Prerequisites</h2>
Writing applications with Express.js means first understanding the core of JavaScript and the Node.js run time. Please check out <a href="http://www.syncano.com/getting-know-javascript-intro/">this introduction to JavaScript</a> and <a href="https://github.com/EricSchles/intro_node">this introduction to Node</a> if you are unfamiliar.
<h2>Installation</h2>
Express.js is extremely easy to install. All one needs is to have Node.js already installed. Since Node.js comes with npm, the Node package manager, it is extremely easy to install Express once you already have Node.

To install, open a terminal window and type the following:
<code>$ sudo npm install express 
$ sudo npm install hbs #not required
$ sudo npm install body-parser #not required
</code>

While not required, we install hbs because it will make our lives much easier.

<strong>Note: npm only installs packages to a directory and any of its subdirectories. Therefore, if you try to run express from some other disassociated directory, it won't work.</strong>

<h2>Verifying installation</h2>
Once you have express installed, the next thing to do is ensure your installation is correct.

Do this by opening a terminal window and typing:
<code>$ node
</code>
This opens up the Node REPL, which allows you to type in small pieces of code (typically one-liners) to verify your code is correct. It's great for testing small pieces of code and allows your code to be more bug free.

Once you've done the above, type:
{% highlight javascript linenos %}var express = require("express");
{% endhighlight %}
If this returns undefined it means you have installed express correctly and are ready to move on!
<h2>Hello World</h2>
Now that you know Express.js is installed correctly, enter the following into a file called <em>app.js</em> (this is by convention - you can call it whatever you like).
{% highlight javascript linenos %}
var express = require("express");

var app = express(); //starts up your app



app.get("/",function(req,res){

    res.send("Hello world");

});



app.get("/Hi", function(req,res){

    res.send("Hi");

});



app.listen(5000);

console.log("Server started on http://localhost:5000");
{% endhighlight %}
You can run this by going to the directory you saved this file in and typing out the following:
{% highlight javascript linenos %}node app.js
{% endhighlight %}
This will start the web server. Then you can head over to http://localhost:5000 in your favorite web browser, and the words "Hello world" should be displayed to you.

So let's break down what happened here:

First we started a new <em>app</em> object, which is initialized by <em>express();</em>

The app object has various methods associated with it. Check out the <a href="http://expressjs.com/api.html">full list here</a>. Each method is set with respect to the server. For example - above, <em>app.get()</em> means: when a get request is sent to the server, do the following action. Notice there are two parameters, "/", and a function. The first parameter is called the route and tells the server when to call the action. This is relative to the root domain of the website. So "/" refers to localhost:5000/. Everything after localhost:5000 is what the server will use to make calls for different data or actions. So the "/Hi" route will be called when we type in localhost:5000/Hi to the browser.

The next thing to understand is the second parameter, a callback. This function determines what will be sent back to the browser from the server. In this case, both routes just send back a string. This is great for testing your server and making sure your routes work. This won't always be the case, so it's important to test at this stage with a dummy route.

The final piece of the above code is <em>app.listen(5000);</em> which tells the server to run and to run on port 5000.
<h2>Comparing Express with Node</h2>
Technically, everything you can do with Express you can do with Node, however compare the following pieces of code, one written with Express and the other with Node. Note: they do the same thing.

Written with Node.js alone:
{% highlight javascript linenos %}


var http = require("http");



http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/plain"});

  response.write("Hello World");

  response.end();

}).listen(5000);



console.log("Server running on http://localhost:5000");
{% endhighlight %}
Written with Express.js and Node.js:
{% highlight javascript linenos %}
var express = require("express");

var app = express(); //starts up your app



app.get("/",function(req,res){

    res.send("Hello world");

});



app.listen(5000);

console.log("Server started on http://localhost:5000");
{% endhighlight %}
Notice how much less code you need to write when you use both Node and Express. The routing information isn't even clear in the Node-only code! Clearly, using Express and Node together is superior in terms of readability and functionality.
<h2>A Real example</h2>
Now that we understand how easy it is to get up and running, let's start working with our front-end and make it dynamic. For that, we'll need hbs.
<h4>Verifying installation</h4>
{% highlight javascript linenos %}
var express = require("express");

var app = express();

var hbs = require("hbs");



app.set("view engine", "html");

app.engine("html", hbs.__express);



app.get("/", function(req,res){

    res.render("index");

});



app.listen(5000);



console.log("Server started on http://localhost:5000")
{% endhighlight %}
This piece of code isn't dynamic. I include it mostly to go over the basics of hbs. Notice there is a bit more set up required:
{% highlight javascript linenos %}app.set("view engine", "html");
{% endhighlight %}
This sets up what hbs will render, in our case HTML
{% highlight javascript linenos %}app.engine("html", hbs.__express);
{% endhighlight %}
This tells the hbs we'll be making use of HTML and Express.

The second thing to notice is <em>res.render</em>. This assumes that there exists a document called <em>index.html</em> in a folder called <em>views</em>. So the file structure of the app should now be:
{% highlight javascript linenos %}
root_dir/

 app.js

 views/

    index.html
{% endhighlight %}
In general, <em>res.render([file name])</em> looks for <em>views/[file name].html</em>
<h4>A Real example:</h4>
app.js
{% highlight javascript linenos %}
var express = require("express");

var app = express();

var hbs = require("hbs");

var bodyParser = require("body-parser");



app.set("view engine", "html");

app.engine("html", hbs.__express);

app.use(bodyParser.urlencoded());



app.get("/", function(req,res){

    res.render("index",{name:"Eric Schles",greeting:"Hello there"});

});



app.listen(5000);



console.log("Server started on http://localhost:5000")
{% endhighlight %}
views/index.html:

{% highlight javascript linenos %}

<!doctype html>
<html>
<head></head>
<body>

<p>{{{greeting}}},</p>
<p>{{{name}}}</p>

</body>
</html>

{% endhighlight %}


Notice that we added a little more boilerplate:  

{% highlight javascript linenos %}

app.use(bodyParser.urlencoded());

{% endhighlight %}

This will be used to parse the HTML code that is passed to the render function in our routing method.

Notice also that we pass in JSON to our index. The keys above will be used in the HTML as references and the values in those keys will be displayed. So above our JSON has two keys: name and greeting. In our HTML, we make use of the placeholder notation - {{{ }}} and the values will be rendered dynamically.

The reason this is powerful is now we can substitute in the JSON we have here for a database call, which will be rendered on demand. We'll show you how to do this in the next Express post. To get notified when that tutorial is live, sign up for our blog newsletter below.