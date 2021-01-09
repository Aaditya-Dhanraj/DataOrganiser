(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./routes/AddNew/index.js":
/*!********************************!*\
  !*** ./routes/AddNew/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import axios from axios;

var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;

var AddNew = function AddNew() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Da = _useState3[0],
      setDA = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Dr = _useState4[0],
      setDR = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Url = _useState5[0],
      setURL = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      quantity = _useState6[0],
      setQuantity = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkA = _useState7[0],
      setLinkA = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkB = _useState8[0],
      setLinkB = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkC = _useState9[0],
      setLinkC = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkD = _useState10[0],
      setLinkD = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkE = _useState11[0],
      setLinkE = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkF = _useState12[0],
      setLinkF = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkG = _useState13[0],
      setLinkG = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkH = _useState14[0],
      setLinkH = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkI = _useState15[0],
      setLinkI = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkJ = _useState16[0],
      setLinkJ = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      domainComments = _useState17[0],
      setDomainComments = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkType = _useState18[0],
      setLinkType = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkAttribute = _useState19[0],
      setLinkAttribute = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      refDomains = _useState20[0],
      setRefDomains = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      industry = _useState21[0],
      setIndustry = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      trafficCountry = _useState22[0],
      setTrafficCountry = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      semrush = _useState23[0],
      setSemrush = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      ahref = _useState24[0],
      setAhref = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      currency = _useState25[0],
      setCurrency = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      original = _useState26[0],
      setOriginal = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      negotiated = _useState27[0],
      setNegotiated = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      officeCountry = _useState28[0],
      setOfficeCountry = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      costComments = _useState29[0],
      setCostComments = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactDetailsName = _useState30[0],
      setContactDetailsName = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactEmailA = _useState31[0],
      setContactEmailA = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactEmailB = _useState32[0],
      setContactEmailB = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactEmailC = _useState33[0],
      setContactEmailC = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactPhoneA = _useState34[0],
      setContactPhoneA = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactPhoneB = _useState35[0],
      setContactPhoneB = _useState35[1]; //////////////////////////


  var _useState36 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      Masquality = _useState36[0],
      setMasquality = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      Masstatus = _useState37[0],
      setMasstatus = _useState37[1];

  var _useState38 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      type = _useState38[0],
      settype = _useState38[1];

  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      attribute = _useState39[0],
      setattribute = _useState39[1];

  var _useState40 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      ind = _useState40[0],
      setind = _useState40[1];

  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      traffic = _useState41[0],
      settraffic = _useState41[1];

  var _useState42 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      Mascurrency = _useState42[0],
      setMascurrency = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      country = _useState43[0],
      setcountry = _useState43[1];

  var _useState44 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasErrormas = _useState44[0],
      setErrorsmas = _useState44[1];

  var fetchDataMaster = function fetchDataMaster() {
    fetch("http://localhost:5000/api/v1/master/").then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        var data2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.json();

              case 2:
                data2 = _context.sent;
                console.log(data2, "ddddddddddddddddd");
                setMasstatus(data2[0].Master_Table.split(","));
                setMasquality(data2[1].Master_Table.split(","));
                settype(data2[2].Master_Table.split(","));
                setattribute(data2[3].Master_Table.split(","));
                setind(data2[4].Master_Table.split(","));
                settraffic(data2[5].Master_Table.split(","));
                setMascurrency(data2[6].Master_Table.split(","));
                setcountry(data2[7].Master_Table.split(","));

              case 12:
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
  };

  function handleChange(value) {
    console.log(value, "value");
    setStatus(value);
  }

  function handleChangeQuality(valueQuality) {
    console.log(valueQuality, "quality");
    setQuantity(valueQuality);
  }

  function handleChangeLinkType(valueLinkType) {
    console.log(valueLinkType, "linkType");
    setLinkType(valueLinkType);
  }

  function handleChangeLinkAttri(valueLinkAttri) {
    console.log(valueLinkAttri, "attribute");
    setLinkAttribute(valueLinkAttri);
  }

  function handleChangeCurr(valuecurr) {
    console.log(valuecurr, "currency");
    setCurrency(valuecurr);
  }

  function handleChangeMulti(valueCountry) {
    console.log(valueCountry, "industry");
    setIndustry(valueCountry.toString());
  }

  function handleChangeCountry(valueSingle) {
    console.log("selected ".concat(valueSingle));
    setOfficeCountry(valueSingle);
  }

  function handleChangeMultiOne(valueMultiOne) {
    console.log(valueMultiOne, "trafficC");
    setTrafficCountry(valueMultiOne.toString()); // let obj = { ...FormData };
    // obj.Domain_traffic_Country = valueMultiOne.toString();
    // setFormData({ ...obj });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("componentDidMount");
    fetchDataMaster();
  }, [0]);

  var postData = function postData() {
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Domain_Name: name,
        Domain_Status: status,
        Domain_DA: Da,
        Domain_DR: Dr,
        Domain_URL: Url,
        Domain_Quality: quantity,
        Domain_Link_SampleA: linkA,
        Domain_Link_SampleB: linkB,
        Domain_Link_SampleC: linkC,
        Domain_Link_SampleD: linkD,
        Domain_Link_SampleE: linkE,
        Domain_Link_SampleF: linkF,
        Domain_Link_SampleG: linkG,
        Domain_Link_SampleH: linkH,
        Domain_Link_SampleI: linkI,
        Domain_Link_SampleJ: linkJ,
        Domain_Comments: domainComments,
        Domain_Link_Type: linkType,
        Domain_Link_Attribute: linkAttribute,
        Domain_RefDomCount: refDomains,
        Domain_Industry: industry,
        Domain_traffic_Country: trafficCountry,
        Domain_SEMRush: semrush,
        Domain_AHRef: ahref,
        Domain_Currency: currency,
        Domain_Cost_Original: original,
        Domain_Cost_Nego: negotiated,
        Domain_Office_Country: officeCountry,
        Domain_Cost_Comments: costComments,
        Domain_Contact_Person: contactDetailsName,
        Domain_Contact_EmailA: contactEmailA,
        Domain_Contact_EmailB: contactEmailB,
        Domain_Contact_EmailC: contactEmailC,
        Domain_Contact_PhoneA: contactPhoneA,
        Domain_Contact_PhoneB: contactPhoneB
      })
    };
    fetch("http://localhost:5000/api/v1/domain/", requestOptions).then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var data, error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
                console.log("data posted successfully");

              case 7:
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
    });
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("all_domain");
  };

  return __jsx("div", null, console.log(status), __jsx("h2", {
    id: "domain"
  }, "Domain Details"), __jsx("div", {
    style: {}
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "NAME"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: name,
    onChange: function onChange(e) {
      setName(e.target.value);
    }
  }), __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "STATUS"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChange
  }, Masstatus.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  })), __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "DA"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: Da,
    onChange: function onChange(e) {
      setDA(e.target.value);
    }
  }), __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "DR"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: Dr,
    onChange: function onChange(e) {
      setDR(e.target.value);
    }
  })), __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "100%"
    }
  }, __jsx("div", {
    style: {}
  }, __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "URL:"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: Url,
    onChange: function onChange(e) {
      setURL(e.target.value);
    }
  })), __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Quality"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeQuality
  }, Masquality.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))))), __jsx("div", {
    style: {}
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Samples"), __jsx("div", null, __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkA,
    onChange: function onChange(e) {
      setLinkA(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkB,
    onChange: function onChange(e) {
      setLinkB(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkC,
    onChange: function onChange(e) {
      setLinkC(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkD,
    onChange: function onChange(e) {
      setLinkD(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkE,
    onChange: function onChange(e) {
      setLinkE(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkF,
    onChange: function onChange(e) {
      setLinkF(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkG,
    onChange: function onChange(e) {
      setLinkG(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkH,
    onChange: function onChange(e) {
      setLinkH(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkI,
    onChange: function onChange(e) {
      setLinkI(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: linkJ,
    onChange: function onChange(e) {
      setLinkJ(e.target.value);
    }
  }))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Domain Comments"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: domainComments,
    onChange: function onChange(e) {
      setDomainComments(e.target.value);
    }
  })), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  }, __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Type"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeLinkType
  }, type.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Attribute"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeLinkAttri
  }, attribute.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Ref Domains"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px"
    },
    value: refDomains,
    onChange: function onChange(e) {
      setRefDomains(e.target.value);
    }
  }))), __jsx("div", {
    style: {
      marginBottom: "50px"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Industry"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    defaultValue: "0",
    onChange: handleChangeMulti
  }, ind.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("h2", {
    id: "traffic"
  }, "Traffic Details"), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Traffic Country"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    defaultValue: "0",
    onChange: handleChangeMultiOne
  }, traffic.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "50px"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "SEMRUSH Traffic"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px"
    },
    value: semrush,
    onChange: function onChange(e) {
      setSemrush(e.target.value);
    }
  })), __jsx("div", {
    style: {
      paddingLeft: "50px"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "AHREF Traffic"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px"
    },
    value: ahref,
    onChange: function onChange(e) {
      setAhref(e.target.value);
    }
  }))), __jsx("h2", {
    style: {
      marginTop: "50px"
    },
    id: "cost"
  }, "Cost Details"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly"
    }
  }, __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Currency"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeCurr
  }, Mascurrency.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Original"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px"
    },
    value: original,
    onChange: function onChange(e) {
      setOriginal(e.target.value);
    }
  })), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Negotiated"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px"
    },
    value: negotiated,
    onChange: function onChange(e) {
      setNegotiated(e.target.value);
    }
  }))), __jsx("div", {
    style: {
      width: "fit-content"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Office Country"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeCountry
  }, country.map(function (el, key) {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Cost Comments"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: costComments,
    onChange: function onChange(e) {
      setCostComments(e.target.value);
    }
  })), __jsx("h2", {
    style: {
      marginTop: "50px"
    },
    id: "contact"
  }, "Contact Details"), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Name"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: contactDetailsName,
    onChange: function onChange(e) {
      setContactDetailsName(e.target.value);
    }
  })), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Email"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: contactEmailA,
    onChange: function onChange(e) {
      setContactEmailA(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: contactEmailB,
    onChange: function onChange(e) {
      setContactEmailB(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "5px",
      width: "100%"
    },
    value: contactEmailC,
    onChange: function onChange(e) {
      setContactEmailC(e.target.value);
    }
  })), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Phone"), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "25px",
      width: "100%"
    },
    value: contactPhoneA,
    onChange: function onChange(e) {
      setContactPhoneA(e.target.value);
    }
  }), __jsx("input", {
    style: {
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "25px",
      width: "100%"
    },
    value: contactPhoneB,
    onChange: function onChange(e) {
      setContactPhoneB(e.target.value);
    }
  })), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, __jsx("button", {
    style: {
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "white",
      fontWeight: "bold",
      marginBottom: "10px"
    },
    onClick: function onClick() {
      postData();
    }
  }, "Add Details")));
};

_s(AddNew, "bsuXJ1AFFIsoFuzljIHHjKKNvy4=");

_c = AddNew;
/* harmony default export */ __webpack_exports__["default"] = (AddNew);

var _c;

$RefreshReg$(_c, "AddNew");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL0FkZE5ldy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJBZGROZXciLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiRGEiLCJzZXREQSIsIkRyIiwic2V0RFIiLCJVcmwiLCJzZXRVUkwiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwibGlua0EiLCJzZXRMaW5rQSIsImxpbmtCIiwic2V0TGlua0IiLCJsaW5rQyIsInNldExpbmtDIiwibGlua0QiLCJzZXRMaW5rRCIsImxpbmtFIiwic2V0TGlua0UiLCJsaW5rRiIsInNldExpbmtGIiwibGlua0ciLCJzZXRMaW5rRyIsImxpbmtIIiwic2V0TGlua0giLCJsaW5rSSIsInNldExpbmtJIiwibGlua0oiLCJzZXRMaW5rSiIsImRvbWFpbkNvbW1lbnRzIiwic2V0RG9tYWluQ29tbWVudHMiLCJsaW5rVHlwZSIsInNldExpbmtUeXBlIiwibGlua0F0dHJpYnV0ZSIsInNldExpbmtBdHRyaWJ1dGUiLCJyZWZEb21haW5zIiwic2V0UmVmRG9tYWlucyIsImluZHVzdHJ5Iiwic2V0SW5kdXN0cnkiLCJ0cmFmZmljQ291bnRyeSIsInNldFRyYWZmaWNDb3VudHJ5Iiwic2VtcnVzaCIsInNldFNlbXJ1c2giLCJhaHJlZiIsInNldEFocmVmIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsIm9yaWdpbmFsIiwic2V0T3JpZ2luYWwiLCJuZWdvdGlhdGVkIiwic2V0TmVnb3RpYXRlZCIsIm9mZmljZUNvdW50cnkiLCJzZXRPZmZpY2VDb3VudHJ5IiwiY29zdENvbW1lbnRzIiwic2V0Q29zdENvbW1lbnRzIiwiY29udGFjdERldGFpbHNOYW1lIiwic2V0Q29udGFjdERldGFpbHNOYW1lIiwiY29udGFjdEVtYWlsQSIsInNldENvbnRhY3RFbWFpbEEiLCJjb250YWN0RW1haWxCIiwic2V0Q29udGFjdEVtYWlsQiIsImNvbnRhY3RFbWFpbEMiLCJzZXRDb250YWN0RW1haWxDIiwiY29udGFjdFBob25lQSIsInNldENvbnRhY3RQaG9uZUEiLCJjb250YWN0UGhvbmVCIiwic2V0Q29udGFjdFBob25lQiIsIk1hc3F1YWxpdHkiLCJzZXRNYXNxdWFsaXR5IiwiTWFzc3RhdHVzIiwic2V0TWFzc3RhdHVzIiwidHlwZSIsInNldHR5cGUiLCJhdHRyaWJ1dGUiLCJzZXRhdHRyaWJ1dGUiLCJpbmQiLCJzZXRpbmQiLCJ0cmFmZmljIiwic2V0dHJhZmZpYyIsIk1hc2N1cnJlbmN5Iiwic2V0TWFzY3VycmVuY3kiLCJjb3VudHJ5Iiwic2V0Y291bnRyeSIsImhhc0Vycm9ybWFzIiwic2V0RXJyb3JzbWFzIiwiZmV0Y2hEYXRhTWFzdGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiZXJyIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VRdWFsaXR5IiwidmFsdWVRdWFsaXR5IiwiaGFuZGxlQ2hhbmdlTGlua1R5cGUiLCJ2YWx1ZUxpbmtUeXBlIiwiaGFuZGxlQ2hhbmdlTGlua0F0dHJpIiwidmFsdWVMaW5rQXR0cmkiLCJoYW5kbGVDaGFuZ2VDdXJyIiwidmFsdWVjdXJyIiwiaGFuZGxlQ2hhbmdlTXVsdGkiLCJ2YWx1ZUNvdW50cnkiLCJ0b1N0cmluZyIsImhhbmRsZUNoYW5nZUNvdW50cnkiLCJ2YWx1ZVNpbmdsZSIsImhhbmRsZUNoYW5nZU11bHRpT25lIiwidmFsdWVNdWx0aU9uZSIsInVzZUVmZmVjdCIsInBvc3REYXRhIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJEb21haW5fTmFtZSIsIkRvbWFpbl9TdGF0dXMiLCJEb21haW5fREEiLCJEb21haW5fRFIiLCJEb21haW5fVVJMIiwiRG9tYWluX1F1YWxpdHkiLCJEb21haW5fTGlua19TYW1wbGVBIiwiRG9tYWluX0xpbmtfU2FtcGxlQiIsIkRvbWFpbl9MaW5rX1NhbXBsZUMiLCJEb21haW5fTGlua19TYW1wbGVEIiwiRG9tYWluX0xpbmtfU2FtcGxlRSIsIkRvbWFpbl9MaW5rX1NhbXBsZUYiLCJEb21haW5fTGlua19TYW1wbGVHIiwiRG9tYWluX0xpbmtfU2FtcGxlSCIsIkRvbWFpbl9MaW5rX1NhbXBsZUkiLCJEb21haW5fTGlua19TYW1wbGVKIiwiRG9tYWluX0NvbW1lbnRzIiwiRG9tYWluX0xpbmtfVHlwZSIsIkRvbWFpbl9MaW5rX0F0dHJpYnV0ZSIsIkRvbWFpbl9SZWZEb21Db3VudCIsIkRvbWFpbl9JbmR1c3RyeSIsIkRvbWFpbl90cmFmZmljX0NvdW50cnkiLCJEb21haW5fU0VNUnVzaCIsIkRvbWFpbl9BSFJlZiIsIkRvbWFpbl9DdXJyZW5jeSIsIkRvbWFpbl9Db3N0X09yaWdpbmFsIiwiRG9tYWluX0Nvc3RfTmVnbyIsIkRvbWFpbl9PZmZpY2VfQ291bnRyeSIsIkRvbWFpbl9Db3N0X0NvbW1lbnRzIiwiRG9tYWluX0NvbnRhY3RfUGVyc29uIiwiRG9tYWluX0NvbnRhY3RfRW1haWxBIiwiRG9tYWluX0NvbnRhY3RfRW1haWxCIiwiRG9tYWluX0NvbnRhY3RfRW1haWxDIiwiRG9tYWluX0NvbnRhY3RfUGhvbmVBIiwiRG9tYWluX0NvbnRhY3RfUGhvbmVCIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJlcnJvciIsIm1lc3NhZ2UiLCJQcm9taXNlIiwicmVqZWN0Iiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwiZm9udFdlaWdodCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImUiLCJ0YXJnZXQiLCJtYXAiLCJlbCIsImtleSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5U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RUFBRSxNQUpQO0FBS0xJLGtCQUFZLEVBQUU7QUFMVCxLQURUO0FBUUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2J6RCxjQUFRO0FBQ1Q7QUFWSCxtQkFQRixDQS9nQkYsQ0FERjtBQXdpQkQsQ0FsdEJEOztHQUFNdkgsTTs7S0FBQUEsTTtBQW10QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIGF4aW9zO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IEFkZE5ldyA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0RhLCBzZXREQV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbRHIsIHNldERSXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtVcmwsIHNldFVSTF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rQSwgc2V0TGlua0FdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtCLCBzZXRMaW5rQl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0MsIHNldExpbmtDXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rRCwgc2V0TGlua0RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtFLCBzZXRMaW5rRV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0YsIHNldExpbmtGXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rRywgc2V0TGlua0ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtILCBzZXRMaW5rSF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0ksIHNldExpbmtJXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rSiwgc2V0TGlua0pdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RvbWFpbkNvbW1lbnRzLCBzZXREb21haW5Db21tZW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua1R5cGUsIHNldExpbmtUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rQXR0cmlidXRlLCBzZXRMaW5rQXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWZEb21haW5zLCBzZXRSZWZEb21haW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbmR1c3RyeSwgc2V0SW5kdXN0cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RyYWZmaWNDb3VudHJ5LCBzZXRUcmFmZmljQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VtcnVzaCwgc2V0U2VtcnVzaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWhyZWYsIHNldEFocmVmXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29yaWdpbmFsLCBzZXRPcmlnaW5hbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmVnb3RpYXRlZCwgc2V0TmVnb3RpYXRlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2ZmaWNlQ291bnRyeSwgc2V0T2ZmaWNlQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29zdENvbW1lbnRzLCBzZXRDb3N0Q29tbWVudHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3REZXRhaWxzTmFtZSwgc2V0Q29udGFjdERldGFpbHNOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RW1haWxBLCBzZXRDb250YWN0RW1haWxBXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RW1haWxCLCBzZXRDb250YWN0RW1haWxCXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RW1haWxDLCBzZXRDb250YWN0RW1haWxDXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0UGhvbmVBLCBzZXRDb250YWN0UGhvbmVBXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0UGhvbmVCLCBzZXRDb250YWN0UGhvbmVCXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtNYXNxdWFsaXR5LCBzZXRNYXNxdWFsaXR5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbTWFzc3RhdHVzLCBzZXRNYXNzdGF0dXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmQsIHNldGluZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RyYWZmaWMsIHNldHRyYWZmaWNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtNYXNjdXJyZW5jeSwgc2V0TWFzY3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRjb3VudHJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGFzRXJyb3JtYXMsIHNldEVycm9yc21hc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0TWFzc3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldE1hc3F1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0aW5kKGRhdGEyWzRdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y291bnRyeShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcnNtYXMoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgXCJ2YWx1ZVwiKTtcclxuICAgIHNldFN0YXR1cyh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VRdWFsaXR5KHZhbHVlUXVhbGl0eSkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVRdWFsaXR5LCBcInF1YWxpdHlcIik7XHJcbiAgICBzZXRRdWFudGl0eSh2YWx1ZVF1YWxpdHkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VMaW5rVHlwZSh2YWx1ZUxpbmtUeXBlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUxpbmtUeXBlLCBcImxpbmtUeXBlXCIpO1xyXG4gICAgc2V0TGlua1R5cGUodmFsdWVMaW5rVHlwZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VMaW5rQXR0cmkodmFsdWVMaW5rQXR0cmkpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlTGlua0F0dHJpLCBcImF0dHJpYnV0ZVwiKTtcclxuICAgIHNldExpbmtBdHRyaWJ1dGUodmFsdWVMaW5rQXR0cmkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VDdXJyKHZhbHVlY3Vycikge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVjdXJyLCBcImN1cnJlbmN5XCIpO1xyXG4gICAgc2V0Q3VycmVuY3kodmFsdWVjdXJyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTXVsdGkodmFsdWVDb3VudHJ5KSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUNvdW50cnksIFwiaW5kdXN0cnlcIik7XHJcbiAgICBzZXRJbmR1c3RyeSh2YWx1ZUNvdW50cnkudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VDb3VudHJ5KHZhbHVlU2luZ2xlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZVNpbmdsZX1gKTtcclxuICAgIHNldE9mZmljZUNvdW50cnkodmFsdWVTaW5nbGUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VNdWx0aU9uZSh2YWx1ZU11bHRpT25lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZU11bHRpT25lLCBcInRyYWZmaWNDXCIpO1xyXG4gICAgc2V0VHJhZmZpY0NvdW50cnkodmFsdWVNdWx0aU9uZS50b1N0cmluZygpKTtcclxuICAgIC8vIGxldCBvYmogPSB7IC4uLkZvcm1EYXRhIH07XHJcbiAgICAvLyBvYmouRG9tYWluX3RyYWZmaWNfQ291bnRyeSA9IHZhbHVlTXVsdGlPbmUudG9TdHJpbmcoKTtcclxuICAgIC8vIHNldEZvcm1EYXRhKHsgLi4ub2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICBmZXRjaERhdGFNYXN0ZXIoKTtcclxuICB9LCBbMF0pO1xyXG5cclxuICBjb25zdCBwb3N0RGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBEb21haW5fTmFtZTogbmFtZSxcclxuICAgICAgICBEb21haW5fU3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgRG9tYWluX0RBOiBEYSxcclxuICAgICAgICBEb21haW5fRFI6IERyLFxyXG4gICAgICAgIERvbWFpbl9VUkw6IFVybCxcclxuICAgICAgICBEb21haW5fUXVhbGl0eTogcXVhbnRpdHksXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQTogbGlua0EsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQjogbGlua0IsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQzogbGlua0MsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRDogbGlua0QsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRTogbGlua0UsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRjogbGlua0YsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRzogbGlua0csXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSDogbGlua0gsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSTogbGlua0ksXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSjogbGlua0osXHJcbiAgICAgICAgRG9tYWluX0NvbW1lbnRzOiBkb21haW5Db21tZW50cyxcclxuICAgICAgICBEb21haW5fTGlua19UeXBlOiBsaW5rVHlwZSxcclxuICAgICAgICBEb21haW5fTGlua19BdHRyaWJ1dGU6IGxpbmtBdHRyaWJ1dGUsXHJcbiAgICAgICAgRG9tYWluX1JlZkRvbUNvdW50OiByZWZEb21haW5zLFxyXG4gICAgICAgIERvbWFpbl9JbmR1c3RyeTogaW5kdXN0cnksXHJcbiAgICAgICAgRG9tYWluX3RyYWZmaWNfQ291bnRyeTogdHJhZmZpY0NvdW50cnksXHJcbiAgICAgICAgRG9tYWluX1NFTVJ1c2g6IHNlbXJ1c2gsXHJcbiAgICAgICAgRG9tYWluX0FIUmVmOiBhaHJlZixcclxuICAgICAgICBEb21haW5fQ3VycmVuY3k6IGN1cnJlbmN5LFxyXG4gICAgICAgIERvbWFpbl9Db3N0X09yaWdpbmFsOiBvcmlnaW5hbCxcclxuICAgICAgICBEb21haW5fQ29zdF9OZWdvOiBuZWdvdGlhdGVkLFxyXG4gICAgICAgIERvbWFpbl9PZmZpY2VfQ291bnRyeTogb2ZmaWNlQ291bnRyeSxcclxuICAgICAgICBEb21haW5fQ29zdF9Db21tZW50czogY29zdENvbW1lbnRzLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X1BlcnNvbjogY29udGFjdERldGFpbHNOYW1lLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X0VtYWlsQTogY29udGFjdEVtYWlsQSxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9FbWFpbEI6IGNvbnRhY3RFbWFpbEIsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfRW1haWxDOiBjb250YWN0RW1haWxDLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X1Bob25lQTogY29udGFjdFBob25lQSxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9QaG9uZUI6IGNvbnRhY3RQaG9uZUIsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9kb21haW4vXCIsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgUm91dGVyLnB1c2goXCJhbGxfZG9tYWluXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y29uc29sZS5sb2coc3RhdHVzKX1cclxuICAgICAgPGgyIGlkPVwiZG9tYWluXCI+RG9tYWluIERldGFpbHM8L2gyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TkFNRTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlNUQVRVUzwvcD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7TWFzc3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERBXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e0RhfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERBKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERSXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e0RyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERSKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5VUkw6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e1VybH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVSTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlF1YWxpdHk8L3A+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUXVhbGl0eX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtNYXNxdWFsaXR5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2tleS50b1N0cmluZygpfT57ZWx9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkxpbmsgU2FtcGxlczwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtBfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtCfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rQihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtDfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rQyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtEfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtFfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtGfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtHfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtIfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rSChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtJfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rSShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtKfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rSihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5Eb21haW4gQ29tbWVudHM8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17ZG9tYWluQ29tbWVudHN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0RG9tYWluQ29tbWVudHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkxpbmsgVHlwZTwvcD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTGlua1R5cGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0eXBlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TGluayBBdHRyaWJ1dGU8L3A+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxpbmtBdHRyaX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2F0dHJpYnV0ZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlJlZiBEb21haW5zPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17cmVmRG9tYWluc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UmVmRG9tYWlucyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkluZHVzdHJ5PC9wPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNdWx0aX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aW5kLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBpZD1cInRyYWZmaWNcIj5UcmFmZmljIERldGFpbHM8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlRyYWZmaWMgQ291bnRyeTwvcD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTXVsdGlPbmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RyYWZmaWMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlNFTVJVU0ggVHJhZmZpYzwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlbXJ1c2h9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlbXJ1c2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkFIUkVGIFRyYWZmaWM8L3A+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXthaHJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0QWhyZWYoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19IGlkPVwiY29zdFwiPlxyXG4gICAgICAgIENvc3QgRGV0YWlsc1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q3VycmVuY3k8L3A+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUN1cnJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtNYXNjdXJyZW5jeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk9yaWdpbmFsPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17b3JpZ2luYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE9yaWdpbmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5lZ290aWF0ZWQ8L3A+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZWdvdGlhdGVkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXROZWdvdGlhdGVkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcImZpdC1jb250ZW50XCIgfX0+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+T2ZmaWNlIENvdW50cnk8L3A+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb3VudHJ5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjb3VudHJ5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q29zdCBDb21tZW50czwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtjb3N0Q29tbWVudHN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29zdENvbW1lbnRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19IGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgIENvbnRhY3QgRGV0YWlsc1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5hbWU8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdERldGFpbHNOYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhY3REZXRhaWxzTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkVtYWlsPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e2NvbnRhY3RFbWFpbEF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29udGFjdEVtYWlsQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdEVtYWlsQn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWN0RW1haWxCKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtjb250YWN0RW1haWxDfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhY3RFbWFpbEMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5QaG9uZTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdFBob25lQX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWN0UGhvbmVBKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdFBob25lQn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWN0UGhvbmVCKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvc3REYXRhKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBEZXRhaWxzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9