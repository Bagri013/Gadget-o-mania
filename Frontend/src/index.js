import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
import Deals from "./components/deals";
import Landing_Page from "./components/Landing Page";
import Sign_up from "./components/sign-up";
import Sign_in from "./components/sign-in";
import ResetPassword from "./components/resetPassword";
import Adminlogin from "./components/adminLogin/adminLogin";
import Adminregister from "./components/adminRegister/adminRegister";
import AdminResetPassword from "./components/adminResetPassword";
import Adminboard from "./components/admindashboard/adminboard";
import DonePage from "./components/DonePage";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";
import Laptop from "./components/categories/Laptop";
import Mobile from "./components/categories/Mobile";
import Camera from "./components/categories/Camera";
import Gaming from "./components/categories/Gaming";
import Watch from "./components/categories/Watch";
import Headset from "./components/categories/Headset";
import Speaker from "./components/categories/Speaker";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const user = localStorage.getItem("token");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Landing_Page />} />}
        <Route path="/" exact element={<Navigate replace to="/Sign_in" />} />
        <Route path="/sign_up" exact element={<Sign_up />} />
        <Route path="/sign_in" exact element={<Sign_in />} />
        <Route path="/ResetPassword" exact element={<ResetPassword />} />
        {user && <Route path="/deals" exact element={<Deals />} />}
        <Route
          path="/deals"
          exact
          element={<Navigate replace to="/Sign_in" />}
        />
        <Route path="/admin_login" exact element={<Adminlogin />} />
        <Route path="/admin_register" exact element={<Adminregister />} />
        <Route
          path="/AdminResetPassword"
          exact
          element={<AdminResetPassword />}
        />
        {user && <Route path="/Adminboard" exact element={<Adminboard />} />}
        <Route
          path="/Adminboard"
          exact
          element={<Navigate replace to="/admin_login" />}
        />
        <Route path="/DonePage" exact element={<DonePage />} />
        <Route path="/AddProduct" exact element={<AddProduct />} />
        <Route path="/UpdateProduct" exact element={<UpdateProduct />} />
        <Route path="/DeleteProduct" exact element={<DeleteProduct />} />

        {user && <Route path="/Laptop" exact element={<Laptop />} />}
        <Route path="/Laptop" exact element={<Navigate replace to="/Sign_in" />} />

        {user && <Route path="/Mobile" exact element={<Mobile />} />}
        <Route path="/Mobile" exact element={<Navigate replace to="/Sign_in" />} />

        {user && <Route path="/Camera" exact element={<Camera />} />}
        <Route path="/Camera" exact element={<Navigate replace to="/Sign_in" />} />

        {user && <Route path="/Gaming" exact element={<Gaming />} />}
        <Route path="/Gaming" exact element={<Navigate replace to="/Sign_in" />} />

        {user && <Route path="/Watch" exact element={<Watch />} />}
        <Route path="/Watch" exact element={<Navigate replace to="/Sign_in" />} />

        {user && <Route path="/Headset" exact element={<Headset />} />}
        <Route path="/Headset" exact element={<Navigate replace to="/Sign_in" />} />
        
        {user && <Route path="/Speaker" exact element={<Speaker />} />}
        <Route path="/Speaker" exact element={<Navigate replace to="/Sign_in" />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
