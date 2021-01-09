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
    console.log(type.toString(), "ARRAYtoString"); // console.log(request, "REQUEST");
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
      setcommentAttribute([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentType), [commentHandleALL]));
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
      setcommentIndustry([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentType), [commentHandleALL]));
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
      setcomment([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(commentCountry), [commentHandleALL]));
      console.log(traffic);
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success('PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm', 10);
    }
  }, "Add Value")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL01hc3RlclRhYmxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJNYXN0ZXJUYWJsZXMiLCJ1c2VTdGF0ZSIsImlzTW9kYWxWaXNpYmxlU3RhdHVzIiwic2V0SXNNb2RhbFZpc2libGVTdGF0dXMiLCJpc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkiLCJpc01vZGFsVmlzaWJsZVR5cGUiLCJzZXRJc01vZGFsVmlzaWJsZVR5cGUiLCJpc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSIsInNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlIiwiaXNNb2RhbFZpc2libGVJbmR1c3RyeSIsInNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkiLCJpc01vZGFsVmlzaWJsZUNvdW50cnkiLCJzZXRJc01vZGFsVmlzaWJsZUNvdW50cnkiLCJpc01vZGFsVmlzaWJsZUN1cnJlbmN5Iiwic2V0SXNNb2RhbFZpc2libGVDdXJyZW5jeSIsImlzTW9kYWxWaXNpYmxlT2ZmaWNlIiwic2V0SXNNb2RhbFZpc2libGVPZmZpY2UiLCJoYW5kbGVTdGF0dXMiLCJzZXRIYW5kbGVTdGF0dXMiLCJjb21tZW50U3RhdHVzIiwic2V0Y29tbWVudFN0YXR1cyIsImNvbW1lbnRIYW5kbGVBTEwiLCJzZXRjb21tZW50SGFuZGxlQUxMIiwib2xkY29tbWVudCIsInNldG9sZGNvbW1lbnQiLCJvbGRtYXN0ZXIiLCJzZXRvbGRtYXN0ZXIiLCJoYW5kbGVRdWFsaXR5Iiwic2V0SGFuZGxlUXVhbGl0eSIsImNvbW1lbnRRdWFsaXR5Iiwic2V0Y29tbWVudFF1YWxpdHkiLCJoYW5kbGVUeXBlIiwic2V0SGFuZGxlVHlwZSIsImNvbW1lbnRUeXBlIiwic2V0Y29tbWVudFR5cGUiLCJoYW5kbGVBdHRyaWJ1dGUiLCJzZXRIYW5kbGVBdHRyaWJ1dGUiLCJjb21tZW50QXR0cmlidXRlIiwic2V0Y29tbWVudEF0dHJpYnV0ZSIsImhhbmRsZUluZHVzdHJ5Iiwic2V0SGFuZGxlSW5kdXN0cnkiLCJjb21tZW50SW5kdXN0cnkiLCJzZXRjb21tZW50SW5kdXN0cnkiLCJoYW5kbGVDb3VudHJ5Iiwic2V0SGFuZGxlQ291bnRyeSIsImNvbW1lbnRDb3VudHJ5Iiwic2V0Y29tbWVudENvdW50cnkiLCJoYW5kbGVDdXJyZW5jeSIsInNldEhhbmRsZUN1cnJlbmN5IiwiY29tbWVudEN1cnJlbmN5Iiwic2V0Y29tbWVudEN1cnJlbmN5IiwiaGFuZGxlT2ZmaWNlIiwic2V0SGFuZGxlT2ZmaWNlIiwiY29tbWVudE9mZmljZSIsInNldGNvbW1lbnRPZmZpY2UiLCJNYXNzdGF0dXMiLCJzZXRNYXNzdGF0dXMiLCJxdWFsaXR5Iiwic2V0UXVhbGl0eSIsInR5cGUiLCJzZXR0eXBlIiwiYXR0cmlidXRlIiwic2V0YXR0cmlidXRlIiwiaW5kIiwic2V0aW5kIiwidHJhZmZpYyIsInNldHRyYWZmaWMiLCJNYXNjdXJyZW5jeSIsInNldE1hc2N1cnJlbmN5Iiwib2ZmaWNlIiwic2V0b2ZmaWNlIiwiaGFzRXJyb3JtYXMiLCJzZXRFcnJvcnNtYXMiLCJmZXRjaERhdGFNYXN0ZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YTIiLCJjb25zb2xlIiwibG9nIiwiTWFzdGVyX1RhYmxlIiwic3BsaXQiLCJNYXN0ZXJfQ29tbWVudHMiLCJlcnIiLCJ1c2VFZmZlY3QiLCJwb3N0RGF0YSIsInJlcXVlc3QiLCJyZXFudW1iZXIiLCJ0b1N0cmluZyIsInN0YXR1c1JlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJNYXN0ZXJfTmFtZSIsInF1YWxpdHlSZXF1ZXN0IiwidHlwZVJlcXVlc3QiLCJhdHRyaWJ1dGVSZXF1ZXN0IiwiaW5kdXN0cnlSZXF1ZXN0IiwiY291bnRyeVJlcXVlc3QiLCJjdXJyZW5jeVJlcXVlc3QiLCJvZmZpY2VSZXF1ZXN0IiwiaGFuZGxlT2tTdGF0dXMiLCJoYW5kbGVDYW5jZWxTdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZU9rUXVhbGl0eSIsImhhbmRsZUNhbmNlbFF1YWxpdHkiLCJoYW5kbGVPa1R5cGUiLCJoYW5kbGVDYW5jZWxUeXBlIiwiaGFuZGxlT2tBdHRyaWJ1dGUiLCJoYW5kbGVDYW5jZWxBdHRyaWJ1dGUiLCJoYW5kbGVPa0luZHVzdHJ5IiwiaGFuZGxlQ2FuY2VsSW5kdXN0cnkiLCJoYW5kbGVPa0NvdW50cnkiLCJoYW5kbGVDYW5jZWxDb3VudHJ5IiwiaGFuZGxlT2tDdXJyZW5jeSIsImhhbmRsZUNhbmNlbEN1cnJlbmN5IiwiaGFuZGxlT2tPZmZpY2UiLCJoYW5kbGVDYW5jZWxPZmZpY2UiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcCIsImVsIiwia2V5IiwibWFyZ2luQm90dG9tIiwiZ3JpZEdhcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwic3BsaWNlIiwiYm9yZGVyIiwicGFkZGluZyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtZXNzYWdlIiwic3VjY2VzcyIsInNldGNvbW1lbnQiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUNRQSxNLEdBQVdDLDJDLENBQVhELE07QUFDUjs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQytCQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkM7QUFBQSxNQUNsQkMsb0JBRGtCO0FBQUEsTUFDSUMsdUJBREo7O0FBQUEsbUJBRWlDRixzREFBUSxDQUFDLEtBQUQsQ0FGekM7QUFBQSxNQUVsQkcscUJBRmtCO0FBQUEsTUFFS0Msd0JBRkw7O0FBQUEsbUJBRzJCSixzREFBUSxDQUFDLEtBQUQsQ0FIbkM7QUFBQSxNQUdsQkssa0JBSGtCO0FB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QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2J2SCwrQkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0Q7QUFWSCxnQkF0RkYsRUFvR0U7QUFDRSxTQUFLLEVBQUU7QUFDTDZHLGFBQU8sRUFBRSxNQURKO0FBRUxxQixvQkFBYyxFQUFFLFFBRlg7QUFHTEMsWUFBTSxFQUFFLE1BSEg7QUFJTFgsYUFBTyxFQUFFLE1BSko7QUFLTEQsWUFBTSxFQUFFO0FBTEgsS0FEVDtBQVFFLFdBQU8sRUFBRSxtQkFBTTtBQUNickgsNkJBQXVCLENBQUMsSUFBRCxDQUF2QjtBQUNEO0FBVkgsc0JBcEdGLENBNXVCRixDQURGO0FBazJCRCxDQTFuQ0Q7O0dBQU1qQixZOztLQUFBQSxZO0FBNG5DU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy40MGQxNTVlN2UwMzlmYjQyZDk1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVGFibGUsIFRhZywgU3BhY2UsIE1vZGFsLCBCdXR0b24sIFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1hc3RlclRhYmxlcyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVTdGF0dXMsIHNldElzTW9kYWxWaXNpYmxlU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGVRdWFsaXR5LCBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZVR5cGUsIHNldElzTW9kYWxWaXNpYmxlVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQXR0cmlidXRlLCBzZXRJc01vZGFsVmlzaWJsZUF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlSW5kdXN0cnksIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZUNvdW50cnksIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlQ3VycmVuY3ksIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZU9mZmljZSwgc2V0SXNNb2RhbFZpc2libGVPZmZpY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBbaGFuZGxlU3RhdHVzLCBzZXRIYW5kbGVTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRTdGF0dXMsIHNldGNvbW1lbnRTdGF0dXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb21tZW50SGFuZGxlQUxMLCBzZXRjb21tZW50SGFuZGxlQUxMXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbb2xkY29tbWVudCwgc2V0b2xkY29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2xkbWFzdGVyLCBzZXRvbGRtYXN0ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtoYW5kbGVRdWFsaXR5LCBzZXRIYW5kbGVRdWFsaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50UXVhbGl0eSwgc2V0Y29tbWVudFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlVHlwZSwgc2V0SGFuZGxlVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudFR5cGUsIHNldGNvbW1lbnRUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUF0dHJpYnV0ZSwgc2V0SGFuZGxlQXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21tZW50QXR0cmlidXRlLCBzZXRjb21tZW50QXR0cmlidXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUluZHVzdHJ5LCBzZXRIYW5kbGVJbmR1c3RyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEluZHVzdHJ5LCBzZXRjb21tZW50SW5kdXN0cnldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlQ291bnRyeSwgc2V0SGFuZGxlQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudENvdW50cnksIHNldGNvbW1lbnRDb3VudHJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2hhbmRsZUN1cnJlbmN5LCBzZXRIYW5kbGVDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudEN1cnJlbmN5LCBzZXRjb21tZW50Q3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbaGFuZGxlT2ZmaWNlLCBzZXRIYW5kbGVPZmZpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnRPZmZpY2UsIHNldGNvbW1lbnRPZmZpY2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtNYXNzdGF0dXMsIHNldE1hc3N0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmQsIHNldGluZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RyYWZmaWMsIHNldHRyYWZmaWNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtNYXNjdXJyZW5jeSwgc2V0TWFzY3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvZmZpY2UsIHNldG9mZmljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtoYXNFcnJvcm1hcywgc2V0RXJyb3JzbWFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmZXRjaERhdGFNYXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyL1wiKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEyLCBcImRkZGRkZGRkZGRkZGRkZGRkXCIpO1xyXG4gICAgICAgIHNldE1hc3N0YXR1cyhkYXRhMlswXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50U3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50VHlwZShkYXRhMlsyXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfQ29tbWVudHMuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRpbmQoZGF0YTJbNF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEluZHVzdHJ5KGRhdGEyWzRdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudENvdW50cnkoZGF0YTJbNV0uTWFzdGVyX0NvbW1lbnRzLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y29tbWVudEN1cnJlbmN5KGRhdGEyWzZdLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldG9mZmljZShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb21tZW50T2ZmaWNlKGRhdGEyWzddLk1hc3Rlcl9Db21tZW50cy5zcGxpdChcIixcIikpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yc21hcyhlcnIpKTtcclxuICB9O1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnREaWRNb3VudFwiKTtcclxuICAgIGZldGNoRGF0YU1hc3RlcigpO1xyXG4gIH0sIFswXSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vIGNvbnN0IHBvc3REYXRhID0gKHJlcXVlc3QsIHJlcW51bWJlcikgPT4ge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coTWFzc3RhdHVzLnRvU3RyaW5nKCksIFwiQVJSQVl0b1N0cmluZ1wiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3QsIFwiUkVRVUVTVFwiKTtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHJlcW51bWJlcixcIk5VTUJFUlwiKTtcclxuICAvLyAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci8ke3JlcW51bWJlcn1gLCByZXF1ZXN0KVxyXG4gIC8vICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gIC8vICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIC8vICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgIC8vIFJvdXRlci5wdXNoKFwiTWFzdGVyVGFibGVzXCIpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBwb3N0RGF0YSA9IChyZXF1ZXN0LCByZXFudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGUudG9TdHJpbmcoKSwgXCJBUlJBWXRvU3RyaW5nXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxdWVzdCwgXCJSRVFVRVNUXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVxbnVtYmVyLFwiTlVNQkVSXCIpO1xyXG4gICAgLy8gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFzdGVyLyR7cmVxbnVtYmVyfWAsIHJlcXVlc3QpXHJcbiAgICAvLyAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy8gICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgICAvLyAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgYXdhaXQgY29uc29sZS5sb2coXCJkYXRhIHBvc3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnJvci50b1N0cmluZygpIH0pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IhXCIsIGVycm9yKTtcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gUm91dGVyLnB1c2goXCJNYXN0ZXJUYWJsZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBzdGF0dXNSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJTVEFUVVNcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBNYXNzdGF0dXMudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50U3RhdHVzLnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBxdWFsaXR5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiUVVBTElUWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHF1YWxpdHkudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50UXVhbGl0eS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdHlwZVJlcXVlc3QgPSB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIE1hc3Rlcl9OYW1lOiBcIkxJTktfVFlQRVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IHR5cGUudG9TdHJpbmcoKSxcclxuICAgICAgTWFzdGVyX0NvbW1lbnRzOiBjb21tZW50VHlwZS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBhdHRyaWJ1dGVSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJMSU5LX0FUVFJJQlVURVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IGF0dHJpYnV0ZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRBdHRyaWJ1dGUudG9TdHJpbmcoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcbiAgY29uc3QgaW5kdXN0cnlSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJJTkRVU1RSWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IGluZC50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRJbmR1c3RyeS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBjb3VudHJ5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiVFJBRkZJQ19DT1VOVFJZXCIsXHJcbiAgICAgIE1hc3Rlcl9UYWJsZTogdHJhZmZpYy50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRDb3VudHJ5LnRvU3RyaW5nKCksXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IGN1cnJlbmN5UmVxdWVzdCA9IHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgTWFzdGVyX05hbWU6IFwiQ1VSUkVOQ1lcIixcclxuICAgICAgTWFzdGVyX1RhYmxlOiBNYXNjdXJyZW5jeS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRDdXJyZW5jeS50b1N0cmluZygpLFxyXG4gICAgfSksXHJcbiAgfTtcclxuICBjb25zdCBvZmZpY2VSZXF1ZXN0ID0ge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBNYXN0ZXJfTmFtZTogXCJPRkZJQ0VfQ09VTlRSWVwiLFxyXG4gICAgICBNYXN0ZXJfVGFibGU6IG9mZmljZS50b1N0cmluZygpLFxyXG4gICAgICBNYXN0ZXJfQ29tbWVudHM6IGNvbW1lbnRPZmZpY2UudG9TdHJpbmcoKSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIHN0YXR1c1xyXG4gIGNvbnN0IGhhbmRsZU9rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoc3RhdHVzUmVxdWVzdCwgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXMoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBxdWFsaXR5XHJcbiAgY29uc3QgaGFuZGxlT2tRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEocXVhbGl0eVJlcXVlc3QsIDMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFF1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBUeXBlXHJcbiAgY29uc3QgaGFuZGxlT2tUeXBlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEodHlwZVJlcXVlc3QsIDQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbFR5cGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZVR5cGUoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBBdHRyaWJ1dGVcclxuICBjb25zdCBoYW5kbGVPa0F0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGF0dHJpYnV0ZVJlcXVlc3QsIDUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEF0dHJpYnV0ZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQXR0cmlidXRlKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gVHlwZVxyXG4gIGNvbnN0IGhhbmRsZU9rSW5kdXN0cnkgPSAoKSA9PiB7XHJcbiAgICBwb3N0RGF0YShpbmR1c3RyeVJlcXVlc3QsIDYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbEluZHVzdHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVJbmR1c3RyeShmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICB9O1xyXG4gIC8vIHRyYWZmaWMgY291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rQ291bnRyeSA9ICgpID0+IHtcclxuICAgIHBvc3REYXRhKGNvdW50cnlSZXF1ZXN0LCA3KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVDb3VudHJ5KGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG4gIH07XHJcbiAgLy8gQ3VycmVuY3lcclxuICBjb25zdCBoYW5kbGVPa0N1cnJlbmN5ID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEoY3VycmVuY3lSZXF1ZXN0LCA4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWxDdXJyZW5jeSA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3koZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuICAvLyBPZmZpY2UgQ291bnRyeVxyXG4gIGNvbnN0IGhhbmRsZU9rT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgcG9zdERhdGEob2ZmaWNlUmVxdWVzdCwgOSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsT2ZmaWNlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2RhbFZpc2libGVPZmZpY2UoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgc3RhdHVzICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIlN0YXR1c1wiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVTdGF0dXN9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tTdGF0dXN9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbFN0YXR1c31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge01hc3N0YXR1cy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRtYXN0ZXIoTWFzc3RhdHVzLnNwbGljZShrZXksIDEsIGhhbmRsZVN0YXR1cykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXNzdGF0dXMsIFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50U3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZGNvbW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFN0YXR1cy5zcGxpY2Uoa2V5LCAxLCBjb21tZW50SGFuZGxlQUxMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tZW50U3RhdHVzLFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge01hc3N0YXR1cy5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlU3RhdHVzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVTdGF0dXMpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIENvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRIYW5kbGVBTEwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRIYW5kbGVBTEwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0TWFzc3RhdHVzKFsuLi5NYXNzdGF0dXMsIGhhbmRsZVN0YXR1c10pO1xyXG4gICAgICAgICAgICBzZXRjb21tZW50U3RhdHVzKFsuLi5jb21tZW50U3RhdHVzLCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE1hc3N0YXR1cywgXCJNQUFTc3Nzc3Nzc3Nzc1wiLCBjb21tZW50SGFuZGxlQUxMKTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDT05GSVJNJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlN0YXR1cyBDb21tZW50PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRTdGF0dXN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnQgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldGNvbW1lbnRTdGF0dXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHF1YWxpdHkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiUXVhbGl0eVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVRdWFsaXR5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rUXVhbGl0eX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsUXVhbGl0eX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3F1YWxpdHkubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRtYXN0ZXIocXVhbGl0eS5zcGxpY2Uoa2V5LCAxLCBoYW5kbGVRdWFsaXR5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1YWxpdHksIFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRRdWFsaXR5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZGNvbW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFF1YWxpdHkuc3BsaWNlKGtleSwgMSwgY29tbWVudEhhbmRsZUFMTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tbWVudFN0YXR1cyxcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtxdWFsaXR5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVRdWFsaXR5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBDb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50SGFuZGxlQUxMKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50SGFuZGxlQUxMKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFF1YWxpdHkoWy4uLnF1YWxpdHksIGhhbmRsZVF1YWxpdHldKTtcclxuICAgICAgICAgICAgc2V0Y29tbWVudFF1YWxpdHkoWy4uLmNvbW1lbnRRdWFsaXR5LCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1YWxpdHkpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgdHlwZSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJUeXBlXCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZVR5cGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tUeXBlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxUeXBlfVxyXG4gICAgICA+XHJcbiAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt0eXBlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkbWFzdGVyKHR5cGUuc3BsaWNlKGtleSwgMSwgaGFuZGxlVHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlLCBcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50VHlwZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUeXBlLnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlVHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZUFMTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZUFMTCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXR0eXBlKFsuLi50eXBlLCBoYW5kbGVUeXBlXSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnRUeXBlKFsuLi5jb21tZW50VHlwZSwgY29tbWVudEhhbmRsZUFMTF0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGF0dHJpYnV0ZSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJBdHRyaWJ1dGVcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQXR0cmlidXRlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rQXR0cmlidXRlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxBdHRyaWJ1dGV9XHJcbiAgICAgID5cclxuICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7YXR0cmlidXRlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkbWFzdGVyKGF0dHJpYnV0ZS5zcGxpY2Uoa2V5LCAxLCBoYW5kbGVBdHRyaWJ1dGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlLCBcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50QXR0cmlidXRlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZGNvbW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudEF0dHJpYnV0ZS5zcGxpY2Uoa2V5LCAxLCBjb21tZW50SGFuZGxlQUxMKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tZW50U3RhdHVzLFwiaGVsbG9Xb3JsZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge2F0dHJpYnV0ZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQXR0cmlidXRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBDb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50SGFuZGxlQUxMKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50SGFuZGxlQUxMKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldGF0dHJpYnV0ZShbLi4uYXR0cmlidXRlLCBoYW5kbGVBdHRyaWJ1dGVdKTtcclxuICAgICAgICAgICAgc2V0Y29tbWVudEF0dHJpYnV0ZShbLi4uY29tbWVudFR5cGUsIGNvbW1lbnRIYW5kbGVBTExdKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICdQUkVTUyBcIkNhbmNlbFwiIGlmIHlvdSBoYXZlIG1hZGUgYSBtaXN0YWtlIG9yIFBSRVNTIFwiT2tcIiBpZiBDb25maXJtJyxcclxuICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIGluZHVzdHJ5ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB0aXRsZT1cIkluZHVzdHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUluZHVzdHJ5fVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rSW5kdXN0cnl9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbEluZHVzdHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2luZC5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG9sZG1hc3RlcihpbmQuc3BsaWNlKGtleSwgMSwgaGFuZGxlSW5kdXN0cnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kLCBcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50SW5kdXN0cnkubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkY29tbWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50SW5kdXN0cnkuc3BsaWNlKGtleSwgMSwgY29tbWVudEhhbmRsZUFMTClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tbWVudFN0YXR1cyxcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtpbmQubGVuZ3RofVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiLCBwYWRkaW5nOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdmFsdWUgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEhhbmRsZUluZHVzdHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBDb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50SGFuZGxlQUxMKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50SGFuZGxlQUxMKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldGluZChbLi4uaW5kLCBoYW5kbGVJbmR1c3RyeV0pO1xyXG4gICAgICAgICAgICBzZXRjb21tZW50SW5kdXN0cnkoWy4uLmNvbW1lbnRUeXBlLCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZCk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAnUFJFU1MgXCJDYW5jZWxcIiBpZiB5b3UgaGF2ZSBtYWRlIGEgbWlzdGFrZSBvciBQUkVTUyBcIk9rXCIgaWYgQ29uZmlybScsXHJcbiAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFZhbHVlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB0cmFmZmljIGNvdW50cnkgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiVHJhZmZpYyBDb3VudHJ5XCJcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZUNvdW50cnl9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDb3VudHJ5fVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxDb3VudHJ5fVxyXG4gICAgICA+XHJcbiAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt0cmFmZmljLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjUwJSA1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b2xkbWFzdGVyKHRyYWZmaWMuc3BsaWNlKGtleSwgMSwgaGFuZGxlQ291bnRyeSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFmZmljLCBcImhlbGxvV29ybGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50Q291bnRyeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRvbGRjb21tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb3VudHJ5LnNwbGljZShrZXksIDEsIGNvbW1lbnRIYW5kbGVBTEwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbW1lbnRTdGF0dXMsXCJoZWxsb1dvcmxkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICB7dHJhZmZpYy5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlQ291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgQ29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudEhhbmRsZUFMTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tbWVudEhhbmRsZUFMTCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXR0cmFmZmljKFsuLi50cmFmZmljLCBoYW5kbGVDb3VudHJ5XSk7XHJcbiAgICAgICAgICAgIHNldGNvbW1lbnQoWy4uLmNvbW1lbnRDb3VudHJ5LCBjb21tZW50SGFuZGxlQUxMXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYWZmaWMpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBWYWx1ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgY3VycmVuY3kgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ3VycmVuY3lcIlxyXG4gICAgICAgIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlQ3VycmVuY3l9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tDdXJyZW5jeX1cclxuICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsQ3VycmVuY3l9XHJcbiAgICAgID5cclxuICAgICAgICB7TWFzY3VycmVuY3kubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge01hc2N1cnJlbmN5Lmxlbmd0aH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHZhbHVlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRIYW5kbGVDdXJyZW5jeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1hc2N1cnJlbmN5KFsuLi5NYXNjdXJyZW5jeSwgaGFuZGxlQ3VycmVuY3ldKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXNjdXJyZW5jeSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudEN1cnJlbmN5fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50IGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRjb21tZW50Q3VycmVuY3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICBvZmZpY2UgY291bnRyeSAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJPZmZpY2UgQ291bnRyeVwiXHJcbiAgICAgICAgdmlzaWJsZT17aXNNb2RhbFZpc2libGVPZmZpY2V9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2tPZmZpY2V9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbE9mZmljZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtvZmZpY2UubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+e2tleX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiwgcGFkZGluZzogXCI1cHhcIiB9fT57ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIsIG1hcmdpblRvcDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAge29mZmljZS5sZW5ndGh9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIsIHBhZGRpbmc6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB2YWx1ZSBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SGFuZGxlT2ZmaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0b2ZmaWNlKFsuLi5vZmZpY2UsIGhhbmRsZU9mZmljZV0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9mZmljZSk7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgJ1BSRVNTIFwiQ2FuY2VsXCIgaWYgeW91IGhhdmUgbWFkZSBhIG1pc3Rha2Ugb3IgUFJFU1MgXCJPa1wiIGlmIENvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgVmFsdWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+U3RhdHVzIENvbW1lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudE9mZmljZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Y29tbWVudE9mZmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPGgxPk1hc3RlcnMgVGFibGVzPC9oMT5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNNb2RhbFZpc2libGVTdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVF1YWxpdHkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgUXVhbGl0eVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZVR5cGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExpbmsgVHlwZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vZGFsVmlzaWJsZUF0dHJpYnV0ZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTGluayBBdHRyaWJ1dGVcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlSW5kdXN0cnkodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluZHVzdHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQ291bnRyeSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVHJhZmZpYyBDb3VudHJ5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlQ3VycmVuY3kodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEN1cnJlbmN5XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlT2ZmaWNlKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPZmZpY2UgQ291bnRyeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXJUYWJsZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=