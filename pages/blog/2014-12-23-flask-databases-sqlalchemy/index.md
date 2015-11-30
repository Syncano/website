---
path: '/blog/flask-databases-sqlalchemy/'
layout: post
title: 'Flask Databases: Object Relational Models with SQLAlchemy'
description: "The power of SQLAlchemy is many-fold, but we'll touch on just a few of a few features. Read on..."
date: 2014-12-23 11:21:29
author: eric
categories: ['Flask', 'Python', 'Tutorials']
image: flask-pt-3-databases-mvc.jpg
summary: "Last week, I demonstrated some strengths and weaknesses of using SQL. Now, I’m going to show you how a really great ORM like SQLAlchemy is far better in most cases."
---
Last week, I demonstrated some strengths and weaknesses of using SQL. Now, I'm going to show you how a really great ORM like SQLAlchemy is far better in most cases.
The power of SQLAlchemy is many-fold, but I'll touch on just a few of a few features:

1.  The ability to switch out one database for another without changing a single line of code in your application (other than a configuration file).
2.  Easily understood querying and filtering through high level python code.
3.  The use of class based models which allows you to make use of inheritance as well as composition.


For the full application please see the <a href="https://github.com/EricSchles/syncano-nycpython-nov20/tree/master/flask_app">code on github.</a>

## Geting started

### from views.py:

```javascript


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





    @app.route("/directory/<username>")

    def directory(username):

        contacts = models.Contact.query.all()

        return render_template("directory.html",username=username,contacts=contacts)
```

### A few notes:

1.  This is not the complete views.py file. I have included only the pieces will be looking at.
2.  It should be noted that this database is still created in memory – you'll need to hit a SQL server or setup an actual database if you want this to really work, which is beyond the scope of this blog post. In any case, this code shows us the general steps one follows when dealing with a database.


Take a look at the '_signedup_' function which accomplishes four things:

1.  Create the database: ```javascript models.db.create_all() ```
2.  Add data in memory from the program – ```javascript new_user = models.AccountHolder(username,password, email, phone) ```
3.  Add it to a temporary storage area – ```javascript models.db.session.add(new_user) ```
4.  Flush to the database – ```javascript models.db.session.commit() ```


As you can see, the data passed from the user is directly saved in the database – as long as the server is running. Now that we understand how to send data into our database, let's take a closer look at actually creating our database.

### from models.py:

```javascript
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

            return '<AccountHolder %r>' % self.username
```

First, we create our DB object by instantiating a SQLAlchemy object from our '_app_'. Then we make use of the premade Model class that SQLAlchemy comes with. Within our AccountHolder class we just do some initialization and that's it. As a cannonical example, lets look at the following code:

```javascript
email = db.Column(db.String(120))
```

'_db_' has a Column object and a number of associated database primitive datatype objects – in this example, a String class.

In plain English: "Create a database column called email that is of type string and has a maximum of 120 characters."

This is similar to having to do some static typing and should be familiar to folks coming from Java or C++. For those of you who only know dynamically typed languages, the computer operates on a set of primitive datatypes – namely, characters and numbers. In python, for instance, when we write the following line of code:

```javascript
x = "Hello"
```

We are really doing:

```javascript
String x = String("Hello")
```

These String keywords are implicit in any dynamically typed language. Which is pretty awesome – but comes with a cost. If you know the primitive types you're supposed to be working with, the computer can apply different optimizations to make your code run much faster.

We could do the same thing for integers as follows:

```javascript
x = 0
```

is really:

```javascript
Integer x = Integer(0)
```

And so on.

### looking at the '___init___' function:

The '___init___' function is a general idea from object oriented programming in Python.  It stands for "initialize" and is used to initialize a class with specific values.  You need not have passed in the values as we did above.  If you wanted to, you could write a class as so:

```javascript

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
```

The above code creates two simple objects '_foo_' and '_bar_'.  Both print out x.  The '___init___' statement here is used simply to have x initialized to 5.  So for both of the instantiated objects '_foo_' and '_bar_', '_x == 5_'.

Notice also the use of repr - in the to-string method: '___str___'.  This tells python how to treat your object when you print it.  So if you ran the above code, you should see four 5's in a row - each on their own line.

Before we on, I want to give a quick note on the import statement, which might look a little weird to you:

```javascript
from app import app
```

Basically, I named the application '_app_' – which is a convention in Flask. I also happened to name the directory that the app lives in – '_app_'. If I decided to name the directory that the application lives in something else, like for instance '_anything_', the import statement would look like:

```javascript
from anything import app
```

So back to our database stuff -

Now that we understand how to put data into our DB and how to initialize our DB, let's look at getting it out.

### querying for information:

```javascript
    import models

    @app.route("/directory/<username>")

    def directory(username):

        models.Contact.query.filter(models.Contact.username==username)

        return render_template("directory.html",username=username,contacts=contacts)
```

Here, everything should already be clear except for the following line:

```javascript
    models.Contact.query.filter(models.Contact.username==username)
```

The Contact model comes with a bunch of built in functions. Here we make use of '_query_' and '_filter_' to look for all contacts associated with a specific username. Remember - the username is the username of the user who has the associated contact and not the username of the contact.  This is what allows us to make use of the above statement as is.

Now, let's take a step back and look at some differences between SQL and SQLAlchemy - our representative ORM.  When we used an ORM:

1.  We wrote fewer lines of code.
2.  We used classes so we could have future models inherit from base models - a very nice feature that SQL schema doesn't give you.
3.  We can easily query against the database.


When we used SQL:

1.  We made efficient queries.

You can see there are far more advantages to using an ORM than straight SQL.

Now let's step back even further and look across all of the Flask posts so far.  In general, this analysis lends itself to a natural conclusion: Flask is great for prototyping small pieces of code. Some perfect instances in which you should use it:

*   At a hackathon or some other coding competition
*   When your boss asks to see a prototype of your product
*   If you're building an internal website for a small number of people
*   Prototyping products for work or building internal websites for only a small number of people
*   When you're starting your own company and you need something to show your investors
*   To code up simple examples for students or a classroom setting
