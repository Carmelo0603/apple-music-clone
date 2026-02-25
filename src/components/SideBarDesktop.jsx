import { Nav, Form, InputGroup } from "react-bootstrap";
import { FaApple } from "react-icons/fa";

const SideBarDesktop = ({ setSearchQuery }) => {
  return (
    <div
      className="d-none d-md-flex flex-column bg-dark"
      style={{
        height: "100vh",
        width: "260px",
        position: "fixed",
        top: 0,
        left: 0,
        borderRight: "1px solid #333",
        zIndex: 1000,
        paddingTop: "60px",
      }}
    >
      <div className="d-flex align-items-center mb-4 mt-4 px-4 text-white">
        <FaApple className="fs-3 me-1" />
        <span className="fs-5 fw-bold">Music</span>
      </div>

      <div className="mb-4 px-3">
        <InputGroup>
          <InputGroup.Text className=" border-0 px-2" id="search-icon" style={{ color: "#fa243c", background: "black" }}>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className=" border-0 text-light shadow-none custom-search"
            aria-label="Cerca"
            aria-describedby="search-icon"
            style={{ fontSize: "14px", background: "black" }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </div>

      <Nav className="flex-column w-100 px-3 gap-1">
        <Nav.Link href="#" className="text-white d-flex align-items-center rounded-2 p-2 px-3">
          <i className="bi bi-house-door me-3 fs-5"></i> Home
        </Nav.Link>

        <Nav.Link href="#" className=" text-white d-flex align-items-center rounded-2 p-2 px-3">
          <i className="bi bi-grid-fill me-3 fs-5"></i> Novità
        </Nav.Link>

        <Nav.Link href="#" className="text-white d-flex align-items-center rounded-2 p-2 px-3">
          <i className="bi bi-broadcast me-3 fs-5"></i> Radio
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBarDesktop;
