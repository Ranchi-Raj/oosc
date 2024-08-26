import React from 'react';
import Profile from './Display';

export default function ProfileList() {

    const users = ['Name', 'Address', 'DOB', "Father's name", "Mother's name", 'Aadhar', 'PAN No.', 'Phone No.', 'Password', 'E-mail'];


    const profileComponents = [];


    for (let i = 0; i < users.length; i++) {
        profileComponents.push(<Profile key={i} user={users[i]} />);
    }

    return (
        <div>
            <div className='text-center text-3xl font-bold my-8'>
                PROFILE
            </div>
            {profileComponents}
        </div>
    );
}
