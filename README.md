# loadCSS

A function for loading CSS asynchronously

## Usage

Place stylesheet(s) with `class=loadCSS` and *without* `rel=stylesheet` attribute.

Then place and call the [`loadCSS` function](https://github.com/hail2u/loadCSS/blob/by-adding-rel-stylesheet/loadCSS.js) inline in the end of `head` of your page (it can also be included in an external JavaScript file if preferable).

``` html
<head>
...
<link
  class="loadCSS"
  href="path/to/mystylesheet.css">
...
<script>
function loadCSS(){
	"use strict";
	var css = document.querySelectorAll('link.loadCSS');

	for (var i = 0, l = css.length; i < l; i++) {
		css[i].rel = 'stylesheet';
	}
}

loadCSS();
</script>
</head>
```

By default, your stylesheet will be inserted before the first `script` tag in the DOM (which may be the one shown above). If you need another insert location, use the optional `before` argument to specify a different sibling element. The stylesheet will be inserted before the element you specify.

## License

MIT: http://hail2u.mit-license.org/2014
