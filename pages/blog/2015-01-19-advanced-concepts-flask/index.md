---
path: '/advanced-concepts-flask/'
layout: post
title: Advanced Concepts in Flask
date: 2015-01-19 11:21:29
author: eric
categories: ['Flask', 'Python']
image: advanced-flask-concepts1.png
summary: "A lot of the concepts we mention in this article can be found in Armin Ronacher’s presentation on advanced Flask patterns. Mr.Ronacher did great job enumerating the concepts, so I want to make sure he’s given due credit."
---
<p>A lot of the concepts we mention in this article can be found in <a href="https://speakerdeck.com/mitsuhiko/advanced-flask-patterns">Armin Ronacher's presentation</a> on advanced Flask patterns. Mr.Ronacher did great job enumerating the concepts, so I want to make sure he's given due credit.<!--more--></p>

<h2>Introduction - an application that you can scale.</h2>

<p>Advanced Flask concepts are used to build applications that scale, so let's talk a little bit about what scaling an application means.</p>

<p>There are two closely related notions when it comes to scaling - how the application is affected with an increase in users and how it is affected with an increase in programmers writing it. These problems are at the heart of software engineering. The central questions: How do we work effectively in teams of 20 developers, 40 developers, or even thousands? And how do we handle maximum load on our system?</p>

<p>These questions may seem simple, but the devil is in the details.  In a poorly designed application, millions of lines could eventually be thrown out. On the flip side, there are some systems that have been around since the 1970s and are still being used today. They probably don't work as well as newer systems, but they still work - which is the only true measure of an engineered system: how long it lasts, especially at scale.</p>

<h2>Scaling your code base</h2>

<p>Scaling a code base requires good design, which can be hard with changing requirements from end users and clients. In order to manage the speed at which a business moves, it's important to know in general how your application works and what it will do. Then you can write less code in the future.</p>

<p>There are some ideas to keep in mind when designing your code:</p>

<ol>
<li>Modularity of functionality</li>
<li>Loosely coupled code is better than tightly coupled (usually)</li>
<li>Comment often</li>
<li>Reuse code as often as possible</li>
<li>Write code that is as general as possible</li>
<li>Test as often as possible, both at the module level and the system level</li>
<li>Give yourself enough time to get things done and then stay within budget</li>
<li>Collaboration is extremely important - pair program and have solid metrics about your code</li>
</ol>


<p>It should be noted that all of the points listed above will not be discussed in this post; points 6 - 8 will be largely ignored.</p>

<p>Let's talk about modularity of functionality. When designing an application, typically you'll first decide on the general design of the application. For example: if we build a website that helps raise awareness about slavery, what functionality does it need?</p>

<ol>
<li>A server to serve the pages. - concrete</li>
<li>A database to store any user data. - concrete</li>
<li>A way to log user activity so we can talk about all the awareness we are raising. - too vague</li>
<li>A content management system for the site administrator to update the website - concrete</li>
<li>A way to engage with the community we develop. - too vague</li>
<li>An RSS feed. - concrete</li>
<li>A way to centrally manage our social presence. - concrete</li>
<li>Support for video content. - concrete</li>
</ol>


<p>Notice that some of these ideas are vague from a software engineering standpoint, while others are straightforward.</p>

<p>So let's break up the vague concepts:</p>

<p><strong>A way to log user activity so we can talk about all the awareness we are raising.</strong></p>

<p>can be split into:</p>

<ol>
<li>A database table logging user activity in our system.</li>
<li>A function or set of functions that log when an event takes place in our system that we care about.</li>
</ol>


<p><strong>A way to engage with the community we develop.</strong></p>

<p>can be split into:</p>

<ol>
<li>A message board with threads for people to discuss relevant content.</li>
<li>A comments section after each blog post.</li>
<li>A set of email addresses so people can reach out to us about the cause.</li>
</ol>


<p>Now that we have our list of pieces for our application, let's see what we get for free with Flask and what we need to write.</p>

<p><h2>What we get with Flask:</h2></p>

<p>Server - Flask comes with a development server and there are many plug and play technologies with Flask for production.</p>

<p>Database - Flask comes with SQLite and there are lots of other options.</p>

<p>Logging user activity? We'll need to create this functionality within our larger application.</p>

<p><strong>What we need to write:</strong></p>

<p>A content mangagement system - this is the biggest part of the application. Notice we can have comments and video in here so we don't need to create separate functionality for those.</p>

<p>A message board - this could be part of our content management system, but it's probably best to create this in it's own module with a fair bit of reuse from the CMS.</p>

<p>An RSS feeder - we'll probably create this in it's own section of the application.</p>

<p>An email client - not like anything else we have so far, so we'll create this from scratch.</p>

<p>Having your design set up, will usually save you some time. In this example, knowing the message board and CMS will require some code reuse, should save some time.  Often the simple act of outlining the steps of your design is enough to see the correct way to design the system. Sometimes, of course, the design changes.</p>

<h2>Blue prints</h2>

<p>So do we go ahead and build five seperate apps given there will be reuse of some code? Heck no! That's what blue prints are for.</p>

<p>Blue prints let you design one big application running multiple apps at once. They allow a lot more modularity of design and in general make it easy to keep your code base organized. They also make your code more fault tolerant. This means when part of your code breaks, it will be easier to find the cause, and you'll have fewer bugs (because you have a bunch of small applications instead of one very large one).</p>

<h2>Part 1: Setting up our Blueprints</h2>

<p>If you're already familar with Flask, setting up blue prints will feel very familar.</p>

<p>Setting up a blue print is almost the same syntax as setting up a Flask app. The only difference is that you register blue prints to the app after you've made them.</p>

<h2>setting up our first website:</h2>

<p><a href="https://github.com/EricSchles/contexts/tree/master/slavery_website">Find the full project on github</a></p>

<h2>directory structure:</h2>

<pre><code class="python">run.py
/slavery_website/
    __init__.py
    blog/
        __init__.py
        static/
        templates/
        views.py
        models.py
    cms/
        __init__.py
        static/
        templates/
        views.py
        models.py
    email_client/
        __init__.py
        static/
        templates/
        views.py
        models.py
    feeder/
        __init__.py
        static/
        templates/
        views.py
        models.py
    logger/
        __init__.py
        static/
        templates/
        views.py
        models.py
    message_board/
        __init__.py
        static/
        templates/
        views.py
        models.py
</code></pre>

<h2>The start of some of the views.py files</h2>

<p>cms/views.py</p>

<pre><code class="python">from flask import Blueprint, render_template
from models import *
cms = Blueprint("cms",__name__,template_folder='templates')

@cms.route("/add",methods=["GET","POST"])
def add():
    return render_template("admin.html")

@cms.route("/remove",methods=["GET","POST"])
def remove():
    return render_template("admin.html")

@cms.route("/view_entries",methods=["GET","POST"])
def view_entries():
    entries = get_entries()
    return render_template("entries.html",entries=entries)
</code></pre>

<p>logger/views.py</p>

<pre><code class="python">from flask import Blueprint, render_template
from models import *
logger = Blueprint('logger',__name__,template_folder="templates")

@logger.route("/analytics/page_views",methods=["GET","POST"])
def page_views():
    pages = get_page_views()
    return render_template("viewer.html",pages=pages)

@logger.route("/analytics/button_press", methods=["GET","POST"])
def button_press():
    buttons = get_button_press()
    return render_template("viewer.html",buttons=buttons)
**Some functions snipped**
</code></pre>

<p>slavery_website/<strong>init</strong>.py:</p>

<pre><code class="python">from flask import Flask
from cms.views import cms
from logger.views import logger

app = Flask(__name__)
app.register_blueprint(cms, url_prefix='/admin') 
app.register_blueprint(logger,url_prefix='/analytics')
</code></pre>

<p>As you can see there isn't much new going on here.  The Blueprint object replaces the Flask object in each sub-application and gets registered to the app in the project <em>__init__.py</em> file.  Notice another nice feature of blueprints: we can easily set the base url for all views in each sub-application.  This is done by the url_prefix keyword argument.</p>

<p>Before moving on, I do want to say there are a few more topics here that I'll revisit (probably in a later post): url value pulling and hidden url values.</p>

<h2>Contexts</h2>

<p>Contexts are sometimes an opaque.  Below I do my best to motivate this concept and explain how it is used throughout the Flask framework.  Before we can understand how to use contexts, we must understand what a context is.</p>

<h2>Towards a Definition</h2>

<p>In computational systems, a context has to do with multi-threaded programming, when the programmer has access to threads and processes.</p>

<p>Def: <strong>context</strong> := The circumstances that form the setting for an event, statement, or idea, in terms of which it can be fully understood and assessed.</p>

<p>In multi-threaded programming, a context is the state of certain variables that may or may not be global.</p>

<p>In web programming, a context will matter for RESTful web programming - that is programming that operates for many users and makes connections on demand.  Most web programming these days are RESTful, so we tend to take such a term is a given and often fail to consider it explicitly.</p>

<p>To give a counter example - an ssh connection or vpn connection to a server is not RESTful.</p>

<p>Daniel Kronovet helps us understand contexts within Flask in <a href="http://kronosapiens.github.io/blog/2014/08/14/understanding-contexts-in-flask/">this post</a>: "contexts are used to control the presence or absence of various global variables, so that you, the developer, can simply assume that the correct variables will be available when you need them. Given that an application can be running in multiple threads and serving multiple clients at once..."</p>

<h2>A simple example</h2>

<p>In general, when you are learning a new skill or technology, it's best to keep it simple.</p>

<pre><code class="python">from flask import Flask, current_app, request

app = Flask(__name__)

with app.app_context():
    print current_app.name #prints flask.app.Flask obect

with app.test_request_context():
    print request # prints Request 'http://localhost/' [GET]

print has_request_context() # prints False
</code></pre>

<p>This example illustrates the two major contexts we care about: the application context and the request context. As the <a href="http://flask.pocoo.org/docs/0.10/appcontext/">Flask Docs</a> tell us: "The application context starts when the Flask object is instantiated, and it implicitly ends when the first request comes in."</p>

<p>During request handling:</p>

<p>"While a request is active, the context local objects (flask.request and others) point to the current request."</p>

<p>Why does this matter? As the above language is trying to point to, contexts are used to replicate certain states of the program. Being able to do this is extremely powerful for testing, complex state dependent operations, and requesting specific operations.</p>

<p>Much of the power of contexts is already baked into the Flask framework via the request object, the various session objects, and the g object.</p>

<p>However, there are also specific functions you can make use of to take advantage of the power of contexts. In the <a href="http://flask.pocoo.org/docs/0.10/api/">Flask API Docs</a> you'll find each of these functions and other classes explained under "Useful Functions and Classes." I showed a few examples of such functions and objects in the example above.</p>

<h2>Example 2: a slightly more interesting example</h2>

<p>Note: the below code assumes you are deploying on Heroku. It may work on other systems, but I don't guarantee this as it is untested.</p>

<pre><code class="python">from flask import Flask, has_request_context
from flask.ext.sqlachlemy import SQLAlchemy
import os
app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["DATABASE_URL"]

db = SQLAlchemy(app)

class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip_addr = db.Column(db.String(300))

    def __init__(self,ip_addr):
        self.ip_addr = ip_addr

    def __repr__(self):
        return '<ip_address %r>' % self.ip_addr

@app.route("/",methods=["GET","POST"])
def index():
    if remote_addr is None and has_request_context():
        remote_addr = request.remote_addr
    elif request.headers.getlist("X-Forwarded-For")[0] and has_request_context():
        remote_addr = request.headers.getlist("X-Forwarded-For")[0]
        log = Log(remote_addr)
        db.session.add(log)
        db.session.commit()
    return render_template("index.html")
</code></pre>

<p>This code sets up a database with <em>app.config["SQLALCHEMY_DATABASE_URI'] = os.environ["DATABASE_URL"]</em>.  <em>DATABASE_URL</em> is an environment variable on Heroku systems, so it should already be populated!  For more advice on how to set up a database on heroku with Flask check out <a href="http://blog.y3xz.com/blog/2012/08/16/flask-and-postgresql-on-heroku">this article</a>.</p>

<p>This simple view function figures out if someone is trying to connect to index.html on your website and then logs the IP address of said individual.</p>

<p>It should be noted that heroku uses forwarding so request.remote_addr probably won't work. That's why I include the next line - <em>request.headers.getlist("X-Forwarded-For")[0]</em>. There are still some security issues with this that are beyond the scope of this post. Check out <a href="http://esd.io/blog/flask-apps-heroku-real-ip-spoofing.html">this post</a> if you are interested in using this in an actual application.</p>

<p>So let's understand <em>has_request_context()</em>. As the Flask API docs state: "If you have code that wants to test if a request context is there or not, this function can be used. For instance, you may want to take advantage of request information if the request object is available, but fail silently if it is unavailable." The ability to handle exceptional cases with grace is one of the many advantages of contexts. This speaks to a nuanced argument in development: that you can handle edge cases gracefully, to build a fuller, richer experience.</p>

<p>To summarize, contexts let you design complete experiences. They are by no means essential to the foundations of web-development, as they are only needed when you're building a website that could run into many edge cases. Contexts are also not always directly exposed to Flask developers - they are a concept used throughout the Flask framework and are a major part of what makes Flask such a joy to work with. Just because the implementation details have been abstracted away, it doesn't mean they aren't important - it simply means the framework has been designed well.</p>