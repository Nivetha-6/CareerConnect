import { useEffect, useState } from "react";
import API from '../services/api';
const HomePage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        setUsers(res.data);
      }
      catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default HomePage;