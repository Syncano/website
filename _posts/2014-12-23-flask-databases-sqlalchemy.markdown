---
layout: post
title: 'Flask Databases: Object Relational Models with SQLAlchemy'
date: 2014-12-23 11:21:29
author: eric_schles
categories: ['Flask', 'Python', 'Tutorial']
image: http://2md7l11skw9mw6wot2ppaln6.wpengine.netdna-cdn.com/wp-content/uploads/2014/12/flask-pt-3-databases-mvc.jpg
summary: "Last week, I demonstrated some strengths and weaknesses of using SQL. Now, I’m going to show you how a really great ORM like SQLAlchemy is far better in most cases."
---
<p>Last week, I demonstrated some strengths and weaknesses of using SQL. Now, I'm going to show you how a really great ORM like SQLAlchemy is far better in most cases.<!--more-->
The power of SQLAlchemy is many-fold, but I'll touch on just a few of a few features:</p>

<ol>
<li><p>The ability to switch out one database for another without changing a single line of code in your application (other than a configuration file).</p></li>
<li><p>Easily understood querying and filtering through high level python code.</p></li>
<li><p>The use of class based models which allows you to make use of inheritance as well as composition.</p></li>
</ol>


<p>For the full application please see the <a href="https://github.com/EricSchles/syncano-nycpython-nov20/tree/master/flask_app">code on github.</a></p>

<h2>Geting started</h2>

<h3>from views.py:</h3>

<pre><code>


    @app.route("/signup", methods=["GET","POST"])

    def signup():

        return render_template("signup.html")



    @app.route("/signedup", methods=["GET","POST"])

    def signedup():



        if request.form.get('email') == None:

            flash("Please provide an email")

        else:

            email = request.form['email']



        if request.form.get('username') == None:

            flash("Please think of a username")

        else:

            username = request.form['username']



        if request.form.get('password') == None:

            flash("Please come up with a password")

        else:

            password = request.form['password']



        phone = request.form.get('phone')



        picture = request.form.get('picture')



        if not session.get("logged_in"):

            models.db.create_all()

            new_user = models.AccountHolder(username,password,email,phone)



            models.db.session.add(new_user)

            models.db.session.commit()



        return render_template("homepage.html",username=username)





    @app.route("/directory/&lt;username&gt;")

    def directory(username):

        contacts = models.Contact.query.all()

        return render_template("directory.html",username=username,contacts=contacts)
</code></pre>

<h3>A few notes:</h3>

<ol>
<li>This is not the complete views.py file.  I have included only the pieces will be looking at.</li>
<li>It should be noted that this database is still created in memory – you'll need to hit a SQL server or setup an actual database if you want this to really work, which is beyond the scope of this blog post. In any case, this code    shows us the general steps one follows when dealing with a database.</li>
</ol>


<p>Take a look at the '<em>signedup</em>' function which accomplishes four things:</p>

<ol>
<li><p>Create the database:<pre><code>models.db.create_all()</code></pre></p></li>
<li><p>Add data in memory from the program – <pre><code>new_user = models.AccountHolder(username,password, email, phone)</code></pre></p></li>
<li><p>Add it to a temporary storage area – <pre><code>models.db.session.add(new_user)</code></pre></p></li>
<li><p>Flush to the database – <pre><code>models.db.session.commit()</code></pre></p></li>
</ol>


<p>As you can see, the data passed from the user is directly saved in the database – as long as the server is running. Now that we understand how to send data into our database, let's take a closer look at actually creating our database.</p>

<h3>from models.py:</h3>

<pre><code>
    from flask.ext.sqlalchemy import SQLAlchemy

    from app import app



    db = SQLAlchemy(app)



    class AccountHolder(db.Model):

        id = db.Column(db.Integer, primary_key=True)

        email = db.Column(db.String(120))

        username = db.Column(db.String(80))

        phone = db.Column(db.String(11))

        password = db.Column(db.String(140))

        def __init__(self,username,password,email,phone):

            self.username = username

            self.email = email

            self.phone = phone

            self.password = password



        def __repr__(self):

            return '&lt;AccountHolder %r&gt;' % self.username
</code></pre>

<p>First, we create our DB object by instantiating a SQLAlchemy object from our '<em>app</em>'. Then we make use of the premade Model class that SQLAlchemy comes with. Within our AccountHolder class we just do some initialization and that's it. As a cannonical example, lets look at the following code:</p>

<pre><code>email = db.Column(db.String(120))
</code></pre>

<p>'<em>db</em>' has a Column object and a number of associated database primitive datatype objects – in this example, a String class.</p>

<p>In plain English: "Create a database column called email that is of type string and has a maximum of 120 characters."</p>

<p>This is similar to having to do some static typing and should be familiar to folks coming from Java or C++. For those of you who only know dynamically typed languages, the computer operates on a set of primitive datatypes – namely, characters and numbers. In python, for instance, when we write the following line of code:</p>

<pre><code>x = "Hello"
</code></pre>

<p>We are really doing:</p>

<pre><code>String x = String("Hello")
</code></pre>

<p>These String keywords are implicit in any dynamically typed language. Which is pretty awesome – but comes with a cost. If you know the primitive types you're supposed to be working with, the computer can apply different optimizations to make your code run much faster.</p>

<p>We could do the same thing for integers as follows:</p>

<pre><code>x = 0
</code></pre>

<p>is really:</p>

<pre><code>Integer x = Integer(0)
</code></pre>

<p>And so on.</p>

<h3>looking at the '<em>__init__</em>' function:</h3>

<p>The '<em>__init__</em>' function is a general idea from object oriented programming in Python.  It stands for "initialize" and is used to initialize a class with specific values.  You need not have passed in the values as we did above.  If you wanted to, you could write a class as so:</p>

<pre><code>


    #A very simple class:

    class Foo:

        def __init__(self):

            self.x = 5

        def __str__(self):

            return repr(self.x)



    foo = Foo()

    bar = Foo()

    print foo.x

    print bar.x



    # to string:

    print foo

    print bar
</code></pre>

<p>The above code creates two simple objects '<em>foo</em>' and '<em>bar</em>'.  Both print out x.  The '<em>__init__</em>' statement here is used simply to have x initialized to 5.  So for both of the instantiated objects '<em>foo</em>' and '<em>bar</em>', '<em>x == 5</em>'.</p>

<p>Notice also the use of repr - in the to-string method: '<em>__str__</em>'.  This tells python how to treat your object when you print it.  So if you ran the above code, you should see four 5's in a row - each on their own line.</p>

<p>Before we on, I want to give a quick note on the import statement, which might look a little weird to you:</p>

<pre><code>from app import app
</code></pre>

<p>Basically, I named the application '<em>app</em>' – which is a convention in Flask. I also happened to name the directory that the app lives in – '<em>app</em>'. If I decided to name the directory that the application lives in something else, like for instance '<em>anything</em>', the import statement would look like:</p>

<pre><code>from anything import app
</code></pre>

<p>So back to our database stuff -</p>

<p>Now that we understand how to put data into our DB and how to initialize our DB, let's look at getting it out.</p>

<h3>querying for information:</h3>

<pre><code>
    import models

    @app.route("/directory/&lt;username&gt;")

    def directory(username):

        models.Contact.query.filter(models.Contact.username==username)

        return render_template("directory.html",username=username,contacts=contacts)
</code></pre>

<p>Here, everything should already be clear except for the following line:</p>

<pre><code>    models.Contact.query.filter(models.Contact.username==username)
</code></pre>

<p>The Contact model comes with a bunch of built in functions. Here we make use of '<em>query</em>' and '<em>filter</em>' to look for all contacts associated with a specific username. Remember - the username is the username of the user who has the associated contact and not the username of the contact.  This is what allows us to make use of the above statement as is.</p>

<p>Now, let's take a step back and look at some differences between SQL and SQLAlchemy - our representative ORM.  When we used an ORM:</p>

<ol>
<li><p>We wrote fewer lines of code.</p></li>
<li><p>We used classes so we could have future models inherit from base models - a very nice feature that SQL schema doesn't give you.</p></li>
<li><p>We can easily query against the database.</p></li>
</ol>


<p>When we used SQL:</p>

<ol>
<li>We made efficient queries.</li>
</ol>


<p>You can see there are far more advantages to using an ORM than straight SQL.</p>

<p>Now let's step back even further and look across all of the Flask posts so far.  In general, this analysis lends itself to a natural conclusion: Flask is great for prototyping small pieces of code. Some perfect instances in which you should use it:</p>

<ul>
<li>At a hackathon or some other coding competition</li>
<li>When your boss asks to see a prototype of your product</li>
<li>If you're building an internal website for a small number of people</li>
<li>Prototyping products for work or building internal websites for only a small number of people</li>
<li>When you're starting your own company and you need something to show your investors</li>
<li>To code up simple examples for students or a classroom setting</li>
</ul>