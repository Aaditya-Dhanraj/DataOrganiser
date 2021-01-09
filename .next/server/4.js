exports.ids = [4];
exports.modules = {

/***/ "./routes/Update/index.js":
/*!********************************!*\
  !*** ./routes/Update/index.js ***!
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



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];


const Update = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    query: {
      updateID
    }
  } = router;
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
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
    0: quality,
    1: setQuality
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
    console.log(`selected ${valueSingle}`);
    setOfficeCountry(valueSingle);
  }

  function handleChangeMultiOne(valueMultiOne) {
    console.log(valueMultiOne, "trafficC");
    setTrafficCountry(valueMultiOne); // let obj = { ...FormData };
    // obj.Domain_traffic_Country = valueMultiOne.toString();
    // setFormData({ ...obj });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("componentDidMount");
    fetchData();
    fetchDataMaster();
  }, [0]);

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

  const fetchData = () => {
    fetch(`http://localhost:5000/api/v1/domain/${updateID}`).then(async res => {
      const data2 = await res.json(); // console.log(data2, "200000000");

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
    }).catch(err => console.log(err)); // console.log(res);
  };

  const postData = () => {
    const requestOptions = {
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
    fetch(`http://localhost:5000/api/v1/domain/${updateID}`, requestOptions).then(async response => {
      const data = await response.json();

      if (!response.ok) {
        // get error message from body or default to response status
        const error = data && data.message || response.status;
        return Promise.reject(error);
      }

      console.log("data updated successfully");
    }).catch(error => {
      console.log(error);
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("all_domain");
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
    onChange: e => {
      setName(e.target.value);
    }
  }), __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "STATUS"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: status,
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
    value: quality,
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
    value: linkType,
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
    value: linkAttribute,
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
    value: industry,
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
    value: trafficCountry,
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
    value: currency,
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
    value: officeCountry,
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
  }, "Add Details"))) : __jsx("p", null, "Something Wrong Happened"));
};

/* harmony default export */ __webpack_exports__["default"] = (Update);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMvVXBkYXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsIlVwZGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXBkYXRlSUQiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiRGEiLCJzZXREQSIsIkRyIiwic2V0RFIiLCJVcmwiLCJzZXRVUkwiLCJxdWFsaXR5Iiwic2V0UXVhbGl0eSIsImxpbmtBIiwic2V0TGlua0EiLCJsaW5rQiIsInNldExpbmtCIiwibGlua0MiLCJzZXRMaW5rQyIsImxpbmtEIiwic2V0TGlua0QiLCJsaW5rRSIsInNldExpbmtFIiwibGlua0YiLCJzZXRMaW5rRiIsImxpbmtHIiwic2V0TGlua0ciLCJsaW5rSCIsInNldExpbmtIIiwibGlua0kiLCJzZXRMaW5rSSIsImxpbmtKIiwic2V0TGlua0oiLCJkb21haW5Db21tZW50cyIsInNldERvbWFpbkNvbW1lbnRzIiwibGlua1R5cGUiLCJzZXRMaW5rVHlwZSIsImxpbmtBdHRyaWJ1dGUiLCJzZXRMaW5rQXR0cmlidXRlIiwicmVmRG9tYWlucyIsInNldFJlZkRvbWFpbnMiLCJpbmR1c3RyeSIsInNldEluZHVzdHJ5IiwidHJhZmZpY0NvdW50cnkiLCJzZXRUcmFmZmljQ291bnRyeSIsInNlbXJ1c2giLCJzZXRTZW1ydXNoIiwiYWhyZWYiLCJzZXRBaHJlZiIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwibmVnb3RpYXRlZCIsInNldE5lZ290aWF0ZWQiLCJvZmZpY2VDb3VudHJ5Iiwic2V0T2ZmaWNlQ291bnRyeSIsImNvc3RDb21tZW50cyIsInNldENvc3RDb21tZW50cyIsImNvbnRhY3REZXRhaWxzTmFtZSIsInNldENvbnRhY3REZXRhaWxzTmFtZSIsImNvbnRhY3RFbWFpbEEiLCJzZXRDb250YWN0RW1haWxBIiwiY29udGFjdEVtYWlsQiIsInNldENvbnRhY3RFbWFpbEIiLCJjb250YWN0RW1haWxDIiwic2V0Q29udGFjdEVtYWlsQyIsImNvbnRhY3RQaG9uZUEiLCJzZXRDb250YWN0UGhvbmVBIiwiY29udGFjdFBob25lQiIsInNldENvbnRhY3RQaG9uZUIiLCJNYXNxdWFsaXR5Iiwic2V0TWFzcXVhbGl0eSIsIk1hc3N0YXR1cyIsInNldE1hc3N0YXR1cyIsInR5cGUiLCJzZXR0eXBlIiwiYXR0cmlidXRlIiwic2V0YXR0cmlidXRlIiwiaW5kIiwic2V0aW5kIiwidHJhZmZpYyIsInNldHRyYWZmaWMiLCJNYXNjdXJyZW5jeSIsInNldE1hc2N1cnJlbmN5IiwiY291bnRyeSIsInNldGNvdW50cnkiLCJoYXNFcnJvcm1hcyIsInNldEVycm9yc21hcyIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVF1YWxpdHkiLCJ2YWx1ZVF1YWxpdHkiLCJoYW5kbGVDaGFuZ2VMaW5rVHlwZSIsInZhbHVlTGlua1R5cGUiLCJoYW5kbGVDaGFuZ2VMaW5rQXR0cmkiLCJ2YWx1ZUxpbmtBdHRyaSIsImhhbmRsZUNoYW5nZUN1cnIiLCJ2YWx1ZWN1cnIiLCJoYW5kbGVDaGFuZ2VNdWx0aSIsInZhbHVlQ291bnRyeSIsImhhbmRsZUNoYW5nZUNvdW50cnkiLCJ2YWx1ZVNpbmdsZSIsImhhbmRsZUNoYW5nZU11bHRpT25lIiwidmFsdWVNdWx0aU9uZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImZldGNoRGF0YU1hc3RlciIsImZldGNoIiwidGhlbiIsInJlcyIsImRhdGEyIiwianNvbiIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiY2F0Y2giLCJlcnIiLCJEb21haW5fTmFtZSIsIkRvbWFpbl9TdGF0dXMiLCJEb21haW5fREEiLCJEb21haW5fRFIiLCJEb21haW5fVVJMIiwiRG9tYWluX1F1YWxpdHkiLCJEb21haW5fTGlua19TYW1wbGVBIiwiRG9tYWluX0xpbmtfU2FtcGxlQiIsIkRvbWFpbl9MaW5rX1NhbXBsZUMiLCJEb21haW5fTGlua19TYW1wbGVEIiwiRG9tYWluX0xpbmtfU2FtcGxlRSIsIkRvbWFpbl9MaW5rX1NhbXBsZUYiLCJEb21haW5fTGlua19TYW1wbGVHIiwiRG9tYWluX0xpbmtfU2FtcGxlSCIsIkRvbWFpbl9MaW5rX1NhbXBsZUkiLCJEb21haW5fTGlua19TYW1wbGVKIiwiRG9tYWluX0NvbW1lbnRzIiwiRG9tYWluX0xpbmtfVHlwZSIsIkRvbWFpbl9MaW5rX0F0dHJpYnV0ZSIsIkRvbWFpbl9SZWZEb21Db3VudCIsIkRvbWFpbl9JbmR1c3RyeSIsIkRvbWFpbl90cmFmZmljX0NvdW50cnkiLCJEb21haW5fU0VNUnVzaCIsIkRvbWFpbl9BSFJlZiIsIkRvbWFpbl9DdXJyZW5jeSIsIkRvbWFpbl9Db3N0X09yaWdpbmFsIiwiRG9tYWluX0Nvc3RfTmVnbyIsIkRvbWFpbl9PZmZpY2VfQ291bnRyeSIsIkRvbWFpbl9Db3N0X0NvbW1lbnRzIiwiRG9tYWluX0NvbnRhY3RfUGVyc29uIiwiRG9tYWluX0NvbnRhY3RfRW1haWxBIiwiRG9tYWluX0NvbnRhY3RfRW1haWxCIiwiRG9tYWluX0NvbnRhY3RfRW1haWxDIiwiRG9tYWluX0NvbnRhY3RfUGhvbmVBIiwiRG9tYWluX0NvbnRhY3RfUGhvbmVCIiwicG9zdERhdGEiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJvayIsImVycm9yIiwibWVzc2FnZSIsIlByb21pc2UiLCJyZWplY3QiLCJSb3V0ZXIiLCJwdXNoIiwibGVuZ3RoIiwiZm9udFdlaWdodCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsImUiLCJ0YXJnZXQiLCJtYXAiLCJlbCIsImtleSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUVBO0FBQUYsSUFBYUMsMkNBQW5CO0FBQ0E7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU07QUFDSkMsU0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFESCxNQUVGSCxNQUZKO0FBSUEsUUFBTTtBQUFBLE9BQUNJLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkosc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY1Isc0RBQVEsQ0FBQyxFQUFELENBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLEVBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWNWLHNEQUFRLENBQUMsRUFBRCxDQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDVyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQlosc0RBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCZCxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFB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QjtBQUNEO0FBWEgsSUFGRixFQWVFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xrRixZQUFNLEVBQUUsZ0JBREg7QUFFTEMsYUFBTyxFQUFFLEtBRko7QUFHTEMsa0JBQVksRUFBRSxLQUhUO0FBSUxDLGtCQUFZLEVBQUUsTUFKVDtBQUtMQyxXQUFLLEVBQUU7QUFMRixLQURUO0FBUUUsU0FBSyxFQUFFM0csYUFSVDtBQVNFLFlBQVEsRUFBRzRHLENBQUQsSUFBTztBQUNmM0csc0JBQWdCLENBQUMyRyxDQUFDLENBQUNDLE1BQUYsQ0FBU3hGLEtBQVYsQ0FBaEI7QUFDRDtBQVhILElBZkYsQ0FqZkYsRUE4Z0JFO0FBQ0UsU0FBSyxFQUFFO0FBQ0w0RixhQUFPLEVBQUUsTUFESjtBQUVMRSxvQkFBYyxFQUFFLFFBRlg7QUFHTEMsZ0JBQVUsRUFBRTtBQUhQO0FBRFQsS0FPRTtBQUNFLFNBQUssRUFBRTtBQUNMWixhQUFPLEVBQUUsTUFESjtBQUVMQyxrQkFBWSxFQUFFLEtBRlQ7QUFHTGMscUJBQWUsRUFBRSxPQUhaO0FBSUxqQixnQkFBVSxFQUFFLE1BSlA7QUFLTEksa0JBQVksRUFBRTtBQUxULEtBRFQ7QUFRRSxXQUFPLEVBQUUsTUFBTTtBQUNickIsY0FBUTtBQUNUO0FBVkgsbUJBUEYsQ0E5Z0JGLENBREQsR0F1aUJDLDRDQXhpQkosQ0FERjtBQTZpQkQsQ0Ezd0JEOztBQTR3QmVuSyxxRUFBZixFIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVwZGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgdXBkYXRlSUQgfSxcclxuICB9ID0gcm91dGVyO1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0RhLCBzZXREQV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbRHIsIHNldERSXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtVcmwsIHNldFVSTF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVhbGl0eSwgc2V0UXVhbGl0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0EsIHNldExpbmtBXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rQiwgc2V0TGlua0JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtDLCBzZXRMaW5rQ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0QsIHNldExpbmtEXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rRSwgc2V0TGlua0VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtGLCBzZXRMaW5rRl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0csIHNldExpbmtHXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaW5rSCwgc2V0TGlua0hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtJLCBzZXRMaW5rSV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0osIHNldExpbmtKXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkb21haW5Db21tZW50cywgc2V0RG9tYWluQ29tbWVudHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpbmtUeXBlLCBzZXRMaW5rVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlua0F0dHJpYnV0ZSwgc2V0TGlua0F0dHJpYnV0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVmRG9tYWlucywgc2V0UmVmRG9tYWluc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW5kdXN0cnksIHNldEluZHVzdHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0cmFmZmljQ291bnRyeSwgc2V0VHJhZmZpY0NvdW50cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlbXJ1c2gsIHNldFNlbXJ1c2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FocmVmLCBzZXRBaHJlZl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcmlnaW5hbCwgc2V0T3JpZ2luYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25lZ290aWF0ZWQsIHNldE5lZ290aWF0ZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29mZmljZUNvdW50cnksIHNldE9mZmljZUNvdW50cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Nvc3RDb21tZW50cywgc2V0Q29zdENvbW1lbnRzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb250YWN0RGV0YWlsc05hbWUsIHNldENvbnRhY3REZXRhaWxzTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGFjdEVtYWlsQSwgc2V0Q29udGFjdEVtYWlsQV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGFjdEVtYWlsQiwgc2V0Q29udGFjdEVtYWlsQl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGFjdEVtYWlsQywgc2V0Q29udGFjdEVtYWlsQ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGFjdFBob25lQSwgc2V0Q29udGFjdFBob25lQV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGFjdFBob25lQiwgc2V0Q29udGFjdFBob25lQl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBbTWFzcXVhbGl0eSwgc2V0TWFzcXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW01hc3N0YXR1cywgc2V0TWFzc3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHlwZSwgc2V0dHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2F0dHJpYnV0ZSwgc2V0YXR0cmlidXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5kLCBzZXRpbmRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0cmFmZmljLCBzZXR0cmFmZmljXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbTWFzY3VycmVuY3ksIHNldE1hc2N1cnJlbmN5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Y291bnRyeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hhc0Vycm9ybWFzLCBzZXRFcnJvcnNtYXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdmFsdWUsIFwidmFsdWVTdGF0dXNcIik7XHJcbiAgICBzZXRTdGF0dXModmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlUXVhbGl0eSh2YWx1ZVF1YWxpdHkpIHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZVF1YWxpdHksIFwicXVhbGl0eVwiKTtcclxuICAgIHNldFF1YWxpdHkodmFsdWVRdWFsaXR5KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTGlua1R5cGUodmFsdWVMaW5rVHlwZSkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVMaW5rVHlwZSwgXCJsaW5rVHlwZVwiKTtcclxuICAgIHNldExpbmtUeXBlKHZhbHVlTGlua1R5cGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTGlua0F0dHJpKHZhbHVlTGlua0F0dHJpKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZUxpbmtBdHRyaSwgXCJhdHRyaWJ1dGVcIik7XHJcbiAgICBzZXRMaW5rQXR0cmlidXRlKHZhbHVlTGlua0F0dHJpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlQ3Vycih2YWx1ZWN1cnIpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlY3VyciwgXCJjdXJyZW5jeVwiKTtcclxuICAgIHNldEN1cnJlbmN5KHZhbHVlY3Vycik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU11bHRpKHZhbHVlQ291bnRyeSkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVDb3VudHJ5LCBcImluZHVzdHJ5XCIpO1xyXG4gICAgc2V0SW5kdXN0cnkodmFsdWVDb3VudHJ5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUNvdW50cnkodmFsdWVTaW5nbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlU2luZ2xlfWApO1xyXG4gICAgc2V0T2ZmaWNlQ291bnRyeSh2YWx1ZVNpbmdsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZU11bHRpT25lKHZhbHVlTXVsdGlPbmUpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlTXVsdGlPbmUsIFwidHJhZmZpY0NcIik7XHJcbiAgICBzZXRUcmFmZmljQ291bnRyeSh2YWx1ZU11bHRpT25lKTtcclxuICAgIC8vIGxldCBvYmogPSB7IC4uLkZvcm1EYXRhIH07XHJcbiAgICAvLyBvYmouRG9tYWluX3RyYWZmaWNfQ291bnRyeSA9IHZhbHVlTXVsdGlPbmUudG9TdHJpbmcoKTtcclxuICAgIC8vIHNldEZvcm1EYXRhKHsgLi4ub2JqIH0pO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnREaWRNb3VudFwiKTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gICAgZmV0Y2hEYXRhTWFzdGVyKCk7XHJcbiAgfSwgWzBdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhTWFzdGVyID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21hc3Rlci9cIilcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhMiwgXCJkZGRkZGRkZGRkZGRkZGRkZFwiKTtcclxuICAgICAgICBzZXRNYXNzdGF0dXMoZGF0YTJbMF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0TWFzcXVhbGl0eShkYXRhMlsxXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXR0eXBlKGRhdGEyWzJdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldGF0dHJpYnV0ZShkYXRhMlszXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRpbmQoZGF0YTJbNF0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHJhZmZpYyhkYXRhMls1XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRNYXNjdXJyZW5jeShkYXRhMls2XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRjb3VudHJ5KGRhdGEyWzddLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yc21hcyhlcnIpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9kb21haW4vJHt1cGRhdGVJRH1gKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEyLCBcIjIwMDAwMDAwMFwiKTtcclxuICAgICAgICBzZXROYW1lKGRhdGEyWzBdLkRvbWFpbl9OYW1lKTtcclxuICAgICAgICBzZXRTdGF0dXMoZGF0YTJbMF0uRG9tYWluX1N0YXR1cyk7XHJcbiAgICAgICAgc2V0REEoZGF0YTJbMF0uRG9tYWluX0RBKTtcclxuICAgICAgICBzZXREUihkYXRhMlswXS5Eb21haW5fRFIpO1xyXG4gICAgICAgIHNldFVSTChkYXRhMlswXS5Eb21haW5fVVJMKTtcclxuICAgICAgICBzZXRRdWFsaXR5KGRhdGEyWzBdLkRvbWFpbl9RdWFsaXR5KTtcclxuICAgICAgICBzZXRMaW5rQShkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVBKTtcclxuICAgICAgICBzZXRMaW5rQihkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVCKTtcclxuICAgICAgICBzZXRMaW5rQyhkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVDKTtcclxuICAgICAgICBzZXRMaW5rRChkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVEKTtcclxuICAgICAgICBzZXRMaW5rRShkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVFKTtcclxuICAgICAgICBzZXRMaW5rRihkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVGKTtcclxuICAgICAgICBzZXRMaW5rRyhkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVHKTtcclxuICAgICAgICBzZXRMaW5rSChkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVIKTtcclxuICAgICAgICBzZXRMaW5rSShkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVJKTtcclxuICAgICAgICBzZXRMaW5rSihkYXRhMlswXS5Eb21haW5fTGlua19TYW1wbGVKKTtcclxuICAgICAgICBzZXREb21haW5Db21tZW50cyhkYXRhMlswXS5Eb21haW5fQ29tbWVudHMpO1xyXG4gICAgICAgIHNldExpbmtUeXBlKGRhdGEyWzBdLkRvbWFpbl9MaW5rX1R5cGUpO1xyXG4gICAgICAgIHNldExpbmtBdHRyaWJ1dGUoZGF0YTJbMF0uRG9tYWluX0xpbmtfQXR0cmlidXRlKTtcclxuICAgICAgICBzZXRSZWZEb21haW5zKGRhdGEyWzBdLkRvbWFpbl9SZWZEb21Db3VudCk7XHJcbiAgICAgICAgc2V0SW5kdXN0cnkoZGF0YTJbMF0uRG9tYWluX0luZHVzdHJ5LnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0VHJhZmZpY0NvdW50cnkoZGF0YTJbMF0uRG9tYWluX3RyYWZmaWNfQ291bnRyeS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldFNlbXJ1c2goZGF0YTJbMF0uRG9tYWluX1NFTVJ1c2gpO1xyXG4gICAgICAgIHNldEFocmVmKGRhdGEyWzBdLkRvbWFpbl9BSFJlZik7XHJcbiAgICAgICAgc2V0Q3VycmVuY3koZGF0YTJbMF0uRG9tYWluX0N1cnJlbmN5KTtcclxuICAgICAgICBzZXRPcmlnaW5hbChkYXRhMlswXS5Eb21haW5fQ29zdF9PcmlnaW5hbCk7XHJcbiAgICAgICAgc2V0TmVnb3RpYXRlZChkYXRhMlswXS5Eb21haW5fQ29zdF9OZWdvKTtcclxuICAgICAgICBzZXRPZmZpY2VDb3VudHJ5KGRhdGEyWzBdLkRvbWFpbl9PZmZpY2VfQ291bnRyeSk7XHJcbiAgICAgICAgc2V0Q29zdENvbW1lbnRzKGRhdGEyWzBdLkRvbWFpbl9Db3N0X0NvbW1lbnRzKTtcclxuICAgICAgICBzZXRDb250YWN0RGV0YWlsc05hbWUoZGF0YTJbMF0uRG9tYWluX0NvbnRhY3RfUGVyc29uKTtcclxuICAgICAgICBzZXRDb250YWN0RW1haWxBKGRhdGEyWzBdLkRvbWFpbl9Db250YWN0X0VtYWlsQSk7XHJcbiAgICAgICAgc2V0Q29udGFjdEVtYWlsQihkYXRhMlswXS5Eb21haW5fQ29udGFjdF9FbWFpbEIpO1xyXG4gICAgICAgIHNldENvbnRhY3RFbWFpbEMoZGF0YTJbMF0uRG9tYWluX0NvbnRhY3RfRW1haWxDKTtcclxuICAgICAgICBzZXRDb250YWN0UGhvbmVBKGRhdGEyWzBdLkRvbWFpbl9Db250YWN0X1Bob25lQSk7XHJcbiAgICAgICAgc2V0Q29udGFjdFBob25lQihkYXRhMlswXS5Eb21haW5fQ29udGFjdF9QaG9uZUIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgRG9tYWluX05hbWU6IG5hbWUsXHJcbiAgICAgICAgRG9tYWluX1N0YXR1czogc3RhdHVzLFxyXG4gICAgICAgIERvbWFpbl9EQTogRGEsXHJcbiAgICAgICAgRG9tYWluX0RSOiBEcixcclxuICAgICAgICBEb21haW5fVVJMOiBVcmwsXHJcbiAgICAgICAgRG9tYWluX1F1YWxpdHk6IHF1YWxpdHksXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQTogbGlua0EsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQjogbGlua0IsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlQzogbGlua0MsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRDogbGlua0QsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRTogbGlua0UsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRjogbGlua0YsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlRzogbGlua0csXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSDogbGlua0gsXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSTogbGlua0ksXHJcbiAgICAgICAgRG9tYWluX0xpbmtfU2FtcGxlSjogbGlua0osXHJcbiAgICAgICAgRG9tYWluX0NvbW1lbnRzOiBkb21haW5Db21tZW50cyxcclxuICAgICAgICBEb21haW5fTGlua19UeXBlOiBsaW5rVHlwZSxcclxuICAgICAgICBEb21haW5fTGlua19BdHRyaWJ1dGU6IGxpbmtBdHRyaWJ1dGUsXHJcbiAgICAgICAgRG9tYWluX1JlZkRvbUNvdW50OiByZWZEb21haW5zLFxyXG4gICAgICAgIERvbWFpbl9JbmR1c3RyeTogaW5kdXN0cnkudG9TdHJpbmcoKSxcclxuICAgICAgICBEb21haW5fdHJhZmZpY19Db3VudHJ5OiB0cmFmZmljQ291bnRyeS50b1N0cmluZygpLFxyXG4gICAgICAgIERvbWFpbl9TRU1SdXNoOiBzZW1ydXNoLFxyXG4gICAgICAgIERvbWFpbl9BSFJlZjogYWhyZWYsXHJcbiAgICAgICAgRG9tYWluX0N1cnJlbmN5OiBjdXJyZW5jeSxcclxuICAgICAgICBEb21haW5fQ29zdF9PcmlnaW5hbDogb3JpZ2luYWwsXHJcbiAgICAgICAgRG9tYWluX0Nvc3RfTmVnbzogbmVnb3RpYXRlZCxcclxuICAgICAgICBEb21haW5fT2ZmaWNlX0NvdW50cnk6IG9mZmljZUNvdW50cnksXHJcbiAgICAgICAgRG9tYWluX0Nvc3RfQ29tbWVudHM6IGNvc3RDb21tZW50cyxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9QZXJzb246IGNvbnRhY3REZXRhaWxzTmFtZSxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9FbWFpbEE6IGNvbnRhY3RFbWFpbEEsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfRW1haWxCOiBjb250YWN0RW1haWxCLFxyXG4gICAgICAgIERvbWFpbl9Db250YWN0X0VtYWlsQzogY29udGFjdEVtYWlsQyxcclxuICAgICAgICBEb21haW5fQ29udGFjdF9QaG9uZUE6IGNvbnRhY3RQaG9uZUEsXHJcbiAgICAgICAgRG9tYWluX0NvbnRhY3RfUGhvbmVCOiBjb250YWN0UGhvbmVCLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9kb21haW4vJHt1cGRhdGVJRH1gLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBnZXQgZXJyb3IgbWVzc2FnZSBmcm9tIGJvZHkgb3IgZGVmYXVsdCB0byByZXNwb25zZSBzdGF0dXNcclxuICAgICAgICAgIGNvbnN0IGVycm9yID0gKGRhdGEgJiYgZGF0YS5tZXNzYWdlKSB8fCByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgUm91dGVyLnB1c2goXCJhbGxfZG9tYWluXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZGF0YS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMiBpZD1cImRvbWFpblwiPkRvbWFpbiBEZXRhaWxzPC9oMj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TkFNRTwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+U1RBVFVTPC9wPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge01hc3N0YXR1cy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPjtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEQVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17RGF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERSXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtEcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERSKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+VVJMOjwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtVcmx9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVSTChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+UXVhbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1YWxpdHl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUXVhbGl0eX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge01hc3F1YWxpdHkubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2tleS50b1N0cmluZygpfT57ZWx9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5MaW5rIFNhbXBsZXM8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0F9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0EoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtCfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtCKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rQ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW5rQyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtFfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtFKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rRn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW5rRihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0d9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpbmtIfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExpbmtIKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rSX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW5rSShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua0p9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TGlua0ooZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+RG9tYWluIENvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RvbWFpbkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RG9tYWluQ29tbWVudHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkxpbmsgVHlwZTwvcD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlua1R5cGV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwLCBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMaW5rVHlwZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dHlwZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2tleS50b1N0cmluZygpfT57ZWx9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkxpbmsgQXR0cmlidXRlPC9wPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5rQXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTGlua0F0dHJpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAge2F0dHJpYnV0ZS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybig8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPik7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlJlZiBEb21haW5zPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZWZEb21haW5zfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFJlZkRvbWFpbnMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5JbmR1c3RyeTwvcD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2luZHVzdHJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VNdWx0aX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpbmQubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyIGlkPVwidHJhZmZpY1wiPlRyYWZmaWMgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5UcmFmZmljIENvdW50cnk8L3A+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0cmFmZmljQ291bnRyeX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTXVsdGlPbmV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dHJhZmZpYy5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybig8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPik7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5TRU1SVVNIIFRyYWZmaWM8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbXJ1c2h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VtcnVzaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5BSFJFRiBUcmFmZmljPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXthaHJlZn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBaHJlZihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiB9fSBpZD1cImNvc3RcIj5cclxuICAgICAgICAgICAgQ29zdCBEZXRhaWxzXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+Q3VycmVuY3k8L3A+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ3Vycn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7TWFzY3VycmVuY3kubWFwKChlbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oPG9wdGlvbiB2YWx1ZT17a2V5LnRvU3RyaW5nKCl9PntlbH08L29wdGlvbj4pO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5PcmlnaW5hbDwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JpZ2luYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3JpZ2luYWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5OZWdvdGlhdGVkPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZWdvdGlhdGVkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE5lZ290aWF0ZWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCJmaXQtY29udGVudFwiIH19PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5PZmZpY2UgQ291bnRyeTwvcD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtvZmZpY2VDb3VudHJ5fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb3VudHJ5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICB7Y291bnRyeS5tYXAoKGVsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybig8b3B0aW9uIHZhbHVlPXtrZXkudG9TdHJpbmcoKX0+e2VsfTwvb3B0aW9uPik7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5Db3N0IENvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Nvc3RDb21tZW50c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvc3RDb21tZW50cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1MHB4XCIgfX0gaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIENvbnRhY3QgRGV0YWlsc1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5hbWU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdERldGFpbHNOYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdERldGFpbHNOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5FbWFpbDwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0RW1haWxBfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdEVtYWlsQShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0RW1haWxCfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdEVtYWlsQihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0RW1haWxDfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdEVtYWlsQyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+UGhvbmU8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3RQaG9uZUF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb250YWN0UGhvbmVBKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0UGhvbmVCfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdFBob25lQihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBEZXRhaWxzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+U29tZXRoaW5nIFdyb25nIEhhcHBlbmVkPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9