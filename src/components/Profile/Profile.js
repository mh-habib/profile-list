import React, { useState } from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faEnvelope, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    const { full_name, phone, job_title, email, salary, img } = props.info;
    const [mobile, setMobile] = useState();

    const showPhone = (phone) => {
        setMobile(phone);

    }
    return (
        <div class="card profile mb-3 ml-3 mr-2 shadow">
            <img class="card-img-top card-img" src={img} alt="Card image"></img>
            <div class="card-body">
                <h5 class="card-title">{full_name}</h5>
                <p> <FontAwesomeIcon icon={faUserTie} /> Designation: {job_title}</p>
                <p> <FontAwesomeIcon icon={faPhone} /> Phone: {mobile}</p>
                <p> <FontAwesomeIcon icon={faEnvelope} /> Email: {email}</p>
                <p> <FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary btn-sm btn-block mb-2" onClick={() => props.handelSelectBtn(props.info)}>Select</button>
                <button type="button" class="btn btn-secondary btn-sm btn-block" onClick={() => showPhone(phone)}>Show Phone Number</button>
            </div>
        </div>

    );
};

export default Profile;