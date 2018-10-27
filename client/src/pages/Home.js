import React, { Component } from "react";
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {

  render() {
    return (
      <div>
        <Nav /> 
          <Col size="md-12">
            <Jumbotron>
              <h1>Sign up</h1>
            </Jumbotron>
           
            <center>
              <h5 className="indigo-text">Please, login into your account</h5>

                <div className="container">
                  <div className="z-depth-1 grey lighten-4 row" >
                    <form className="col s12" method="post">

                      <div className='row'>
                        <div className='input-field col s12'>
                          <input className='validate' type='email' name='email' id='email' />
                          <label for='email'>Enter your email</label>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='input-field col s12'>
                          <input className='validate' type='password' name='password' id='password' />
                          <label for='password'>Enter your password</label>
                        </div>
                      </div>
            
                      <div className='row'>
                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                      </div>
          
                    </form>
                  </div>
                </div>
                        <a href="/signup">Create account</a>
              </center>

                          <div className="section"></div>
                          <div className="section"></div>
          </Col>
      </div>
    );
  }
}

export default Home;
