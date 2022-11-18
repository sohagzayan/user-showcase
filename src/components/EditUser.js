import React, { useState } from "react";
import { Button, Modal } from "antd";
import InputField from "./InputField";

const EditUser = ({ open, setOpen }) => {
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Basic Modal"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <InputField placeholder="Name" title="Name" type="text" />
        <InputField placeholder="Email" title="Email" type="email" />
        <InputField placeholder="Phone" title="Phone" type="phone" />
        <InputField placeholder="website" title="Website" type="text" />
      </Modal>
    </>
  );
};

export default EditUser;
