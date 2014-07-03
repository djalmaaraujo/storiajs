[![Build Status](https://drone.io/github.com/djalmaaraujo/storiajs/status.png)](https://drone.io/github.com/djalmaaraujo/storiajs/latest)

# Storia
Storia is simple and small library which allows you to create single page applications using the HTML5 History API. It gives you the power to use only html-markup to create a fully navigation website using pushState feature. It's very simple to use and you don't even need a back-end to start creating your website with different URL's for different content pages.

## Basic Usage
First, you need to load your storia library. You can use CDNJS or download your own copy.
```html
<script type="text/javascript" src="path/to/your/storia.js"></script>
```

If you don't have one or more ```data-storia``` elements on your html, storia will capture all links by default. This will make all links from the application acting as a template based html templates. If you want only parts of your applications using storia features, please, follow the next instructions:

You have at least 3 ways to use. The simplest way is adding a ```data-storia``` attribute to every link on the page that you need to capture.

By doing this, you will follow the default workflow for loading different pages content. Here's an example of the simplest usage:

```html
<ul>
  <a href="/about" data-storia>About</a>
  <a href="/about" data-storia>About</a>
  <a href="/about" data-storia>About</a>
  <a href="/about" data-storia>About</a>
</ul>
```

If you want to DRY, you can even define the attribute in a parent element, and storia will search for links inside of this element. Notice that all links inside of this element will be captured when clicked. By doing this, you need to have contents for all these links.

```html
<ul data-storia>
  <a href="/about">About</a>
  <a href="/about">About</a>
  <a href="/about">About</a>
  <a href="/about">About</a>
</ul>
```

### So, how do I load my content?
Now that you have all your links configured to be captured, you have to define one or more targets to load your content. Add an attribute called ```data-storia-wrapper``` to one or more elements that you want your content to be loaded.

Example:

```html
<div id="my-wrapper" data-storia-wrapper></div>
```

By doing this, storia will search for hidden elements (display: none elements) with the following pattern id: ```#yourroute-template-content```. For example, if you are navigating to /about, storia will replace the content of the ```data-storia-wrapper``` with the html inside of your ```#about-template-content```. Pretty simple. We use ID's because, it should be a unique template for each page.

### Loading pages with ajax
If you want to load your html templates from a  different file, storia will use ajax for you. To make things happen with ajax, you can specify on your ```data-storia``` element, using: ```<ul data-storia data-storia-transport="ajax"> ... </ul>```. The default option would be ```replace```.

Notice that you can combine multiple transports. If you have a list of links, you can setup to use the ajax transport on all links, except the ones you added ```data-storia-transport="replace"```. These links will use the default behavior, instead of the parent configuration.

To load ajax pages, storia will make an ajax call to ```/about.html``` for example. So, allow your server to receive these requests and make sure the template file exists.

```Notice that you can use multiple wrappers to load the same content, but this is not recommended for obvious reasons. It's up to you, the power is on your hands. But.. what if you want to load different contents? Follow the next instructions.```

### Loading content in different wrappers with different contents
To have multiple wrappers on your page and make things even more dynamic, you have to specify on your ```data-storia``` element the target option using: ```<ul data-storia data-storia-target=".my-other-wrapper-element"></ul>```, or you can specify on a specific link inside of your ```data-storia``` element.

# Javascript API
You can always use javascript to use all features from storia. If you need to add new routes dynamically or changing behaviors, read about our API:

## Basic Usage
### Setup storia
```javascript
storia.setup({
  transport: "replace" // replace or ajax
  globalHandler: "a" // all links will be capture on the page
  defaultPath: "/js/something" // to dont overwrite the entire path, ex: localhost/projects/storia/PATH, will just change PATH
  defaultTarget: "#id or .element" // default (will get all elements with the attribute data-storia-wrapper)
});
```

### Add multiple link handlers
```javascript
storia.addHandlerTo("#id or element") // will search for all links inside of that element. Good for multiple parts of the page
```

### Add a new route
```javascript
storia.route('about', {
  from: "#about-template-id", // omit if using ajax as a transport
  target: ".my-element-wrapper" // default (will get all elements with the attribute data-storia-wrapper)
  transport: "ajax" // replace by default
  beforeLoad: function () {},
  afterLoad: function () {}
});
```

# Options
## Global options
* **globalHandler**
* **transport**
* **defaultPath**
* **defaultTarget**

## Route Options
* **from**
* **target**
* **transport**
* **globalHandler**

## Route events
* **beforeLoad**
* **afterLoad**

## Methods
* **setup**
* **route**
* **addHandlerTo**
* **destroyHandler**
* **destroy**

## My old javascript handlers are not working anymore
Yes, no pain no gain. By using async loaded pages, you need to perform event handling using a different strategy like delegated events.

You can read more about this here:

* http://api.jquery.com/delegate/
* http://javascript.info/tutorial/event-delegation
* http://davidwalsh.name/event-delegate
