---
path: '/blog/intro-angular-js/'
layout: post
title: Intro to Angular.js
description: "Angular is a web framework for the front-end of your application. It's responsible for accepting data from the middleware of your application and vice versa."
date: 2015-04-14 11:21:29
author: eric
image: intro-to-angular.png
image_height: 605px
summary: "Angular is a web framework for the front-end of your application. It’s responsible for accepting data from the middleware of your application and vice versa. Angular.js is similar to other templating engines. For those of you coming from Python, Angular is similar to jinja2. For those of you coming from Ruby, this is similar to HAML."
categories: ['AngularJS', 'Tutorials']
keywords: 'Angular, Angular JS, AngularJS, Angular.js'
seo_description: "Angular.js is a front-end web framework responsible for accepting data from the middleware of your app & vice versa. See how easy (& awesome) it is to use!"
---
Angular is a web framework for the front-end of your application. It's responsible for accepting data from the middleware of your application and vice versa. Angular.js is similar to other templating engines. For those of you coming from Python, Angular is similar to jinja2\. For those of you coming from Ruby, this is similar to HAML.

## Prerequisites

Before writing applications with Angular.js, it's probably best to ensure a solid foundation in the core of JavaScript, Node.js, and Express.js. Check out [this introduction to JavaScript](http://www.syncano.io/blog/getting-know-javascript-intro/), [this intro to Express](http://www.syncano.io/intro-to-express-js), and [this introduction to Node](http://www.syncano.io/intro-to-node-js) if you are unfamiliar.

## A first example

Angular.js is extremely easy to make use of. All you need to is include the CDN ([content delivery network](http://en.wikipedia.org/wiki/Content_delivery_network)). And then you're off to the races:

```javascript
<!doctype html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
<div ng-app="" ng-init="default='Eric'">
 <p>Name: <input type="text" ng-model="name"></p>
 <p>Hello there, {{name}}</p>
 <p>Hello there, <span ng-bind="default"></span></p>
</div>
</body>
</html>
```

## Directives

Despite its simplicity, there is a ton of conceptual stuff going on here. First, we need to understand the notion of directives, which Angular makes use of to manipulate the DOM (Document Object Model). There are a number of directives, and in the above example we see four very common ones: ng-app, ng-model, ng-init and ng-bind.

Def: The **ng-app** directive defines the tag that should be treated as the root of the Angular app.

This tells the rendering engine where the dynamic content will live. This is nice because you do not need to have all of your HTML code be unnecessarily dynamic. Of course, you're free to simply make the whole document dynamic by passing ng-app as an attribute to the HTML tag.

Def: The **ng-model** directive binds the value of the input field to the application variable.

In our case ng-model binds the variable name to the user accepted input field. This variable is then accessible throughout the Angular-app section of the HTML document.

Notice that to make use of this variable, we simply need to add opening '{{' and closing '}}' around the variable name. As an aside, the double open and close braces can also be used to evaluate statements generally. So,

```javascript
<div ng-app="">
 <p>5 5 = {{5   5}}</p>
</div>
```

Will show 5+5 = 10.

Def: The **ng-init** directive assigns default values to different variable names. These names are given onload.

Def: The **ng-bind** directive binds the application data to the HTML.

Notice that the ng-bind has the same effect as the double curly braces. Typically choosing to use one or the other comes down to a matter of taste.

## Adding a controller: sending data to the front-end.

Now that we can manipulate our view, it's time to see the true power of Angular: making use of the controller.

processing.js

```javascript
angular.module('processing', [])
 .controller("ProcessingController", function(){
    this.first = 1;
    this.second = 2;
    this.listing = [1,2,3,4];
    this.lookup = {
      name: "Eric",
      age: "29",
      company: "Syncano"
     };

    this.getFirst = function getFirst(){
       return this.first; 
    };

    this.setFirst = function setFirst(val){
        this.first = val;
    };

   });
```

Our controller isn't particularly sophisticated for right now, since we are defining all our data on the front-end (for now). Essentially the controller is just a call back that passes an object to the front-end. For those of you unfamiliar with callbacks or JavaScript objects, check out this [intro to Node.js for callbacks](http://www.syncano.io/blog/intro-to-node-js/) and this [introduction to JavaScript for javascript objects](http://www.syncano.io/blog/data-structures-in-javascript/).

processing.html

```javascript
<!doctype html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
<div ng-app="processing" ng-controller="ProcessingController as processing"> 
 <p> Adding {{processing.first}}   {{processing.second}}: {{processing.first   processing.second}}</p>
 <p> Getting all the elements in listing:</p>
  <span ng-repeat="elem in processing.listing">
    {{elem}},
  </span> 
 <p> Change First:<input type="number" ng-model="val"><button class="btn" ng-click="processing.setFirst(val)">change first</button>
 <p>Doing a lookup:</p>
 <p>Name: {{processing.lookup["name"]}}</p>
 <p>Age: {{processing.lookup["age"]}}</p>
 <p>Company: {{processing.lookup["company"]}}</p>
</div> 
</body>
</html>
```
Here we see how to interact with the controller object on the front-end - which is the secret sauce for Angular.

Notice how easy iteration is:

```javascript
<span ng-repeat="elem in processing.listing">
    {{elem}},
</span>
```

Also, notice how easy changing values on the front-end is:

```javascript
<p> Change First:<input type="number" ng-model="val">
<button class="btn" ng-click="processing.setFirst(val)">change first</button>
</p>
```

Finally, notice how easy accessing values in the object is:

```javascript
 <p>Doing a lookup:</p>
 <p>Name: {{processing.lookup["name"]}}</p>
 <p>Age: {{processing.lookup["age"]}}</p>
 <p>Company: {{processing.lookup["company"]}}</p>
```

## Understanding scope

scoping.html

```javascript
<!DOCTYPE html>
<html>
<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
<div ng-app="myApp" ng-controller="customersCtrl"> 
<ul>
    <p>Name:{{ name }}</p>
    <p>Email: {{email}}</p>
</ul>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
    $scope.name = "Eric Schles";
    $scope.email = "eric.schles@syncano.com"
});
</script>

</body>
</html>
```

In Angular, $scope is the application object - owner of application variables and functions. Anything defined in the templated HTML will be available to your controller via the $scope object.

## Understanding HTTP

Now that we have all the pieces in place, let's build a full front-end application - by combining Express and Angular. Here Angular acts as our view, and Express as our controller.

viewer.html

```javascript
<!DOCTYPE html>
<html>
<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>

<div ng-app="myApp" ng-controller="customersCtrl"> 

<ul>
    <p>Name:{{ name }}</p>
    <p>Email: {{email}}</p>
</ul>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://localhost:5000/api")
  .success(function (response) {
    $scope.name = response["name"];
    $scope.email = response["email"]});
});
</script>

</body>
</html>
```

api.js

```javascript
var express = require("express");

var app = express();

app.get("/api",function(req,res){
    res.send({name:"Eric Schles",email:"eric.schles@syncano.com"})
});

app.get("/viewer",function(req,res){
  res.sendfile("./viewer.html");
});
app.listen(5000);
console.log("running");
```

The _$http_ object is extremely powerful. It's primary use is to ingest data from the backend. As we see here, using $http object we are able to interact with Express directly.

Want to use Angular with Syncano? Check out our [JavaScript Quick Start Guide](http://docs.syncano.io/v3.2.1/docs/javascript-index) to get started.
