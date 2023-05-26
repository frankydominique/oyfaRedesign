import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
    render() {

    // const { user } = this.props;

    return (

        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Student Advisors Report Form
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Report misconduct of any kind inflicted against those in our community. Examples of misconduct include but are not limited to discrimination of any kind; harassment; abuse; or any form of sexual violence
                <Link className="nav-link active" to="https://docs.google.com/forms/d/e/1FAIpQLSfSqE7yiSXUKa_-B7vlRBExfbnhg5BKfYD32pmDFC8pwknXWg/viewform">
                    OYFA Student Advisors Report Form
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Counseling and Psychological Services (CAPS)
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Free individual, group, or couples therapy provided by the University of Virginia; also includes support group under Counseling and Psychological Services (CAPS) for students who want to become more comfortable with their gender identity and sexuality
                <br/>
                434-243-5150
                <Link to="https://www.studenthealth.virginia.edu/CAPS">
                    Counseling and Psychological Services (CAPS)
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                National Disaster Distress Hotline
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://www.samhsa.gov/find-help/disaster-distress-helpline">
                    National Disaster Distress Hotline
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                DACA and Undocumented Resources
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://studentaffairs.virginia.edu/subsite/multicultural">
                    DACA and Undocumented Resources
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Maxine Platzer Lynn Womens' Center
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://womenscenter.virginia.edu/">
                    Maxine Platzer Lynn Womens' Center
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Sexual Assault Resource Agency
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://www.saracville.org/">
                    Sexual Assault Resource Agency
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Planned Parenthood
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://www.plannedparenthood.org/health-center/virginia/charlottesville/22901/charlottesville-health-center-2815-90860">
                    Planned Parenthood
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Gordie Center for Substance Abuse Prevention
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://gordie.studenthealth.virginia.edu/">
                    Gordie Center for Substance Abuse Prevention
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                LGBTQ+ Center
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://studentaffairs.virginia.edu/subsite/lgbtq">
                    LGBTQ+ Center
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Student Disability Access Center
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://studenthealth.virginia.edu/">
                    Student Disability Access Center
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Loaves and Fishes Food Pantry
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://cvilleloaves.org/">
                    Loaves and Fishes Food Pantry
                </Link>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Full List of Resources
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <Link to="https://docs.google.com/spreadsheets/d/1cOHmlndC50kTv60pviq2G98Huuva1fsiPkL64XinS0I/edit?usp=sharing">
                    Full List of Resources
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
    }
}