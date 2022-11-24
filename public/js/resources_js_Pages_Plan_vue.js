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
    _desks: Array,
    categories: Array,
    products: Array
  },
  components: {
    TrashIcon: _vue_hero_icons_outline__WEBPACK_IMPORTED_MODULE_1__.TrashIcon,
    XIcon: _vue_hero_icons_outline__WEBPACK_IMPORTED_MODULE_1__.XIcon,
    ArrowLeftIcon: _vue_hero_icons_outline__WEBPACK_IMPORTED_MODULE_1__.ArrowLeftIcon,
    ArrowRightIcon: _vue_hero_icons_outline__WEBPACK_IMPORTED_MODULE_1__.ArrowRightIcon
  },
  data: function data() {
    var _this$sections;
    return {
      activeTab: (_this$sections = this.sections) === null || _this$sections === void 0 ? void 0 : _this$sections[0].id,
      activeDesk: null,
      desks: this._desks.map(function (desk) {
        if (desk.sale) desk.sale.created_at = new Date(desk.sale.created_at).toTimeString().substring(0, 5);
        return desk;
      }),
      addProductTab: null,
      addProductCategory: this.categories.length ? this.categories[0].id : null,
      cart: []
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
    closeSale: function closeSale() {
      console.log(this.activeDesk.sale);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put(route('desk', this.activeDesk.id), _objectSpread(_objectSpread({}, this.activeDesk.sale), {}, {
        status: true
      }), {
        preserveState: false,
        replace: true,
        preserveScroll: true
      });
    },
    closeDeskModal: function closeDeskModal() {
      this.addProductTab = null;
      this.activeDesk = null;
      this.cart = [];
      this.addProductCategory = this.categories.length ? this.categories[0].id : null;
    },
    saveDesk: function saveDesk() {
      console.log(this.activeDesk, this.cart);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put(route('desk', this.activeDesk.id), _objectSpread(_objectSpread({}, this.activeDesk.sale), {}, {
        details: this.cart
      }), {
        preserveState: false,
        replace: true,
        preserveScroll: true
      });
    },
    addProduct: function addProduct(product) {
      var detail = this.cart.find(function (item) {
        return item.product_id === product.id;
      });
      if (detail) detail.quantity++;else this.cart.push({
        id: this.uuidv4(),
        product_id: product.id,
        product_name: product.name,
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
      var _this = this;
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (_ref) {
        var isConfirmed = _ref.isConfirmed;
        if (isConfirmed) _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia["delete"](route('desk-detail-delete', [_this.activeDesk.id, row.id]), {
          preserveState: false,
          replace: true,
          preserveScroll: true
        });
      });
    },
    uuidv4: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  },
  mounted: function mounted() {
    console.log(this.categories, this.products);
    var channel = Echo.channel('SaleChannel');
    channel.listen('Sale', function (e) {
      console.log(e);
    });
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
      { staticClass: "bg-white flex flex-col lg:grid grid-cols-3 gap-4" },
      [
        _c("div", [
          _vm.desks.filter(function (d) {
            return d.sale
          }).length
            ? _c(
                "div",
                {
                  staticClass:
                    "flex flex-col gap-0.5 bg-gray-200 rounded-lg border-2 border-gray-200 text-gray-900 text-sm font-medium",
                },
                _vm._l(
                  _vm.desks.filter(function (d) {
                    return d.sale
                  }),
                  function (desk) {
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
                            _vm._s(desk.section.name) + " " + _vm._s(desk.name)
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
                  }
                ),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.desks.filter(function (d) {
            return d.sale
          }).length === 0
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
                  "flex items-center flex-nowrap overflow-x-auto pb-2 snap-x",
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
                    "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8 grid-flow-row gap-4 mt-2",
                },
                _vm._l(
                  _vm.desks.filter(function (d) {
                    return d.section.id === section.id
                  }),
                  function (desk) {
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
                          _vm._v(
                            _vm._s(section.name) + " " + _vm._s(desk.name)
                          ),
                        ]),
                        _vm._v(" "),
                        desk.sale && desk.sale.details
                          ? _c(
                              "span",
                              {
                                staticClass: "absolute left-1 bottom-1 text-xs",
                              },
                              [_vm._v(_vm._s(desk.sale.total) + "$")]
                            )
                          : _vm._e(),
                      ]
                    )
                  }
                ),
                0
              )
            }),
          ],
          2
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "relative z-10",
        attrs: {
          "aria-labelledby": "slide-over-title",
          role: "dialog",
          "aria-modal": "true",
        },
      },
      [
        _c("div", {
          staticClass:
            "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500 opacity-0",
          class: {
            "opacity-100": _vm.activeDesk,
            "select-none pointer-events-none": !_vm.activeDesk,
          },
          on: { click: _vm.closeDeskModal },
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "fixed inset-0 overflow-hidden pointer-events-none" },
          [
            _c("div", { staticClass: "absolute inset-0 overflow-hidden" }, [
              _c(
                "div",
                {
                  staticClass:
                    "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-500 sm:duration-700",
                  class: { "translate-x-full": !_vm.activeDesk },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "pointer-events-auto w-screen max-w-md",
                      class: {
                        "!pointer-events-none translate-x-full":
                          !_vm.activeDesk,
                      },
                    },
                    [
                      _vm.activeDesk
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "flex h-full flex-col overflow-y-scroll bg-white shadow-xl",
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex items-start justify-between border-b border-gray-200 py-6 px-4 sm:px-6",
                                },
                                [
                                  _c(
                                    "h2",
                                    {
                                      staticClass:
                                        "text-lg font-medium text-gray-900",
                                      attrs: { id: "slide-over-title" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.activeDesk.section.name) +
                                          " " +
                                          _vm._s(_vm.activeDesk.name)
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ml-3 flex h-7 items-center",
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "-m-2 p-2 text-gray-400 hover:text-gray-500",
                                          attrs: { type: "button" },
                                          on: { click: _vm.closeDeskModal },
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("Close panel")]
                                          ),
                                          _vm._v(" "),
                                          _c("XIcon"),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex-1 overflow-y-auto pt-4 pb-6 px-4 sm:px-6",
                                },
                                [
                                  _vm.addProductTab == null
                                    ? _c("div", [
                                        _c(
                                          "div",
                                          { staticClass: "flow-root" },
                                          [
                                            _c(
                                              "ul",
                                              {
                                                staticClass:
                                                  "flex flex-col divide-y divide-gray-200 gap-2",
                                                attrs: { role: "list" },
                                              },
                                              _vm._l(
                                                _vm.activeDesk.sale.details,
                                                function (item) {
                                                  return _c(
                                                    "li",
                                                    {
                                                      key: item.id,
                                                      staticClass: "flex pt-2",
                                                    },
                                                    [
                                                      item.product.image
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                                            },
                                                            [
                                                              _c("img", {
                                                                staticClass:
                                                                  "h-full w-full object-cover object-center",
                                                                attrs: {
                                                                  src: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
                                                                },
                                                              }),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "flex flex-1 flex-col",
                                                        },
                                                        [
                                                          _c("div", [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "flex justify-between text-base font-medium text-gray-900",
                                                              },
                                                              [
                                                                _c("h3", [
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      attrs: {
                                                                        href: "#",
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          item
                                                                            .product
                                                                            .name
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "p",
                                                                  {
                                                                    staticClass:
                                                                      "ml-4",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "$" +
                                                                        _vm._s(
                                                                          item.quantity *
                                                                            item.price
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "flex flex-1 items-center justify-between text-sm",
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "text-gray-500",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Qty " +
                                                                      _vm._s(
                                                                        item.quantity
                                                                      )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "flex",
                                                                },
                                                                [
                                                                  _c(
                                                                    "button",
                                                                    {
                                                                      staticClass:
                                                                        "font-medium text-indigo-600 hover:text-indigo-500 p-1",
                                                                      attrs: {
                                                                        type: "button",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.deleteRow(
                                                                              item
                                                                            )
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Remove"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            ),
                                          ]
                                        ),
                                      ])
                                    : _vm.addProductTab == 0
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "ul",
                                            {
                                              staticClass:
                                                "flex items-center flex-nowrap overflow-x-auto pb-2 snap-x",
                                            },
                                            _vm._l(
                                              _vm.categories,
                                              function (category) {
                                                return _c("li", {
                                                  key: category.id,
                                                  staticClass:
                                                    "cursor-pointer py-2 px-4 text-gray-500 border-b-4 whitespace-nowrap snap-center",
                                                  class: {
                                                    "text-green-500 border-green-500":
                                                      _vm.addProductCategory ===
                                                      category.id,
                                                  },
                                                  domProps: {
                                                    textContent: _vm._s(
                                                      category.name
                                                    ),
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.addProductCategory =
                                                        category.id
                                                    },
                                                  },
                                                })
                                              }
                                            ),
                                            0
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.categories,
                                            function (category) {
                                              return _c(
                                                "div",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        _vm.addProductCategory ===
                                                        category.id,
                                                      expression:
                                                        "addProductCategory === category.id",
                                                    },
                                                  ],
                                                  key: category.id,
                                                  staticClass:
                                                    "grid grid-cols-2 gap-4",
                                                },
                                                _vm._l(
                                                  _vm.products.filter(function (
                                                    d
                                                  ) {
                                                    return (
                                                      d.category_id ===
                                                      category.id
                                                    )
                                                  }),
                                                  function (product) {
                                                    return _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "bg-gray-400 h-32 rounded relative text-white",
                                                        class: {
                                                          "ring-2 ring-emerald-400":
                                                            _vm.cart.find(
                                                              function (item) {
                                                                return (
                                                                  item.product_id ===
                                                                  product.id
                                                                )
                                                              }
                                                            ),
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.addProduct(
                                                              product
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(product.name)
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "absolute left-1 bottom-1 text-xs",
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                product.price
                                                              ) + "$"
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            }
                                          ),
                                        ],
                                        2
                                      )
                                    : _c("div", [
                                        _c(
                                          "div",
                                          { staticClass: "flex flex-col" },
                                          _vm._l(_vm.cart, function (item) {
                                            return _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "flex items-center justify-between",
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(item.product_name)
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(_vm._s(item.quantity)),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.quantity * item.price
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            )
                                          }),
                                          0
                                        ),
                                      ]),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.activeDesk.sale.id &&
                              _vm.addProductTab == null
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "border-t border-gray-200 py-6 px-4 sm:px-6",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "flex justify-between text-base font-medium text-gray-900",
                                        },
                                        [
                                          _c("p", [_vm._v("Total")]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "$" +
                                                _vm._s(
                                                  _vm.activeDesk.sale.total
                                                )
                                            ),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(0),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "border-t border-gray-200 py-6 px-4 sm:px-6",
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "flex items-center justify-center w-full rounded-md border border-transparent bg-emerald-500 disabled:bg-emerald-700 disabled:cursor-not-allowed disabled:text-gray-300 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-600",
                                        attrs: {
                                          disabled:
                                            _vm.addProductTab === 0 &&
                                            _vm.cart.length === 0,
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.addProductTab === 1
                                              ? _vm.saveDesk()
                                              : (_vm.addProductTab =
                                                  _vm.addProductTab === 0
                                                    ? 1
                                                    : 0)
                                          },
                                        },
                                      },
                                      [
                                        _vm.addProductTab === 0
                                          ? _c("span", [_vm._v("Open Cart")])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.addProductTab === 1
                                          ? _c("span", [_vm._v("Save")])
                                          : _vm.addProductTab == null
                                          ? _c("span", [_vm._v("Add Product")])
                                          : _vm._e(),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]
                  ),
                ]
              ),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-6" }, [
      _c(
        "a",
        {
          staticClass:
            "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700",
          attrs: { href: "#" },
        },
        [_vm._v("Checkout")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);