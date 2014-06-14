/*!
 * loadCSS: load a CSS file asynchronously.
 *
 * License: http://hail2u.mit-license.org/2014
 */
function loadCSS(){
	'use strict';

	var css = document.querySelectorAll('link.loadCSS');

	for (var i = 0, l = css.length; i < l; i++) {
		css[i].rel = 'stylesheet';
	}
}
