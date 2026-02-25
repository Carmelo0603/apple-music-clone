import { Navbar, Container, Offcanvas, Nav, Button } from "react-bootstrap";
import { FaApple } from "react-icons/fa";

const HeaderMobile = () => {
  return (
    <Navbar expand={false} className="bg-dark text-white d-md-none py-2" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 shadow-none" />

        <Navbar.Brand href="#" className="mx-auto text-white m-0">
          <FaApple className="fs-3" />
        </Navbar.Brand>

        <Button variant="link" className="text-decoration-none fw-bold p-0">
          Accedi
        </Button>

        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Novità</Nav.Link>
              <Nav.Link>Radio</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HeaderMobile;
