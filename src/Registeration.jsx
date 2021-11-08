import React from 'react';
import './App.css';
import LoginForm from './Login';
import { Route } from "react-router-dom";
import Api from './api';

class Register extends React.Component {


  render() { 
    return ( 
    <div className="form-body bg-dark text-white">
      <Route path="/Registeration"><LoginForm users={this.props.users}/></Route> 
    <div className="row">
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Register Today</h3>
                    <p>Fill in the data below.</p>
                    <form className="requires-validation">

                        <div className="col-md-12">
                           <input className="form-control" type="text" name="name" placeholder="Full Name" required/>
                           <div className="valid-feedback">Username field is valid!</div>
                           <div className="invalid-feedback">Username field cannot be blank!</div>
                        </div>

                        <div className="col-md-12">
                            <input className="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                             <div className="valid-feedback">Email field is valid!</div>
                             <div className="invalid-feedback">Email field cannot be blank!</div>
                        </div>

                       <div className="col-md-12">
                            <select className="form-select mt-3" required>
                                  <option defaultValue disabled value="">Position</option>
                                  <option value="jweb">Junior Web Developer</option>
                                  <option value="sweb">Senior Web Developer</option>
                                  <option value="pmanager">Project Manager</option>
                           </select>
                            <div className="valid-feedback">You selected a position!</div>
                            <div className="invalid-feedback">Please select a position!</div>
                       </div>


                       <div className="col-md-12">
                          <input className="form-control" type="password" name="password" placeholder="Password" required/>
                           <div className="valid-feedback">Password field is valid!</div>
                           <div className="invalid-feedback">Password field cannot be blank!</div>
                       </div>


                       <div className="col-md-12 mt-3">
                        <label className="mb-3 mr-1" htmlFor="gender">Gender: </label>

                        <input type="radio" className="btn-check" name="gender" id="male" autoComplete="off" required/>
                        <label className="btn btn-sm btn-outline-secondary" htmlFor="male">Male</label>

                        <input type="radio" className="btn-check" name="gender" id="female" autoComplete="off" required/>
                        <label className="btn btn-sm btn-outline-secondary" htmlFor="female">Female</label>

                        <input type="radio" className="btn-check" name="gender" id="secret" autoComplete="off" required/>
                        <label className="btn btn-sm btn-outline-secondary" htmlFor="secret">Secret</label>
                           <div className="valid-feedback mv-up">You selected a gender!</div>
                            <div className="invalid-feedback mv-up">Please select a gender!</div>
                        </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                      <label className="form-check-label">I confirm that all data are correct</label>
                     <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                    </div>
              

                        <div className="form-button mt-3">
                            <button id="submit" type="submit" className="btn btn-primary" onClick={(e) => this.props.handleregistersubmit(e)}>Register</button>
                        </div>
                        <Api/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>);
  }
}
 
export default Register;

//(function () {
//  'use strict'
//  const forms = document.querySelectorAll('.requires-validation')
//  Array.from(forms)
//    .forEach(function (form) {
//      form.addEventListener('submit', function (event) {
//        if (!form.checkValidity()) {
//          event.preventDefault()
//          event.stopPropagation()
//        }
//  
//        form.classList.add('was-validated')
//      }, false)
//    })
//  })()
//  