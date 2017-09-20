import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/pipelines'>PipeLines</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;