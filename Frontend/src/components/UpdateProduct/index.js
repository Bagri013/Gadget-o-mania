import React, { useState } from "react";
// import logo from '../Images/logo.svg';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateProduct() {
  const [data, setData] = useState({
    proid: "",
    proname: "",
    proimage: "",
    proprice: "",
    procategory: "",
    prodetail: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/products/updateProduct";
      const { data: res } = await axios.post(url, data);
      navigate("/DonePage");
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
    <div className="bg-secondary">
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <div className="d-flex justify-content-start">
                  <a
                    href="/Adminboard"
                    className="me-3"
                    style={{ color: "black" }}
                  >
                    <i className="fa-solid fa-house fs-4"></i>
                  </a>
                  <h3 className="card-title text-center mb-3 ms-5">
                    Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
                  </h3>
                </div>
                <h4 className="text-center fw-bold">Update Product</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="Mobile"
                      value="Mobile"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label fs-5" htmlFor="Mobile">
                      Mobile Phone
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="Laptop"
                      value="Laptop"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label fs-5" htmlFor="Laptop">
                      Laptop
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="Headset/Airpods"
                      value="Headset/Airpods"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label fs-5" htmlFor="Headset/Airpods">
                    Headset/Airpods
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="GamingAccessories"
                      value="GamingAccessories"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="form-check-label fs-5"
                      htmlFor="GamingAccessories"
                    >
                      Gaming Accessories
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="Camera"
                      value="Camera"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label fs-5" htmlFor="Camera">
                      Camera
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="SmartWatches"
                      value="SmartWatches"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="form-check-label fs-5"
                      htmlFor="SmartWatches"
                    >
                      Smart Watches
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input fs-5"
                      type="radio"
                      name="procategory"
                      id="Speakers"
                      value="Speakers"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label fs-5" htmlFor="Speakers">
                      Speakers
                    </label>
                  </div>

                  <div className="mt-2 mb-3">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="proid"
                        value={data.proid}
                        name="proid"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Product ID</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="proname"
                        value={data.proname}
                        name="proname"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Product Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="proimage"
                        value={data.proimage}
                        name="proimage"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Product Image Link</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="proprice"
                        value={data.proprice}
                        name="proprice"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Product Price</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="prodetail"
                        value={data.prodetail}
                        name="prodetail"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingInput">Product Details</label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold "
                      type="submit"
                    >
                      Update
                    </button>
                    {error && <div className="error">{error}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
