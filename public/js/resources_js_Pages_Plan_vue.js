"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Plan_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Plan.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Plan.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _vue_hero_icons_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-hero-icons/outline */ "./node_modules/@vue-hero-icons/outline/lib/index.es.js");
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
    sections: Array,
    products: Array
  },
  components: {
    TrashIcon: _vue_hero_icons_outline__WEBPACK_IMPORTED_MODULE_1__.TrashIcon
  },
  data: function data() {
    var _this$sections;
    return {
      activeTab: (_this$sections = this.sections) === null || _this$sections === void 0 ? void 0 : _this$sections[0].id,
      activeDesk: null,
      activeDesks: this.sections.flatMap(function (section) {
        return section.desks.filter(function (desk) {
          return desk.sale;
        }).map(function (desk) {
          desk.sale.created_at = new Date(desk.sale.created_at).toTimeString().substr(0, 5);
          return desk;
        });
      })
    };
  },
  methods: {
    openDesk: function openDesk(desk) {
      var _desk$sale;
      this.activeDesk = _objectSpread(_objectSpread({}, structuredClone(desk)), {}, {
        sale: structuredClone((_desk$sale = desk.sale) !== null && _desk$sale !== void 0 ? _desk$sale : {
          desk_id: desk.id,
          details: []
        })
      });
      console.log(this.activeDesk);
    },
    closeDesk: function closeDesk() {
      console.log(this.sale);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put(route('desk', this.activeDesk.sale.desk_id), _objectSpread(_objectSpread({}, this.activeDesk.sale), {}, {
        status: true
      }), {
        preserveState: false,
        replace: true,
        preserveScroll: true
      });
    },
    saveDesk: function saveDesk() {
      console.log(this.sale);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put(route('desk', this.activeDesk.sale.desk_id), this.activeDesk.sale, {
        preserveState: false,
        replace: true,
        preserveScroll: true
      });
    },
    addProduct: function addProduct(product) {
      var detail = this.activeDesk.sale.details.find(function (item) {
        return item.product.id === product.id;
      });
      if (detail) detail.quantity++;else this.activeDesk.sale.details.push({
        id: this.uuidv4(),
        product: product,
        product_id: product.id,
        price: product.price,
        quantity: 1
      });
    },
    quantity: function quantity(id, operation) {
      operation === "-" ? this.activeDesk.sale.details.find(function (item) {
        return item.id === id;
      }).quantity-- : this.activeDesk.sale.details.find(function (item) {
        return item.id === id;
      }).quantity++;
    },
    deleteRow: function deleteRow(row) {
      if (typeof row.id === "string") this.activeDesk.sale.details.splice(this.activeDesk.sale.details.findIndex(function (item) {
        return item.id === row.id;
      }));else _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia["delete"](route('desk-detail-delete', [this.activeDesk.sale.desk_id, row.id]), {
        preserveState: false,
        replace: true,
        preserveScroll: true
      });
    },
    uuidv4: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  },
  mounted: function mounted() {
    console.log(this.activeDesks);
  }
});

/***/ }),

/***/ "./resources/js/Pages/Plan.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Plan.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Plan_vue_vue_type_template_id_1281745c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plan.vue?vue&type=template&id=1281745c& */ "./resources/js/Pages/Plan.vue?vue&type=template&id=1281745c&");
/* harmony import */ var _Plan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plan.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Plan.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Plan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Plan_vue_vue_type_template_id_1281745c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Plan_vue_vue_type_template_id_1281745c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Plan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Plan.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Plan.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Plan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Plan.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Plan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Plan.vue?vue&type=template&id=1281745c&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Plan.vue?vue&type=template&id=1281745c& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plan_vue_vue_type_template_id_1281745c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plan_vue_vue_type_template_id_1281745c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Plan_vue_vue_type_template_id_1281745c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Plan.vue?vue&type=template&id=1281745c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Plan.vue?vue&type=template&id=1281745c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Plan.vue?vue&type=template&id=1281745c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Plan.vue?vue&type=template&id=1281745c& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "bg-white flex flex-col md:grid grid-cols-3 gap-4" },
      [
        _c("div", [
          _vm.activeDesks.length
            ? _c(
                "div",
                {
                  staticClass:
                    "flex flex-col gap-0.5 bg-gray-200 rounded-lg border-2 border-gray-200 text-gray-900 text-sm font-medium",
                },
                _vm._l(_vm.activeDesks, function (desk) {
                  return _c(
                    "button",
                    {
                      key: desk.id,
                      staticClass:
                        "bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 hover:bg-gray-100 hover:text-blue-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg",
                      on: {
                        click: function ($event) {
                          return _vm.openDesk(desk)
                        },
                      },
                    },
                    [
                      _c("span", { staticClass: "col-span-2 text-start" }, [
                        _vm._v(
                          _vm._s(desk.section_name) + " " + _vm._s(desk.name)
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "flex items-center justify-between" },
                        [
                          _c("span", { staticClass: "w-auto" }, [
                            _vm._v(_vm._s(desk.sale.created_at)),
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(desk.sale.total) + "$")]),
                        ]
                      ),
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.activeDesks.length === 0
            ? _c(
                "div",
                {
                  staticClass:
                    "text-center w-full text-amber-500 font-semibold",
                },
                [_vm._v("No active sales found")]
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "md:col-span-2" },
          [
            _c(
              "ul",
              {
                staticClass:
                  "flex items-center flex-nowrap overflow-x-auto pb-4 snap-x",
              },
              _vm._l(_vm.sections, function (section) {
                return _c("li", {
                  key: section.id,
                  staticClass:
                    "cursor-pointer py-2 px-4 text-gray-500 border-b-4 whitespace-nowrap snap-center",
                  class: {
                    "text-green-500 border-green-500":
                      _vm.activeTab === section.id,
                  },
                  domProps: { textContent: _vm._s(section.name) },
                  on: {
                    click: function ($event) {
                      _vm.activeTab = section.id
                    },
                  },
                })
              }),
              0
            ),
            _vm._v(" "),
            _vm._l(_vm.sections, function (section) {
              return _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeTab === section.id,
                      expression: "activeTab === section.id",
                    },
                  ],
                  key: section.id,
                  staticClass:
                    "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8 grid-flow-row gap-4",
                },
                _vm._l(section.desks, function (desk) {
                  return _c(
                    "button",
                    {
                      staticClass:
                        "bg-gray-200 h-32 rounded relative bg-emerald-400 text-white",
                      class: { "bg-red-400": !!desk.sale },
                      on: {
                        click: function ($event) {
                          return _vm.openDesk(desk)
                        },
                      },
                    },
                    [
                      desk.sale
                        ? _c(
                            "span",
                            { staticClass: "absolute left-1 top-1 text-xs" },
                            [_vm._v(_vm._s(desk.sale.created_at))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(section.name) + " " + _vm._s(desk.name)),
                      ]),
                      _vm._v(" "),
                      desk.sale && desk.sale.details
                        ? _c(
                            "span",
                            { staticClass: "absolute left-1 bottom-1 text-xs" },
                            [_vm._v(_vm._s(desk.sale.total) + "$")]
                          )
                        : _vm._e(),
                    ]
                  )
                }),
                0
              )
            }),
          ],
          2
        ),
      ]
    ),
    _vm._v(" "),
    _vm.activeDesk
      ? _c(
          "div",
          {
            staticClass: "fixed inset-0 z-50 overflow-y-auto",
            attrs: {
              "aria-labelledby": "modal-title",
              role: "dialog",
              "aria-modal": "true",
            },
          },
          [
            _c("div", { staticClass: "min-h-screen px-4 text-center" }, [
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.activeDesk,
                    expression: "activeDesk",
                  },
                ],
                staticClass:
                  "fixed inset-0 transition-opacity transform bg-gray-500 bg-opacity-40",
                attrs: {
                  "x-transition:enter":
                    "transition ease-out duration-300 transform",
                  "x-transition:enter-start": "opacity-0",
                  "x-transition:enter-end": "opacity-100",
                  "x-transition:leave":
                    "transition ease-in duration-200 transform",
                  "x-transition:leave-start": "opacity-100",
                  "x-transition:leave-end": "opacity-0",
                  "aria-hidden": "true",
                },
                on: {
                  click: function ($event) {
                    _vm.activeDesk = null
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeDesk,
                      expression: "activeDesk",
                    },
                  ],
                  staticClass:
                    "inline-block w-full xl:max-w-5xl p-8 my-20 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl",
                  attrs: {
                    "x-transition:enter":
                      "transition ease-out duration-300 transform",
                    "x-transition:enter-start":
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "x-transition:enter-end":
                      "opacity-100 translate-y-0 sm:scale-100",
                    "x-transition:leave":
                      "transition ease-in duration-200 transform",
                    "x-transition:leave-start":
                      "opacity-100 translate-y-0 sm:scale-100",
                    "x-transition:leave-end":
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex items-center justify-between space-x-4",
                    },
                    [
                      _c("span"),
                      _vm._v(" "),
                      _c(
                        "h1",
                        { staticClass: "text-xl font-medium text-gray-800" },
                        [
                          _vm._v(
                            _vm._s(_vm.activeDesk.section_name) +
                              " " +
                              _vm._s(_vm.activeDesk.name)
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "text-gray-600 focus:outline-none hover:text-gray-700",
                          on: {
                            click: function ($event) {
                              _vm.activeDesk = null
                            },
                          },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "w-6 h-6",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "grid grid-cols-5 grid-flow-row" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-span-2 overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative",
                          },
                          [
                            _vm.activeDesk.sale.details.length
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-col gap-0.5 bg-gray-200 rounded-lg border-2 border-gray-200 text-gray-900 text-sm font-medium",
                                  },
                                  _vm._l(
                                    _vm.activeDesk.sale.details,
                                    function (item) {
                                      return _c(
                                        "button",
                                        {
                                          key: item.id,
                                          staticClass:
                                            "bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 hover:bg-gray-100 hover:text-blue-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg",
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "col-span-2 text-start",
                                            },
                                            [_vm._v(_vm._s(item.product.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "flex items-center justify-between",
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "w-auto" },
                                                [_vm._v(_vm._s(item.quantity))]
                                              ),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    (
                                                      item.quantity * item.price
                                                    ).toFixed(2)
                                                  ) + "$"
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                )
                              : _vm._e(),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-span-3 pl-4" }, [
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
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex justify-end mt-6 gap-4" }, [
                      _vm.activeDesk.sale.details.length
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "px-3 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50",
                              attrs: { type: "button" },
                              on: { click: _vm.saveDesk },
                            },
                            [
                              _vm._v(
                                "\n                                Save\n                            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.activeDesk.sale.id
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "px-3 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 rounded-md dark:bg-red-600 dark:hover:bg-red-700 dark:focus:bg-red-700 hover:bg-red-600 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-50",
                              attrs: { type: "button" },
                              on: { click: _vm.closeDesk },
                            },
                            [
                              _vm._v(
                                "\n                                Close\n                            "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]),
                  ]),
                ]
              ),
            ]),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);