---
path: '/blog/intro-angular-js/'
layout: post
title: Intro to Angular.js
date: 2015-04-14 11:21:29
author: eric
image: intro-to-angular.png
image_height: 605px
summary: "Angular is a web framework for the front-end of your application. It’s responsible for accepting data from the middleware of your application and vice versa. Angular.js is similar to other templating engines. For those of you coming from Python, Angular is similar to jinja2. For those of you coming from Ruby, this is similar to HAML."
categories: ['AngularJS', 'Tutorials']
keywords: 'Angular, Angular JS, AngularJS, Angular.js'
seo_description: "Angular.js is a front-end web framework responsible for accepting data from the middleware of your app & vice versa. See how easy (& awesome) it is to use!"
---
<p>Angular is a web framework for the front-end of your application.  It's responsible for accepting data from the middleware of your application and vice versa. Angular.js is similar to other templating engines.  For those of you coming from Python, Angular is similar to jinja2.  For those of you coming from Ruby, this is similar to HAML.<!--more--></p>

<h2>Prerequisites</h2>

<p>Before writing applications with Angular.js, it's probably best to ensure a solid foundation in the core of JavaScript, Node.js, and Express.js.  Check out <a href="http://www.syncano.com/getting-know-javascript-intro/">this introduction to JavaScript</a>, <a href="http://www.syncano.com/intro-to-express-js">this intro to Express</a>, and <a href="http://www.syncano.com/intro-to-node-js">this introduction to Node</a> if you are unfamiliar.</p>

<h2>A first example</h2>

<p>Angular.js is extremely easy to make use of. All you need to is include the CDN (<a href="http://en.wikipedia.org/wiki/Content_delivery_network">content delivery network</a>).  And then you're off to the races:</p>

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

<h2>Directives</h2>

<p>Despite its simplicity, there is a ton of conceptual stuff going on here.  First, we need to understand the notion of directives, which Angular makes use of to manipulate the DOM (Document Object Model).  There are a number of directives, and in the above example we see four very common ones: ng-app, ng-model, ng-init and ng-bind.</p>

<p>Def: The <strong>ng-app</strong> directive defines the tag that should be treated as the root of the Angular app.</p>

<p>This tells the rendering engine where the dynamic content will live.  This is nice because you do not need to have all of your HTML code be unnecessarily dynamic.  Of course, you're free to simply make the whole document dynamic by passing ng-app as an attribute to the HTML tag.</p>

<p>Def: The <strong>ng-model</strong> directive binds the value of the input field to the application variable.</p>

<p>In our case ng-model binds the variable name to the user accepted input field.  This variable is then accessible throughout the Angular-app section of the HTML document.</p>

<p>Notice that to make use of this variable, we simply need to add opening '{{' and closing '}}' around the variable name.  As an aside, the double open and close braces can also be used to evaluate statements generally.  So,</p>

```javascript
<div ng-app="">
 <p>5 5 = {{5   5}}</p>
</div>
```

<p>Will show 5+5 = 10.</p>

<p>Def: The <strong>ng-init</strong> directive assigns default values to different variable names.  These names are given onload.</p>

<p>Def: The <strong>ng-bind</strong> directive binds the application data to the HTML.</p>

<p>Notice that the ng-bind has the same effect as the double curly braces.  Typically choosing to use one or the other comes down to a matter of taste.</p>

<h2>Adding a controller: sending data to the front-end.</h2>

<p>Now that we can manipulate our view, it's time to see the true power of Angular: making use of the controller.</p>

<p>processing.js</p>

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

<p>Our controller isn't particularly sophisticated for right now, since we are defining all our data on the front-end (for now).  Essentially the controller is just a call back that passes an object to the front-end.  For those of you unfamiliar with callbacks or JavaScript objects, check out this <a href="http://www.syncano.com/intro-to-node-js">intro to Node.js for callbacks</a> and this <a href="http://www.syncano.com/data-structures-in-javascript/">introduction to JavaScript for javascript objects</a>.</p>

<p>processing.html</p>

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
<p>Here we see how to interact with the controller object on the front-end - which is the secret sauce for Angular.</p>

<p>Notice how easy iteration is:</p>

```javascript
<span ng-repeat="elem in processing.listing">
    {{elem}},
</span>
```

<p>Also, notice how easy changing values on the front-end is:</p>

```javascript
<p> Change First:<input type="number" ng-model="val">
<button class="btn" ng-click="processing.setFirst(val)">change first</button>
</p>
```

<p>Finally, notice how easy accessing values in the object is:</p>

```javascript
 <p>Doing a lookup:</p>
 <p>Name: {{processing.lookup["name"]}}</p>
 <p>Age: {{processing.lookup["age"]}}</p>
 <p>Company: {{processing.lookup["company"]}}</p>
```

<h2>Understanding scope</h2>

<p>scoping.html</p>

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

<p>In Angular, $scope is the application object - owner of application variables and functions.  Anything defined in the templated HTML will be available to your controller via the $scope object.</p>

<h2>Understanding HTTP</h2>

Now that we have all the pieces in place, let's build a full front-end application - by combining Express and Angular.  Here Angular acts as our view, and Express as our controller.

<p>viewer.html</p>

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

<p>api.js</p>

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

<p>The <em>$http</em> object is extremely powerful.  It's primary use is to ingest data from the backend.  As we see here, using $http object we are able to interact with Express directly.</p>

Want to use Angular with Syncano? Check out our <a href="http://docs.syncano.com/v3.2.1/docs/javascript-index">JavaScript Quick Start Guide</a> to get started.