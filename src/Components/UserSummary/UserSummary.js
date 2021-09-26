import React from 'react';
import './UserSummary.css';

/* <----- React Font Awesome CDN ----->*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const UserSummary = (props) => {
    /*<----- Destructuring  For Generate Dynamically JSON Data For Each Programmers ----->*/
    const { img, name, gender, email, phone, salary } = props.user;
    return (
        <div className="user-summary">
            <div className="container">
                <div className="row row-cols-1 p-2">
                    <div className="card h-100 single-card">
                        <div className="user-img p-2">

                            {/* Dynamically Showing The JSON Data [img, name, gender, email, phone, salary] */}
                            <img className="img" src={img} alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">{name}</h5>
                            <p>Gender : {gender}</p>
                            <p className = "fw-bolder"> <small> Email : {email}</small></p>
                            <p>Phone No : {phone}</p>
                            <p>Salary : {salary} $USD </p>

                            {/* Button With Onclick Event Handler Dynamic & Icon Are Added */}
                            <button className="user-btn" onClick={() => props.handleUserAdded(props.user)}><FontAwesomeIcon icon={faHandHoldingUsd} /> Pay Salary</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserSummary;