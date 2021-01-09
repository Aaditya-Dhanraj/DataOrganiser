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

  var arrquality = quality;

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      type = _useState27[0],
      settype = _useState27[1];

  var arrtype = type;

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      attribute = _useState28[0],
      setattribute = _useState28[1];

  var arrattribute = attribute;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImhhbmRsZVF1YWxpdHkiLCJzZXRIYW5kbGVRdWFsaXR5IiwiY29tbWVudFF1YWxpdHkiLCJzZXRjb21tZW50UXVhbGl0eSIsImhhbmRsZVR5cGUiLCJzZXRIYW5kbGVUeXBlIiwiY29tbWVudFR5cGUiLCJzZXRjb21tZW50VHlwZSIsImhhbmRsZUF0dHJpYnV0ZSIsInNldEhhbmRsZUF0dHJpYnV0ZSIsImNvbW1lbnRBdHRyaWJ1dGUiLCJzZXRjb21tZW50QXR0cmlidXRlIiwiaGFuZGxlSW5kdXN0cnkiLCJzZXRIYW5kbGVJbmR1c3RyeSIsImNvbW1lbnRJbmR1c3RyeSIsInNldGNvbW1lbnRJbmR1c3RyeSIsImhhbmRsZUNvdW50cnkiLCJzZXRIYW5kbGVDb3VudHJ5IiwiY29tbWVudENvdW50cnkiLCJzZXRjb21tZW50Q291bnRyeSIsImhhbmRsZUN1cnJlbmN5Iiwic2V0SGFuZGxlQ3VycmVuY3kiLCJjb21tZW50Q3VycmVuY3kiLCJzZXRjb21tZW50Q3VycmVuY3kiLCJoYW5kbGVPZmZpY2UiLCJzZXRIYW5kbGVPZmZpY2UiLCJjb21tZW50T2ZmaWNlIiwic2V0Y29tbWVudE9mZmljZSIsIk1hc3N0YXR1cyIsInNldE1hc3N0YXR1cyIsInF1YWxpdHkiLCJzZXRRdWFsaXR5IiwiYXJycXVhbGl0eSIsInR5cGUiLCJzZXR0eXBlIiwiYXJydHlwZSIsImF0dHJpYnV0ZSIsInNldGF0dHJpYnV0ZSIsImFycmF0dHJpYnV0ZSIsImluZCIsInNldGluZCIsImFycmluZCIsInRyYWZmaWMiLCJzZXR0cmFmZmljIiwiYXJydHJhZmZpYyIsIk1hc2N1cnJlbmN5Iiwic2V0TWFzY3VycmVuY3kiLCJhcnJjdXJyZW5jeSIsIm9mZmljZSIsInNldG9mZmljZSIsImFycm9mZmljZSIsImhhc0Vycm9ybWFzIiwic2V0RXJyb3JzbWFzIiwiZmV0Y2hEYXRhTWFzdGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiTWFzdGVyX0NvbW1lbnRzIiwiZXJyIiwidXNlRWZmZWN0IiwicG9zdERhdGEiLCJyZXF1ZXN0IiwicmVxbnVtYmVyIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImRhdGEiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic3RhdHVzUmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIk1hc3Rlcl9OYW1lIiwicXVhbGl0eVJlcXVlc3QiLCJ0eXBlUmVxdWVzdCIsImF0dHJpYnV0ZVJlcXVlc3QiLCJpbmR1c3RyeVJlcXVlc3QiLCJjb3VudHJ5UmVxdWVzdCIsImN1cnJlbmN5UmVxdWVzdCIsIm9mZmljZVJlcXVlc3QiLCJoYW5kbGVPa1N0YXR1cyIsImhhbmRsZUNhbmNlbFN0YXR1cyIsImhhbmRsZU9rUXVhbGl0eSIsImhhbmRsZUNhbmNlbFF1YWxpdHkiLCJoYW5kbGVPa1R5cGUiLCJoYW5kbGVDYW5jZWxUeXBlIiwiaGFuZGxlT2tBdHRyaWJ1dGUiLCJoYW5kbGVDYW5jZWxBdHRyaWJ1dGUiLCJoYW5kbGVPa0luZHVzdHJ5IiwiaGFuZGxlQ2FuY2VsSW5kdXN0cnkiLCJoYW5kbGVPa0NvdW50cnkiLCJoYW5kbGVDYW5jZWxDb3VudHJ5IiwiaGFuZGxlT2tDdXJyZW5jeSIsImhhbmRsZUNhbmNlbEN1cnJlbmN5IiwiaGFuZGxlT2tPZmZpY2UiLCJoYW5kbGVDYW5jZWxPZmZpY2UiLCJtYXAiLCJlbCIsImtleSIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImJvcmRlciIsInBhZGRpbmciLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5MZWZ0Iiwic3VjY2VzcyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUNRQSxNLEdBQVdDLDJDLENBQVhELE07QUFDUjs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQytCQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkM7QUFBQSxNQUNsQkMsb0JBRGtCO0FBQUEsTUFDSUMsdUJBREo7O0FBQUEsbUJBRWlDRixzREFBUSxDQUFDLEtBQUQsQ0FGekM7QUFBQSxNQUVsQkcscUJBRmtCO0FBQUEsTUFFS0Msd0JBRkw7O0FBQUEsbUJBRzJCSixzREFBUSxDQUFDLEtBQUQsQ0FIbkM7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LENBREY7QUF3aUJELENBMXpCRDs7R0FBTWpCLFk7O0tBQUFBLFk7QUE0ekJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLjM2MGM2MTQ2MGE3ZmRiNDMzNjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFzdGVyVGFibGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVN0YXR1cywgc2V0SXNNb2RhbFZpc2libGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVF1YWxpdHksIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlVHlwZSwgc2V0SXNNb2RhbFZpc2libGVUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVBdHRyaWJ1dGUsIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVJbmR1c3RyeSwgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQ291bnRyeSwgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVDdXJyZW5jeSwgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlT2ZmaWNlLCBzZXRJc01vZGFsVmlzaWJsZU9mZmljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtoYW5kbGVTdGF0dXMsIHNldEhhbmRsZVN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFN0YXR1cywgc2V0Y29tbWVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZVF1YWxpdHksIHNldEhhbmRsZVF1YWxpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRRdWFsaXR5LCBzZXRjb21tZW50UXVhbGl0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZVR5cGUsIHNldEhhbmRsZVR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRUeXBlLCBzZXRjb21tZW50VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUF0dHJpYnV0ZSwgc2V0SGFuZGxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50QXR0cmlidXRlLCBzZXRjb21tZW50QXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaGFuZGxlSW5kdXN0cnksIHNldEhhbmRsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5kdXN0cnksIHNldGNvbW1lbnRJbmR1c3RyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUNvdW50cnksIHNldEhhbmRsZUNvdW50cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRDb3VudHJ5LCBzZXRjb21tZW50Q291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUN1cnJlbmN5LCBzZXRIYW5kbGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEN1cnJlbmN5LCBzZXRjb21tZW50Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVPZmZpY2UsIHNldEhhbmRsZU9mZmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudE9mZmljZSwgc2V0Y29tbWVudE9mZmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBbTWFzc3RhdHVzLCBzZXRNYXNzdGF0dXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtxdWFsaXR5LCBzZXRRdWFsaXR5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgYXJycXVhbGl0eSA9IHF1YWxpdHk7XHJcbiAgY29uc3QgW3R5cGUsIHNldHR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBhcnJ0eXBlID0gdHlwZTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBhcnJhdHRyaWJ1dGUgPSBhdHRyaWJ1dGU7XHJcbiAgY29uc3QgW2luZCwgc2V0aW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgYXJyaW5kID0gaW5kO1xyXG4gIGNvbnN0IFt0cmFmZmljLCBzZXR0cmFmZmljXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgYXJydHJhZmZpYyA9IHRyYWZmaWM7XHJcbiAgY29uc3QgW01hc2N1cnJlbmN5LCBzZXRNYXNjdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGFycmN1cnJlbmN5ID0gTWFzY3VycmVuY3k7XHJcbiAgY29uc3QgW29mZmljZSwgc2V0b2ZmaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgYXJyb2ZmaWNlID0gb2ZmaWNlO1xyXG4gIGNvbnN0IFtoYXNFcnJvcm1hcywgc2V0RXJyb3JzbWFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmZXRjaERhdGFNYXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyL1wiKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEyLCBcImRkZGRkZGRkZGRkZGRkZGRkXCIpO1xyXG4gICAgICAgIHNldE1hc3N0YXR1cyhkYXRhMlswXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50U3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9Db21tZW50cyk7XHJcbiAgICAgICAgc2V0UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfQ29tbWVudHMpO1xyXG4gICAgICAgIHNldHR5cGUoZGF0YTJbMl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudFR5cGUoZGF0YTJbMl0uTWFzdGVyX0NvbW1lbnRzKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfQ29tbWVudHMpO1xyXG4gICAgICAgIHNldGluZChkYXRhMls0XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoZGF0YTJbNF0uTWFzdGVyX0NvbW1lbnRzKTtcclxuICAgICAgICBzZXR0cmFmZmljKGRhdGEyWzVdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRDb3VudHJ5KGRhdGEyWzVdLk1hc3Rlcl9Db21tZW50cyk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEN1cnJlbmN5KGRhdGEyWzZdLk1hc3Rlcl9Db21tZW50cyk7XHJcbiAgICAgICAgc2V0b2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRPZmZpY2UoZGF0YTJbN10uTWFzdGVyX0NvbW1lbnRzKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcnNtYXMoZXJyKSk7XHJcbiAgfTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICBmZXRjaERhdGFNYXN0ZXIoKTtcclxuICB9LCBbMF0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAvLyBjb25zdCBwb3N0RGF0YSA9IChyZXF1ZXN0LCByZXFudW1iZXIpID0+IHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKE1hc3N0YXR1cy50b1N0cmluZygpLCBcIkFSUkFZdG9TdHJpbmdcIik7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0LCBcIlJFUVVFU1RcIik7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhyZXFudW1iZXIsXCJOVU1CRVJcIik7XHJcbiAgLy8gICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvJHtyZXFudW1iZXJ9YCwgcmVxdWVzdClcclxuICAvLyAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgLy8gICAgICAgICAvLyBnZXQgZXJyb3IgbWVzc2FnZSBmcm9tIGJvZHkgb3IgZGVmYXVsdCB0byByZXNwb25zZSBzdGF0dXNcclxuICAvLyAgICAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXM7XHJcbiAgLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhcImRhdGEgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAvLyAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVycm9yLnRvU3RyaW5nKCkgfSk7XHJcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciFcIiwgZXJyb3IpO1xyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAvLyBSb3V0ZXIucHVzaChcIk1hc3RlclRhYmxlc1wiKTtcclxuICAvLyB9O1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgcG9zdERhdGEgPSAocmVxdWVzdCwgcmVxbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhNYXNzdGF0dXMudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBzdGF0dXNSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJTVEFUVVNcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBNYXNzdGF0dXMudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50U3RhdHVzLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcXVhbGl0eVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIlFVQUxJVFlcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBxdWFsaXR5LnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudFF1YWxpdHksXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCB0eXBlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiTElOS19UWVBFXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHlwZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRUeXBlLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBhdHRyaWJ1dGVSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJMSU5LX0FUVFJJQlVURVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IGF0dHJpYnV0ZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRBdHRyaWJ1dGUsXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGluZHVzdHJ5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiSU5EVVNUUllcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBpbmQudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50SW5kdXN0cnksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGNvdW50cnlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJUUkFGRklDX0NPVU5UUllcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiB0cmFmZmljLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudENvdW50cnksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGN1cnJlbmN5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiQ1VSUkVOQ1lcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBNYXNjdXJyZW5jeS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRDdXJyZW5jeSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3Qgb2ZmaWNlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiT0ZGSUNFX0NPVU5UUllcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBvZmZpY2UudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50T2ZmaWNlLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gc3RhdHVzXHJcbiAgY29uc3QgaGFuZGxlT2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShzdGF0dXNSZXF1ZXN0LCAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVN0YXR1cyhmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBxdWFsaXR5XHJcbiAgY29uc3QgaGFuZGxlT2tRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEocXVhbGl0eVJlcXVlc3QsIDMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFF1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gVHlwZVxyXG4gIGNvbnN0IGhhbmRsZU9rVHlwZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKHR5cGVSZXF1ZXN0LCA0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxUeXBlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVUeXBlKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIEF0dHJpYnV0ZVxyXG4gIGNvbnN0IGhhbmRsZU9rQXR0cmlidXRlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoYXR0cmlidXRlUmVxdWVzdCwgNSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsQXR0cmlidXRlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gVHlwZVxyXG4gIGNvbnN0IGhhbmRsZU9rSW5kdXN0cnkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShpbmR1c3RyeVJlcXVlc3QsIDYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEluZHVzdHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeShmYWxzZSk7XHJcbiAgfTtcclxuICAvLyB0cmFmZmljIGNvdW50cnlcclxuICBjb25zdCBoYW5kbGVPa0NvdW50cnkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShjb3VudHJ5UmVxdWVzdCwgNyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsQ291bnRyeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeShmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBDdXJyZW5jeVxyXG4gIGNvbnN0IGhhbmRsZU9rQ3VycmVuY3kgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShjdXJyZW5jeVJlcXVlc3QsIDgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEN1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeShmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBPZmZpY2UgQ291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEob2ZmaWNlUmVxdWVzdCwgOSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVPZmZpY2UoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHN0YXR1cyAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJTdGF0dXNcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlU3RhdHVzfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rU3RhdHVzfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxTdGF0dXN9XHJcbiAgICAgID5cclxuICAgICAgICB7TWFzc3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtNYXNzdGF0dXMubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaGFuZGxlU3RhdHVzKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TWFzc3RhdHVzKFsuLi5NYXNzdGF0dXMsIGhhbmRsZVN0YXR1c10pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBNYXNzdGF0dXMsIFwiTUFBU1wiKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ09ORklSTScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRTdGF0dXN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgcXVhbGl0eSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJRdWFsaXR5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVF1YWxpdHl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tRdWFsaXR5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxRdWFsaXR5fVxyXG4gICAgICA+XHJcbiAgICAgICAge3F1YWxpdHkubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3F1YWxpdHkubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVF1YWxpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRRdWFsaXR5KFsuLi5xdWFsaXR5LCBoYW5kbGVRdWFsaXR5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVhbGl0eSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFF1YWxpdHl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRRdWFsaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdHlwZSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJUeXBlXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVR5cGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tUeXBlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxUeXBlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3R5cGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3R5cGUubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXR0eXBlKFsuLi50eXBlLCBoYW5kbGVUeXBlXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VHlwZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBhdHRyaWJ1dGUgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQXR0cmlidXRlXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0F0dHJpYnV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQXR0cmlidXRlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2F0dHJpYnV0ZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7YXR0cmlidXRlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRhdHRyaWJ1dGUoWy4uLmF0dHJpYnV0ZSwgaGFuZGxlQXR0cmlidXRlXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50QXR0cmlidXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50QXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgaW5kdXN0cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiSW5kdXN0cnlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlSW5kdXN0cnl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tJbmR1c3RyeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsSW5kdXN0cnl9XHJcbiAgICAgID5cclxuICAgICAgICB7aW5kLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtpbmQubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUluZHVzdHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0aW5kKFsuLi5pbmQsIGhhbmRsZUluZHVzdHJ5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50SW5kdXN0cnl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRJbmR1c3RyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHRyYWZmaWMgY291bnRyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJUcmFmZmljIENvdW50cnlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQ291bnRyeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0NvdW50cnl9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbENvdW50cnl9XHJcbiAgICAgID5cclxuICAgICAgICB7dHJhZmZpYy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHJhZmZpYy5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQ291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHRyYWZmaWMoWy4uLnRyYWZmaWMsIGhhbmRsZUNvdW50cnldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFmZmljKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Q291bnRyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudENvdW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBjdXJyZW5jeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJDdXJyZW5jeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVDdXJyZW5jeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0N1cnJlbmN5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxDdXJyZW5jeX1cclxuICAgICAgPlxyXG4gICAgICAgIHtNYXNjdXJyZW5jeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7TWFzY3VycmVuY3kubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TWFzY3VycmVuY3koWy4uLk1hc2N1cnJlbmN5LCBoYW5kbGVDdXJyZW5jeV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKE1hc2N1cnJlbmN5KTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Q3VycmVuY3l9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIG9mZmljZSBjb3VudHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIk9mZmljZSBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZU9mZmljZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa09mZmljZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsT2ZmaWNlfVxyXG4gICAgICA+XHJcbiAgICAgICAge29mZmljZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7b2ZmaWNlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVPZmZpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRvZmZpY2UoWy4uLm9mZmljZSwgaGFuZGxlT2ZmaWNlXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob2ZmaWNlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50T2ZmaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50T2ZmaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8aDE+TWFzdGVycyBUYWJsZXM8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVN0YXR1cyh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBRdWFsaXR5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlVHlwZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBUeXBlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIEF0dHJpYnV0ZVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSW5kdXN0cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUcmFmZmljIENvdW50cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ3VycmVuY3lcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVPZmZpY2UodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE9mZmljZSBDb3VudHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlclRhYmxlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==