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
      oldcomment = _useState12[0],
      setoldcomment = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleQuality = _useState13[0],
      setHandleQuality = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentQuality = _useState14[0],
      setcommentQuality = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleType = _useState15[0],
      setHandleType = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentType = _useState16[0],
      setcommentType = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleAttribute = _useState17[0],
      setHandleAttribute = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentAttribute = _useState18[0],
      setcommentAttribute = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleIndustry = _useState19[0],
      setHandleIndustry = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentIndustry = _useState20[0],
      setcommentIndustry = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCountry = _useState21[0],
      setHandleCountry = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentCountry = _useState22[0],
      setcommentCountry = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCurrency = _useState23[0],
      setHandleCurrency = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentCurrency = _useState24[0],
      setcommentCurrency = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleOffice = _useState25[0],
      setHandleOffice = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentOffice = _useState26[0],
      setcommentOffice = _useState26[1]; //////////////////////////


  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Masstatus = _useState27[0],
      setMasstatus = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      quality = _useState28[0],
      setQuality = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      type = _useState29[0],
      settype = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      attribute = _useState30[0],
      setattribute = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      ind = _useState31[0],
      setind = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      traffic = _useState32[0],
      settraffic = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Mascurrency = _useState33[0],
      setMascurrency = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      office = _useState34[0],
      setoffice = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hasErrormas = _useState35[0],
      setErrorsmas = _useState35[1];

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
    console.log(commentStatus.toString(), "ARRAYtoString"); // console.log(request, "REQUEST");
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
      Master_Comments: commentStatus.toString()
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
      Master_Comments: commentQuality.toString()
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
      Master_Comments: commentType.toString()
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
      Master_Comments: commentAttribute.toString()
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
      Master_Comments: commentIndustry.toString()
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
      Master_Comments: commentCountry.toString()
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
      Master_Comments: commentCurrency.toString()
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
      Master_Comments: commentOffice.toString()
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
        setoldcomment(commentStatus.splice(key, 1, commentHandleStatus)); // console.log(commentStatus,"helloWorld");
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
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, quality.map(function (el, key) {
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
  })), __jsx("div", null, commentQuality.map(function (el, key) {
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
        setoldcomment(commentQuality.splice(key, 1, commentHandleStatus)); // console.log(commentStatus,"helloWorld");
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
  }, quality.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleQuality(e.target.value);
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
      setQuality([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(quality), [handleQuality]));
      setcommentStatus([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentStatus), [commentHandleStatus]));
      console.log(quality);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value"), __jsx("div", {
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

_s(MasterTables, "YjIKltB3ob03648khU3XZ0by0kM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImNvbW1lbnRIYW5kbGVTdGF0dXMiLCJzZXRjb21tZW50SGFuZGxlU3RhdHVzIiwib2xkY29tbWVudCIsInNldG9sZGNvbW1lbnQiLCJoYW5kbGVRdWFsaXR5Iiwic2V0SGFuZGxlUXVhbGl0eSIsImNvbW1lbnRRdWFsaXR5Iiwic2V0Y29tbWVudFF1YWxpdHkiLCJoYW5kbGVUeXBlIiwic2V0SGFuZGxlVHlwZSIsImNvbW1lbnRUeXBlIiwic2V0Y29tbWVudFR5cGUiLCJoYW5kbGVBdHRyaWJ1dGUiLCJzZXRIYW5kbGVBdHRyaWJ1dGUiLCJjb21tZW50QXR0cmlidXRlIiwic2V0Y29tbWVudEF0dHJpYnV0ZSIsImhhbmRsZUluZHVzdHJ5Iiwic2V0SGFuZGxlSW5kdXN0cnkiLCJjb21tZW50SW5kdXN0cnkiLCJzZXRjb21tZW50SW5kdXN0cnkiLCJoYW5kbGVDb3VudHJ5Iiwic2V0SGFuZGxlQ291bnRyeSIsImNvbW1lbnRDb3VudHJ5Iiwic2V0Y29tbWVudENvdW50cnkiLCJoYW5kbGVDdXJyZW5jeSIsInNldEhhbmRsZUN1cnJlbmN5IiwiY29tbWVudEN1cnJlbmN5Iiwic2V0Y29tbWVudEN1cnJlbmN5IiwiaGFuZGxlT2ZmaWNlIiwic2V0SGFuZGxlT2ZmaWNlIiwiY29tbWVudE9mZmljZSIsInNldGNvbW1lbnRPZmZpY2UiLCJNYXNzdGF0dXMiLCJzZXRNYXNzdGF0dXMiLCJxdWFsaXR5Iiwic2V0UXVhbGl0eSIsInR5cGUiLCJzZXR0eXBlIiwiYXR0cmlidXRlIiwic2V0YXR0cmlidXRlIiwiaW5kIiwic2V0aW5kIiwidHJhZmZpYyIsInNldHRyYWZmaWMiLCJNYXNjdXJyZW5jeSIsInNldE1hc2N1cnJlbmN5Iiwib2ZmaWNlIiwic2V0b2ZmaWNlIiwiaGFzRXJyb3JtYXMiLCJzZXRFcnJvcnNtYXMiLCJmZXRjaERhdGFNYXN0ZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YTIiLCJjb25zb2xlIiwibG9nIiwiTWFzdGVyX1RhYmxlIiwic3BsaXQiLCJNYXN0ZXJfQ29tbWVudHMiLCJlcnIiLCJ1c2VFZmZlY3QiLCJwb3N0RGF0YSIsInJlcXVlc3QiLCJyZXFudW1iZXIiLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZGF0YSIsIm9rIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzdGF0dXNSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiTWFzdGVyX05hbWUiLCJxdWFsaXR5UmVxdWVzdCIsInR5cGVSZXF1ZXN0IiwiYXR0cmlidXRlUmVxdWVzdCIsImluZHVzdHJ5UmVxdWVzdCIsImNvdW50cnlSZXF1ZXN0IiwiY3VycmVuY3lSZXF1ZXN0Iiwib2ZmaWNlUmVxdWVzdCIsImhhbmRsZU9rU3RhdHVzIiwiaGFuZGxlQ2FuY2VsU3RhdHVzIiwiaGFuZGxlT2tRdWFsaXR5IiwiaGFuZGxlQ2FuY2VsUXVhbGl0eSIsImhhbmRsZU9rVHlwZSIsImhhbmRsZUNhbmNlbFR5cGUiLCJoYW5kbGVPa0F0dHJpYnV0ZSIsImhhbmRsZUNhbmNlbEF0dHJpYnV0ZSIsImhhbmRsZU9rSW5kdXN0cnkiLCJoYW5kbGVDYW5jZWxJbmR1c3RyeSIsImhhbmRsZU9rQ291bnRyeSIsImhhbmRsZUNhbmNlbENvdW50cnkiLCJoYW5kbGVPa0N1cnJlbmN5IiwiaGFuZGxlQ2FuY2VsQ3VycmVuY3kiLCJoYW5kbGVPa09mZmljZSIsImhhbmRsZUNhbmNlbE9mZmljZSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFwIiwiZWwiLCJrZXkiLCJtYXJnaW5Cb3R0b20iLCJncmlkR2FwIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJwYWRkaW5nIiwic3BsaWNlIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsInN1Y2Nlc3MiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDUUEsTSxHQUFXQywyQyxDQUFYRCxNO0FBQ1I7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBQyxLQUFELENBRHZDO0FBQUEsTUFDbEJDLG9CQURrQjtBQUFBLE1BQ0lDLHVCQURKOztBQUFBLG1CQUVpQ0Ysc0RBQVEsQ0FBQyxLQUFELENBRnpDO0FBQUEsTUFFbEJHLHFCQUZrQjtBQUFBLE1BRUtDLHdCQUZMOztBQUFB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TSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNibEksK0JBQXlCLENBQUMsSUFBRCxDQUF6QjtBQUNEO0FBVkgsZ0JBMURGLEVBd0VFO0FBQ0UsU0FBSyxFQUFFO0FBQ0x5SCxhQUFPLEVBQUUsTUFESjtBQUVMbUIsb0JBQWMsRUFBRSxRQUZYO0FBR0xDLFlBQU0sRUFBRSxNQUhIO0FBSUxWLGFBQU8sRUFBRSxNQUpKO0FBS0xELFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYmhJLDhCQUF3QixDQUFDLElBQUQsQ0FBeEI7QUFDRDtBQVZILHVCQXhFRixFQXNGRTtBQUNFLFNBQUssRUFBRTtBQUNMdUgsYUFBTyxFQUFFLE1BREo7QUFFTG1CLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVixhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I5SCwrQkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0Q7QUFWSCxnQkF0RkYsRUFvR0U7QUFDRSxTQUFLLEVBQUU7QUFDTHFILGFBQU8sRUFBRSxNQURKO0FBRUxtQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFYsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiNUgsNkJBQXVCLENBQUMsSUFBRCxDQUF2QjtBQUNEO0FBVkgsc0JBcEdGLENBcGlCRixDQURGO0FBMHBCRCxDQWo3QkQ7O0dBQU1qQixZOztLQUFBQSxZO0FBbTdCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy4wMGIyMDg2ZDJmNDg3ZWFhMDIzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVGFibGUsIFRhZywgU3BhY2UsIE1vZGFsLCBCdXR0b24sIFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1hc3RlclRhYmxlcyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVTdGF0dXMsIHNldElzTW9kYWxWaXNpYmxlU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVRdWFsaXR5LCBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVR5cGUsIHNldElzTW9kYWxWaXNpYmxlVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQXR0cmlidXRlLCBzZXRJc01vZGFsVmlzaWJsZUF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlSW5kdXN0cnksIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUNvdW50cnksIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQ3VycmVuY3ksIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZU9mZmljZSwgc2V0SXNNb2RhbFZpc2libGVPZmZpY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBbaGFuZGxlU3RhdHVzLCBzZXRIYW5kbGVTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRTdGF0dXMsIHNldGNvbW1lbnRTdGF0dXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb21tZW50SGFuZGxlU3RhdHVzLCBzZXRjb21tZW50SGFuZGxlU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbb2xkY29tbWVudCxzZXRvbGRjb21tZW50XT11c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZVF1YWxpdHksIHNldEhhbmRsZVF1YWxpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRRdWFsaXR5LCBzZXRjb21tZW50UXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVUeXBlLCBzZXRIYW5kbGVUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50VHlwZSwgc2V0Y29tbWVudFR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQXR0cmlidXRlLCBzZXRIYW5kbGVBdHRyaWJ1dGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRBdHRyaWJ1dGUsIHNldGNvbW1lbnRBdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlSW5kdXN0cnksIHNldEhhbmRsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5kdXN0cnksIHNldGNvbW1lbnRJbmR1c3RyeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVDb3VudHJ5LCBzZXRIYW5kbGVDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q291bnRyeSwgc2V0Y29tbWVudENvdW50cnldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ3VycmVuY3ksIHNldEhhbmRsZUN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q3VycmVuY3ksIHNldGNvbW1lbnRDdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVPZmZpY2UsIHNldEhhbmRsZU9mZmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudE9mZmljZSwgc2V0Y29tbWVudE9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgW01hc3N0YXR1cywgc2V0TWFzc3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcXVhbGl0eSwgc2V0UXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGUsIHNldHR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdHRyaWJ1dGUsIHNldGF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luZCwgc2V0aW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHJhZmZpYywgc2V0dHJhZmZpY10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW01hc2N1cnJlbmN5LCBzZXRNYXNjdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29mZmljZSwgc2V0b2ZmaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhc0Vycm9ybWFzLCBzZXRFcnJvcnNtYXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0TWFzc3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRTdGF0dXMoZGF0YTJbMF0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXR0eXBlKGRhdGEyWzJdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRUeXBlKGRhdGEyWzJdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50QXR0cmlidXRlKGRhdGEyWzNdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGluZChkYXRhMls0XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoZGF0YTJbNF0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHJhZmZpYyhkYXRhMls1XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q291bnRyeShkYXRhMls1XS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRNYXNjdXJyZW5jeShkYXRhMls2XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0b2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRPZmZpY2UoZGF0YTJbN10uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0RXJyb3JzbWFzKGVycikpO1xyXG4gIH07XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4gICAgZmV0Y2hEYXRhTWFzdGVyKCk7XHJcbiAgfSwgWzBdKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gY29uc3QgcG9zdERhdGEgPSAocmVxdWVzdCwgcmVxbnVtYmVyKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhNYXNzdGF0dXMudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gIC8vICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgLy8gICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgLy8gICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgLy8gICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY29tbWVudFN0YXR1cy50b1N0cmluZygpLCBcIkFSUkFZdG9TdHJpbmdcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0LCBcIlJFUVVFU1RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXFudW1iZXIsXCJOVU1CRVJcIik7XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvJHtyZXFudW1iZXJ9YCwgcmVxdWVzdClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBnZXQgZXJyb3IgbWVzc2FnZSBmcm9tIGJvZHkgb3IgZGVmYXVsdCB0byByZXNwb25zZSBzdGF0dXNcclxuICAgICAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhcImRhdGEgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVycm9yLnRvU3RyaW5nKCkgfSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciFcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSb3V0ZXIucHVzaChcIk1hc3RlclRhYmxlc1wiKTtcclxuICB9O1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHN0YXR1c1JlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIlNUQVRVU1wiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IE1hc3N0YXR1cy50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRTdGF0dXMudG9TdHJpbmcoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1YWxpdHlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJRVUFMSVRZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogcXVhbGl0eS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRRdWFsaXR5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCB0eXBlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiTElOS19UWVBFXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHlwZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRUeXBlLnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGF0dHJpYnV0ZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfQVRUUklCVVRFXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogYXR0cmlidXRlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEF0dHJpYnV0ZS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBpbmR1c3RyeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIklORFVTVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogaW5kLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEluZHVzdHJ5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGNvdW50cnlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJUUkFGRklDX0NPVU5UUllcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiB0cmFmZmljLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudENvdW50cnkudG9TdHJpbmcoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgY3VycmVuY3lSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJDVVJSRU5DWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IE1hc2N1cnJlbmN5LnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEN1cnJlbmN5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IG9mZmljZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIk9GRklDRV9DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogb2ZmaWNlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudE9mZmljZS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gc3RhdHVzXHJcbiAgY29uc3QgaGFuZGxlT2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShzdGF0dXNSZXF1ZXN0LCAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVN0YXR1cyhmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIHF1YWxpdHlcclxuICBjb25zdCBoYW5kbGVPa1F1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShxdWFsaXR5UmVxdWVzdCwgMyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsUXVhbGl0eSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIFR5cGVcclxuICBjb25zdCBoYW5kbGVPa1R5cGUgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YSh0eXBlUmVxdWVzdCwgNCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsVHlwZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlVHlwZShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIEF0dHJpYnV0ZVxyXG4gIGNvbnN0IGhhbmRsZU9rQXR0cmlidXRlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoYXR0cmlidXRlUmVxdWVzdCwgNSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsQXR0cmlidXRlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGUoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBUeXBlXHJcbiAgY29uc3QgaGFuZGxlT2tJbmR1c3RyeSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGluZHVzdHJ5UmVxdWVzdCwgNik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsSW5kdXN0cnkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gdHJhZmZpYyBjb3VudHJ5XHJcbiAgY29uc3QgaGFuZGxlT2tDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY291bnRyeVJlcXVlc3QsIDcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbENvdW50cnkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBDdXJyZW5jeVxyXG4gIGNvbnN0IGhhbmRsZU9rQ3VycmVuY3kgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShjdXJyZW5jeVJlcXVlc3QsIDgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEN1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIE9mZmljZSBDb3VudHJ5XHJcbiAgY29uc3QgaGFuZGxlT2tPZmZpY2UgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShvZmZpY2VSZXF1ZXN0LCA5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxPZmZpY2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZU9mZmljZShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBzdGF0dXMgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiU3RhdHVzXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVN0YXR1c31cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa1N0YXR1c31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsU3RhdHVzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7TWFzc3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRTdGF0dXMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkY29tbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50U3RhdHVzLnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVTdGF0dXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7TWFzc3RhdHVzLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZVN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYXNzdGF0dXMoWy4uLk1hc3N0YXR1cywgaGFuZGxlU3RhdHVzXSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoWy4uLmNvbW1lbnRTdGF0dXMsIGNvbW1lbnRIYW5kbGVTdGF0dXNdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTWFzc3RhdHVzLCBcIk1BQVNzc3Nzc3Nzc3NzXCIsIGNvbW1lbnRIYW5kbGVTdGF0dXMpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENPTkZJUk0nLFxyXG4gICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFN0YXR1c31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgcXVhbGl0eSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJRdWFsaXR5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVF1YWxpdHl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tRdWFsaXR5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxRdWFsaXR5fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cXVhbGl0eS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50UXVhbGl0eS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRRdWFsaXR5LnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVTdGF0dXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7cXVhbGl0eS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlUXVhbGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVTdGF0dXMpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UXVhbGl0eShbLi4ucXVhbGl0eSwgaGFuZGxlUXVhbGl0eV0pO1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoWy4uLmNvbW1lbnRTdGF0dXMsIGNvbW1lbnRIYW5kbGVTdGF0dXNdKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVhbGl0eSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50UXVhbGl0eX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0eXBlICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlR5cGVcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlVHlwZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa1R5cGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbFR5cGV9XHJcbiAgICAgID5cclxuICAgICAgICB7dHlwZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlVHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHR5cGUoWy4uLnR5cGUsIGhhbmRsZVR5cGVdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50VHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGF0dHJpYnV0ZSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJBdHRyaWJ1dGVcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQXR0cmlidXRlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQXR0cmlidXRlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxBdHRyaWJ1dGV9XHJcbiAgICAgID5cclxuICAgICAgICB7YXR0cmlidXRlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHthdHRyaWJ1dGUubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUF0dHJpYnV0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGF0dHJpYnV0ZShbLi4uYXR0cmlidXRlLCBoYW5kbGVBdHRyaWJ1dGVdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBpbmR1c3RyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJJbmR1c3RyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVJbmR1c3RyeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0luZHVzdHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxJbmR1c3RyeX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbmQubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge2luZC5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlSW5kdXN0cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRpbmQoWy4uLmluZCwgaGFuZGxlSW5kdXN0cnldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmQpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRJbmR1c3RyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEluZHVzdHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdHJhZmZpYyBjb3VudHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlRyYWZmaWMgQ291bnRyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVDb3VudHJ5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQ291bnRyeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQ291bnRyeX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0cmFmZmljLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHt0cmFmZmljLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVDb3VudHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0dHJhZmZpYyhbLi4udHJhZmZpYywgaGFuZGxlQ291bnRyeV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYWZmaWMpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRDb3VudHJ5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50Q291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGN1cnJlbmN5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkN1cnJlbmN5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUN1cnJlbmN5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQ3VycmVuY3l9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEN1cnJlbmN5fVxyXG4gICAgICA+XHJcbiAgICAgICAge01hc2N1cnJlbmN5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtNYXNjdXJyZW5jeS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQ3VycmVuY3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRNYXNjdXJyZW5jeShbLi4uTWFzY3VycmVuY3ksIGhhbmRsZUN1cnJlbmN5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coTWFzY3VycmVuY3kpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRDdXJyZW5jeX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgb2ZmaWNlIGNvdW50cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiT2ZmaWNlIENvdW50cnlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlT2ZmaWNlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rT2ZmaWNlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxPZmZpY2V9XHJcbiAgICAgID5cclxuICAgICAgICB7b2ZmaWNlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtvZmZpY2UubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZU9mZmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldG9mZmljZShbLi4ub2ZmaWNlLCBoYW5kbGVPZmZpY2VdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvZmZpY2UpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRPZmZpY2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRPZmZpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxoMT5NYXN0ZXJzIFRhYmxlczwvaDE+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlU3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdGF0dXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIFF1YWxpdHlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVUeXBlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIFR5cGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgQXR0cmlidXRlXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBJbmR1c3RyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFRyYWZmaWMgQ291bnRyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUN1cnJlbmN5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDdXJyZW5jeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZU9mZmljZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgT2ZmaWNlIENvdW50cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyVGFibGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9