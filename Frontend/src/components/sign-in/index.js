import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import React from "react";
import styles from "./style.module.css";

const Sign_in = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/users/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="login-bg ">
      <div className="container d-flex shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="row justify-content-center">
          <h1 className="text-center pb-3 text-decoration-underline">
            Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
          </h1>
          <p className="mb-4 text-center fs-5 fst-italic ">
            Customer's Happy Place :-)
          </p>
          <div className="col-xl-4 col-lg-6 col-md-6 my-auto ">
            <img
              className="img-fluid"
              // src="https://images.unsplash.com/photo-1620783770629-122b7f187703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FkZ2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              src="https://static.vecteezy.com/system/resources/previews/001/927/403/non_2x/switch-to-online-shopping-during-pandemic-free-vector.jpg"
              alt="aaa"
            />
          </div>
          <div className="col-xl-8 col-lg-6 col-md-6 my-auto ">
            <h2 className="text-center">Welcome back!</h2>
            <h3 className="text-center pb-4">
              <span className="text-danger text-decoration-underline ">
                Login
              </span>{" "}
              to your Account!
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="abcdef@xyz.com"
                  onChange={handleChange}
                  value={data.email}
                  name="email"
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.password}
                  name="password"
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="text-center mt-4">
                {error && <div className={styles.error_msg}>{error}</div>}
                <button
                  // type="submit"
                  className=" text-center btn btn-primary btn-md"
                >
                  Log In
                </button>

                <p className="mt-2">
                  Don't Have an Account? <a href="/Sign_up">Sign-Up</a>
                  <br />
                  Login as Admin <a href="/admin_login">Login</a>
                  <br />
                  Forgot Password? <a href="/ResetPassword">Reset</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
