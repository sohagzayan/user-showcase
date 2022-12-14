import React from "react";
import { Col, Row } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";

const Controller = ({
  deleteUser,
  id,
  open,
  setOpen,
  like,
  setLike,
  editInfo,
}) => {
  /* Styles object */
  const styles = {
    root: {
      backgroundColor: "#FAFAFA",
    },
    iconsArea: {
      textAlign: "center",
      borderRight: "1px solid #e8e8e8",
      margin: "15px 0",
    },
    iconsHard: {
      fontSize: "20px",
      color: "#FF0000",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <Row style={styles.root}>
        <Col span={8} style={styles.iconsArea}>
          <span onClick={() => setLike((current) => !current)}>
            {like ? (
              <HeartFilled style={styles.iconsHard} />
            ) : (
              <HeartOutlined style={styles.iconsHard} />
            )}
          </span>
        </Col>
        <Col span={8} style={styles.iconsArea}>
          <EditFilled
            className="editIcon"
            onClick={() => {
              setOpen((current) => !current);
              editInfo(id);
            }}
            style={styles.icons}
          />
        </Col>
        <Col span={8} style={styles.iconsArea}>
          <DeleteFilled className="deleteIcon" onClick={() => deleteUser(id)} />
        </Col>
      </Row>
    </div>
  );
};

export default Controller;
