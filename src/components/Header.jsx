/** @format */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/argentBankLogo.webp'
import { logout } from '../redux/actions/auth.actions'
import '../sass/components/_Header.scss'

function Header() {
    const isConnected = useSelector((state) => state.auth.isConnected)
    const firstname = useSelector((state) => state.auth.user.firstname)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        sessionStorage.clear()
        localStorage.clear()
        navigate('/')
    }
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
                {isConnected ? (
                    <div className='connected'>
                        <Link className='main-nav-item' to='/Profile'>
                            <i className='fa fa-user-circle' />
                            <p>{firstname}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}>
                            <i className='fa fa-sign-out' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='main-nav-item not-connected'>
                        <Link className='main-nav-item' to='/SignIn'>
                            <i className='fa fa-user-circle'></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}
export default Header
