import { Nav, Form, InputGroup } from "react-bootstrap";
import { FaApple } from "react-icons/fa";

const SideBarDesktop = () => {
  return (
    <div
      className="d-none d-md-flex flex-column bg-dark"
      style={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        borderRight: "1px solid #333",
        zIndex: 1000,
      }}
    >
      <div className="d-flex align-items-center mb-4 mt-4 px-4 text-white">
        <FaApple className="fs-3 me-1" />
        <span className="fs-5 fw-bold">Music</span>
      </div>

      <div className="mb-4 px-3">
        <InputGroup>
          <InputGroup.Text className="bg-secondary border-0 text-light px-2" id="search-icon">
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="bg-secondary border-0 text-light shadow-none"
            aria-label="Cerca"
            aria-describedby="search-icon"
            style={{ fontSize: "14px" }}
          />
        </InputGroup>
      </div>

      <Nav className="flex-column w-100 px-3 gap-1">
        <Nav.Link href="#" className="text-white d-flex align-items-center rounded-2 p-2 px-3">
          <i className="bi bi-house-door me-3 fs-5"></i> Home
        </Nav.Link>

        <Nav.Link href="#" className="d-flex align-items-center rounded-2 p-2 px-3" style={{ backgroundColor: "#333", color: "#fa243c" }}>
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
