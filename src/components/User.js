import React, { useEffect, useState } from "react";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import { Col } from "antd";
import Controller from "./Controller";

const User = ({ user, deleteUser, open, setOpen }) => {
  const [like, setLike] = useState(false);
  const { name, website, username, phone, email, id } = user;

  /* Styles object */
  const styles = {
    card: {
      border: "1px solid #e8e8e8",
      borderRadius: "8px",
      marginBottom: "25px",
    },
    cardImage: {
      backgroundColor: "#f5f5f5",
      textAlign: "center",
    },
    contact: {
      display: "flex",
      alignItems: "center",
      marginBottom: "5px",
    },
    icons: {
      marginRight: "10px",
      fontSize: "18px",
      color: "#838383",
    },
    info: {
      padding: "20px",
    },
  };

  return (
    <Col lg={{ span: 6 }} md={{ span: 8 }} span={24}>
      <div style={styles.card}>
        <div style={styles.cardImage}>
          <img
            width={200}
            height={200}
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
            alt=""
          />
        </div>
        <div style={styles.info}>
          <h3>{name}</h3>
          <div style={styles.contact}>
            <MailOutlined style={styles.icons} />
            <span>{email}</span>
          </div>
          <div style={styles.contact}>
            <PhoneOutlined style={styles.icons} />
            <span>{phone}</span>
          </div>
          <div style={styles.contact}>
            <GlobalOutlined style={styles.icons} />
            <span>{website}</span>
          </div>
        </div>
        <Controller
          like={like}
          setLike={setLike}
          open={open}
          setOpen={setOpen}
          deleteUser={deleteUser}
          id={id}
        />
      </div>
    </Col>
  );
};

export default User;
