import MobilePlayBar from "./components/MobilePlayBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import HeaderMobile from "./components/HeaderMobile";
import Home from "./components/Home";
import SideBarDesktop from "./components/SideBarDesktop";
import DesktopPlayBar from "./components/DesktopPlayBar";
function App() {
  return (
    <>
      <HeaderMobile></HeaderMobile>
      <div className="playbar-wrapper">
        <DesktopPlayBar></DesktopPlayBar>
      </div>
      <SideBarDesktop></SideBarDesktop>
      <div className="main-wrapper ">
        <Home></Home>
      </div>
      <MobilePlayBar></MobilePlayBar>
    </>
  );
}

export default App;
