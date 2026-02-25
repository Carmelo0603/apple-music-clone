import "./App.css";
import MobilePlayBar from "./components/MobilePlayBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderMobile from "./components/HeaderMobile";
import Home from "./components/Home";
function App() {
  return (
    <>
      <HeaderMobile></HeaderMobile>
      <Home></Home>
      <MobilePlayBar></MobilePlayBar>
    </>
  );
}

export default App;
