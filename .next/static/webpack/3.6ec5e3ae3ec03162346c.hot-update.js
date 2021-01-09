webpackHotUpdate_N_E(3,{

/***/ "./routes/MasterTables/index.js":
/*!**************************************!*\
  !*** ./routes/MasterTables/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Option = antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option;


var MasterTables = function MasterTables() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleStatus = _useState[0],
      setIsModalVisibleStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleQuality = _useState2[0],
      setIsModalVisibleQuality = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleType = _useState3[0],
      setIsModalVisibleType = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleAttribute = _useState4[0],
      setIsModalVisibleAttribute = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleIndustry = _useState5[0],
      setIsModalVisibleIndustry = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleCountry = _useState6[0],
      setIsModalVisibleCountry = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleCurrency = _useState7[0],
      setIsModalVisibleCurrency = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isModalVisibleOffice = _useState8[0],
      setIsModalVisibleOffice = _useState8[1]; ///////////////////////////


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleStatus = _useState9[0],
      setHandleStatus = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentStatus = _useState10[0],
      setcommentStatus = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleQuality = _useState11[0],
      setHandleQuality = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentQuality = _useState12[0],
      setcommentQuality = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleType = _useState13[0],
      setHandleType = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentType = _useState14[0],
      setcommentType = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleAttribute = _useState15[0],
      setHandleAttribute = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentAttribute = _useState16[0],
      setcommentAttribute = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleIndustry = _useState17[0],
      setHandleIndustry = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentIndustry = _useState18[0],
      setcommentIndustry = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCountry = _useState19[0],
      setHandleCountry = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentCountry = _useState20[0],
      setcommentCountry = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCurrency = _useState21[0],
      setHandleCurrency = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentCurrency = _useState22[0],
      setcommentCurrency = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleOffice = _useState23[0],
      setHandleOffice = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentOffice = _useState24[0],
      setcommentOffice = _useState24[1]; //////////////////////////


  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Masstatus = _useState25[0],
      setMasstatus = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      quality = _useState26[0],
      setQuality = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      type = _useState27[0],
      settype = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      attribute = _useState28[0],
      setattribute = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      ind = _useState29[0],
      setind = _useState29[1];

  var arrind = ind;

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      traffic = _useState30[0],
      settraffic = _useState30[1];

  var arrtraffic = traffic;

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Mascurrency = _useState31[0],
      setMascurrency = _useState31[1];

  var arrcurrency = Mascurrency;

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      office = _useState32[0],
      setoffice = _useState32[1];

  var arroffice = office;

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hasErrormas = _useState33[0],
      setErrorsmas = _useState33[1];

  var fetchDataMaster = function fetchDataMaster() {
    fetch("http://localhost:5000/api/v1/master/").then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res) {
        var data2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.json();

              case 2:
                data2 = _context.sent;
                console.log(data2, "ddddddddddddddddd");
                setMasstatus(data2[0].Master_Table.split(","));
                setcommentStatus(data2[0].Master_Comments);
                setQuality(data2[1].Master_Table.split(","));
                setcommentQuality(data2[1].Master_Comments);
                settype(data2[2].Master_Table.split(","));
                setcommentType(data2[2].Master_Comments);
                setattribute(data2[3].Master_Table.split(","));
                setcommentAttribute(data2[3].Master_Comments);
                setind(data2[4].Master_Table.split(","));
                setcommentIndustry(data2[4].Master_Comments);
                settraffic(data2[5].Master_Table.split(","));
                setcommentCountry(data2[5].Master_Comments);
                setMascurrency(data2[6].Master_Table.split(","));
                setcommentCurrency(data2[6].Master_Comments);
                setoffice(data2[7].Master_Table.split(","));
                setcommentOffice(data2[7].Master_Comments);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (err) {
      return setErrorsmas(err);
    });
  }; /////////////////////////////////////


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log("componentDidMount");
    fetchDataMaster();
  }, [0]); ////////////////////////////////////////////
  // const postData = (request, reqnumber) => {
  //   // console.log(Masstatus.toString(), "ARRAYtoString");
  //   // console.log(request, "REQUEST");
  //   // console.log(reqnumber,"NUMBER");
  //   fetch(`http://localhost:5000/api/v1/master/${reqnumber}`, request)
  //     .then(async (response) => {
  //       const data = await response.json();
  //       if (!response.ok) {
  //         // get error message from body or default to response status
  //         const error = (data && data.message) || response.status;
  //         return Promise.reject(error);
  //       }
  //       await console.log("data posted successfully");
  //       // window.location.reload(false);
  //     })
  //     .catch((error) => {
  //       this.setState({ errorMessage: error.toString() });
  //       console.error("There was an error!", error);
  //     });
  //   // Router.push("MasterTables");
  // };
  ////////////////////////////////////////////////////

  var postData = function postData(request, reqnumber) {
    console.log(Masstatus.toString(), "ARRAYtoString"); // console.log(request, "REQUEST");
    // console.log(reqnumber,"NUMBER");

    fetch("http://localhost:5000/api/v1/master/".concat(reqnumber), request).then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(response) {
        var data, error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return response.json();

              case 2:
                data = _context2.sent;

                if (response.ok) {
                  _context2.next = 6;
                  break;
                }

                // get error message from body or default to response status
                error = data && data.message || response.status;
                return _context2.abrupt("return", Promise.reject(error));

              case 6:
                _context2.next = 8;
                return console.log("data posted successfully");

              case 8:
                window.location.reload(false);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"](function (error) {
      _this.setState({
        errorMessage: error.toString()
      });

      console.error("There was an error!", error);
    }); // Router.push("MasterTables");
  }; ////////////////////////////////////////////


  var statusRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "STATUS",
      Master_Table: Masstatus.toString(),
      Master_Comments: commentStatus
    })
  };
  var qualityRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "QUALITY",
      Master_Table: quality.toString(),
      Master_Comments: commentQuality
    })
  };
  var typeRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "LINK_TYPE",
      Master_Table: type.toString(),
      Master_Comments: commentType
    })
  };
  var attributeRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "LINK_ATTRIBUTE",
      Master_Table: attribute.toString(),
      Master_Comments: commentAttribute
    })
  };
  var industryRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "INDUSTRY",
      Master_Table: ind.toString(),
      Master_Comments: commentIndustry
    })
  };
  var countryRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "TRAFFIC_COUNTRY",
      Master_Table: traffic.toString(),
      Master_Comments: commentCountry
    })
  };
  var currencyRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "CURRENCY",
      Master_Table: Mascurrency.toString(),
      Master_Comments: commentCurrency
    })
  };
  var officeRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Master_Name: "OFFICE_COUNTRY",
      Master_Table: office.toString(),
      Master_Comments: commentOffice
    })
  }; ///////////////////////////////////////
  // status

  var handleOkStatus = function handleOkStatus() {
    postData(statusRequest, 1);
  };

  var handleCancelStatus = function handleCancelStatus() {
    setIsModalVisibleStatus(false);
  }; // quality


  var handleOkQuality = function handleOkQuality() {
    postData(qualityRequest, 3);
  };

  var handleCancelQuality = function handleCancelQuality() {
    setIsModalVisibleQuality(false);
  }; // Type


  var handleOkType = function handleOkType() {
    postData(typeRequest, 4);
  };

  var handleCancelType = function handleCancelType() {
    setIsModalVisibleType(false);
  }; // Attribute


  var handleOkAttribute = function handleOkAttribute() {
    postData(attributeRequest, 5);
  };

  var handleCancelAttribute = function handleCancelAttribute() {
    setIsModalVisibleAttribute(false);
  }; // Type


  var handleOkIndustry = function handleOkIndustry() {
    postData(industryRequest, 6);
  };

  var handleCancelIndustry = function handleCancelIndustry() {
    setIsModalVisibleIndustry(false);
  }; // traffic country


  var handleOkCountry = function handleOkCountry() {
    postData(countryRequest, 7);
  };

  var handleCancelCountry = function handleCancelCountry() {
    setIsModalVisibleCountry(false);
  }; // Currency


  var handleOkCurrency = function handleOkCurrency() {
    postData(currencyRequest, 8);
  };

  var handleCancelCurrency = function handleCancelCurrency() {
    setIsModalVisibleCurrency(false);
  }; // Office Country


  var handleOkOffice = function handleOkOffice() {
    postData(officeRequest, 9);
  };

  var handleCancelOffice = function handleCancelOffice() {
    setIsModalVisibleOffice(false);
  };

  return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Status",
    visible: isModalVisibleStatus,
    onOk: handleOkStatus,
    onCancel: handleCancelStatus
  }, Masstatus.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, Masstatus.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleStatus(e.target.value);
      console.log(handleStatus);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setMasstatus([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Masstatus), [handleStatus]));
      console.log(typeof Masstatus, "MAAS");
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if CONFIRM', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentStatus,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentStatus(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Quality",
    visible: isModalVisibleQuality,
    onOk: handleOkQuality,
    onCancel: handleCancelQuality
  }, quality.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, quality.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleQuality(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setQuality([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(quality), [handleQuality]));
      console.log(quality);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentQuality,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentQuality(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Type",
    visible: isModalVisibleType,
    onOk: handleOkType,
    onCancel: handleCancelType
  }, type.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, type.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleType(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      settype([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(type), [handleType]));
      console.log(type);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentType,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentType(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Attribute",
    visible: isModalVisibleAttribute,
    onOk: handleOkAttribute,
    onCancel: handleCancelAttribute
  }, attribute.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, attribute.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleAttribute(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setattribute([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(attribute), [handleAttribute]));
      console.log(attribute);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentAttribute,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentAttribute(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Industry",
    visible: isModalVisibleIndustry,
    onOk: handleOkIndustry,
    onCancel: handleCancelIndustry
  }, ind.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, ind.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleIndustry(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setind([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ind), [handleIndustry]));
      console.log(ind);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentIndustry,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentIndustry(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Traffic Country",
    visible: isModalVisibleCountry,
    onOk: handleOkCountry,
    onCancel: handleCancelCountry
  }, traffic.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, traffic.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleCountry(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      settraffic([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(traffic), [handleCountry]));
      console.log(traffic);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentCountry,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentCountry(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Currency",
    visible: isModalVisibleCurrency,
    onOk: handleOkCurrency,
    onCancel: handleCancelCurrency
  }, Mascurrency.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, Mascurrency.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleCurrency(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setMascurrency([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Mascurrency), [handleCurrency]));
      console.log(Mascurrency);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentCurrency,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentCurrency(e.target.value);
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Office Country",
    visible: isModalVisibleOffice,
    onOk: handleOkOffice,
    onCancel: handleCancelOffice
  }, office.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "flex",
        marginBottom: "10px"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el));
  }), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      marginRight: "10px",
      marginTop: "5px"
    }
  }, office.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleOffice(e.target.value);
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setoffice([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(office), [handleOffice]));
      console.log(office);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("div", {
    style: {
      marginTop: "20px",
      width: "100%"
    }
  }, __jsx("div", null, "Status Comment"), __jsx("input", {
    value: commentOffice,
    style: {
      width: "100%"
    },
    placeholder: "Add your comment here...",
    onChange: function onChange(e) {
      setcommentOffice(e.target.value);
    }
  }))), __jsx("h1", null, "Masters Tables"), __jsx("div", {
    style: {
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleStatus(true);
    }
  }, "Status"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleQuality(true);
    }
  }, "Link Quality"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleType(true);
    }
  }, "Link Type"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleAttribute(true);
    }
  }, "Link Attribute"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleIndustry(true);
    }
  }, "Industry"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleCountry(true);
    }
  }, "Traffic Country"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleCurrency(true);
    }
  }, "Currency"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "30px",
      padding: "10px",
      border: "2px solid "
    },
    onClick: function onClick() {
      setIsModalVisibleOffice(true);
    }
  }, "Office Country")));
};

_s(MasterTables, "IjaGTxA2sVxs44FNMRBgTDW1GNo=");

_c = MasterTables;
/* harmony default export */ __webpack_exports__["default"] = (MasterTables);

var _c;

$RefreshReg$(_c, "MasterTables");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImhhbmRsZVF1YWxpdHkiLCJzZXRIYW5kbGVRdWFsaXR5IiwiY29tbWVudFF1YWxpdHkiLCJzZXRjb21tZW50UXVhbGl0eSIsImhhbmRsZVR5cGUiLCJzZXRIYW5kbGVUeXBlIiwiY29tbWVudFR5cGUiLCJzZXRjb21tZW50VHlwZSIsImhhbmRsZUF0dHJpYnV0ZSIsInNldEhhbmRsZUF0dHJpYnV0ZSIsImNvbW1lbnRBdHRyaWJ1dGUiLCJzZXRjb21tZW50QXR0cmlidXRlIiwiaGFuZGxlSW5kdXN0cnkiLCJzZXRIYW5kbGVJbmR1c3RyeSIsImNvbW1lbnRJbmR1c3RyeSIsInNldGNvbW1lbnRJbmR1c3RyeSIsImhhbmRsZUNvdW50cnkiLCJzZXRIYW5kbGVDb3VudHJ5IiwiY29tbWVudENvdW50cnkiLCJzZXRjb21tZW50Q291bnRyeSIsImhhbmRsZUN1cnJlbmN5Iiwic2V0SGFuZGxlQ3VycmVuY3kiLCJjb21tZW50Q3VycmVuY3kiLCJzZXRjb21tZW50Q3VycmVuY3kiLCJoYW5kbGVPZmZpY2UiLCJzZXRIYW5kbGVPZmZpY2UiLCJjb21tZW50T2ZmaWNlIiwic2V0Y29tbWVudE9mZmljZSIsIk1hc3N0YXR1cyIsInNldE1hc3N0YXR1cyIsInF1YWxpdHkiLCJzZXRRdWFsaXR5IiwidHlwZSIsInNldHR5cGUiLCJhdHRyaWJ1dGUiLCJzZXRhdHRyaWJ1dGUiLCJpbmQiLCJzZXRpbmQiLCJhcnJpbmQiLCJ0cmFmZmljIiwic2V0dHJhZmZpYyIsImFycnRyYWZmaWMiLCJNYXNjdXJyZW5jeSIsInNldE1hc2N1cnJlbmN5IiwiYXJyY3VycmVuY3kiLCJvZmZpY2UiLCJzZXRvZmZpY2UiLCJhcnJvZmZpY2UiLCJoYXNFcnJvcm1hcyIsInNldEVycm9yc21hcyIsImZldGNoRGF0YU1hc3RlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhMiIsImNvbnNvbGUiLCJsb2ciLCJNYXN0ZXJfVGFibGUiLCJzcGxpdCIsIk1hc3Rlcl9Db21tZW50cyIsImVyciIsInVzZUVmZmVjdCIsInBvc3REYXRhIiwicmVxdWVzdCIsInJlcW51bWJlciIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRTdGF0ZSIsImVycm9yTWVzc2FnZSIsInN0YXR1c1JlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJNYXN0ZXJfTmFtZSIsInF1YWxpdHlSZXF1ZXN0IiwidHlwZVJlcXVlc3QiLCJhdHRyaWJ1dGVSZXF1ZXN0IiwiaW5kdXN0cnlSZXF1ZXN0IiwiY291bnRyeVJlcXVlc3QiLCJjdXJyZW5jeVJlcXVlc3QiLCJvZmZpY2VSZXF1ZXN0IiwiaGFuZGxlT2tTdGF0dXMiLCJoYW5kbGVDYW5jZWxTdGF0dXMiLCJoYW5kbGVPa1F1YWxpdHkiLCJoYW5kbGVDYW5jZWxRdWFsaXR5IiwiaGFuZGxlT2tUeXBlIiwiaGFuZGxlQ2FuY2VsVHlwZSIsImhhbmRsZU9rQXR0cmlidXRlIiwiaGFuZGxlQ2FuY2VsQXR0cmlidXRlIiwiaGFuZGxlT2tJbmR1c3RyeSIsImhhbmRsZUNhbmNlbEluZHVzdHJ5IiwiaGFuZGxlT2tDb3VudHJ5IiwiaGFuZGxlQ2FuY2VsQ291bnRyeSIsImhhbmRsZU9rQ3VycmVuY3kiLCJoYW5kbGVDYW5jZWxDdXJyZW5jeSIsImhhbmRsZU9rT2ZmaWNlIiwiaGFuZGxlQ2FuY2VsT2ZmaWNlIiwibWFwIiwiZWwiLCJrZXkiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJwYWRkaW5nIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsInN1Y2Nlc3MiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDUUEsTSxHQUFXQywyQyxDQUFYRCxNO0FBQ1I7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBQyxLQUFELENBRHZDO0FBQUEsTUFDbEJDLG9CQURrQjtBQUFBLE1BQ0lDLHVCQURKOztBQUFBLG1CQUVpQ0Ysc0RBQVEsQ0FBQyxLQUFELENBRnpDO0FBQUEsTUFFbEJHLHFCQUZrQjtBQUFBLE1BRUtDLHdCQUZMOztBQUFBLG1CQUcyQkosc0RBQVEsQ0FBQyxLQUFELENBSG5DO0FBQUEsTUFHbEJLLGtCQUhrQjtBQUFBLE1BR0VDLHFCQUhGOztB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RUxhLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVCxhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JoSSwrQkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0Q7QUFWSCxnQkExREYsRUF3RUU7QUFDRSxTQUFLLEVBQUU7QUFDTDRILGFBQU8sRUFBRSxNQURKO0FBRUxhLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVCxhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I5SCw4QkFBd0IsQ0FBQyxJQUFELENBQXhCO0FBQ0Q7QUFWSCx1QkF4RUYsRUFzRkU7QUFDRSxTQUFLLEVBQUU7QUFDTDBILGFBQU8sRUFBRSxNQURKO0FBRUxhLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVCxhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I1SCwrQkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0Q7QUFWSCxnQkF0RkYsRUFvR0U7QUFDRSxTQUFLLEVBQUU7QUFDTHdILGFBQU8sRUFBRSxNQURKO0FBRUxhLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVCxhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2IxSCw2QkFBdUIsQ0FBQyxJQUFELENBQXZCO0FBQ0Q7QUFWSCxzQkFwR0YsQ0FsYkYsQ0FERjtBQXdpQkQsQ0F2ekJEOztHQUFNakIsWTs7S0FBQUEsWTtBQXl6QlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzMuNmVjNWUzYWUzZWMwMzE2MjM0NmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBUYWcsIFNwYWNlLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNYXN0ZXJUYWJsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlU3RhdHVzLCBzZXRJc01vZGFsVmlzaWJsZVN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlUXVhbGl0eSwgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVUeXBlLCBzZXRJc01vZGFsVmlzaWJsZVR5cGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSwgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUluZHVzdHJ5LCBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVDb3VudHJ5LCBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUN1cnJlbmN5LCBzZXRJc01vZGFsVmlzaWJsZUN1cnJlbmN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVPZmZpY2UsIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgW2hhbmRsZVN0YXR1cywgc2V0SGFuZGxlU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50U3RhdHVzLCBzZXRjb21tZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaGFuZGxlUXVhbGl0eSwgc2V0SGFuZGxlUXVhbGl0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFF1YWxpdHksIHNldGNvbW1lbnRRdWFsaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaGFuZGxlVHlwZSwgc2V0SGFuZGxlVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFR5cGUsIHNldGNvbW1lbnRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQXR0cmlidXRlLCBzZXRIYW5kbGVBdHRyaWJ1dGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRBdHRyaWJ1dGUsIHNldGNvbW1lbnRBdHRyaWJ1dGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVJbmR1c3RyeSwgc2V0SGFuZGxlSW5kdXN0cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRJbmR1c3RyeSwgc2V0Y29tbWVudEluZHVzdHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ291bnRyeSwgc2V0SGFuZGxlQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudENvdW50cnksIHNldGNvbW1lbnRDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ3VycmVuY3ksIHNldEhhbmRsZUN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q3VycmVuY3ksIHNldGNvbW1lbnRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZU9mZmljZSwgc2V0SGFuZGxlT2ZmaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50T2ZmaWNlLCBzZXRjb21tZW50T2ZmaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtNYXNzdGF0dXMsIHNldE1hc3N0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmQsIHNldGluZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGFycmluZCA9IGluZDtcclxuICBjb25zdCBbdHJhZmZpYywgc2V0dHJhZmZpY10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGFycnRyYWZmaWMgPSB0cmFmZmljO1xyXG4gIGNvbnN0IFtNYXNjdXJyZW5jeSwgc2V0TWFzY3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBhcnJjdXJyZW5jeSA9IE1hc2N1cnJlbmN5O1xyXG4gIGNvbnN0IFtvZmZpY2UsIHNldG9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGFycm9mZmljZSA9IG9mZmljZTtcclxuICBjb25zdCBbaGFzRXJyb3JtYXMsIHNldEVycm9yc21hc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZmV0Y2hEYXRhTWFzdGVyID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci9cIilcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhMiwgXCJkZGRkZGRkZGRkZGRkZGRkZFwiKTtcclxuICAgICAgICBzZXRNYXNzdGF0dXMoZGF0YTJbMF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudFN0YXR1cyhkYXRhMlswXS5NYXN0ZXJfQ29tbWVudHMpO1xyXG4gICAgICAgIHNldFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX0NvbW1lbnRzKTtcclxuICAgICAgICBzZXR0eXBlKGRhdGEyWzJdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRUeXBlKGRhdGEyWzJdLk1hc3Rlcl9Db21tZW50cyk7XHJcbiAgICAgICAgc2V0YXR0cmlidXRlKGRhdGEyWzNdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRBdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX0NvbW1lbnRzKTtcclxuICAgICAgICBzZXRpbmQoZGF0YTJbNF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEluZHVzdHJ5KGRhdGEyWzRdLk1hc3Rlcl9Db21tZW50cyk7XHJcbiAgICAgICAgc2V0dHJhZmZpYyhkYXRhMls1XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q291bnRyeShkYXRhMls1XS5NYXN0ZXJfQ29tbWVudHMpO1xyXG4gICAgICAgIHNldE1hc2N1cnJlbmN5KGRhdGEyWzZdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRDdXJyZW5jeShkYXRhMls2XS5NYXN0ZXJfQ29tbWVudHMpO1xyXG4gICAgICAgIHNldG9mZmljZShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50T2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9Db21tZW50cyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0RXJyb3JzbWFzKGVycikpO1xyXG4gIH07XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4gICAgZmV0Y2hEYXRhTWFzdGVyKCk7XHJcbiAgfSwgWzBdKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gY29uc3QgcG9zdERhdGEgPSAocmVxdWVzdCwgcmVxbnVtYmVyKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhNYXNzdGF0dXMudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gIC8vICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgLy8gICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgLy8gICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgLy8gICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coTWFzc3RhdHVzLnRvU3RyaW5nKCksIFwiQVJSQVl0b1N0cmluZ1wiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QsIFwiUkVRVUVTVFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcW51bWJlcixcIk5VTUJFUlwiKTtcclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci8ke3JlcW51bWJlcn1gLCByZXF1ZXN0KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFJvdXRlci5wdXNoKFwiTWFzdGVyVGFibGVzXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3Qgc3RhdHVzUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiU1RBVFVTXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogTWFzc3RhdHVzLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudFN0YXR1cyxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1YWxpdHlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJRVUFMSVRZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogcXVhbGl0eS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRRdWFsaXR5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfVFlQRVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHR5cGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50VHlwZSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgYXR0cmlidXRlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiTElOS19BVFRSSUJVVEVcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBhdHRyaWJ1dGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50QXR0cmlidXRlLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBpbmR1c3RyeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIklORFVTVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogaW5kLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEluZHVzdHJ5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjb3VudHJ5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiVFJBRkZJQ19DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHJhZmZpYy50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRDb3VudHJ5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjdXJyZW5jeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkNVUlJFTkNZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogTWFzY3VycmVuY3kudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50Q3VycmVuY3ksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IG9mZmljZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIk9GRklDRV9DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogb2ZmaWNlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudE9mZmljZSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIHN0YXR1c1xyXG4gIGNvbnN0IGhhbmRsZU9rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoc3RhdHVzUmVxdWVzdCwgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXMoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gcXVhbGl0eVxyXG4gIGNvbnN0IGhhbmRsZU9rUXVhbGl0eSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKHF1YWxpdHlSZXF1ZXN0LCAzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5KGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIFR5cGVcclxuICBjb25zdCBoYW5kbGVPa1R5cGUgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YSh0eXBlUmVxdWVzdCwgNCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsVHlwZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlVHlwZShmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBBdHRyaWJ1dGVcclxuICBjb25zdCBoYW5kbGVPa0F0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGF0dHJpYnV0ZVJlcXVlc3QsIDUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEF0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIFR5cGVcclxuICBjb25zdCBoYW5kbGVPa0luZHVzdHJ5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoaW5kdXN0cnlSZXF1ZXN0LCA2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxJbmR1c3RyeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gdHJhZmZpYyBjb3VudHJ5XHJcbiAgY29uc3QgaGFuZGxlT2tDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY291bnRyeVJlcXVlc3QsIDcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbENvdW50cnkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gQ3VycmVuY3lcclxuICBjb25zdCBoYW5kbGVPa0N1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY3VycmVuY3lSZXF1ZXN0LCA4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDdXJyZW5jeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3koZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gT2ZmaWNlIENvdW50cnlcclxuICBjb25zdCBoYW5kbGVPa09mZmljZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKG9mZmljZVJlcXVlc3QsIDkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbE9mZmljZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBzdGF0dXMgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiU3RhdHVzXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVN0YXR1c31cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa1N0YXR1c31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsU3RhdHVzfVxyXG4gICAgICA+XHJcbiAgICAgICAge01hc3N0YXR1cy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7TWFzc3RhdHVzLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1hc3N0YXR1cyhbLi4uTWFzc3RhdHVzLCBoYW5kbGVTdGF0dXNdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgTWFzc3RhdHVzLCBcIk1BQVNcIik7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENPTkZJUk0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50U3RhdHVzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50U3RhdHVzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHF1YWxpdHkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUXVhbGl0eVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVRdWFsaXR5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rUXVhbGl0eX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsUXVhbGl0eX1cclxuICAgICAgPlxyXG4gICAgICAgIHtxdWFsaXR5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtxdWFsaXR5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVRdWFsaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UXVhbGl0eShbLi4ucXVhbGl0eSwgaGFuZGxlUXVhbGl0eV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1YWxpdHkpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRRdWFsaXR5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50UXVhbGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHR5cGUgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHlwZVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVUeXBlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rVHlwZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsVHlwZX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0eXBlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHt0eXBlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVUeXBlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0dHlwZShbLi4udHlwZSwgaGFuZGxlVHlwZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFR5cGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgYXR0cmlidXRlICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkF0dHJpYnV0ZVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVBdHRyaWJ1dGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tBdHRyaWJ1dGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEF0dHJpYnV0ZX1cclxuICAgICAgPlxyXG4gICAgICAgIHthdHRyaWJ1dGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge2F0dHJpYnV0ZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0YXR0cmlidXRlKFsuLi5hdHRyaWJ1dGUsIGhhbmRsZUF0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEF0dHJpYnV0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGluZHVzdHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkluZHVzdHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUluZHVzdHJ5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rSW5kdXN0cnl9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEluZHVzdHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICAge2luZC5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7aW5kLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVJbmR1c3RyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGluZChbLi4uaW5kLCBoYW5kbGVJbmR1c3RyeV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZCk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEluZHVzdHJ5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0cmFmZmljIGNvdW50cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHJhZmZpYyBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUNvdW50cnl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDb3VudHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxDb3VudHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RyYWZmaWMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3RyYWZmaWMubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUNvdW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXR0cmFmZmljKFsuLi50cmFmZmljLCBoYW5kbGVDb3VudHJ5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codHJhZmZpYyk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudENvdW50cnl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRDb3VudHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgY3VycmVuY3kgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ3VycmVuY3lcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQ3VycmVuY3l9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDdXJyZW5jeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQ3VycmVuY3l9XHJcbiAgICAgID5cclxuICAgICAgICB7TWFzY3VycmVuY3kubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge01hc2N1cnJlbmN5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVDdXJyZW5jeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1hc2N1cnJlbmN5KFsuLi5NYXNjdXJyZW5jeSwgaGFuZGxlQ3VycmVuY3ldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXNjdXJyZW5jeSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEN1cnJlbmN5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50Q3VycmVuY3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvZmZpY2UgY291bnRyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJPZmZpY2UgQ291bnRyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVPZmZpY2V9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tPZmZpY2V9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbE9mZmljZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtvZmZpY2UubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge29mZmljZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlT2ZmaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0b2ZmaWNlKFsuLi5vZmZpY2UsIGhhbmRsZU9mZmljZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9mZmljZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudE9mZmljZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudE9mZmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPGgxPk1hc3RlcnMgVGFibGVzPC9oMT5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgUXVhbGl0eVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVR5cGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgVHlwZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBBdHRyaWJ1dGVcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluZHVzdHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHJhZmZpYyBDb3VudHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3kodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEN1cnJlbmN5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPZmZpY2UgQ291bnRyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJUYWJsZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=