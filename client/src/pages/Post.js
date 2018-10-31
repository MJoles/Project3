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
                <h1>UBERHELPS!</h1>
            </Jumbotron>

            <center>   
                <h5 className="indigo-text">Post a job</h5>

              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12" method="post">
                      What type of help do you want to offer?
                        <div className='row'>
                          <div className='input-field col s12'>
                          <span class="input-group-text"> Select your Job(s)</span>
                          </div>
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
                            <input className='validate' type='text' name='fee' id='fee' placeholder="Fee $"/>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='input-field col s12'>
                            <input className='validate' type='text' name='location' id='location' placeholder="Location (City, State)" />
                          </div>
                        </div>
                        <div className='row'>
                          <div class="input-field col s12">
                            <input className='validate' type='tel' name='phone_number' id='phone_number' placeholder="Phone Number (xxx)-xxx-xxxx" />
                          </div>
                        </div>
                        <div className='row'>
                          <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Post</button>
                        </div>
                  </form>
                </div>
              </div>
                <a href="/">Already signed up</a>
            </center>
                  <div className="section"></div>
          </Col>
     </div>
    );
  }
}

export default Post;