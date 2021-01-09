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
      commentHandleStatus = _useState11[0],
      setcommentHandleStatus = _useState11[1];

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


  var statusRequest = {// method: "PUT",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({
    //   Master_Name: "STATUS",
    //   Master_Table: Masstatus.toString(),
    //   Master_Comments: commentStatus.toString(),
    // }),
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
  }, __jsx("div", null, Masstatus.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "grid",
        marginBottom: "10px",
        gridTemplateColumns: "50% 50%",
        gridGap: "10px"
      }
    }, __jsx("div", {
      style: {
        display: "flex"
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
    }, el)));
  })), __jsx("div", null, commentStatus.map(function (el, key) {
    return __jsx("div", {
      style: {
        display: "grid",
        marginBottom: "10px",
        gridTemplateColumns: "50% 50%",
        gridGap: "10px"
      }
    }, __jsx("div", {
      style: {
        display: "flex"
      }
    }, __jsx("div", {
      style: {
        marginRight: "10px",
        marginTop: "5px"
      }
    }, key), __jsx("div", {
      onClick: function onClick() {
        setcommentStatus(commentStatus.splice(key, 1, commentHandleStatus));
        console.log(commentStatus);
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  }))), __jsx("div", {
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
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleStatus(e.target.value);
      console.log(commentHandleStatus);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setMasstatus([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Masstatus), [handleStatus]));
      setcommentStatus([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentStatus), [commentHandleStatus])); // console.log(Masstatus, "MAASssssssssss", commentHandleStatus);

      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if CONFIRM', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
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

_s(MasterTables, "T7HvPwcjFXLUOwY8klGbKrD99H0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImNvbW1lbnRIYW5kbGVTdGF0dXMiLCJzZXRjb21tZW50SGFuZGxlU3RhdHVzIiwiaGFuZGxlUXVhbGl0eSIsInNldEhhbmRsZVF1YWxpdHkiLCJjb21tZW50UXVhbGl0eSIsInNldGNvbW1lbnRRdWFsaXR5IiwiaGFuZGxlVHlwZSIsInNldEhhbmRsZVR5cGUiLCJjb21tZW50VHlwZSIsInNldGNvbW1lbnRUeXBlIiwiaGFuZGxlQXR0cmlidXRlIiwic2V0SGFuZGxlQXR0cmlidXRlIiwiY29tbWVudEF0dHJpYnV0ZSIsInNldGNvbW1lbnRBdHRyaWJ1dGUiLCJoYW5kbGVJbmR1c3RyeSIsInNldEhhbmRsZUluZHVzdHJ5IiwiY29tbWVudEluZHVzdHJ5Iiwic2V0Y29tbWVudEluZHVzdHJ5IiwiaGFuZGxlQ291bnRyeSIsInNldEhhbmRsZUNvdW50cnkiLCJjb21tZW50Q291bnRyeSIsInNldGNvbW1lbnRDb3VudHJ5IiwiaGFuZGxlQ3VycmVuY3kiLCJzZXRIYW5kbGVDdXJyZW5jeSIsImNvbW1lbnRDdXJyZW5jeSIsInNldGNvbW1lbnRDdXJyZW5jeSIsImhhbmRsZU9mZmljZSIsInNldEhhbmRsZU9mZmljZSIsImNvbW1lbnRPZmZpY2UiLCJzZXRjb21tZW50T2ZmaWNlIiwiTWFzc3RhdHVzIiwic2V0TWFzc3RhdHVzIiwicXVhbGl0eSIsInNldFF1YWxpdHkiLCJ0eXBlIiwic2V0dHlwZSIsImF0dHJpYnV0ZSIsInNldGF0dHJpYnV0ZSIsImluZCIsInNldGluZCIsInRyYWZmaWMiLCJzZXR0cmFmZmljIiwiTWFzY3VycmVuY3kiLCJzZXRNYXNjdXJyZW5jeSIsIm9mZmljZSIsInNldG9mZmljZSIsImhhc0Vycm9ybWFzIiwic2V0RXJyb3JzbWFzIiwiZmV0Y2hEYXRhTWFzdGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiTWFzdGVyX0NvbW1lbnRzIiwiZXJyIiwidXNlRWZmZWN0IiwicG9zdERhdGEiLCJyZXF1ZXN0IiwicmVxbnVtYmVyIiwidG9TdHJpbmciLCJyZXNwb25zZSIsImRhdGEiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic3RhdHVzUmVxdWVzdCIsInF1YWxpdHlSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiTWFzdGVyX05hbWUiLCJ0eXBlUmVxdWVzdCIsImF0dHJpYnV0ZVJlcXVlc3QiLCJpbmR1c3RyeVJlcXVlc3QiLCJjb3VudHJ5UmVxdWVzdCIsImN1cnJlbmN5UmVxdWVzdCIsIm9mZmljZVJlcXVlc3QiLCJoYW5kbGVPa1N0YXR1cyIsImhhbmRsZUNhbmNlbFN0YXR1cyIsImhhbmRsZU9rUXVhbGl0eSIsImhhbmRsZUNhbmNlbFF1YWxpdHkiLCJoYW5kbGVPa1R5cGUiLCJoYW5kbGVDYW5jZWxUeXBlIiwiaGFuZGxlT2tBdHRyaWJ1dGUiLCJoYW5kbGVDYW5jZWxBdHRyaWJ1dGUiLCJoYW5kbGVPa0luZHVzdHJ5IiwiaGFuZGxlQ2FuY2VsSW5kdXN0cnkiLCJoYW5kbGVPa0NvdW50cnkiLCJoYW5kbGVDYW5jZWxDb3VudHJ5IiwiaGFuZGxlT2tDdXJyZW5jeSIsImhhbmRsZUNhbmNlbEN1cnJlbmN5IiwiaGFuZGxlT2tPZmZpY2UiLCJoYW5kbGVDYW5jZWxPZmZpY2UiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcCIsImVsIiwia2V5IiwibWFyZ2luQm90dG9tIiwiZ3JpZEdhcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwicGFkZGluZyIsInNwbGljZSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJzdWNjZXNzIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBQ1FBLE0sR0FBV0MsMkMsQ0FBWEQsTTtBQUNSOztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDK0JDLHNEQUFRLENBQUMsS0FBRCxDQUR2QztBQUFBLE1BQ2xCQyxvQkFEa0I7QUFBQSxNQUNJQyx1QkFESjs7QUFBQSxtQkFFaUNGLHNEQUFRLENBQUMsS0FBRCxDQUZ6QztBQUFBLE1BRWxCRyxxQkFGa0I7QUFBQSxNQUVLQyx3QkFGTDs7QUFBQSxtQkFHMkJKLHNEQUFRLENBQUMsS0FBRCxDQUhu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RSxNQURKO0FBRUxtQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFYsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiMUgsNkJBQXVCLENBQUMsSUFBRCxDQUF2QjtBQUNEO0FBVkgsc0JBcEdGLENBM2VGLENBREY7QUFpbUJELENBdDNCRDs7R0FBTWpCLFk7O0tBQUFBLFk7QUF3M0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLmI4N2FjYjk2NWIxNjJmMmE1YTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFzdGVyVGFibGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVN0YXR1cywgc2V0SXNNb2RhbFZpc2libGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVF1YWxpdHksIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlVHlwZSwgc2V0SXNNb2RhbFZpc2libGVUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVBdHRyaWJ1dGUsIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVJbmR1c3RyeSwgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQ291bnRyeSwgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVDdXJyZW5jeSwgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlT2ZmaWNlLCBzZXRJc01vZGFsVmlzaWJsZU9mZmljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtoYW5kbGVTdGF0dXMsIHNldEhhbmRsZVN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFN0YXR1cywgc2V0Y29tbWVudFN0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbW1lbnRIYW5kbGVTdGF0dXMsIHNldGNvbW1lbnRIYW5kbGVTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVRdWFsaXR5LCBzZXRIYW5kbGVRdWFsaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50UXVhbGl0eSwgc2V0Y29tbWVudFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlVHlwZSwgc2V0SGFuZGxlVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFR5cGUsIHNldGNvbW1lbnRUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUF0dHJpYnV0ZSwgc2V0SGFuZGxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50QXR0cmlidXRlLCBzZXRjb21tZW50QXR0cmlidXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUluZHVzdHJ5LCBzZXRIYW5kbGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEluZHVzdHJ5LCBzZXRjb21tZW50SW5kdXN0cnldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ291bnRyeSwgc2V0SGFuZGxlQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudENvdW50cnksIHNldGNvbW1lbnRDb3VudHJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUN1cnJlbmN5LCBzZXRIYW5kbGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEN1cnJlbmN5LCBzZXRjb21tZW50Q3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlT2ZmaWNlLCBzZXRIYW5kbGVPZmZpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRPZmZpY2UsIHNldGNvbW1lbnRPZmZpY2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtNYXNzdGF0dXMsIHNldE1hc3N0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmQsIHNldGluZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RyYWZmaWMsIHNldHRyYWZmaWNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtNYXNjdXJyZW5jeSwgc2V0TWFzY3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvZmZpY2UsIHNldG9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYXNFcnJvcm1hcywgc2V0RXJyb3JzbWFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmZXRjaERhdGFNYXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyL1wiKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEyLCBcImRkZGRkZGRkZGRkZGRkZGRkXCIpO1xyXG4gICAgICAgIHNldE1hc3N0YXR1cyhkYXRhMlswXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50U3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50VHlwZShkYXRhMlsyXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRpbmQoZGF0YTJbNF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEluZHVzdHJ5KGRhdGEyWzRdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudENvdW50cnkoZGF0YTJbNV0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEN1cnJlbmN5KGRhdGEyWzZdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldG9mZmljZShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50T2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yc21hcyhlcnIpKTtcclxuICB9O1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnREaWRNb3VudFwiKTtcclxuICAgIGZldGNoRGF0YU1hc3RlcigpO1xyXG4gIH0sIFswXSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coTWFzc3RhdHVzLnRvU3RyaW5nKCksIFwiQVJSQVl0b1N0cmluZ1wiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QsIFwiUkVRVUVTVFwiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcW51bWJlcixcIk5VTUJFUlwiKTtcclxuICAvLyAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci8ke3JlcW51bWJlcn1gLCByZXF1ZXN0KVxyXG4gIC8vICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gIC8vICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIC8vICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgIC8vIFJvdXRlci5wdXNoKFwiTWFzdGVyVGFibGVzXCIpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBwb3N0RGF0YSA9IChyZXF1ZXN0LCByZXFudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKE1hc3N0YXR1cy50b1N0cmluZygpLCBcIkFSUkFZdG9TdHJpbmdcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0LCBcIlJFUVVFU1RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXFudW1iZXIsXCJOVU1CRVJcIik7XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvJHtyZXFudW1iZXJ9YCwgcmVxdWVzdClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBnZXQgZXJyb3IgbWVzc2FnZSBmcm9tIGJvZHkgb3IgZGVmYXVsdCB0byByZXNwb25zZSBzdGF0dXNcclxuICAgICAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhcImRhdGEgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVycm9yLnRvU3RyaW5nKCkgfSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciFcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSb3V0ZXIucHVzaChcIk1hc3RlclRhYmxlc1wiKTtcclxuICB9O1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHN0YXR1c1JlcXVlc3QgPSB7XHJcbiAgICAvLyBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAvLyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAvLyAgIE1hc3Rlcl9OYW1lOiBcIlNUQVRVU1wiLFxyXG4gICAgLy8gICBNYXN0ZXJfVGFibGU6IE1hc3N0YXR1cy50b1N0cmluZygpLFxyXG4gICAgLy8gICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRTdGF0dXMudG9TdHJpbmcoKSxcclxuICAgIC8vIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1YWxpdHlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJRVUFMSVRZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogcXVhbGl0eS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRRdWFsaXR5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfVFlQRVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHR5cGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50VHlwZSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgYXR0cmlidXRlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiTElOS19BVFRSSUJVVEVcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBhdHRyaWJ1dGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50QXR0cmlidXRlLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBpbmR1c3RyeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIklORFVTVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogaW5kLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEluZHVzdHJ5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjb3VudHJ5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiVFJBRkZJQ19DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHJhZmZpYy50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRDb3VudHJ5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjdXJyZW5jeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkNVUlJFTkNZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogTWFzY3VycmVuY3kudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50Q3VycmVuY3ksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IG9mZmljZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIk9GRklDRV9DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogb2ZmaWNlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudE9mZmljZSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIHN0YXR1c1xyXG4gIGNvbnN0IGhhbmRsZU9rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoc3RhdHVzUmVxdWVzdCwgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXMoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBxdWFsaXR5XHJcbiAgY29uc3QgaGFuZGxlT2tRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEocXVhbGl0eVJlcXVlc3QsIDMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFF1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBUeXBlXHJcbiAgY29uc3QgaGFuZGxlT2tUeXBlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEodHlwZVJlcXVlc3QsIDQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFR5cGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVR5cGUoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBBdHRyaWJ1dGVcclxuICBjb25zdCBoYW5kbGVPa0F0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGF0dHJpYnV0ZVJlcXVlc3QsIDUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEF0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gVHlwZVxyXG4gIGNvbnN0IGhhbmRsZU9rSW5kdXN0cnkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShpbmR1c3RyeVJlcXVlc3QsIDYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEluZHVzdHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIHRyYWZmaWMgY291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rQ291bnRyeSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGNvdW50cnlSZXF1ZXN0LCA3KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gQ3VycmVuY3lcclxuICBjb25zdCBoYW5kbGVPa0N1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY3VycmVuY3lSZXF1ZXN0LCA4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDdXJyZW5jeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3koZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBPZmZpY2UgQ291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEob2ZmaWNlUmVxdWVzdCwgOSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVPZmZpY2UoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgc3RhdHVzICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlN0YXR1c1wiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVTdGF0dXN9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tTdGF0dXN9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbFN0YXR1c31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge01hc3N0YXR1cy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50U3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFN0YXR1cy5zcGxpY2Uoa2V5LCAxLCBjb21tZW50SGFuZGxlU3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50U3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge01hc3N0YXR1cy5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlU3RhdHVzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVTdGF0dXMpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVTdGF0dXMpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0TWFzc3RhdHVzKFsuLi5NYXNzdGF0dXMsIGhhbmRsZVN0YXR1c10pO1xyXG4gICAgICAgICAgICBzZXRjb21tZW50U3RhdHVzKFsuLi5jb21tZW50U3RhdHVzLCBjb21tZW50SGFuZGxlU3RhdHVzXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE1hc3N0YXR1cywgXCJNQUFTc3Nzc3Nzc3Nzc1wiLCBjb21tZW50SGFuZGxlU3RhdHVzKTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDT05GSVJNJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRTdGF0dXN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHF1YWxpdHkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUXVhbGl0eVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVRdWFsaXR5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rUXVhbGl0eX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsUXVhbGl0eX1cclxuICAgICAgPlxyXG4gICAgICAgIHtxdWFsaXR5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtxdWFsaXR5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVRdWFsaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UXVhbGl0eShbLi4ucXVhbGl0eSwgaGFuZGxlUXVhbGl0eV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1YWxpdHkpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRRdWFsaXR5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50UXVhbGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHR5cGUgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHlwZVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVUeXBlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rVHlwZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsVHlwZX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0eXBlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHt0eXBlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVUeXBlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0dHlwZShbLi4udHlwZSwgaGFuZGxlVHlwZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFR5cGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgYXR0cmlidXRlICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkF0dHJpYnV0ZVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVBdHRyaWJ1dGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tBdHRyaWJ1dGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEF0dHJpYnV0ZX1cclxuICAgICAgPlxyXG4gICAgICAgIHthdHRyaWJ1dGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge2F0dHJpYnV0ZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0YXR0cmlidXRlKFsuLi5hdHRyaWJ1dGUsIGhhbmRsZUF0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEF0dHJpYnV0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGluZHVzdHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkluZHVzdHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUluZHVzdHJ5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rSW5kdXN0cnl9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEluZHVzdHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICAge2luZC5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7aW5kLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVJbmR1c3RyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGluZChbLi4uaW5kLCBoYW5kbGVJbmR1c3RyeV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZCk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEluZHVzdHJ5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0cmFmZmljIGNvdW50cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHJhZmZpYyBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUNvdW50cnl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDb3VudHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxDb3VudHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RyYWZmaWMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3RyYWZmaWMubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUNvdW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXR0cmFmZmljKFsuLi50cmFmZmljLCBoYW5kbGVDb3VudHJ5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codHJhZmZpYyk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudENvdW50cnl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRDb3VudHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgY3VycmVuY3kgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ3VycmVuY3lcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQ3VycmVuY3l9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDdXJyZW5jeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQ3VycmVuY3l9XHJcbiAgICAgID5cclxuICAgICAgICB7TWFzY3VycmVuY3kubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge01hc2N1cnJlbmN5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVDdXJyZW5jeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1hc2N1cnJlbmN5KFsuLi5NYXNjdXJyZW5jeSwgaGFuZGxlQ3VycmVuY3ldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXNjdXJyZW5jeSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEN1cnJlbmN5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50Q3VycmVuY3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvZmZpY2UgY291bnRyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJPZmZpY2UgQ291bnRyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVPZmZpY2V9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tPZmZpY2V9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbE9mZmljZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtvZmZpY2UubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge29mZmljZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlT2ZmaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0b2ZmaWNlKFsuLi5vZmZpY2UsIGhhbmRsZU9mZmljZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9mZmljZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudE9mZmljZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudE9mZmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPGgxPk1hc3RlcnMgVGFibGVzPC9oMT5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgUXVhbGl0eVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVR5cGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgVHlwZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBBdHRyaWJ1dGVcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluZHVzdHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHJhZmZpYyBDb3VudHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3kodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEN1cnJlbmN5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPZmZpY2UgQ291bnRyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJUYWJsZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=