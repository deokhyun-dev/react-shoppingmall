import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

function Jumbotron() {
  return (
    <Wrapper>
      <h1>20% Season Off</h1>
      <p>이거슨 쇼핑몰 사이트 예제임</p>
      <Button variant="primary">Learn More</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  background-color: #234f1e;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Jumbotron;
