import React from "react";

function DonePage() {
  return (
    <div>
      <div className="container-fluid col-md-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/116/162/non_2x/computer-with-checkmark-icon-job-done-illustration-flat-icon-can-use-for-icon-design-element-ui-web-mobile-app-free-vector.jpg"
          className="img-fluid img-thumbnail h-80"
        ></img>
        <div className="d-grid text-center">
          <a href="/AdminBoard"> 
            <button className="btn btn-primary btn-login text-uppercase fw-bold">
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default DonePage;
