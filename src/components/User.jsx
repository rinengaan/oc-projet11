/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import '../sass/components/_User.scss'

function User() {
    const firstname = useSelector((state) => state.auth.user.firstname)
    const lastname = useSelector((state) => state.auth.user.lastname)
    return (
        <div className='header'>
            <h1>
                Welcome back
                <br />
                {firstname} {lastname} !
            </h1>
            <button className='edit-button'>Edit Name</button>
        </div>
    )
}
export default User
