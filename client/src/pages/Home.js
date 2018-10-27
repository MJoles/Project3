import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class Home extends Component {
  render(){
    return(
      <div>
        <Nav text={"USERNAME WILL GO HERE"} />
        <Col size="md-12">
            <Jumbotron>
              <h1>UBERHELPS!</h1>
            </Jumbotron>
        </Col>
          <div>
            <button type="button" class="btn btn-primary btn-lg btn-block">Job Listings
            <p id="buttontext">All job postings</p>
            </button>
            <br/>

            <button type="button" class="btn btn-primary btn-lg btn-block">Need Help
            <p id="buttontext">Search job postings</p>
            </button>
            <br/>

            <button type="button" class="btn btn-secondary btn-lg btn-block">Offer Help
            <p id="buttontext">Post a job</p>
            </button>
          </div>
      </div>
  )
  }
}


export default Home;
