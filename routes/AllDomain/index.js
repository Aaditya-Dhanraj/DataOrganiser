import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { Table, Tag, Space, Modal, Button, Tooltip } from "antd";
import Router from "next/router";
const { Column, ColumnGroup } = Table;
import Link from "next/link";
import { set, update } from "lodash";

let wid = "75%";

const AllDomain = () => {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [hasErrormas, setErrorsmas] = useState(false);
  const [viewData, setViewData] = useState([]);
  const [hasViewError, setViewErrors] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  //////////////////////////
  const [quality, setquality] = useState([]);
  const [status, setstatus] = useState([]);
  const [type, settype] = useState([]);
  const [attribute, setattribute] = useState([]);
  const [ind, setind] = useState([]);
  const [traffic, settraffic] = useState([]);
  const [currency, setcurrency] = useState([]);
  const [country, setcountry] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/api/v1/domain/");
      res
        .json()
        .then((res) => setData(res))
        .catch((err) => setErrors(err));
    }
    fetchData();
    fetchDataMaster();
  }, [0]);

  const fetchDataMaster = () => {
    fetch("http://localhost:5000/api/v1/master/")
      .then(async (res) => {
        const data2 = await res.json();
        console.log(data2, "ddddddddddddddddd");
        setstatus(data2[0].Master_Table.split(","));
        setquality(data2[1].Master_Table.split(","));
        settype(data2[2].Master_Table.split(","));
        setattribute(data2[3].Master_Table.split(","));
        setind(data2[4].Master_Table.split(","));
        settraffic(data2[5].Master_Table.split(","));
        setcurrency(data2[6].Master_Table.split(","));
        setcountry(data2[7].Master_Table.split(","));
        // console.log(status, "llllllllllllllllll");
      })

      .catch((err) => setErrorsmas(err));
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ overflow: "scroll" }}>
      {/* <span>{JSON.stringify(data2)}</span> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <button
            style={{ borderRadius: "5px", padding: "10px" }}
            onClick={() => {
              Router.push("/MasterTables");
            }}
          >
            Manage Master
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <button
            style={{ borderRadius: "5px", padding: "10px" }}
            onClick={() => {
              Router.push("/AddNew");
            }}
          >
            Add New
          </button>
        </div>
      </div>

      <div>
        <Modal
          title="Domain Details"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={wid}
          style={{ overflow: "scroll" }}
        >
          <div>
            {/* <span>{JSON.stringify(viewData)}</span> */}
            {console.log(viewData)}
            {viewData.length !== 0 ? (
              <div>
                {console.log(viewData)}
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                  >
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                        NAME:
                      </p>
                      <p
                        style={{
                          paddingRight: "30px",
                          wordBreak: "break-word",
                        }}
                      >
                        {viewData[0].Domain_Name === null
                          ? "N/A"
                          : viewData[0].Domain_Name}
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Tag
                        color={
                          viewData[0].Domain_Status === "1" ? "green" : "red"
                        }
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          maxHeight: "30px",
                          marginRight: "30px",
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                      >
                        {viewData[0].Domain_Status.split(",").map(
                          (el) => status[parseInt(el)]
                        )}
                      </Tag>
                      <div
                        style={{
                          marginTop: "0px",
                          paddingTop: "0px",
                          marginLeft: "50px",
                        }}
                      >
                        <p
                          style={{
                            textAlign: "center",
                            marginRight: "20px",
                            marginBottom: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          DA
                        </p>
                        <p
                          style={{
                            marginRight: "20px",
                            border: "1px solid grey",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {viewData[0].Domain_DA === null
                            ? "N/A"
                            : viewData[0].Domain_DA}
                        </p>
                      </div>
                      <div style={{ marginTop: "0px", paddingTop: "0px" }}>
                        <p
                          style={{
                            textAlign: "center",
                            marginRight: "20px",
                            marginBottom: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          DR
                        </p>
                        <p
                          style={{
                            marginRight: "20px",
                            border: "1px solid grey",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {viewData[0].Domain_DR === null
                            ? "N/A"
                            : viewData[0].Domain_DR}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100%", marginRight: "10px" }}>
                      <p style={{ fontWeight: "bold" }}>URL:</p>
                      <p
                        style={{
                          padding: "5px",
                          border: "1px solid grey",
                          borderRadius: "5px",
                        }}
                      >
                        {viewData[0].Domain_URL === null
                          ? "N/A"
                          : viewData[0].Domain_URL}
                      </p>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p style={{ fontWeight: "bold" }}>Quality</p>
                      <p
                        style={{
                          padding: "5px",
                          border: "1px solid grey",
                          borderRadius: "5px",
                        }}
                      >
                        {viewData[0].Domain_Quality.split(",").map(
                          (el) => quality[parseInt(el)]
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{}}>
                  <p style={{ fontWeight: "bold" }}>Link Samples</p>
                  <div>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleA === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleA}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleB === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleB}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleC === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleC}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleD === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleD}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleE === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleE}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleF === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleF}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleG === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleG}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleH === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleH}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleI === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleI}
                    </p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Link_SampleJ === null
                        ? "N/A"
                        : viewData[0].Domain_Link_SampleJ}
                    </p>
                  </div>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Domain Comments</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                    }}
                  >
                    {viewData[0].Domain_Comments === null
                      ? "N/A"
                      : viewData[0].Domain_Comments === null
                      ? "N/A"
                      : viewData[0].Domain_Comments}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "bold" }}>Link Type</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      {viewData[0].Domain_Link_Type.split(",").map(
                        (el) => type[parseInt(el)]
                      )}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Link Attribute</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      {viewData[0].Domain_Link_Attribute.split(",").map(
                        (el) => attribute[parseInt(el)]
                      )}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Ref Domains</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      {viewData[0].Domain_RefDomCount === null
                        ? "N/A"
                        : viewData[0].Domain_RefDomCount}
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: "50px" }}>
                  <p style={{ fontWeight: "bold" }}>Industry</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                    }}
                  >
                    {viewData[0].Domain_Industry.split(",").map(
                      (el) => ind[parseInt(el)] + ", "
                    )}
                  </p>
                </div>
                <h2>Traffic Details</h2>
                <div>
                  <p style={{ fontWeight: "bold" }}>Traffic Country</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_traffic_Country.split(",").map(
                      (el) => traffic[parseInt(el)] + ", "
                    )}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingLeft: "50px" }}>
                    <p style={{ fontWeight: "bold" }}>SEMRUSH Traffic</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_SEMRush === null
                        ? "N/A"
                        : viewData[0].Domain_SEMRush}
                    </p>
                  </div>
                  <div style={{ paddingLeft: "50px" }}>
                    <p style={{ fontWeight: "bold" }}>AHREF Traffic</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_AHRef === null
                        ? "N/A"
                        : viewData[0].Domain_AHRef}
                    </p>
                  </div>
                </div>
                <h2 style={{ marginTop: "50px" }}>Cost Details</h2>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <p style={{ fontWeight: "bold" }}>Currency</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Currency.split(",").map(
                        (el) => currency[parseInt(el)] + ""
                      )}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Original</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Cost_Original === null
                        ? "N/A"
                        : viewData[0].Domain_Cost_Original}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>Negotiated</p>
                    <p
                      style={{
                        padding: "5px",
                        border: "1px solid grey",
                        borderRadius: "5px",
                      }}
                    >
                      {viewData[0].Domain_Cost_Nego === null
                        ? "N/A"
                        : viewData[0].Domain_Cost_Nego}
                    </p>
                  </div>
                </div>
                <div style={{ width: "fit-content" }}>
                  <p style={{ fontWeight: "bold" }}>Office Country</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Office_Country.split(",").map(
                      (el) => country[parseInt(el)] + ""
                    )}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Cost Comments</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                    }}
                  >
                    {viewData[0].Domain_Cost_Comments === null
                      ? "N/A"
                      : viewData[0].Domain_Cost_Comments}
                  </p>
                </div>
                <h2 style={{ marginTop: "50px" }}>Contact Details</h2>
                <div>
                  <p style={{ fontWeight: "bold" }}>Name</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Contact_Person === null
                      ? "N/A"
                      : viewData[0].Domain_Contact_Person}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Email</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Contact_EmailA === null
                      ? "N/A"
                      : viewData[0].Domain_Contact_EmailA}
                  </p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Contact_EmailB === null
                      ? "N/A"
                      : viewData[0].Domain_Contact_EmailB}
                  </p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Contact_EmailC === null
                      ? "N/A"
                      : viewData[0].Domain_Contact_EmailC}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>Phone</p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Contact_PhoneA === null
                      ? "N/A"
                      : viewData[0].Domain_Contact_PhoneA}
                  </p>
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      width: "fit-content",
                    }}
                  >
                    {viewData[0].Domain_Contact_PhoneB === null
                      ? "N/A"
                      : viewData[0].Domain_Contact_PhoneB}
                  </p>
                </div>
                <h2 style={{ marginTop: "50px" }}>Time Details</h2>
                <div>
                  <p style={{ fontWeight: "bold" }}>Time of Creation</p>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      paddingTop: "8px",
                      width: "fit-content",
                    }}
                  >
                    <p style={{ marginRight: "10px" }}>
                      {viewData[0].Creation_Date.split(".")[0].split("T")[0]}
                    </p>
                    <p>
                      {viewData[0].Creation_Date.split(".")[0].split("T")[1]}
                    </p>
                  </div>
                  <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                    Time of Updation
                  </p>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid grey",
                      borderRadius: "5px",
                      paddingTop: "8px",
                      width: "fit-content",
                    }}
                  >
                    <p style={{ marginRight: "10px" }}>
                      {viewData[0].Updation_Date.split(".")[0].split("T")[0]}
                    </p>
                    <p>
                      {viewData[0].Updation_Date.split(".")[0].split("T")[1]}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>No data found</p>
            )}
          </div>
        </Modal>
      </div>
      <Table dataSource={data}>
        <ColumnGroup title="Domain Name">
          <Column
            title="Company"
            dataIndex="Domain_Name"
            key="Domain_Name"
            ellipsis="true"
            width="200px"
          />
          <Column
            title="Website"
            dataIndex="Domain_URL"
            key="Domain_URL"
            width="100px"
          />
        </ColumnGroup>
        <Column
          title="Status"
          dataIndex="Domain_Status"
          width="100px"
          key="Domain_Status"
          render={(Domain_Status) => (
            <>
              <Tag
                color={Domain_Status === "1" ? "green" : "red"}
                key={Domain_Status}
              >
                {Domain_Status.split(",").map((el) => status[parseInt(el)])}
              </Tag>
            </>
          )}
        />
        <Column
          title="Type"
          dataIndex="Domain_Link_Type"
          width="100px"
          key="Domain_Link_Type"
          render={(Domain_Link_Type) => (
            <p>
              {Domain_Link_Type.split(",").map(
                (el) => type[parseInt(el)]
              )}
            </p>
          )}
        />
        <ColumnGroup title="DA | DR">
          <Column
            title="DA"
            dataIndex="Domain_DA"
            width="100px"
            key="Domain_DA"
          />
          <Column
            title="DR"
            dataIndex="Domain_DR"
            width="100px"
            key="Domain_DR"
          />
        </ColumnGroup>
        <Column
          title="Quality"
          dataIndex="Domain_Quality"
          width="100px"
          key="Domain_Quality"
          render={(Domain_Quality) => (
            <p>
              {Domain_Quality.split(",").map((el) => quality[parseInt(el)])}
            </p>
          )}
        />
        <ColumnGroup title="Traffic">
          <Column
            title="SEMRush"
            dataIndex="Domain_SEMRush"
            width="100px"
            key="Domain_SEMRush"
          />
          <Column
            title="AHRef"
            dataIndex="Domain_AHRef"
            width="100px"
            key="Domain_AHRef"
          />
        </ColumnGroup>
        {/* <Column
          title="Sample Links"
          dataIndex=""
          width="100px"
          key="Domain_Link_SampleA"
        /> */}
        <Column
          title="Action"
          width="200px"
          key="action"
          render={(data) => (
            <Space size="middle">
              <a
                onClick={() => {
                  async function fetchData() {
                    const resV = await fetch(
                      `http://localhost:5000/api/v1/domain/${data.DomainID}`
                    );
                    resV
                      .json()
                      .then((resV) => setViewData(resV))
                      .catch((err) => setViewErrors(err));
                  }
                  fetchData().then(() => {
                    setIsModalVisible(true);
                  });
                }}
              >
                View
              </a>
              <a
                onClick={() => {
                  const editData = () => {
                    console.log(data.DomainID);
                    Router.push({
                      pathname: "/update",
                      query: { updateID: `${data.DomainID}` },
                    });
                  };
                  editData();
                }}
              >
                Edit
              </a>
              <a
                onClick={() => {
                  async function fetchDataDel() {
                    const resV = await fetch(
                      `http://localhost:5000/api/v1/domain/${data.DomainID}`,
                      { method: "DELETE" }
                    )
                      .then((res) => res.text()) // or res.json()
                      .then((res) => console.log(res));
                  }
                  fetchDataDel().then(() => {
                    window.location.reload(false);
                  });
                }}
              >
                Delete
              </a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default AllDomain;

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
