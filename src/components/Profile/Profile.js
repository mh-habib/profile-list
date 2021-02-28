import React from 'react';
import './Profile.css';

const Profile = (props) => {
    const {full_name, phone, job_title, email, salary, img} = props.info;
    return (
        <div className="profile">
            <h3>This is a new profile</h3>
            <img src={img} alt="img"/>
            <p>Name: {full_name}</p>
            <p>Designation: {job_title}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Salary: {salary}</p>
            <br/>
            <button className="btn-select" onClick={()=>props.handelSelectBtn(props.info)}>Select</button>
        </div>
    );
};

export default Profile;