import React, { useState } from "react";
// import logo from '../Images/logo.svg';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminResetPassword() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/admin/resetPassword";
      const { data: res } = await axios.post(url, data);
      navigate("/admin_login");
      console.log(res.message);
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
              src="https://img.freepik.com/premium-vector/forgot-password-illustration_65141-418.jpg"
              alt="aaa"
            />
          </div>
          <div className="col-xl-8 col-lg-6 col-md-6 my-auto ">
            <h2 className="text-center">
              {" "}
              Reset<spam className="text-danger"> Password</spam>
            </h2>

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
                <label htmlFor="floatingPassword">New Password</label>
              </div>
              <div className="text-center mt-4">
                <button
                  className=" text-center btn btn-primary btn-md"
                  type="submit"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminResetPassword;
