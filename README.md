# Storia (WIP)
Storia is simple and small library which allows you to create single page applications using the HTML5 History API. It gives you the power to use only html-markup to create a fully navigation website using pushState feature. It's very simple to use and you don't even need a back-end to start creating your website with different URL's for different content pages.

## Basic Usage
First, you need to load your storia library.

```html
<script type="text/javascript" src="path/to/your/storia.js"></script>
```

Add one or more handlers to your HTML:

```html
<html>
  <head>
  ...
  ...
  <body data-storia>
  ...
</html>
```

Or you can add the handler to specific links:

```html
<html>
  <head>
  ...
  ...
  <body>
    <a href="/about" data-storia></a>
  ...
</html>
```

**Important note:** If you add ```data-storia``` attribute to the ```<body>``` tag, all links ```<a>``` of your page will be using Storia js features. Also, don't worry about external links (eg: http://www.otherdomain.com), they will be ignored by default.

### How content load works
#### Wrappers
You need to define one or more wrappers to load your content. A wrapper is a html element with a ```data-storia-wrapper``` attribute. If you add one or more wrappers to your HTML markup, Storia will append the content of your routes inside of these wrappers.

**Note:** You can have multiple wrappers with different contents. Read more in [Multiple wrappers](http://waitiingfor.com/#multiple-rappers)

Example:

```html
<div id="my-wrapper" data-storia-wrapper></div>
```

After create a wrapper, your links will start to load content from ```template divs``` or via ```ajax``` calls. Let's see how this works:

#### Transports
##### Template Content

By default, Storia will use a default pattern to match all your routes with ```hidden``` HTML divs. For example:

```html
<html>
  <head></head>
  <body data-storia>
    <a href="/pages/about">About Us</a>

    <div data-storia-wrapper></div>

    <div id="pages-about-template-content" style="display: none;">
      <h1>About our company!</h1>
      <p>Lorem ipsum =)</p>
    </div>
  </body>
</html>
```

All your links will match divs with this pattern **ID**: ```#yourroute-template-content```. You don't need to care about server side process.

Storia will grab the HTML content of this **DIV**, change your URL and then append the HTML in the wrapper.

Pretty good for simple websites.

##### Ajax Load
If you have a directory struture like this: ```pages/about.html``` and you want to load your about content inside of your wrapper, you can specify the ajax transport on your setup:

```html
<body data-storia data-storia-transport="ajax">
```

When the click event happen, storia will load your template ```pages/about.html``` and insert inside of the wrapper.

**Note:** If your template has a full HTML MARKUP, using html,head,body tag, storia will match all content from a div with the **ID**: ```#yourroute-template-content```. It's the same pattern of the non-ajax transport. Also, we will bring your ```<title></title>``` content and append to the actual title page.

**Note:** For now, we are not loading external **js** or **css**.

The good thing about this, is that you can access those pages without pushState, and use for SEO or Bookmark purposes. If you paste http://yourwebsite.com/pages/about.html, still works.

#### Multiple Wrappers
To load content in different wrappers with different contents, you need to specify a target wrapper on the link. If you look at the example below you can see two wrappers, but the content will be appended to the custom one.

```html
<html>
<head></head>
<body data-storia>
  <div data-storia-wrapper></div>
  <div class="my-custom-wrapper"></div>

  <a href="/pages/about/moreinfo" data-storia-target=".my-custom-wrapper"></a>
</body>
```

## Contribution & Setup
* git clone ```git@github.com:djalmaaraujo/storiajs.git```
* bower install
* Open a simple server, for example: ```python -m SimpleHTTPServer```
* Tests are in /test.html
* Simple demos are in: /demos

## License

[MIT License](http://djalmaarajo.mit-license.org/) © Djalma Araújo

---------------------------
[cc company](http://nossomos.cc) - Code Consultants and Open Source Coding
