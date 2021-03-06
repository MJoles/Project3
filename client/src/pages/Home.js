import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class Home extends Component {
  render(){
    return(
      <div>
        <Nav text={this.props.username} text={this.props.email} />
        <Col size="md-12">
            <Jumbotron>
              <h1>UBERHELP!</h1>
            </Jumbotron>
        </Col>
        <br/>

          <div className='row'>
            <a href="/view"><button type="button" class="col s12 btn btn-large waves-effect black ">Job Listings
              <label className="indigo-text"> (All job postings)</label> 
            </button></a>              
          </div>
            <br/>

          <div className='row'> 
          <a href="/search"><button type="button" class="col s12 btn btn-large waves-effect black ">Search Help
              <label className="indigo-text">(Search job postings)</label> 
            </button></a>
          </div> 
            <br/>

          <div className='row'> 
            <a href="/jobs"> <button type="sumbit" className="col s12 btn btn-large waves-effect black">Offer Help
              <label className="indigo-text">(Post a job)</label>
            </button></a>
          </div>

      </div>
  )
  }
}


export default Home;
