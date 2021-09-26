/*<-----Footer.JS Are Starting Here */
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // <----- Footer Letter with Copyright Icon ----->
        <div className="footer">
            <p className="fw-bold fs-5 mt-auto">CopyRight <FontAwesomeIcon icon = {faCopyright}/> 2021 | All Rights Reserved Tonmoy Asique Tamal</p>
           
        </div>
    );
};

export default Footer;
/*<-----Footer.JS Are Ending Here */