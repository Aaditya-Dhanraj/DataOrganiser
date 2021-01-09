import React, { useEffect, useState } from "react";
import { Select, message } from "antd";
import { Table, Tag, Space, Modal, Button, Tooltip } from "antd";
import Router from "next/router";
const { Option } = Select;
import { useRouter } from "next/router";

const MasterTables = () => {
  const [isModalVisibleStatus, setIsModalVisibleStatus] = useState(false);
  const [isModalVisibleQuality, setIsModalVisibleQuality] = useState(false);
  const [isModalVisibleType, setIsModalVisibleType] = useState(false);
  const [isModalVisibleAttribute, setIsModalVisibleAttribute] = useState(false);
  const [isModalVisibleIndustry, setIsModalVisibleIndustry] = useState(false);
  const [isModalVisibleCountry, setIsModalVisibleCountry] = useState(false);
  const [isModalVisibleCurrency, setIsModalVisibleCurrency] = useState(false);
  const [isModalVisibleOffice, setIsModalVisibleOffice] = useState(false);

  ///////////////////////////
  const [handleStatus, setHandleStatus] = useState("");
  const [commentStatus, setcommentStatus] = useState([]);
  const [commentHandleALL, setcommentHandleALL] = useState("");

  const [oldcomment, setoldcomment] = useState("");
  const [oldmaster, setoldmaster] = useState("");

  const [handleQuality, setHandleQuality] = useState("");
  const [commentQuality, setcommentQuality] = useState([]);

  const [handleType, setHandleType] = useState("");
  const [commentType, setcommentType] = useState([]);

  const [handleAttribute, setHandleAttribute] = useState("");
  const [commentAttribute, setcommentAttribute] = useState([]);

  const [handleIndustry, setHandleIndustry] = useState("");
  const [commentIndustry, setcommentIndustry] = useState([]);

  const [handleCountry, setHandleCountry] = useState("");
  const [commentCountry, setcommentCountry] = useState([]);

  const [handleCurrency, setHandleCurrency] = useState("");
  const [commentCurrency, setcommentCurrency] = useState([]);

  const [handleOffice, setHandleOffice] = useState("");
  const [commentOffice, setcommentOffice] = useState([]);

  //////////////////////////
  const [Masstatus, setMasstatus] = useState([]);
  const [quality, setQuality] = useState([]);
  const [type, settype] = useState([]);
  const [attribute, setattribute] = useState([]);
  const [ind, setind] = useState([]);
  const [traffic, settraffic] = useState([]);
  const [Mascurrency, setMascurrency] = useState([]);
  const [office, setoffice] = useState([]);

  const [hasErrormas, setErrorsmas] = useState(false);
  const fetchDataMaster = () => {
    fetch("http://localhost:5000/api/v1/master/")
      .then(async (res) => {
        const data2 = await res.json();
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
      })

      .catch((err) => setErrorsmas(err));
  };
  /////////////////////////////////////
  useEffect(() => {
    console.log("componentDidMount");
    fetchDataMaster();
  }, [0]);

  ////////////////////////////////////////////

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
  const postData = (request, reqnumber) => {
    // console.log(type.toString(), "ARRAYtoString");
    // console.log(request, "REQUEST");
    // console.log(reqnumber,"NUMBER");
    fetch(`http://localhost:5000/api/v1/master/${reqnumber}`, request)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        await console.log("data posted successfully");
        window.location.reload(false);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });

    // Router.push("MasterTables");
  };

  ////////////////////////////////////////////
  const statusRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "STATUS",
      Master_Table: Masstatus.toString(),
      Master_Comments: commentStatus.toString(),
    }),
  };

  const qualityRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "QUALITY",
      Master_Table: quality.toString(),
      Master_Comments: commentQuality.toString(),
    }),
  };

  const typeRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "LINK_TYPE",
      Master_Table: type.toString(),
      Master_Comments: commentType.toString(),
    }),
  };
  const attributeRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "LINK_ATTRIBUTE",
      Master_Table: attribute.toString(),
      Master_Comments: commentAttribute.toString(),
    }),
  };
  const industryRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "INDUSTRY",
      Master_Table: ind.toString(),
      Master_Comments: commentIndustry.toString(),
    }),
  };
  const countryRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "TRAFFIC_COUNTRY",
      Master_Table: traffic.toString(),
      Master_Comments: commentCountry.toString(),
    }),
  };
  const currencyRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "CURRENCY",
      Master_Table: Mascurrency.toString(),
      Master_Comments: commentCurrency.toString(),
    }),
  };
  const officeRequest = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Master_Name: "OFFICE_COUNTRY",
      Master_Table: office.toString(),
      Master_Comments: commentOffice.toString(),
    }),
  };

  ///////////////////////////////////////
  // status
  const handleOkStatus = () => {
    postData(statusRequest, 1);
  };

  const handleCancelStatus = () => {
    setIsModalVisibleStatus(false);
    window.location.reload(false);
  };
  // quality
  const handleOkQuality = () => {
    postData(qualityRequest, 3);
  };

  const handleCancelQuality = () => {
    setIsModalVisibleQuality(false);
    window.location.reload(false);
  };
  // Type
  const handleOkType = () => {
    postData(typeRequest, 4);
  };

  const handleCancelType = () => {
    setIsModalVisibleType(false);
    window.location.reload(false);
  };
  // Attribute
  const handleOkAttribute = () => {
    postData(attributeRequest, 5);
  };

  const handleCancelAttribute = () => {
    setIsModalVisibleAttribute(false);
    window.location.reload(false);
  };
  // Type
  const handleOkIndustry = () => {
    postData(industryRequest, 6);
  };

  const handleCancelIndustry = () => {
    setIsModalVisibleIndustry(false);
    window.location.reload(false);
  };
  // traffic country
  const handleOkCountry = () => {
    postData(countryRequest, 7);
  };

  const handleCancelCountry = () => {
    setIsModalVisibleCountry(false);
    window.location.reload(false);
  };
  // Currency
  const handleOkCurrency = () => {
    postData(currencyRequest, 8);
  };

  const handleCancelCurrency = () => {
    setIsModalVisibleCurrency(false);
    window.location.reload(false);
  };
  // Office Country
  const handleOkOffice = () => {
    postData(officeRequest, 9);
  };

  const handleCancelOffice = () => {
    setIsModalVisibleOffice(false);
    window.location.reload(false);
  };

  return (
    <div>
      {/* ////////////////////////////////////////////
    status */}
      <Modal
        title="Status"
        visible={isModalVisibleStatus}
        onOk={handleOkStatus}
        onCancel={handleCancelStatus}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {Masstatus.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(Masstatus.splice(key, 1, handleStatus));
                        console.log(Masstatus, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentStatus.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentStatus.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {Masstatus.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleStatus(e.target.value);
              console.log(handleStatus);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            setMasstatus([...Masstatus, handleStatus]);
            setcommentStatus([...commentStatus, commentHandleALL]);
            // console.log(Masstatus, "MAASssssssssss", commentHandleALL);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if CONFIRM',
              10
            );
          }}
        >
          Add Value
        </Button>
        {/* <div style={{ marginTop: "20px", width: "100%" }}>
          <div>Status Comment</div>
          <input
            value={commentStatus}
            style={{ width: "100%" }}
            placeholder="Add your comment here..."
            onChange={(e) => {
              setcommentStatus(e.target.value);
            }}
          ></input>
        </div> */}
      </Modal>

      {/* //////////////////////////////////////////////////
      quality */}
      <Modal
        title="Quality"
        visible={isModalVisibleQuality}
        onOk={handleOkQuality}
        onCancel={handleCancelQuality}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {quality.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(quality.splice(key, 1, handleQuality));
                        console.log(quality, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentQuality.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentQuality.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {quality.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleQuality(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            setQuality([...quality, handleQuality]);
            setcommentQuality([...commentQuality, commentHandleALL]);
            console.log(quality);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      {/* //////////////////////////////////////////////////
      type */}
      <Modal
        title="Type"
        visible={isModalVisibleType}
        onOk={handleOkType}
        onCancel={handleCancelType}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {type.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(type.splice(key, 1, handleType));
                        console.log(type, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentType.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentType.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {type.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleType(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            settype([...type, handleType]);
            setcommentType([...commentType, commentHandleALL]);
            console.log(type);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      {/* //////////////////////////////////////////////////
      attribute */}
      <Modal
        title="Attribute"
        visible={isModalVisibleAttribute}
        onOk={handleOkAttribute}
        onCancel={handleCancelAttribute}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {attribute.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(attribute.splice(key, 1, handleAttribute));
                        console.log(attribute, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentAttribute.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentAttribute.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {attribute.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleAttribute(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            setattribute([...attribute, handleAttribute]);
            setcommentAttribute([...commentAttribute, commentHandleALL]);
            console.log(attribute);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      {/* //////////////////////////////////////////////////
      industry */}
      <Modal
        title="Industry"
        visible={isModalVisibleIndustry}
        onOk={handleOkIndustry}
        onCancel={handleCancelIndustry}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {ind.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(ind.splice(key, 1, handleIndustry));
                        console.log(ind, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentIndustry.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentIndustry.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {ind.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleIndustry(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            setind([...ind, handleIndustry]);
            setcommentIndustry([...commentIndustry, commentHandleALL]);
            console.log(ind);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      {/* //////////////////////////////////////////////////
      traffic country */}
      <Modal
        title="Traffic Country"
        visible={isModalVisibleCountry}
        onOk={handleOkCountry}
        onCancel={handleCancelCountry}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {traffic.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(traffic.splice(key, 1, handleCountry));
                        console.log(traffic, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentCountry.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentCountry.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {traffic.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleCountry(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            settraffic([...traffic, handleCountry]);
            setcommentCountry([...commentCountry, commentHandleALL]);
            console.log(traffic);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      {/* //////////////////////////////////////////////////
      currency */}
      <Modal
        title="Currency"
        visible={isModalVisibleCurrency}
        onOk={handleOkCurrency}
        onCancel={handleCancelCurrency}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {Mascurrency.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(
                          Mascurrency.splice(key, 1, handleCurrency)
                        );
                        console.log(Mascurrency, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentCurrency.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentCurrency.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {Mascurrency.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleCurrency(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            setMascurrency([...Mascurrency, handleCurrency]);
            setcommentCurrency([...commentCurrency, commentHandleALL]);
            console.log(Mascurrency);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      {/* //////////////////////////////////////////////////
      office country */}
      <Modal
        title="Office Country"
        visible={isModalVisibleOffice}
        onOk={handleOkOffice}
        onCancel={handleCancelOffice}
      >
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            {office.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldmaster(office.splice(key, 1, handleOffice));
                        console.log(office, "helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {commentOffice.map((el, key) => {
              return (
                <div
                  style={{
                    display: "grid",
                    marginBottom: "10px",
                    gridTemplateColumns: "50% 50%",
                    gridGap: "10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "10px", marginTop: "5px" }}>
                      {key}
                    </div>
                    <div
                      onClick={() => {
                        setoldcomment(
                          commentOffice.splice(key, 1, commentHandleALL)
                        );
                        // console.log(commentStatus,"helloWorld");
                      }}
                      style={{ border: "1px solid", padding: "5px" }}
                    >
                      {el}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            {office.length}
          </div>
          <input
            style={{ border: "1px solid", padding: "5px" }}
            placeholder="Add a value here..."
            onChange={(e) => {
              setHandleOffice(e.target.value);
            }}
          ></input>
          <input
            style={{ border: "1px solid", padding: "5px", marginLeft: "10px" }}
            placeholder="Add a Comment here..."
            onChange={(e) => {
              setcommentHandleALL(e.target.value);
              console.log(commentHandleALL);
            }}
          ></input>
        </div>
        <Button
          style={{ marginLeft: "20px", marginTop: "10px" }}
          onClick={() => {
            setoffice([...office, handleOffice]);
            setcommentOffice([...commentOffice, commentHandleALL]);
            console.log(office);
            message.success(
              'PRESS "Cancel" if you have made a mistake or PRESS "Ok" if Confirm',
              10
            );
          }}
        >
          Add Value
        </Button>
      </Modal>
      <h1>Masters Tables</h1>
      <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleStatus(true);
          }}
        >
          Status
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleQuality(true);
          }}
        >
          Link Quality
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleType(true);
          }}
        >
          Link Type
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleAttribute(true);
          }}
        >
          Link Attribute
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleIndustry(true);
          }}
        >
          Industry
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleCountry(true);
          }}
        >
          Traffic Country
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleCurrency(true);
          }}
        >
          Currency
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            padding: "10px",
            border: "2px solid ",
          }}
          onClick={() => {
            setIsModalVisibleOffice(true);
          }}
        >
          Office Country
        </div>
      </div>
    </div>
  );
};

export default MasterTables;
