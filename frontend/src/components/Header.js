import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div class="header">
            <div class="width-define">
                <div class="link-row">
                    <div class="logo">
                        Header Logo
                    </div>

                    <div class="header-links">
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/appointments">Appointments</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
