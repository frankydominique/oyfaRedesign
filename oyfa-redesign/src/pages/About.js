import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div>
                In 1988, Filipino students such as Cyn Romero and Brod Bello wanted to form an inclusive organization that welcomed anyone, Filipino or not. They wanted an organization that would teach members about the Filipino culture and share it with others. So, OYFA was born.
                <br/>
                The Organization of Young Filipino Americans strives to heighten awareness and appreciation of the Filipino culture to the greater UVA and Charlottesville communities as well as serve as the liaison to the University of Virginia students as part of the Filipino Intercollegiate Networking Dialogue.
                <br />
                Our leadership of 30+ people works to provide all kinds of diverse opportunities for our equally diverse membership. Through events like Filipino Food Night, Culturefest, Winter Classic, and Barrio, we hope to provide a supportive community through Filipino culture and traditions for UVA students.
                <br />
                Join below!
                <button>
                    <Link>
                        Click Here to Join!
                    </Link>
                </button>
            </div>
        );
    }
}