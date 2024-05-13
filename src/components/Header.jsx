/** @format */

import React from 'react'
import Logo from '../assets/images/argentBankLogo.webp'
import { Link } from 'react-router-dom'
import '../sass/components/_Header.scss'

function Header() {
    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav className='main-nav'>
                <Link className='main-nav-logo' to='/'>
                    <img
                        className='main-nav-logo-image'
                        src={Logo}
                        alt='Bank Logo'
                    />
                </Link>
                <Link className='main-nav-item not-connected' to='/SignIn'>
                    <i className='fa fa-user-circle'></i>
                    Sign In
                </Link>
                <div className='connected'>
                    <Link className='main-nav-item' to='/Profile'>
                        <i className='fa fa-user-circle' />
                        {/* A changer lors de la récupération des comptes via API*/}
                        <p> Tony </p>
                    </Link>
                    <Link className='main-nav-item' to='/'>
                        <i className='fa fa-sign-out' />
                        <p> Sign out </p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Header
