import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const RightToRepairNavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        background:
          "linear-gradient(45deg, rgba(143, 227, 227, 0.5), rgba(53, 88, 171, 1))",
      }}
      className="rounded-bottom-3"
    >
      <Container fluid>
        <Navbar.Brand href="/#/right-to-repair">Thys Vanderschoot</Navbar.Brand>
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
          <div className="btn" style={{ background: "rgba(209, 129, 25, 1)" }}>
            <a
              href="/#/right-to-repair/current-action"
              style={{ textDecoration: "none", color: "rgba(50,50,50,1)" }}
            >
              Current Action
            </a>
          </div>

          <div style={{ padding: "0.1rem" }}></div>

          <div className="btn" style={{ background: "rgba(209, 129, 25, 1)" }}>
            <a
              href="/#/right-to-repair/history"
              style={{ textDecoration: "none", color: "rgba(50,50,50,1)" }}
            >
              History
            </a>
          </div>

          <div style={{ padding: "0.1rem" }}></div>

          <div className="btn" style={{ background: "rgba(209, 129, 25, 1)" }}>
            <a
              href="/#/right-to-repair/international"
              style={{ textDecoration: "none", color: "rgba(50,50,50,1)" }}
            >
              International Action
            </a>
          </div>

          <div style={{ padding: "0.1rem" }}></div>

          <div className="btn" style={{ background: "rgba(209, 129, 25, 1)" }}>
            <a
              href="/#/right-to-repair/other-industries"
              style={{ textDecoration: "none", color: "rgba(50,50,50,1)" }}
            >
              Other Industries
            </a>
          </div>

          <div style={{ padding: "0.1rem" }}></div>

          <div className="btn" style={{ background: "rgba(209, 129, 25, 1)" }}>
            <a
              href="/#/right-to-repair/what-can-you-do"
              style={{ textDecoration: "none", color: "rgba(50,50,50,1)" }}
            >
              What to do
            </a>
          </div>

          <div style={{ padding: "0.1rem" }}></div>

          <div className="btn" style={{ background: "rgba(209, 129, 25, 1)" }}>
            <a
              href="/#/right-to-repair/concerns"
              style={{ textDecoration: "none", color: "rgba(50,50,50,1)" }}
            >
              Concerns
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RightToRepairNavBar;
