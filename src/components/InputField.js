import React from "react";
import { Button, Modal, Col, Row } from "antd";

const InputField = ({ type, title, placeholder }) => {
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
        <input type={type} className="editInfo" placeholder={placeholder} />
      </Col>
    </Row>
  );
};

export default InputField;
