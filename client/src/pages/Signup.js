import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";

class Signup extends Component {

  render() {
    return (
     <div>
       <Nav />
          <Col size="md-6">
            <Jumbotron>
              <h1>Create your account</h1>
            </Jumbotron>
            <form>
              <div className='row'>
                  <div className='input-field col s12'>
                      <input className='validate' type='first_name' name='first_name' id='first_name' />
                      <label for='first_name'>First Name</label>
                    </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='last_name' name='last_name' id='last_name' />
                  <label for='last_name'>Last Name</label>
                </div>
              </div>
              <div className='row'>
                  <div className='input-field col s12'>
                      <input className='validate' type='email' name='email' id='email' />
                      <label for='email'>Enter your email</label>
                    </div>
              </div>
              <div className='row'>
                  <div className='input-field col s12'>
                      <input className='validate' type='password' name='password' id='password' />
                      <label for='password'></label>
                    </div>
              </div>
              <div className='row'>
                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
              </div>
            </form>
          </Col>
          
    
      </div>
    );
  }
}

export default Signup;