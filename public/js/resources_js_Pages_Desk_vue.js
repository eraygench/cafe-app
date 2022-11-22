"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Desk_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Desk.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Desk.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    back: String,
    desk: Object,
    activeSale: Object,
    products: Array
  },
  data: function data() {
    var _this$sections, _this$activeSale;
    return {
      activeTab: (_this$sections = this.sections) === null || _this$sections === void 0 ? void 0 : _this$sections[0].id,
      sale: (_this$activeSale = this.activeSale) !== null && _this$activeSale !== void 0 ? _this$activeSale : {
        desk_id: this.desk.id,
        details: []
      }
    };
  },
  methods: {
    addProduct: function addProduct(product) {
      var detail = this.sale.details.find(function (item) {
        return item.product.id === product.id;
      });
      if (detail) detail.quantity++;else this.sale.details.push({
        id: this.uuidv4(),
        product: product,
        product_id: product.id,
        price: product.price,
        quantity: 1
      });
    },
    quantity: function quantity(id, operation) {
      operation === "-" ? this.sale.details.find(function (item) {
        return item.id === id;
      }).quantity-- : this.sale.details.find(function (item) {
        return item.id === id;
      }).quantity++;
    },
    deleteRow: function deleteRow(row) {
      if (typeof row.id === "string") this.sale.details.splice(this.sale.details.findIndex(function (item) {
        return item.id === row.id;
      }));else _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia["delete"]('/plan/' + this.sale.desk_id, {
        detail_id: row.id
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    },
    uuidv4: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    },
    close: function close() {
      this.sale.status = "1";
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put('/plan/' + this.sale.desk_id, _objectSpread(_objectSpread({}, this.sale), {}, {
        status: true
      }), {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    },
    save: function save() {
      console.log(this.sale);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put('/plan/' + this.sale.desk_id, this.sale, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Desk.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Desk.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Desk_vue_vue_type_template_id_771afd7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desk.vue?vue&type=template&id=771afd7c& */ "./resources/js/Pages/Desk.vue?vue&type=template&id=771afd7c&");
/* harmony import */ var _Desk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desk.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Desk.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Desk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Desk_vue_vue_type_template_id_771afd7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Desk_vue_vue_type_template_id_771afd7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Desk.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Desk.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Desk.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Desk.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Desk.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Desk.vue?vue&type=template&id=771afd7c&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Desk.vue?vue&type=template&id=771afd7c& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desk_vue_vue_type_template_id_771afd7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desk_vue_vue_type_template_id_771afd7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desk_vue_vue_type_template_id_771afd7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Desk.vue?vue&type=template&id=771afd7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Desk.vue?vue&type=template&id=771afd7c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Desk.vue?vue&type=template&id=771afd7c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Desk.vue?vue&type=template&id=771afd7c& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Link", { attrs: { href: _vm.back, as: "button" } }, [_vm._v("Back")]),
      _vm._v(" "),
      _c("h1", [_vm._v(_vm._s(_vm.desk.name))]),
      _vm._v(" "),
      _vm.sale.details.length
        ? _c("button", { on: { click: _vm.save } }, [_vm._v("Save")])
        : _vm._e(),
      _vm._v(" "),
      _vm.activeSale
        ? _c("button", { on: { click: _vm.close } }, [_vm._v("Close")])
        : _vm._e(),
      _vm._v(" "),
      _c("hr", { staticClass: "mt-4" }),
      _vm._v(" "),
      _c("h1", { staticClass: "my-2" }, [_vm._v("Products")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex gap-2" },
        _vm._l(_vm.products, function (product) {
          return _c("button", {
            key: product.id,
            staticClass: "p-2 bg-gray-200",
            domProps: { textContent: _vm._s(product.name) },
            on: {
              click: function ($event) {
                return _vm.addProduct(product)
              },
            },
          })
        }),
        0
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "mt-4" }),
      _vm._v(" "),
      _c("h1", { staticClass: "my-2" }, [_vm._v("Details")]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative",
        },
        [
          _c(
            "table",
            {
              staticClass:
                "border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative",
            },
            [
              _c(
                "tbody",
                _vm._l(_vm.sale.details, function (item) {
                  return _c("tr", { key: item.id }, [
                    _c(
                      "td",
                      { staticClass: "border-dashed border-t border-gray-200" },
                      [
                        _c("span", {
                          staticClass:
                            "text-gray-700 px-6 py-2 flex items-center",
                          domProps: { textContent: _vm._s(item.product.name) },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "border-dashed border-t border-gray-200" },
                      [
                        _c("div", { staticClass: "flex" }, [
                          _c(
                            "button",
                            {
                              staticClass: "p-2 bg-gray-200",
                              attrs: { disabled: item.quantity <= 1 },
                              on: {
                                click: function ($event) {
                                  return _vm.quantity(item.id, "-")
                                },
                              },
                            },
                            [_vm._v("-")]
                          ),
                          _vm._v(" "),
                          _c("span", {
                            staticClass:
                              "text-gray-700 px-2 py-2 flex items-center",
                            domProps: { textContent: _vm._s(item.quantity) },
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "p-2 bg-gray-200",
                              on: {
                                click: function ($event) {
                                  return _vm.quantity(item.id, "+")
                                },
                              },
                            },
                            [_vm._v("+")]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "border-dashed border-t border-gray-200" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-gray-700 px-6 py-2 flex items-center",
                          },
                          [_vm._v(_vm._s(item.price) + "$")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "border-dashed border-t border-gray-200" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-gray-700 px-6 py-2 flex items-center",
                          },
                          [
                            _vm._v(
                              _vm._s((item.quantity * item.price).toFixed(2)) +
                                "$"
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "border-dashed border-t border-gray-200 whitespace-nowrap w-1",
                      },
                      [
                        _c("div", { staticClass: "fle.x gap-x-2 p-2" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.deleteRow(item)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                            Delete\n                        "
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ])
                }),
                0
              ),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);