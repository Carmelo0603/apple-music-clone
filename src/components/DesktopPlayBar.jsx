import { Button } from "react-bootstrap";
import { IoPlayBackSharp, IoPlayForward } from "react-icons/io5";
import { FaPlay, FaApple } from "react-icons/fa";
import { FaRepeat, FaShuffle } from "react-icons/fa6";
import { FiVolume2 } from "react-icons/fi";

const DesktopPlayBar = () => {
  return (
    <div
      className="d-none d-md-flex justify-content-between align-items-center bg-dark px-4 border-bottom border-secondary"
      style={{
        height: "60px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1050,
        backgroundColor: "#1c1c1e",
      }}
    >
      <div className="d-flex align-items-center gap-3 w-25">
        <FaRepeat></FaRepeat>
        <IoPlayBackSharp></IoPlayBackSharp>
        <FaPlay></FaPlay>
        <IoPlayForward></IoPlayForward>
        <FaShuffle></FaShuffle>
      </div>

      <div className="d-flex justify-content-center align-items-center rounded-2 w-50" style={{ height: "40px", backgroundColor: "#2c2c2e" }}>
        <FaApple></FaApple>
      </div>

      <div className="d-flex justify-content-end align-items-center gap-3 w-25">
        <FiVolume2></FiVolume2>
        <Button>ACCEDI</Button>
      </div>
    </div>
  );
};

export default DesktopPlayBar;
