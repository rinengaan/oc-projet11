/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import Error from './pages/Error/Error.jsx'
import './sass/_Main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {
            // Create Route with React Router
        }
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='SignIn' element={<SignIn />} />
                <Route path='profile' element={<UserProfile />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
