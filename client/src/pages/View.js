import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class View extends Component {

  render() {
    return (
     <div>
       <Nav />
          <Col size="md-12">
            <Jumbotron>
                <h1>UBERHELP!</h1>
            </Jumbotron>

            <center>   
                <h5 className="black-text">Here are your results! Good Luck!</h5>
              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
                <div className="z-depth-1 grey lighten-4 row" >
                  TEXT
                </div>
              </div>
            </center>
                  <div className="section"></div>
          </Col>
     </div>
    );
  }
}

export default View;