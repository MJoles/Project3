import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"
import API from "./../util/API";
import axios from "axios";


class Search extends Component {
  state = {
    yardwork: false,
    carpentry: false,
    plumbing: false,
    electrician: false,
    jobs: []
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  find = event => {
    this.setState({
      jobs: []
    })
    event.preventDefault();

    if(this.state.yardwork === true){
      axios.get("/findYardworkers",)
        .then(res => {
          this.setState({
          jobs: res.data
        })
      })  
    }
     if(this.state.carpentry === true){   
       axios.get("/findCarpenters",)
       .then( res => {
         console.log(res)
         this.setState({
           jobs: res.data
         })
       })
    }
    if(this.state.plumbing === true ){
      axios.get("/findPlumbers",)
      .then(res => {
        this.setState({
          jobs: res.data
        })      
      })
    }
    if(this.state.electrician === true){
      axios.get("/findElectricians",)
      .then(res => {
        this.setState({
          jobs: res.data
        })    
      })
    }
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

  render() {
    return (
     <div>
       <Nav />
          <Col size="md-12">
            <Jumbotron>
                <h1>UBERHELP!</h1>
            </Jumbotron>

            <center>   
                <h5 className="black-text">Search for a job</h5>
              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12">
                     <a href= "/view" className="indigo-text"> Or view all jobs available</a>
                        <div className='row'>
                          <div className='input-field col s12'>
                            <span class="input-group-text"> Select the type of work you're seeking below</span>
                          </div>
                        </div>
                        <div className='row'>
                          <label> 
                            <input type="checkbox" ref="carpentry" name="carpentry" checked={this.state.carpentry} onChange={this.handleInputChange}/>
                              <span>Carpentry</span>                  
                          </label>   
                        </div>

                        <div className='row'>
                          <label> 
                            <input type="checkbox" ref="yardwork" name="yardwork" checked={this.state.yardwork} onChange={this.handleInputChange}/>
                              <span>Yardwork</span>                  
                          </label>   
                        </div>

                        <div className='row'>
                          <label> 
                            <input type="checkbox" ref="electrician" name="electrician" checked={this.state.electrician} onChange={this.handleInputChange}/>
                              <span>Electrician</span>                  
                          </label>   
                        </div>

                        <div className='row'>
                          <label>
                            <input type="checkbox" ref="plumbing" name="plumbing" checked={this.state.plumbing} onChange={this.handleInputChange}/>
                              <span>Plumbing</span>
                          </label>                                           
                        </div>
                   
                        <div className='row'>
                          <button type="submit" onClick={this.find} name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Find!</button>
                        </div>
                  </form>
                </div>
              </div>
            </center>
            <center>
                  <div className="section">
                
                    {this.state.jobs.length ? (
              <div className="z-depth-1 grey lighten-2 col s12">
                {this.state.jobs.map(job => (
                  <div className="z-depth-1 grey lighten-4 col s12" key={job._id}>
                  <strong><h6 > UBERHELP <i class="material-icons">home</i></h6></strong>
                   <strong>Skills:</strong> {this.jobType(job)}

                    <br></br>
                    <strong>Job Details:</strong> {job.jobDetails}
                    <br></br>
                    <strong> Location: </strong> {job.city}, {job.state}
                  </div>

                ))}
              </div>  
              ) : (
                <h4> No jobs to display</h4>
              )}
              </div>
              </center>
          </Col>
     </div>
    );
  }
}
export default Search;