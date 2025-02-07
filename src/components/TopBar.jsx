import { Navbar, Nav, Container } from "react-bootstrap";
import { BiBell, BiSearch, BiUserCircle } from "react-icons/bi";

const TopBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="assets/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <BiSearch className="text-light" size={24} />
            <span className="fw-bold text-light">KIDS</span>
            <BiBell className="text-light" size={24} />
            <BiUserCircle className="text-light" size={24} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
