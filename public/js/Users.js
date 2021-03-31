(self["webpackChunk"] = self["webpackChunk"] || []).push([["Users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    var _this = this;

    this.getUsers();
    Fire.$on('reloadUsers', function () {
      _this.getUsers();
    });
  },
  data: function data() {
    var sortOrders = {};
    var columns = [{
      label: 'ID',
      name: 'id'
    }, {
      label: 'First Name',
      name: 'u_fnm'
    }, {
      label: 'Last Name',
      name: 'u_lnm'
    }, {
      label: 'Phone no.',
      name: 'u_mo'
    }, {
      label: 'Email',
      name: 'u_email'
    }, {
      label: 'Date Added',
      name: 'created_at'
    }];
    columns.forEach(function (column) {
      sortOrders[column.name] = -1;
    });
    return {
      users: [],
      columns: columns,
      sortKey: 'created_at',
      sortOrders: sortOrders,
      length: 10,
      search: '',
      msg: '',
      tableShow: {
        showdata: true
      },
      pagination: {
        currentPage: 1,
        total: '',
        nextPage: '',
        prevPage: '',
        from: '',
        to: ''
      },
      fnm: '',
      lnm: '',
      email: '',
      phone: '',
      pass: '',
      rpass: '',
      message: ''
    };
  },
  methods: {
    deleteUser: function deleteUser(id) {
      this.axios.get('./api/delete/' + id).then(function (response) {
        this.msg = response.data;
      }.bind(this));
    },
    editUser: function editUser(id) {
      // this.axios.get('./api/delete/'+id).then(function(response){
      //     this.msg=response.data;
      // }.bind(this));
      window.alert("this is" + id);
    },
    getUsers: function getUsers() {
      var _this2 = this;

      this.axios.get('./api/users', {
        params: this.tableShow
      }).then(function (response) {
        console.log('The data: ', response.data);
        _this2.users = response.data;
        _this2.pagination.total = _this2.users.length;
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    paginate: function paginate(array, length, pageNumber) {
      this.pagination.from = array.length ? (pageNumber - 1) * length + 1 : ' ';
      this.pagination.to = pageNumber * length > array.length ? array.length : pageNumber * length;
      this.pagination.prevPage = pageNumber > 1 ? pageNumber : '';
      this.pagination.nextPage = array.length > this.pagination.to ? pageNumber + 1 : '';
      return array.slice((pageNumber - 1) * length, pageNumber * length);
    },
    resetPagination: function resetPagination() {
      this.pagination.currentPage = 1;
      this.pagination.prevPage = '';
      this.pagination.nextPage = '';
    },
    sortBy: function sortBy(key) {
      this.resetPagination();
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getIndex: function getIndex(array, key, value) {
      return array.findIndex(function (i) {
        return i[key] == value;
      });
    },
    open: function open(id) {
      this.$vm2.open('modal-1');
    },
    close: function close() {
      this.$vm2.close('modal-1');
    }
  },
  computed: {
    filteredUsers: function filteredUsers() {
      var _this3 = this;

      var users = this.users;

      if (this.search) {
        users = users.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(_this3.search.toLowerCase()) > -1;
          });
        });
      }

      var sortKey = this.sortKey;
      var order = this.sortOrders[sortKey] || 1;

      if (sortKey) {
        users = users.slice().sort(function (a, b) {
          var index = _this3.getIndex(_this3.columns, 'name', sortKey);

          a = String(a[sortKey]).toLowerCase();
          b = String(b[sortKey]).toLowerCase();

          if (_this3.columns[index].type && _this3.columns[index].type === 'date') {
            return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
          } else if (_this3.columns[index].type && _this3.columns[index].type === 'number') {
            return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
          } else {
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          }
        });
      }

      return users;
    },
    paginatedUsers: function paginatedUsers() {
      return this.paginate(this.filteredUsers, this.length, this.pagination.currentPage);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Users.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Users.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=30c27aa6& */ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=30c27aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "table-style" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }
        ],
        staticClass: "input",
        staticStyle: { width: "250px" },
        attrs: { type: "text", placeholder: "Search..." },
        domProps: { value: _vm.search },
        on: {
          input: [
            function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.search = $event.target.value
            },
            function($event) {
              return _vm.resetPagination()
            }
          ]
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "control" }, [
        _c("div", { staticClass: "select" }, [
          _vm._v("\n                Select Rows:\n                "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.length,
                  expression: "length"
                }
              ],
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.length = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    return _vm.resetPagination()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "5" } }, [_vm._v("5")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("20")])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("h2", [_vm._v(_vm._s(_vm.msg.message))]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-bordered table-responsive" }, [
      _c("thead", [
        _c(
          "tr",
          [
            _vm._l(_vm.columns, function(column) {
              return _c(
                "th",
                {
                  key: column.name,
                  class:
                    _vm.sortKey === column.name
                      ? _vm.sortOrders[column.name] > 0
                        ? "sorting_asc"
                        : "sorting_desc"
                      : "sorting",
                  staticStyle: { width: "40%", cursor: "pointer" },
                  on: {
                    click: function($event) {
                      return _vm.sortBy(column.name)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(column.label) +
                      "\n                "
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c("th", [_vm._v("Action")])
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.paginatedUsers, function(user) {
          return _c("tr", { key: user.id }, [
            _c("td", [_vm._v(_vm._s(user.parent_id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.first_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.last_name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.phone_no))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.email))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.created_at))]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "btn btn-danger btn-sm",
                  on: {
                    click: function($event) {
                      return _vm.deleteUser(user.id)
                    }
                  }
                },
                [_vm._v("Remove")]
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "btn btn-primary btn-sm",
                  on: {
                    click: function($event) {
                      return _vm.open(user.id)
                    }
                  }
                },
                [_vm._v("Edit")]
              )
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", [
      !_vm.tableShow.showdata
        ? _c("nav", { staticClass: "pagination" }, [
            _c("span", { staticClass: "page-stats" }, [
              _vm._v(
                _vm._s(_vm.pagination.from) +
                  " - " +
                  _vm._s(_vm.pagination.to) +
                  " of " +
                  _vm._s(_vm.pagination.total)
              )
            ]),
            _vm._v(" "),
            _vm.pagination.prevPageUrl
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-primary pagination-previous",
                    on: {
                      click: function($event) {
                        --_vm.pagination.currentPage
                      }
                    }
                  },
                  [_vm._v("\n                Prev\n            ")]
                )
              : _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-primary pagination-previous",
                    attrs: { disabled: "" }
                  },
                  [_vm._v("\n            Prev\n            ")]
                ),
            _vm._v(" "),
            _vm.pagination.nextPageUrl
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-sm pagination-next",
                    on: {
                      click: function($event) {
                        ++_vm.pagination.currentPage
                      }
                    }
                  },
                  [_vm._v("\n                Next\n            ")]
                )
              : _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-primary pagination-next",
                    attrs: { disabled: "" }
                  },
                  [_vm._v("\n                Next\n            ")]
                )
          ])
        : _c("nav", { staticClass: "pagination" }, [
            _c("span", { staticClass: "page-stats" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.pagination.from) +
                  " - " +
                  _vm._s(_vm.pagination.to) +
                  " of " +
                  _vm._s(_vm.filteredUsers.length) +
                  "\n                "
              ),
               true ? _c("span") : 0
            ]),
            _vm._v(" "),
            _vm.pagination.prevPage
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-primary pagination-previous",
                    on: {
                      click: function($event) {
                        --_vm.pagination.currentPage
                      }
                    }
                  },
                  [_vm._v("\n                Prev\n            ")]
                )
              : _c(
                  "a",
                  {
                    staticClass: "btn btn-sm pagination-previous btn-primary",
                    attrs: { disabled: "" }
                  },
                  [_vm._v("\n            Prev\n            ")]
                ),
            _vm._v(" "),
            _vm.pagination.nextPage
              ? _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-primary pagination-next",
                    on: {
                      click: function($event) {
                        ++_vm.pagination.currentPage
                      }
                    }
                  },
                  [_vm._v("\n                Next\n            ")]
                )
              : _c(
                  "a",
                  {
                    staticClass: "btn btn-sm pagination-next btn-primary",
                    attrs: { disabled: "" }
                  },
                  [_vm._v("\n                Next\n            ")]
                )
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "margin-bottom": "20px" } }, [
      _c("h2", [_vm._v("DashBoard")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);