import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/i/flow/login" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://www.google.co.in/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="https://www.instagram.com/accounts/login/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="5" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
              </h6>
              <p>
                E-commerce is revolutionizing the way we all shop in India. Why
                do you want to hop from one store to another in search of the
                latest Gadgets when you can find it on the Internet in a single
                click? Everything you can possibly imagine, from trending
                electronics like laptops, tablets, smartphones, and mobile
                accessories we got them all covered. You name it, and you can
                stay assured about finding them all here. For those of you with
                erratic working hours. Shop at night or in the wee hours of the
                morning. This e-commerce never shuts down.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Help</h6>
              <p>
                <a href="#!" className="text-reset">
                  Payments
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Shipping
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cancellation & Returns
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Policy</h6>
              <p>
                <a href="#!" className="text-reset">
                  Return Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Security
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <a href="/#!" className="text-reset">
                  <MDBIcon icon="home" className="me-2 " />
                  Programmers Desk
                </a>
              </p>
              <p>
                <a href="mailto:gadgetomania@gmail.com" className="text-reset">
                  <MDBIcon icon="envelope" className="me-3" />
                  gadgetomania@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:01112345678" className="text-reset">
                  <MDBIcon icon="phone" className="me-3" /> 01112345678
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © Copyright:
        <a className="text-reset fw-bold" href="/">
        Gadget-<i className="fa-solid fa-sack-dollar"></i>-Mania
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
