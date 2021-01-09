import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const Practice = () => {
  const [formData, setFormData] = useState({});

  function handleChange(e, v) {
    let obj = { ...formData };
    obj[e.target.name] = e.target.value;
    setFormData({ ...obj });
    console.log(formData);
  }

  return (
    <div>
      <h2 id="domain">Domain Details</h2>
      <div style={{}}>
        <p style={{ fontWeight: "bold" }}>NAME</p>
        <input
          name="one"
          style={{
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "5px",
            marginBottom: "5px",
            width: "100%",
          }}
          onChange={handleChange}
        />
        <input
          name="one2"
          style={{
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "5px",
            marginBottom: "5px",
            width: "100%",
          }}
          onChange={handleChange}
        />
        <Select
          name="two"
          defaultValue="0"
          style={{ width: 120, marginBottom: "5px" }}
          onChange={handleChange}
        >
          <Option value="0">N/A</Option>
          <Option value="1">Excellent</Option>
          <Option value="2">V Good</Option>
          <Option value="3">Good</Option>
          <Option value="4">Ok</Option>
          <Option value="5">Bad</Option>
          <Option value="6">Spammy</Option>
        </Select>
        <p style={{ fontWeight: "bold" }}>STATUS</p>
        <Select
          name="three"
          defaultValue="0"
          style={{ width: 120, marginBottom: "5px" }}
          onChange={handleChange}
        >
          <Option value="0">N/A</Option>
          <Option value="1">active</Option>
          <Option value="2">inactive</Option>
        </Select>
        <Select
          name="four"
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          defaultValue="0"
          onChange={handleChange}
        >
          <Option value="0">N/A</Option>
          <Option value="1">General</Option>
          <Option value="2">Entertainment</Option>
          <Option value="3">Fashion</Option>
          <Option value="4">News</Option>
          <Option value="5">Healthcare</Option>
          <Option value="6">Automotive</Option>
          <Option value="7">Food</Option>
          <Option value="8">Finance</Option>
          <Option value="9">Technology</Option>
          <Option value="10">Entrepreneurship</Option>
        </Select>
      </div>
    </div>
  );
};
export default Practice;
