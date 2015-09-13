---
layout: post
title: User Management For Your Apps
date: 2015-09-15 10:00:00
author: kelly
path: '/user-management-for-your-apps/'
categories: ['Syncano', 'User Management']
image: Business-iPhone-User-600x400.jpg
share_image: Business-iPhone-User-600x400.jpg
image_height: 450px
summary: "Next to data, users are the other most important part of your app’s success. The goal of most applications is to get users..."
keywords: 'Syncano, Users, data, user, groups, backend, nodejs, python, ruby'
seo_description: "users, user management, social authentication, user profiles, applications"
---

Next to data, users are the other most important part of your app’s success. The goal of most applications is to get users to sign up and log in, with a few exceptions. Syncano has user authentication built in and ready to go with no setup required, or you can expand the functionality to any user experience you want.

##The User Model
There are two parts to every user that make up its full profile.

+ User Object -- holds the username, password, and group association of each user.
+ User Profile Class -- this is where all other information related to the user is stored.

By default, the user profile class is bare bones but, just like any class, you can add new fields to hold additional information.

These two parts, together, make up the entire view of an individual user. When you create a new `user`, a data object in `user_profile` is automatically created for you.

###Creating New Users

####In The Dashboard
You can easily create a new user with the Syncano Dashboard.

1. Log into your Syncano Dashboard and select your Instance
2. Click "Users" in the left nav
3. Add a `username` and `password`
4. Click "Confirm"

This builds a new `user` and `user_profile` object for you. However, this isn't how you will typically be creating users, since your application's interface would be doing this for you.

####With Your Application
In order to create new users with your application, you need the permissions to set up new users. You could certainly do this with your account key, but that's not a good approach for security reasons.

I recommend two methods:

1. Instance Key with `allow_user_create` permission
2. CodeBox for creating new users and a webhook

Either way will look about the same. The code to add a user with the [Syncano JS library]() would look something like this

```javascript
var syncano = new Syncano({
  apiKey: API_KEY_WITH_ALLOW_USER_CREATE_FLAG,
  instance: INSTANCE_NAME
});

syncano.user().add({username:'username', password:'password'}).then(function(res) {
	//do something here
});
```

That will create the new `user` and `user_profile`, and the response payload will include the `user_key` for you to now authenticate that specific user.  Once that user is authenticated, and all calls have an `api_key` and `user_key`, only data that user has access to will be available.

####User Permissions
The user has rights to every data object that allows `read`, `write`, or `full` permissions for the following:

+ `Owner` -- if the user created the data object
+ `Other` -- if anyone else created the data object

You can read more about the specific permissions [in our docs](http://docs.syncano.com/docs/permissions).

####Group Permissions
A user can also belong to a group -- or a collection of users.  This allows you to really fine tune your permission model. Each data object also has a `group` permission set.  I'm not going to go into groups too much this time, but you can read more about groups [in our docs](http://docs.syncano.com/docs/groups) as well.

###Logging In Users
Your application won't always need to create a new user, but instead only log them in -- or, even better, let them log in with a social account like Facebook or Google+.

####Username/Password
Once a user has credentials, you can log them in using the `user/auth/` route
 
```javascript
var syncano = new Syncano({
  apiKey: API_KEY,
  instance: INSTANCE_NAME
});

syncano().login({username:'username', password:'password'}).then(function(res) {
	//do something here
});
```

####Social Authentication
Your user will first need to authenticate with either Facebook or Google-oAuth2, and then pass the authorization token to Syncano. If a user hasn't been created prior to the social login, it will automatically create a new user for you.

```javascript
var syncano = new Syncano({
  apiKey: API_KEY,
  instance: INSTANCE_NAME
});

syncano().login({socialToken: BACKEND_PROVIDER_TOKEN, backend: backend_name}).then(function(res) {
	//do something here
});
```

For additional reference and detail, please you can view our [User management documentation](http://docs.syncano.com/docs/user-management).

###Updating Profiles
The last item for this post is the `user_profile`. I mentioned earlier that the default profile doesn't have much to it. That's because no one at Syncano knows exactly what you want to include, and instead of forcing you to follow what we set up, we let you manage the requirements.

####Adding Fields
You add new `user_profile` fields like you would any other class.  Let's walk through one.

1. Log into your Syncano Dashboard and click on your Instance
2. Click "Classes"  in the left nav
3. Select `user_profile` and then the pencil icon to edit

You should now be at the class definition screen. Here you can create any number of fields to include in a profile.

Here are some examples:

+ Avatar -- a file type field, or text to hold a gravatar link, perhaps
+ Name -- first, last, full, all text fields
+ Mobile Number -- if you plan on using SMS in some way, you may want to store this number
+ Social Profile Links -- you could include GitHub, LinkedIn, or Google+, for example
+ Newsletter Opt-in -- a simple boolean to opt in/out of a newsletter

Once you have created your new user, you can update the `user_profile`. If you ask for profile information during the signup process, it might look something like this in JavaScript:

```javascript
var syncano = new Syncano({
  apiKey: API_KEY_WITH_ALLOW_USER_CREATE_FLAG,
  instance: INSTANCE_NAME
});

syncano.user().add({username:'username', password:'password'}).then(function(res) {
	var instance = new Syncano({
	  apiKey: API_KEY,
	  instance: INSTANCE_NAME,
	  userKey: res.user_key
	});

	instance.class('user_profile').dataobject(res.id).update({firstName: 'Kelly', lastName: 'Andrews'})
});

```

##Go Forth and Make Users!
Don't take my word for it -- go try it out. This is just an example. I'm sure you could come up with something better :)

Let me know what you come up with, or shoot me a tweet [@kellyjandrews](https://twitter.com/kellyjandrews) -- I look forward to hearing from you!