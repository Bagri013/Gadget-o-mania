// import logo from "./logo.svg";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header/index";
// import Sign_up from "./components/sign-up/index"
// import Sign_in from "./components/sign-in/index"
// import Landing_Page from "./components/Landing Page/index";

function App() {
  const user = localStorage.getItem("token");

  return(
    <Routes>
      {/* {user && <Route path="/" exact element={<Landing_Page />} />} */}
      {/* <Route path="/sign_up" exact element={<Sign_up />} /> */}
      {/* <Route path="/sign_in" exact element={<Sign_in />} /> */}
			{/* <Route path="/" element={<Navigate replace to="/Sign_in" />} /> */}
    </Routes>
  );
  //  <Landing_Page />
}

export default App;
