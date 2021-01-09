import React, { useEffect, useState } from "react";
import { Select } from "antd";
import Router from "next/router";
const { Option } = Select;
import { useRouter } from "next/router";

const Update = () => {
  const router = useRouter();

  const {
    query: { updateID },
  } = router;

  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [Da, setDA] = useState("");
  const [Dr, setDR] = useState("");
  const [Url, setURL] = useState("");
  const [quality, setQuality] = useState("");
  const [linkA, setLinkA] = useState("");
  const [linkB, setLinkB] = useState("");
  const [linkC, setLinkC] = useState("");
  const [linkD, setLinkD] = useState("");
  const [linkE, setLinkE] = useState("");
  const [linkF, setLinkF] = useState("");
  const [linkG, setLinkG] = useState("");
  const [linkH, setLinkH] = useState("");
  const [linkI, setLinkI] = useState("");
  const [linkJ, setLinkJ] = useState("");
  const [domainComments, setDomainComments] = useState("");
  const [linkType, setLinkType] = useState("");
  const [linkAttribute, setLinkAttribute] = useState("");
  const [refDomains, setRefDomains] = useState("");
  const [industry, setIndustry] = useState("");
  const [trafficCountry, setTrafficCountry] = useState("");
  const [semrush, setSemrush] = useState("");
  const [ahref, setAhref] = useState("");
  const [currency, setCurrency] = useState("");
  const [original, setOriginal] = useState("");
  const [negotiated, setNegotiated] = useState("");
  const [officeCountry, setOfficeCountry] = useState("");
  const [costComments, setCostComments] = useState("");
  const [contactDetailsName, setContactDetailsName] = useState("");
  const [contactEmailA, setContactEmailA] = useState("");
  const [contactEmailB, setContactEmailB] = useState("");
  const [contactEmailC, setContactEmailC] = useState("");
  const [contactPhoneA, setContactPhoneA] = useState("");
  const [contactPhoneB, setContactPhoneB] = useState("");

  //////////////////////////
  const [Masquality, setMasquality] = useState([]);
  const [Masstatus, setMasstatus] = useState([]);
  const [type, settype] = useState([]);
  const [attribute, setattribute] = useState([]);
  const [ind, setind] = useState([]);
  const [traffic, settraffic] = useState([]);
  const [Mascurrency, setMascurrency] = useState([]);
  const [country, setcountry] = useState([]);
  const [hasErrormas, setErrorsmas] = useState(false);


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
    setTrafficCountry(valueMultiOne);
    // let obj = { ...FormData };
    // obj.Domain_traffic_Country = valueMultiOne.toString();
    // setFormData({ ...obj });
  }
  useEffect(() => {
    console.log("componentDidMount");
    fetchData();
    fetchDataMaster();
  }, [0]);

  const fetchDataMaster = () => {
    fetch("http://localhost:5000/api/v1/master/")
      .then(async (res) => {
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
      })

      .catch((err) => setErrorsmas(err));
  };

  const fetchData = () => {
    fetch(`http://localhost:5000/api/v1/domain/${updateID}`)
      .then(async (res) => {
        const data2 = await res.json();
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
      })
      .catch((err) => console.log(err));
    // console.log(res);
  };

  const postData = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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
        Domain_Contact_PhoneB: contactPhoneB,
      }),
    };
    fetch(`http://localhost:5000/api/v1/domain/${updateID}`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log("data updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    Router.push("all_domain");
  };

  return (
    <div>
      {data.length === 0 ? (
        <div>
          <h2 id="domain">Domain Details</h2>
          <div style={{}}>
            <p style={{ fontWeight: "bold" }}>NAME</p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <p style={{ fontWeight: "bold" }}>STATUS</p>
            <Select
              value={status}
              style={{ width: 120, marginBottom: "5px" }}
              onChange={handleChange}
            >
              {Masstatus.map((el, key) => {
                return <option value={key.toString()}>{el}</option>;
              })}
            </Select>
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              DA
            </p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={Da}
              onChange={(e) => {
                setDA(e.target.value);
              }}
            />
            <p
              style={{
                fontWeight: "bold",
              }}
            >
              DR
            </p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={Dr}
              onChange={(e) => {
                setDR(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
            <div style={{}}>
              <div style={{ width: "100%" }}>
                <p style={{ fontWeight: "bold" }}>URL:</p>
                <input
                  style={{
                    border: "1px solid grey",
                    padding: "5px",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    width: "100%",
                  }}
                  value={Url}
                  onChange={(e) => {
                    setURL(e.target.value);
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <p style={{ fontWeight: "bold" }}>Quality</p>
                <Select
                  value={quality}
                  style={{ width: 120, marginBottom: "5px" }}
                  onChange={handleChangeQuality}
                >
                  {Masquality.map((el, key) => {
                    return <option value={key.toString()}>{el}</option>;
                  })}
                </Select>
              </div>
            </div>
          </div>
          <div style={{}}>
            <p style={{ fontWeight: "bold" }}>Link Samples</p>
            <div>
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkA}
                onChange={(e) => {
                  setLinkA(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkB}
                onChange={(e) => {
                  setLinkB(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkC}
                onChange={(e) => {
                  setLinkC(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkD}
                onChange={(e) => {
                  setLinkD(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkE}
                onChange={(e) => {
                  setLinkE(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkF}
                onChange={(e) => {
                  setLinkF(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkG}
                onChange={(e) => {
                  setLinkG(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkH}
                onChange={(e) => {
                  setLinkH(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkI}
                onChange={(e) => {
                  setLinkI(e.target.value);
                }}
              />
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  width: "100%",
                }}
                value={linkJ}
                onChange={(e) => {
                  setLinkJ(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Domain Comments</p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={domainComments}
              onChange={(e) => {
                setDomainComments(e.target.value);
              }}
            />
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
              <Select
                value={linkType}
                style={{ width: 120, marginBottom: "5px" }}
                onChange={handleChangeLinkType}
              >
                {type.map((el, key) => {
                  return <option value={key.toString()}>{el}</option>;
                })}
              </Select>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Link Attribute</p>
              <Select
                value={linkAttribute}
                style={{ width: 120, marginBottom: "5px" }}
                onChange={handleChangeLinkAttri}
              >
               {attribute.map((el, key) => {
                return(<option value={key.toString()}>{el}</option>);
              })}
              </Select>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Ref Domains</p>
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                value={refDomains}
                onChange={(e) => {
                  setRefDomains(e.target.value);
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <p style={{ fontWeight: "bold" }}>Industry</p>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={industry}
              onChange={handleChangeMulti}
            >
              {ind.map((el, key) => {
                return(<option value={key.toString()}>{el}</option>);
              })}
            </Select>
          </div>
          <h2 id="traffic">Traffic Details</h2>
          <div>
            <p style={{ fontWeight: "bold" }}>Traffic Country</p>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              value={trafficCountry}
              onChange={handleChangeMultiOne}
            >
              {traffic.map((el, key) => {
                return(<option value={key.toString()}>{el}</option>);
              })}
            </Select>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingLeft: "50px" }}>
              <p style={{ fontWeight: "bold" }}>SEMRUSH Traffic</p>
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                value={semrush}
                onChange={(e) => {
                  setSemrush(e.target.value);
                }}
              />
            </div>
            <div style={{ paddingLeft: "50px" }}>
              <p style={{ fontWeight: "bold" }}>AHREF Traffic</p>
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                value={ahref}
                onChange={(e) => {
                  setAhref(e.target.value);
                }}
              />
            </div>
          </div>
          <h2 style={{ marginTop: "50px" }} id="cost">
            Cost Details
          </h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <p style={{ fontWeight: "bold" }}>Currency</p>
              <Select
                value={currency}
                style={{ width: 120, marginBottom: "5px" }}
                onChange={handleChangeCurr}
              >
                {Mascurrency.map((el, key) => {
                return(<option value={key.toString()}>{el}</option>);
              })}
              </Select>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Original</p>
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                value={original}
                onChange={(e) => {
                  setOriginal(e.target.value);
                }}
              />
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Negotiated</p>
              <input
                style={{
                  border: "1px solid grey",
                  padding: "5px",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
                value={negotiated}
                onChange={(e) => {
                  setNegotiated(e.target.value);
                }}
              />
            </div>
          </div>
          <div style={{ width: "fit-content" }}>
            <p style={{ fontWeight: "bold" }}>Office Country</p>
            <Select
              value={officeCountry}
              style={{ width: 120, marginBottom: "5px" }}
              onChange={handleChangeCountry}
            >
             {country.map((el, key) => {
                return(<option value={key.toString()}>{el}</option>);
              })}
            </Select>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Cost Comments</p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={costComments}
              onChange={(e) => {
                setCostComments(e.target.value);
              }}
            />
          </div>
          <h2 style={{ marginTop: "50px" }} id="contact">
            Contact Details
          </h2>
          <div>
            <p style={{ fontWeight: "bold" }}>Name</p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={contactDetailsName}
              onChange={(e) => {
                setContactDetailsName(e.target.value);
              }}
            />
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Email</p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={contactEmailA}
              onChange={(e) => {
                setContactEmailA(e.target.value);
              }}
            />
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={contactEmailB}
              onChange={(e) => {
                setContactEmailB(e.target.value);
              }}
            />
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "5px",
                width: "100%",
              }}
              value={contactEmailC}
              onChange={(e) => {
                setContactEmailC(e.target.value);
              }}
            />
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Phone</p>
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "25px",
                width: "100%",
              }}
              value={contactPhoneA}
              onChange={(e) => {
                setContactPhoneA(e.target.value);
              }}
            />
            <input
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "5px",
                marginBottom: "25px",
                width: "100%",
              }}
              value={contactPhoneB}
              onChange={(e) => {
                setContactPhoneB(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "white",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
              onClick={() => {
                postData();
              }}
            >
              Add Details
            </button>
          </div>
        </div>
      ) : (
        <p>Something Wrong Happened</p>
      )}
    </div>
  );
};
export default Update;
