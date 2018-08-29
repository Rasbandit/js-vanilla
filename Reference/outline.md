# Vanilla JS

http://vanilla-js.com/

## History of JS

- created in 1995 by Brendon Eich for Netscape over 10 days
- He created `mocha`, which then became `live script` but to piggyback onto the popularity of java they called it `JS`
  - there is no relation to java, which causes confusion
  - java was for server, js for client side
- It was designed to be picked up easily newcomers
- Once JS was created it was rushed to make it a standard so any other browsers could use it and one company couldn't dominate it.
  - ECMA was a standards organization that took on JS and standardized
  - that is why JS is some times called ECMA script
  - TC39 is the mini group inside of ECMA that works specifically with JS

https://www.youtube.com/watch?v=EUAmiIsp2YU

## Why care about Vanilla?

- Every framework you learn is built using JS so learning how it works under the hood will improve your understanding.
- To build a lot of features that frameworks give us take a long time and a lot of code, so it is a good shortcut.
  - But no framework is an end all be all, so learning a new framework will always be required.
- being able to solve your own problem with base JS and not needing a package for everything is an invaluable skill.
- What is a framework vs library vs vanilla
  - framework is an all inclusive tool, angular is considered one
  - react is considered a library's because it does not include other tools besides dom manipulation

## Basics

- we can use the document global to run functions and select HTML Nodes
  - A node has nothing to do with Node.js its just what we call an item on the DOM.
  - if we do selectorAll then we get a node list, not an array
    - use Array.from if we want all the same methods.
- we can save the element to a variable and do a lot of things to it
  - add event listeners
  - change the style
- add event listener for an on click. have it randomly change color on click.
- make a nav with nav items, show how you could add event listeners to each one or...
  - Event Delegation: putting the event listener on the parent instead of every individual element.
    - the event is still for the most specific element.

## XML requests

- You can also make requests to api's using XMLHttpRequest
  - you use the constructor function to make an instance then, you set what happens when it loads.
  - you then set what type of request it is and where it is going to.
  - then you initiate the request.