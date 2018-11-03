import React, { Component } from "react";
import axios from "axios"
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class Signup extends Component {

  handleClick = (event) => {
    event.preventDefault()

    axios.post('/users', function(req,res) {
      // Create a new user using req.body
    

    })
  // API.saveBook()

  // User.create(user)
  // .then()
  // .catch(err => console.log(err));
  
  //   console.log("click")
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
              <h5 className="black-text">Hello, enter the correct info below</h5>

              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12" method="post" action="http://localhost:3001/submit">

                    <div className='row'>
                      <div class="input-field col s6">
                        <input name="firstName" id="first_name" type="text" class="validate" placeholder="First"/>
                          <label for="first_name">First Name</label>
                      </div>
                      <div class="input-field col s6">
                        <input name="lastName" id="last_name" type="text" class="validate" placeholder="Last"/>
                          <label for="last_name">Last Name</label>
                      </div> 
                    </div>                     
                    <div className='row'>
                      <div className='input-field col s12'>
                          <input name="username" className='validate' type='text' name='user_name' id='user_name' placeholder="Enter your Username"/>
                            <label for="user_name">Username</label>
                      </div>
                    </div>                  
                    <div className='row'>
                      <div className='input-field col s12'>
                        <input name="email" className='validate' type='email' name='email' id='email' placeholder="Enter your email" />
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
                            <span>Carpentry</span>                  
                        </label>   
                      </div>
                      <div className='row'>
                        <label> 
                          <input type="checkbox" />
                            <span>Yard work</span>                  
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
                        <input name="password" className='validate' type='password' name='password' id='password' placeholder="Create your password" />
                          <label for="password">Password</label>
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