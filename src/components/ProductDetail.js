import React from "react";
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
import { useHistory, useParams } from "react-router-dom";

function ProductDetail(props) {
  console.log(props);
  const index = useParams().index;
  const shoe = props.shoes[index];
  console.log(index);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            "https://codingapple1.github.io/shop/shoes" +
            (parseInt(index) + 1) +
            ".jpg"
          }
        />
        <Card.Body>
          <Card.Title>{shoe.title}</Card.Title>
          <Card.Text>{shoe.content}</Card.Text>
          <Card.Text>{shoe.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductDetail;
