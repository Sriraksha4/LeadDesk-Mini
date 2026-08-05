import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      navigate("/admin");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-6 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="bg-blue-600 text-white w-full p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;