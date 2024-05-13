/** @format */

import React from 'react'
import User from '../../components/User.jsx'
import Account from '../../components/Account.jsx'
import Footer from '../../components/Footer.jsx'
import AccountItemsData from '../../data/AccountItems.json'
import '../../sass/pages/_UserProfile.scss'
function UserProfile() {
    return (
        <div className='profile-page'>
            <main className='main bg-dark'>
                <User firstname='Tony' lastname='Jarvis' />
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
