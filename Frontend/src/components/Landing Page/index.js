import "./index.css";
import React from "react";
import Header from "../header/index";
import Footer from "../Footer/index";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Landing_Page() {
  return (
    <div>
      <Header />
      <div id="intro" className="bg-image vh-100 shadow-1-strong bg-class">
        {/* <video className="video-bg" playsInline autoPlay muted loop>
          <source className="h-100" src={final_Trim} type="video/mp4" />
        </video> */}
        <div className="mask mask-color">
          <div className="container h-100 justify-content-center text-white">
            <div id="home-sec">
              <p className="text-center mt-5 pt-4 fs-1 fw-bold">
                Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
              </p>
              <p className="mb-4 text-center fs-4 fst-italic">
                Customer's Happy Place :-)
              </p>
              <p className="fs-4 fw-bold mt-5 ms-5">
                Get access to your Orders,
                <br /> Wishlist and Recommendations!
              </p>
              <div className="container d-flex">
                <div className="row">
                  <div className="col">
                    <i className="fa-solid fa-octagon-check"></i>
                    <div className="detail-sec ms-5">
                      <ul className="fa-ul fs-5">
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          Over <b>15 Crore+</b> Listings
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          <b>WideRange of Selection</b>
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          Super <b>Easy Returns</b>
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          <b>Cashback Offers</b>
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          <b>Cash On Delivery</b>
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          <b>Trusted Suppliers</b>
                        </li>
                        <li>
                          <span className="fa-li">
                            <i className="fa-solid fa-check-square"></i>
                          </span>
                          <b>Refer & Earn</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-6">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/010/176/168/large_2x/cashback-prepaid-card-3d-rendering-illustration-for-get-vouchers-discounts-reward-program-color-blue-orange-black-yellow-perfect-for-ui-ux-design-ecommerce-branding-shopping-sale-advertising-free-png.png"
                        className="img-fluid "
                      ></img>
                    </div> */}
                </div>
              </div>
              {/* <a
                className="btn btn-primary m-2 ms-5 mt-4"
                href="/Sign_in"
                role="button"
              >
                Sign-in
              </a>
              <a
                className="btn btn-outline-primary m-2 mt-4"
                href="/Sign_up"
                role="button"
              >
                Sign-up
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.reliancedigital.in/medias/Audio-Accessories-Carousel-Banner-08-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w2NjIyMXxpbWFnZS9qcGVnfGltYWdlcy9oNDAvaGRkLzk4NjE0OTk4MTM5MTguanBnfDFjY2I2NTI0NGJhYWM3Yjk0MDgxNWJjZjg1NGVlZjJjYzQ3N2E5M2ZmY2Y4MjdjMGEwNjgyZDU1YjgzYzkwNjI"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.reliancedigital.in/medias/Electronics-Fest-CLP-D-18.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjE2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hmOS85ODYyNDMxNDA4MTU4LmpwZ3w1Mzk1MzMzMmI3MDg0OTc1ZWFiODkwNTk2ZTEwNDhhZGZhZTBmYWU3MDNhNjNmOGVkNWJkODk2OWFkZTFjNjhm"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.reliancedigital.in/medias/Noise-Buds-CLP-Banner-13-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzMyMzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGE4L2hiYy85ODYwMDY1NDkzMDIyLmpwZ3w5N2ZiNDlmYzc0Yzk2YTA3ODE0ODYxN2Q2ZTg0OTZhNGU4NzRiMDlmYjM3MTM1MTZlZGYzYmIxNWRlNWY1ZmM2"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src=" https://www.reliancedigital.in/medias/Lenovo-Laptops-Desktop-15.07.jpg?context=bWFzdGVyfGltYWdlc3wxMzExODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDY5L2hiMC85ODYyMjA3MDQ1NjYyLmpwZ3w1MmIyMzI0MmY3NzJkYjI2YTI5NTdkZDMwYmUyMmQxZDIyMGY0MWI5OWM2ZTJhNzIxMDgyZjUxY2YyZTdmNzA5"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://www.reliancedigital.in/medias/Galaxy-Unpacked-RD-CLP-D.jpg?context=bWFzdGVyfGltYWdlc3w0NDQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oNTgvaDRjLzk4NjcyNzk2NjMxMzQuanBnfDJiZmY4ODJiYzQ5MDBlMmNmNWFmZmRmNWU3NDQwZWE2ZWUyZTk1NjI4MjgxNjNjMTVmZmFiYjNkY2Y0MGZjOTU"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.reliancedigital.in/medias/Samsung-Galaxy-Book-RD-CLP-D-Banner.jpg?context=bWFzdGVyfGltYWdlc3w5NTI5MHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaGNiLzk4NzA5MTYyNTU3NzQuanBnfGIwMGIzYmEwYzJjOWI1MzkxYTc0NDdlMWJhYzMzMTFlYzVkYjM5NWY0ZWU5NDEwZGQ0YWE3OTQ1MmQzZDlhYTE"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-4 mb-5">
        <h1 class="text-center pb-1">Festive Sale Ending Soon!</h1>
        <div className="row text-center ">
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg"
                  fluid
                  alt="..."
                />
                <a href="/Laptop">
                  <div
                  
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Laptops</MDBCardTitle>
                <MDBCardText>
                  Get Airpods free! <br />
                  Deal only for limited time<span className="fw-bold">*</span>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://m-cdn.phonearena.com/images/article/64576-wide-two_350/The-Best-Phones-in-2022-updated-August.jpg"
                  fluid
                  alt="..."
                />
                <a href="/Mobile">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Mobile Phones</MDBCardTitle>
                <MDBCardText>Grab 20% off on Various Brands!</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://images2.minutemediacdn.com/image/upload/c_crop,w_2071,h_1164,x_0,y_193/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g8eqh7x3frj93nqfh2.jpg"
                  fluid
                  alt="..."
                />
                <a href="/Gaming">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle> Gaming Accessories </MDBCardTitle>
                <MDBCardText>Buy Now & Get a Gaming Pad Free!</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smart-watches-2021-lead-1634826413.jpg"
                  fluid
                  alt="..."
                />
                <a href="/Watch">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Smart Watches</MDBCardTitle>
                <MDBCardText>
                  Cashback Offers on SBI Debit Card
                  <span className="fw-bold">*</span>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        <div className="row text-center pt-3">
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/airpods-pro-2-vs-airpods-pro-airpods-3-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
                  fluid
                  alt="..."
                />
                <a href="/Headset">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Headsets/Airpods</MDBCardTitle>
                <MDBCardText>
                  Get Airpods case free! <br />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://i.rtings.com/assets/pages/D5S8F5Xg/best-speaker-brands3-medium.jpg"
                  fluid
                  alt="..."
                />
                <a href="/Speaker">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Speakers</MDBCardTitle>
                <MDBCardText>Grab 20% off on JBL and BOAT</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://cdn.mos.cms.futurecdn.net/KiQ4vvTQp3QpYRgNa5Sy7a.jpg"
                  fluid
                  alt="..."
                />
                <a href="/Camera">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Camera</MDBCardTitle>
                <MDBCardText>
                  {" "}
                  Cashback Offers on SBI Credit Card
                  <span className="fw-bold">*</span>{" "}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://fba.help/wp-content/uploads/2019/09/mobile-inspection.jpg"
                  fluid
                  alt="..."
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle>Mobile Accessories</MDBCardTitle>
                <MDBCardText>
                  Cashback Offers on Paytm/PhonePay
                  <span className="fw-bold">*</span>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        <div className="text-center mt-3">
          <MDBBtn href="/Deals">Explore more deals!</MDBBtn>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing_Page;
