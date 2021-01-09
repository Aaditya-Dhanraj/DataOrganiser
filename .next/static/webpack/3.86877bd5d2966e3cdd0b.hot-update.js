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
      commentHandleALL = _useState11[0],
      setcommentHandleALL = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      oldcomment = _useState12[0],
      setoldcomment = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      oldmaster = _useState13[0],
      setoldmaster = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleQuality = _useState14[0],
      setHandleQuality = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentQuality = _useState15[0],
      setcommentQuality = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleType = _useState16[0],
      setHandleType = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentType = _useState17[0],
      setcommentType = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleAttribute = _useState18[0],
      setHandleAttribute = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentAttribute = _useState19[0],
      setcommentAttribute = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleIndustry = _useState20[0],
      setHandleIndustry = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentIndustry = _useState21[0],
      setcommentIndustry = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCountry = _useState22[0],
      setHandleCountry = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentCountry = _useState23[0],
      setcommentCountry = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleCurrency = _useState24[0],
      setHandleCurrency = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentCurrency = _useState25[0],
      setcommentCurrency = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      handleOffice = _useState26[0],
      setHandleOffice = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      commentOffice = _useState27[0],
      setcommentOffice = _useState27[1]; //////////////////////////


  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Masstatus = _useState28[0],
      setMasstatus = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      quality = _useState29[0],
      setQuality = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      type = _useState30[0],
      settype = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      attribute = _useState31[0],
      setattribute = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      ind = _useState32[0],
      setind = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      traffic = _useState33[0],
      settraffic = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Mascurrency = _useState34[0],
      setMascurrency = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      office = _useState35[0],
      setoffice = _useState35[1];

  var _useState36 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hasErrormas = _useState36[0],
      setErrorsmas = _useState36[1];

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
    // console.log(type.toString(), "ARRAYtoString");
    // console.log(request, "REQUEST");
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
      onClick: function onClick() {
        setoldmaster(Masstatus.splice(key, 1, handleStatus));
        console.log(Masstatus, "helloWorld");
      },
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
        setoldcomment(commentStatus.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setMasstatus([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Masstatus), [handleStatus]));
      setcommentStatus([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentStatus), [commentHandleALL])); // console.log(Masstatus, "MAASssssssssss", commentHandleALL);

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
      onClick: function onClick() {
        setoldmaster(quality.splice(key, 1, handleQuality));
        console.log(quality, "helloWorld");
      },
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
        setoldcomment(commentQuality.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setQuality([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(quality), [handleQuality]));
      setcommentQuality([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentQuality), [commentHandleALL]));
      console.log(quality);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Type",
    visible: isModalVisibleType,
    onOk: handleOkType,
    onCancel: handleCancelType
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, type.map(function (el, key) {
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
        setoldmaster(type.splice(key, 1, handleType));
        console.log(type, "helloWorld");
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  })), __jsx("div", null, commentType.map(function (el, key) {
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
        setoldcomment(commentType.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
  }, type.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleType(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      settype([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(type), [handleType]));
      setcommentType([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentType), [commentHandleALL]));
      console.log(type);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Attribute",
    visible: isModalVisibleAttribute,
    onOk: handleOkAttribute,
    onCancel: handleCancelAttribute
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, attribute.map(function (el, key) {
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
        setoldmaster(attribute.splice(key, 1, handleAttribute));
        console.log(attribute, "helloWorld");
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  })), __jsx("div", null, commentAttribute.map(function (el, key) {
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
        setoldcomment(commentAttribute.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
  }, attribute.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleAttribute(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setattribute([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(attribute), [handleAttribute]));
      setcommentAttribute([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentAttribute), [commentHandleALL]));
      console.log(attribute);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Industry",
    visible: isModalVisibleIndustry,
    onOk: handleOkIndustry,
    onCancel: handleCancelIndustry
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, ind.map(function (el, key) {
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
        setoldmaster(ind.splice(key, 1, handleIndustry));
        console.log(ind, "helloWorld");
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  })), __jsx("div", null, commentIndustry.map(function (el, key) {
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
        setoldcomment(commentIndustry.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
  }, ind.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleIndustry(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setind([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ind), [handleIndustry]));
      setcommentIndustry([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentIndustry), [commentHandleALL]));
      console.log(ind);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Traffic Country",
    visible: isModalVisibleCountry,
    onOk: handleOkCountry,
    onCancel: handleCancelCountry
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, traffic.map(function (el, key) {
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
        setoldmaster(traffic.splice(key, 1, handleCountry));
        console.log(traffic, "helloWorld");
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  })), __jsx("div", null, commentCountry.map(function (el, key) {
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
        setoldcomment(commentCountry.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
  }, traffic.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleCountry(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      settraffic([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(traffic), [handleCountry]));
      setcommentCountry([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentCountry), [commentHandleALL]));
      console.log(traffic);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Currency",
    visible: isModalVisibleCurrency,
    onOk: handleOkCurrency,
    onCancel: handleCancelCurrency
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, Mascurrency.map(function (el, key) {
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
        setoldmaster(Mascurrency.splice(key, 1, handleCurrency));
        console.log(Mascurrency, "helloWorld");
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  })), __jsx("div", null, commentCurrency.map(function (el, key) {
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
        setoldcomment(commentCurrency.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
  }, Mascurrency.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleCurrency(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setMascurrency([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Mascurrency), [handleCurrency]));
      setcommentCurrency([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentCurrency), [commentHandleALL]));
      console.log(Mascurrency);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: "Office Country",
    visible: isModalVisibleOffice,
    onOk: handleOkOffice,
    onCancel: handleCancelOffice
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", null, office.map(function (el, key) {
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
        setoldmaster(office.splice(key, 1, handleOffice));
        console.log(office, "helloWorld");
      },
      style: {
        border: "1px solid",
        padding: "5px"
      }
    }, el)));
  })), __jsx("div", null, commentOffice.map(function (el, key) {
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
        setoldcomment(commentOffice.splice(key, 1, commentHandleALL)); // console.log(commentStatus,"helloWorld");
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
  }, office.length), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px"
    },
    placeholder: "Add a value here...",
    onChange: function onChange(e) {
      setHandleOffice(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "10px"
    },
    placeholder: "Add a Comment here...",
    onChange: function onChange(e) {
      setcommentHandleALL(e.target.value);
      console.log(commentHandleALL);
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      marginLeft: "20px",
      marginTop: "10px"
    },
    onClick: function onClick() {
      setoffice([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(office), [handleOffice]));
      setcomment([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentOffice), [commentHandleALL]));
      console.log(office);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx("h1", null, "Masters Tables"), __jsx("div", {
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

_s(MasterTables, "pB0qJqQW3dtI4NCs5kCHioocuW4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImNvbW1lbnRIYW5kbGVBTEwiLCJzZXRjb21tZW50SGFuZGxlQUxMIiwib2xkY29tbWVudCIsInNldG9sZGNvbW1lbnQiLCJvbGRtYXN0ZXIiLCJzZXRvbGRtYXN0ZXIiLCJoYW5kbGVRdWFsaXR5Iiwic2V0SGFuZGxlUXVhbGl0eSIsImNvbW1lbnRRdWFsaXR5Iiwic2V0Y29tbWVudFF1YWxpdHkiLCJoYW5kbGVUeXBlIiwic2V0SGFuZGxlVHlwZSIsImNvbW1lbnRUeXBlIiwic2V0Y29tbWVudFR5cGUiLCJoYW5kbGVBdHRyaWJ1dGUiLCJzZXRIYW5kbGVBdHRyaWJ1dGUiLCJjb21tZW50QXR0cmlidXRlIiwic2V0Y29tbWVudEF0dHJpYnV0ZSIsImhhbmRsZUluZHVzdHJ5Iiwic2V0SGFuZGxlSW5kdXN0cnkiLCJjb21tZW50SW5kdXN0cnkiLCJzZXRjb21tZW50SW5kdXN0cnkiLCJoYW5kbGVDb3VudHJ5Iiwic2V0SGFuZGxlQ291bnRyeSIsImNvbW1lbnRDb3VudHJ5Iiwic2V0Y29tbWVudENvdW50cnkiLCJoYW5kbGVDdXJyZW5jeSIsInNldEhhbmRsZUN1cnJlbmN5IiwiY29tbWVudEN1cnJlbmN5Iiwic2V0Y29tbWVudEN1cnJlbmN5IiwiaGFuZGxlT2ZmaWNlIiwic2V0SGFuZGxlT2ZmaWNlIiwiY29tbWVudE9mZmljZSIsInNldGNvbW1lbnRPZmZpY2UiLCJNYXNzdGF0dXMiLCJzZXRNYXNzdGF0dXMiLCJxdWFsaXR5Iiwic2V0UXVhbGl0eSIsInR5cGUiLCJzZXR0eXBlIiwiYXR0cmlidXRlIiwic2V0YXR0cmlidXRlIiwiaW5kIiwic2V0aW5kIiwidHJhZmZpYyIsInNldHRyYWZmaWMiLCJNYXNjdXJyZW5jeSIsInNldE1hc2N1cnJlbmN5Iiwib2ZmaWNlIiwic2V0b2ZmaWNlIiwiaGFzRXJyb3JtYXMiLCJzZXRFcnJvcnNtYXMiLCJmZXRjaERhdGFNYXN0ZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YTIiLCJjb25zb2xlIiwibG9nIiwiTWFzdGVyX1RhYmxlIiwic3BsaXQiLCJNYXN0ZXJfQ29tbWVudHMiLCJlcnIiLCJ1c2VFZmZlY3QiLCJwb3N0RGF0YSIsInJlcXVlc3QiLCJyZXFudW1iZXIiLCJyZXNwb25zZSIsImRhdGEiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwidG9TdHJpbmciLCJzdGF0dXNSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiTWFzdGVyX05hbWUiLCJxdWFsaXR5UmVxdWVzdCIsInR5cGVSZXF1ZXN0IiwiYXR0cmlidXRlUmVxdWVzdCIsImluZHVzdHJ5UmVxdWVzdCIsImNvdW50cnlSZXF1ZXN0IiwiY3VycmVuY3lSZXF1ZXN0Iiwib2ZmaWNlUmVxdWVzdCIsImhhbmRsZU9rU3RhdHVzIiwiaGFuZGxlQ2FuY2VsU3RhdHVzIiwiaGFuZGxlT2tRdWFsaXR5IiwiaGFuZGxlQ2FuY2VsUXVhbGl0eSIsImhhbmRsZU9rVHlwZSIsImhhbmRsZUNhbmNlbFR5cGUiLCJoYW5kbGVPa0F0dHJpYnV0ZSIsImhhbmRsZUNhbmNlbEF0dHJpYnV0ZSIsImhhbmRsZU9rSW5kdXN0cnkiLCJoYW5kbGVDYW5jZWxJbmR1c3RyeSIsImhhbmRsZU9rQ291bnRyeSIsImhhbmRsZUNhbmNlbENvdW50cnkiLCJoYW5kbGVPa0N1cnJlbmN5IiwiaGFuZGxlQ2FuY2VsQ3VycmVuY3kiLCJoYW5kbGVPa09mZmljZSIsImhhbmRsZUNhbmNlbE9mZmljZSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFwIiwiZWwiLCJrZXkiLCJtYXJnaW5Cb3R0b20iLCJncmlkR2FwIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJzcGxpY2UiLCJib3JkZXIiLCJwYWRkaW5nIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsInN1Y2Nlc3MiLCJzZXRjb21tZW50Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBQ1FBLE0sR0FBV0MsMkMsQ0FBWEQsTTtBQUNSOztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDK0JDLHNEQUFRLENBQUMsS0FBRCxDQUR2QztBQUFBLE1BQ2xCQyxvQkFEa0I7QUFBQSxNQUNJQyx1QkFESjs7QUFBQSxtQkFFaUNGLHNEQUFRLENBQUMsS0FBRCxDQUZ6QztBQUFBLE1BRWxCRyxxQkFGa0I7QUFBQSxNQUVLQyx3QkFGTDs7QUFBQSxtQkFHMkJKLHNEQUFRLENBQUMsS0FBRCxDQUhuQztBQUFBLE1BR2xCSyxrQkFIa0I7QUFBQSxNQUdFQyxxQkFIRjs7QUFBQSxtQkFJcUNOLHNEQUFRLENBQUMsS0FBRCxDQUo3QztBQUFBLE1BSWxCTyx1QkFKa0I7QUFBQSxNQUlPQywwQkFKUDs7QUFBQSxtQkFLbUNSLHNEQUFRLENBQUMsS0FBRCxDQUwzQztBQUFBLE1BS2xCUyxzQkFMa0I7QUFBQSxNQUtNQyx5QkFMTjs7QUFBQSxtQkFNaUNWLHNEQUFRLENBQUMsS0FBRCxDQU56QztBQUFBLE1BTWxCVyxxQkFOa0I7QUFBQSxNQU1LQyx3QkFOTDs7QUFBQSxtQkFPbUNaLHNEQUFRLENBQUMsS0FBRCxDQVAzQztBQUFBLE1BT2xCYSxzQkFQa0I7QUFBQSxNQU9NQyx5QkFQTjs7QUFBQSxtQkFRK0JkLHNEQUFRLENBQUMsS0FBRCxDQVJ2QztBQUFBLE1BUWxCZSxvQkFSa0I7QUFBQSxNQVFJQyx1QkFSSixrQkFVekI7OztBQVZ5QixtQkFXZWhCLHNEQUFRLENBQUMsRUFBRCxDQVh2QjtBQUFBLE1BV2xCaUIsWUFYa0I7QUFBQSxNQVdKQyxlQVhJOztBQUFBLG9CQVlpQmxCLHNEQUFRLENBQUMsRUFBRCxDQVp6QjtBQUFBLE1BWWxCbUIsYUFaa0I7QUFBQSxNQVlIQyxnQkFaRzs7QUFBQSxvQkFhdUJwQixzREFBUSxDQUFDLEVBQUQsQ0FiL0I7QUFBQSxNQWFsQnFCLGdCQWJrQjtBQUFBLE1BYUFDLG1CQWJBOztBQUFBLG9CQWVXdEIsc0RBQVEsQ0FBQyxFQUFELENBZm5CO0FBQUEsTUFlbEJ1QixVQWZrQjtBQUFBLE1BZU5DLGFBZk07O0FBQUEsb0JBZ0JTeEIsc0RBQVEsQ0FBQyxFQUFELENBaEJqQjtBQUFBLE1BZ0JsQnlCLFNBaEJrQjtBQUFBLE1BZ0JQQyxZQWhCTzs7QUFBQSxvQkFrQmlCMUIsc0RBQVEsQ0FBQyxFQUFELENBbEJ6QjtBQUFBLE1Ba0JsQjJCLGFBbEJrQjtBQUFBLE1Ba0JIQyxnQkFsQkc7O0FBQUEsb0JBbUJtQjVCLHNEQUFRLENBQUMsRUFBRCxDQW5CM0I7QUFBQSxNQW1CbEI2QixjQW5Ca0I7QUFBQSxNQW1CRkMsaUJBbkJFOztBQUFBLG9CQXFCVzlCLHNEQUFRLENBQUMsRUFBRCxDQXJCbkI7QUFBQSxNQXFCbEIrQixVQXJCa0I7QUFBQSxNQXFCTkMsYUFyQk07O0FBQUEsb0JBc0JhaEMsc0RBQVEsQ0FBQyxFQUFELENBdEJyQjtBQUFBLE1Bc0JsQmlDLFdBdEJrQjtBQUFBLE1Bc0JMQyxjQXRCSzs7QUFBQSxvQkF3QnFCbEMsc0RBQVEsQ0FBQyxFQUFELENBeEI3QjtBQUFBLE1Bd0JsQm1DLGVBeEJrQjtBQUFBLE1Bd0JEQyxrQkF4QkM7O0FBQUEsb0JBeUJ1QnBDLHNEQUFRLENBQUMsRUFBRCxDQXpCL0I7QUFBQSxNQXlCbEJxQyxnQkF6QmtCO0FBQUEsTUF5QkFDLG1CQXpCQTs7QUFBQSxvQkEyQm1CdEMsc0RBQVEsQ0FBQyxFQUFELENBM0IzQjtBQUFBLE1BMkJsQnVDLGNBM0JrQjtBQUFBLE1BMkJGQyxpQkEzQkU7O0FBQUEsb0JBNEJxQnhDLHNEQUFRLENBQUMsRUFBRCxDQTVCN0I7QUFBQSxNQTRCbEJ5QyxlQTVCa0I7QUFBQSxNQTRCREMsa0JBNUJDOztBQUFBLG9CQThCaUIxQyxzREFBUSxDQUFDLEVBQUQsQ0E5QnpCO0FBQUEsTUE4QmxCMkMsYUE5QmtCO0FBQUEsTUE4QkhDLGdCQTlCRzs7QUFBQSxvQkErQm1CNUMsc0RBQVEsQ0FBQyxFQUFELENBL0IzQjtBQUFBLE1BK0JsQjZDLGNBL0JrQjtBQUFBLE1BK0JGQyxpQkEvQkU7O0FBQUEsb0JBaUNtQjlDLHNEQUFRLENBQUMsRUFBRCxDQWpDM0I7QUFBQSxNQWlDbEIrQyxjQWpDa0I7QUFBQSxNQWlDRkMsaUJBakNFOztBQUFBLG9CQWtDcUJoRCxzREFBUSxDQUFDLEVBQUQsQ0FsQzdCO0FBQUEsTUFrQ2xCaUQsZUFsQ2tCO0FBQUEsTUFrQ0RDLGtCQWxDQzs7QUFBQSxvQkFvQ2VsRCxzREFBUSxDQUFDLEVBQUQsQ0FwQ3ZCO0FBQUEsTUFvQ2xCbUQsWUFwQ2tCO0FBQUEsTUFvQ0pDLGVBcENJOztBQUFBLG9CQXFDaUJwRCxzREFBUSxDQUFDLEVBQUQsQ0FyQ3pCO0FBQUEsTUFxQ2xCcUQsYUFyQ2tCO0FBQUEsTUFxQ0hDLGdCQXJDRyxtQkF1Q3pCOzs7QUF2Q3lCLG9CQXdDU3RELHNEQUFRLENBQUMsRUFBRCxDQXhDakI7QUFBQSxNQXdDbEJ1RCxTQXhDa0I7QUFBQSxNQXdDUEMsWUF4Q087O0FBQUEsb0JBeUNLeEQsc0RBQVEsQ0FBQyxFQUFELENBekNiO0FBQUEsTUF5Q2xCeUQsT0F6Q2tCO0FBQUEsTUF5Q1RDLFVBekNTOztBQUFBLG9CQTBDRDFELHNEQUFRLENBQUMsRUFBRCxDQTFDUDtBQUFBLE1BMENsQjJELElBMUNrQjtBQUFBLE1BMENaQyxPQTFDWTs7QUFBQSxvQkEyQ1M1RCxzREFBUSxDQUFDLEVBQUQsQ0EzQ2pCO0FBQUEsTUEyQ2xCNkQsU0EzQ2tCO0FBQUEsTUEyQ1BDLFlBM0NPOztBQUFBLG9CQTRDSDlELHNEQUFRLENBQUMsRUFBRCxDQTVDTDtBQUFBLE1BNENsQitELEdBNUNrQjtBQUFBLE1BNENiQyxNQTVDYTs7QUFBQSxvQkE2Q0toRSxzREFBUSxDQUFDLEVBQUQsQ0E3Q2I7QUFBQSxNQTZDbEJpRSxPQTdDa0I7QUFBQSxNQTZDVEMsVUE3Q1M7O0FBQUEsb0JBOENhbEUsc0RBQVEsQ0FBQyxFQUFELENBOUNyQjtBQUFBLE1BOENsQm1FLFdBOUNrQjtBQUFBLE1BOENMQyxjQTlDSzs7QUFBQSxvQkErQ0dwRSxzREFBUSxDQUFDLEVBQUQsQ0EvQ1g7QUFBQSxNQStDbEJxRSxNQS9Da0I7QUFBQSxNQStDVkMsU0EvQ1U7O0FBQUEsb0JBaURXdEUsc0RBQVEsQ0FBQyxLQUFELENBakRuQjtBQUFBLE1BaURsQnVFLFdBakRrQjtBQUFBLE1BaURMQyxZQWpESzs7QUFrRHpCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkMsU0FBSyxDQUFDLHNDQUFELENBQUwsQ0FDR0MsSUFESDtBQUFBLGtNQUNRLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2dCQSxHQUFHLENBQUNDLElBQUosRUFEaEI7O0FBQUE7QUFDRUMscUJBREY7QUFFSkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLG1CQUFuQjtBQUNBdEIsNEJBQVksQ0FBQ3NCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBRCxDQUFaO0FBQ0E5RCxnQ0FBZ0IsQ0FBQzBELEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssZUFBVCxDQUF5QkQsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBRCxDQUFoQjtBQUNBeEIsMEJBQVUsQ0FBQ29CLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBRCxDQUFWO0FBQ0FwRCxpQ0FBaUIsQ0FBQ2dELEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssZUFBVCxDQUF5QkQsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBRCxDQUFqQjtBQUNBdEIsdUJBQU8sQ0FBQ2tCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBRCxDQUFQO0FBQ0FoRCw4QkFBYyxDQUFDNEMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSyxlQUFULENBQXlCRCxLQUF6QixDQUErQixHQUEvQixDQUFELENBQWQ7QUFDQXBCLDRCQUFZLENBQUNnQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCLENBQUQsQ0FBWjtBQUNBNUMsbUNBQW1CLENBQUN3QyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNLLGVBQVQsQ0FBeUJELEtBQXpCLENBQStCLEdBQS9CLENBQUQsQ0FBbkI7QUFDQWxCLHNCQUFNLENBQUNjLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBRCxDQUFOO0FBQ0F4QyxrQ0FBa0IsQ0FBQ29DLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssZUFBVCxDQUF5QkQsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBRCxDQUFsQjtBQUNBaEIsMEJBQVUsQ0FBQ1ksS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxZQUFULENBQXNCQyxLQUF0QixDQUE0QixHQUE1QixDQUFELENBQVY7QUFDQXBDLGlDQUFpQixDQUFDZ0MsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSyxlQUFULENBQXlCRCxLQUF6QixDQUErQixHQUEvQixDQUFELENBQWpCO0FBQ0FkLDhCQUFjLENBQUNVLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csWUFBVCxDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsQ0FBRCxDQUFkO0FBQ0FoQyxrQ0FBa0IsQ0FBQzRCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ssZUFBVCxDQUF5QkQsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBRCxDQUFsQjtBQUNBWix5QkFBUyxDQUFDUSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCLENBQUQsQ0FBVDtBQUNBNUIsZ0NBQWdCLENBQUN3QixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNLLGVBQVQsQ0FBeUJELEtBQXpCLENBQStCLEdBQS9CLENBQUQsQ0FBaEI7O0FBbEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBc0JTLFVBQUNFLEdBQUQ7QUFBQSxhQUFTWixZQUFZLENBQUNZLEdBQUQsQ0FBckI7QUFBQSxLQXRCVDtBQXVCRCxHQXhCRCxDQWxEeUIsQ0EyRXpCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ROLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FQLG1CQUFlO0FBQ2hCLEdBSFEsRUFHTixDQUFDLENBQUQsQ0FITSxDQUFULENBNUV5QixDQWlGekI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0FkLFNBQUssK0NBQXdDYyxTQUF4QyxHQUFxREQsT0FBckQsQ0FBTCxDQUNHWixJQURIO0FBQUEsbU1BQ1Esa0JBQU9jLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDZUEsUUFBUSxDQUFDWixJQUFULEVBRGY7O0FBQUE7QUFDRWEsb0JBREY7O0FBQUEsb0JBRUNELFFBQVEsQ0FBQ0UsRUFGVjtBQUFBO0FBQUE7QUFBQTs7QUFHRjtBQUNNQyxxQkFKSixHQUlhRixJQUFJLElBQUlBLElBQUksQ0FBQ0csT0FBZCxJQUEwQkosUUFBUSxDQUFDSyxNQUovQztBQUFBLGtEQUtLQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUosS0FBZixDQUxMOztBQUFBO0FBQUE7QUFBQSx1QkFPRWIsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosQ0FQRjs7QUFBQTtBQVFKaUIsc0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsS0FBdkI7O0FBUkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFXUyxVQUFDUCxLQUFELEVBQVc7QUFDaEIsV0FBSSxDQUFDUSxRQUFMLENBQWM7QUFBRUMsb0JBQVksRUFBRVQsS0FBSyxDQUFDVSxRQUFOO0FBQWhCLE9BQWQ7O0FBQ0F2QixhQUFPLENBQUNhLEtBQVIsQ0FBYyxxQkFBZCxFQUFxQ0EsS0FBckM7QUFDRCxLQWRILEVBSnVDLENBb0J2QztBQUNELEdBckJELENBM0d5QixDQWtJekI7OztBQUNBLE1BQU1XLGFBQWEsR0FBRztBQUNwQkMsVUFBTSxFQUFFLEtBRFk7QUFFcEJDLFdBQU8sRUFBRTtBQUFFLHNCQUFnQjtBQUFsQixLQUZXO0FBR3BCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxpQkFBVyxFQUFFLFFBRE07QUFFbkI1QixrQkFBWSxFQUFFMUIsU0FBUyxDQUFDK0MsUUFBVixFQUZLO0FBR25CbkIscUJBQWUsRUFBRWhFLGFBQWEsQ0FBQ21GLFFBQWQ7QUFIRSxLQUFmO0FBSGMsR0FBdEI7QUFVQSxNQUFNUSxjQUFjLEdBQUc7QUFDckJOLFVBQU0sRUFBRSxLQURhO0FBRXJCQyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGWTtBQUdyQkMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsaUJBQVcsRUFBRSxTQURNO0FBRW5CNUIsa0JBQVksRUFBRXhCLE9BQU8sQ0FBQzZDLFFBQVIsRUFGSztBQUduQm5CLHFCQUFlLEVBQUV0RCxjQUFjLENBQUN5RSxRQUFmO0FBSEUsS0FBZjtBQUhlLEdBQXZCO0FBVUEsTUFBTVMsV0FBVyxHQUFHO0FBQ2xCUCxVQUFNLEVBQUUsS0FEVTtBQUVsQkMsV0FBTyxFQUFFO0FBQUUsc0JBQWdCO0FBQWxCLEtBRlM7QUFHbEJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGlCQUFXLEVBQUUsV0FETTtBQUVuQjVCLGtCQUFZLEVBQUV0QixJQUFJLENBQUMyQyxRQUFMLEVBRks7QUFHbkJuQixxQkFBZSxFQUFFbEQsV0FBVyxDQUFDcUUsUUFBWjtBQUhFLEtBQWY7QUFIWSxHQUFwQjtBQVNBLE1BQU1VLGdCQUFnQixHQUFHO0FBQ3ZCUixVQUFNLEVBQUUsS0FEZTtBQUV2QkMsV0FBTyxFQUFFO0FBQUUsc0JBQWdCO0FBQWxCLEtBRmM7QUFHdkJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGlCQUFXLEVBQUUsZ0JBRE07QUFFbkI1QixrQkFBWSxFQUFFcEIsU0FBUyxDQUFDeUMsUUFBVixFQUZLO0FBR25CbkIscUJBQWUsRUFBRTlDLGdCQUFnQixDQUFDaUUsUUFBakI7QUFIRSxLQUFmO0FBSGlCLEdBQXpCO0FBU0EsTUFBTVcsZUFBZSxHQUFHO0FBQ3RCVCxVQUFNLEVBQUUsS0FEYztBQUV0QkMsV0FBTyxFQUFFO0FBQUUsc0JBQWdCO0FBQWxCLEtBRmE7QUFHdEJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGlCQUFXLEVBQUUsVUFETTtBQUVuQjVCLGtCQUFZLEVBQUVsQixHQUFHLENBQUN1QyxRQUFKLEVBRks7QUFHbkJuQixxQkFBZSxFQUFFMUMsZUFBZSxDQUFDNkQsUUFBaEI7QUFIRSxLQUFmO0FBSGdCLEdBQXhCO0FBU0EsTUFBTVksY0FBYyxHQUFHO0FBQ3JCVixVQUFNLEVBQUUsS0FEYTtBQUVyQkMsV0FBTyxFQUFFO0FBQUUsc0JBQWdCO0FBQWxCLEtBRlk7QUFHckJDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGlCQUFXLEVBQUUsaUJBRE07QUFFbkI1QixrQkFBWSxFQUFFaEIsT0FBTyxDQUFDcUMsUUFBUixFQUZLO0FBR25CbkIscUJBQWUsRUFBRXRDLGNBQWMsQ0FBQ3lELFFBQWY7QUFIRSxLQUFmO0FBSGUsR0FBdkI7QUFTQSxNQUFNYSxlQUFlLEdBQUc7QUFDdEJYLFVBQU0sRUFBRSxLQURjO0FBRXRCQyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGYTtBQUd0QkMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsaUJBQVcsRUFBRSxVQURNO0FBRW5CNUIsa0JBQVksRUFBRWQsV0FBVyxDQUFDbUMsUUFBWixFQUZLO0FBR25CbkIscUJBQWUsRUFBRWxDLGVBQWUsQ0FBQ3FELFFBQWhCO0FBSEUsS0FBZjtBQUhnQixHQUF4QjtBQVNBLE1BQU1jLGFBQWEsR0FBRztBQUNwQlosVUFBTSxFQUFFLEtBRFk7QUFFcEJDLFdBQU8sRUFBRTtBQUFFLHNCQUFnQjtBQUFsQixLQUZXO0FBR3BCQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxpQkFBVyxFQUFFLGdCQURNO0FBRW5CNUIsa0JBQVksRUFBRVosTUFBTSxDQUFDaUMsUUFBUCxFQUZLO0FBR25CbkIscUJBQWUsRUFBRTlCLGFBQWEsQ0FBQ2lELFFBQWQ7QUFIRSxLQUFmO0FBSGMsR0FBdEIsQ0FwTXlCLENBOE16QjtBQUNBOztBQUNBLE1BQU1lLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQi9CLFlBQVEsQ0FBQ2lCLGFBQUQsRUFBZ0IsQ0FBaEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTWUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CcEgsMkJBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBK0YsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QjtBQUNELEdBSEQsQ0FwTnlCLENBd056Qjs7O0FBQ0EsTUFBTW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QmpDLFlBQVEsQ0FBQ3dCLGNBQUQsRUFBaUIsQ0FBakIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTVUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDcEgsNEJBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNBNkYsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QjtBQUNELEdBSEQsQ0E3TnlCLENBaU96Qjs7O0FBQ0EsTUFBTXNCLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJuQyxZQUFRLENBQUN5QixXQUFELEVBQWMsQ0FBZCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JwSCx5QkFBcUIsQ0FBQyxLQUFELENBQXJCO0FBQ0EyRixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCLEtBQXZCO0FBQ0QsR0FIRCxDQXRPeUIsQ0EwT3pCOzs7QUFDQSxNQUFNd0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCckMsWUFBUSxDQUFDMEIsZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTVkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDcEgsOEJBQTBCLENBQUMsS0FBRCxDQUExQjtBQUNBeUYsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QjtBQUNELEdBSEQsQ0EvT3lCLENBbVB6Qjs7O0FBQ0EsTUFBTTBCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QnZDLFlBQVEsQ0FBQzJCLGVBQUQsRUFBa0IsQ0FBbEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTWEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDcEgsNkJBQXlCLENBQUMsS0FBRCxDQUF6QjtBQUNBdUYsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QjtBQUNELEdBSEQsQ0F4UHlCLENBNFB6Qjs7O0FBQ0EsTUFBTTRCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QnpDLFlBQVEsQ0FBQzRCLGNBQUQsRUFBaUIsQ0FBakIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTWMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDcEgsNEJBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNBcUYsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QjtBQUNELEdBSEQsQ0FqUXlCLENBcVF6Qjs7O0FBQ0EsTUFBTThCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QjNDLFlBQVEsQ0FBQzZCLGVBQUQsRUFBa0IsQ0FBbEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTWUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDcEgsNkJBQXlCLENBQUMsS0FBRCxDQUF6QjtBQUNBbUYsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QjtBQUNELEdBSEQsQ0ExUXlCLENBOFF6Qjs7O0FBQ0EsTUFBTWdDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjdDLFlBQVEsQ0FBQzhCLGFBQUQsRUFBZ0IsQ0FBaEIsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTWdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQnBILDJCQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDQWlGLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsS0FBdkI7QUFDRCxHQUhEOztBQUtBLFNBQ0UsbUJBR0UsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsV0FBTyxFQUFFbEcsb0JBRlg7QUFHRSxRQUFJLEVBQUVvSCxjQUhSO0FBSUUsWUFBUSxFQUFFQztBQUpaLEtBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRWUsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFtQixFQUFFO0FBQXhDO0FBQVosS0FDRSxtQkFDRy9FLFNBQVMsQ0FBQ2dGLEdBQVYsQ0FBYyxVQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUMxQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xKLGVBQU8sRUFBRSxNQURKO0FBRUxLLG9CQUFZLEVBQUUsTUFGVDtBQUdMSiwyQkFBbUIsRUFBRSxTQUhoQjtBQUlMSyxlQUFPLEVBQUU7QUFKSjtBQURULE9BUUU7QUFBSyxXQUFLLEVBQUU7QUFBRU4sZUFBTyxFQUFFO0FBQVg7QUFBWixPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVPLG1CQUFXLEVBQUUsTUFBZjtBQUF1QkMsaUJBQVMsRUFBRTtBQUFsQztBQUFaLE9BQ0dKLEdBREgsQ0FERixFQUlFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2IvRyxvQkFBWSxDQUFDNkIsU0FBUyxDQUFDdUYsTUFBVixDQUFpQkwsR0FBakIsRUFBc0IsQ0FBdEIsRUFBeUJ4SCxZQUF6QixDQUFELENBQVo7QUFDQThELGVBQU8sQ0FBQ0MsR0FBUixDQUFZekIsU0FBWixFQUF1QixZQUF2QjtBQUNELE9BSkg7QUFLRSxXQUFLLEVBQUU7QUFBRXdGLGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFMVCxPQU9HUixFQVBILENBSkYsQ0FSRixDQURGO0FBeUJELEdBMUJBLENBREgsQ0FERixFQThCRSxtQkFDR3JILGFBQWEsQ0FBQ29ILEdBQWQsQ0FBa0IsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDOUIsV0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMSixlQUFPLEVBQUUsTUFESjtBQUVMSyxvQkFBWSxFQUFFLE1BRlQ7QUFHTEosMkJBQW1CLEVBQUUsU0FIaEI7QUFJTEssZUFBTyxFQUFFO0FBSko7QUFEVCxPQVFFO0FBQUssV0FBSyxFQUFFO0FBQUVOLGVBQU8sRUFBRTtBQUFYO0FBQVosT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFTyxtQkFBVyxFQUFFLE1BQWY7QUFBdUJDLGlCQUFTLEVBQUU7QUFBbEM7QUFBWixPQUNHSixHQURILENBREYsRUFJRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiakgscUJBQWEsQ0FDWEwsYUFBYSxDQUFDMkgsTUFBZCxDQUFxQkwsR0FBckIsRUFBMEIsQ0FBMUIsRUFBNkJwSCxnQkFBN0IsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0E5QkYsQ0FORixFQW9FRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHdEYsU0FBUyxDQUFDMEYsTUFEYixDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZmhJLHFCQUFlLENBQUNnSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0FyRSxhQUFPLENBQUNDLEdBQVIsQ0FBWS9ELFlBQVo7QUFDRDtBQU5ILElBSkYsRUFZRTtBQUNFLFNBQUssRUFBRTtBQUFFOEgsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRSxLQUFoQztBQUF1Q0ssZ0JBQVUsRUFBRTtBQUFuRCxLQURUO0FBRUUsZUFBVyxFQUFDLHVCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDSCxDQUFELEVBQU87QUFDZjVILHlCQUFtQixDQUFDNEgsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFDQXJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZM0QsZ0JBQVo7QUFDRDtBQU5ILElBWkYsQ0FwRUYsRUF5RkUsTUFBQywyQ0FBRDtBQUNFLFNBQUssRUFBRTtBQUFFZ0ksZ0JBQVUsRUFBRSxNQUFkO0FBQXNCUixlQUFTLEVBQUU7QUFBakMsS0FEVDtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNickYsa0JBQVksd0dBQUtELFNBQUwsSUFBZ0J0QyxZQUFoQixHQUFaO0FBQ0FHLHNCQUFnQix3R0FBS0QsYUFBTCxJQUFvQkUsZ0JBQXBCLEdBQWhCLENBRmEsQ0FHYjs7QUFDQXdFLGtEQUFPLENBQUN5RCxPQUFSLENBQ0Usb0VBREYsRUFFRSxFQUZGO0FBSUQ7QUFWSCxpQkF6RkYsQ0FIRixFQXlIRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxXQUFPLEVBQUVuSixxQkFGWDtBQUdFLFFBQUksRUFBRW9ILGVBSFI7QUFJRSxZQUFRLEVBQUVDO0FBSlosS0FNRTtBQUFLLFNBQUssRUFBRTtBQUFFYSxhQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUU7QUFBeEM7QUFBWixLQUNFLG1CQUNHN0UsT0FBTyxDQUFDOEUsR0FBUixDQUFZLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ3hCLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYi9HLG9CQUFZLENBQUMrQixPQUFPLENBQUNxRixNQUFSLENBQWVMLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUI5RyxhQUF2QixDQUFELENBQVo7QUFDQW9ELGVBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsT0FBWixFQUFxQixZQUFyQjtBQUNELE9BSkg7QUFLRSxXQUFLLEVBQUU7QUFBRXNGLGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFMVCxPQU9HUixFQVBILENBSkYsQ0FSRixDQURGO0FBeUJELEdBMUJBLENBREgsQ0FERixFQThCRSxtQkFDRzNHLGNBQWMsQ0FBQzBHLEdBQWYsQ0FBbUIsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDL0IsV0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMSixlQUFPLEVBQUUsTUFESjtBQUVMSyxvQkFBWSxFQUFFLE1BRlQ7QUFHTEosMkJBQW1CLEVBQUUsU0FIaEI7QUFJTEssZUFBTyxFQUFFO0FBSko7QUFEVCxPQVFFO0FBQUssV0FBSyxFQUFFO0FBQUVOLGVBQU8sRUFBRTtBQUFYO0FBQVosT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFTyxtQkFBVyxFQUFFLE1BQWY7QUFBdUJDLGlCQUFTLEVBQUU7QUFBbEM7QUFBWixPQUNHSixHQURILENBREYsRUFJRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiakgscUJBQWEsQ0FDWEssY0FBYyxDQUFDaUgsTUFBZixDQUFzQkwsR0FBdEIsRUFBMkIsQ0FBM0IsRUFBOEJwSCxnQkFBOUIsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0E5QkYsQ0FORixFQW9FRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHcEYsT0FBTyxDQUFDd0YsTUFEWCxDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZnRILHNCQUFnQixDQUFDc0gsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDRDtBQUxILElBSkYsRUFXRTtBQUNFLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUUsV0FBVjtBQUF1QkMsYUFBTyxFQUFFLEtBQWhDO0FBQXVDSyxnQkFBVSxFQUFFO0FBQW5ELEtBRFQ7QUFFRSxlQUFXLEVBQUMsdUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBTztBQUNmNUgseUJBQW1CLENBQUM0SCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUNBckUsYUFBTyxDQUFDQyxHQUFSLENBQVkzRCxnQkFBWjtBQUNEO0FBTkgsSUFYRixDQXBFRixFQXdGRSxNQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVnSSxnQkFBVSxFQUFFLE1BQWQ7QUFBc0JSLGVBQVMsRUFBRTtBQUFqQyxLQURUO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JuRixnQkFBVSx3R0FBS0QsT0FBTCxJQUFjOUIsYUFBZCxHQUFWO0FBQ0FHLHVCQUFpQix3R0FBS0QsY0FBTCxJQUFxQlIsZ0JBQXJCLEdBQWpCO0FBQ0EwRCxhQUFPLENBQUNDLEdBQVIsQ0FBWXZCLE9BQVo7QUFDQW9DLGtEQUFPLENBQUN5RCxPQUFSLENBQ0Usb0VBREYsRUFFRSxFQUZGO0FBSUQ7QUFWSCxpQkF4RkYsQ0F6SEYsRUFrT0UsTUFBQywwQ0FBRDtBQUNFLFNBQUssRUFBQyxNQURSO0FBRUUsV0FBTyxFQUFFakosa0JBRlg7QUFHRSxRQUFJLEVBQUVvSCxZQUhSO0FBSUUsWUFBUSxFQUFFQztBQUpaLEtBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRVcsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFtQixFQUFFO0FBQXhDO0FBQVosS0FDRSxtQkFDRzNFLElBQUksQ0FBQzRFLEdBQUwsQ0FBUyxVQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNyQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xKLGVBQU8sRUFBRSxNQURKO0FBRUxLLG9CQUFZLEVBQUUsTUFGVDtBQUdMSiwyQkFBbUIsRUFBRSxTQUhoQjtBQUlMSyxlQUFPLEVBQUU7QUFKSjtBQURULE9BUUU7QUFBSyxXQUFLLEVBQUU7QUFBRU4sZUFBTyxFQUFFO0FBQVg7QUFBWixPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVPLG1CQUFXLEVBQUUsTUFBZjtBQUF1QkMsaUJBQVMsRUFBRTtBQUFsQztBQUFaLE9BQ0dKLEdBREgsQ0FERixFQUlFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2IvRyxvQkFBWSxDQUFDaUMsSUFBSSxDQUFDbUYsTUFBTCxDQUFZTCxHQUFaLEVBQWlCLENBQWpCLEVBQW9CMUcsVUFBcEIsQ0FBRCxDQUFaO0FBQ0FnRCxlQUFPLENBQUNDLEdBQVIsQ0FBWXJCLElBQVosRUFBa0IsWUFBbEI7QUFDRCxPQUpIO0FBS0UsV0FBSyxFQUFFO0FBQUVvRixjQUFNLEVBQUUsV0FBVjtBQUF1QkMsZUFBTyxFQUFFO0FBQWhDO0FBTFQsT0FPR1IsRUFQSCxDQUpGLENBUkYsQ0FERjtBQXlCRCxHQTFCQSxDQURILENBREYsRUE4QkUsbUJBQ0d2RyxXQUFXLENBQUNzRyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQzVCLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYmpILHFCQUFhLENBQ1hTLFdBQVcsQ0FBQzZHLE1BQVosQ0FBbUJMLEdBQW5CLEVBQXdCLENBQXhCLEVBQTJCcEgsZ0JBQTNCLENBRFcsQ0FBYixDQURhLENBSWI7QUFDRCxPQU5IO0FBT0UsV0FBSyxFQUFFO0FBQUUwSCxjQUFNLEVBQUUsV0FBVjtBQUF1QkMsZUFBTyxFQUFFO0FBQWhDO0FBUFQsT0FTR1IsRUFUSCxDQUpGLENBUkYsQ0FERjtBQTJCRCxHQTVCQSxDQURILENBOUJGLENBTkYsRUFvRUU7QUFBSyxTQUFLLEVBQUU7QUFBRUgsYUFBTyxFQUFFO0FBQVg7QUFBWixLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVPLGlCQUFXLEVBQUUsTUFBZjtBQUF1QkMsZUFBUyxFQUFFO0FBQWxDO0FBQVosS0FDR2xGLElBQUksQ0FBQ3NGLE1BRFIsQ0FERixFQUlFO0FBQ0UsU0FBSyxFQUFFO0FBQUVGLFlBQU0sRUFBRSxXQUFWO0FBQXVCQyxhQUFPLEVBQUU7QUFBaEMsS0FEVDtBQUVFLGVBQVcsRUFBQyxxQkFGZDtBQUdFLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRCxFQUFPO0FBQ2ZsSCxtQkFBYSxDQUFDa0gsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNEO0FBTEgsSUFKRixFQVdFO0FBQ0UsU0FBSyxFQUFFO0FBQUVMLFlBQU0sRUFBRSxXQUFWO0FBQXVCQyxhQUFPLEVBQUUsS0FBaEM7QUFBdUNLLGdCQUFVLEVBQUU7QUFBbkQsS0FEVDtBQUVFLGVBQVcsRUFBQyx1QkFGZDtBQUdFLFlBQVEsRUFBRSxrQkFBQ0gsQ0FBRCxFQUFPO0FBQ2Y1SCx5QkFBbUIsQ0FBQzRILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQ0FyRSxhQUFPLENBQUNDLEdBQVIsQ0FBWTNELGdCQUFaO0FBQ0Q7QUFOSCxJQVhGLENBcEVGLEVBd0ZFLE1BQUMsMkNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRWdJLGdCQUFVLEVBQUUsTUFBZDtBQUFzQlIsZUFBUyxFQUFFO0FBQWpDLEtBRFQ7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYmpGLGFBQU8sd0dBQUtELElBQUwsSUFBVzVCLFVBQVgsR0FBUDtBQUNBRyxvQkFBYyx3R0FBS0QsV0FBTCxJQUFrQlosZ0JBQWxCLEdBQWQ7QUFDQTBELGFBQU8sQ0FBQ0MsR0FBUixDQUFZckIsSUFBWjtBQUNBa0Msa0RBQU8sQ0FBQ3lELE9BQVIsQ0FDRSxvRUFERixFQUVFLEVBRkY7QUFJRDtBQVZILGlCQXhGRixDQWxPRixFQTJVRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFDLFdBRFI7QUFFRSxXQUFPLEVBQUUvSSx1QkFGWDtBQUdFLFFBQUksRUFBRW9ILGlCQUhSO0FBSUUsWUFBUSxFQUFFQztBQUpaLEtBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRVMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFtQixFQUFFO0FBQXhDO0FBQVosS0FDRSxtQkFDR3pFLFNBQVMsQ0FBQzBFLEdBQVYsQ0FBYyxVQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUMxQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xKLGVBQU8sRUFBRSxNQURKO0FBRUxLLG9CQUFZLEVBQUUsTUFGVDtBQUdMSiwyQkFBbUIsRUFBRSxTQUhoQjtBQUlMSyxlQUFPLEVBQUU7QUFKSjtBQURULE9BUUU7QUFBSyxXQUFLLEVBQUU7QUFBRU4sZUFBTyxFQUFFO0FBQVg7QUFBWixPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVPLG1CQUFXLEVBQUUsTUFBZjtBQUF1QkMsaUJBQVMsRUFBRTtBQUFsQztBQUFaLE9BQ0dKLEdBREgsQ0FERixFQUlFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2IvRyxvQkFBWSxDQUFDbUMsU0FBUyxDQUFDaUYsTUFBVixDQUFpQkwsR0FBakIsRUFBc0IsQ0FBdEIsRUFBeUJ0RyxlQUF6QixDQUFELENBQVo7QUFDQTRDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsU0FBWixFQUF1QixZQUF2QjtBQUNELE9BSkg7QUFLRSxXQUFLLEVBQUU7QUFBRWtGLGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFMVCxPQU9HUixFQVBILENBSkYsQ0FSRixDQURGO0FBeUJELEdBMUJBLENBREgsQ0FERixFQThCRSxtQkFDR25HLGdCQUFnQixDQUFDa0csR0FBakIsQ0FBcUIsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDakMsV0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMSixlQUFPLEVBQUUsTUFESjtBQUVMSyxvQkFBWSxFQUFFLE1BRlQ7QUFHTEosMkJBQW1CLEVBQUUsU0FIaEI7QUFJTEssZUFBTyxFQUFFO0FBSko7QUFEVCxPQVFFO0FBQUssV0FBSyxFQUFFO0FBQUVOLGVBQU8sRUFBRTtBQUFYO0FBQVosT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFTyxtQkFBVyxFQUFFLE1BQWY7QUFBdUJDLGlCQUFTLEVBQUU7QUFBbEM7QUFBWixPQUNHSixHQURILENBREYsRUFJRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiakgscUJBQWEsQ0FDWGEsZ0JBQWdCLENBQUN5RyxNQUFqQixDQUF3QkwsR0FBeEIsRUFBNkIsQ0FBN0IsRUFBZ0NwSCxnQkFBaEMsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0E5QkYsQ0FORixFQW9FRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHaEYsU0FBUyxDQUFDb0YsTUFEYixDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZjlHLHdCQUFrQixDQUFDOEcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFDRDtBQUxILElBSkYsRUFXRTtBQUNFLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUUsV0FBVjtBQUF1QkMsYUFBTyxFQUFFLEtBQWhDO0FBQXVDSyxnQkFBVSxFQUFFO0FBQW5ELEtBRFQ7QUFFRSxlQUFXLEVBQUMsdUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBTztBQUNmNUgseUJBQW1CLENBQUM0SCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUNBckUsYUFBTyxDQUFDQyxHQUFSLENBQVkzRCxnQkFBWjtBQUNEO0FBTkgsSUFYRixDQXBFRixFQXdGRSxNQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVnSSxnQkFBVSxFQUFFLE1BQWQ7QUFBc0JSLGVBQVMsRUFBRTtBQUFqQyxLQURUO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2IvRSxrQkFBWSx3R0FBS0QsU0FBTCxJQUFnQjFCLGVBQWhCLEdBQVo7QUFDQUcseUJBQW1CLHdHQUFLRCxnQkFBTCxJQUF1QmhCLGdCQUF2QixHQUFuQjtBQUNBMEQsYUFBTyxDQUFDQyxHQUFSLENBQVluQixTQUFaO0FBQ0FnQyxrREFBTyxDQUFDeUQsT0FBUixDQUNFLG9FQURGLEVBRUUsRUFGRjtBQUlEO0FBVkgsaUJBeEZGLENBM1VGLEVBb2JFLE1BQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUMsVUFEUjtBQUVFLFdBQU8sRUFBRTdJLHNCQUZYO0FBR0UsUUFBSSxFQUFFb0gsZ0JBSFI7QUFJRSxZQUFRLEVBQUVDO0FBSlosS0FNRTtBQUFLLFNBQUssRUFBRTtBQUFFTyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUU7QUFBeEM7QUFBWixLQUNFLG1CQUNHdkUsR0FBRyxDQUFDd0UsR0FBSixDQUFRLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ3BCLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYi9HLG9CQUFZLENBQUNxQyxHQUFHLENBQUMrRSxNQUFKLENBQVdMLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUJsRyxjQUFuQixDQUFELENBQVo7QUFDQXdDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZakIsR0FBWixFQUFpQixZQUFqQjtBQUNELE9BSkg7QUFLRSxXQUFLLEVBQUU7QUFBRWdGLGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFMVCxPQU9HUixFQVBILENBSkYsQ0FSRixDQURGO0FBeUJELEdBMUJBLENBREgsQ0FERixFQThCRSxtQkFDRy9GLGVBQWUsQ0FBQzhGLEdBQWhCLENBQW9CLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ2hDLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYmpILHFCQUFhLENBQ1hpQixlQUFlLENBQUNxRyxNQUFoQixDQUF1QkwsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0JwSCxnQkFBL0IsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0E5QkYsQ0FORixFQW9FRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHOUUsR0FBRyxDQUFDa0YsTUFEUCxDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZjFHLHVCQUFpQixDQUFDMEcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFDRDtBQUxILElBSkYsRUFXRTtBQUNFLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUUsV0FBVjtBQUF1QkMsYUFBTyxFQUFFLEtBQWhDO0FBQXVDSyxnQkFBVSxFQUFFO0FBQW5ELEtBRFQ7QUFFRSxlQUFXLEVBQUMsdUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBTztBQUNmNUgseUJBQW1CLENBQUM0SCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUNBckUsYUFBTyxDQUFDQyxHQUFSLENBQVkzRCxnQkFBWjtBQUNEO0FBTkgsSUFYRixDQXBFRixFQXdGRSxNQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVnSSxnQkFBVSxFQUFFLE1BQWQ7QUFBc0JSLGVBQVMsRUFBRTtBQUFqQyxLQURUO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I3RSxZQUFNLHdHQUFLRCxHQUFMLElBQVV4QixjQUFWLEdBQU47QUFDQUcsd0JBQWtCLHdHQUFLRCxlQUFMLElBQXNCcEIsZ0JBQXRCLEdBQWxCO0FBQ0EwRCxhQUFPLENBQUNDLEdBQVIsQ0FBWWpCLEdBQVo7QUFDQThCLGtEQUFPLENBQUN5RCxPQUFSLENBQ0Usb0VBREYsRUFFRSxFQUZGO0FBSUQ7QUFWSCxpQkF4RkYsQ0FwYkYsRUE2aEJFLE1BQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxXQUFPLEVBQUUzSSxxQkFGWDtBQUdFLFFBQUksRUFBRW9ILGVBSFI7QUFJRSxZQUFRLEVBQUVDO0FBSlosS0FNRTtBQUFLLFNBQUssRUFBRTtBQUFFSyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUU7QUFBeEM7QUFBWixLQUNFLG1CQUNHckUsT0FBTyxDQUFDc0UsR0FBUixDQUFZLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ3hCLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYi9HLG9CQUFZLENBQUN1QyxPQUFPLENBQUM2RSxNQUFSLENBQWVMLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUI5RixhQUF2QixDQUFELENBQVo7QUFDQW9DLGVBQU8sQ0FBQ0MsR0FBUixDQUFZZixPQUFaLEVBQXFCLFlBQXJCO0FBQ0QsT0FKSDtBQUtFLFdBQUssRUFBRTtBQUFFOEUsY0FBTSxFQUFFLFdBQVY7QUFBdUJDLGVBQU8sRUFBRTtBQUFoQztBQUxULE9BT0dSLEVBUEgsQ0FKRixDQVJGLENBREY7QUF5QkQsR0ExQkEsQ0FESCxDQURGLEVBOEJFLG1CQUNHM0YsY0FBYyxDQUFDMEYsR0FBZixDQUFtQixVQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUMvQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xKLGVBQU8sRUFBRSxNQURKO0FBRUxLLG9CQUFZLEVBQUUsTUFGVDtBQUdMSiwyQkFBbUIsRUFBRSxTQUhoQjtBQUlMSyxlQUFPLEVBQUU7QUFKSjtBQURULE9BUUU7QUFBSyxXQUFLLEVBQUU7QUFBRU4sZUFBTyxFQUFFO0FBQVg7QUFBWixPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVPLG1CQUFXLEVBQUUsTUFBZjtBQUF1QkMsaUJBQVMsRUFBRTtBQUFsQztBQUFaLE9BQ0dKLEdBREgsQ0FERixFQUlFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JqSCxxQkFBYSxDQUNYcUIsY0FBYyxDQUFDaUcsTUFBZixDQUFzQkwsR0FBdEIsRUFBMkIsQ0FBM0IsRUFBOEJwSCxnQkFBOUIsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0E5QkYsQ0FORixFQW9FRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHNUUsT0FBTyxDQUFDZ0YsTUFEWCxDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZnRHLHNCQUFnQixDQUFDc0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDRDtBQUxILElBSkYsRUFXRTtBQUNFLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUUsV0FBVjtBQUF1QkMsYUFBTyxFQUFFLEtBQWhDO0FBQXVDSyxnQkFBVSxFQUFFO0FBQW5ELEtBRFQ7QUFFRSxlQUFXLEVBQUMsdUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBTztBQUNmNUgseUJBQW1CLENBQUM0SCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUNBckUsYUFBTyxDQUFDQyxHQUFSLENBQVkzRCxnQkFBWjtBQUNEO0FBTkgsSUFYRixDQXBFRixFQXdGRSxNQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVnSSxnQkFBVSxFQUFFLE1BQWQ7QUFBc0JSLGVBQVMsRUFBRTtBQUFqQyxLQURUO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2IzRSxnQkFBVSx3R0FBS0QsT0FBTCxJQUFjdEIsYUFBZCxHQUFWO0FBQ0FHLHVCQUFpQix3R0FBS0QsY0FBTCxJQUFxQnhCLGdCQUFyQixHQUFqQjtBQUNBMEQsYUFBTyxDQUFDQyxHQUFSLENBQVlmLE9BQVo7QUFDQTRCLGtEQUFPLENBQUN5RCxPQUFSLENBQ0Usb0VBREYsRUFFRSxFQUZGO0FBSUQ7QUFWSCxpQkF4RkYsQ0E3aEJGLEVBc29CRSxNQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxXQUFPLEVBQUV6SSxzQkFGWDtBQUdFLFFBQUksRUFBRW9ILGdCQUhSO0FBSUUsWUFBUSxFQUFFQztBQUpaLEtBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRUcsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFtQixFQUFFO0FBQXhDO0FBQVosS0FDRSxtQkFDR25FLFdBQVcsQ0FBQ29FLEdBQVosQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDNUIsV0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMSixlQUFPLEVBQUUsTUFESjtBQUVMSyxvQkFBWSxFQUFFLE1BRlQ7QUFHTEosMkJBQW1CLEVBQUUsU0FIaEI7QUFJTEssZUFBTyxFQUFFO0FBSko7QUFEVCxPQVFFO0FBQUssV0FBSyxFQUFFO0FBQUVOLGVBQU8sRUFBRTtBQUFYO0FBQVosT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFTyxtQkFBVyxFQUFFLE1BQWY7QUFBdUJDLGlCQUFTLEVBQUU7QUFBbEM7QUFBWixPQUNHSixHQURILENBREYsRUFJRTtBQUNFLGFBQU8sRUFBRSxtQkFBTTtBQUNiL0csb0JBQVksQ0FDVnlDLFdBQVcsQ0FBQzJFLE1BQVosQ0FBbUJMLEdBQW5CLEVBQXdCLENBQXhCLEVBQTJCMUYsY0FBM0IsQ0FEVSxDQUFaO0FBR0FnQyxlQUFPLENBQUNDLEdBQVIsQ0FBWWIsV0FBWixFQUF5QixZQUF6QjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTRFLGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0FERixFQWdDRSxtQkFDR3ZGLGVBQWUsQ0FBQ3NGLEdBQWhCLENBQW9CLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ2hDLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYmpILHFCQUFhLENBQ1h5QixlQUFlLENBQUM2RixNQUFoQixDQUF1QkwsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0JwSCxnQkFBL0IsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0FoQ0YsQ0FORixFQXNFRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHMUUsV0FBVyxDQUFDOEUsTUFEZixDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZmxHLHVCQUFpQixDQUFDa0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFDRDtBQUxILElBSkYsRUFXRTtBQUNFLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUUsV0FBVjtBQUF1QkMsYUFBTyxFQUFFLEtBQWhDO0FBQXVDSyxnQkFBVSxFQUFFO0FBQW5ELEtBRFQ7QUFFRSxlQUFXLEVBQUMsdUJBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNILENBQUQsRUFBTztBQUNmNUgseUJBQW1CLENBQUM0SCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUNBckUsYUFBTyxDQUFDQyxHQUFSLENBQVkzRCxnQkFBWjtBQUNEO0FBTkgsSUFYRixDQXRFRixFQTBGRSxNQUFDLDJDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVnSSxnQkFBVSxFQUFFLE1BQWQ7QUFBc0JSLGVBQVMsRUFBRTtBQUFqQyxLQURUO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2J6RSxvQkFBYyx3R0FBS0QsV0FBTCxJQUFrQnBCLGNBQWxCLEdBQWQ7QUFDQUcsd0JBQWtCLHdHQUFLRCxlQUFMLElBQXNCNUIsZ0JBQXRCLEdBQWxCO0FBQ0EwRCxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsV0FBWjtBQUNBMEIsa0RBQU8sQ0FBQ3lELE9BQVIsQ0FDRSxvRUFERixFQUVFLEVBRkY7QUFJRDtBQVZILGlCQTFGRixDQXRvQkYsRUFpdkJFLE1BQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUMsZ0JBRFI7QUFFRSxXQUFPLEVBQUV2SSxvQkFGWDtBQUdFLFFBQUksRUFBRW9ILGNBSFI7QUFJRSxZQUFRLEVBQUVDO0FBSlosS0FNRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUU7QUFBeEM7QUFBWixLQUNFLG1CQUNHakUsTUFBTSxDQUFDa0UsR0FBUCxDQUFXLFVBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ3ZCLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEosZUFBTyxFQUFFLE1BREo7QUFFTEssb0JBQVksRUFBRSxNQUZUO0FBR0xKLDJCQUFtQixFQUFFLFNBSGhCO0FBSUxLLGVBQU8sRUFBRTtBQUpKO0FBRFQsT0FRRTtBQUFLLFdBQUssRUFBRTtBQUFFTixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRU8sbUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxpQkFBUyxFQUFFO0FBQWxDO0FBQVosT0FDR0osR0FESCxDQURGLEVBSUU7QUFDRSxhQUFPLEVBQUUsbUJBQU07QUFDYi9HLG9CQUFZLENBQUMyQyxNQUFNLENBQUN5RSxNQUFQLENBQWNMLEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0J0RixZQUF0QixDQUFELENBQVo7QUFDQTRCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaLEVBQW9CLFlBQXBCO0FBQ0QsT0FKSDtBQUtFLFdBQUssRUFBRTtBQUFFMEUsY0FBTSxFQUFFLFdBQVY7QUFBdUJDLGVBQU8sRUFBRTtBQUFoQztBQUxULE9BT0dSLEVBUEgsQ0FKRixDQVJGLENBREY7QUF5QkQsR0ExQkEsQ0FESCxDQURGLEVBOEJFLG1CQUNHbkYsYUFBYSxDQUFDa0YsR0FBZCxDQUFrQixVQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUM5QixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xKLGVBQU8sRUFBRSxNQURKO0FBRUxLLG9CQUFZLEVBQUUsTUFGVDtBQUdMSiwyQkFBbUIsRUFBRSxTQUhoQjtBQUlMSyxlQUFPLEVBQUU7QUFKSjtBQURULE9BUUU7QUFBSyxXQUFLLEVBQUU7QUFBRU4sZUFBTyxFQUFFO0FBQVg7QUFBWixPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVPLG1CQUFXLEVBQUUsTUFBZjtBQUF1QkMsaUJBQVMsRUFBRTtBQUFsQztBQUFaLE9BQ0dKLEdBREgsQ0FERixFQUlFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JqSCxxQkFBYSxDQUNYNkIsYUFBYSxDQUFDeUYsTUFBZCxDQUFxQkwsR0FBckIsRUFBMEIsQ0FBMUIsRUFBNkJwSCxnQkFBN0IsQ0FEVyxDQUFiLENBRGEsQ0FJYjtBQUNELE9BTkg7QUFPRSxXQUFLLEVBQUU7QUFBRTBILGNBQU0sRUFBRSxXQUFWO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEM7QUFQVCxPQVNHUixFQVRILENBSkYsQ0FSRixDQURGO0FBMkJELEdBNUJBLENBREgsQ0E5QkYsQ0FORixFQW9FRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRU8saUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEM7QUFBWixLQUNHeEUsTUFBTSxDQUFDNEUsTUFEVixDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRUYsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURUO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZjlGLHFCQUFlLENBQUM4RixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0Q7QUFMSCxJQUpGLEVBV0U7QUFDRSxTQUFLLEVBQUU7QUFBRUwsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRSxLQUFoQztBQUF1Q0ssZ0JBQVUsRUFBRTtBQUFuRCxLQURUO0FBRUUsZUFBVyxFQUFDLHVCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDSCxDQUFELEVBQU87QUFDZjVILHlCQUFtQixDQUFDNEgsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFDQXJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZM0QsZ0JBQVo7QUFDRDtBQU5ILElBWEYsQ0FwRUYsRUF3RkUsTUFBQywyQ0FBRDtBQUNFLFNBQUssRUFBRTtBQUFFZ0ksZ0JBQVUsRUFBRSxNQUFkO0FBQXNCUixlQUFTLEVBQUU7QUFBakMsS0FEVDtBQUVFLFdBQU8sRUFBRSxtQkFBTTtBQUNidkUsZUFBUyx3R0FBS0QsTUFBTCxJQUFhbEIsWUFBYixHQUFUO0FBQ0FvRyxnQkFBVSx3R0FBS2xHLGFBQUwsSUFBb0JoQyxnQkFBcEIsR0FBVjtBQUNBMEQsYUFBTyxDQUFDQyxHQUFSLENBQVlYLE1BQVo7QUFDQXdCLGtEQUFPLENBQUN5RCxPQUFSLENBQ0Usb0VBREYsRUFFRSxFQUZGO0FBSUQ7QUFWSCxpQkF4RkYsQ0FqdkJGLEVBdzFCRSxtQ0F4MUJGLEVBeTFCRTtBQUFLLFNBQUssRUFBRTtBQUFFRSxXQUFLLEVBQUUsS0FBVDtBQUFnQkgsZ0JBQVUsRUFBRSxNQUE1QjtBQUFvQ1QsaUJBQVcsRUFBRTtBQUFqRDtBQUFaLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTFAsYUFBTyxFQUFFLE1BREo7QUFFTG9CLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVixhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I3SSw2QkFBdUIsQ0FBQyxJQUFELENBQXZCO0FBQ0Q7QUFWSCxjQURGLEVBZUU7QUFDRSxTQUFLLEVBQUU7QUFDTG1JLGFBQU8sRUFBRSxNQURKO0FBRUxvQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFYsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiM0ksOEJBQXdCLENBQUMsSUFBRCxDQUF4QjtBQUNEO0FBVkgsb0JBZkYsRUE2QkU7QUFDRSxTQUFLLEVBQUU7QUFDTGlJLGFBQU8sRUFBRSxNQURKO0FBRUxvQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFYsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiekksMkJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNEO0FBVkgsaUJBN0JGLEVBMkNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0wrSCxhQUFPLEVBQUUsTUFESjtBQUVMb0Isb0JBQWMsRUFBRSxRQUZYO0FBR0xDLFlBQU0sRUFBRSxNQUhIO0FBSUxWLGFBQU8sRUFBRSxNQUpKO0FBS0xELFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYnZJLGdDQUEwQixDQUFDLElBQUQsQ0FBMUI7QUFDRDtBQVZILHNCQTNDRixFQTBERTtBQUNFLFNBQUssRUFBRTtBQUNMNkgsYUFBTyxFQUFFLE1BREo7QUFFTG9CLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVixhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JySSwrQkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0Q7QUFWSCxnQkExREYsRUF3RUU7QUFDRSxTQUFLLEVBQUU7QUFDTDJILGFBQU8sRUFBRSxNQURKO0FBRUxvQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFYsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNibkksOEJBQXdCLENBQUMsSUFBRCxDQUF4QjtBQUNEO0FBVkgsdUJBeEVGLEVBc0ZFO0FBQ0UsU0FBSyxFQUFFO0FBQ0x5SCxhQUFPLEVBQUUsTUFESjtBQUVMb0Isb0JBQWMsRUFBRSxRQUZYO0FBR0xDLFlBQU0sRUFBRSxNQUhIO0FBSUxWLGFBQU8sRUFBRSxNQUpKO0FBS0xELFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYmpJLCtCQUF5QixDQUFDLElBQUQsQ0FBekI7QUFDRDtBQVZILGdCQXRGRixFQW9HRTtBQUNFLFNBQUssRUFBRTtBQUNMdUgsYUFBTyxFQUFFLE1BREo7QUFFTG9CLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMVixhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2IvSCw2QkFBdUIsQ0FBQyxJQUFELENBQXZCO0FBQ0Q7QUFWSCxzQkFwR0YsQ0F6MUJGLENBREY7QUErOEJELENBdnVDRDs7R0FBTWpCLFk7O0tBQUFBLFk7QUF5dUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLjg2ODc3YmQ1ZDI5NjZlM2NkZDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFzdGVyVGFibGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVN0YXR1cywgc2V0SXNNb2RhbFZpc2libGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVF1YWxpdHksIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlVHlwZSwgc2V0SXNNb2RhbFZpc2libGVUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVBdHRyaWJ1dGUsIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVJbmR1c3RyeSwgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQ291bnRyeSwgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVDdXJyZW5jeSwgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlT2ZmaWNlLCBzZXRJc01vZGFsVmlzaWJsZU9mZmljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtoYW5kbGVTdGF0dXMsIHNldEhhbmRsZVN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFN0YXR1cywgc2V0Y29tbWVudFN0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbW1lbnRIYW5kbGVBTEwsIHNldGNvbW1lbnRIYW5kbGVBTExdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtvbGRjb21tZW50LCBzZXRvbGRjb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvbGRtYXN0ZXIsIHNldG9sZG1hc3Rlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZVF1YWxpdHksIHNldEhhbmRsZVF1YWxpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRRdWFsaXR5LCBzZXRjb21tZW50UXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVUeXBlLCBzZXRIYW5kbGVUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50VHlwZSwgc2V0Y29tbWVudFR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQXR0cmlidXRlLCBzZXRIYW5kbGVBdHRyaWJ1dGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRBdHRyaWJ1dGUsIHNldGNvbW1lbnRBdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlSW5kdXN0cnksIHNldEhhbmRsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5kdXN0cnksIHNldGNvbW1lbnRJbmR1c3RyeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVDb3VudHJ5LCBzZXRIYW5kbGVDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q291bnRyeSwgc2V0Y29tbWVudENvdW50cnldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ3VycmVuY3ksIHNldEhhbmRsZUN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50Q3VycmVuY3ksIHNldGNvbW1lbnRDdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVPZmZpY2UsIHNldEhhbmRsZU9mZmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudE9mZmljZSwgc2V0Y29tbWVudE9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgW01hc3N0YXR1cywgc2V0TWFzc3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcXVhbGl0eSwgc2V0UXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGUsIHNldHR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdHRyaWJ1dGUsIHNldGF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luZCwgc2V0aW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHJhZmZpYywgc2V0dHJhZmZpY10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW01hc2N1cnJlbmN5LCBzZXRNYXNjdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29mZmljZSwgc2V0b2ZmaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhc0Vycm9ybWFzLCBzZXRFcnJvcnNtYXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0TWFzc3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRTdGF0dXMoZGF0YTJbMF0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50UXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXR0eXBlKGRhdGEyWzJdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRUeXBlKGRhdGEyWzJdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50QXR0cmlidXRlKGRhdGEyWzNdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGluZChkYXRhMls0XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoZGF0YTJbNF0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHJhZmZpYyhkYXRhMls1XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q291bnRyeShkYXRhMls1XS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRNYXNjdXJyZW5jeShkYXRhMls2XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50Q3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0b2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGNvbW1lbnRPZmZpY2UoZGF0YTJbN10uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gc2V0RXJyb3JzbWFzKGVycikpO1xyXG4gIH07XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudERpZE1vdW50XCIpO1xyXG4gICAgZmV0Y2hEYXRhTWFzdGVyKCk7XHJcbiAgfSwgWzBdKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgLy8gY29uc3QgcG9zdERhdGEgPSAocmVxdWVzdCwgcmVxbnVtYmVyKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhNYXNzdGF0dXMudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gIC8vICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgLy8gICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgLy8gICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgLy8gICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codHlwZS50b1N0cmluZygpLCBcIkFSUkFZdG9TdHJpbmdcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0LCBcIlJFUVVFU1RcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXFudW1iZXIsXCJOVU1CRVJcIik7XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvJHtyZXFudW1iZXJ9YCwgcmVxdWVzdClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBnZXQgZXJyb3IgbWVzc2FnZSBmcm9tIGJvZHkgb3IgZGVmYXVsdCB0byByZXNwb25zZSBzdGF0dXNcclxuICAgICAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhcImRhdGEgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVycm9yLnRvU3RyaW5nKCkgfSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciFcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSb3V0ZXIucHVzaChcIk1hc3RlclRhYmxlc1wiKTtcclxuICB9O1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHN0YXR1c1JlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIlNUQVRVU1wiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IE1hc3N0YXR1cy50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRTdGF0dXMudG9TdHJpbmcoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1YWxpdHlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJRVUFMSVRZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogcXVhbGl0eS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRRdWFsaXR5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCB0eXBlUmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiTElOS19UWVBFXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHlwZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRUeXBlLnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGF0dHJpYnV0ZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfQVRUUklCVVRFXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogYXR0cmlidXRlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEF0dHJpYnV0ZS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBpbmR1c3RyeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIklORFVTVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogaW5kLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEluZHVzdHJ5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGNvdW50cnlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJUUkFGRklDX0NPVU5UUllcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiB0cmFmZmljLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudENvdW50cnkudG9TdHJpbmcoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgY3VycmVuY3lSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJDVVJSRU5DWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IE1hc2N1cnJlbmN5LnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEN1cnJlbmN5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IG9mZmljZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIk9GRklDRV9DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogb2ZmaWNlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudE9mZmljZS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gc3RhdHVzXHJcbiAgY29uc3QgaGFuZGxlT2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShzdGF0dXNSZXF1ZXN0LCAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVN0YXR1cyhmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIHF1YWxpdHlcclxuICBjb25zdCBoYW5kbGVPa1F1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShxdWFsaXR5UmVxdWVzdCwgMyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsUXVhbGl0eSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIFR5cGVcclxuICBjb25zdCBoYW5kbGVPa1R5cGUgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YSh0eXBlUmVxdWVzdCwgNCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsVHlwZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlVHlwZShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIEF0dHJpYnV0ZVxyXG4gIGNvbnN0IGhhbmRsZU9rQXR0cmlidXRlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoYXR0cmlidXRlUmVxdWVzdCwgNSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsQXR0cmlidXRlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGUoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBUeXBlXHJcbiAgY29uc3QgaGFuZGxlT2tJbmR1c3RyeSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGluZHVzdHJ5UmVxdWVzdCwgNik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsSW5kdXN0cnkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gdHJhZmZpYyBjb3VudHJ5XHJcbiAgY29uc3QgaGFuZGxlT2tDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY291bnRyeVJlcXVlc3QsIDcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbENvdW50cnkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBDdXJyZW5jeVxyXG4gIGNvbnN0IGhhbmRsZU9rQ3VycmVuY3kgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShjdXJyZW5jeVJlcXVlc3QsIDgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEN1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIE9mZmljZSBDb3VudHJ5XHJcbiAgY29uc3QgaGFuZGxlT2tPZmZpY2UgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShvZmZpY2VSZXF1ZXN0LCA5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxPZmZpY2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZU9mZmljZShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBzdGF0dXMgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiU3RhdHVzXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVN0YXR1c31cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa1N0YXR1c31cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsU3RhdHVzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7TWFzc3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZG1hc3RlcihNYXNzdGF0dXMuc3BsaWNlKGtleSwgMSwgaGFuZGxlU3RhdHVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE1hc3N0YXR1cywgXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRTdGF0dXMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkY29tbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50U3RhdHVzLnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7TWFzc3RhdHVzLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZUFMTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZUFMTCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYXNzdGF0dXMoWy4uLk1hc3N0YXR1cywgaGFuZGxlU3RhdHVzXSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoWy4uLmNvbW1lbnRTdGF0dXMsIGNvbW1lbnRIYW5kbGVBTExdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTWFzc3RhdHVzLCBcIk1BQVNzc3Nzc3Nzc3NzXCIsIGNvbW1lbnRIYW5kbGVBTEwpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENPTkZJUk0nLFxyXG4gICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudFN0YXR1c31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgcXVhbGl0eSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJRdWFsaXR5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVF1YWxpdHl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tRdWFsaXR5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxRdWFsaXR5fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cXVhbGl0eS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRtYXN0ZXIocXVhbGl0eS5zcGxpY2Uoa2V5LCAxLCBoYW5kbGVRdWFsaXR5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1YWxpdHksIFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50UXVhbGl0eS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRRdWFsaXR5LnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7cXVhbGl0eS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlUXVhbGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZUFMTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZUFMTCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRRdWFsaXR5KFsuLi5xdWFsaXR5LCBoYW5kbGVRdWFsaXR5XSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRRdWFsaXR5KFsuLi5jb21tZW50UXVhbGl0eSwgY29tbWVudEhhbmRsZUFMTF0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWFsaXR5KTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHR5cGUgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHlwZVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVUeXBlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rVHlwZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsVHlwZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3R5cGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkbWFzdGVyKHR5cGUuc3BsaWNlKGtleSwgMSwgaGFuZGxlVHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y29tbWVudFR5cGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkY29tbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50VHlwZS5zcGxpY2Uoa2V5LCAxLCBjb21tZW50SGFuZGxlQUxMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tZW50U3RhdHVzLFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge3R5cGUubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVBTEwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVBTEwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0dHlwZShbLi4udHlwZSwgaGFuZGxlVHlwZV0pO1xyXG4gICAgICAgICAgICBzZXRjb21tZW50VHlwZShbLi4uY29tbWVudFR5cGUsIGNvbW1lbnRIYW5kbGVBTExdKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBhdHRyaWJ1dGUgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQXR0cmlidXRlXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0F0dHJpYnV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQXR0cmlidXRlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7YXR0cmlidXRlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZG1hc3RlcihhdHRyaWJ1dGUuc3BsaWNlKGtleSwgMSwgaGFuZGxlQXR0cmlidXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZSwgXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRBdHRyaWJ1dGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkY29tbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50QXR0cmlidXRlLnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7YXR0cmlidXRlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVBTEwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVBTEwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0YXR0cmlidXRlKFsuLi5hdHRyaWJ1dGUsIGhhbmRsZUF0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICBzZXRjb21tZW50QXR0cmlidXRlKFsuLi5jb21tZW50QXR0cmlidXRlLCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBpbmR1c3RyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJJbmR1c3RyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVJbmR1c3RyeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0luZHVzdHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxJbmR1c3RyeX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2luZC5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRtYXN0ZXIoaW5kLnNwbGljZShrZXksIDEsIGhhbmRsZUluZHVzdHJ5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZCwgXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRJbmR1c3RyeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJbmR1c3RyeS5zcGxpY2Uoa2V5LCAxLCBjb21tZW50SGFuZGxlQUxMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tZW50U3RhdHVzLFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge2luZC5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlSW5kdXN0cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVBTEwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVBTEwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0aW5kKFsuLi5pbmQsIGhhbmRsZUluZHVzdHJ5XSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRJbmR1c3RyeShbLi4uY29tbWVudEluZHVzdHJ5LCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZCk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0cmFmZmljIGNvdW50cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHJhZmZpYyBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUNvdW50cnl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDb3VudHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxDb3VudHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dHJhZmZpYy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRtYXN0ZXIodHJhZmZpYy5zcGxpY2Uoa2V5LCAxLCBoYW5kbGVDb3VudHJ5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYWZmaWMsIFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50Q291bnRyeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb3VudHJ5LnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHJhZmZpYy5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQ291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZUFMTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZUFMTCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXR0cmFmZmljKFsuLi50cmFmZmljLCBoYW5kbGVDb3VudHJ5XSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRDb3VudHJ5KFsuLi5jb21tZW50Q291bnRyeSwgY29tbWVudEhhbmRsZUFMTF0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFmZmljKTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGN1cnJlbmN5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkN1cnJlbmN5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUN1cnJlbmN5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQ3VycmVuY3l9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEN1cnJlbmN5fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7TWFzY3VycmVuY3kubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkbWFzdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1hc2N1cnJlbmN5LnNwbGljZShrZXksIDEsIGhhbmRsZUN1cnJlbmN5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXNjdXJyZW5jeSwgXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRDdXJyZW5jeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDdXJyZW5jeS5zcGxpY2Uoa2V5LCAxLCBjb21tZW50SGFuZGxlQUxMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tZW50U3RhdHVzLFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge01hc2N1cnJlbmN5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVDdXJyZW5jeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZUFMTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZUFMTCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYXNjdXJyZW5jeShbLi4uTWFzY3VycmVuY3ksIGhhbmRsZUN1cnJlbmN5XSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRDdXJyZW5jeShbLi4uY29tbWVudEN1cnJlbmN5LCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE1hc2N1cnJlbmN5KTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIG9mZmljZSBjb3VudHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIk9mZmljZSBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZU9mZmljZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa09mZmljZX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsT2ZmaWNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7b2ZmaWNlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZG1hc3RlcihvZmZpY2Uuc3BsaWNlKGtleSwgMSwgaGFuZGxlT2ZmaWNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9mZmljZSwgXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRPZmZpY2UubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkY29tbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50T2ZmaWNlLnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7b2ZmaWNlLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVPZmZpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVBTEwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVBTEwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0b2ZmaWNlKFsuLi5vZmZpY2UsIGhhbmRsZU9mZmljZV0pO1xyXG4gICAgICAgICAgICBzZXRjb21tZW50KFsuLi5jb21tZW50T2ZmaWNlLCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9mZmljZSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxoMT5NYXN0ZXJzIFRhYmxlczwvaDE+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlU3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdGF0dXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIFF1YWxpdHlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVUeXBlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIFR5cGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgQXR0cmlidXRlXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBJbmR1c3RyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFRyYWZmaWMgQ291bnRyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUN1cnJlbmN5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDdXJyZW5jeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZU9mZmljZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgT2ZmaWNlIENvdW50cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyVGFibGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9