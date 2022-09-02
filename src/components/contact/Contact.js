import React from "react";
import '../../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faGithub, faLinkedin);

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact">
                <h1>Get in touch with me!</h1> 
                <p className="contactDescription">
                    Feel free to reach out to me through any of the listed platforms and I will try to get back to you as soon as possible!
                </p>
                <div className="contactLinks">
                    <a href="mailto:vmontielmg@gmail.com" target="_blank"><FontAwesomeIcon icon="envelope" /></a>
                    <a href="https://www.linkedin.com/in/montiel-vanessa/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                    <a href="https://github.com/vmontielmg" target="_blank"><FontAwesomeIcon icon={faGithub} /></a> 
                </div>
                {/* test */}
            </div>

        );
    }
}


export default Contact; 