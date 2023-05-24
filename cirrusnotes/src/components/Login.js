import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "https://cirrusnotes-backend.onrender.com";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const contentType = response.headers.get("Content-Type");
    if (contentType && !contentType.includes("application/json")) {
      console.error("Server returned non-JSON response:", response);
      props.toggleAlert("warning", "Server error");
      return;
    }
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.toggleAlert("success", "Login complete");
      navigate("/");
    } else if (
      response.status === 400 &&
      json.error === "Email already exists"
    ) {
      props.toggleAlert("warning", "Email already exists");
    } else if (json.errors) {
      // Handle server-side validation errors
      props.toggleAlert("warning", "Invalid credentials");
      console.error("Server-side validation errors:", json.errors);
      alert(
        "Please correct the following errors:\n" +
          json.errors.map((e) => e.msg).join("\n")
      );
    } else {
      props.toggleAlert("warning", "Invalid credentials");
    }
  };
  

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container  d-flex ">
      <div className="container">
        <div className="container d-flex my-5">
          <h1>Login :</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={onChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="container d-flex my-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
