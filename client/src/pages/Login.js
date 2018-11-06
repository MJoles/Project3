import React, { Component } from "react";
import {Redirect} from 'react-router';
import Nav from '../components/Nav';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Login extends Component {
  
  state = {
    email:"",
    password: "",
    redirect: false
  }

  handleInputChange = event => {

    const { name, value } = event.target;
      this.setState({
        [name]: value 
      })
  };

  handleClick = (event) => {
    event.preventDefault() 
      this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/home"/>
    }

    return (
      <div>

          <Col size="md-12">
            <Jumbotron>
              <h1>UBERHELP!</h1>
            </Jumbotron>
           
            <center>
              <h5 className="black-text">Welcome back, please login into your account</h5>

                <div className="container">
                  <div className="z-depth-1 grey lighten-4 row" >
                    <form className="col s12">

                      <div className='row'>
                        <div className='input-field col s12'>
                          <input className='validate' type='email' name='email' id='email' placeholder="Enter your email" />
                          <label for='email'>Email</label>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='input-field col s12'>
                          <input className='validate' type='password' name='password' id='password' placeholder="Enter your password"/>
                          <label for='password'>Password</label>
                        </div>
                      </div>
            
                      <div className='row'>
                        <button onClick={this.handleClick} type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
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

export default Login;
