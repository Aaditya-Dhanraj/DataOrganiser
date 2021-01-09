(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./routes/Update/index.js":
/*!********************************!*\
  !*** ./routes/Update/index.js ***!
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



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;


var Update = function Update() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var updateID = router.query.updateID;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Da = _useState5[0],
      setDA = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Dr = _useState6[0],
      setDR = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      Url = _useState7[0],
      setURL = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      quality = _useState8[0],
      setQuality = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkA = _useState9[0],
      setLinkA = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkB = _useState10[0],
      setLinkB = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkC = _useState11[0],
      setLinkC = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkD = _useState12[0],
      setLinkD = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkE = _useState13[0],
      setLinkE = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkF = _useState14[0],
      setLinkF = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkG = _useState15[0],
      setLinkG = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkH = _useState16[0],
      setLinkH = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkI = _useState17[0],
      setLinkI = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkJ = _useState18[0],
      setLinkJ = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      domainComments = _useState19[0],
      setDomainComments = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkType = _useState20[0],
      setLinkType = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      linkAttribute = _useState21[0],
      setLinkAttribute = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      refDomains = _useState22[0],
      setRefDomains = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      industry = _useState23[0],
      setIndustry = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      trafficCountry = _useState24[0],
      setTrafficCountry = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      semrush = _useState25[0],
      setSemrush = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      ahref = _useState26[0],
      setAhref = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      currency = _useState27[0],
      setCurrency = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      original = _useState28[0],
      setOriginal = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      negotiated = _useState29[0],
      setNegotiated = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      officeCountry = _useState30[0],
      setOfficeCountry = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      costComments = _useState31[0],
      setCostComments = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactDetailsName = _useState32[0],
      setContactDetailsName = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactEmailA = _useState33[0],
      setContactEmailA = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactEmailB = _useState34[0],
      setContactEmailB = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactEmailC = _useState35[0],
      setContactEmailC = _useState35[1];

  var _useState36 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactPhoneA = _useState36[0],
      setContactPhoneA = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      contactPhoneB = _useState37[0],
      setContactPhoneB = _useState37[1]; //////////////////////////


  var _useState38 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      Masquality = _useState38[0],
      setMasquality = _useState38[1];

  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      Masstatus = _useState39[0],
      setMasstatus = _useState39[1];

  var _useState40 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      type = _useState40[0],
      settype = _useState40[1];

  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      attribute = _useState41[0],
      setattribute = _useState41[1];

  var _useState42 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      ind = _useState42[0],
      setind = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      traffic = _useState43[0],
      settraffic = _useState43[1];

  var _useState44 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      Mascurrency = _useState44[0],
      setMascurrency = _useState44[1];

  var _useState45 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      country = _useState45[0],
      setcountry = _useState45[1];

  var _useState46 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasErrormas = _useState46[0],
      setErrorsmas = _useState46[1];

  function handleChange(value) {
    console.log(typeof value, "valueStatus");
    setStatus(value);
  }

  function handleChangeQuality(valueQuality) {
    console.log(typeof valueQuality, "quality");
    setQuality(valueQuality);
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
    setIndustry(valueCountry);
  }

  function handleChangeCountry(valueSingle) {
    console.log("selected ".concat(valueSingle));
    setOfficeCountry(valueSingle);
  }

  function handleChangeMultiOne(valueMultiOne) {
    console.log(valueMultiOne, "trafficC");
    setTrafficCountry(valueMultiOne); // let obj = { ...FormData };
    // obj.Domain_traffic_Country = valueMultiOne.toString();
    // setFormData({ ...obj });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("componentDidMount");
    fetchData();
    fetchDataMaster();
  }, [0]);

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

  var fetchData = function fetchData() {
    fetch("http://localhost:5000/api/v1/domain/".concat(updateID)).then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
        var data2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return res.json();

              case 2:
                data2 = _context2.sent;
                // console.log(data2, "200000000");
                setName(data2[0].Domain_Name);
                setStatus(data2[0].Domain_Status);
                setDA(data2[0].Domain_DA);
                setDR(data2[0].Domain_DR);
                setURL(data2[0].Domain_URL);
                setQuality(data2[0].Domain_Quality);
                setLinkA(data2[0].Domain_Link_SampleA);
                setLinkB(data2[0].Domain_Link_SampleB);
                setLinkC(data2[0].Domain_Link_SampleC);
                setLinkD(data2[0].Domain_Link_SampleD);
                setLinkE(data2[0].Domain_Link_SampleE);
                setLinkF(data2[0].Domain_Link_SampleF);
                setLinkG(data2[0].Domain_Link_SampleG);
                setLinkH(data2[0].Domain_Link_SampleH);
                setLinkI(data2[0].Domain_Link_SampleI);
                setLinkJ(data2[0].Domain_Link_SampleJ);
                setDomainComments(data2[0].Domain_Comments);
                setLinkType(data2[0].Domain_Link_Type);
                setLinkAttribute(data2[0].Domain_Link_Attribute);
                setRefDomains(data2[0].Domain_RefDomCount);
                setIndustry(data2[0].Domain_Industry.split(","));
                setTrafficCountry(data2[0].Domain_traffic_Country.split(","));
                setSemrush(data2[0].Domain_SEMRush);
                setAhref(data2[0].Domain_AHRef);
                setCurrency(data2[0].Domain_Currency);
                setOriginal(data2[0].Domain_Cost_Original);
                setNegotiated(data2[0].Domain_Cost_Nego);
                setOfficeCountry(data2[0].Domain_Office_Country);
                setCostComments(data2[0].Domain_Cost_Comments);
                setContactDetailsName(data2[0].Domain_Contact_Person);
                setContactEmailA(data2[0].Domain_Contact_EmailA);
                setContactEmailB(data2[0].Domain_Contact_EmailB);
                setContactEmailC(data2[0].Domain_Contact_EmailC);
                setContactPhoneA(data2[0].Domain_Contact_PhoneA);
                setContactPhoneB(data2[0].Domain_Contact_PhoneB);

              case 38:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"](function (err) {
      return console.log(err);
    }); // console.log(res);
  };

  var postData = function postData() {
    var requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Domain_Name: name,
        Domain_Status: status,
        Domain_DA: Da,
        Domain_DR: Dr,
        Domain_URL: Url,
        Domain_Quality: quality,
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
        Domain_Industry: industry.toString(),
        Domain_traffic_Country: trafficCountry.toString(),
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
    fetch("http://localhost:5000/api/v1/domain/".concat(updateID), requestOptions).then( /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(response) {
        var data, error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return response.json();

              case 2:
                data = _context3.sent;

                if (response.ok) {
                  _context3.next = 6;
                  break;
                }

                // get error message from body or default to response status
                error = data && data.message || response.status;
                return _context3.abrupt("return", Promise.reject(error));

              case 6:
                console.log("data updated successfully");

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }())["catch"](function (error) {
      console.log(error);
    });
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("all_domain");
  };

  return __jsx("div", null, data.length === 0 ? __jsx("div", null, __jsx("h2", {
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
    value: status,
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
    value: quality,
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
    value: linkType,
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
    value: linkAttribute,
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
    value: industry,
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
    value: trafficCountry,
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
    value: currency,
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
    value: officeCountry,
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
  }, "Add Details"))) : __jsx("p", null, "Something Wrong Happened"));
};

_s(Update, "AlM3WKL6iKXKdvyujWk0vq/Yf20=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Update;
/* harmony default export */ __webpack_exports__["default"] = (Update);

var _c;

$RefreshReg$(_c, "Update");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzL1VwZGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWxlY3QiLCJVcGRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVJRCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInN0YXRlIiwic2V0U3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsIkRhIiwic2V0REEiLCJEciIsInNldERSIiwiVXJsIiwic2V0VVJMIiwicXVhbGl0eSIsInNldFF1YWxpdHkiLCJsaW5rQSIsInNldExpbmtBIiwibGlua0IiLCJzZXRMaW5rQiIsImxpbmtDIiwic2V0TGlua0MiLCJsaW5rRCIsInNldExpbmtEIiwibGlua0UiLCJzZXRMaW5rRSIsImxpbmtGIiwic2V0TGlua0YiLCJsaW5rRyIsInNldExpbmtHIiwibGlua0giLCJzZXRMaW5rSCIsImxpbmtJIiwic2V0TGlua0kiLCJsaW5rSiIsInNldExpbmtKIiwiZG9tYWluQ29tbWVudHMiLCJzZXREb21haW5Db21tZW50cyIsImxpbmtUeXBlIiwic2V0TGlua1R5cGUiLCJsaW5rQXR0cmlidXRlIiwic2V0TGlua0F0dHJpYnV0ZSIsInJlZkRvbWFpbnMiLCJzZXRSZWZEb21haW5zIiwiaW5kdXN0cnkiLCJzZXRJbmR1c3RyeSIsInRyYWZmaWNDb3VudHJ5Iiwic2V0VHJhZmZpY0NvdW50cnkiLCJzZW1ydXNoIiwic2V0U2VtcnVzaCIsImFocmVmIiwic2V0QWhyZWYiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5Iiwib3JpZ2luYWwiLCJzZXRPcmlnaW5hbCIsIm5lZ290aWF0ZWQiLCJzZXROZWdvdGlhdGVkIiwib2ZmaWNlQ291bnRyeSIsInNldE9mZmljZUNvdW50cnkiLCJjb3N0Q29tbWVudHMiLCJzZXRDb3N0Q29tbWVudHMiLCJjb250YWN0RGV0YWlsc05hbWUiLCJzZXRDb250YWN0RGV0YWlsc05hbWUiLCJjb250YWN0RW1haWxBIiwic2V0Q29udGFjdEVtYWlsQSIsImNvbnRhY3RFbWFpbEIiLCJzZXRDb250YWN0RW1haWxCIiwiY29udGFjdEVtYWlsQyIsInNldENvbnRhY3RFbWFpbEMiLCJjb250YWN0UGhvbmVBIiwic2V0Q29udGFjdFBob25lQSIsImNvbnRhY3RQaG9uZUIiLCJzZXRDb250YWN0UGhvbmVCIiwiTWFzcXVhbGl0eSIsInNldE1hc3F1YWxpdHkiLCJNYXNzdGF0dXMiLCJzZXRNYXNzdGF0dXMiLCJ0eXBlIiwic2V0dHlwZSIsImF0dHJpYnV0ZSIsInNldGF0dHJpYnV0ZSIsImluZCIsInNldGluZCIsInRyYWZmaWMiLCJzZXR0cmFmZmljIiwiTWFzY3VycmVuY3kiLCJzZXRNYXNjdXJyZW5jeSIsImNvdW50cnkiLCJzZXRjb3VudHJ5IiwiaGFzRXJyb3JtYXMiLCJzZXRFcnJvcnNtYXMiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VRdWFsaXR5IiwidmFsdWVRdWFsaXR5IiwiaGFuZGxlQ2hhbmdlTGlua1R5cGUiLCJ2YWx1ZUxpbmtUeXBlIiwiaGFuZGxlQ2hhbmdlTGlua0F0dHJpIiwidmFsdWVMaW5rQXR0cmkiLCJoYW5kbGVDaGFuZ2VDdXJyIiwidmFsdWVjdXJyIiwiaGFuZGxlQ2hhbmdlTXVsdGkiLCJ2YWx1ZUNvdW50cnkiLCJoYW5kbGVDaGFuZ2VDb3VudHJ5IiwidmFsdWVTaW5nbGUiLCJoYW5kbGVDaGFuZ2VNdWx0aU9uZSIsInZhbHVlTXVsdGlPbmUiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJmZXRjaERhdGFNYXN0ZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YTIiLCJNYXN0ZXJfVGFibGUiLCJzcGxpdCIsImVyciIsIkRvbWFpbl9OYW1lIiwiRG9tYWluX1N0YXR1cyIsIkRvbWFpbl9EQSIsIkRvbWFpbl9EUiIsIkRvbWFpbl9VUkwiLCJEb21haW5fUXVhbGl0eSIsIkRvbWFpbl9MaW5rX1NhbXBsZUEiLCJEb21haW5fTGlua19TYW1wbGVCIiwiRG9tYWluX0xpbmtfU2FtcGxlQyIsIkRvbWFpbl9MaW5rX1NhbXBsZUQiLCJEb21haW5fTGlua19TYW1wbGVFIiwiRG9tYWluX0xpbmtfU2FtcGxlRiIsIkRvbWFpbl9MaW5rX1NhbXBsZUciLCJEb21haW5fTGlua19TYW1wbGVIIiwiRG9tYWluX0xpbmtfU2FtcGxlSSIsIkRvbWFpbl9MaW5rX1NhbXBsZUoiLCJEb21haW5fQ29tbWVudHMiLCJEb21haW5fTGlua19UeXBlIiwiRG9tYWluX0xpbmtfQXR0cmlidXRlIiwiRG9tYWluX1JlZkRvbUNvdW50IiwiRG9tYWluX0luZHVzdHJ5IiwiRG9tYWluX3RyYWZmaWNfQ291bnRyeSIsIkRvbWFpbl9TRU1SdXNoIiwiRG9tYWluX0FIUmVmIiwiRG9tYWluX0N1cnJlbmN5IiwiRG9tYWluX0Nvc3RfT3JpZ2luYWwiLCJEb21haW5fQ29zdF9OZWdvIiwiRG9tYWluX09mZmljZV9Db3VudHJ5IiwiRG9tYWluX0Nvc3RfQ29tbWVudHMiLCJEb21haW5fQ29udGFjdF9QZXJzb24iLCJEb21haW5fQ29udGFjdF9FbWFpbEEiLCJEb21haW5fQ29udGFjdF9FbWFpbEIiLCJEb21haW5fQ29udGFjdF9FbWFpbEMiLCJEb21haW5fQ29udGFjdF9QaG9uZUEiLCJEb21haW5fQ29udGFjdF9QaG9uZUIiLCJwb3N0RGF0YSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9TdHJpbmciLCJyZXNwb25zZSIsIm9rIiwiZXJyb3IiLCJtZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsIlJvdXRlciIsInB1c2giLCJsZW5ndGgiLCJmb250V2VpZ2h0IiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiZSIsInRhcmdldCIsIm1hcCIsImVsIiwia2V5IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUNRQSxNLEdBQVdDLDJDLENBQVhELE07QUFDUjs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEbUIsTUFJUkMsUUFKUSxHQUtmRixNQUxlLENBSWpCRyxLQUppQixDQUlSRCxRQUpROztBQUFBLGtCQU9LRSxzREFBUSxDQUFDLEVBQUQsQ0FQYjtBQUFBLE1BT1pDLElBUFk7QUFBQSxNQU9OQyxPQVBNOztBQUFBLG1CQVFPRixzREFBUSxDQUFDLEVBQUQsQ0FSZjtBQUFBLE1BUVpHLEtBUlk7QUFBQSxNQVFMQyxRQVJLOztBQUFBLG1CQVNLSixzREFBUSxDQUFDLEVBQUQsQ0FUYjtBQUFBLE1BU1pLLElBVFk7QUFBQSxNQVNOQyxPQVRNOztBQUFBLG1CQVVTTixzREFBUSxDQUFDLEVBQUQsQ0FWakI7QUFBQSxNQVVaTyxNQVZZO0FBQUEsTUFVSkMsU0FWSTs7QUFBQSxtQkFXQ1Isc0RBQVEsQ0FBQyxFQUFELENBWFQ7QUFBQSxNQVdaUyxFQVhZO0FBQUEsTUFXUkMsS0FYUTs7QUFBQSxtQkFZQ1Ysc0RBQVEsQ0FBQyxFQUFELENBWlQ7QUFBQSxNQVlaVyxFQVpZO0FBQUEsTUFZUkMsS0FaUTs7QUFBQSxtQkFhR1osc0RBQVEsQ0FBQyxFQUFELENBYlg7QUFBQSxNQWFaYSxHQWJZO0FBQUEsTUFhUEMsTUFiTzs7QUFBQSxtQkFjV2Qsc0RBQVEsQ0FBQyxFQUFELENBZG5CO0FBQUEsTUFjWmUsT0FkWTtBQUFBLE1BY0hDLFVBZEc7O0FBQUEsbUJBZU9oQixzREFBUSxDQUFDLEVBQUQsQ0FmZjtBQUFBLE1BZVppQixLQWZZO0FBQUEsTUFlTEMsUUFmSzs7QUFB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QkFBWSxFQUFFLEtBRlQ7QUFHTGMscUJBQWUsRUFBRSxPQUhaO0FBSUxqQixnQkFBVSxFQUFFLE1BSlA7QUFLTEksa0JBQVksRUFBRTtBQUxULEtBRFQ7QUFRRSxXQUFPLEVBQUUsbUJBQU07QUFDYnJCLGNBQVE7QUFDVDtBQVZILG1CQVBGLENBOWdCRixDQURELEdBdWlCQyw0Q0F4aUJKLENBREY7QUE2aUJELENBM3dCRDs7R0FBTWxLLE07VUFDV0UscUQ7OztLQURYRixNO0FBNHdCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy81LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVcGRhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHVwZGF0ZUlEIH0sXHJcbiAgfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtEYSwgc2V0REFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0RyLCBzZXREUl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbVXJsLCBzZXRVUkxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F1YWxpdHksIHNldFF1YWxpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtBLCBzZXRMaW5rQV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0IsIHNldExpbmtCXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rQywgc2V0TGlua0NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtELCBzZXRMaW5rRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0UsIHNldExpbmtFXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rRiwgc2V0TGlua0ZdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtHLCBzZXRMaW5rR10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0gsIHNldExpbmtIXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rSSwgc2V0TGlua0ldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtKLCBzZXRMaW5rSl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZG9tYWluQ29tbWVudHMsIHNldERvbWFpbkNvbW1lbnRzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rVHlwZSwgc2V0TGlua1R5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtBdHRyaWJ1dGUsIHNldExpbmtBdHRyaWJ1dGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZkRvbWFpbnMsIHNldFJlZkRvbWFpbnNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2luZHVzdHJ5LCBzZXRJbmR1c3RyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdHJhZmZpY0NvdW50cnksIHNldFRyYWZmaWNDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZW1ydXNoLCBzZXRTZW1ydXNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthaHJlZiwgc2V0QWhyZWZdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3JpZ2luYWwsIHNldE9yaWdpbmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuZWdvdGlhdGVkLCBzZXROZWdvdGlhdGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvZmZpY2VDb3VudHJ5LCBzZXRPZmZpY2VDb3VudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb3N0Q29tbWVudHMsIHNldENvc3RDb21tZW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGFjdERldGFpbHNOYW1lLCBzZXRDb250YWN0RGV0YWlsc05hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3RFbWFpbEEsIHNldENvbnRhY3RFbWFpbEFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3RFbWFpbEIsIHNldENvbnRhY3RFbWFpbEJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3RFbWFpbEMsIHNldENvbnRhY3RFbWFpbENdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3RQaG9uZUEsIHNldENvbnRhY3RQaG9uZUFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3RQaG9uZUIsIHNldENvbnRhY3RQaG9uZUJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgW01hc3F1YWxpdHksIHNldE1hc3F1YWxpdHldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtNYXNzdGF0dXMsIHNldE1hc3N0YXR1c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGUsIHNldHR5cGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdHRyaWJ1dGUsIHNldGF0dHJpYnV0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2luZCwgc2V0aW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHJhZmZpYywgc2V0dHJhZmZpY10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW01hc2N1cnJlbmN5LCBzZXRNYXNjdXJyZW5jeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdW50cnksIHNldGNvdW50cnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtoYXNFcnJvcm1hcywgc2V0RXJyb3JzbWFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlLCBcInZhbHVlU3RhdHVzXCIpO1xyXG4gICAgc2V0U3RhdHVzKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVF1YWxpdHkodmFsdWVRdWFsaXR5KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdmFsdWVRdWFsaXR5LCBcInF1YWxpdHlcIik7XHJcbiAgICBzZXRRdWFsaXR5KHZhbHVlUXVhbGl0eSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUxpbmtUeXBlKHZhbHVlTGlua1R5cGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlTGlua1R5cGUsIFwibGlua1R5cGVcIik7XHJcbiAgICBzZXRMaW5rVHlwZSh2YWx1ZUxpbmtUeXBlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUxpbmtBdHRyaSh2YWx1ZUxpbmtBdHRyaSkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVMaW5rQXR0cmksIFwiYXR0cmlidXRlXCIpO1xyXG4gICAgc2V0TGlua0F0dHJpYnV0ZSh2YWx1ZUxpbmtBdHRyaSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUN1cnIodmFsdWVjdXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZWN1cnIsIFwiY3VycmVuY3lcIik7XHJcbiAgICBzZXRDdXJyZW5jeSh2YWx1ZWN1cnIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VNdWx0aSh2YWx1ZUNvdW50cnkpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlQ291bnRyeSwgXCJpbmR1c3RyeVwiKTtcclxuICAgIHNldEluZHVzdHJ5KHZhbHVlQ291bnRyeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VDb3VudHJ5KHZhbHVlU2luZ2xlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZVNpbmdsZX1gKTtcclxuICAgIHNldE9mZmljZUNvdW50cnkodmFsdWVTaW5nbGUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VNdWx0aU9uZSh2YWx1ZU11bHRpT25lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZU11bHRpT25lLCBcInRyYWZmaWNDXCIpO1xyXG4gICAgc2V0VHJhZmZpY0NvdW50cnkodmFsdWVNdWx0aU9uZSk7XHJcbiAgICAvLyBsZXQgb2JqID0geyAuLi5Gb3JtRGF0YSB9O1xyXG4gICAgLy8gb2JqLkRvbWFpbl90cmFmZmljX0NvdW50cnkgPSB2YWx1ZU11bHRpT25lLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBzZXRGb3JtRGF0YSh7IC4uLm9iaiB9KTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICAgIGZldGNoRGF0YU1hc3RlcigpO1xyXG4gIH0sIFswXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0TWFzc3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldE1hc3F1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0aW5kKGRhdGEyWzRdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y291bnRyeShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcnNtYXMoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvZG9tYWluLyR7dXBkYXRlSUR9YClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhMiwgXCIyMDAwMDAwMDBcIik7XHJcbiAgICAgICAgc2V0TmFtZShkYXRhMlswXS5Eb21haW5fTmFtZSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKGRhdGEyWzBdLkRvbWFpbl9TdGF0dXMpO1xyXG4gICAgICAgIHNldERBKGRhdGEyWzBdLkRvbWFpbl9EQSk7XHJcbiAgICAgICAgc2V0RFIoZGF0YTJbMF0uRG9tYWluX0RSKTtcclxuICAgICAgICBzZXRVUkwoZGF0YTJbMF0uRG9tYWluX1VSTCk7XHJcbiAgICAgICAgc2V0UXVhbGl0eShkYXRhMlswXS5Eb21haW5fUXVhbGl0eSk7XHJcbiAgICAgICAgc2V0TGlua0EoZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlQSk7XHJcbiAgICAgICAgc2V0TGlua0IoZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlQik7XHJcbiAgICAgICAgc2V0TGlua0MoZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlQyk7XHJcbiAgICAgICAgc2V0TGlua0QoZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlRCk7XHJcbiAgICAgICAgc2V0TGlua0UoZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlRSk7XHJcbiAgICAgICAgc2V0TGlua0YoZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlRik7XHJcbiAgICAgICAgc2V0TGlua0coZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlRyk7XHJcbiAgICAgICAgc2V0TGlua0goZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlSCk7XHJcbiAgICAgICAgc2V0TGlua0koZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlSSk7XHJcbiAgICAgICAgc2V0TGlua0ooZGF0YTJbMF0uRG9tYWluX0xpbmtfU2FtcGxlSik7XHJcbiAgICAgICAgc2V0RG9tYWluQ29tbWVudHMoZGF0YTJbMF0uRG9tYWluX0NvbW1lbnRzKTtcclxuICAgICAgICBzZXRMaW5rVHlwZShkYXRhMlswXS5Eb21haW5fTGlua19UeXBlKTtcclxuICAgICAgICBzZXRMaW5rQXR0cmlidXRlKGRhdGEyWzBdLkRvbWFpbl9MaW5rX0F0dHJpYnV0ZSk7XHJcbiAgICAgICAgc2V0UmVmRG9tYWlucyhkYXRhMlswXS5Eb21haW5fUmVmRG9tQ291bnQpO1xyXG4gICAgICAgIHNldEluZHVzdHJ5KGRhdGEyWzBdLkRvbWFpbl9JbmR1c3RyeS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldFRyYWZmaWNDb3VudHJ5KGRhdGEyWzBdLkRvbWFpbl90cmFmZmljX0NvdW50cnkuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRTZW1ydXNoKGRhdGEyWzBdLkRvbWFpbl9TRU1SdXNoKTtcclxuICAgICAgICBzZXRBaHJlZihkYXRhMlswXS5Eb21haW5fQUhSZWYpO1xyXG4gICAgICAgIHNldEN1cnJlbmN5KGRhdGEyWzBdLkRvbWFpbl9DdXJyZW5jeSk7XHJcbiAgICAgICAgc2V0T3JpZ2luYWwoZGF0YTJbMF0uRG9tYWluX0Nvc3RfT3JpZ2luYWwpO1xyXG4gICAgICAgIHNldE5lZ290aWF0ZWQoZGF0YTJbMF0uRG9tYWluX0Nvc3RfTmVnbyk7XHJcbiAgICAgICAgc2V0T2ZmaWNlQ291bnRyeShkYXRhMlswXS5Eb21haW5fT2ZmaWNlX0NvdW50cnkpO1xyXG4gICAgICAgIHNldENvc3RDb21tZW50cyhkYXRhMlswXS5Eb21haW5fQ29zdF9Db21tZW50cyk7XHJcbiAgICAgICAgc2V0Q29udGFjdERldGFpbHNOYW1lKGRhdGEyWzBdLkRvbWFpbl9Db250YWN0X1BlcnNvbik7XHJcbiAgICAgICAgc2V0Q29udGFjdEVtYWlsQShkYXRhMlswXS5Eb21haW5fQ29udGFjdF9FbWFpbEEpO1xyXG4gICAgICAgIHNldENvbnRhY3RFbWFpbEIoZGF0YTJbMF0uRG9tYWluX0NvbnRhY3RfRW1haWxCKTtcclxuICAgICAgICBzZXRDb250YWN0RW1haWxDKGRhdGEyWzBdLkRvbWFpbl9Db250YWN0X0VtYWlsQyk7XHJcbiAgICAgICAgc2V0Q29udGFjdFBob25lQShkYXRhMlswXS5Eb21haW5fQ29udGFjdF9QaG9uZUEpO1xyXG4gICAgICAgIHNldENvbnRhY3RQaG9uZUIoZGF0YTJbMF0uRG9tYWluX0NvbnRhY3RfUGhvbmVCKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwb3N0RGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIERvbWFpbl9OYW1lOiBuYW1lLFxyXG4gICAgICAgIERvbWFpbl9TdGF0dXM6IHN0YXR1cyxcclxuICAgICAgICBEb21haW5fREE6IERhLFxyXG4gICAgICAgIERvbWFpbl9EUjogRHIsXHJcbiAgICAgICAgRG9tYWluX1VSTDogVXJsLFxyXG4gICAgICAgIERvbWFpbl9RdWFsaXR5OiBxdWFsaXR5LFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUE6IGxpbmtBLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUI6IGxpbmtCLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUM6IGxpbmtDLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUQ6IGxpbmtELFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUU6IGxpbmtFLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUY6IGxpbmtGLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUc6IGxpbmtHLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUg6IGxpbmtILFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUk6IGxpbmtJLFxyXG4gICAgICAgIERvbWFpbl9MaW5rX1NhbXBsZUo6IGxpbmtKLFxyXG4gICAgICAgIERvbWFpbl9Db21tZW50czogZG9tYWluQ29tbWVudHMsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfVHlwZTogbGlua1R5cGUsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfQXR0cmlidXRlOiBsaW5rQXR0cmlidXRlLFxyXG4gICAgICAgIERvbWFpbl9SZWZEb21Db3VudDogcmVmRG9tYWlucyxcclxuICAgICAgICBEb21haW5fSW5kdXN0cnk6IGluZHVzdHJ5LnRvU3RyaW5nKCksXHJcbiAgICAgICAgRG9tYWluX3RyYWZmaWNfQ291bnRyeTogdHJhZmZpY0NvdW50cnkudG9TdHJpbmcoKSxcclxuICAgICAgICBEb21haW5fU0VNUnVzaDogc2VtcnVzaCxcclxuICAgICAgICBEb21haW5fQUhSZWY6IGFocmVmLFxyXG4gICAgICAgIERvbWFpbl9DdXJyZW5jeTogY3VycmVuY3ksXHJcbiAgICAgICAgRG9tYWluX0Nvc3RfT3JpZ2luYWw6IG9yaWdpbmFsLFxyXG4gICAgICAgIERvbWFpbl9Db3N0X05lZ286IG5lZ290aWF0ZWQsXHJcbiAgICAgICAgRG9tYWluX09mZmljZV9Db3VudHJ5OiBvZmZpY2VDb3VudHJ5LFxyXG4gICAgICAgIERvbWFpbl9Db3N0X0NvbW1lbnRzOiBjb3N0Q29tbWVudHMsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfUGVyc29uOiBjb250YWN0RGV0YWlsc05hbWUsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfRW1haWxBOiBjb250YWN0RW1haWxBLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X0VtYWlsQjogY29udGFjdEVtYWlsQixcclxuICAgICAgICBEb21haW5fQ29udGFjdF9FbWFpbEM6IGNvbnRhY3RFbWFpbEMsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfUGhvbmVBOiBjb250YWN0UGhvbmVBLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X1Bob25lQjogY29udGFjdFBob25lQixcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvZG9tYWluLyR7dXBkYXRlSUR9YCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgLy8gZ2V0IGVycm9yIG1lc3NhZ2UgZnJvbSBib2R5IG9yIGRlZmF1bHQgdG8gcmVzcG9uc2Ugc3RhdHVzXHJcbiAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIFJvdXRlci5wdXNoKFwiYWxsX2RvbWFpblwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RhdGEubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDIgaWQ9XCJkb21haW5cIj5Eb21haW4gRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5BTUU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlNUQVRVUzwvcD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtNYXNzdGF0dXMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgREFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e0RhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0REEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEUlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17RHJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREUihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlVSTDo8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17VXJsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVUkwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlF1YWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWFsaXR5fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVF1YWxpdHl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtNYXNxdWFsaXR5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TGluayBTYW1wbGVzPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtBfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtBKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rQn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW5rQihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0MoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtEfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtEKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rRX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW5rRShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0Z9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0YoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtHfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtHKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rSH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW5rSChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0l9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtKfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtKKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkRvbWFpbiBDb21tZW50czwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkb21haW5Db21tZW50c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERvbWFpbkNvbW1lbnRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5MaW5rIFR5cGU8L3A+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtUeXBlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTGlua1R5cGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3R5cGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5MaW5rIEF0dHJpYnV0ZTwvcD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0F0dHJpYnV0ZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxpbmtBdHRyaX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHthdHRyaWJ1dGUubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5SZWYgRG9tYWluczwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVmRG9tYWluc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRSZWZEb21haW5zKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+SW5kdXN0cnk8L3A+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbmR1c3RyeX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTXVsdGl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aW5kLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDxvcHRpb24gdmFsdWU9e2tleS50b1N0cmluZygpfT57ZWx9PC9vcHRpb24+KTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBpZD1cInRyYWZmaWNcIj5UcmFmZmljIERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+VHJhZmZpYyBDb3VudHJ5PC9wPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dHJhZmZpY0NvdW50cnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU11bHRpT25lfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RyYWZmaWMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+U0VNUlVTSCBUcmFmZmljPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZW1ydXNofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbXJ1c2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+QUhSRUYgVHJhZmZpYzwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWhyZWZ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWhyZWYoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1MHB4XCIgfX0gaWQ9XCJjb3N0XCI+XHJcbiAgICAgICAgICAgIENvc3QgRGV0YWlsc1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkN1cnJlbmN5PC9wPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUN1cnJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge01hc2N1cnJlbmN5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDxvcHRpb24gdmFsdWU9e2tleS50b1N0cmluZygpfT57ZWx9PC9vcHRpb24+KTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+T3JpZ2luYWw8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e29yaWdpbmFsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yaWdpbmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TmVnb3RpYXRlZDwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmVnb3RpYXRlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXROZWdvdGlhdGVkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiZml0LWNvbnRlbnRcIiB9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+T2ZmaWNlIENvdW50cnk8L3A+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17b2ZmaWNlQ291bnRyeX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ291bnRyeX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAge2NvdW50cnkubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q29zdCBDb21tZW50czwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3N0Q29tbWVudHN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3N0Q29tbWVudHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19IGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICBDb250YWN0IERldGFpbHNcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5OYW1lPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3REZXRhaWxzTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRhY3REZXRhaWxzTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+RW1haWw8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdEVtYWlsQX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRhY3RFbWFpbEEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdEVtYWlsQn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRhY3RFbWFpbEIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdEVtYWlsQ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRhY3RFbWFpbEMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlBob25lPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0UGhvbmVBfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdFBob25lQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdFBob25lQn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRhY3RQaG9uZUIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0RGF0YSgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgRGV0YWlsc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPlNvbWV0aGluZyBXcm9uZyBIYXBwZW5lZDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==