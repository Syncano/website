---
path: '/blog/friendly-code-review/'
layout: post
title: How to Facilitate Friendlier Code Reviews
description: "Having others review your code helps you catch bugs early, improve the design and quality of your code, and teach devs new skills."
date: 2014-11-20 11:21:29
author: justyna
categories: ['Culture', 'How Tos']
image: friendly-code-review.png
summary: "Imagine that you’ve worked on a feature for two days, and it’s finally ready. You tested it a little bit – so it should work – and now you can just merge it and push the feature to production. That way, everyone will be able to instantly see and use it, and you can move on. But instead of a new feature, this is what happens"
---
Imagine that you've worked on a feature for two days, and it's finally ready. You tested it a little bit - so it should work - and now you can just merge it and push the feature to production. That way, everyone will be able to instantly see and use it, and you can move on. But instead of a new feature, this is what happens: ![500 internal server error](Screen-Shot-2014-11-20-at-11.01.07-AM.png) So, what went wrong? Tests are awesome - but they aren't a silver bullet. Someone still has to write them and make sure they test the correct things. Even with tools like [Coverage](http://nedbatchelder.com/code/coverage/) that tell you which code needs additional tests, your code is not guaranteed to be completely correct, readable, and/or well-designed. That's why you need human code reviewers. Having others review your code helps you catch bugs early, improve the design and quality of your code, and teach developers new skills because of code discussions. It's also a way of getting and giving feedback. You can read more about the advantages of code review [here](https://netguru.co/blog/a-quick-guide-to-peer-code-review).

## There's No Free Lunch

Still, code review has it's downsides. It can take precious time and make development a bit slower because you have to both wait for reviewers and push follow-up commits with edits. The first round of code reviews shouldn't take more than twenty minutes (if it does, that could be a sign that you're pushing too big of a feature in one go), but the hardest part for most people is stepping away from their busy workload and getting started on the review. Try to get the process started as quickly as possible - you don't want new features to take months to implement.

### Giving Constructive Feedback

Feedback is hard to digest when it's not constructive. Take a look at this flow of comments: `This function is too long` `This design will probably cause some problems in the future.` `Typo in docstring` `Those tests are bad, they don't test X and you should refactor Y and Z.` `...This is just wrong.` `Have you even opened the documentation for this library?`   Instead of improving the product and solving a problem, feedback that is purely critical can offend the team member that authored the code and cause additional problems. Giving good feedback isn't an intuitive skill for a lot of us - but that doesn't mean we can't learn. To make sure team members don't get offended and criticism remains constructive, make a conscious effort to be friendly in your feedback. Here's what we mean:

### Making it Friendly

Be specific with your suggestions for improvement and include positive feedback to acknowledge progress and reinforce good work: `Really nice function! I liked how you do >this< here.` `I like it! +1` `I've learned something new. Awesome!` Give people the benefit of the doubt. Ie., a docstring _'sfaldfja'_ isn't in the code because someone is an evil person. She probably just forgot about it before commiting the code, and it can be easily fixed. Try something like this: `I believe that you can write a docstring that's a bit better here!`

### Make it Fun

Yeah, code reviews can be fun.

#### Exhibit A

If you see something like this in the code: ```javascript some_value = 300 ``` Instead of commenting: `We should avoid hardcoding a magic number in our code. It's a code smell. Why exactly 300?` Try something like: `Sparta!!! Why exactly this value?`

#### Exhibit B

For something like: ```javascript try: do_something() except: pass ``` You can comment back: `Do you really want to catch _all_ excetpions here? ^^ ![fire](http://media0.giphy.com/media/vIUaUFHRFT4XK/giphy.gif)`

### Helpful Rules For Authors

Giving friendly feedback isn't just for commenters - there are also some things the author can do to facilitate a friendly code review, such as:

*   Thank others for their feedback.
*   Acknowledge changes in the code.
*   Be positive about these changes.

## Summary

Friendly code reviews are awesome for everybody. And if you make it a goal to facilitate them, you might notice a shift from feeling like this when you receive feedback: ![](http://media.giphy.com/media/7GmtMozsKMSiI/giphy.gif) To this: ![](http://media.giphy.com/media/DGe8pQDAb85y0/giphy.gif) Have fun out there. 

_Photo Credit: [Geek and Poke](http://geekandpoke.typepad.com/)_
