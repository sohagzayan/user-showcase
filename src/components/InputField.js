import React from "react";
import { Col, Row } from "antd";

const InputField = ({ type, title, placeholder, onChange, onChangeValue }) => {
  return (
    <Row
      style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}
    >
      <Col span={6} style={{ textAlign: "right" }}>
        <label htmlFor="name" style={{ marginRight: "5px" }}>
          {" "}
          <span style={{ color: "#f5222d" }}>*</span> {title} :
        </label>
      </Col>
      <Col span={18}>
        <input
          value={onChangeValue}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          className="editInfo"
          placeholder={placeholder}
        />
      </Col>
    </Row>
  );
};

export default InputField;
