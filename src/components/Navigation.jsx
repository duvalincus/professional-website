import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import resume from "../assets/Resume (CS).pdf";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-full sticky-top">
      <Container>
        <Navbar.Brand href="#">Marco&apos;s Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#resume">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href={resume} target="_blank">
              Resume
            </Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://github.com/duvalincus"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/marco-navarro-4308a9142/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Linked-In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="mailto: mnava095@ucr.edu"
                target="_blank"
                rel="noreferrer noopener"
              >
                E-Mail
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
