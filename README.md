# loadCSS

A function for loading CSS asynchronously


## Usage

Place stylesheet(s) with `class=loadCSS` and *without* `rel=stylesheet` attribute.

Then place and call the [`loadCSS` function](https://github.com/hail2u/loadCSS/blob/by-adding-rel-stylesheet/loadCSS.js) inline in the end of `head` of your page (it can also be included in an external JavaScript file if preferable).

``` html
<head>
...
<link class="loadCSS" href="path/to/mystylesheet.css">
<link class="loadCSS" href="path/to/myanotherstylesheet.css">
...
<script>
function loadCSS() {
	'use strict';

	var css = document.querySelectorAll('link.loadCSS');

	for (var i = 0, l = css.length; i < l; i++) {
		css[i].rel = 'stylesheet';
	}
}

loadCSS();
</script>
</head>
```

All your stylesheets would keep its order.


## License

MIT: http://hail2u.mit-license.org/2014
