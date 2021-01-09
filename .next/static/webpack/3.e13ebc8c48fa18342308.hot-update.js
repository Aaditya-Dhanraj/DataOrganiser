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




var _s = $RefreshSig$();

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
    console.log(commentStatus.toString(), "ARRAYtoString"); // console.log(request, "REQUEST");
    // console.log(reqnumber,"NUMBER");
    // fetch(`http://localhost:5000/api/v1/master/${reqnumber}`, request)
    //   .then(async (response) => {
    //     const data = await response.json();
    //     if (!response.ok) {
    //       // get error message from body or default to response status
    //       const error = (data && data.message) || response.status;
    //       return Promise.reject(error);
    //     }
    //     await console.log("data posted successfully");
    //     window.location.reload(false);
    //   })
    //   .catch((error) => {
    //     this.setState({ errorMessage: error.toString() });
    //     console.error("There was an error!", error);
    //   });
    // Router.push("MasterTables");
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
        console.log(commentStatus, "helloWorld");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImNvbW1lbnRIYW5kbGVTdGF0dXMiLCJzZXRjb21tZW50SGFuZGxlU3RhdHVzIiwiaGFuZGxlUXVhbGl0eSIsInNldEhhbmRsZVF1YWxpdHkiLCJjb21tZW50UXVhbGl0eSIsInNldGNvbW1lbnRRdWFsaXR5IiwiaGFuZGxlVHlwZSIsInNldEhhbmRsZVR5cGUiLCJjb21tZW50VHlwZSIsInNldGNvbW1lbnRUeXBlIiwiaGFuZGxlQXR0cmlidXRlIiwic2V0SGFuZGxlQXR0cmlidXRlIiwiY29tbWVudEF0dHJpYnV0ZSIsInNldGNvbW1lbnRBdHRyaWJ1dGUiLCJoYW5kbGVJbmR1c3RyeSIsInNldEhhbmRsZUluZHVzdHJ5IiwiY29tbWVudEluZHVzdHJ5Iiwic2V0Y29tbWVudEluZHVzdHJ5IiwiaGFuZGxlQ291bnRyeSIsInNldEhhbmRsZUNvdW50cnkiLCJjb21tZW50Q291bnRyeSIsInNldGNvbW1lbnRDb3VudHJ5IiwiaGFuZGxlQ3VycmVuY3kiLCJzZXRIYW5kbGVDdXJyZW5jeSIsImNvbW1lbnRDdXJyZW5jeSIsInNldGNvbW1lbnRDdXJyZW5jeSIsImhhbmRsZU9mZmljZSIsInNldEhhbmRsZU9mZmljZSIsImNvbW1lbnRPZmZpY2UiLCJzZXRjb21tZW50T2ZmaWNlIiwiTWFzc3RhdHVzIiwic2V0TWFzc3RhdHVzIiwicXVhbGl0eSIsInNldFF1YWxpdHkiLCJ0eXBlIiwic2V0dHlwZSIsImF0dHJpYnV0ZSIsInNldGF0dHJpYnV0ZSIsImluZCIsInNldGluZCIsInRyYWZmaWMiLCJzZXR0cmFmZmljIiwiTWFzY3VycmVuY3kiLCJzZXRNYXNjdXJyZW5jeSIsIm9mZmljZSIsInNldG9mZmljZSIsImhhc0Vycm9ybWFzIiwic2V0RXJyb3JzbWFzIiwiZmV0Y2hEYXRhTWFzdGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiTWFzdGVyX0NvbW1lbnRzIiwiZXJyIiwidXNlRWZmZWN0IiwicG9zdERhdGEiLCJyZXF1ZXN0IiwicmVxbnVtYmVyIiwidG9TdHJpbmciLCJzdGF0dXNSZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiTWFzdGVyX05hbWUiLCJxdWFsaXR5UmVxdWVzdCIsInR5cGVSZXF1ZXN0IiwiYXR0cmlidXRlUmVxdWVzdCIsImluZHVzdHJ5UmVxdWVzdCIsImNvdW50cnlSZXF1ZXN0IiwiY3VycmVuY3lSZXF1ZXN0Iiwib2ZmaWNlUmVxdWVzdCIsImhhbmRsZU9rU3RhdHVzIiwiaGFuZGxlQ2FuY2VsU3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVPa1F1YWxpdHkiLCJoYW5kbGVDYW5jZWxRdWFsaXR5IiwiaGFuZGxlT2tUeXBlIiwiaGFuZGxlQ2FuY2VsVHlwZSIsImhhbmRsZU9rQXR0cmlidXRlIiwiaGFuZGxlQ2FuY2VsQXR0cmlidXRlIiwiaGFuZGxlT2tJbmR1c3RyeSIsImhhbmRsZUNhbmNlbEluZHVzdHJ5IiwiaGFuZGxlT2tDb3VudHJ5IiwiaGFuZGxlQ2FuY2VsQ291bnRyeSIsImhhbmRsZU9rQ3VycmVuY3kiLCJoYW5kbGVDYW5jZWxDdXJyZW5jeSIsImhhbmRsZU9rT2ZmaWNlIiwiaGFuZGxlQ2FuY2VsT2ZmaWNlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXAiLCJlbCIsImtleSIsIm1hcmdpbkJvdHRvbSIsImdyaWRHYXAiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImJvcmRlciIsInBhZGRpbmciLCJzcGxpY2UiLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5MZWZ0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUNRQSxNLEdBQVdDLDJDLENBQVhELE07QUFDUjs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQytCQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkM7QUFBQSxNQUNsQkMsb0JBRGtCO0FBQUEsTUFDSUMsdUJBREo7O0FBQUEsbUJBRWlDRixzREFBUSxDQUFDLEtBQUQsQ0FGekM7QUFBQSxNQUVsQkcscUJBRmtCO0FBQUEsTUFFS0Msd0JBRkw7O0FBQUEsbUJBRzJCSixzREFBUSxDQUFDLEtBQUQsQ0FIbkM7QUFBQSxNQUdsQkssa0JBSGtCO0FBQUEsTUFHRUMscUJBSEY7O0FBQUEsbUJBSXFDTixzREFBUSxDQUFDLEtBQUQsQ0FKN0M7QUFBQSxNQUlsQk8s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SjtBQUVMb0Isb0JBQWMsRUFBRSxRQUZYO0FBR0xDLFlBQU0sRUFBRSxNQUhIO0FBSUxYLGFBQU8sRUFBRSxNQUpKO0FBS0xELFlBQU0sRUFBRTtBQUxILEtBRFQ7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYnBILDhCQUF3QixDQUFDLElBQUQsQ0FBeEI7QUFDRDtBQVZILHVCQXhFRixFQXNGRTtBQUNFLFNBQUssRUFBRTtBQUNMMkcsYUFBTyxFQUFFLE1BREo7QUFFTG9CLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxZQUFNLEVBQUUsTUFISDtBQUlMWCxhQUFPLEVBQUUsTUFKSjtBQUtMRCxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JsSCwrQkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0Q7QUFWSCxnQkF0RkYsRUFvR0U7QUFDRSxTQUFLLEVBQUU7QUFDTHlHLGFBQU8sRUFBRSxNQURKO0FBRUxvQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFgsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNiaEgsNkJBQXVCLENBQUMsSUFBRCxDQUF2QjtBQUNEO0FBVkgsc0JBcEdGLENBM2VGLENBREY7QUFpbUJELENBdDNCRDs7R0FBTWpCLFk7O0tBQUFBLFk7QUF3M0JTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLmUxM2ViYzhjNDhmYTE4MzQyMzA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QsIG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWFzdGVyVGFibGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVN0YXR1cywgc2V0SXNNb2RhbFZpc2libGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVF1YWxpdHksIHNldElzTW9kYWxWaXNpYmxlUXVhbGl0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlVHlwZSwgc2V0SXNNb2RhbFZpc2libGVUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVBdHRyaWJ1dGUsIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVJbmR1c3RyeSwgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQ291bnRyeSwgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVDdXJyZW5jeSwgc2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlT2ZmaWNlLCBzZXRJc01vZGFsVmlzaWJsZU9mZmljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtoYW5kbGVTdGF0dXMsIHNldEhhbmRsZVN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFN0YXR1cywgc2V0Y29tbWVudFN0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbW1lbnRIYW5kbGVTdGF0dXMsIHNldGNvbW1lbnRIYW5kbGVTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVRdWFsaXR5LCBzZXRIYW5kbGVRdWFsaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50UXVhbGl0eSwgc2V0Y29tbWVudFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlVHlwZSwgc2V0SGFuZGxlVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFR5cGUsIHNldGNvbW1lbnRUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUF0dHJpYnV0ZSwgc2V0SGFuZGxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50QXR0cmlidXRlLCBzZXRjb21tZW50QXR0cmlidXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUluZHVzdHJ5LCBzZXRIYW5kbGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEluZHVzdHJ5LCBzZXRjb21tZW50SW5kdXN0cnldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ291bnRyeSwgc2V0SGFuZGxlQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudENvdW50cnksIHNldGNvbW1lbnRDb3VudHJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUN1cnJlbmN5LCBzZXRIYW5kbGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEN1cnJlbmN5LCBzZXRjb21tZW50Q3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlT2ZmaWNlLCBzZXRIYW5kbGVPZmZpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRPZmZpY2UsIHNldGNvbW1lbnRPZmZpY2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtNYXNzdGF0dXMsIHNldE1hc3N0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmQsIHNldGluZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RyYWZmaWMsIHNldHRyYWZmaWNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtNYXNjdXJyZW5jeSwgc2V0TWFzY3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvZmZpY2UsIHNldG9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYXNFcnJvcm1hcywgc2V0RXJyb3JzbWFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmZXRjaERhdGFNYXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyL1wiKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEyLCBcImRkZGRkZGRkZGRkZGRkZGRkXCIpO1xyXG4gICAgICAgIHNldE1hc3N0YXR1cyhkYXRhMlswXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50U3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50VHlwZShkYXRhMlsyXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRpbmQoZGF0YTJbNF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEluZHVzdHJ5KGRhdGEyWzRdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudENvdW50cnkoZGF0YTJbNV0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEN1cnJlbmN5KGRhdGEyWzZdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldG9mZmljZShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50T2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yc21hcyhlcnIpKTtcclxuICB9O1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnREaWRNb3VudFwiKTtcclxuICAgIGZldGNoRGF0YU1hc3RlcigpO1xyXG4gIH0sIFswXSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coTWFzc3RhdHVzLnRvU3RyaW5nKCksIFwiQVJSQVl0b1N0cmluZ1wiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QsIFwiUkVRVUVTVFwiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcW51bWJlcixcIk5VTUJFUlwiKTtcclxuICAvLyAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci8ke3JlcW51bWJlcn1gLCByZXF1ZXN0KVxyXG4gIC8vICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gIC8vICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIC8vICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgIC8vIFJvdXRlci5wdXNoKFwiTWFzdGVyVGFibGVzXCIpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBwb3N0RGF0YSA9IChyZXF1ZXN0LCByZXFudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gICAgLy8gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgICAvLyAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy8gICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgICAvLyAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBzdGF0dXNSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJTVEFUVVNcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBNYXNzdGF0dXMudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50U3RhdHVzLnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBxdWFsaXR5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiUVVBTElUWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHF1YWxpdHkudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50UXVhbGl0eSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHR5cGVSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJMSU5LX1RZUEVcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiB0eXBlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudFR5cGUsXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGF0dHJpYnV0ZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfQVRUUklCVVRFXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogYXR0cmlidXRlLnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEF0dHJpYnV0ZSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgaW5kdXN0cnlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJJTkRVU1RSWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IGluZC50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRJbmR1c3RyeSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgY291bnRyeVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIlRSQUZGSUNfQ09VTlRSWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHRyYWZmaWMudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50Q291bnRyeSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgY3VycmVuY3lSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJDVVJSRU5DWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IE1hc2N1cnJlbmN5LnRvU3RyaW5nKCksXHJcbiAgICAgIE1hc3Rlcl9Db21tZW50czogY29tbWVudEN1cnJlbmN5LFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBvZmZpY2VSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJPRkZJQ0VfQ09VTlRSWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IG9mZmljZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRPZmZpY2UsXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyBzdGF0dXNcclxuICBjb25zdCBoYW5kbGVPa1N0YXR1cyA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKHN0YXR1c1JlcXVlc3QsIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFN0YXR1cyA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlU3RhdHVzKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gcXVhbGl0eVxyXG4gIGNvbnN0IGhhbmRsZU9rUXVhbGl0eSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKHF1YWxpdHlSZXF1ZXN0LCAzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gVHlwZVxyXG4gIGNvbnN0IGhhbmRsZU9rVHlwZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKHR5cGVSZXF1ZXN0LCA0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxUeXBlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVUeXBlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gQXR0cmlidXRlXHJcbiAgY29uc3QgaGFuZGxlT2tBdHRyaWJ1dGUgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShhdHRyaWJ1dGVSZXF1ZXN0LCA1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxBdHRyaWJ1dGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUF0dHJpYnV0ZShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIFR5cGVcclxuICBjb25zdCBoYW5kbGVPa0luZHVzdHJ5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoaW5kdXN0cnlSZXF1ZXN0LCA2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxJbmR1c3RyeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyB0cmFmZmljIGNvdW50cnlcclxuICBjb25zdCBoYW5kbGVPa0NvdW50cnkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShjb3VudHJ5UmVxdWVzdCwgNyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsQ291bnRyeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIEN1cnJlbmN5XHJcbiAgY29uc3QgaGFuZGxlT2tDdXJyZW5jeSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGN1cnJlbmN5UmVxdWVzdCwgOCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsQ3VycmVuY3kgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZUN1cnJlbmN5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gT2ZmaWNlIENvdW50cnlcclxuICBjb25zdCBoYW5kbGVPa09mZmljZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKG9mZmljZVJlcXVlc3QsIDkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbE9mZmljZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHN0YXR1cyAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJTdGF0dXNcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlU3RhdHVzfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rU3RhdHVzfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxTdGF0dXN9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtNYXNzdGF0dXMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y29tbWVudFN0YXR1cy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRjb21tZW50U3RhdHVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRTdGF0dXMuc3BsaWNlKGtleSwgMSwgY29tbWVudEhhbmRsZVN0YXR1cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudFN0YXR1cyxcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtNYXNzdGF0dXMubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZVN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaGFuZGxlU3RhdHVzKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBDb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50SGFuZGxlU3RhdHVzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50SGFuZGxlU3RhdHVzKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1hc3N0YXR1cyhbLi4uTWFzc3RhdHVzLCBoYW5kbGVTdGF0dXNdKTtcclxuICAgICAgICAgICAgc2V0Y29tbWVudFN0YXR1cyhbLi4uY29tbWVudFN0YXR1cywgY29tbWVudEhhbmRsZVN0YXR1c10pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhNYXNzdGF0dXMsIFwiTUFBU3Nzc3Nzc3Nzc3NcIiwgY29tbWVudEhhbmRsZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ09ORklSTScsXHJcbiAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50U3RhdHVzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50U3RhdHVzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBxdWFsaXR5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlF1YWxpdHlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlUXVhbGl0eX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa1F1YWxpdHl9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbFF1YWxpdHl9XHJcbiAgICAgID5cclxuICAgICAgICB7cXVhbGl0eS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7cXVhbGl0eS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlUXVhbGl0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFF1YWxpdHkoWy4uLnF1YWxpdHksIGhhbmRsZVF1YWxpdHldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWFsaXR5KTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5TdGF0dXMgQ29tbWVudDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50UXVhbGl0eX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0eXBlICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlR5cGVcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlVHlwZX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa1R5cGV9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbFR5cGV9XHJcbiAgICAgID5cclxuICAgICAgICB7dHlwZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT57a2V5fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19PntlbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlVHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldHR5cGUoWy4uLnR5cGUsIGhhbmRsZVR5cGVdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50VHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGF0dHJpYnV0ZSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJBdHRyaWJ1dGVcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQXR0cmlidXRlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQXR0cmlidXRlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxBdHRyaWJ1dGV9XHJcbiAgICAgID5cclxuICAgICAgICB7YXR0cmlidXRlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHthdHRyaWJ1dGUubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUF0dHJpYnV0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGF0dHJpYnV0ZShbLi4uYXR0cmlidXRlLCBoYW5kbGVBdHRyaWJ1dGVdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRBdHRyaWJ1dGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBpbmR1c3RyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJJbmR1c3RyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVJbmR1c3RyeX1cclxuICAgICAgICBvbk9rPXtoYW5kbGVPa0luZHVzdHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxJbmR1c3RyeX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbmQubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge2luZC5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlSW5kdXN0cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRpbmQoWy4uLmluZCwgaGFuZGxlSW5kdXN0cnldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmQpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRJbmR1c3RyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEluZHVzdHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdHJhZmZpYyBjb3VudHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlRyYWZmaWMgQ291bnRyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVDb3VudHJ5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQ291bnRyeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQ291bnRyeX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0cmFmZmljLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHt0cmFmZmljLmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVDb3VudHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0dHJhZmZpYyhbLi4udHJhZmZpYywgaGFuZGxlQ291bnRyeV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYWZmaWMpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRDb3VudHJ5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50Q291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGN1cnJlbmN5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkN1cnJlbmN5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUN1cnJlbmN5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQ3VycmVuY3l9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEN1cnJlbmN5fVxyXG4gICAgICA+XHJcbiAgICAgICAge01hc2N1cnJlbmN5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtNYXNjdXJyZW5jeS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQ3VycmVuY3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRNYXNjdXJyZW5jeShbLi4uTWFzY3VycmVuY3ksIGhhbmRsZUN1cnJlbmN5XSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coTWFzY3VycmVuY3kpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRDdXJyZW5jeX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgb2ZmaWNlIGNvdW50cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiT2ZmaWNlIENvdW50cnlcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlT2ZmaWNlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rT2ZmaWNlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxPZmZpY2V9XHJcbiAgICAgID5cclxuICAgICAgICB7b2ZmaWNlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PntrZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+e2VsfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtvZmZpY2UubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZU9mZmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldG9mZmljZShbLi4ub2ZmaWNlLCBoYW5kbGVPZmZpY2VdKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvZmZpY2UpO1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRPZmZpY2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRPZmZpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxoMT5NYXN0ZXJzIFRhYmxlczwvaDE+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlU3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdGF0dXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVRdWFsaXR5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIFF1YWxpdHlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVUeXBlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMaW5rIFR5cGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVBdHRyaWJ1dGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgQXR0cmlidXRlXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUluZHVzdHJ5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBJbmR1c3RyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFRyYWZmaWMgQ291bnRyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUN1cnJlbmN5KHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDdXJyZW5jeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZU9mZmljZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgT2ZmaWNlIENvdW50cnlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyVGFibGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9