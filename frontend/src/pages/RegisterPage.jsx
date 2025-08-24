import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData , [e.target.name]: e.target.value});
  }

   // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", formData);
      alert("user Registered Successfully!");
      console.log(res.data);
    }
    catch (error) {
      console.error(error);
      alert("Registration Failed!");
    }
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required />
        <br /><br />
        <input type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required />
        <br /><br />
        <input type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
};

