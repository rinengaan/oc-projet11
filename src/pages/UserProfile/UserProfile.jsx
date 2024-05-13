/** @format */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userProfile } from '../../redux/actions/user.actions.jsx'
import User from '../../components/User.jsx'
import Account from '../../components/Account.jsx'
import AccountItemsData from '../../data/AccountItems.json'
import '../../sass/pages/_UserProfile.scss'

/* User profile page */
function UserProfile() {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()

    /* Asynchronous function that retrieves user data and updates it with useEffect */
    useEffect(() => {
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch(
                        'http://localhost:3001/api/v1/user/profile',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    if (response.ok) {
                        const data = await response.json()
                        const firstname = data.body.firstName
                        const lastname = data.body.lastName
                        const username = data.body.userName
                        /* Return user data in redux state */
                        dispatch(userProfile(firstname, lastname, username))
                    } else {
                        console.log('error while retrieving profile')
                    }
                } catch (error) {
                    console.error(error)
                }
            }
            userData()
        }
    }, [dispatch, token])
    return (
        <div className='profile-page'>
            <main className='main bg-dark'>
                <User />
                {/* Return items from json file with map */}
                {AccountItemsData.map((data) => (
                    <Account
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
        </div>
    )
}
export default UserProfile
