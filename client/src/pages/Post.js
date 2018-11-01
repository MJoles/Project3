import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class Post extends Component {

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
                            <input type="checkbox" />
                              <span>Caprtpentry</span>                  
                          </label>   
                        </div>
                        <div className='row'>
                          <label> 
                            <input type="checkbox" />
                              <span>Yardwork</span>                  
                          </label>   
                        </div>
                        <div className='row'>
                          <label> 
                            <input type="checkbox" />
                              <span>Electrician</span>                  
                          </label>   
                        </div>
                        <div className='row'>
                          <label>
                            <input type="checkbox" />
                              <span>Plumbing</span>
                          </label>                                           
                        </div>
                        <div className='row'>
                          <div className='input-field col s12'>
                            <textarea className='validate' type='text' name='details' id='details' placeholder="prices, notes, etc."/>
                              <label for="details">Job Details</label>
                          </div>
                        </div>
                        <div className='row'>
                      <div class="input-field col s6">
                        <input id="city" type="text" class="validate" placeholder="City"/>
                          <label for="first_name">City</label>
                      </div>
                      <div class="input-field col s6">
                        <input id="state" type="text" class="validate" placeholder="State"/>
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
                          <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Post</button>
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