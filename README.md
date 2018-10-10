# jQuery Validation With or Without Form

> Latest Version v1.0.0

jQuery Validation is tiny small library used to validate your HTML input fields such as input, select, textarea etc. Error messages are fully responsive and supported by all browsers, all devices etc.

No matter whether **your code has `form` tag or not** to validate form fields. If you are using form or you are using AJAX to refine your HTML block, then you can use this plugin to validate all fields present in HTML element in either of the case

Please refer [Example](https://github.com/ghana-c/jQuery-Validation-With-or-Without-Form/blob/master/example.html) for better understanding

### Getting started

Using jQuery Validation is very simple. First, you need to include validate.min.js in your web site :

Javascript File :

```HTML
<script type="text/javascript" src="validate.min.js"></script>
```

#### Usage

e.g. Suppose, you want to enable jQuery Validation on some HTML element, then you want to activate validation plugin on the same element. Please refer sample code below or you can see [example.html](https://github.com/ghana-c/jQuery-Validation-With-or-Without-Form/blob/master/example.html) :

```HTML
<div class="container">
	<input type="text" name="username" value="" />
	<input type="text" name="lastname" value="" validate />
  <button onclick="myFunc();" validate-submit>SUBMIT</button>
</div>
```

In above examle, jQuery Validation activates when you call validate method on the `container` element

**NOTE: You want to add `validate-submit` attribute to your submit button or the button on click of which, you want to show validation error messages. This attribute is used to understand jQuery Validation that this button is submit button.** Please refer example below : 

```HTML
<button onclick="myFunc();" validate-submit>SUBMIT</button>
```

Initialize with `GValidate` method :

```javascript
jQuery('.container').GValidate();
```

### HTML Input Element (such as input, select, textarea etc.) Attributes

#### validate

No matter you write attribute `validate` in input tag or any of your input element, jQuery Validation automatically add this attribute for you. In above HTML, it will apply validation for both input tags.

#### no-validate

NOTE: If you want to skip any input element to validate, just put `no-validate` attribute to that input element as below :

```HTML
<input type="text" name="username" value="" no-validate />
```

#### invalid-text

If you want to change the default message for some input element and add your own custom error message, then you can use this attribute as below :

```HTML
<input type="text" name="username" value="" invalid-text="Please enter first name" />
```

### Options

You may set jQuery Validation plugin options or override the default parameters. Please refer the examples below :

```javascript
jQuery('.container').GValidate({defaultMessage:'Please enter the text'});
```

Available options are :

#### defaultMessage
* Type : `String`
* Default : `Cannot left blank`

You can use `defaultMessage` to change default error message ocurred in tooltip

#### defaultEmailMessage
* Type : `String`
* Default : `Invalid email address`

You can use `defaultEmailMessage` to change default error message for email fields ocurred in tooltip

#### theme
* Type : `String`
* Default : `simple`

This option is used to change the default theme of error message tooltip
	- Possible values can be **`popover`**

#### style
* Type : `Object`
* Default :
  - `position` : `relative`
  - `display` : `inline-block`
  - `margin-left` : `0`
  - `margin-top` : `0`
  - `width` : `auto`
  - `color` : `red`
  - `font-size` : `12px`
  - `margin-bottom` : `10px`

You can override any property in style object. Please refer example below :

```javascript
jQuery('.container').GValidate({style:{'font-size':'14px'}});
```

Also, you can add new property to style object. Please refer examples below :

```javascript
jQuery('.container').GValidate({style:{'background-color':'#2a9afe'}});
```

You can put both properties at a time to change style object. Please refer examples below :

```javascript
jQuery('.container').GValidate({style:{'font-size':'14px','background-color':'#2a9afe'}});
```

### Note

1. Requires jQuery (greater than v2.0)

### Browser support

* Mozilla Firefox
* Google Chrome
* Internet Explorer
* Safari
* Opera

### Author

Ghanashyam Chaudhari (mr.ghchaudhari@gmail.com)
