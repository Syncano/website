---
layout: post
title: Data, Data, Everywhere
date: 2015-09-01 14:00:00
author: kelly
categories: ['syncano']
image: /public/data.jpg
share_image: /public/data.jpg
image_height: 600px
summary: "Data is the lifeblood of any application. Not being able to access your application’s data quickly  can be equated to having clogged arteries - it’s going to be painful, and if it continues long enough, may lead to your app’s death. The good news is that with Syncano, we have a clear pathway to our data - using classes and data objects!"
keywords: 'Syncano, CodeBox, Solutions, Real-time, realtime, backend, baas'
seo_description: "classes and data objects, SQL, properties inherited from its constructor"
---

Data is the lifeblood of any application. Not being able to access your application’s data quickly  can be equated to having clogged arteries - it’s going to be painful, and if it continues long enough, may lead to your app’s death. The good news is that with Syncano, we have a clear pathway to our data - using classes and data objects!

##Classes without the homework

Classes to a developer mean about the same thing across all languages - an object that has properties inherited from its constructor. In Syncano, Classes are basically the same thing - essentially a template for your data objects. To create a class you need to provide the following information:

+ The name of the class
+ A description (optional)
+ A schema

###Defining a schema
The schema is where you add your required properties. Let’s take a look at an example schema:

{% highlight javascript lineanchors %}
[  
   {  
      "name":"title",
      "type":"string",
      "order_index":true,
      "filter_index":true
   },
   {  
      "name":"release_year",
      "type":"integer",
      "order_index":true,
      "filter_index":true
   },
   {  
      "name":"price",
      "type":"float",
      "order_index":true,
      "filter_index":true
   },
   {  
      "name":"author",
      "type":"reference",
      "order_index":true,
      "filter_index":true,
      "target":"Author"
   }
]
{% endhighlight %}

Each item listed in the example schema includes `title` and `type`.  Syncano gives you several `type` options including `string`, `text`, `integer`, `float`, `boolean`, `datetime`, and `file`.  Did you also notice the last property in the schema uses `reference` and `target`?  This is your foreign key to link your data objects to other classes as you would in any `SQL`-like table structure.  
One more important item to note here is that by setting `order_index` and `filter_index` to `true`, you can order and filter data objects on that specific property when retrieving data.  Setting these properties to `true` would give you these properties, in addition to the following default filter/order properties:

+ Filterable and Orderable
  + `id`
  + `created_at`
  + `updated_at`
+ Filterable only
  + `revision`
  + `owner`
  + `group`

###Permissions

When you create your class you will want to ensure that the permissions have been set according to your app’s needs.  Classes have two permission types:`group` and `other`.  There are three settings each of these permission types:`none`, `read`, `create_objects`.  

####Other

Setting `other` gives anyone who has access to the data objects in a class the permission above. If a class has set the permission to `read` for the `other` type, then any time the classes’ data objects are listed, anyone would be able to view the data objects.

####Group

The `group` type allows anyone in a specific group to have a set of permissions. This creates a bit of flexibility so that `other`'s can be set to a tighter restriction, but perhaps a `group` has additional permissions. This would allow you to easily create segmented data for a user’s type. For example, let’s say you have a group of “admins” who have access to more items within the application.

Classes will typically be created in your Syncano dashboard - there really isn’t a need to define these in your application. The routes are available, but really - just use the dashboard, that’s what it’s there for.

##The name’s Object - Data Object

Once you have your classes available, it’s time to fill them up with objects for your application to use. At this point, you’ve already done the hard part, and creating data objects are exactly like you would think - pass in all required data properties.

Data objects will be created with your application - and will typically be created by a user.  One important thing to understand when creating your data objects is to be explicit with your permissions.  

{% highlight javascript lineanchors %}
{
    "id": 1,
    "owner": 123,
    "owner_permissions": "full",
    "group": 321,
    "group_permissions": "full",
    "other_permissions": "full"
}
{% endhighlight %}

Syncano does not make assumptions regarding who receives access to your data.  In fact, we default to `none` for everything.  The above example would allow anyone to read, update, and delete this particular object (create permissions are on the class level). The other permission levels would be `none`, `read`, `write`.  Using these permissions in parallel with the class permission options will give you a fairly complex permissions system.
Like classes, objects have `group` and `other` permissions. Unlike classes, they also include`owner` permissions.  Just like a UNIX system, Syncano gives you full control over who has access and who doesn’t.

###Filter and Order your data
The last thing I want to go over is how to filter and order your data.  Syncano uses a fairly standard syntax to create queries, using familiar filters like `_gt` and `_lt`.  

If you want to filter on the created date, you might pass something like this:

{% highlight javascript lineanchors %}
query={"created_at":{"_gt":"2015-02-23T12:00:00Z"}}
{% endhighlight %}

You can also filter on multiple fields as well:

{% highlight javascript lineanchors %}
query={"release_year":{"_gt":1900,"_lte":2000},"pages":{"_gt":199}}
{% endhighlight %}

Another nice feature is the ability to reduce the fields you get back. This way you get back the exact object you want to show:

{% highlight javascript lineanchors %}
fields=release_year,id,pages
{% endhighlight %}

Finally - you can order your results like so:

{% highlight javascript lineanchors %}
order_by=release_year
{% endhighlight %}

All of these can be combined to provide you flexibility when retrieving data.  

##Wrap Up

These are the basics of classes and data objects, but our developer manual goes into more detail if you want to learn more:

+ [Classes](http://docs.syncano.com/docs/classes)
+ [Data Objects](http://docs.syncano.com/docs/data-objects)
+ [Data Objects Filtering and Ordering](http://docs.syncano.com/docs/data-objects-filtering)
+ [Permissions](http://docs.syncano.com/v1.0/docs/permissions)

We are constantly improving the platform, and would love to incorporate your feedback.  If you have any specific suggestions or ideas, feel free to provide those here: [https://syncano.ideas.aha.io/ideas](https://syncano.ideas.aha.io/ideas)
Be sure to follow [@syncano](https://twitter.com/syncano) and [@kellyjandrews](https://twitter.com/kellyjandrews) for the latest announcements and information as well.
