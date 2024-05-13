/** @format */

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import User from '../../components/User.jsx'
import Account from '../../components/Account.jsx'
import Footer from '../../components/Footer.jsx'
import AccountItemsData from '../../data/AccountItems.json'
import '../../sass/pages/_UserProfile.scss'

function UserProfile() {
    const isConnected = useSelector((state) => state.auth.isConnected)
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isConnected) {
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
                        dispatch({
                            type: 'GET_USERPROFILE',
                            payload: {
                                firstname: data.body.firstName,
                                lastname: data.body.lastName,
                                username: data.body.userName,
                            },
                        })
                    } else {
                        console.log('error while retrieving profile')
                    }
                } catch (error) {
                    console.error(error)
                }
            }
            userData()
        }
    }, [dispatch, token, isConnected])
    return (
        <div className='profile-page'>
            <main className='main bg-dark'>
                <User />
                {AccountItemsData.map((data) => (
                    <Account
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
            <Footer />
        </div>
    )
}
export default UserProfile
