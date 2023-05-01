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

function Deals() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 class="text-center py-3">LAPTOPS</h1>
        <div className="row text-center ">
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"
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
                <MDBCardTitle>Macbook Air M2</MDBCardTitle>
                <MDBCardText>
                  Get Airpods free! <br />
                  Deal only for limited time<span className="fw-bold">*</span>
                </MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://m.media-amazon.com/images/I/51e8LGN-BpL._SL1000_.jpg"
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
                <MDBCardTitle>HP Spectre Series</MDBCardTitle>
                <MDBCardText>Grab 20% off on this recently Series!</MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://i0.wp.com/laptopmedia.com/wp-content/uploads/2021/01/csm_ZenBook_Pro_Duo_15_OLED_UX582_Product_photo_04_9121500f0a-e1610614633303.jpg?fit=957%2C942&ssl=1"
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
                <MDBCardTitle> ASUS </MDBCardTitle>
                <MDBCardText>Buy Now & Get a Gaming Mouse Free!</MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://m.media-amazon.com/images/I/71nDBnG8kGL._AC_SS450_.jpg"
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
                <MDBCardTitle> Lenovo</MDBCardTitle>
                <MDBCardText>
                  Cashback Offers on SBI Debit/Credit Card
                  <span className="fw-bold">*</span>
                </MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h1 class="text-center py-3">MOBILE PHONES</h1>
        <div className="row text-center">
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://static.standard.co.uk/2020/11/09/13/iPhone.png?width=1200"
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
                <MDBCardTitle> iPhones</MDBCardTitle>
                <MDBCardText>Heavy Discount on Every Variant!</MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://img.etimg.com/photo/msid-92224449,quality-100/nothing-phone-1.jpg"
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
                <MDBCardTitle>Nothing 1</MDBCardTitle>
                <MDBCardText>
                  Grab 20% off on this recently launched Nothing Phone!!
                </MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
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
                <MDBCardTitle> Samsung S22 Ultra</MDBCardTitle>
                <MDBCardText>Buy Now & Get a Smart Watch Free!</MDBCardText>
                <br />
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://images.news18.com/ibnlive/uploads/2022/07/oneplus-10t-5g-2.jpg"
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
                <MDBCardTitle> OnePlus</MDBCardTitle>
                <MDBCardText>
                  Cashback Offers on ICICI Debit/Credit Card*
                </MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h1 class="text-center py-3">ACCESSORIES</h1>
        <div className="row text-center">
          <div className="col-md-3">
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src="https://cdn.pocket-lint.com/r/s/x1920/assets/images/132168-smartwatches-news-buyer-s-guide-best-smartwatch-image9-ehzukvy5n1.jpg"
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
                <MDBCardTitle> Smart Watches</MDBCardTitle>
                <MDBCardText>Heavy Discount on each Brand!</MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/10f659a8-d246-40b6-a38f-5d6d0d28c8bc.__CR0,0,970,600_PT0_SX970_V1___.png"
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
                <MDBCardTitle>BOAT</MDBCardTitle>
                <MDBCardText>Grab 20% off on any BOAT Item!!</MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://cdn.vox-cdn.com/thumbor/VF5derVdOaj16AX1Zuxn58cHSLM=/0x0:6833x4555/1200x800/filters:focal(2871x1732:3963x2824)/cdn.vox-cdn.com/uploads/chorus_image/image/67448910/razerwirelessgear.0.jpg"
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
                <MDBCardTitle>Gaming</MDBCardTitle>
                <MDBCardText>All your Gaming needs are here!</MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
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
                  src="https://www.maxim.com/wp-content/uploads/2021/05/marshall-bluetooth-speakers-promo-788x443.jpg"
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
                <MDBCardTitle>Bluetooth speakers</MDBCardTitle>
                <MDBCardText>
                  Cashback Offers on ICICI Debit/Credit Card*
                </MDBCardText>
                <MDBBtn href="#">Buy now!</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Deals;
