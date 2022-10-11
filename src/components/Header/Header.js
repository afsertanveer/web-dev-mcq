import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-bg">
      <Container>
        <Link className="fw-bolder display-4" to="/">
          WEB DEVS MCQ
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link  className="text-white fw-bold" to="/home">
              Home
            </Link>
            <Link className="text-white fw-bold" to="statistics">
              Statistics
            </Link>
            <Link className="text-white fw-bold" to="/blogs">
              Blogs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
