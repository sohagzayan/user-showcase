import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import InputField from "./InputField";

const EditUser = ({ open, setOpen, currentEditModeData }) => {
  const { name, email, website, phone } = currentEditModeData;
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("bb");
  const [phones, setPhones] = useState("");
  const [websites, setWebsites] = useState("");

  /* set default value just for sort time but this not right way */
  useEffect(() => {
    setNames(name);
    setEmails(email);
    setPhones(phone);
    setWebsites(website);
  }, [name, email, website, phone]);

  return (
    <>
      <Modal
        title="Basic Modal"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <InputField
          onChange={setNames}
          onChangeValue={names}
          placeholder="Name"
          title="Name"
          type="text"
        />
        <InputField
          onChange={setEmails}
          onChangeValue={emails}
          placeholder="Email"
          title="Email"
          type="email"
        />
        <InputField
          onChange={setPhones}
          onChangeValue={phones}
          placeholder="Phone"
          title="Phone"
          type="phone"
        />
        <InputField
          onChange={setWebsites}
          onChangeValue={websites}
          placeholder="website"
          title="Website"
          type="text"
        />
      </Modal>
    </>
  );
};

export default EditUser;
