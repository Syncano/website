---
layout: post
title: 'Intro to Flask Pt. 2: Creating and Writing to Databases'
date: 2014-12-16 11:21:29
author: eric_schles
categories: ['Flask', 'How Tos', 'Python', 'Tutorial']
image: http://2md7l11skw9mw6wot2ppaln6.wpengine.netdna-cdn.com/wp-content/uploads/2014/12/flask-databases.jpg
summary: "This article is intended as a continuation of the introduction to Flask that appears in a previous post, found here. In this post, we will complete our understanding of Flask as a model view controller by showing how to add the “model” piece. The model of an MVC is the database connections that tell the application how to save persistent data. Typically, in MVC’s you don’t actually write a SQL scheme but rather interact with the database through an object relational model (aka ORM)."
---
<p>This article is intended as a continuation of the introduction to Flask that appears in a previous post, found <a href="http://www.syncano.com/flask-micro-framework-introduction/">here</a>. In this post, we will complete our understanding of Flask as a model view controller by showing how to add the "model" piece. The model of an MVC is the database connections that tell the application how to save persistent data. Typically, in MVC's you don't actually write a SQL scheme but rather interact with the database through an object relational model (aka ORM).<!--more-->

An ORM makes writing SQL statements easier and higher level. It also works across many different database languages (each database uses a different version of the SQL language). That means migrating from one database to another is extremely easy with ORM; you'll usually just have to change a few small configuration settings.</p>

<p>Because ORMs are high level, it's possible you won't get all the optimizations you could get if you wrote straight SQL. But this would require you to be an expert SQL user who spends a lot of time making your queries as efficient as possible. And to do that, you'd need a great deal of understanding of the architecture of a given database, plus an understanding of how that translates into the higher level SQL language. For this and other reasons your best bet is to use ORM.</p>

<p>To show you what I mean, I'll first demonstrate an app written in straight SQL and then compare that with the same app written in an ORM.  This first post will focus only on straight SQL.  The next article will focus on making use of SQLAlchemy - a very good ORM.</p>

<h2>A full application written with SQLite3:</h2>

<p><a href="https://github.com/EricSchles/sqlite_directory_of_friends">(source)</a></p>

<h3>schema.sql:</h3>

<pre><code>
    drop table if exists account_holder;
    create table account_holder (
    id integer primary key autoincrement,
    email text not null,
    username text not null,
    phone text not null,
    password text null
);
</code></pre>

<pre><code>
    drop table if exists contact;
    create table contact (
    id integer primary key autoincrement,
    name text not null,
    phone text not null,
    username text not null,
    email text not null
);
</code></pre>

<p>SQLite is a lightweight database that's easy to use and great for small aplications. It comes with its own varient of the SQL language – as do all SQL databases. Most queries in SQLite will work for other databases, so it's great for prototyping any application that uses SQL.</p>

<h3>Let's explore the first statement:</h3>

<pre><code>drop table if exists account_holder;
</code></pre>

<p>To understand this statement, we must first understand how databases are organized: by tables and columns. Tables are like the data structures of the database, and a table's columns are like the individual values of the data structure. Everything in a database also has a name.</p>

<p>This particular SQLite statement says:</p>

<p>If a table with the name account_holder exists in the database, drop it (AKA delete the table). Notice the semicolon at the end of the statement. All SQL statements need to be ended with a semicolon.</p>

<h3>Next we have:</h3>

<pre><code>
    create table account_holder (

    id integer primary key autoincrement,

    email text not null,

    username text not null,

    phone text not null,

    password text null);
</code></pre>

<p>This creates the table '<em>account_holder</em>' and gives it the following column names: '<em>id</em>', '<em>email</em>', '<em>username</em>', '<em>phone</em>', and '<em>password</em>'. The '<em>create table</em>' statement simply creates the table. What's of real interest is the creation of the variables. Notice we created an '<em>id</em>' – a variable with two functions:</p>

<ol>
<li><p>An index to speed up searching for entries within the database, and</p></li>
<li><p>a primary key to be referenced by other tables.</p></li>
</ol>


<p>For those of you who haven't learned much about data structures – the reason the '<em>id</em>' speeds up search is simple. Because we autoincrement the '<em>id</em>', it will take on successively larger values for each entry increasing by 1 for each entry added. Thus, the rows of our table will be ordered by the natural numbers: 0,1,2,3,4,5,... etc. This lets us use advanced search algorithms like binary search to quickly find an entry – assuming we can look for it by id.</p>

<p>Now let's talk about this primary key <em>thing</em>. A primary key and a foreign key show the relationship between two tables in SQL. Associating two tables in this way is useful for semantic reasons. For a greater understanding of this check out this <a href="http://www.databasedev.co.uk/primarykey-benefits.html">example</a></p>

<p>The remaining fields in our table '<em>account_holder</em>' should all make sense. Each is of type '<em>text</em>', and it's required they're not null (or missing) from an insert statement.</p>

<h3>Now that we understand our schema, let's create our database:</h3>

<pre><code>sqlite3 database.db &lt; schema.sql
</code></pre>

<p>Now let's look at some CRUD operations. These will be stored in <em>models.py</em>.</p>

<h3>models.py:</h3>

<pre><code>
    import sqlite3 as sql

    def insert_account_holder(email,username,phone,password):
        con = sql.connect("database.db")
        cur = con.cursor()
        cur.execute("INSERT INTO account_holder (email,username,phone,password) VALUES (?,?,?,?)", (email,username,phone,password))
        con.commit()
        con.close()

    def insert_contact(name,phone,username,email):
        con = sql.connect("database.db")
        cur = con.cursor()
        cur.execute("INSERT INTO contact (name,phone,username,email) VALUES (?,?,?,?)", (name,phone,username,email))
        con.commit()
        con.close()

    def select_account_holder(params=()):
        con = sql.connect("database.db")
        cur = con.cursor()
        if params==():
            cur.execute("select * from account_holder")
        else:
            string = "select"
            for i in xrange(len(params)-1):
                string += "%s,"
            string += "%s"
            string += " from account_holder"

            result = cur.execute(string)
            con.close()
            return result.fetchall()

    def select_contact(params=()):
        con = sql.connect("database.db")
        cur = con.cursor()
        if params==():
            cur.execute("select * from contact")
        else:
            string = "select"
            for i in xrange(len(params)-1):
                string += "%s,"
            string += "%s"
            string += " from contact"

            result = cur.execute(string)
            con.close()
            return result.fetchall()
</code></pre>

<h3>A closer look at the '<em>insert_account_holder</em>' function:</h3>

<pre><code>
    def insert_account_holder(email,username,phone,password):    
        con = sql.connect("database.db")
        cur = con.cursor()
        cur.execute("INSERT INTO account_holder (email,username,phone,password) VALUES (?,?,?,?)", (email,username,phone,password))
        con.commit()
        con.close()
</code></pre>

<p>You'll use most of this function every time you work with a database. Both insert functions do the same thing - so you should be able to understand them both by understanding this one:</p>

<h3>Setup the connection to the database</h3>

<pre><code>con = sql.connect("database.db")
</code></pre>

<h3>Create a cursor object</h3>

<pre><code>cur = con.cursor()
</code></pre>

<h3>Execute an SQL statement to send to the database:</h3>

<pre><code>cur.execute("INSERT INTO account_holder (email,username,phone,password) VALUES (?,?,?,?)", (email,username,phone,password))
</code></pre>

<h3>If we are sending data to the database, then commit any changes:</h3>

<pre><code>con.commit()
</code></pre>

<h3>And finally close out the connection:</h3>

<pre><code>con.close()
</code></pre>

<p>Now that we have a feel for what these steps mean in English, let's dive a little deeper.</p>

<p>Start with:</p>

<ol>
<li><p><em>con = sql.connect("database.db")</em></p></li>
<li><p><em>con.commit()</em></p></li>
<li><p><em>con.close()</em></p></li>
</ol>


<p>These are the standard statements for dealing with any "stream" of data to storage outside of a program. It's the same general idea for dealing with files. To make the point concrete, let's look at files and their database equivalents side by side.</p>

<h3>Open the 'stream':</h3>

<p>for a file:
<pre><code>f = open("file.txt.","w")</code></pre></p>

<p>for a database:
<pre><code>con = sql.connect("database.db")</code></pre></p>

<h3>write to the 'stream':</h3>

<p>for a file:
<pre><code>f.write(stuff)</code></pre></p>

<p>for a database:
<pre><code>con.commit()</code></pre></p>

<h3>close the 'stream':</h3>

<p>for a file:
<pre><code>f.close()</code></pre></p>

<p>for a database:
<pre><code>con.close()</code></pre></p>

<p>One very nice keyword in Python is the "with" statement, which is the best way to keep your files secure. It has a lot of other uses, but we'll cover security (my favorite) in this post.</p>

<h3>For files we can use "with" like this:</h3>

<pre><code>
    with open("file.txt","w") as f:
        f.write("I am going to write a single line here:\
         Syncano is awesome, and so are you :)")
</code></pre>

<h3>For databases we can use "with" like this:</h3>

<pre><code>
    with sqlite3.connect("database.db") as con:
        cur = con.cursor()
        cur.execute("INSERT INTO made_up_table (some_text) VALUES (?)" ,\
         ("I am going to write a single line here: Syncano is awesome, \
            and so are you :)" ))
</code></pre>

<h3>So let's talk about what this is doing:</h3>

<p>All this really does is take out the '<em>f = open("file.txt.","w")</em>' and the '<em>f.close()</em>' statement (from the example above) and replace it with '<em>with open("file.txt","w") as f</em>'. Which is pretty nice.</p>

<p>Also - notice we're able to do something very similar with the '<em>with</em>' statement in the database connection.  This means less clean up for our database connections and insures they are always closed after being opened (As long as we use with statements)!</p>

<p>Even though this may seem like a minor thing, it could potentially be a pretty big deal. I won't go through all the technicalities, but let's just say not using '<em>with</em>' is a huge security vulnerability.</p>

<h3>Now we can safely re-write our functions to be more security centric:</h3>

<pre><code>
    import sqlite3 as sql

    def insert_account_holder(email,username,phone,password):
        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("INSERT INTO account_holder (email,username,phone,password) VALUES (?,?,?,?)", (email,username,phone,password))
            con.commit()
</code></pre>

<p>Yes - I'm only showing you one of the rewritten functions but the rest of them live at the github link above (and also <a href="https://github.com/EricSchles/sqlite_directory_of_friends">here</a>).  You might try rewriting the rest as an exercise. :)</p>

<p>Now let's see how we are going to make use of these functions.</p>

<h3>views.py:</h3>

<pre><code>
    from app import app
    from flask import render_template,redirect, request, flash,g,session,url_for
    from models import *

    @app.route("/",methods=["GET","POST"])
    @app.route("/index",methods=["GET","POST"])
    def index():
        return render_template("index.html")

    @app.route("/signup", methods=["GET","POST"])
    def signup():
        return render_template("signup.html")

    @app.route("/signedup", methods=["GET","POST"])
    def signedup():

        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        phone = request.form.get('phone')

        if not session.get("logged_in"):
            insert_account_holder(email,username,phone,password)
        return render_template("homepage.html",username=username) 

    @app.route("/login")
    def login():
        return render_template("login.html")

    @app.route("/directory/&lt;username&gt;")
    def directory(username):
        contacts = select_by_username_contact(username)
        return render_template("directory.html",username=username,contacts=contacts)
</code></pre>

<p>There is a lot to digest here, unless you read <a href="http://www.syncano.com/flask-micro-framework-introduction/">my last post</a>. But, since I'll assume all of you are now familar enough with Flask OR you read my last post, I'm going to just going to explain the function calls that have to do with the database.</p>

<pre><code>
    @app.route("/signedup", methods=["GET","POST"])
    def signedup():

        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        phone = request.form.get('phone')

        if not session.get("logged_in"):
            insert_account_holder(email,username,phone,password)
        return render_template("homepage.html",username=username) 
</code></pre>

<p>Here we are getting data from the user.  If you recall from earlier in this post, this method "writes" to the database - so after this function is called, there will be a new row in the '<em>account_holder</em>' table with any information you stored in '<em>email</em>','<em>username</em>','<em>phone</em>','<em>password</em>'.</p>

<p>Now let's look at querying the database for information:</p>

<pre><code>
    @app.route("/directory/&lt;username&gt;")
    def directory(username):
        contacts = select_by_username_contact(username)
        return render_template("directory.html",username=username,contacts=contacts)
</code></pre>

<p>What's nice here is that we can look up data by '<em>username</em>'. Notice that the '<em>username</em>' is the '<em>username</em>' of the '<em>account_holder</em>', and not the '<em>username</em>' of the '<em>contact</em>'. The '<em>username</em>' here acts as a foreign key for the '<em>account_holder</em>', since this field also appears in the '<em>account_holder</em>' table. Let's go ahead and change our schema and re-instantiate our database.</p>

<h3>schema.sql:</h3>

<pre><code>    drop table if exists account_holder;
    create table account_holder (
        email text not null,
        username text primary key not null,
        phone text not null,
        password text null
    );

    drop table if exists contact;
    create table contact (
        name text not null,
        phone text not null,
        username text foriegn key not null,
        email text not null
    );
</code></pre>

<h3>how to make the database:</h3>

<p><pre><code>sqlite3 database.db &lt; schema.sql</code></pre></p>

<p>This concludes our basic introduction into SQL in Flask. But what happens when you want to send a new type of data to the database?  Or when you want to query for a new type of information?  When working with SQL, you'll either need to write a new method to do this - or you'll have to insert straight SQL into your code.  Either way, it's likely you'll be writing something that requires a lot of testing <em>and</em> won't be nearly as efficient as code someone else spent more time on. It's not a pretty solution.</p>

<p>I tried my best so far to convince you that straight SQL is a bad idea, and in the next article, we'll look at an ORM that will make all of this much, much easier. But there are just a few instances in which you should still use SQL straight up.</p>

<p>An ORM will always be potentially less optimized than straight SQL - because the SQL queries you can write for a specific database will have their own optimizations. In two different SQL databases, the same ORM query might be slower or faster depending on the underlying algorithms being used. For instance - say you have two versions of the same database. Let's also assume our database is indexed. And in one version, it's implemented with binary search - while in the other, it's implemented with linear search.</p>

<p>The writer of the ORM may not know this or may not have implemented high level queries to account for this - either because the change was recent or because the query is not used often.  In this case, your ORM would perform very differently.  To drive that point home - let's look at the running time of linear search versus binary search.</p>

<h3>Binary search:</h3>

<ol>
<li><p>average time complexity: O(log(n))</p></li>
<li><p>worst time complexity: O(log(n))</p></li>
<li><p>worst space complexity: O(1)</p></li>
</ol>


<h3>Linear search:</h3>

<ol>
<li><p>average time complexity: O(n)</p></li>
<li><p>worst time complexity: O(n)</p></li>
<li><p>worst space complexity: O(1)</p></li>
</ol>


<p>So - in terms of space complexity - no big deal.  You'll run out of memory just as fast with one as the other.  However, in terms of time complexity - you are almost always much better off using binary search.</p>

<p>(By the way, if you don't understand Big-Oh notation, I'd say it's worth googling.)</p>

<p>Stay tuned for part 2 of this post in which I show you this exact same example with ORM.</p>