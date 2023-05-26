import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  
    render() {
      return (
        <div>

            <div>
                {/* <div style={{height: '100vh', backgroundImage: 'url(https://static.wixstatic.com/media/f12bb8_7a01e7dd549d4500b05cc95687fc1a08~mv2.jpg/v1/fill/w_871,h_645,al_c,q_85/f12bb8_7a01e7dd549d4500b05cc95687fc1a08~mv2.webp)', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: '100%', 
                    opacity: '0.4'}}>
                </div> */}

                <div>
                    <div className="container vertical-center px-5" style={{color: 'white', marginLeft: '5%', opacity: '1.0'}}>
                        
                        <h1 style={{fontSize: '400%', marginBottom: '0', width: '75%'}}>Organization of Young Filipino Americans</h1>
                        
                        <div>
                            <h3 className="mt-4" style={{fontSize: '200%', lineHeight: '150%', opacity: '0.80', width: '75%'}}>
                            Bringing Filipino culture to the University of Viriginia since 1988
                            </h3>
                        </div>

                        <div className="mt-4">
                            <Link className="btn btn-success" style={{width: '20%'}} to="/thesis">
                            Join
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
          
            <div id="missionStmt" className="container p-4" width="75%">
                Mission statement would go here
            </div>

            <div id="history" className="container p-4" width="75%">
                history paragraph will go here. keep brief and short
            </div>

            <div id="announcements" className="container p-4" width="75%">
                Announcements and socials belong here. will need cards
            </div>

            <div id="happyOyfans" className="container p-4" width="75%">
                happy oyfans commentary will go here
            </div>
                
        </div>
      );
    }
  }