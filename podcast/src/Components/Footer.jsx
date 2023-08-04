import React from 'react';
import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {

    return (

        <footer>
            <div className="footer-content">
                <p>Contact us: 27716224328</p>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="social-media-icons">
                
                <a href="https://www.facebook.com/mmaphokeng.senne" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://twitter.com/your-twitter-profile-url" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/in/mmaphokeng-senne-109b21221" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>

            </div>
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>

    )

}