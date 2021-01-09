exports.ids = [1];
exports.modules = {

/***/ "./routes/AllDomain/index.js":
/*!***********************************!*\
  !*** ./routes/AllDomain/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  Column,
  ColumnGroup
} = antd__WEBPACK_IMPORTED_MODULE_3__["Table"];


let wid = "75%";

const AllDomain = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: hasError,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hasErrormas,
    1: setErrorsmas
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: viewData,
    1: setViewData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: hasViewError,
    1: setViewErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); //////////////////////////

  const {
    0: quality,
    1: setquality
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: status,
    1: setstatus
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
    0: currency,
    1: setcurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: country,
    1: setcountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/api/v1/domain/");
      res.json().then(res => setData(res)).catch(err => setErrors(err));
    }

    fetchData();
    fetchDataMaster();
  }, [0]);

  const fetchDataMaster = () => {
    fetch("http://localhost:5000/api/v1/master/").then(async res => {
      const data2 = await res.json();
      console.log(data2, "ddddddddddddddddd");
      setstatus(data2[0].Master_Table.split(","));
      setquality(data2[1].Master_Table.split(","));
      settype(data2[2].Master_Table.split(","));
      setattribute(data2[3].Master_Table.split(","));
      setind(data2[4].Master_Table.split(","));
      settraffic(data2[5].Master_Table.split(","));
      setcurrency(data2[6].Master_Table.split(","));
      setcountry(data2[7].Master_Table.split(",")); // console.log(status, "llllllllllllllllll");
    }).catch(err => setErrorsmas(err));
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return __jsx("div", {
    style: {
      overflow: "scroll"
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "10px"
    }
  }, __jsx("button", {
    style: {
      borderRadius: "5px",
      padding: "10px"
    },
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/MasterTables");
    }
  }, "Manage Master")), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: "10px"
    }
  }, __jsx("button", {
    style: {
      borderRadius: "5px",
      padding: "10px"
    },
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/AddNew");
    }
  }, "Add New"))), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "Domain Details",
    visible: isModalVisible,
    onOk: handleOk,
    onCancel: handleCancel,
    width: wid,
    style: {
      overflow: "scroll"
    }
  }, __jsx("div", null, console.log(viewData), viewData.length !== 0 ? __jsx("div", null, console.log(viewData), __jsx("div", {
    style: {
      display: "flex",
      width: "100%"
    }
  }, __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("p", {
    style: {
      paddingRight: "5px",
      fontWeight: "bold"
    }
  }, "NAME:"), __jsx("p", {
    style: {
      paddingRight: "30px",
      wordBreak: "break-word"
    }
  }, viewData[0].Domain_Name === null ? "N/A" : viewData[0].Domain_Name)), __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
    color: viewData[0].Domain_Status === "1" ? "green" : "red",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: "30px",
      marginRight: "30px",
      marginTop: "auto",
      marginBottom: "auto"
    }
  }, viewData[0].Domain_Status.split(",").map(el => status[parseInt(el)])), __jsx("div", {
    style: {
      marginTop: "0px",
      paddingTop: "0px",
      marginLeft: "50px"
    }
  }, __jsx("p", {
    style: {
      textAlign: "center",
      marginRight: "20px",
      marginBottom: "5px",
      fontWeight: "bold"
    }
  }, "DA"), __jsx("p", {
    style: {
      marginRight: "20px",
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_DA === null ? "N/A" : viewData[0].Domain_DA)), __jsx("div", {
    style: {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }, __jsx("p", {
    style: {
      textAlign: "center",
      marginRight: "20px",
      marginBottom: "5px",
      fontWeight: "bold"
    }
  }, "DR"), __jsx("p", {
    style: {
      marginRight: "20px",
      border: "1px solid grey",
      padding: "5px",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_DR === null ? "N/A" : viewData[0].Domain_DR))))), __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "50% 50%"
    }
  }, __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      width: "100%",
      marginRight: "10px"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "URL:"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_URL === null ? "N/A" : viewData[0].Domain_URL)), __jsx("div", {
    style: {
      width: "100%"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Quality"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Quality.split(",").map(el => quality[parseInt(el)]))))), __jsx("div", {
    style: {}
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Samples"), __jsx("div", null, __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleA === null ? "N/A" : viewData[0].Domain_Link_SampleA), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleB === null ? "N/A" : viewData[0].Domain_Link_SampleB), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleC === null ? "N/A" : viewData[0].Domain_Link_SampleC), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleD === null ? "N/A" : viewData[0].Domain_Link_SampleD), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleE === null ? "N/A" : viewData[0].Domain_Link_SampleE), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleF === null ? "N/A" : viewData[0].Domain_Link_SampleF), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleG === null ? "N/A" : viewData[0].Domain_Link_SampleG), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleH === null ? "N/A" : viewData[0].Domain_Link_SampleH), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleI === null ? "N/A" : viewData[0].Domain_Link_SampleI), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Link_SampleJ === null ? "N/A" : viewData[0].Domain_Link_SampleJ))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Domain Comments"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Comments === null ? "N/A" : viewData[0].Domain_Comments === null ? "N/A" : viewData[0].Domain_Comments)), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  }, __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Type"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      textAlign: "center"
    }
  }, viewData[0].Domain_Link_Type.split(",").map(el => type[parseInt(el)]))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Link Attribute"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      textAlign: "center"
    }
  }, viewData[0].Domain_Link_Attribute.split(",").map(el => attribute[parseInt(el)]))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Ref Domains"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      textAlign: "center"
    }
  }, viewData[0].Domain_RefDomCount === null ? "N/A" : viewData[0].Domain_RefDomCount))), __jsx("div", {
    style: {
      marginBottom: "50px"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Industry"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Industry.split(",").map(el => ind[parseInt(el)] + ", "))), __jsx("h2", null, "Traffic Details"), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Traffic Country"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_traffic_Country.split(",").map(el => traffic[parseInt(el)] + ", "))), __jsx("div", {
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
  }, "SEMRUSH Traffic"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_SEMRush === null ? "N/A" : viewData[0].Domain_SEMRush)), __jsx("div", {
    style: {
      paddingLeft: "50px"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "AHREF Traffic"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_AHRef === null ? "N/A" : viewData[0].Domain_AHRef))), __jsx("h2", {
    style: {
      marginTop: "50px"
    }
  }, "Cost Details"), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-evenly"
    }
  }, __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Currency"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Currency.split(",").map(el => currency[parseInt(el)] + ""))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Original"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Cost_Original === null ? "N/A" : viewData[0].Domain_Cost_Original)), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Negotiated"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Cost_Nego === null ? "N/A" : viewData[0].Domain_Cost_Nego))), __jsx("div", {
    style: {
      width: "fit-content"
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Office Country"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Office_Country.split(",").map(el => country[parseInt(el)] + ""))), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Cost Comments"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px"
    }
  }, viewData[0].Domain_Cost_Comments === null ? "N/A" : viewData[0].Domain_Cost_Comments)), __jsx("h2", {
    style: {
      marginTop: "50px"
    }
  }, "Contact Details"), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Name"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Contact_Person === null ? "N/A" : viewData[0].Domain_Contact_Person)), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Email"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Contact_EmailA === null ? "N/A" : viewData[0].Domain_Contact_EmailA), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Contact_EmailB === null ? "N/A" : viewData[0].Domain_Contact_EmailB), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Contact_EmailC === null ? "N/A" : viewData[0].Domain_Contact_EmailC)), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Phone"), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Contact_PhoneA === null ? "N/A" : viewData[0].Domain_Contact_PhoneA), __jsx("p", {
    style: {
      padding: "5px",
      border: "1px solid grey",
      borderRadius: "5px",
      width: "fit-content"
    }
  }, viewData[0].Domain_Contact_PhoneB === null ? "N/A" : viewData[0].Domain_Contact_PhoneB)), __jsx("h2", {
    style: {
      marginTop: "50px"
    }
  }, "Time Details"), __jsx("div", null, __jsx("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Time of Creation"), __jsx("div", {
    style: {
      display: "flex",
      border: "1px solid grey",
      borderRadius: "5px",
      paddingTop: "8px",
      width: "fit-content"
    }
  }, __jsx("p", {
    style: {
      marginRight: "10px"
    }
  }, viewData[0].Creation_Date.split(".")[0].split("T")[0]), __jsx("p", null, viewData[0].Creation_Date.split(".")[0].split("T")[1])), __jsx("p", {
    style: {
      fontWeight: "bold",
      marginTop: "10px"
    }
  }, "Time of Updation"), __jsx("div", {
    style: {
      display: "flex",
      border: "1px solid grey",
      borderRadius: "5px",
      paddingTop: "8px",
      width: "fit-content"
    }
  }, __jsx("p", {
    style: {
      marginRight: "10px"
    }
  }, viewData[0].Updation_Date.split(".")[0].split("T")[0]), __jsx("p", null, viewData[0].Updation_Date.split(".")[0].split("T")[1])))) : __jsx("p", null, "No data found")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    dataSource: data
  }, __jsx(ColumnGroup, {
    title: "Domain Name"
  }, __jsx(Column, {
    title: "Company",
    dataIndex: "Domain_Name",
    key: "Domain_Name",
    ellipsis: "true",
    width: "200px"
  }), __jsx(Column, {
    title: "Website",
    dataIndex: "Domain_URL",
    key: "Domain_URL",
    width: "100px"
  })), __jsx(Column, {
    title: "Status",
    dataIndex: "Domain_Status",
    width: "100px",
    key: "Domain_Status",
    render: Domain_Status => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
      color: Domain_Status === "1" ? "green" : "red",
      key: Domain_Status
    }, Domain_Status.split(",").map(el => status[parseInt(el)])))
  }), __jsx(Column, {
    title: "Type",
    dataIndex: "Domain_Link_Type",
    width: "100px",
    key: "Domain_Link_Type",
    render: Domain_Link_Type => __jsx("p", null, Domain_Link_Type.split(",").map(el => type[parseInt(el)]))
  }), __jsx(ColumnGroup, {
    title: "DA | DR"
  }, __jsx(Column, {
    title: "DA",
    dataIndex: "Domain_DA",
    width: "100px",
    key: "Domain_DA"
  }), __jsx(Column, {
    title: "DR",
    dataIndex: "Domain_DR",
    width: "100px",
    key: "Domain_DR"
  })), __jsx(Column, {
    title: "Quality",
    dataIndex: "Domain_Quality",
    width: "100px",
    key: "Domain_Quality",
    render: Domain_Quality => __jsx("p", null, Domain_Quality.split(",").map(el => quality[parseInt(el)]))
  }), __jsx(ColumnGroup, {
    title: "Traffic"
  }, __jsx(Column, {
    title: "SEMRush",
    dataIndex: "Domain_SEMRush",
    width: "100px",
    key: "Domain_SEMRush"
  }), __jsx(Column, {
    title: "AHRef",
    dataIndex: "Domain_AHRef",
    width: "100px",
    key: "Domain_AHRef"
  })), __jsx(Column, {
    title: "Action",
    width: "200px",
    key: "action",
    render: data => __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
      size: "middle"
    }, __jsx("a", {
      onClick: () => {
        async function fetchData() {
          const resV = await fetch(`http://localhost:5000/api/v1/domain/${data.DomainID}`);
          resV.json().then(resV => setViewData(resV)).catch(err => setViewErrors(err));
        }

        fetchData().then(() => {
          setIsModalVisible(true);
        });
      }
    }, "View"), __jsx("a", {
      onClick: () => {
        const editData = () => {
          console.log(data.DomainID);
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
            pathname: "/update",
            query: {
              updateID: `${data.DomainID}`
            }
          });
        };

        editData();
      }
    }, "Edit"), __jsx("a", {
      onClick: () => {
        async function fetchDataDel() {
          const resV = await fetch(`http://localhost:5000/api/v1/domain/${data.DomainID}`, {
            method: "DELETE"
          }).then(res => res.text()) // or res.json()
          .then(res => console.log(res));
        }

        fetchDataDel().then(() => {
          window.location.reload(false);
        });
      }
    }, "Delete"))
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AllDomain);
{
  /* <Column
          title="Tags"
          dataIndex="tags"
          width="100px" key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? "geekblue" : "purple";
                if (tag === "loser") {
                  color = "blue";
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        /> */
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMvQWxsRG9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbHVtbiIsIkNvbHVtbkdyb3VwIiwiVGFibGUiLCJ3aWQiLCJBbGxEb21haW4iLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiaGFzRXJyb3IiLCJzZXRFcnJvcnMiLCJoYXNFcnJvcm1hcyIsInNldEVycm9yc21hcyIsInZpZXdEYXRhIiwic2V0Vmlld0RhdGEiLCJoYXNWaWV3RXJyb3IiLCJzZXRWaWV3RXJyb3JzIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsInF1YWxpdHkiLCJzZXRxdWFsaXR5Iiwic3RhdHVzIiwic2V0c3RhdHVzIiwidHlwZSIsInNldHR5cGUiLCJhdHRyaWJ1dGUiLCJzZXRhdHRyaWJ1dGUiLCJpbmQiLCJzZXRpbmQiLCJ0cmFmZmljIiwic2V0dHJhZmZpYyIsImN1cnJlbmN5Iiwic2V0Y3VycmVuY3kiLCJjb3VudHJ5Iiwic2V0Y291bnRyeSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwianNvbiIsInRoZW4iLCJjYXRjaCIsImVyciIsImZldGNoRGF0YU1hc3RlciIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsIk1hc3Rlcl9UYWJsZSIsInNwbGl0IiwiaGFuZGxlT2siLCJoYW5kbGVDYW5jZWwiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiUm91dGVyIiwicHVzaCIsImxlbmd0aCIsIndpZHRoIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInBhZGRpbmdSaWdodCIsImZvbnRXZWlnaHQiLCJ3b3JkQnJlYWsiLCJEb21haW5fTmFtZSIsIkRvbWFpbl9TdGF0dXMiLCJtYXhIZWlnaHQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsIm1hcCIsImVsIiwicGFyc2VJbnQiLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsImJvcmRlciIsIkRvbWFpbl9EQSIsIkRvbWFpbl9EUiIsIkRvbWFpbl9VUkwiLCJEb21haW5fUXVhbGl0eSIsIkRvbWFpbl9MaW5rX1NhbXBsZUEiLCJEb21haW5fTGlua19TYW1wbGVCIiwiRG9tYWluX0xpbmtfU2FtcGxlQyIsIkRvbWFpbl9MaW5rX1NhbXBsZUQiLCJEb21haW5fTGlua19TYW1wbGVFIiwiRG9tYWluX0xpbmtfU2FtcGxlRiIsIkRvbWFpbl9MaW5rX1NhbXBsZUciLCJEb21haW5fTGlua19TYW1wbGVIIiwiRG9tYWluX0xpbmtfU2FtcGxlSSIsIkRvbWFpbl9MaW5rX1NhbXBsZUoiLCJEb21haW5fQ29tbWVudHMiLCJEb21haW5fTGlua19UeXBlIiwiRG9tYWluX0xpbmtfQXR0cmlidXRlIiwiRG9tYWluX1JlZkRvbUNvdW50IiwiRG9tYWluX0luZHVzdHJ5IiwiRG9tYWluX3RyYWZmaWNfQ291bnRyeSIsInBhZGRpbmdMZWZ0IiwiRG9tYWluX1NFTVJ1c2giLCJEb21haW5fQUhSZWYiLCJEb21haW5fQ3VycmVuY3kiLCJEb21haW5fQ29zdF9PcmlnaW5hbCIsIkRvbWFpbl9Db3N0X05lZ28iLCJEb21haW5fT2ZmaWNlX0NvdW50cnkiLCJEb21haW5fQ29zdF9Db21tZW50cyIsIkRvbWFpbl9Db250YWN0X1BlcnNvbiIsIkRvbWFpbl9Db250YWN0X0VtYWlsQSIsIkRvbWFpbl9Db250YWN0X0VtYWlsQiIsIkRvbWFpbl9Db250YWN0X0VtYWlsQyIsIkRvbWFpbl9Db250YWN0X1Bob25lQSIsIkRvbWFpbl9Db250YWN0X1Bob25lQiIsIkNyZWF0aW9uX0RhdGUiLCJVcGRhdGlvbl9EYXRlIiwicmVzViIsIkRvbWFpbklEIiwiZWRpdERhdGEiLCJwYXRobmFtZSIsInF1ZXJ5IiwidXBkYXRlSUQiLCJmZXRjaERhdGFEZWwiLCJtZXRob2QiLCJ0ZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwi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QU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsS0FBdkI7QUFDRCxTQUZEO0FBR0Q7QUFiSCxnQkFqQ0Y7QUFMSixJQTFGRixDQXZuQkYsQ0FERjtBQSt3QkQsQ0F4MEJEOztBQTAwQmV4SCx3RUFBZjtBQUVBO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLEMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFnLCBTcGFjZSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHsgQ29sdW1uLCBDb2x1bW5Hcm91cCB9ID0gVGFibGU7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgc2V0LCB1cGRhdGUgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5sZXQgd2lkID0gXCI3NSVcIjtcclxuXHJcbmNvbnN0IEFsbERvbWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNFcnJvcm1hcywgc2V0RXJyb3JzbWFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlld0RhdGEsIHNldFZpZXdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGFzVmlld0Vycm9yLCBzZXRWaWV3RXJyb3JzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBjb25zdCBbcXVhbGl0eSwgc2V0cXVhbGl0eV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0c3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHlwZSwgc2V0dHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2F0dHJpYnV0ZSwgc2V0YXR0cmlidXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5kLCBzZXRpbmRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0cmFmZmljLCBzZXR0cmFmZmljXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldGN1cnJlbmN5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Y291bnRyeV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9kb21haW4vXCIpO1xyXG4gICAgICByZXNcclxuICAgICAgICAuanNvbigpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gc2V0RGF0YShyZXMpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcnMoZXJyKSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICAgIGZldGNoRGF0YU1hc3RlcigpO1xyXG4gIH0sIFswXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YU1hc3RlciA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYXN0ZXIvXCIpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YTIsIFwiZGRkZGRkZGRkZGRkZGRkZGRcIik7XHJcbiAgICAgICAgc2V0c3RhdHVzKGRhdGEyWzBdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHF1YWxpdHkoZGF0YTJbMV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0dHlwZShkYXRhMlsyXS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICBzZXRhdHRyaWJ1dGUoZGF0YTJbM10uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0aW5kKGRhdGEyWzRdLk1hc3Rlcl9UYWJsZS5zcGxpdChcIixcIikpO1xyXG4gICAgICAgIHNldHRyYWZmaWMoZGF0YTJbNV0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y3VycmVuY3koZGF0YTJbNl0uTWFzdGVyX1RhYmxlLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgc2V0Y291bnRyeShkYXRhMls3XS5NYXN0ZXJfVGFibGUuc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0dXMsIFwibGxsbGxsbGxsbGxsbGxsbGxsXCIpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHNldEVycm9yc21hcyhlcnIpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX0+XHJcbiAgICAgIHsvKiA8c3Bhbj57SlNPTi5zdHJpbmdpZnkoZGF0YTIpfTwvc3Bhbj4gKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9NYXN0ZXJUYWJsZXNcIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE1hbmFnZSBNYXN0ZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvQWRkTmV3XCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgdGl0bGU9XCJEb21haW4gRGV0YWlsc1wiXHJcbiAgICAgICAgICB2aXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgIHdpZHRoPXt3aWR9XHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8c3Bhbj57SlNPTi5zdHJpbmdpZnkodmlld0RhdGEpfTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh2aWV3RGF0YSl9XHJcbiAgICAgICAgICAgIHt2aWV3RGF0YS5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh2aWV3RGF0YSl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCI1MCUgNTAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOQU1FOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCcmVhazogXCJicmVhay13b3JkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fTmFtZSA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdEYXRhWzBdLkRvbWFpbl9TdGF0dXMgPT09IFwiMVwiID8gXCJncmVlblwiIDogXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fU3RhdHVzLnNwbGl0KFwiLFwiKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBzdGF0dXNbcGFyc2VJbnQoZWwpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9EQSA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9EQX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0RSID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0RSfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiNTAlIDUwJVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlVSTDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX1VSTCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX1VSTH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlF1YWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX1F1YWxpdHkuc3BsaXQoXCIsXCIpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZWwpID0+IHF1YWxpdHlbcGFyc2VJbnQoZWwpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5MaW5rIFNhbXBsZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVBID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0xpbmtfU2FtcGxlQiA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVCfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUMgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0xpbmtfU2FtcGxlQ31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVEID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0xpbmtfU2FtcGxlRSA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVFfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUYgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0xpbmtfU2FtcGxlRn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVHID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0xpbmtfU2FtcGxlSCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVIfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUkgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0xpbmtfU2FtcGxlSX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fTGlua19TYW1wbGVKID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX1NhbXBsZUp9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+RG9tYWluIENvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fQ29tbWVudHMgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fQ29tbWVudHMgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TGluayBUeXBlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fTGlua19UeXBlLnNwbGl0KFwiLFwiKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbCkgPT4gdHlwZVtwYXJzZUludChlbCldXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+TGluayBBdHRyaWJ1dGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9MaW5rX0F0dHJpYnV0ZS5zcGxpdChcIixcIikubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZWwpID0+IGF0dHJpYnV0ZVtwYXJzZUludChlbCldXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+UmVmIERvbWFpbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9SZWZEb21Db3VudCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fUmVmRG9tQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5JbmR1c3RyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0luZHVzdHJ5LnNwbGl0KFwiLFwiKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoZWwpID0+IGluZFtwYXJzZUludChlbCldICsgXCIsIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+VHJhZmZpYyBEZXRhaWxzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlRyYWZmaWMgQ291bnRyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl90cmFmZmljX0NvdW50cnkuc3BsaXQoXCIsXCIpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChlbCkgPT4gdHJhZmZpY1twYXJzZUludChlbCldICsgXCIsIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5TRU1SVVNIIFRyYWZmaWM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fU0VNUnVzaCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fU0VNUnVzaH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5BSFJFRiBUcmFmZmljPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0FIUmVmID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9BSFJlZn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiB9fT5Db3N0IERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5DdXJyZW5jeTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9DdXJyZW5jeS5zcGxpdChcIixcIikubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZWwpID0+IGN1cnJlbmN5W3BhcnNlSW50KGVsKV0gKyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+T3JpZ2luYWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fQ29zdF9PcmlnaW5hbCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fQ29zdF9PcmlnaW5hbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Pk5lZ290aWF0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fQ29zdF9OZWdvID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9Db3N0X05lZ299XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCJmaXQtY29udGVudFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5PZmZpY2UgQ291bnRyeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9PZmZpY2VfQ291bnRyeS5zcGxpdChcIixcIikubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGVsKSA9PiBjb3VudHJ5W3BhcnNlSW50KGVsKV0gKyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5Db3N0IENvbW1lbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fQ29zdF9Db21tZW50cyA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9Db3N0X0NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19PkNvbnRhY3QgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5OYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0NvbnRhY3RfUGVyc29uID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0NvbnRhY3RfUGVyc29ufVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0NvbnRhY3RfRW1haWxBID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0NvbnRhY3RfRW1haWxBfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aWV3RGF0YVswXS5Eb21haW5fQ29udGFjdF9FbWFpbEIgPT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJOL0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB2aWV3RGF0YVswXS5Eb21haW5fQ29udGFjdF9FbWFpbEJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9Db250YWN0X0VtYWlsQyA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9Db250YWN0X0VtYWlsQ31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5QaG9uZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkRvbWFpbl9Db250YWN0X1Bob25lQSA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIk4vQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHZpZXdEYXRhWzBdLkRvbWFpbl9Db250YWN0X1Bob25lQX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uRG9tYWluX0NvbnRhY3RfUGhvbmVCID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiTi9BXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogdmlld0RhdGFbMF0uRG9tYWluX0NvbnRhY3RfUGhvbmVCfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNTBweFwiIH19PlRpbWUgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5UaW1lIG9mIENyZWF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLkNyZWF0aW9uX0RhdGUuc3BsaXQoXCIuXCIpWzBdLnNwbGl0KFwiVFwiKVswXX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uQ3JlYXRpb25fRGF0ZS5zcGxpdChcIi5cIilbMF0uc3BsaXQoXCJUXCIpWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFRpbWUgb2YgVXBkYXRpb25cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZpZXdEYXRhWzBdLlVwZGF0aW9uX0RhdGUuc3BsaXQoXCIuXCIpWzBdLnNwbGl0KFwiVFwiKVswXX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dmlld0RhdGFbMF0uVXBkYXRpb25fRGF0ZS5zcGxpdChcIi5cIilbMF0uc3BsaXQoXCJUXCIpWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cD5ObyBkYXRhIGZvdW5kPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUYWJsZSBkYXRhU291cmNlPXtkYXRhfT5cclxuICAgICAgICA8Q29sdW1uR3JvdXAgdGl0bGU9XCJEb21haW4gTmFtZVwiPlxyXG4gICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICB0aXRsZT1cIkNvbXBhbnlcIlxyXG4gICAgICAgICAgICBkYXRhSW5kZXg9XCJEb21haW5fTmFtZVwiXHJcbiAgICAgICAgICAgIGtleT1cIkRvbWFpbl9OYW1lXCJcclxuICAgICAgICAgICAgZWxsaXBzaXM9XCJ0cnVlXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgICB0aXRsZT1cIldlYnNpdGVcIlxyXG4gICAgICAgICAgICBkYXRhSW5kZXg9XCJEb21haW5fVVJMXCJcclxuICAgICAgICAgICAga2V5PVwiRG9tYWluX1VSTFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbHVtbkdyb3VwPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiU3RhdHVzXCJcclxuICAgICAgICAgIGRhdGFJbmRleD1cIkRvbWFpbl9TdGF0dXNcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICBrZXk9XCJEb21haW5fU3RhdHVzXCJcclxuICAgICAgICAgIHJlbmRlcj17KERvbWFpbl9TdGF0dXMpID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGFnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17RG9tYWluX1N0YXR1cyA9PT0gXCIxXCIgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAga2V5PXtEb21haW5fU3RhdHVzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtEb21haW5fU3RhdHVzLnNwbGl0KFwiLFwiKS5tYXAoKGVsKSA9PiBzdGF0dXNbcGFyc2VJbnQoZWwpXSl9XHJcbiAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb2x1bW5cclxuICAgICAgICAgIHRpdGxlPVwiVHlwZVwiXHJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJEb21haW5fTGlua19UeXBlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAga2V5PVwiRG9tYWluX0xpbmtfVHlwZVwiXHJcbiAgICAgICAgICByZW5kZXI9eyhEb21haW5fTGlua19UeXBlKSA9PiAoXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHtEb21haW5fTGlua19UeXBlLnNwbGl0KFwiLFwiKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAoZWwpID0+IHR5cGVbcGFyc2VJbnQoZWwpXVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29sdW1uR3JvdXAgdGl0bGU9XCJEQSB8IERSXCI+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiREFcIlxyXG4gICAgICAgICAgICBkYXRhSW5kZXg9XCJEb21haW5fREFcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAga2V5PVwiRG9tYWluX0RBXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRFJcIlxyXG4gICAgICAgICAgICBkYXRhSW5kZXg9XCJEb21haW5fRFJcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAga2V5PVwiRG9tYWluX0RSXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2x1bW5Hcm91cD5cclxuICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICB0aXRsZT1cIlF1YWxpdHlcIlxyXG4gICAgICAgICAgZGF0YUluZGV4PVwiRG9tYWluX1F1YWxpdHlcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICBrZXk9XCJEb21haW5fUXVhbGl0eVwiXHJcbiAgICAgICAgICByZW5kZXI9eyhEb21haW5fUXVhbGl0eSkgPT4gKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7RG9tYWluX1F1YWxpdHkuc3BsaXQoXCIsXCIpLm1hcCgoZWwpID0+IHF1YWxpdHlbcGFyc2VJbnQoZWwpXSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29sdW1uR3JvdXAgdGl0bGU9XCJUcmFmZmljXCI+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiU0VNUnVzaFwiXHJcbiAgICAgICAgICAgIGRhdGFJbmRleD1cIkRvbWFpbl9TRU1SdXNoXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgIGtleT1cIkRvbWFpbl9TRU1SdXNoXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q29sdW1uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQUhSZWZcIlxyXG4gICAgICAgICAgICBkYXRhSW5kZXg9XCJEb21haW5fQUhSZWZcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAga2V5PVwiRG9tYWluX0FIUmVmXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2x1bW5Hcm91cD5cclxuICAgICAgICB7LyogPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJTYW1wbGUgTGlua3NcIlxyXG4gICAgICAgICAgZGF0YUluZGV4PVwiXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAga2V5PVwiRG9tYWluX0xpbmtfU2FtcGxlQVwiXHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJBY3Rpb25cIlxyXG4gICAgICAgICAgd2lkdGg9XCIyMDBweFwiXHJcbiAgICAgICAgICBrZXk9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgcmVuZGVyPXsoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICA8U3BhY2Ugc2l6ZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNWID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9kb21haW4vJHtkYXRhLkRvbWFpbklEfWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc1ZcclxuICAgICAgICAgICAgICAgICAgICAgIC5qc29uKClcclxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNWKSA9PiBzZXRWaWV3RGF0YShyZXNWKSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRWaWV3RXJyb3JzKGVycikpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGZldGNoRGF0YSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBlZGl0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLkRvbWFpbklEKTtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyB1cGRhdGVJRDogYCR7ZGF0YS5Eb21haW5JRH1gIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIGVkaXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhRGVsKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc1YgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2RvbWFpbi8ke2RhdGEuRG9tYWluSUR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbWV0aG9kOiBcIkRFTEVURVwiIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKSAvLyBvciByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBmZXRjaERhdGFEZWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxEb21haW47XHJcblxyXG57XHJcbiAgLyogPENvbHVtblxyXG4gICAgICAgICAgdGl0bGU9XCJUYWdzXCJcclxuICAgICAgICAgIGRhdGFJbmRleD1cInRhZ3NcIlxyXG4gICAgICAgICAgd2lkdGg9XCIxMDBweFwiIGtleT1cInRhZ3NcIlxyXG4gICAgICAgICAgcmVuZGVyPXsodGFncykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0YWcubGVuZ3RoID4gNSA/IFwiZ2Vla2JsdWVcIiA6IFwicHVycGxlXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSBcImxvc2VyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e2NvbG9yfSBrZXk9e3RhZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZy50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPiAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=