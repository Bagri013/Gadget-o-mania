import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../sign-in/style.module.css";
// import React, { useState } from "react";

const Adminregister = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    contact_no: "",
    address: "",
    pincode: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/admin/register";
      const { data: res } = await axios.post(url, data);
      navigate("/");
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
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row justify-content-center">
          <h1 className="text-center pb-3 text-decoration-underline">
            Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
          </h1>
          <p className="mb-4 text-center fs-5 fst-italic ">
            Customer's Happy Place :-)
          </p>
          <div className="col-xl-6 col-md-6 my-auto">
            <img
              className="img-fluid"
              src="https://static.vecteezy.com/system/resources/previews/004/115/562/non_2x/nft-shop-or-seller-artist-non-fungible-token-with-male-selling-digital-products-with-modern-flat-style-free-vector.jpg"
              alt="aaa"
            />
          </div>
          <div className="col-xl-6 col-md-6 my-auto">
            <form onSubmit={handleSubmit}>
            <h2 className="text-center">
                Want to Become a Seller?
              </h2>
              <h3 className="text-center pb-4 mt-3">
                Create{" "}
                <span className="text-danger text-decoration-underline">
                  New Account!
                </span>
              </h3>
              <div className="form-floating mb-3">
                <input
                  type="name"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  onChange={handleChange}
                  value={data.name}
                  name="name"
                  required
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
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
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.password}
                  name="password"
                  required
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="contact_no"
                  className="form-control"
                  id="floatingInput"
                  placeholder="1234567890"
                  onChange={handleChange}
                  value={data.contact_no}
                  name="contact_no"
                  required
                  // onChange={(e) => setContact_no(e.target.value)}
                />
                <label htmlFor="floatingPassword">Contact Number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="address"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Locality/Area"
                  onChange={handleChange}
                  value={data.address}
                  name="address"
                  required
                  // onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="floatingPassword">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="Pincode"
                  className="form-control"
                  id="floatingInput"
                  placeholder="pincode"
                  onChange={handleChange}
                  value={data.pincode}
                  name="pincode"
                  required
                  // onChange={(e) => setPincode(e.target.value)}
                />
                <label htmlFor="floatingPassword">Pincode</label>
              </div>
              <div className="text-center mt-4">
                {error && <div className={styles.error_msg}>{error}</div>}
                <button
                  type="submit"
                  className=" text-center btn btn-primary btn-md {styles.green_btn}"
                >
                  create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Adminregister;
