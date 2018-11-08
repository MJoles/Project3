import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"
import API from "./../util/API";
import Post from "./Post";

class View extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.jobImport();
  }

  jobType(job) {
    var jobTitles = ""
    if(job.carpentry) {
      jobTitles += "Carpentry  "
    }
    if(job.plumbing) {
      jobTitles += "Plumbing  "
    }
    if(job.electrician) {
      jobTitles += "Electrician  "
    }
    if(job.yardwork) {
      jobTitles += "Yard Work  "
    }
    return jobTitles;
  }


  jobImport = event => {    
    API.getJobs()
      .then(res => {
        console.log(res)
        this.setState({ jobs: res.data})
      })
      .catch(err => console.log(err))
  }

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
              {this.state.jobs.length ? (
              <div className="z-depth-1 grey lighten-4 row">
                {this.state.jobs.map(job => (
                  <div className="z-depth-1 grey lighten-4 row" key={job._id} >
                 <strong><h6 > UBERHELP <i class="material-icons">home</i></h6></strong>

                 <strong>Skills: </strong> {this.jobType(job)}
                  <br></br>
                  <strong>Job Details:</strong> {job.jobDetails}
                  <br></br>
                  <strong>Location:</strong> {job.city}, {job.state}


                  </div>
                ))}
              </div>  
              ) : (
                <h3></h3>
              )}

              </div>
            </center>
                  <div className="section"></div>
          </Col>
     </div>
    );
  }
}

export default View;