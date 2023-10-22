import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      style={{
        background:
          "linear-gradient(45deg, rgba(144, 74, 207, 0.5), rgba(195, 10, 203, 1))",
      }}
      className="rounded-bottom-3"
    >
      <Container fluid>
        <Navbar.Brand href="/">Thys Vanderschoot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="btn" style={{ background: "rgba(0,0,169,0.3)" }}>
            <Link
              to="/mtg-stats"
              style={{ textDecoration: "none", color: "rgba(235,235,235,1)" }}
            >
              Magic Stats
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
