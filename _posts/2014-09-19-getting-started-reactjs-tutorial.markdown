---
layout: post
title: 'Getting Started with React.js: Creating Material Design Components'
date: 2014-09-19 11:21:29
author: marek
categories: ['How Tos', 'ReactJS']
share_image: /public/getting-started-with-ReactJS-e1411727250765.png
summary: "In our previous post, we looked at some of the best features of React.js – a new generation framework from Facebook. Today, we’ll build something useful with it. Once you get the hang of it, I think you’ll be amazed at how easy it is to build components."
---
In <a href="http://www.syncano.com/?p=7544">our previous post</a>, we looked at some of the best features of React.js – a new generation framework from Facebook. Today, we'll build something useful with it. Once you get the hang of it, I think you'll be amazed at how easy it is to build components.<!--more-->

Let’s recreate the animated dropdown menu from the newest version of Chrome for Android. Here's how it looks on mobile devices:

<div align=center><img src="http://cdn.androidpolice.com/wp-content/uploads/2014/08/nexusae0_flyout.gif"></div>

<h2>Step 1: Prepare the Groundwork.</h2> 
Create a new folder and a new index.html file. Inside index.html, paste the following:

{% highlight javascript linenos %}
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;&lt;/title&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;
  &lt;link href=&#39;http://fonts.googleapis.com/css?family=Roboto:400&#39; rel=&#39;stylesheet&#39; type=&#39;text/css&#39;&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;script src=&quot;jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;jquery.velocity.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;velocity.ui.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;react.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;JSXTransformer.js&quot;&gt;&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
{% endhighlight %}

There's nothing too exciting here. We’re importing a custom font from Google and including a few libraries: jQuery, Velocity.js, and React.js. The first two are not required, but we're using them to speed up our work a bit. One thing you might be wondering about is the  JSXTransformer. It is necessary to interpret the JSX syntax, but we'll use it only for the purposes of this tutorial - normally you wouldn't include it in production and instead you'd precompile the JSX files.

<h2>Step 2: Add the CSS.</h2> 
You can drop the below css between the <head> tags or in a separate stylesheet – it's up to you.

{% highlight javascript linenos %}
&lt;style type=&quot;text/css&quot;&gt;

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #EBF1F5;
    font-family: &#39;Roboto&#39;;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    position: relative;
  }

  ul {
    list-style: none;
  }

  .header {
    height: 3.750em;
    width: 100%;
    background-color: #0091EA;
  }

  .header .icon-options {
    width: 1.563em;
    height: 1.563em;
    left: auto;
  }

  .header-inner {
    float: right;
    position: relative;
    top: 1em;
    right: 1em;
  }

  .dropdown-menu {
    color: #4D4D4D;
    position: absolute;
    top: 0.13em;
    left: auto;
    right: 0.03em;
    background-color: white;
    box-shadow: -2px 2px 15px 2px rgba(0,0,0,0.15);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    transition: all 150ms;
    display: none;
  }

  .dropdown-header {
    padding: 0.9em 1em;
    overflow: auto;
  }

  .dropdown-header .icon-options {
    width: 1.563em;
    height: 1.563em;
    top: -0.1em;
    left: 0.5em;
  }

  .dropdown-toggle {
    float: right;
  }

  .dropdown-icons {
    overflow: auto;
    float: left;
  }

  .dropdown-icons .icon {
    width: 1.250em;
    height: 1.250em;
    position: relative;
  }

  .dropdown-icons .icon-reload {
    width: 1.063em;
    height: 1.063em;
    top: 0.15em;
  }

  .dropdown-icons li {
    float: left;
    margin-right: 2.9em;
  }

  .icon {
    cursor: pointer;
  }

  .icon svg {
    max-width: 100%;
    max-height: 100%;
  }

  .dropdown-items .dropdown-item {
    min-width: 14em;
    padding: 0.9em 1em;
    cursor: pointer;
    opacity: 0;
    -webkit-user-select: none;
    user-select: none;
  }

  .dropdown-items .dropdown-item:hover {
    background-color: #f2f2f2;
  }

  .btn {
    text-transform: uppercase;
    color: white;
    display: inline-block;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 0.5em 2em;
    background: #0091EA;
    margin: 1em;
    user-select: none;
    -webkit-user-select: none;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.40);
    transition: all 100ms;
  }

  .btn:hover {
    box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.20);
  }

&lt;/style&gt;
{% endhighlight %}

<h2>Step 3: Create your Components.</h2>
To create your first component, paste the following code below the libraries:

{% highlight javascript linenos %}
&lt;script type=&quot;text/jsx&quot;&gt;
  /** @jsx React.DOM */
  var App = React.createClass({

    render: function() {
      return (
        &lt;div className=&quot;main-wrapper&quot;&gt;
          &lt;div className=&quot;btn&quot;&gt;Click me&lt;/div&gt;
        &lt;/div&gt;
      );
    }
  });

  React.renderComponent(&lt;App /&gt;,  document.body);

&lt;/script&gt; 
{% endhighlight %}

You may have noticed that the script tag requires a special type "text/jsx" and a strange little comment at the beginning of the code sample - it's just a quirky React requirement. Don't worry about it too much, but don't forget to include it in every JSX file. 

In the above code, we’re creating an App component, rendering it, and appending it to the body. Notice that we're using plain HTML syntax within the render function - you may need to get used to this at first, but once you do, it’s extremely helpful. This code doesn't do much, so let's add more components.

{% highlight javascript linenos %}
var DropdownItem = React.createClass({

  render: function() {
    return (
      &lt;li className=&quot;dropdown-item&quot;&gt;{this.props.name}&lt;/li&gt;
    );
  }
});

var DropdownItems = React.createClass({

  getDefaultProps: function() {
    return {
      items: [&#39;New tab&#39;, &#39;New incognito tab&#39;, &#39;Bookmarks&#39;, &#39;Recent tabs&#39;, &#39;History&#39;, &#39;Print&#39;, &#39;Settings&#39;, &#39;Help &amp; feedback&#39;]
    }
  },

  render: function() {
    var items = this.props.items.map(function(item, i) {
      return (&lt;DropdownItem name={item} key={i} /&gt;);
    }.bind(this))
    return (
      &lt;ul className=&quot;dropdown-items&quot;&gt;
        {items}
      &lt;/ul&gt;
    );
  }
});
{% endhighlight %}

Here, we’re adding two additional components. DropdownItem is the single menu element, and DropdownItems encapsulates all of the menu items. Within the render function of the latter, we iterate through the array of menu items and we create an array of React components. Now, each component in React can have its own properties and a state. There's a subtle but very important difference between the two. If a component has some attributes that don't change over time, you’ll use properties for that. On the other hand, if you want to change some attributes during the lifecycle of a component, you'll use a state. In our example, we keep the menu items as properties - they are not likely to change. But since the visibility of the dropdown menu is something that will change dynamically (the menu can be visible or hidden), we'll store visibility information as a state.

<h2>Step 4: Add icons.</h2>
Add icons with the below code:

{% highlight javascript linenos %}
var Icon = React.createClass({

  getDefaultProps: function() {
    return {
      fill: &#39;#434343&#39;
    }
  },

  render: function() {
    if (this.props.type === &quot;star&quot;) {
      return (
        &lt;div className=&quot;icon icon-star&quot;&gt;
          &lt;svg viewBox=&quot;0 0 32 32&quot;&gt;
            &lt;path d=&quot;M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z&quot; fill={this.props.fill}&gt;&lt;/path&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      );
    } else if (this.props.type === &quot;reload&quot;) {
      return (
        &lt;div className=&quot;icon icon-reload&quot;&gt;
          &lt;svg viewBox=&quot;0 0 32 32&quot;&gt;
            &lt;path d=&quot;M32 12h-12l4.485-4.485c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515c-2.266 2.267-3.515 5.28-3.515 8.485s1.248 6.219 3.515 8.485c2.267 2.266 5.28 3.515 8.485 3.515s6.219-1.248 8.485-3.515c0.189-0.189 0.371-0.384 0.546-0.583l3.010 2.634c-2.933 3.349-7.239 5.464-12.041 5.464-8.837 0-16-7.163-16-16s7.163-16 16-16c4.418 0 8.418 1.791 11.313 4.687l4.687-4.687v12z&quot; fill={this.props.fill}&gt;&lt;/path&gt;
          &lt;/svg&gt;
        &lt;/div&gt;  
      );
    } else if (this.props.type === &quot;options&quot;) {
      return (
        &lt;div className=&quot;icon icon-options&quot; onClick={this.props.handleClick}&gt;
          &lt;svg viewBox=&quot;0 0 24 24&quot; height=&quot;100%&quot; width=&quot;100%&quot;&gt;
            &lt;g&gt;
              &lt;path d=&quot;M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2c-1.1,0-2,0.9-2,2S10.9,8,12,8z M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,10,12,10z M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S13.1,16,12,16z&quot; fill={this.props.fill}&gt;&lt;/path&gt;
            &lt;/g&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      );
    } else if (this.props.type === &quot;arrow&quot;) {
      return (
        &lt;div className=&quot;icon icon-arrow&quot;&gt;
          &lt;svg viewBox=&quot;0 0 32 32&quot;&gt;
            &lt;path d=&quot;M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z&quot; fill={this.props.fill}&gt;&lt;/path&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      );
    }
  }
});

var DropdownIcons = React.createClass({

  getDefaultProps: function() {
    return {
      items: [&#39;arrow&#39;, &#39;reload&#39;, &#39;star&#39;]
    }
  },

  render: function() {
    var items = this.props.items.map(function(item, i) {
      return (&lt;li&gt;&lt;Icon type={item} key={i} /&gt;&lt;/li&gt;);
    }.bind(this))
    return (
      &lt;ul className=&quot;dropdown-icons&quot;&gt;
        {items}
      &lt;/ul&gt;
    );
  }
});
{% endhighlight %}

One of the best things about React is that you can easily keep SVG icons as components. This gives you the flexibility of React and the awesomeness of SVG. Our icon component expects a "type" property and an optional "fill" property. Notice that you can set default properties by using the "getDefaultProps" method.

<h2>Step 5: Implement your Dropdown Component.</h2>
Add the below code to implement the dropdown component from step 3:

{% highlight javascript linenos %}
$.Velocity.RegisterUI(&quot;slideFadeIn&quot;, {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      scaleY: [1, 0.3],
      scaleX: [1, 0.3],
    }]]
});

$.Velocity.RegisterUI(&quot;slideInTop&quot;, {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      translateY: [0, -30],
    }]]
});

$.Velocity.RegisterUI(&quot;slideInLeft&quot;, {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      translateX: [0, 30],
    }]]
});

var DropdownMenu = React.createClass({

  componentWillUpdate: function(nextProps, nextState) {
    if (nextProps.visibility) {
      $(&#39;.dropdown-menu&#39;).velocity(&quot;slideFadeIn&quot;, {easing: &#39;ease-in&#39;, duration: 75});
      $(&#39;.dropdown-menu .dropdown-icons li&#39;).velocity(&quot;slideInLeft&quot;, {
        stagger: 40,
        duration: 350,
        easing: [0.610, 0.870, 0.710, 1.000],
      });
      $(&#39;.dropdown-menu .dropdown-item&#39;).velocity(&quot;slideInTop&quot;, {
        stagger: 30,
        duration: 250,
        easing: [0.610, 0.870, 0.710, 1.000],
      });
    } else {
      $(&#39;.dropdown-menu&#39;).velocity(&quot;reverse&quot;, {display: &#39;none&#39;});
      $(&#39;.dropdown-menu .dropdown-item&#39;).velocity(&quot;reverse&quot;);
    }
  },

  render: function() {
    return (
      &lt;div className=&quot;dropdown-menu&quot;&gt;
        &lt;div className=&quot;dropdown-header&quot;&gt;
          &lt;DropdownIcons /&gt;
          &lt;div className=&quot;dropdown-toggle&quot;&gt;
            &lt;Icon type=&quot;options&quot; handleClick={this.props.handleOptionsClick} fill=&quot;#0091EA&quot;/&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;DropdownItems /&gt;
      &lt;/div&gt;
    );
  }
});
{% endhighlight %}

Notice that in the render function, we're including components that we've defined earlier – just like standard HTML tags. How awesome is that? Also, notice that the "componentWillUpdate" function is responsible for triggering animation (we're using velocity.js for simplicity here, and also because it's an extremely efficient framework).

<h2>Step 6: Update your App Component.</h2>
Add this final bit of code to update your app component:

{% highlight javascript linenos %}
var App = React.createClass({

  getInitialState: function() {
    return {
      dropdownVisible: false
    }
  },

  dropdownToggle: function() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })
  },

  render: function() {
    return (
      &lt;div className=&quot;main-wrapper&quot;&gt;
        &lt;div className=&quot;header&quot;&gt;
          &lt;div className=&quot;header-inner&quot;&gt;
            &lt;Icon type=&quot;options&quot; fill=&quot;#ffffff&quot; handleClick={this.dropdownToggle}/&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;DropdownMenu visibility={this.state.dropdownVisible} handleOptionsClick={this.dropdownToggle} /&gt;
      &lt;/div&gt;
    );
  }
});
{% endhighlight %}

As you can see, this code contains the whole layout of the application as well as the state of the dropdown (visible/ hidden). When the state changes, we pass that information as a property to the dropdown menu component. We also pass the "dropdownToggle" function as a callback to the options icon component, as well as the dropdown menu itself (which also contains an options icon). This means the "dropdownToggle" function fires and changes the state of the dropdown whenever the options icon is clicked.

And that's it! Hope you found this tutorial useful. You can download the full source <a href="https://github.com/Syncano/react-tutorial/releases/tag/1.0">here</a>, or check the github repo <a href="https://github.com/Syncano/react-tutorial">here</a>.

<em>Photo Credit: Android Police</em>