---
layout: post
title: Introduction to Python
date: 2015-03-02 11:21:29
author: eric_schles
summary: "I’ve been trying to learn how to program since I was ten years old. I tried many times – mostly because my dad is a developer and wanted to share the thing he loves – but Java, C, and C++ always looked scary. I couldn’t really get into it. There was too much I had to understand. Just getting started felt hard.

And then came Python, with it’s obvious conventions and simple syntax. For the first time in my life, I thought I could write code. Even more than that, I wanted to write code. I hope that by the end of this post, you’ll share my love of Python (or at least begin to understand why I love it as much as I do)."
categories: ['python', 'Tutorial']
share_image: /public/Intro-to-Python.png
---
I've been trying to learn how to program since I was ten years old. I tried many times - mostly because my dad is a developer and wanted to share the thing he loves - but Java, C, and C++ always looked scary. I couldn't really get into it. There was too much I had to understand. Just getting started felt hard.

And then came Python, with it's obvious conventions and simple syntax. For the first time in my life, I thought I could write code. Even more than that, I <em>wanted</em> to write code. I hope that by the end of this post, you'll share my love of Python (or at least begin to understand why I love it as much as I do).<!--more-->

<h2 id="toc_1">Set up</h2>
Before you can get started, you'll need to download Python and Emacs, a text editor (AKA place to write your code).

<a href="https://www.python.org/downloads/">Get Python here</a>

<strong>Emacs for Ubuntu and Mac OS X:</strong>

Install Ubuntu: {% highlight javascript linenos=table %}sudo apt-get install emacs{% endhighlight %}

Install Mac OS X: <a href="http://emacsformacosx.com/">Emacs for mac - installer</a>

To use, simply type in the terminal: emacs [filename]

<strong>Emacs for windows:</strong>

<a href="https://ftp.gnu.org/gnu/emacs/windows/emacs-24.3-bin-i386.zip">Emacs for Windows - zipped file</a>

After installing, extract the folder (typically you should extract to C:\Program Files)

To use Emacs, navigate to <em>[path-to-emacs-root-folder]\emacs-24.3\bin\emacs</em>. If you decided to install emacs in <em>C:\Program Files</em> this becomes: <em>C:\Program Files\emacs-24.3\bin\emacs</em>. Then double click <em>emacs.exe</em>
<h2 id="toc_2">Python - elegance above all</h2>
{% highlight javascript linenos=table %}print "Hello there, my name is Eric and I like warm hugs"{% endhighlight %}

This simple one line program encapsulates everything about Python. For a point of reference, let's look at the equivalent program in Java:
{% highlight javascript linenos=table %}public class Hello{
    public static void main(String[] args){
        System.out.println("Hello there, my name is Eric and I like warm hugs");
        }
    }{% endhighlight %}
And in C++
{% highlight javascript linenos=table %}#include <iostream>
using namespace std;

int main(void){

    cout << "Hello there, my name is Eric and I like warm hugs" << endl; 
    return 0;
}{% endhighlight %}
As you can see, it requires significantly more work to do simple things in older languages like Java and C++ than it does in newer languages like Python.
<h2 id="toc_3">Running Python code</h2>
Let's start by teaching the computer some manners. We'll do this by writing a simple program that asks you for your name and then greets you.
{% highlight javascript linenos=table %}print "Hello there"
name = str(raw_input("What's your name?")) #get's input from the user
print "Hello,"+name
print "How are you today?"{% endhighlight %}
To run this program (and the previous one) check out this quick video that shows you how to run Python programs on your OS:

<a href="https://www.youtube.com/watch?v=f95KleM_waU">for mac osx</a>
<a href="https://www.youtube.com/watch?v=cLmp3w75ArE">for ubuntu</a>
<a href="https://www.youtube.com/watch?v=OIuXVZuHXXo">for windows</a>

Now that we know how to run Python programs, type the above code into Emacs, save it as greeting.py.

You should see:
{% highlight javascript linenos=table %}$ python greeting.py # type this into the terminal (make sure you are in the right folder)
Hello there
What's your name? Eric
Hello, Eric
How are you today?{% endhighlight %}
<h3 id="toc_4">Understanding the above code</h3>
Clearly, print sends anything between a set of quotes (" ") to the screen. The print command is called a function in Python - it's a piece of code that has been pre-written and does some preset thing everytime it's run.

The next functions to understand are <em>raw_input</em> and <em>str</em>. But before move on to them, let's take a look at how functions work in general within computer science:
<h3 id="toc_5">Math versus CS - functions</h3>
As you might recall from elementary school:

f(x) -> y can be thought of as: y = f(x)

Where x is the input of the function f, and y is the output of f. In this way we can say, f is a function that 'maps' x to y. Thus it is fair to say that f(x) is equal to y, hence y = f(x).

In computer science, you can say the same thing: y = f(x) for function f, input x, and output y. However, it's not exactly the same (but don't worry about that yet!)
<h3 id="toc_6">Back to our examples</h3>
Now that we understand that functions take in input and send back output, let's go back to the <em>raw_input</em> and <em>str</em> functions. The <raw_input function works like this:

{% highlight javascript linenos=table %}

raw_input("Some text goes in here")

{% endhighlight %}

Whatever is placed between the quotes is printed to the user. Then, the program waits for the next keystrokes from the person interacting with the program until the enter key is pressed, and <em>raw_input</em> will save those keystrokes to the program.

When we combine the raw_input function with the str function like this:

{% highlight javascript linenos=table %}

name = str(raw_input("What's your name?"))

{% endhighlight %}

What's really happening is:

<em>"What's your name?"</em> is the input of the function <em>raw_input</em>, and the output is then passed as input to the <em>str</em> function. The result is saved in the variable <em>name</em>. Notice that we don't need to name the output of raw_input. So,

{% highlight javascript linenos=table %}name = str(raw_input("What's your name?")){% endhighlight %}

is the same as,

{% highlight javascript linenos=table %}tmp = raw_input("What's your name?"){% endhighlight %}

{% highlight javascript linenos=table %}name = str(tmp){% endhighlight %}

except explicitly assigned the returned result to a variable <em>tmp</em>.
<h2 id="toc_7">Functions - Write your own!</h2>
Now that you understand what a function is, it's time to make your own. In Python, there are a number of keywords - think of these words and phrases like power words - and everytime you learn one, you can do so much more with your program. Use the <em>def</em> keyword and the following structure to define your own function:
{% highlight javascript linenos=table %}

def [name of function]([any input variables, ]):
    .. starts block of code
    ends block of code..
    [optional return statement] [return value]
{% endhighlight %}
Making the structure concrete:
{% highlight javascript linenos=table %}def f(x): 
    return x

#calling this function:

print f("Hello there")

{% endhighlight %}

If you try running this code, you'll see that "Hello there" is printed to the screen. The function f doesn't do very much - it takes the input, "Hello there", and then it simply returns the value "Hello there" to the function print.

Let's make our function do something more fun:

{% highlight javascript linenos=table %}

def f(name):
    return "Hello,"+name
    
print f("Eric")

{% endhighlight %}

If you run this code, you'll see it takes in a name (mine in this case) and returns a standard greeting "Hello,Eric" (in this case).

Now, let's go nuts!

{% highlight javascript linenos=table %}

def g(name,greeting):
    return greeting + name
    
print g("Eric","Hello there,")

{% endhighlight %}

In this function we have two inputs, name and greeting. Since we are passing in input inside of quotes (called strings), when you <em>+</em> them it combines them.

Now let's write a function that does something before returning.

{% highlight javascript linenos=table %}

def my_age_in_n_years(current_age,current_year,years_in_the_future):
    future_age = current_age + years_in_the_future
    future_year = current_year + years_in_the_future
    return "In " + str(years_in_the_future) + " it will be the year " + str(future_year) + " and you will be " + str(future_age)
    
print my_age_in_n_years(29,2015,72)

{% endhighlight %}

Try running this code!

The final interesting point about functions in Python is that you can pass them as inputs in other functions.

{% highlight javascript linenos=table %}

def f(g,x):
    return g(x)
    
def thing(y):
    return y + 4

print f(thing,7)

{% endhighlight %}

If you ran the above code, you'll see that the result returned is 11. So how did that work? Well, we first define a function f, which takes two inputs - g and x. The input g is expected to be a function. We call the function g on the input x by putting parentheses around g. This signals to Python that the input g should be treated as a function. What actually happens is Python checks to see if g has a specific attribute, in this case <em>__call__</em>. You'll learn what that means later on in the post.
<h2 id="toc_8">Flow Of Control</h2>
Now that we can make some simple mathematical functions, let's get a little more complicated and talk about logic.
<h3 id="toc_9">Boolean Values</h3>
A boolean is a statement that evaluates to true or false. The boolean was named after George Boole - its creator. They have proven to be extremely valuable for mathematics, computer science, and a number of other fields.

Boolean statements typically involve one or more of the boolean operators. In Python these are <em>and</em>, <em>or</em>, <em>not</em>, <em><</em>,<em>></em>,<em>==</em>,<em><=</em>,<em>>=</em>.

Here are some examples of boolean statements in Python:

{% highlight javascript linenos=table %}

print 5 == '5'
print "this" == "this"
print 4<7
print 4 == 7
print 4 < 7 and 7 < 4
print 4 < 7 or 7 < 4
print not "everything" == "anything"

{% endhighlight %}

If you run the above code, you will get back the boolean values true or false for each statement. As an exercise, try figuring out what each statement should return before running it.
<h3 id="toc_10">If Statements</h3>
The simplest piece of logic in Python is the if statement:
{% highlight javascript linenos=table %}

if [boolean statement]:
    code block starts ..
    
    .. code block ends

{% endhighlight %}

If the boolean statement evaluates to true, the code inside the tabbed area will execute.

Here's a concrete example:

{% highlight javascript linenos=table %}

x = 4
if x < 5:
    print x

{% endhighlight %}

The above code first gives variable x a value 4 and then checks to see if x is less than 5. If it is, then the value of x is printed. Try changing the value of x to 6 and see what happens.

<h3 id="toc_11">If, Else conditionals</h3>
Now we know how to check if something is true before executing, which is great! But what if we want something to execute if the boolean statement is false? Enter the else clause.

In general:

{% highlight javascript linenos=table %}

if [boolean statement]:
    code block starts ...
    ... code block ends
else:
    code block starts ...
    ... code block ends

some other code happens here possibly...

{% endhighlight %}

A concrete example:

{% highlight javascript linenos=table %}

x = 5
y = 7
if x < y:
    print "x is less than y"
else:
    print "x is greater than or equal to y"

print "all done"

{% endhighlight %}

Because of the values we set for x and y, the code block in the if statement will execute. Can you change the code so that the else statement is executed instead?

Stepping back a bit, logically we can think of an if statement as saying, "if the statement is true, then execute the following code." The if, else statement says, "if the the statement is true, then execute the following code. Otherwise, execute this other code."
<h3 id="toc_12">A real example of when to use if statements</h3>
Remember this code?:

{% highlight javascript linenos=table %}

def f(g,x):
    return g(x)
    
def thing(y):
    return y + 4

print f(thing,7)

{% endhighlight %}

Our function f wasn't all that great - mostly because we don't account for the case when someone else (possibly ourselves in the future) calls f without passing the first input as a function. In this case, the above code doesn't work and will crash any programs we write. Clearly this is not good. But not to worry! With the help of the if statement and a little bit of Python magic, we'll be able to fix it:

{% highlight javascript linenos=table %}

import types
def f(g,x):
    if type(g) == types.FunctionType:
        return g(x)
    else:
        return "g needs to be a function!"
def thing(y):
    return y + 4
    
print f(thing,7)
print f(4,5)

{% endhighlight %}

Try running the above code - what happens? It should print:

{% highlight javascript linenos=table %}

11
g needs to be a function!

{% endhighlight %}

Which means we have programmed our code to work even when the user of our code does something we didn't account for or something they weren't supposed to. This allows us to write safer code that works more often.

So a natural question for some of you might be, what was that <em>import types</em> thing? Well, Python comes with a whole bunch of code that isn't loaded for every program you write. By importing the code, you tell Python to go look for that library and import it if it finds it. By importing the code into your program, you are able to make use of the functions, objects, and anything else that imported code comes with.

The number of libraries available for import is one reason the Python language is so great! By way of explanation, check out this XKCD comic on how awesome Python imports are: <a href="http://xkcd.com/353/">xkcd comic</a>
<h2 id="toc_13">Basic Data Structures</h2>
A data structure in Python is kind of like a variable, except it holds more values or it treats values in a particular way. The two most used data structures in Python are:
<ol>
  <li>lists - > [ ]</li>
  <li>dictionaries -> { }</li>
</ol>
lists hold elements like this:

{% highlight javascript linenos=table %}

    x = [1,2,3] 
    # or
    y = [5123,551,213]
    print x
    print y

{% endhighlight %}

Where as dictionaries hold values like this:

{% highlight javascript linenos=table %}

    x = {"a":5,"b":7}
    #or 
    y = {"blarg":[12,353,3123],"stuff":[15,12,"weee"]}
    print x
    print y

{% endhighlight %}

To access the values in lists, do the following:

{% highlight javascript linenos=table %}

    x = [1,2,3]
    print x[0]
    print x[1]
    print x[2]
    print x[2] + x[0]

{% endhighlight %}

The numbers passed into the brackets are called the index of the value. The index of a list starts at 0, for many good reasons, and increases in number based on the position in the list. List elements are seperated by commas. Notice that the index of a list is incremented by one for the next element in the list. If this is still, unclear run the above code, which will produce:

1
2
3
4

1 comes from x[0] since 1 is the value of the element in position 0.

To access the values in dictionaries, do the following:

{% highlight javascript linenos=table %}

    x = {"a":5,"b":7}
    print x["a"]
    print x["b"]
    print x["a"] + x["b"]

{% endhighlight %}

Dictionaries are like lists, except indexes are more explicit. So "a" is the first index in the dictionary, and "b" is the second index. These indexes are known as keys and they can be any string or integer - so they aren't technically ordered like the indexes in a list. Notice that we access the elements in a similar way. Observe the output of the above code:

5
7
12

5 comes from x["a"] since 5 is the value of the element referenced by key "a".

Two important points that didn't make it into the above explanation:
<ol>
  <li>Lists can store any type of value - lists, strings, objects, integers, floats, etc.</li>
  <li>Dictionaries can only store primitive types (integers or strings) as keys, but anything as values.</li>
</ol>
<h2 id="toc_14">For Loops</h2>
Looping is possibly the most importand and powerful thing a program can do. Without understanding loops, programming wouldn't be nearly as powerful.

Possibly the easiest way to see this is with the following:

{% highlight javascript linenos=table %}

for i in xrange(100000):
    print i

{% endhighlight %}

If you run the above code, you'll see that all the numbers are printed out. The xrange function is a special one that creates a list of all the numbers from 0 to input-1. In this case, all the numbers from 0 to 100000-1 values will be created.

Generally speaking, a for loop has the following syntax:

{% highlight javascript linenos=table %}

for [iterator] in [list of values]:
    code block start ..
    .. code block ends

{% endhighlight %}

And a for loop accesses each of the elements in the list, sequentially starting at index 0 and going all the way up to the index of the last element in the list. Because lists start at zero (this is referred to as zero-indexing or being zero-indexed), there are n - 1 elements in the list, where n is the size of the list.
<h3 id="toc_15">A concrete example</h3>
Now that we understand how one might use a for loop, let's actually use it to do something cool!

A big problem in mathematics is optimization. By making use of a for loop, we can do discrete optimization easily and quickly:

{% highlight javascript linenos=table %}

def find_max(input):
    max = input[0]
    for elem in input:
        if elem > max:
            max = elem
    return max
    
print find_max([1,2,3,4,5])

{% endhighlight %}

This code will work on any example where all the elements are integers or floats. As an experiment, you could try using a list of words. The code will still work, but doesn't make much sense.
<h2 id="toc_16">Object Oriented Programming</h2>
The final topic of the day is that of object oriented programming. This style of programming is used throughout the industry and is full of useful features to make a programmer's life easier. Here, we will merely introduce you to objects and their power.

{% highlight javascript linenos=table %}

class Node:
    def __init__(self,val,next=None):
        self.val = val
        self.next = next
    def __str__(self):
        return repr(self.val)
        
x = Node(5)
y = Node(6)
x.next = y
print x
pritn x.next

{% endhighlight %}

One of the reasons why objects are useful is that you can build your own data structures very easily. The above code creates a simple linked list. A linked list is a list of nodes that are connected together by references. We've been playing with a more advanced version of the linked list for a while now because of the list data structure provided by Python. But if you ever wanted to make your own, now you can.

Now onto understanding what the above code means. There's a ton of new syntax here.

<em>class</em> - the class keyword is used to state the name of the class. The general syntax is:

{% highlight javascript linenos=table %}

class [name of class]([optionally any base classes]):

{% endhighlight %}

Let's look at an even simpler example:

{% highlight javascript linenos=table %}

class Greeter: 
    def hello(name):
        return "Hello, "+name

g = Greeter()
print g.hello("Eric")

{% endhighlight %}

Before continuing, it is important to note that when a function is defined inside a class, it is called a method.

The class Greeter only has the single method called hello which takes name as input and then returns Hello + [name passed in]. Notice that to create a Greeter object you need to type it in with <em>()</em> and set it equal to a variable. This is known as instantiation.

{% highlight javascript linenos=table %}

def __init__(self,[optional inputs go here])

{% endhighlight %}

^Most classes have a <em>__init__</em> method which takes in any input to the class. Recall from the above example:

{% highlight javascript linenos=table %}

x = Node(5)
y = Node(6)

{% endhighlight %}

We can create as many nodes as we like and give them whatever initial values we like. This is part of the power of objects - they can store variables internally.

<em>self</em> - the self input is given to every single method of the class. The self keyword is used to reference any variables at runtime. You can think of the self keyword as a placeholder for the variable used for the class. Let's look at a simple example to understand this further:

{% highlight javascript linenos=table %}

class Hello:
    def __init__(self,name):
        self.name = name
    def greet(self):
        print "Hello",self.name

hi = Hello("Eric")
hi.greet()

{% endhighlight %}

In the above code, the self is replaced by the name hi that we instatiated the class with. However, we could have used a whole host of other names. One of the strengths of object oriented programming is that you can write code in a very general way, being specific only when you need to be. This may make your code harder to understand to someone else, but will mean you can write fewer lines of code overall.

Notice also that self.name is used in the greet method and correctly prints out the name Eric when the above code is run. This is because the object hi knows about the value of self.name from the <em>__init__</em> method that was used above.

As a final point in this section, let's talk about functions with underscores - <em>__[name of function]__</em>. Functions or methods with this extra bit of syntax aren't ever meant to be called explicitly. Instead, they have special names and special uses.

Although you shouldn't call them, you can. To see what special methods a given object has, you can run a <em>dir</em> function on it.

Here's an example:

{% highlight javascript linenos=table %}

import os
print dir(os)

{% endhighlight %}

As you'll see, there are a ton of methods and objects in the OS library and some of them have the double underscore. As a final note, the <em>__call__</em> method that comes with some functions is what the Python interpreter calls when you type <em>[function name]()</em>.

So here's an example of this:

{% highlight javascript linenos=table %}

def f(x):
    return x+2
    
print dir(f)

{% endhighlight %}

Does it have <em>__call__</em> as one of it's methods? ;)