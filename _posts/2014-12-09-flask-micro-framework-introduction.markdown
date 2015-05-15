---
layout: post
title: Introduction to Flask as a Micro-framework
date: 2014-12-09 11:21:29
author: eric_schles
categories: ['Flask', 'How Tos', 'Python', Tutorial]
share_image: /public/intro-to-flask-pt-1.jpg
summary: "For those of you who are not familar with it, Flask is a web development framework written in Python. To understand how to use Flask, let’s first consider the definition of a framework."
---
For those of you who are not familar with it, Flask is a web development framework written in Python. To understand how to use Flask, let's first consider the definition of a framework. <!--more-->
<h2>Def: Framework :=</h2>
A framework in coding is a set of classes, functions, and variables that form a mindset for thinking about how to solve a given set of challenges within a specific problem domain.

With this definition in hand, you can define a web development framework as a set of classes, functions, and variables that form a mindset for thinking about how to solve challenges around building websites.

Flask's mindset is "web development: one drop at a time." The name is intended to conjure the imagery of a small Flask of water - because it requires only a little "water" to get things done. Flask is also referred to as a microframework, since you need very little knowledge to use Flask correctly. However, there are plenty of extensions and advanced features that allow it to be used as much more.

Enough talk, let's see what working with Flask really looks like!
<h2>Example 1: Hello World (hello.py)</h2>
The true power of Flask is how little you need to make a running application. Here is a complete (albeit minimal) app in 6 lines (of actual code):
{% highlight javascript linenos=table %}from flask import Flask

app = Flask(__name__)`

@app.route("/")
def hello():
    return "Hello World!"

app.run(debug=True)
{% endhighlight %}
The sections of the code are as follows:
<h3>Configuration:</h3>
{% highlight javascript linenos=table %}from flask import Flask

app = Flask(__name__)
{% endhighlight %}
The configuration section of the app is where setup is done. In larger applications, this is often done in <code>__init__.py</code>.
<h3>View:</h3>
{% highlight javascript linenos=table %}@app.route("/")
def hello():
    return "Hello World"
{% endhighlight %}
The view section of the app is largely the meat and potatoes of any Flask app. It's where the routing for urls are done, where rules around how to generate html templates are written, and it's also where other methods for processing user input are stored.
<h3>Run Server:</h3>
{% highlight javascript linenos=table %}app.run(debug=True)
{% endhighlight %}
The run section of the app is typically where anything related to the server is stored. The server is the part of the code that actually executes the website. For those of you familar with C++ or Java, this can be thought of as the main part of the program.

Now that we've seen how easy it is to write a very simple website in Flask, let's get a little more complex.
<h2>Example 2: A more complete application</h2>
While you can just send Python strings to the front-end, it's probably a good idea to send actual html. To see how to do this, you will write a slightly more complex Flask app. This project lives <a href="https://github.com/EricSchles/example2-intro-to-flask">on github</a>
<h3>with_templates.py:</h3>
{% highlight javascript linenos=table %}from flask import Flask, render_template

app = Flask(__name__)

@app.route("/<name>")
@app.route("/")
def index(name=''):
    return render_template("index.html",name=name)

app.run(debug=True)
{% endhighlight %}
<h3>index.html:</h3>
{% highlight javascript linenos=table %}<!doctype html>
<html>
<head>
</head>
<body>
&#123;% if name != '' %&#125;
  <p>Hello there, {{name}}</p>
&#123;% else %&#125;
  <p> Hello there </p>
&#123;% endif %&#125;
</body>
</html>
{% endhighlight %}
As you can see, you can send code to the frontend AND use simple flow of control primitives afterward to decide what kind of html is shown to the user. This is one of the reasons having a templating engine like jinga (which comes with Flask) is so powerful. Notice the difference between normal html and the templated piece: the use of openning<em> &#123;% </em> and closing<em> %&#125; </em> as well as the starting and closing of if/then statements:

<code>&#123;%if [boolean statement] %&#125; ...[code goes here] ... &#123;% endif %&#125;</code>

You must use similar kinds of primitives for for <em>-loops</em> and other simple programming primitives.

When dealing with variables you receive from views functions, use the following:

<code>{{ [variable goes here] }}</code>

This syntax is also used for passing in url paths:

<code>{{ url_for('[view method name goes here]') }}</code>

These primitives form a sort of psuedo pythonic syntax which allows you to make use of Python in html.

The next thing to do is look at an app that let's you call view methods to accomplish specific tasks. Then you'll be ready to build your first 'real' Flask app.
<h2>Example 3: An app with view method calls:</h2>
Full project lives [on github]https://github.com/EricSchles/example3-intro-to-flask
<h3>with_methods.py:</h3>
{% highlight javascript linenos=table %}from flask import render_template, request, jsonify, flash
from app import app

@app.route("/", methods=["GET","POST"])
@app.route("/index", methods=["GET","POST"])
def index():
    return render_template("index.html")

@app.route("/add/<int:first>/<int:second>")
@app.route("/add")
def add(first='',second=''):
    if first == '':
        first = int(request.get("first"))
    if second == '':
        second = int(request.get("second"))
    result = first + second
    return render_template("index.html",result=result)

@app.route("/send_data", methods=["GET","POST"])
def send_data():
    data={"Eric Schles":"eric.schles@syncano.com",
          "job":"developer evangelist",
          "mission":"end slavery",
          "training for":"the olympics",
          "hobbies":["guitar","rock climbing"],
          "friends":"everyone"
          }
    return jsonify(data)
{% endhighlight %}
<h3>layout.html:</h3>

{% highlight javascript linenos=table %}

<html>
  <head>
    <title>Syncano is awesome</title>
 <style>
 ul{
  list-style-type: none;
 };
</style>
 </head>
  <body>
    <hr>
    &#123;% with messages = get_flashed_messages() %&#125;
    &#123;% if messages %&#125;
    <ul>
    &#123;% for message in messages %&#125;
        <li>{{ message }} </li>
    &#123;% endfor %&#125;
    </ul>
    &#123;% endif %&#125;
    &#123;% endwith %&#125;
    &#123;% block content %&#125;&#123;% endblock %&#125;
<div class="footer">
<p align="center">
</p>  
<br />
<br />
    <div align="center">Copyrights &amp;copy;  All rights are reserved</div>
</div>
</div>
  </body>
</html>

{% endhighlight %}

<h3>index.html:</h3>
{% highlight javascript linenos=table %}

<!-- extend base layout -->
&#123;% extends "layout.html" %&#125;
&#123;% block content %&#125;`
<br />
<br />
<br />
<br />
<br />
<div align="center">
<form method="post" action="{{ url_for(&#39;add&#39;) }}">
 <ul>
  <li>First:<input type="text" name="first" required></li>
  <li>Second:<input type="text" name="second" required></li>
  <br />
 <button type="submit">add numbers</button>`
 </ul>
</form>
<p>{{ result }}</p>
<br />
<br />
<form method="post" action="{{ url_for(&#39;send_data&#39;) }}">
 <button type="submit">hit an api</button>
</form>
</div>
&#123;% endblock %&#125;

{% endhighlight %}
This app does a whole bunch of things so let's break it down.
{% highlight javascript linenos=table %}@app.route("/", methods=["GET","POST"])
@app.route("/index", methods=["GET","POST"])
def index():
    return render_template("index.html")
{% endhighlight %}
The '@app.route' now has 'GET' and 'POST' methods. These are methods of the HTTP protocol and are used for posting data to the server and getting data from the server. So if you need to be able to send data from the user to the server, use the 'POST' method. If you need to be able to display data the user receives from the server, than you would include the 'GET' method.

Also notice that you can have multiple routes for the same method. So right now, both http://localhost:5000/ and http://localhost:5000/index point to the same html file: index.html.
<h3>Next you have:</h3>
{% highlight javascript linenos=table %}@app.route("/add/<int:first>/<int:second>",methods=["GET","POST"])
@app.route("/add", methods=["GET","POST"])
def add(first='',second=''):
    if first == '':
        first = int(request.get("first"))
    if second == '':
        second = int(request.get("second"))
    result = first + second
    return render_template("index.html",result=result)
{% endhighlight %}
Which takes in parameters from the user. With this method, there are two ways to get user input: by passing it into the url or by filling in a form.

Notice the first route:

<code>@app.route("/add/<int:first>/<int:second>",methods=["GET","POST"])</code>

specifically:

<code>"/add/<int:first>/<int:second>"</code>

This design pattern can be useful when creating an API and is good practice for how an API should be used by developers. Then all you need is to have curl installed – no programming language specifics needed. Also notice the use of <em>first=""</em> and <em>second=""</em>. This lets us get information from the user via a form found in index.html:
{% highlight javascript linenos=table %}

<form method="post" action="{{ url_for(&#39;add&#39;) }}">
<ul>
  <li>First:<input type="text" name="first" required></li>
  <li>Second:<input type="text" name="second" required></li>
  <br />
 <button type="submit">add numbers</button>
 </ul>
</form>
<p>{{ result }}</p>

{% endhighlight %}

Notice here a few things. First, you use <code>url_for</code> and <code>{{ }}</code> to call the method in the with_methods.py file. This is the way to reference functions from your 'views' file in html. Also, notice the use of 'name' in form. It's the same names as the parameters that you "get" using <code>request.form.get</code> – this is no accident. It's in fact, how you get data from the user for forms.

This illustrates the two ways you can get data form the user. As a final point, notice <code>{{result}}</code> in index.html: This is the same as the name of the value returned by add. This is also no accident. It's what allows flask to display the result to the user.
<h3>Next, you have:</h3>
{% highlight javascript linenos=table %}
@app.route("/send_data", methods=["GET","POST"])
def send_data():
data={"Eric Schles":"eric.schles@syncano.com",
"job":"developer evangelist",
"mission":"end slavery",
"training for":"the olympics",
"hobbies":["guitar","rock climbing"],
"friends":"everyone"
}
return jsonify(data)
{% endhighlight %}

This is the typical API way to pass data back to the user. Granted I prepopulated the data to be the same every time, which would make for a very bad API. Typically you'll want to query a database for the results of a given SPI call. Don't worry though, the next application will show you how to do this and display information back to the user.

The only real thing that's different here is that you're passing back a data structure instead of a single variable to the html. It's good practice to pass back XML or JSON, so you aren't bound to a particular programming language. Of course you are free to pass back serialized objects, but they will be language specific and are best suited for internal APIs. Anything used in a generalized way or as a web service should follow general object standards like XML and JSON.
<h2>Conclusion:</h2>
Flask is a fun and easy framework that lets you write full applications in just a few lines. It's great for:
<ul>
  <li>Prototyping small pieces of code and playing around with different ideas (ie. at a hackathon or some other coding competition)</li>
  <li>Prototyping products for work or building internal websites for only a small number of people</li>
  <li>Building something quickly for investors to show that you know what you are doing</li>
  <li>Coding up simple examples for students to work through when they have questions.</li>
</ul>
However, since Flask is quite simple, it can require writing a lot of your app's functionality yourself or relying on libraries to glue together your application.

Stay tuned for part 2 of our Flask intro which will conclude our understanding of a basic Flask app. We'll look at the 'M' in the MVC framework (aka models), cover a basic primer on databases, and discuss ways Flask can be used.