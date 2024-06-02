import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './components/Header.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import Error from './pages/Error/Error.jsx'
import Footer from './components/Footer.jsx'
import './sass/_Main.scss'

export default function App() {
    const isConnected = useSelector((state) => state.auth.isConnected)
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='SignIn' element={<SignIn />} />
                <Route
                    path='Profile'
                    element={
                        isConnected ? (
                            <UserProfile />
                        ) : (
                            <Navigate to='/SignIn' />
                        )
                    }
                />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )
}
