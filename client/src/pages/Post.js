import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css";
import API from "./../util/API";

class Post extends Component {
  state = {
    yardwork: false,
    carpentry: false,
    plumbing: false,
    electrician: false,
    jobDetails: "",
    city: "",
    state: "",
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    var jobData = this.state
    console.log(jobData)
    API.saveJobs(jobData)
        .then(res => {
          // res.redirect
          console.log(res)
          console.log(this.props.history.push("/view"))
          this.props.history.push("/view")
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
                <h5 className="black-text">Post a job</h5>

              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12" method="post">
                      What type of help do you want to offer?
                        <div className='row'>
                          <div className='input-field col s12'>
                            <span class="input-group-text"> Select your Job(s)</span>
                          </div>
                            <label>Check all that apply</label>
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
                          <div className='input-field col s12'>
                            <textarea className='validate' type='text'  value={this.state.jobDetails} onChange={this.handleInputChange} name='jobDetails' id='details' placeholder="prices, notes, etc."/>
                              <label for="details">Job Details</label>
                          </div>
                        </div>
                        <div className='row'>
                      <div class="input-field col s6">
                        <input id="city" type="text" class="validate" value={this.state.city} onChange={this.handleInputChange} name='city' placeholder="City"/>
                          <label for="first_name">City</label>
                      </div>
                      <div class="input-field col s6">
                        <input id="state" type="text" class="validate" value={this.state.state} onChange={this.handleInputChange} name='state' placeholder="State"/>
                          <label for="last_name">State</label>
                      </div> 
                    </div> 
                        <div className='row'>
                          <div class="input-field col s12">
                            <input className='validate' type='tel' name='phone_number' id='phone_number' placeholder="(xxx)-xxx-xxxx" />
                              <label for="phone_number">Phone Number</label>
                          </div>
                        </div>
                        <div className='row'>
                          <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo' onClick={this.handleFormSubmit}>Post</button>
                        </div>
                  </form>
                </div>
              </div>
            </center>
                  <div className="section"></div>
          </Col>
     </div>
    );
  }
}

export default Post;