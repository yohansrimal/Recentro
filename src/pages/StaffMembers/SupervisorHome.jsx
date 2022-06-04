import React, { Component } from 'react';
import axios from 'axios';
import { isAuthenticated, logout } from "../../helpers/auth";
export default class SupervisorHome extends Component {

    componentDidMount(){
        const USER = isAuthenticated();
        if(USER.userSubType !== "Supervisor"){
          window.location.replace("/login");
          }
      }

    render() {
        return (
            <div className="supervisorHome_container">
               
                <center><br></br><br></br><br></br>
            <form >
            <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active" ><a href="/staffViewAll" style={{textDecoration:'none', color:'white'}}> View Staff Details </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active" ><a href="" style={{textDecoration:'none', color:'white'}}> Evaluate Topics </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active"><a href="" style={{textDecoration:'none', color:'white'}}> Evaluate Document  </a></button> <br></br><br></br><br></br>
            <button className="btn btn-secondary btn-lg active"><a href="" style={{textDecoration:'none', color:'white'}}> Chat Room  </a></button> 
            </form>
            </center>
            
        </div>
        )
    }
}