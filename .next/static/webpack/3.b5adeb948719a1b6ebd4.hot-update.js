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

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentStatus = _useState10[0],
      setcommentStatus = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      commentStatusTwo = _useState11[0],
      setcommentStatusTwo = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleQuality = _useState12[0],
      setHandleQuality = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentQuality = _useState13[0],
      setcommentQuality = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleType = _useState14[0],
      setHandleType = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentType = _useState15[0],
      setcommentType = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleAttribute = _useState16[0],
      setHandleAttribute = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentAttribute = _useState17[0],
      setcommentAttribute = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleIndustry = _useState18[0],
      setHandleIndustry = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentIndustry = _useState19[0],
      setcommentIndustry = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCountry = _useState20[0],
      setHandleCountry = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentCountry = _useState21[0],
      setcommentCountry = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCurrency = _useState22[0],
      setHandleCurrency = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentCurrency = _useState23[0],
      setcommentCurrency = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleOffice = _useState24[0],
      setHandleOffice = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentOffice = _useState25[0],
      setcommentOffice = _useState25[1]; //////////////////////////


  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Masstatus = _useState26[0],
      setMasstatus = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      quality = _useState27[0],
      setQuality = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      type = _useState28[0],
      settype = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      attribute = _useState29[0],
      setattribute = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      ind = _useState30[0],
      setind = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      traffic = _useState31[0],
      settraffic = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Mascurrency = _useState32[0],
      setMascurrency = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      office = _useState33[0],
      setoffice = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hasErrormas = _useState34[0],
      setErrorsmas = _useState34[1];

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
                setcommentStatus(data2[0].Master_Comments.split(","));
                setQuality(data2[1].Master_Table.split(","));
                setcommentQuality(data2[1].Master_Comments.split(","));
                settype(data2[2].Master_Table.split(","));
                setcommentType(data2[2].Master_Comments.split(","));
                setattribute(data2[3].Master_Table.split(","));
                setcommentAttribute(data2[3].Master_Comments.split(","));
                setind(data2[4].Master_Table.split(","));
                setcommentIndustry(data2[4].Master_Comments.split(","));
                settraffic(data2[5].Master_Table.split(","));
                setcommentCountry(data2[5].Master_Comments.split(","));
                setMascurrency(data2[6].Master_Table.split(","));
                setcommentCurrency(data2[6].Master_Comments.split(","));
                setoffice(data2[7].Master_Table.split(","));
                setcommentOffice(data2[7].Master_Comments.split(","));

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
    window.location.reload(false);
  }; // quality


  var handleOkQuality = function handleOkQuality() {
    postData(qualityRequest, 3);
  };

  var handleCancelQuality = function handleCancelQuality() {
    setIsModalVisibleQuality(false);
    window.location.reload(false);
  }; // Type


  var handleOkType = function handleOkType() {
    postData(typeRequest, 4);
  };

  var handleCancelType = function handleCancelType() {
    setIsModalVisibleType(false);
    window.location.reload(false);
  }; // Attribute


  var handleOkAttribute = function handleOkAttribute() {
    postData(attributeRequest, 5);
  };

  var handleCancelAttribute = function handleCancelAttribute() {
    setIsModalVisibleAttribute(false);
    window.location.reload(false);
  }; // Type


  var handleOkIndustry = function handleOkIndustry() {
    postData(industryRequest, 6);
  };

  var handleCancelIndustry = function handleCancelIndustry() {
    setIsModalVisibleIndustry(false);
    window.location.reload(false);
  }; // traffic country


  var handleOkCountry = function handleOkCountry() {
    postData(countryRequest, 7);
  };

  var handleCancelCountry = function handleCancelCountry() {
    setIsModalVisibleCountry(false);
    window.location.reload(false);
  }; // Currency


  var handleOkCurrency = function handleOkCurrency() {
    postData(currencyRequest, 8);
  };

  var handleCancelCurrency = function handleCancelCurrency() {
    setIsModalVisibleCurrency(false);
    window.location.reload(false);
  }; // Office Country


  var handleOkOffice = function handleOkOffice() {
    postData(officeRequest, 9);
  };

  var handleCancelOffice = function handleCancelOffice() {
    setIsModalVisibleOffice(false);
    window.location.reload(false);
  };

  return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Status",
    visible: isModalVisibleStatus,
    onOk: handleOkStatus,
    onCancel: handleCancelStatus
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
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
  }, "Add Value"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
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

_s(MasterTables, "vMpRnPgxvoKfuR1GfjsZBR2u+U8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImNvbW1lbnRTdGF0dXNUd28iLCJzZXRjb21tZW50U3RhdHVzVHdvIiwiaGFuZGxlUXVhbGl0eSIsInNldEhhbmRsZVF1YWxpdHkiLCJjb21tZW50UXVhbGl0eSIsInNldGNvbW1lbnRRdWFsaXR5IiwiaGFuZGxlVHlwZSIsInNldEhhbmRsZVR5cGUiLCJjb21tZW50VHlwZSIsInNldGNvbW1lbnRUeXBlIiwiaGFuZGxlQXR0cmlidXRlIiwic2V0SGFuZGxlQXR0cmlidXRlIiwiY29tbWVudEF0dHJpYnV0ZSIsInNldGNvbW1lbnRBdHRyaWJ1dGUiLCJoYW5kbGVJbmR1c3RyeSIsInNldEhhbmRsZUluZHVzdHJ5IiwiY29tbWVudEluZHVzdHJ5Iiwic2V0Y29tbWVudEluZHVzdHJ5IiwiaGFuZGxlQ291bnRyeSIsInNldEhhbmRsZUNvdW50cnkiLCJjb21tZW50Q291bnRyeSIsInNldGNvbW1lbnRDb3VudHJ5IiwiaGFuZGxlQ3VycmVuY3kiLCJzZXRIYW5kbGVDdXJyZW5jeSIsImNvbW1lbnRDdXJyZW5jeSIsInNldGNvbW1lbnRDdXJyZW5jeSIsImhhbmRsZU9mZmljZSIsInNldEhhbmRsZU9mZmljZSIsImNvbW1lbnRPZmZpY2UiLCJzZXRjb21tZW50T2ZmaWNlIiwiTWFzc3RhdHVzIiwic2V0TWFzc3RhdHVzIiwicXVhbGl0eSIsInNldFF1YWxpdHkiLCJ0eXBlIiwic2V0dHlwZSIsImF0dHJpYnV0ZSIsInNldGF0dHJpYnV0ZSIsImluZCIsInNldGluZCIsInRyYWZmaWMiLCJzZXR0cmFmZmljIiwiTWFzY3VycmVuY3kiLCJzZXRNYXNjdXJyZW5jeSIsIm9mZmljZSIsInNldG9mZmljZSIsImhhc0Vycm9ybWFzIiwic2V0RXJyb3JzbWFzIiwiZmV0Y2hEYXRhTWFzdGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiTWFzdGVyX0NvbW1lbnRzIiwiZXJyIiwidXNlRWZmZWN0IiwicG9zdERhdGEiLCJyZXF1ZXN0IiwicmVxbnVtYmVyIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImRhdGEiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic3RhdHVzUmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIk1hc3Rlcl9OYW1lIiwicXVhbGl0eVJlcXVlc3QiLCJ0eXBlUmVxdWVzdCIsImF0dHJpYnV0ZVJlcXVlc3QiLCJpbmR1c3RyeVJlcXVlc3QiLCJjb3VudHJ5UmVxdWVzdCIsImN1cnJlbmN5UmVxdWVzdCIsIm9mZmljZVJlcXVlc3QiLCJoYW5kbGVPa1N0YXR1cyIsImhhbmRsZUNhbmNlbFN0YXR1cyIsImhhbmRsZU9rUXVhbGl0eSIsImhhbmRsZUNhbmNlbFF1YWxpdHkiLCJoYW5kbGVPa1R5cGUiLCJoYW5kbGVDYW5jZWxUeXBlIiwiaGFuZGxlT2tBdHRyaWJ1dGUiLCJoYW5kbGVDYW5jZWxBdHRyaWJ1dGUiLCJoYW5kbGVPa0luZHVzdHJ5IiwiaGFuZGxlQ2FuY2VsSW5kdXN0cnkiLCJoYW5kbGVPa0NvdW50cnkiLCJoYW5kbGVDYW5jZWxDb3VudHJ5IiwiaGFuZGxlT2tDdXJyZW5jeSIsImhhbmRsZUNhbmNlbEN1cnJlbmN5IiwiaGFuZGxlT2tPZmZpY2UiLCJoYW5kbGVDYW5jZWxPZmZpY2UiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibGVuZ3RoIiwiYm9yZGVyIiwicGFkZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJzdWNjZXNzIiwibWFwIiwiZWwiLCJrZXkiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDUUEsTSxHQUFXQywyQyxDQUFYRCxNO0FBQ1I7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBQyxLQUFELENBRHZDO0FBQUEsTUFDbEJDLG9CQURrQjtBQUFBLE1BQ0lDLHVCQURKOztBQUFBLG1CQUVpQ0Ysc0RBQVEsQ0FBQyxLQUFELENBRnpDO0FBQUEsTUFFbEJHLHFCQUZrQjtBQUFBLE1BRUtDLHdCQUZMOztBQUFBLG1CQUcyQkosc0RBQVEsQ0FBQyxLQUFELENBSG5DO0FBQUEsTUFHbEJLLGtCQUhrQjtBQUFB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YWNrLzMuYjVhZGViOTQ4NzE5YTFiNmViZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBUYWcsIFNwYWNlLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNYXN0ZXJUYWJsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlU3RhdHVzLCBzZXRJc01vZGFsVmlzaWJsZVN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlUXVhbGl0eSwgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVUeXBlLCBzZXRJc01vZGFsVmlzaWJsZVR5cGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSwgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUluZHVzdHJ5LCBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVDb3VudHJ5LCBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUN1cnJlbmN5LCBzZXRJc01vZGFsVmlzaWJsZUN1cnJlbmN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVPZmZpY2UsIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgW2hhbmRsZVN0YXR1cywgc2V0SGFuZGxlU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50U3RhdHVzLCBzZXRjb21tZW50U3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY29tbWVudFN0YXR1c1R3bywgc2V0Y29tbWVudFN0YXR1c1R3b10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZVF1YWxpdHksIHNldEhhbmRsZVF1YWxpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRRdWFsaXR5LCBzZXRjb21tZW50UXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVUeXBlLCBzZXRIYW5kbGVUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50VHlwZSwgc2V0Y29tbWVudFR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQXR0cmlidXRlLCBzZXRIYW5kbGVBdHRyaWJ1dGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRBdHRyaWJ1dGUsIHNldGNvbW1lbnRBdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlSW5kdXN0cnksIHNldEhhbmRsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5kdXN0cnksIHNldGNvbW1lbnRJbmR1c3RyeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVDb3VudHJ5LCBzZXRIYW5kbGVDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q291bnRyeSwgc2V0Y29tbWVudENvdW50cnldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ3VycmVuY3ksIHNldEhhbmRsZUN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q3VycmVuY3ksIHNldGNvbW1lbnRDdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVPZmZpY2UsIHNldEhhbmRsZU9mZmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudE9mZmljZSwgc2V0Y29tbWVudE9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgW01hc3N0YXR1cywgc2V0TWFzc3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcXVhbGl0eSwgc2V0UXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGUsIHNldHR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdHRyaWJ1dGUsIHNldGF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luZCwgc2V0aW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHJhZmZpYywgc2V0dHJhZmZpY10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW01hc2N1cnJlbmN5LCBzZXRNYXNjdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29mZmljZSwgc2V0b2ZmaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhc0Vycm9ybWFzLCBzZXRFcnJvcnNtYXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0TWFzc3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRTdGF0dXMoZGF0YTJbMF0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXR0eXBlKGRhdGEyWzJdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRUeXBlKGRhdGEyWzJdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50QXR0cmlidXRlKGRhdGEyWzNdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGluZChkYXRhMls0XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoZGF0YTJbNF0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHJhZmZpYyhkYXRhMls1XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q291bnRyeShkYXRhMls1XS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRNYXNjdXJyZW5jeShkYXRhMls2XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0b2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRPZmZpY2UoZGF0YTJbN10uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0RXJyb3JzbWFzKGVycikpO1xyXG4gIH07XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4gICAgZmV0Y2hEYXRhTWFzdGVyKCk7XHJcbiAgfSwgWzBdKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gY29uc3QgcG9zdERhdGEgPSAocmVxdWVzdCwgcmVxbnVtYmVyKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhNYXNzdGF0dXMudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gIC8vICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgLy8gICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgLy8gICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgLy8gICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coTWFzc3RhdHVzLnRvU3RyaW5nKCksIFwiQVJSQVl0b1N0cmluZ1wiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QsIFwiUkVRVUVTVFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcW51bWJlcixcIk5VTUJFUlwiKTtcclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci8ke3JlcW51bWJlcn1gLCByZXF1ZXN0KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFJvdXRlci5wdXNoKFwiTWFzdGVyVGFibGVzXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3Qgc3RhdHVzUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiU1RBVFVTXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogTWFzc3RhdHVzLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudFN0YXR1cyxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1YWxpdHlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJRVUFMSVRZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogcXVhbGl0eS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRRdWFsaXR5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfVFlQRVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHR5cGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50VHlwZSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgYXR0cmlidXRlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiTElOS19BVFRSSUJVVEVcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBhdHRyaWJ1dGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50QXR0cmlidXRlLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBpbmR1c3RyeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIklORFVTVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogaW5kLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEluZHVzdHJ5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjb3VudHJ5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiVFJBRkZJQ19DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHJhZmZpYy50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRDb3VudHJ5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjdXJyZW5jeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkNVUlJFTkNZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogTWFzY3VycmVuY3kudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50Q3VycmVuY3ksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IG9mZmljZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIk9GRklDRV9DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogb2ZmaWNlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudE9mZmljZSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIHN0YXR1c1xyXG4gIGNvbnN0IGhhbmRsZU9rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoc3RhdHVzUmVxdWVzdCwgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXMoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBxdWFsaXR5XHJcbiAgY29uc3QgaGFuZGxlT2tRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEocXVhbGl0eVJlcXVlc3QsIDMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFF1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBUeXBlXHJcbiAgY29uc3QgaGFuZGxlT2tUeXBlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEodHlwZVJlcXVlc3QsIDQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFR5cGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVR5cGUoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBBdHRyaWJ1dGVcclxuICBjb25zdCBoYW5kbGVPa0F0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGF0dHJpYnV0ZVJlcXVlc3QsIDUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEF0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gVHlwZVxyXG4gIGNvbnN0IGhhbmRsZU9rSW5kdXN0cnkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShpbmR1c3RyeVJlcXVlc3QsIDYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEluZHVzdHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIHRyYWZmaWMgY291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rQ291bnRyeSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGNvdW50cnlSZXF1ZXN0LCA3KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gQ3VycmVuY3lcclxuICBjb25zdCBoYW5kbGVPa0N1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY3VycmVuY3lSZXF1ZXN0LCA4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDdXJyZW5jeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3koZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBPZmZpY2UgQ291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEob2ZmaWNlUmVxdWVzdCwgOSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVPZmZpY2UoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgc3RhdHVzICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlN0YXR1c1wiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVTdGF0dXN9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tTdGF0dXN9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbFN0YXR1c31cclxuICAgICAgPlxyXG4gICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJncmlkXCIsZ3JpZFRlbXBsYXRlQ29sdW1uczpcIjUwJSA1MCVcIn19PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7TWFzc3RhdHVzLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1hc3N0YXR1cyhbLi4uTWFzc3RhdHVzLCBoYW5kbGVTdGF0dXNdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgTWFzc3RhdHVzLCBcIk1BQVNcIik7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENPTkZJUk0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFN0YXR1c31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgcXVhbGl0eSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJRdWFsaXR5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVF1YWxpdHl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tRdWFsaXR5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxRdWFsaXR5fVxyXG4gICAgICA+XHJcbiAgICAgICAge3F1YWxpdHkubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3F1YWxpdHkubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVF1YWxpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRRdWFsaXR5KFsuLi5xdWFsaXR5LCBoYW5kbGVRdWFsaXR5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVhbGl0eSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFF1YWxpdHl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRRdWFsaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdHlwZSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJUeXBlXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVR5cGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tUeXBlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxUeXBlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3R5cGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3R5cGUubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXR0eXBlKFsuLi50eXBlLCBoYW5kbGVUeXBlXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50VHlwZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBhdHRyaWJ1dGUgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQXR0cmlidXRlXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0F0dHJpYnV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQXR0cmlidXRlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2F0dHJpYnV0ZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7YXR0cmlidXRlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRhdHRyaWJ1dGUoWy4uLmF0dHJpYnV0ZSwgaGFuZGxlQXR0cmlidXRlXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50QXR0cmlidXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50QXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgaW5kdXN0cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiSW5kdXN0cnlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlSW5kdXN0cnl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tJbmR1c3RyeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsSW5kdXN0cnl9XHJcbiAgICAgID5cclxuICAgICAgICB7aW5kLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtpbmQubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUluZHVzdHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0aW5kKFsuLi5pbmQsIGhhbmRsZUluZHVzdHJ5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50SW5kdXN0cnl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRJbmR1c3RyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHRyYWZmaWMgY291bnRyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJUcmFmZmljIENvdW50cnlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQ291bnRyeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0NvdW50cnl9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbENvdW50cnl9XHJcbiAgICAgID5cclxuICAgICAgICB7dHJhZmZpYy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHJhZmZpYy5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQ291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHRyYWZmaWMoWy4uLnRyYWZmaWMsIGhhbmRsZUNvdW50cnldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFmZmljKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Q291bnRyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudENvdW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBjdXJyZW5jeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJDdXJyZW5jeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVDdXJyZW5jeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0N1cnJlbmN5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxDdXJyZW5jeX1cclxuICAgICAgPlxyXG4gICAgICAgIHtNYXNjdXJyZW5jeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7TWFzY3VycmVuY3kubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TWFzY3VycmVuY3koWy4uLk1hc2N1cnJlbmN5LCBoYW5kbGVDdXJyZW5jeV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKE1hc2N1cnJlbmN5KTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50Q3VycmVuY3l9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIG9mZmljZSBjb3VudHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIk9mZmljZSBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZU9mZmljZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa09mZmljZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsT2ZmaWNlfVxyXG4gICAgICA+XHJcbiAgICAgICAge29mZmljZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7b2ZmaWNlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVPZmZpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRvZmZpY2UoWy4uLm9mZmljZSwgaGFuZGxlT2ZmaWNlXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cob2ZmaWNlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50T2ZmaWNlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50T2ZmaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8aDE+TWFzdGVycyBUYWJsZXM8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVN0YXR1cyh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBRdWFsaXR5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlVHlwZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBUeXBlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIEF0dHJpYnV0ZVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSW5kdXN0cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUcmFmZmljIENvdW50cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ3VycmVuY3lcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVPZmZpY2UodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE9mZmljZSBDb3VudHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlclRhYmxlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==