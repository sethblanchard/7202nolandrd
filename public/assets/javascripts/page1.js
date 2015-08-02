webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var exclaimify = __webpack_require__(2);
	
	console.log(exclaimify('page1.js loaded'));
	
	var button = document.getElementById('button');
	
	var alertAsyncMessage = function alertAsyncMessage() {
	  // CommonJS async syntax webpack magic
	  __webpack_require__.e/* nsure */(1, function () {
	    var message = __webpack_require__(3);
	    alert(exclaimify(message));
	  });
	};
	
	console.log('\n  asset references like this one:\n    assets/images/gulp.png\n  get updated in js too!');
	
	button.addEventListener('click', alertAsyncMessage);

/***/ }
]);
//# sourceMappingURL=page1.js.map