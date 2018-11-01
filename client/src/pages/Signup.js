import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class Signup extends Component {

  render() {
    return (
     <div>
       <Nav />
          <Col size="md-12">
            <Jumbotron>
                <h1>UBERHELP!</h1>
            </Jumbotron>

            <center>   
              <h5 className="black-text">Hello, enter the correct info below</h5>

              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12" method="post">

                    <div className='row'>
                      <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate" placeholder="First"/>
                          <label for="first_name">First Name</label>
                      </div>
                      <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate" placeholder="Last"/>
                          <label for="last_name">Last Name</label>
                      </div> 
                    </div>                     
                    <div className='row'>
                      <div className='input-field col s12'>
                          <input className='validate' type='email' name='user_name' id='user_name' placeholder="Enter your Username"/>
                            <label for="user_name">Username</label>
                      </div>
                    </div>                  
                    <div className='row'>
                      <div className='input-field col s12'>
                        <input className='validate' type='email' name='email' id='email' placeholder="Enter your email" />
                          <label for="email">Email</label>
                      </div>
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
                  </div>
                    <div className='row'>
                      <div className='input-field col s12'>
                        <input className='validate' type='password' name='password' id='password' placeholder="Create your password" />
                          <label for="password">Password</label>
                      </div>
                    </div>
                    <div className='row'>
                      <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
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

export default Signup;