import { useState } from "react";
import { Navbar, Container, Offcanvas, Nav, Button, InputGroup, Form } from "react-bootstrap";
import { FaApple, FaSearch, FaTimes } from "react-icons/fa";

const HeaderMobile = ({ setSearchQuery }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <Navbar expand={false} className="bg-dark text-white d-md-none py-2 sticky-top" data-bs-theme="dark" style={{ backgroundColor: "#000000ff" }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        {isSearchVisible ? (
          <div className="d-flex w-100 align-items-center animate__animated animate__fadeIn">
            <InputGroup className="flex-grow-1">
              <Form.Control
                autoFocus
                type="search"
                placeholder="Cerca musica..."
                className="border-0 text-light shadow-none bg-black"
                style={{ fontSize: "16px" }}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>
            <Button
              variant="link"
              className="text-white ms-2 p-0"
              onClick={() => {
                setIsSearchVisible(false);
                setSearchQuery("");
              }}
            >
              <FaTimes />
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center">
              <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 shadow-none p-0 me-3" />
              <Button variant="link" className="text-white p-0" onClick={() => setIsSearchVisible(true)}>
                <FaSearch size={18} style={{ color: "#8f8f8fff" }} />
              </Button>
            </div>

            <Navbar.Brand href="#" className="mx-auto text-white m-0">
              <FaApple className="fs-3" />
            </Navbar.Brand>

            <Button variant="link" className="text-decoration-none fw-bold p-0 btn-apple-mobile" style={{ color: "#fa243c" }}>
              ACCEDI
            </Button>
          </>
        )}

        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start" className="bg-dark text-white">
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#novita" className="text-white">
                Novità
              </Nav.Link>
              <Nav.Link href="#radio" className="text-white">
                Radio
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HeaderMobile;
