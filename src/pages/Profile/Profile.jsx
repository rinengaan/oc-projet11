import React from 'react'
import Header from '../../components/Header.jsx'
import User from '../../components/User.jsx'
import Account from '../../components/Account.jsx'
import Footer from '../../components/Footer.jsx'
import '../../sass/pages/_Profile.scss'

function UserProfile() {
    return (
        <div className='profile-page'>
            <Header />
            <main className='main bg-dark'>
                <User firstname='Tony' lastname='Jarvis' />
                <Account
                    title='Argent Bank Checking (x8349)'
                    amount='$2,082.79'
                    description='Available Balance'
                />
                <Account
                    title='Argent Bank Savings (x6712)'
                    amount='$10,928.42'
                    description='Available Balance'
                />
                <Account
                    title='Argent Bank Credit Card (x8349)'
                    amount='$184.30'
                    description='Current Balance'
                />
            </main>
            <Footer />
        </div>
    )
}

export default UserProfile
