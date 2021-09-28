import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Card,
  Text,
  CardGroup,
} from "react-bootstrap";
import { Route, Switch, Link, useHistory } from "react-router-dom";

import Jumbotron from "./Jumbotron";
import styled from "styled-components";
import shoeData from "../data";

function Home({ shoes }) {
  const history = useHistory();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/"> Home </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail"> Detail </Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron />
      <CardGroup>
        {shoes.map((shoe, idx) => {
          return (
            <Card
              key={idx}
              style={{ width: "18rem" }}
              onClick={() => {
                history.push(`/detail/${idx}`);
              }}
            >
              <Card.Img
                variant="top"
                src={
                  "https://codingapple1.github.io/shop/shoes" +
                  (idx + 1) +
                  ".jpg"
                }
              />
              <Card.Body>
                <Card.Title>{shoe.title}</Card.Title>
                <Card.Text>{shoe.content}</Card.Text>
                <Card.Text>{shoe.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}

export default Home;
