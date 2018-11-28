---
title: Writing CSS for large projects- mixing OOCSS, BEM, ACSS
date: "2017-06-19"
---

Recently I and my colleague started working on revamping the website for dailyobjects.com (an e-commerce for mobile covers with a huge market in India).

Now, for a week straight we just kept correcting their 10000 lines CSS code but never really able to correct the mess. Any styling that we changed affected the styling of some other element and it took a lot of time overwriting some styles. Ultimately, we decided to re-write the code from the scratch and believe me that was the only option left for us at that time.

I am writing this article so that anyone who is writing CSS for a large project without much prior experience can take some cues as to how to start writing a maintainable and scalable CSS code.

Will explain by giving briefs over all the popular CSS writing schematics:

1. OOCSS:

Pioneered by [Nicole Sullivan](http://www.stubbornella.org/content/), OOCSS or Object Oriented CSS basically commands a developer to separate skin from the structure. So, in other words, you should not be writing a style used across the website again and again.

Basically, just sit and have a look at the design of the website over and over again. Figure out the common styles (like common buttons, headings) and write a separate class for them.

So I would end write an SCSS code like this (assuming I found a button being used on several occasions in the website):

```
.button-theme{
  background: #ffa500;
  border: 1px solid currentColor;
  border-radius: 4px;
  color: #eee;
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
  text-decoration: none
  &:hover{
    background: #eee;
    color: #ffa500
  } 
}
```

2. ACSS:

ACSS or Atomic CSS guides us to write re-usable classes and inheriting them whenever we need. Anyone who has used bootstrap or foundation would know what this means.

Basically you write some helper classes at the beginning of the project itself so that you don’t have to add styles to HTML elements later on and just inlining them with your predefined classes will do the work.

For me, writing a few of the basic classes helps. Everyone should have their own taste but here are my favourite classes which I declare before starting any project:

```
// Use this for all my containers
.limit-width{
  max-width: 980px;
  margin-left: auto;
  margin-right: auto
}
// Can be 10/20/30 according to needs
.mr-v10{
  margin-top: 10px;
  margin-bottom: 10px
}
.pd-h10{
  padding-left: 10px;
  padding-right: 10px
}
// Need this a lot for styling gallery of an e-commerce
.in-blk{
  display: inline-block
}
// Mostly don't need any styling for lists
.list-no-style{
  list-style: none
}
.img-max{
  max-width: 100%
}
```

So, very quickly for styling a gallery I can just write this in my markup:

```
<div class="limit-width mr-v10">
  <ul class="list-no-style">
    <li class="in-blk pd-h10"><img class="img-max" src=""/></li>
    <li class="in-blk pd-h10"><img class="img-max" src=""/></li>
    ...
  </ul>
</div>
```

3. BEM:

Ok, this last one is the toughest to follow but the most beneficial. BEM (Block, Element, Modifier) will help you avoid all the unnecessary CSS/Sass nestings.

Take this as an example of an Scss code:

```
ul#nav{
  .list-item{
    a{
      color: blue; 
    }
  }
}
```

If you know about CSS specificity you will understand how difficult it is to overwrite the stylings for the anchor element given above.

You will end up writing something like this to overwrite this style:

```
#nav>a{
  color: #000080 !important
}
```

And believe me there can be nothing messier in your project than some unnecessary importants!

BEM is a naming convention which instructs us to write a little more in the markup while naming the classes and avoiding nesting. Rules to follow are two dashes for Elements and two underscores for Modifiers (or can be one underscore according to your convenience).

Example naming classes for:

- Block: .top-section
- Element (ul): . top-section — nav
- Element (li): .top-section — nav — item
- Modifier: .top -section— nav — item__main

Here’s how I would write the mark up now:

```
<section class="top-section mr-v10">
  <ul class="top-section--nav list-no-style">
    <li class="top-section--nav--item in-blk pd-h10">Home</li>
    <li class="top-section--nav--item in-blk pd-h10">About</li>
    <li class="top-section--nav--item top-section--nav--item__main in-blk pd-h10">Contact Us Now</li>
  </ul>
</section>
```

Not much left to style as I used ACSS classes I had mentioned earlier. Still here are the some of the stylings I would use now:

```
.top-section{
  width: 100%
}
.top-section--nav--item{
  color: #ffa500;
  font-size: 1.1rem;
  text-transform: uppercase
}
.top-section--nav--item__main{
  color: red;   // please please, Contact Me Now!
}
```

In summary, here is a full set of guidelines you should be following while writing maintainable and scalable CSS for a large project (and believe me it really matters and saves a lot of time at a later stage):

- Follow OOCSS and ACSS at the beginning of the project. Do lots and lots of planning.
- Follow BEM while writing your markup (can be time consuming I know).
- Avoid nesting, !important and inline-styles while writing your CSS code.
- Don’t use ID or Element selectors. ID’s are highly specific and Element selectors add extra dependency so you won’t be able to change h1.heading to h2.heading at a later stage. Use just .heading or better something like .top-section — heading (BEM).
- Use class names like js-main-nav__item if you wan’t to use those classes for targeting an element in your Jquery or VanillaJS code. You don’t want to break your script code if you decide to change your CSS class name.

Take your time writing a clean CSS code. Explain to your Project Manager your timelines. Most managers would think that writing CSS code should not take up much time. Eventually the company ends up with a messy code with such thought process. So, please take your time!

---
