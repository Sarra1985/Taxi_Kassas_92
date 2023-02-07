(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tom_select_dist_css_tom_select_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom-select/dist/css/tom-select.default.css */ "./node_modules/tom-select/dist/css/tom-select.default.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-autocomplete--autocomplete': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-autocomplete/dist/controller.js */ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






























/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var _instances, _getCommonConfig, _createAutocomplete, _createAutocompleteWithHtmlContents, _createAutocompleteWithRemoteData, _stripTags, _mergeObjects, _createTomSelect, _dispatchEvent;
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _super.apply(this, arguments);
    _instances.add(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      this.element.setAttribute('data-live-ignore', '');
      if (this.element.id) {
        var label = document.querySelector("label[for=\"".concat(this.element.id, "\"]"));
        if (label) {
          label.setAttribute('data-live-ignore', '');
        }
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _instances, "m", _createAutocompleteWithRemoteData).call(this, this.urlValue, this.minCharactersValue);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _instances, "m", _createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _instances, "m", _createAutocomplete).call(this);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.tomSelect.revertSettings.innerHTML = this.element.innerHTML;
      this.tomSelect.destroy();
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used no an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue == 'false') {
        return false;
      }
      if (this.preloadValue == 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__.Controller);
_instances = new WeakSet(), _getCommonConfig = function _getCommonConfig() {
  var _this2 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this2.noResultsFoundTextValue, "</div>");
    }
  };
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this2.tomSelect.setTextboxValue('');
    },
    onInitialize: function onInitialize() {
      var tomSelect = this;
      tomSelect.wrapper.setAttribute('data-live-ignore', '');
    },
    closeAfterSelect: true
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _createAutocomplete = function _createAutocomplete() {
  var config = __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, __classPrivateFieldGet(this, _instances, "m", _getCommonConfig).call(this), {
    maxOptions: this.selectElement ? this.selectElement.options.length : 50
  });
  return __classPrivateFieldGet(this, _instances, "m", _createTomSelect).call(this, config);
}, _createAutocompleteWithHtmlContents = function _createAutocompleteWithHtmlContents() {
  var _this3 = this;
  var config = __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, __classPrivateFieldGet(this, _instances, "m", _getCommonConfig).call(this), {
    maxOptions: this.selectElement ? this.selectElement.options.length : 50,
    score: function score(search) {
      var scoringFunction = _this3.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(Object.assign(Object.assign({}, item), {
          text: __classPrivateFieldGet(_this3, _instances, "m", _stripTags).call(_this3, item.text)
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item.text, "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _instances, "m", _createTomSelect).call(this, config);
}, _createAutocompleteWithRemoteData = function _createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _this5 = this;
  var config = __classPrivateFieldGet(this, _instances, "m", _mergeObjects).call(this, __classPrivateFieldGet(this, _instances, "m", _getCommonConfig).call(this), {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this4 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this4.setNextUrl(query, json.next_page);
        callback(json.results);
      })["catch"](function () {
        return callback();
      });
    },
    shouldLoad: function shouldLoad(query) {
      var minLength = minCharacterLength || 3;
      return query.length >= minLength;
    },
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2.text, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this5.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this5.noResultsFoundTextValue, "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _instances, "m", _createTomSelect).call(this, config);
}, _stripTags = function _stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _mergeObjects = function _mergeObjects(object1, object2) {
  return Object.assign(Object.assign({}, object1), object2);
}, _createTomSelect = function _createTomSelect(options) {
  __classPrivateFieldGet(this, _instances, "m", _dispatchEvent).call(this, 'autocomplete:pre-connect', {
    options: options
  });
  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_28___default())(this.formElement, options);
  __classPrivateFieldGet(this, _instances, "m", _dispatchEvent).call(this, 'autocomplete:connect', {
    tomSelect: tomSelect,
    options: options
  });
  return tomSelect;
}, _dispatchEvent = function _dispatchEvent(name, payload) {
  this.element.dispatchEvent(new CustomEvent(name, {
    detail: payload,
    bubbles: true
  }));
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  noResultsFoundText: String,
  noMoreResultsText: String,
  minCharacters: Number,
  tomSelectOptions: Object,
  preload: String
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-52ec79"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxHQUFHO0VBQ2Z2QixHQUFHLEVBQUV3QixNQUFNO0VBQ1hDLGFBQWEsRUFBRUMsT0FBTztFQUN0QkMsa0JBQWtCLEVBQUVILE1BQU07RUFDMUJJLGlCQUFpQixFQUFFSixNQUFNO0VBQ3pCSyxhQUFhLEVBQUVDLE1BQU07RUFDckJDLGdCQUFnQixFQUFFNUMsTUFBTTtFQUN4QnlCLE9BQU8sRUFBRVk7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7O0FDdE1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWF1dG9jb21wbGV0ZS9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAndG9tLXNlbGVjdC9kaXN0L2Nzcy90b20tc2VsZWN0LmRlZmF1bHQuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWF1dG9jb21wbGV0ZS0tYXV0b2NvbXBsZXRlJzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LWF1dG9jb21wbGV0ZS9kaXN0L2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFRvbVNlbGVjdCBmcm9tICd0b20tc2VsZWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5mdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG52YXIgX2luc3RhbmNlcywgX2dldENvbW1vbkNvbmZpZywgX2NyZWF0ZUF1dG9jb21wbGV0ZSwgX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMsIF9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSwgX3N0cmlwVGFncywgX21lcmdlT2JqZWN0cywgX2NyZWF0ZVRvbVNlbGVjdCwgX2Rpc3BhdGNoRXZlbnQ7XG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnLCAnJyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHt0aGlzLmVsZW1lbnQuaWR9XCJdYCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKS5jYWxsKHRoaXMsIHRoaXMudXJsVmFsdWUsIHRoaXMubWluQ2hhcmFjdGVyc1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zQXNIdG1sVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b21TZWxlY3QgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfY3JlYXRlQXV0b2NvbXBsZXRlKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLnRvbVNlbGVjdC5yZXZlcnRTZXR0aW5ncy5pbm5lckhUTUwgPSB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICB0aGlzLnRvbVNlbGVjdC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGdldCBzZWxlY3RFbGVtZW50KCkge1xuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBmb3JtRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgJiYgISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXV0b2NvbXBsZXRlIFN0aW11bHVzIGNvbnRyb2xsZXIgY2FuIG9ubHkgYmUgdXNlZCBubyBhbiA8aW5wdXQ+IG9yIDxzZWxlY3Q+LicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBwcmVsb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzUHJlbG9hZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ZvY3VzJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkVmFsdWUgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZWxvYWRWYWx1ZTtcbiAgICB9XG59XG5faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX2dldENvbW1vbkNvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb21tb25Db25maWcoKSB7XG4gICAgY29uc3QgcGx1Z2lucyA9IHt9O1xuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAhdGhpcy5zZWxlY3RFbGVtZW50IHx8IHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZTtcbiAgICBpZiAoIXRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgJiYgIWlzTXVsdGlwbGUpIHtcbiAgICAgICAgcGx1Z2lucy5jbGVhcl9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICBwbHVnaW5zLnJlbW92ZV9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAodGhpcy51cmxWYWx1ZSkge1xuICAgICAgICBwbHVnaW5zLnZpcnR1YWxfc2Nyb2xsID0ge307XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IHtcbiAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgb25JdGVtQWRkOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXRUZXh0Ym94VmFsdWUoJycpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvbVNlbGVjdCA9IHRoaXM7XG4gICAgICAgICAgICB0b21TZWxlY3Qud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnLCAnJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlQWZ0ZXJTZWxlY3Q6IHRydWUsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy51cmxWYWx1ZSkge1xuICAgICAgICBjb25maWcuc2hvdWxkTG9hZCA9ICgpID0+IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBjb25maWcsIHRoaXMudG9tU2VsZWN0T3B0aW9uc1ZhbHVlKTtcbn0sIF9jcmVhdGVBdXRvY29tcGxldGUgPSBmdW5jdGlvbiBfY3JlYXRlQXV0b2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2dldENvbW1vbkNvbmZpZykuY2FsbCh0aGlzKSwge1xuICAgICAgICBtYXhPcHRpb25zOiB0aGlzLnNlbGVjdEVsZW1lbnQgPyB0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGggOiA1MCxcbiAgICB9KTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMgPSBmdW5jdGlvbiBfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cygpIHtcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5zZWxlY3RFbGVtZW50ID8gdGhpcy5zZWxlY3RFbGVtZW50Lm9wdGlvbnMubGVuZ3RoIDogNTAsXG4gICAgICAgIHNjb3JlOiAoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY29yaW5nRnVuY3Rpb24gPSB0aGlzLnRvbVNlbGVjdC5nZXRTY29yZUZ1bmN0aW9uKHNlYXJjaCk7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcmluZ0Z1bmN0aW9uKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSksIHsgdGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX3N0cmlwVGFncykuY2FsbCh0aGlzLCBpdGVtLnRleHQpIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb246IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7aXRlbS50ZXh0fTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9pbnN0YW5jZXMsIFwibVwiLCBfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XG59LCBfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEgPSBmdW5jdGlvbiBfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEoYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwsIG1pbkNoYXJhY3Rlckxlbmd0aCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2dldENvbW1vbkNvbmZpZykuY2FsbCh0aGlzKSwge1xuICAgICAgICBmaXJzdFVybDogKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBhdXRvY29tcGxldGVFbmRwb2ludFVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nO1xuICAgICAgICAgICAgcmV0dXJuIGAke2F1dG9jb21wbGV0ZUVuZHBvaW50VXJsfSR7c2VwYXJhdG9yfXF1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX1gO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybChxdWVyeSk7XG4gICAgICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5leHRVcmwocXVlcnksIGpzb24ubmV4dF9wYWdlKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhqc29uLnJlc3VsdHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY2FsbGJhY2soKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3VsZExvYWQ6IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gbWluQ2hhcmFjdGVyTGVuZ3RoIHx8IDM7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnkubGVuZ3RoID49IG1pbkxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmU6IGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICBvcHRpb246IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7aXRlbS50ZXh0fTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub19tb3JlX3Jlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuby1tb3JlLXJlc3VsdHNcIj4ke3RoaXMubm9Nb3JlUmVzdWx0c1RleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vX3Jlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzXCI+JHt0aGlzLm5vUmVzdWx0c0ZvdW5kVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkOiB0aGlzLnByZWxvYWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9jcmVhdGVUb21TZWxlY3QpLmNhbGwodGhpcywgY29uZmlnKTtcbn0sIF9zdHJpcFRhZ3MgPSBmdW5jdGlvbiBfc3RyaXBUYWdzKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcbn0sIF9tZXJnZU9iamVjdHMgPSBmdW5jdGlvbiBfbWVyZ2VPYmplY3RzKG9iamVjdDEsIG9iamVjdDIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvYmplY3QxKSwgb2JqZWN0Mik7XG59LCBfY3JlYXRlVG9tU2VsZWN0ID0gZnVuY3Rpb24gX2NyZWF0ZVRvbVNlbGVjdChvcHRpb25zKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfaW5zdGFuY2VzLCBcIm1cIiwgX2Rpc3BhdGNoRXZlbnQpLmNhbGwodGhpcywgJ2F1dG9jb21wbGV0ZTpwcmUtY29ubmVjdCcsIHsgb3B0aW9ucyB9KTtcbiAgICBjb25zdCB0b21TZWxlY3QgPSBuZXcgVG9tU2VsZWN0KHRoaXMuZm9ybUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2luc3RhbmNlcywgXCJtXCIsIF9kaXNwYXRjaEV2ZW50KS5jYWxsKHRoaXMsICdhdXRvY29tcGxldGU6Y29ubmVjdCcsIHsgdG9tU2VsZWN0LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiB0b21TZWxlY3Q7XG59LCBfZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIF9kaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIGJ1YmJsZXM6IHRydWUgfSkpO1xufTtcbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdXJsOiBTdHJpbmcsXG4gICAgb3B0aW9uc0FzSHRtbDogQm9vbGVhbixcbiAgICBub1Jlc3VsdHNGb3VuZFRleHQ6IFN0cmluZyxcbiAgICBub01vcmVSZXN1bHRzVGV4dDogU3RyaW5nLFxuICAgIG1pbkNoYXJhY3RlcnM6IE51bWJlcixcbiAgICB0b21TZWxlY3RPcHRpb25zOiBPYmplY3QsXG4gICAgcHJlbG9hZDogU3RyaW5nLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiVG9tU2VsZWN0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImNhbGwiLCJ2YWx1ZSIsImdldCIsIl9pbnN0YW5jZXMiLCJfZ2V0Q29tbW9uQ29uZmlnIiwiX2NyZWF0ZUF1dG9jb21wbGV0ZSIsIl9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzIiwiX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhIiwiX3N0cmlwVGFncyIsIl9tZXJnZU9iamVjdHMiLCJfY3JlYXRlVG9tU2VsZWN0IiwiX2Rpc3BhdGNoRXZlbnQiLCJkZWZhdWx0XzEiLCJhcmd1bWVudHMiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImxhYmVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXJsVmFsdWUiLCJ0b21TZWxlY3QiLCJtaW5DaGFyYWN0ZXJzVmFsdWUiLCJvcHRpb25zQXNIdG1sVmFsdWUiLCJyZXZlcnRTZXR0aW5ncyIsImlubmVySFRNTCIsImRlc3Ryb3kiLCJIVE1MU2VsZWN0RWxlbWVudCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJFcnJvciIsImhhc1ByZWxvYWRWYWx1ZSIsInByZWxvYWRWYWx1ZSIsIldlYWtTZXQiLCJwbHVnaW5zIiwiaXNNdWx0aXBsZSIsInNlbGVjdEVsZW1lbnQiLCJtdWx0aXBsZSIsImZvcm1FbGVtZW50IiwiZGlzYWJsZWQiLCJjbGVhcl9idXR0b24iLCJ0aXRsZSIsInJlbW92ZV9idXR0b24iLCJ2aXJ0dWFsX3Njcm9sbCIsInJlbmRlciIsIm5vX3Jlc3VsdHMiLCJub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZSIsImNvbmZpZyIsIm9uSXRlbUFkZCIsInNldFRleHRib3hWYWx1ZSIsIm9uSW5pdGlhbGl6ZSIsIndyYXBwZXIiLCJjbG9zZUFmdGVyU2VsZWN0Iiwic2hvdWxkTG9hZCIsInRvbVNlbGVjdE9wdGlvbnNWYWx1ZSIsIm1heE9wdGlvbnMiLCJvcHRpb25zIiwibGVuZ3RoIiwic2NvcmUiLCJzZWFyY2giLCJzY29yaW5nRnVuY3Rpb24iLCJnZXRTY29yZUZ1bmN0aW9uIiwiaXRlbSIsIk9iamVjdCIsImFzc2lnbiIsInRleHQiLCJvcHRpb24iLCJhdXRvY29tcGxldGVFbmRwb2ludFVybCIsIm1pbkNoYXJhY3Rlckxlbmd0aCIsImZpcnN0VXJsIiwicXVlcnkiLCJzZXBhcmF0b3IiLCJpbmNsdWRlcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWQiLCJjYWxsYmFjayIsInVybCIsImdldFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldE5leHRVcmwiLCJuZXh0X3BhZ2UiLCJyZXN1bHRzIiwibWluTGVuZ3RoIiwibm9fbW9yZV9yZXN1bHRzIiwibm9Nb3JlUmVzdWx0c1RleHRWYWx1ZSIsInByZWxvYWQiLCJzdHJpbmciLCJyZXBsYWNlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJuYW1lIiwicGF5bG9hZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJ2YWx1ZXMiLCJTdHJpbmciLCJvcHRpb25zQXNIdG1sIiwiQm9vbGVhbiIsIm5vUmVzdWx0c0ZvdW5kVGV4dCIsIm5vTW9yZVJlc3VsdHNUZXh0IiwibWluQ2hhcmFjdGVycyIsIk51bWJlciIsInRvbVNlbGVjdE9wdGlvbnMiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==