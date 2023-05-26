import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
    render() {

    // const { user } = this.props;

    return (
        <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
            <div>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            </div>
        </section>
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="text-center">
                        <p>
                            Website created and maintained by OYFA Webmasters. Access code here

                            Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization′s contracts, acts or omissions.

                            Click here to view the previous website.

                            Copyright ©2023 All rights reserved | Design: Colorlib
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </footer>
    );
    }
}