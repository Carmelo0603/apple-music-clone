import { Container } from "react-bootstrap";
import { IoPlayBackSharp, IoPlayForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const MobilePlayBar = () => {
  return (
    <Container
      fluid
      className="d-md-none fixed-bottom bg-dark text-white d-flex justify-content-between align-items-center py-2 px-3"
      style={{ height: "70px", borderTop: "1px solid #333" }}
    >
      <div className="d-flex align-items-center">
        <div className="shadow-sm" style={{ width: "45px", height: "45px", backgroundColor: "#555", borderRadius: "6px" }}></div>
      </div>

      <div className="d-flex align-items-center gap-4">
        <IoPlayBackSharp className="fs-3" style={{ cursor: "pointer" }} />
        <FaPlay className="fs-2" style={{ cursor: "pointer" }} />
        <IoPlayForward className="fs-3" style={{ cursor: "pointer" }} />
      </div>
    </Container>
  );
};

export default MobilePlayBar;
