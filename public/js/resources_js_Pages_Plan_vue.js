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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
        if (desk.sale) desk.sale.hour = new Date(desk.sale.created_at).toTimeString().substring(0, 5);
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
      Echo["private"]("SaleChannel.".concat(this.$page.props.auth.user.organization_id)).whisper('DeskOpen', {
        deskId: this.activeDesk.id,
        name: this.$page.props.auth.user.name
      });
    },
    closeSale: function closeSale() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put(route('desk', this.activeDesk.id), _objectSpread(_objectSpread({}, this.activeDesk.sale), {}, {
        status: true
      }), {
        preserveState: false,
        replace: true,
        preserveScroll: true
      });
    },
    closeDeskModal: function closeDeskModal() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _this.cart.length === 0;
                if (_context.t0) {
                  _context.next = 8;
                  break;
                }
                _context.t1 = _this.cart.length > 0;
                if (!_context.t1) {
                  _context.next = 7;
                  break;
                }
                _context.next = 6;
                return _this.$swal({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, close it!'
                });
              case 6:
                _context.t1 = _context.sent.isConfirmed;
              case 7:
                _context.t0 = _context.t1;
              case 8:
                if (!_context.t0) {
                  _context.next = 14;
                  break;
                }
                Echo["private"]("SaleChannel.".concat(_this.$page.props.auth.user.organization_id)).whisper('DeskClose', {
                  deskId: _this.activeDesk.id
                });
                _this.addProductTab = null;
                _this.activeDesk = null;
                _this.cart = [];
                _this.addProductCategory = _this.categories.length ? _this.categories[0].id : null;
              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveDesk: function saveDesk() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.put(route('desk', _this2.activeDesk.id), _objectSpread(_objectSpread({}, _this2.activeDesk.sale), {}, {
                  details: _this2.cart
                }), {
                  preserveState: false,
                  replace: false,
                  preserveScroll: true
                });
              case 2:
                Echo["private"]("SaleChannel.".concat(_this2.$page.props.auth.user.organization_id)).whisper('DeskClose', {
                  deskId: _this2.activeDesk.id
                });
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    prevAddProductTab: function prevAddProductTab() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.addProductTab === 1)) {
                  _context3.next = 4;
                  break;
                }
                _this3.addProductTab = 0;
                _context3.next = 16;
                break;
              case 4:
                _context3.t0 = _this3.cart.length === 0;
                if (_context3.t0) {
                  _context3.next = 12;
                  break;
                }
                _context3.t1 = _this3.cart.length > 0;
                if (!_context3.t1) {
                  _context3.next = 11;
                  break;
                }
                _context3.next = 10;
                return _this3.$swal({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, back to the desk!'
                });
              case 10:
                _context3.t1 = _context3.sent.isConfirmed;
              case 11:
                _context3.t0 = _context3.t1;
              case 12:
                if (!_context3.t0) {
                  _context3.next = 16;
                  break;
                }
                _this3.cart = [];
                _this3.addProductTab = null;
                _this3.addProductCategory = _this3.categories.length ? _this3.categories[0].id : null;
              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
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
      if (operation === "-") {
        if (this.cart.find(function (item) {
          return item.id === id;
        }).quantity > 1) this.cart.find(function (item) {
          return item.id === id;
        }).quantity--;else {
          this.cart.splice(this.cart.findIndex(function (item) {
            return item.id === id;
          }), 1);
          if (this.cart.length === 0) this.addProductTab = 0;
        }
      } else this.cart.find(function (item) {
        return item.id === id;
      }).quantity++;
    },
    deleteRow: function deleteRow(row) {
      var _this4 = this;
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref) {
          var isConfirmed;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  isConfirmed = _ref.isConfirmed;
                  if (!isConfirmed) {
                    _context4.next = 5;
                    break;
                  }
                  _context4.next = 4;
                  return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia["delete"](route('desk-detail-delete', [_this4.activeDesk.id, row.id]), {
                    preserveState: false,
                    replace: true,
                    preserveScroll: true
                  });
                case 4:
                  Echo["private"]("SaleChannel.".concat(_this4.$page.props.auth.user.organization_id)).whisper('DeskClose', {
                    deskId: _this4.activeDesk.id
                  });
                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    uuidv4: function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  },
  mounted: function mounted() {
    Echo.channel("SaleChannel.".concat(this.$page.props.auth.user.organization_id)).listen('Sale', function (event) {
      if (!!event.deskId) {
        var desk = this.desks.find(function (desk) {
          return desk.id === event.deskId;
        });
        if (desk) {
          desk.sale = event.sale;
          if (desk.sale) {
            desk.sale.hour = new Date(desk.sale.created_at).toTimeString().substring(0, 5);
          }
        }
      }
    }.bind(this));
    Echo["private"]("SaleChannel.".concat(this.$page.props.auth.user.organization_id)).listenForWhisper('DeskOpen', function (event) {
      if (!!event.deskId) {
        var desk = this.desks.find(function (desk) {
          return desk.id === event.deskId;
        });
        if (desk) {
          desk.openedBy = event.name;
        }
      }
    }.bind(this)).listenForWhisper('DeskClose', function (event) {
      if (!!event.deskId) {
        var desk = this.desks.find(function (desk) {
          return desk.id === event.deskId;
        });
        if (desk) {
          desk.openedBy = null;
        }
      }
    }.bind(this));
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
                          "bg-white px-4 py-2 w-full grid grid-cols-3 gap-4 transition-all disabled:bg-blue-400 disabled:text-white disabled:cursor-not-allowed hover:bg-gray-100 hover:text-blue-700 cursor-pointer first:rounded-t-lg last:rounded-b-lg",
                        attrs: { disabled: desk.openedBy },
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
                              _vm._v(_vm._s(desk.sale.hour)),
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
                [_vm._v("No active sales found\n            ")]
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
                    "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-flow-row gap-4 mt-2",
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
                          "bg-gray-200 h-32 rounded relative bg-emerald-400 text-white transition-all disabled:bg-blue-400 disabled:cursor-not-allowed",
                        class: { "bg-red-400": !!desk.sale },
                        attrs: { disabled: desk.openedBy },
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
                              [_vm._v(_vm._s(desk.sale.hour))]
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
                        _vm._v(" "),
                        desk.openedBy
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "absolute right-1 bottom-1 text-xs",
                              },
                              [_vm._v(_vm._s(desk.openedBy))]
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
                                  _vm.addProductTab != null
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "mr-3 flex h-7 items-center",
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "-m-2 p-2 text-gray-400 hover:text-gray-500",
                                              attrs: { type: "button" },
                                              on: {
                                                click: _vm.prevAddProductTab,
                                              },
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "sr-only" },
                                                [_vm._v("Prev")]
                                              ),
                                              _vm._v(" "),
                                              _c("ArrowLeftIcon"),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "h2",
                                    {
                                      staticClass:
                                        "text-lg font-medium text-gray-900",
                                      attrs: { id: "slide-over-title" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
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
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item
                                                                        .product
                                                                        .name
                                                                    )
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
                                                                        "Remove\n                                                            "
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
                                    : _vm.addProductTab === 0
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
                                                    "grid grid-cols-2 gap-4 mt-2",
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
                                                          "!bg-emerald-400":
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
                                                        _vm.cart.find(function (
                                                          item
                                                        ) {
                                                          return (
                                                            item.product_id ===
                                                            product.id
                                                          )
                                                        })
                                                          ? _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-green-500 text-center p-1 rounded-full text-sm leading-none decoration-0",
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                " +
                                                                    _vm._s(
                                                                      _vm.cart.find(
                                                                        function (
                                                                          item
                                                                        ) {
                                                                          return (
                                                                            item.product_id ===
                                                                            product.id
                                                                          )
                                                                        }
                                                                      ).quantity
                                                                    ) +
                                                                    "\n                                            "
                                                                ),
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
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
                                          {
                                            staticClass:
                                              "flex flex-col select-none gap-2",
                                          },
                                          _vm._l(_vm.cart, function (item) {
                                            return _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "flex items-center justify-between gap-2",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "border border-gray-400 rounded flex gap-1",
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "py-2 px-2",
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.quantity(
                                                              item.id,
                                                              "-"
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [_vm._v("-")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "py-2 px-2 text-sm flex items-center justify-center w-10",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(item.quantity)
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "py-2 px-2",
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.quantity(
                                                              item.id,
                                                              "+"
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [_vm._v("+")]
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "w-full text-center line-clamp-2",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.product_name)
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.quantity * item.price
                                                    ) + "$"
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
                                    _vm.addProductTab === 1
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "flex items-center justify-center w-full rounded-md border border-transparent bg-emerald-500 disabled:bg-emerald-700 disabled:cursor-not-allowed disabled:text-gray-300 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-600",
                                            on: { click: _vm.saveDesk },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Save\n                                    "
                                            ),
                                          ]
                                        )
                                      : _c(
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
                                                _vm.addProductTab =
                                                  _vm.addProductTab === 0
                                                    ? 1
                                                    : 0
                                              },
                                            },
                                          },
                                          [
                                            _vm.addProductTab === 0
                                              ? _c("span", [
                                                  _vm._v("Open Cart"),
                                                ])
                                              : _vm.addProductTab == null
                                              ? _c("span", [
                                                  _vm._v("Add Product"),
                                                ])
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