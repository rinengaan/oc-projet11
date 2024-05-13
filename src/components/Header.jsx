import React from 'react'
import Logo from '../assets/images/argentBankLogo.png'
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
                <Link className='main-nav-item' to='/SignIn'>
                    <i className='fa fa-user-circle'></i>
                    Sign In
                </Link>
            </nav>
        </header>
    )
}

export default Header
