/*<-----UserSummary.JS Are Stating Here*/
import React from 'react';
import './UserSummary.css';

/* <----- React Font Awesome CDN ----->*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const UserSummary = (props) => {
    /*<----- Destructuring  For Generate Dynamically JSON Data For Each Programmers ----->*/
    const { img, name,company, gender, email, phone, salary } = props.user;
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
                            <h6 className="card-title fw-bold text-success">Name: {name}</h6>
                            <p className = "fw-bolder"><small>Company: {company} </small></p>
                            <p className = "fw-bold">Gender : {gender}</p>
                            <p className = "fw-bolder"> <small> Email : {email}</small></p>
                            <p className = "fw-bold">Phone No : {phone}</p>
                            <p className = "fw-bold">Salary : {salary} $USD </p>

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
/*<-----UserSummary.JS Are Ending Here*/