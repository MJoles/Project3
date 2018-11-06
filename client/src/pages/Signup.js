import React, { Component } from "react";
import {Redirect} from 'react-router';
import axios from "axios"
import Jumbotron from "../components/Jumbotron";
import {Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import Home from "../pages/Home";


// import User from "../models/register"
// import API from "../util/API"

import "./Pages.css"

class Signup extends Component {

  state = {
    firstName: "",
    lastName:"",
    userName:"",
    password:"",
    email:"",
    userCreated:"",
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

    axios.post('/users', { 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
    })
    .then((res) => {
      console.log(res)
      if(res.status === 200){
        // console.log("GREAT")
        this.setState({ redirect: true })
      }
    })
  }
  
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/home' username= { this.state.userName }/>
    }

    return (
     <div>
          <Col size="md-12">
            <Jumbotron>
                <h1>UBERHELP!</h1>
            </Jumbotron>

            <center>   
              <h5 className="black-text">Hello, enter the correct info below</h5>

              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12" method="post" action="http://localhost:3001/submit">

                    <div className='row'> 
                    
                      <div className="input-field col s6">
                        <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" id="first_name" type="text" className="validate" placeholder="First"/>
                          <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" id="last_name" type="text" className="validate" placeholder="Last"/>
                          <label htmlFor="last_name">Last Name</label>
                      </div> 
                    </div>                     
                    <div className='row'>
                      <div className='input-field col s12'>
                          <input value={this.state.userName} onChange={this.handleInputChange} name="userName" className='validate' type='text' id='user_name' placeholder="Enter your Username"/>
                            <label htmlFor="user_name">Username</label>
                      </div>
                    </div>                  
                    <div className='row'>
                      <div className='input-field col s12'>
                        <input value={this.state.email} onChange={this.handleInputChange} name="email" className='validate' type='email' name='email' id='email' placeholder="Enter your email" />
                          <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input-field col s12'>
                        <input value={this.state.password} onChange={this.handleInputChange} name="password" className='validate' type='password' name='password' id='password' placeholder="Create your password" />
                          <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className='row'>
                      <button onClick={this.handleClick} type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
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