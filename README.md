# Storia
Storia is simple and small library which allows you to create single page applications using the HTML5 History API. It gives you the power to use only html-markup to create a fully navigation website using pushState feature. It's very simple to use and you don't even need a back-end to start creating your website with different URL's for different content pages.

## Basic Usage
First, you need to load your storia library. You can use CDNJS or download your own copy.
```html
<script type="text/javascript" src="path/to/your/storia.js"></script>
```
To starting using storia, you have at least 3 ways to use. The simplest way is adding a ```data-storia``` attribute to every link on the page that you need to capture.

By doing this, you will follow the default workflow for loading differente pages content. Here's an example of the simplest usage:

```html
<ul>
  <a href="/about" data-storia>About</a>
  <a href="/about" data-storia>About</a>
  <a href="/about" data-storia>About</a>
  <a href="/about" data-storia>About</a>
</ul>
```

If you want to DRY, you can even define the attribute in a parent element, and storia will search for links inside of this element. Notice that all links inside of this element will be captured when clicked. By doing this, you need to have contents for all these links.

```
<ul data-storia>
  <a href="/about">About</a>
  <a href="/about">About</a>
  <a href="/about">About</a>
  <a href="/about">About</a>
</ul>
```

### So, how do I load my content?
Now that you have all your links configured to be captured, you have to define one or more targets to load your content. To this, you have to add an attribute called ```data-storia-wrapper``` to one or more elements that you want to your content be loaded.

Example:

```html
<div id="my-wrapper" data-storia-wrapper></div>
```

Notice that you can use multiple wrappers to load the same content, but this is not recommended for obvious reasons. It's up to you, the power is on your hands. But.. what if you want to load different contents? Follow the next instructions.

### Loading content in different wrappers with different contents
When data-storia on a LINK, will call loadContent function based on a HTML markup with the ID of the state. For example: /about searches for a #about-template-content div and put this content on your data-storia-wrapper element.

To load your templates inside of a container, add the "data-storia-wrapper" attribute on this element. For example:

## My old javascript handlers are not working anymore
Yes, no pain no gain. By using async loaded pages, you need to perform event handling using a different strategy like delegated events.

You can read more about this here:

* http://api.jquery.com/delegate/
* http://javascript.info/tutorial/event-delegation
* http://davidwalsh.name/event-delegate
