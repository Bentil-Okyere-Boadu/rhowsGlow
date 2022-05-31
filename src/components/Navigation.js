import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import devImg from "../images/rglogotransparent.png"

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={devImg} alt="logo" fluid style={{ height: "4rem", padding: '0', margin:'0'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "110px" }}
            navbarScroll
          >
            <Nav.Link><Link to="/"  style={{ color:"black", textDecoration: 'none' }}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/products" style={{ color:"black", textDecoration: 'none' }}>Products</Link></Nav.Link>
            {/* <Nav.Link href="#action2" style={{ color:"black" }}>Contact Us</Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
