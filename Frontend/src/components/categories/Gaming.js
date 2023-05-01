import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../header";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
const API = "http://localhost:3000/products/apidata/product/gaming";

function Gaming() {
  const [product, setProduct] = useState([]);
  const getProduct = async (url) => {
    const res = await axios.get(url);
    const product = await res.data;
    setProduct(product);
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-5 pt-2">
      <h1 className="text-center">GAMING ACCESSORIES</h1>
        <div className="row">
          {product.map((data) => {
            const { proid, proname, proimage, proprice, prodetail } = data;

            return (
              <>
                <div className="col-sm-4 mt-3 text-center ">
                  <MDBCard className="h-100" key={proid}>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src={proimage}
                        fluid
                        alt="..."
                        className="pt-3"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className="text-center">
                      <MDBCardTitle><span className="text-uppercase">{proname}</span></MDBCardTitle>
                      <MDBCardText>
                        <span className="fw-bold fs-5">&#8377;{proprice}</span>
                        <hr />
                        {prodetail}
                      </MDBCardText>
                      <MDBBtn href="#">Add to cart <i class="fa-solid fa-cart-shopping"></i></MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gaming;
