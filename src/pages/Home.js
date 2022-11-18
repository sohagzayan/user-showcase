import React, { useEffect, useState } from "react";
import { Row } from "antd";
import axios from "axios";
import User from "../components/User";
import EditUser from "../components/EditUser";

const Home = () => {
  /* store all user from user state  */
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  /* get 10 user from api using axios get method */
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const getUsers = async () => {
      const { data } = await axios.get(URL);
      //   console.log(data);
      setUsers(data);
    };
    getUsers();
  }, []);

  /* Styles object */
  const styles = {
    root: {
      padding: 15,
    },
  };

  /* delete user handler */
  const deleteUser = async (id) => {
    const usered = users.filter((u) => u.id !== id);
    setUsers(usered);
  };

  return (
    <div style={styles.root}>
      <div>
        <Row gutter={25}>
          {users.map((u, index) => (
            <User
              open={open}
              setOpen={setOpen}
              deleteUser={deleteUser}
              key={index}
              user={u}
            />
          ))}
        </Row>
      </div>
      <EditUser open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
