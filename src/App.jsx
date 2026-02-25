import { useState } from "react";
import MobilePlayBar from "./components/MobilePlayBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import HeaderMobile from "./components/HeaderMobile";
import Home from "./components/Home";
import SideBarDesktop from "./components/SideBarDesktop";
import DesktopPlayBar from "./components/DesktopPlayBar";
function App() {
  const [searchQuery, setSearchQuery] = useState("queen");
  return (
    <div className="text-white min-vh-100">
      <HeaderMobile setSearchQuery={setSearchQuery}></HeaderMobile>
      <div className="playbar-wrapper">
        <DesktopPlayBar></DesktopPlayBar>
      </div>
      <SideBarDesktop setSearchQuery={setSearchQuery}></SideBarDesktop>
      <div className="main-wrapper ">
        <Home searchQuery={searchQuery}></Home>
      </div>
      <MobilePlayBar></MobilePlayBar>
    </div>
  );
}

export default App;
