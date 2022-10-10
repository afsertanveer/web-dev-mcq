import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-bg">
      <Container>
        <Navbar.Brand className="fw-bolder brand" href="/">
          WEB DEVS MCQ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="text-white fw-bold" href="home">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white fw-bold"
              href="statistics"
            >
              Statistics
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" href="blogs">
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
