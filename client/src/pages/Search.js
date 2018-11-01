import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row} from "../components/Grid";
import Nav from "../components/Nav";
import "./Pages.css"

class Search extends Component {

  render() {
    return (
     <div>
       <Nav />
          <Col size="md-12">
            <Jumbotron>
                <h1>UBERHELP!</h1>
            </Jumbotron>

            <center>   
                <h5 className="black-text">Search for a job</h5>
              <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                  <form className="col s12" method="post">
                     <a className="indigo-text"> Or view all jobs available</a>
                        <div className='row'>
                          <div className='input-field col s12'>
                            <span class="input-group-text"> Select the type of work you're seeking below</span>
                          </div>
                          <label className="indigo-text">Check all that apply</label>

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
                          <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Find!</button>
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

export default Search;