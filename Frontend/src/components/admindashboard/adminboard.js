import React from "react";
import Header from "../header";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function Adminboard() {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <div className="pt-3 text-center">
          <h1>Welcome Happy Seller!</h1>
          <h4>Select What you want to do!</h4>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center ">
            <MDBCard className="col-lg-3 col-sm-6 m-2">
              <MDBCardImage
                src="https://static.vecteezy.com/system/resources/previews/004/579/130/large_2x/man-uploading-data-with-smartphone-free-vector.jpg"
                position="top"
                alt="..."
              />
              <MDBCardBody className="text-center">
                <MDBCardTitle>Add Product</MDBCardTitle>
                <MDBCardText>Want to add or launch a new product?</MDBCardText>
                <MDBBtn href="/AddProduct">Add</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="col-lg-3 col-sm-6 m-2">
              <MDBCardImage
                src="https://static.vecteezy.com/system/resources/previews/004/578/813/non_2x/search-data-on-internet-and-save-in-folder-free-vector.jpg"
                position="top"
                alt="..."
              />
              <MDBCardBody className="text-center">
                <MDBCardTitle>Modify Product</MDBCardTitle>
                <MDBCardText>Want to update or modify any product?</MDBCardText>
                <MDBBtn href="/UpdateProduct">Update</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="col-lg-3 col-sm-6 m-2">
              <MDBCardImage
                src="https://static.vecteezy.com/system/resources/previews/004/579/330/non_2x/several-teams-are-collating-and-deleting-data-free-vector.jpg"
                position="top"
                alt="..."
              />
              <MDBCardBody className="text-center">
                <MDBCardTitle>Delete Product</MDBCardTitle>
                <MDBCardText>Want to Remove any product?</MDBCardText>
                <MDBBtn href="/DeleteProduct">Delete</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminboard;
