import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";

class Signup extends Component {

  render() {
    return (
     <div>
       <Nav />
          <Col size="md-12">
            <Jumbotron>
              <h1>Create your account</h1>
            </Jumbotron>
          <center>
          <div className="container">
                  <div className="z-depth-1 grey lighten-4 row" >
            <form className="col s12" method="post">
                <div className='row'>
                    <div className='input-field col s12'>
                        <input className='validate' type='email' name='first_name' id='first_name' placeholder="First Name"/>
                    </div>
                </div>
                <div className='row'>
                  <div className='input-field col s6'>
                    <input className='validate' type='email' name='last_name' id='last_name' placeholder="Last Name" />
                  </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input className='validate' type='email' name='first_name' id='first_name' placeholder="Username"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input className='validate' type='email' name='email' id='email' placeholder="Enter your email" />
                      </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input className='validate' type='password' name='password' id='password' placeholder="Create your password" />
                      </div>
                </div>
                <div className='row'>
                  <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                </div>
              </form>
                </div>
              </div>
            </center>
          </Col>
     </div>
    );
  }
}

export default Signup;