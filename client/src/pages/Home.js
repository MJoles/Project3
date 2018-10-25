import React, { Component } from "react";
// import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../../components/List";
import Input from "../components/Input";

class Home extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sign up</h1>
            </Jumbotron>
            <form>
              <Input name="f_name" placeholder="First Name (required)" />
              <Input name="l_name" placeholder="Last Name (required)" />
              <Input name="email" placeholder="Email (required)" />
              <Input name="password" placeholder="Password (required)" />
              {/* <FormBtn>Submit Book</FormBtn> */}
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Log in</h1>
            </Jumbotron>
            <form>
              <Input name="email" placeholder="Email" />
              <Input name="password" placeholder="Password" />
              {/* <FormBtn>Submit Book</FormBtn> */}
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
