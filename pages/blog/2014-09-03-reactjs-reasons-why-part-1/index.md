---
path: '/reactjs-reasons-why-part-1/'
layout: post
title: 6 Reasons Why We Love React.js
date: 2014-09-03 11:21:29
author: marek
categories: ['News', 'ReactJS']
image: react-gui-e1411727492248.png
summary: "Our front-end team loves trying new things. New frameworks, new build tools… anything that makes our work more efficient deserves my attention. While some of tools have proved to be useful, a handful completely revolutionized my workflow (like switching to Sass – one of the best decisions I’ve ever made). But with the front-end world changing on a daily basis, it’s hard hard to devote time to learning a new framework – especially when that framework could ultimately become a dead end. So if you’re looking for the next best thing but you’re feeling a little bit lost in the framework jungle, I suggest checking out React.js. Here’s why we’re re-building our GUI in React.js, and why you might want to consider it as the basis of your next project"
---
Our front-end team loves trying new things. New frameworks, new build tools... anything that makes our work more efficient deserves my attention. While some of tools have proved to be useful, a handful completely revolutionized my workflow (like switching to Sass – one of the best decisions I've ever made).

But with the front-end world changing on a daily basis, it’s hard hard to devote time to learning a new framework – especially when that framework could ultimately become a dead end. So if you're looking for the next best thing but you're feeling a little bit lost in the framework jungle, I suggest checking out <a href="http://facebook.github.io/react/">React.js</a>.

Here's why we're re-building our GUI in React.js, and why you might want to consider it as the basis of your next project:<!--more-->
<h2>1. Components are the future of web development</h2>
<a href="http://www.polymer-project.org/platform/shadow-dom.html">Shadow DOM</a> and frameworks such as PolymerJS generated a lot of buzz lately, and rightly so. The core concept of Polymer boils down to creating self-contained, customizable elements that you can easily import and use in your project. This in itself is a fantastic idea, but React.js takes that concept to the next level. React.js doesn't use Shadow DOM – instead it gives you the ability to create your own components that you can later reuse, combine, and nest to your heart’s content. I've found this to be the single-biggest productivity boost because it’s so easy to define and manipulate your own components.
<h2>2. React.js is extremely efficient</h2>
React.js creates its own virtual DOM where your components actually live. This approach gives you enormous flexibility and amazing gains in performance because React.js calculates what changes need to be made in the DOM beforehand and updates the DOM tree accordingly. This way, React.js avoids costly DOM operations and makes updates in a very efficient manner.
<h2>3. It's awesome for SEO</h2>
One of the biggest issues with JavaScript frameworks is that they are not exactly search engine friendly. Although there have been some improvements in this area, search engines generally have trouble reading JavaScript-heavy applications. React.js stands out from the crowd because you can run React.js on the server, and the virtual DOM will be rendered and returned to the browser as a regular web page. No need for PhantomJS and other tricks!
<h2>4. It makes writing Javascript easier</h2>
React.js uses a special syntax called <a href="http://jsx.github.io/">JSX</a>, which allows you to mix HTML with JavaScript. This is not a requirement – you can still write in plain JavaScript – but I strongly suggest that you try the new syntax because makes writing your components a breeze. Being able to drop a bit of HTML in your render function without having to concatenate strings is fantastic, and after a while it feels very natural. React.js turns those bits of HTML into functions with a special JSXTransformer.
<h2>5. It gives you out-of-the-box developer tools</h2>
When you start your adventure with React.js, don't forget to install the official <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">React.js chrome extension</a>. It makes debugging your app so much easier. After you install the extension, you'll have a direct look into the virtual DOM just as if you were browsing a regular DOM tree in the elements panel. Pretty amazing!
<h2>6. The brains behind Facebook are maintaining this project</h2>
React.js is now open source, but it was first developed at Facebook for internal purposes. After a while, Facebook engineers realized that they created something truly awesome and decided to share their project with the world. Facebook uses some React.js, and Instagram’s entire website was built on React.js after the two companies joined forces. Other successful projects using React.js include <a href="https://www.khanacademy.org/">Khan Academy</a> and <a href="http://www.nytimes.com">New York Times</a>.

If you haven't already, check out <a href="http://www.syncano.com/getting-started-reactjs-tutorial/">the next article in this series</a>, in which I share a demo/tutorial and we build something together.

<em>Photo Credit: Code Geekz</em>