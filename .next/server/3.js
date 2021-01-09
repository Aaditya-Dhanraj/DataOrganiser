exports.ids = [3];
exports.modules = {

/***/ "./routes/AddNew/index.js":
/*!********************************!*\
  !*** ./routes/AddNew/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import axios from axios;

const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const AddNew = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: Da,
    1: setDA
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: Dr,
    1: setDR
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: Url,
    1: setURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkA,
    1: setLinkA
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkB,
    1: setLinkB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkC,
    1: setLinkC
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkD,
    1: setLinkD
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkE,
    1: setLinkE
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkF,
    1: setLinkF
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkG,
    1: setLinkG
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkH,
    1: setLinkH
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkI,
    1: setLinkI
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkJ,
    1: setLinkJ
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: domainComments,
    1: setDomainComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkType,
    1: setLinkType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: linkAttribute,
    1: setLinkAttribute
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: refDomains,
    1: setRefDomains
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: industry,
    1: setIndustry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: trafficCountry,
    1: setTrafficCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: semrush,
    1: setSemrush
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: ahref,
    1: setAhref
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: currency,
    1: setCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: original,
    1: setOriginal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: negotiated,
    1: setNegotiated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: officeCountry,
    1: setOfficeCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: costComments,
    1: setCostComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: contactDetailsName,
    1: setContactDetailsName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: contactEmailA,
    1: setContactEmailA
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: contactEmailB,
    1: setContactEmailB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: contactEmailC,
    1: setContactEmailC
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: contactPhoneA,
    1: setContactPhoneA
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: contactPhoneB,
    1: setContactPhoneB
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); //////////////////////////

  const {
    0: Masquality,
    1: setMasquality
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: Masstatus,
    1: setMasstatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: type,
    1: settype
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: attribute,
    1: setattribute
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: ind,
    1: setind
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: traffic,
    1: settraffic
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: Mascurrency,
    1: setMascurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: country,
    1: setcountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: hasErrormas,
    1: setErrorsmas
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const fetchDataMaster = () => {
    fetch("http://localhost:5000/api/v1/master/").then(async res => {
      const data2 = await res.json();
      console.log(data2, "ddddddddddddddddd");
      setMasstatus(data2[0].Master_Table.split(","));
      setMasquality(data2[1].Master_Table.split(","));
      settype(data2[2].Master_Table.split(","));
      setattribute(data2[3].Master_Table.split(","));
      setind(data2[4].Master_Table.split(","));
      settraffic(data2[5].Master_Table.split(","));
      setMascurrency(data2[6].Master_Table.split(","));
      setcountry(data2[7].Master_Table.split(","));
    }).catch(err => setErrorsmas(err));
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
    console.log(`selected ${valueSingle}`);
    setOfficeCountry(valueSingle);
  }

  function handleChangeMultiOne(valueMultiOne) {
    console.log(valueMultiOne, "trafficC");
    setTrafficCountry(valueMultiOne.toString()); // let obj = { ...FormData };
    // obj.Domain_traffic_Country = valueMultiOne.toString();
    // setFormData({ ...obj });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("componentDidMount");
    fetchDataMaster();
  }, [0]);

  const postData = () => {
    const requestOptions = {
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
    fetch("http://localhost:5000/api/v1/domain/", requestOptions).then(async response => {
      const data = await response.json();

      if (!response.ok) {
        // get error message from body or default to response status
        const error = data && data.message || response.status;
        return Promise.reject(error);
      }

      console.log("data posted successfully");
    }).catch(error => {
      undefined.setState({
        errorMessage: error.toString()
      });
      console.error("There was an error!", error);
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("all_domain");
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
    onChange: e => {
      setName(e.target.value);
    }
  }), __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "STATUS"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChange
  }, Masstatus.map((el, key) => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
  }, "Quality"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeQuality
  }, Masquality.map((el, key) => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
  }, "Link Type"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeLinkType
  }, type.map((el, key) => {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Attribute"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeLinkAttri
  }, attribute.map((el, key) => {
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
    onChange: e => {
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
  }, "Industry"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    defaultValue: "0",
    onChange: handleChangeMulti
  }, ind.map((el, key) => {
    return __jsx("option", {
      value: key.toString()
    }, el);
  }))), __jsx("h2", {
    id: "traffic"
  }, "Traffic Details"), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Traffic Country"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "multiple",
    allowClear: true,
    style: {
      width: "100%"
    },
    placeholder: "Please select",
    defaultValue: "0",
    onChange: handleChangeMultiOne
  }, traffic.map((el, key) => {
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
    onChange: e => {
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
    onChange: e => {
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
  }, "Currency"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeCurr
  }, Mascurrency.map((el, key) => {
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
    onChange: e => {
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
    onChange: e => {
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
  }, "Office Country"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "0",
    style: {
      width: 120,
      marginBottom: "5px"
    },
    onChange: handleChangeCountry
  }, country.map((el, key) => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onClick: () => {
      postData();
    }
  }, "Add Details")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddNew);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMvQWRkTmV3L2luZGV4LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIkFkZE5ldyIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJEYSIsInNldERBIiwiRHIiLCJzZXREUiIsIlVybCIsInNldFVSTCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJsaW5rQSIsInNldExpbmtBIiwibGlua0IiLCJzZXRMaW5rQiIsImxpbmtDIiwic2V0TGlua0MiLCJsaW5rRCIsInNldExpbmtEIiwibGlua0UiLCJzZXRMaW5rRSIsImxpbmtGIiwic2V0TGlua0YiLCJsaW5rRyIsInNldExpbmtHIiwibGlua0giLCJzZXRMaW5rSCIsImxpbmtJIiwic2V0TGlua0kiLCJsaW5rSiIsInNldExpbmtKIiwiZG9tYWluQ29tbWVudHMiLCJzZXREb21haW5Db21tZW50cyIsImxpbmtUeXBlIiwic2V0TGlua1R5cGUiLCJsaW5rQXR0cmlidXRlIiwic2V0TGlua0F0dHJpYnV0ZSIsInJlZkRvbWFpbnMiLCJzZXRSZWZEb21haW5zIiwiaW5kdXN0cnkiLCJzZXRJbmR1c3RyeSIsInRyYWZmaWNDb3VudHJ5Iiwic2V0VHJhZmZpY0NvdW50cnkiLCJzZW1ydXNoIiwic2V0U2VtcnVzaCIsImFocmVmIiwic2V0QWhyZWYiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5Iiwib3JpZ2luYWwiLCJzZXRPcmlnaW5hbCIsIm5lZ290aWF0ZWQiLCJzZXROZWdvdGlhdGVkIiwib2ZmaWNlQ291bnRyeSIsInNldE9mZmljZUNvdW50cnkiLCJjb3N0Q29tbWVudHMiLCJzZXRDb3N0Q29tbWVudHMiLCJjb250YWN0RGV0YWlsc05hbWUiLCJzZXRDb250YWN0RGV0YWlsc05hbWUiLCJjb250YWN0RW1haWxBIiwic2V0Q29udGFjdEVtYWlsQSIsImNvbnRhY3RFbWFpbEIiLCJzZXRDb250YWN0RW1haWxCIiwiY29udGFjdEVtYWlsQyIsInNldENvbnRhY3RFbWFpbEMiLCJjb250YWN0UGhvbmVBIiwic2V0Q29udGFjdFBob25lQSIsImNvbnRhY3RQaG9uZUIiLCJzZXRDb250YWN0UGhvbmVCIiwiTWFzcXVhbGl0eSIsInNldE1hc3F1YWxpdHkiLCJNYXNzdGF0dXMiLCJzZXRNYXNzdGF0dXMiLCJ0eXBlIiwic2V0dHlwZSIsImF0dHJpYnV0ZSIsInNldGF0dHJpYnV0ZSIsImluZCIsInNldGluZCIsInRyYWZmaWMiLCJzZXR0cmFmZmljIiwiTWFzY3VycmVuY3kiLCJzZXRNYXNjdXJyZW5jeSIsImNvdW50cnkiLCJzZXRjb3VudHJ5IiwiaGFzRXJyb3JtYXMiLCJzZXRFcnJvcnNtYXMiLCJmZXRjaERhdGFNYXN0ZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJkYXRhMiIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiTWFzdGVyX1RhYmxlIiwic3BsaXQiLCJjYXRjaCIsImVyciIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlUXVhbGl0eSIsInZhbHVlUXVhbGl0eSIsImhhbmRsZUNoYW5nZUxpbmtUeXBlIiwidmFsdWVMaW5rVHlwZSIsImhhbmRsZUNoYW5nZUxpbmtBdHRyaSIsInZhbHVlTGlua0F0dHJpIiwiaGFuZGxlQ2hhbmdlQ3VyciIsInZhbHVlY3VyciIsImhhbmRsZUNoYW5nZU11bHRpIiwidmFsdWVDb3VudHJ5IiwidG9TdHJpbmciLCJoYW5kbGVDaGFuZ2VDb3VudHJ5IiwidmFsdWVTaW5nbGUiLCJoYW5kbGVDaGFuZ2VNdWx0aU9uZSIsInZhbHVlTXVsdGlPbmUiLCJ1c2VFZmZlY3QiLCJwb3N0RGF0YSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiRG9tYWluX05hbWUiLCJEb21haW5fU3RhdHVzIiwiRG9tYWluX0RBIiwiRG9tYWluX0RSIiwiRG9tYWluX1VSTCIsIkRvbWFpbl9RdWFsaXR5IiwiRG9tYWluX0xpbmtfU2FtcGxlQSIsIkRvbWFpbl9MaW5rX1NhbXBsZUIiLCJEb21haW5fTGlua19TYW1wbGVDIiwiRG9tYWluX0xpbmtfU2FtcGxlRCIsIkRvbWFpbl9MaW5rX1NhbXBsZUUiLCJEb21haW5fTGlua19TYW1wbGVGIiwiRG9tYWluX0xpbmtfU2FtcGxlRyIsIkRvbWFpbl9MaW5rX1NhbXBsZUgiLCJEb21haW5fTGlua19TYW1wbGVJIiwiRG9tYWluX0xpbmtfU2FtcGxlSiIsIkRvbWFpbl9Db21tZW50cyIsIkRvbWFpbl9MaW5rX1R5cGUiLCJEb21haW5fTGlua19BdHRyaWJ1dGUiLCJEb21haW5fUmVmRG9tQ291bnQiLCJEb21haW5fSW5kdXN0cnkiLCJEb21haW5fdHJhZmZpY19Db3VudHJ5IiwiRG9tYWluX1NFTVJ1c2giLCJEb21haW5fQUhSZWYiLCJEb21haW5fQ3VycmVuY3kiLCJEb21haW5fQ29zdF9PcmlnaW5hbCIsIkRvbWFpbl9Db3N0X05lZ28iLCJEb21haW5fT2ZmaWNlX0NvdW50cnkiLCJEb21haW5fQ29zdF9Db21tZW50cyIsIkRvbWFpbl9Db250YWN0X1BlcnNvbiIsIkRvbWFpbl9Db250YWN0X0VtYWlsQSIsIkRvbWFpbl9Db250YWN0X0VtYWlsQiIsIkRvbWFpbl9Db250YWN0X0VtYWlsQyIsIkRvbWFpbl9Db250YWN0X1Bob25lQSIsIkRvbWFpbl9Db250YWN0X1Bob25lQiIsInJlc3BvbnNlIiwiZGF0YSIsIm9rIiwiZXJyb3IiLCJtZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwiUm91dGVyIiwicHVzaCIsImZvbnRXZWlnaHQiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJlIiwidGFyZ2V0IiwibWFwIiwiZWwiLCJrZXkiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmdMZWZ0IiwibWFy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LFlBQVEsRUFBRytHLENBQUQsSUFBTztBQUNmOUcsc0JBQWdCLENBQUM4RyxDQUFDLENBQUNDLE1BQUYsQ0FBUzdFLEtBQVYsQ0FBaEI7QUFDRDtBQVhILElBRkYsRUFlRTtBQUNFLFNBQUssRUFBRTtBQUNMdUUsWUFBTSxFQUFFLGdCQURIO0FBRUxDLGFBQU8sRUFBRSxLQUZKO0FBR0xDLGtCQUFZLEVBQUUsS0FIVDtBQUlMQyxrQkFBWSxFQUFFLE1BSlQ7QUFLTEMsV0FBSyxFQUFFO0FBTEYsS0FEVDtBQVFFLFNBQUssRUFBRTVHLGFBUlQ7QUFTRSxZQUFRLEVBQUc2RyxDQUFELElBQU87QUFDZjVHLHNCQUFnQixDQUFDNEcsQ0FBQyxDQUFDQyxNQUFGLENBQVM3RSxLQUFWLENBQWhCO0FBQ0Q7QUFYSCxJQWZGLENBbGZGLEVBK2dCRTtBQUNFLFNBQUssRUFBRTtBQUNMaUYsYUFBTyxFQUFFLE1BREo7QUFFTEUsb0JBQWMsRUFBRSxRQUZYO0FBR0xDLGdCQUFVLEVBQUU7QUFIUDtBQURULEtBT0U7QUFDRSxTQUFLLEVBQUU7QUFDTFosYUFBTyxFQUFFLE1BREo7QUFFTEMsa0JBQVksRUFBRSxLQUZUO0FBR0xjLHFCQUFlLEVBQUUsT0FIWjtBQUlMakIsZ0JBQVUsRUFBRSxNQUpQO0FBS0xJLGtCQUFZLEVBQUU7QUFMVCxLQURUO0FBUUUsV0FBTyxFQUFFLE1BQU07QUFDYnpELGNBQVE7QUFDVDtBQVZILG1CQVBGLENBL2dCRixDQURGO0FBd2lCRCxDQWx0QkQ7O0FBbXRCZXhILHFFQUFmLEUiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIGF4aW9zO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IEFkZE5ldyA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0RhLCBzZXREQV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbRHIsIHNldERSXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtVcmwsIHNldFVSTF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rQSwgc2V0TGlua0FdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtCLCBzZXRMaW5rQl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0MsIHNldExpbmtDXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rRCwgc2V0TGlua0RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtFLCBzZXRMaW5rRV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0YsIHNldExpbmtGXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rRywgc2V0TGlua0ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtILCBzZXRMaW5rSF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0ksIHNldExpbmtJXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rSiwgc2V0TGlua0pdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RvbWFpbkNvbW1lbnRzLCBzZXREb21haW5Db21tZW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua1R5cGUsIHNldExpbmtUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rQXR0cmlidXRlLCBzZXRMaW5rQXR0cmlidXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWZEb21haW5zLCBzZXRSZWZEb21haW5zXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbmR1c3RyeSwgc2V0SW5kdXN0cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RyYWZmaWNDb3VudHJ5LCBzZXRUcmFmZmljQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VtcnVzaCwgc2V0U2VtcnVzaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWhyZWYsIHNldEFocmVmXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29yaWdpbmFsLCBzZXRPcmlnaW5hbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmVnb3RpYXRlZCwgc2V0TmVnb3RpYXRlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb2ZmaWNlQ291bnRyeSwgc2V0T2ZmaWNlQ291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29zdENvbW1lbnRzLCBzZXRDb3N0Q29tbWVudHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnRhY3REZXRhaWxzTmFtZSwgc2V0Q29udGFjdERldGFpbHNOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RW1haWxBLCBzZXRDb250YWN0RW1haWxBXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RW1haWxCLCBzZXRDb250YWN0RW1haWxCXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RW1haWxDLCBzZXRDb250YWN0RW1haWxDXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0UGhvbmVBLCBzZXRDb250YWN0UGhvbmVBXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0UGhvbmVCLCBzZXRDb250YWN0UGhvbmVCXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IFtNYXNxdWFsaXR5LCBzZXRNYXNxdWFsaXR5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbTWFzc3RhdHVzLCBzZXRNYXNzdGF0dXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXR0cmlidXRlLCBzZXRhdHRyaWJ1dGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbmQsIHNldGluZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RyYWZmaWMsIHNldHRyYWZmaWNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtNYXNjdXJyZW5jeSwgc2V0TWFzY3VycmVuY3ldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRjb3VudHJ5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGFzRXJyb3JtYXMsIHNldEVycm9yc21hc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0TWFzc3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldE1hc3F1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0aW5kKGRhdGEyWzRdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzY3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y291bnRyeShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcnNtYXMoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgXCJ2YWx1ZVwiKTtcclxuICAgIHNldFN0YXR1cyh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VRdWFsaXR5KHZhbHVlUXVhbGl0eSkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVRdWFsaXR5LCBcInF1YWxpdHlcIik7XHJcbiAgICBzZXRRdWFudGl0eSh2YWx1ZVF1YWxpdHkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VMaW5rVHlwZSh2YWx1ZUxpbmtUeXBlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUxpbmtUeXBlLCBcImxpbmtUeXBlXCIpO1xyXG4gICAgc2V0TGlua1R5cGUodmFsdWVMaW5rVHlwZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VMaW5rQXR0cmkodmFsdWVMaW5rQXR0cmkpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlTGlua0F0dHJpLCBcImF0dHJpYnV0ZVwiKTtcclxuICAgIHNldExpbmtBdHRyaWJ1dGUodmFsdWVMaW5rQXR0cmkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VDdXJyKHZhbHVlY3Vycikge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVjdXJyLCBcImN1cnJlbmN5XCIpO1xyXG4gICAgc2V0Q3VycmVuY3kodmFsdWVjdXJyKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTXVsdGkodmFsdWVDb3VudHJ5KSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUNvdW50cnksIFwiaW5kdXN0cnlcIik7XHJcbiAgICBzZXRJbmR1c3RyeSh2YWx1ZUNvdW50cnkudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VDb3VudHJ5KHZhbHVlU2luZ2xlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZVNpbmdsZX1gKTtcclxuICAgIHNldE9mZmljZUNvdW50cnkodmFsdWVTaW5nbGUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VNdWx0aU9uZSh2YWx1ZU11bHRpT25lKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZU11bHRpT25lLCBcInRyYWZmaWNDXCIpO1xyXG4gICAgc2V0VHJhZmZpY0NvdW50cnkodmFsdWVNdWx0aU9uZS50b1N0cmluZygpKTtcclxuICAgIC8vIGxldCBvYmogPSB7IC4uLkZvcm1EYXRhIH07XHJcbiAgICAvLyBvYmouRG9tYWluX3RyYWZmaWNfQ291bnRyeSA9IHZhbHVlTXVsdGlPbmUudG9TdHJpbmcoKTtcclxuICAgIC8vIHNldEZvcm1EYXRhKHsgLi4ub2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkTW91bnRcIik7XHJcbiAgICBmZXRjaERhdGFNYXN0ZXIoKTtcclxuICB9LCBbMF0pO1xyXG5cclxuICBjb25zdCBwb3N0RGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBEb21haW5fTmFtZTogbmFtZSxcclxuICAgICAgICBEb21haW5fU3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgRG9tYWluX0RBOiBEYSxcclxuICAgICAgICBEb21haW5fRFI6IERyLFxyXG4gICAgICAgIERvbWFpbl9VUkw6IFVybCxcclxuICAgICAgICBEb21haW5fUXVhbGl0eTogcXVhbnRpdHksXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQTogbGlua0EsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQjogbGlua0IsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQzogbGlua0MsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRDogbGlua0QsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRTogbGlua0UsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRjogbGlua0YsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRzogbGlua0csXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSDogbGlua0gsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSTogbGlua0ksXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSjogbGlua0osXHJcbiAgICAgICAgRG9tYWluX0NvbW1lbnRzOiBkb21haW5Db21tZW50cyxcclxuICAgICAgICBEb21haW5fTGlua19UeXBlOiBsaW5rVHlwZSxcclxuICAgICAgICBEb21haW5fTGlua19BdHRyaWJ1dGU6IGxpbmtBdHRyaWJ1dGUsXHJcbiAgICAgICAgRG9tYWluX1JlZkRvbUNvdW50OiByZWZEb21haW5zLFxyXG4gICAgICAgIERvbWFpbl9JbmR1c3RyeTogaW5kdXN0cnksXHJcbiAgICAgICAgRG9tYWluX3RyYWZmaWNfQ291bnRyeTogdHJhZmZpY0NvdW50cnksXHJcbiAgICAgICAgRG9tYWluX1NFTVJ1c2g6IHNlbXJ1c2gsXHJcbiAgICAgICAgRG9tYWluX0FIUmVmOiBhaHJlZixcclxuICAgICAgICBEb21haW5fQ3VycmVuY3k6IGN1cnJlbmN5LFxyXG4gICAgICAgIERvbWFpbl9Db3N0X09yaWdpbmFsOiBvcmlnaW5hbCxcclxuICAgICAgICBEb21haW5fQ29zdF9OZWdvOiBuZWdvdGlhdGVkLFxyXG4gICAgICAgIERvbWFpbl9PZmZpY2VfQ291bnRyeTogb2ZmaWNlQ291bnRyeSxcclxuICAgICAgICBEb21haW5fQ29zdF9Db21tZW50czogY29zdENvbW1lbnRzLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X1BlcnNvbjogY29udGFjdERldGFpbHNOYW1lLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X0VtYWlsQTogY29udGFjdEVtYWlsQSxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9FbWFpbEI6IGNvbnRhY3RFbWFpbEIsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfRW1haWxDOiBjb250YWN0RW1haWxDLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X1Bob25lQTogY29udGFjdFBob25lQSxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9QaG9uZUI6IGNvbnRhY3RQaG9uZUIsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9kb21haW4vXCIsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlIGZyb20gYm9keSBvciBkZWZhdWx0IHRvIHJlc3BvbnNlIHN0YXR1c1xyXG4gICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBwb3N0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIVwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgUm91dGVyLnB1c2goXCJhbGxfZG9tYWluXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y29uc29sZS5sb2coc3RhdHVzKX1cclxuICAgICAgPGgyIGlkPVwiZG9tYWluXCI+RG9tYWluIERldGFpbHM8L2gyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7fX0+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TkFNRTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlNUQVRVUzwvcD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7TWFzc3RhdHVzLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERBXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e0RhfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERBKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERSXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e0RyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERSKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5VUkw6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e1VybH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVSTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlF1YWxpdHk8L3A+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUXVhbGl0eX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtNYXNxdWFsaXR5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2tleS50b1N0cmluZygpfT57ZWx9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkxpbmsgU2FtcGxlczwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtBfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtCfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rQihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtDfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rQyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtEfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtFfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtGfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtHfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rRyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtIfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rSChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtJfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rSShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2xpbmtKfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMaW5rSihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5Eb21haW4gQ29tbWVudHM8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17ZG9tYWluQ29tbWVudHN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0RG9tYWluQ29tbWVudHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkxpbmsgVHlwZTwvcD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTGlua1R5cGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0eXBlLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TGluayBBdHRyaWJ1dGU8L3A+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxpbmtBdHRyaX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2F0dHJpYnV0ZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlJlZiBEb21haW5zPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17cmVmRG9tYWluc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UmVmRG9tYWlucyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkluZHVzdHJ5PC9wPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIwXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNdWx0aX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aW5kLm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBpZD1cInRyYWZmaWNcIj5UcmFmZmljIERldGFpbHM8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlRyYWZmaWMgQ291bnRyeTwvcD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTXVsdGlPbmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RyYWZmaWMubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlNFTVJVU0ggVHJhZmZpYzwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlbXJ1c2h9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlbXJ1c2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkFIUkVGIFRyYWZmaWM8L3A+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXthaHJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0QWhyZWYoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19IGlkPVwiY29zdFwiPlxyXG4gICAgICAgIENvc3QgRGV0YWlsc1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q3VycmVuY3k8L3A+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUN1cnJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtNYXNjdXJyZW5jeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk9yaWdpbmFsPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17b3JpZ2luYWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE9yaWdpbmFsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5lZ290aWF0ZWQ8L3A+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZWdvdGlhdGVkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXROZWdvdGlhdGVkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcImZpdC1jb250ZW50XCIgfX0+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+T2ZmaWNlIENvdW50cnk8L3A+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMFwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb3VudHJ5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjb3VudHJ5Lm1hcCgoZWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q29zdCBDb21tZW50czwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtjb3N0Q29tbWVudHN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29zdENvbW1lbnRzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19IGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgIENvbnRhY3QgRGV0YWlsc1xyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5hbWU8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdERldGFpbHNOYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhY3REZXRhaWxzTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkVtYWlsPC9wPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFsdWU9e2NvbnRhY3RFbWFpbEF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0Q29udGFjdEVtYWlsQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdEVtYWlsQn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWN0RW1haWxCKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXtjb250YWN0RW1haWxDfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbnRhY3RFbWFpbEMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5QaG9uZTwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdFBob25lQX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWN0UGhvbmVBKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGFjdFBob25lQn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb250YWN0UGhvbmVCKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHBvc3REYXRhKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBEZXRhaWxzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9