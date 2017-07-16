/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var a = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(obj, _Vdt, blocks) {
	if (false) {
	    var __this = this;
	    module.hot.dispose(function(data) {
	        data.vdt = __this;
	    })
	}

	_Vdt || (_Vdt = Vdt);
	obj || (obj = {});
	blocks || (blocks = {});
	var h = _Vdt.virtualDom.h, widgets = this && this.widgets || {}, _blocks = {}, __blocks = {},
	extend = _Vdt.utils.extend, _e = _Vdt.utils.error,self = this.data, scope = obj;
	return h('div',null, [function() {try {return [a][0]} catch(e) {_e(e)}}.call(this)])
	}
	if (false) {
	    module.hot.accept();
	    var vdt = module.hot.data && module.hot.data.vdt
	    if (vdt) {
	        vdt.template = module.exports;
	        vdt.update();
	    }
	}

/***/ })
/******/ ]);