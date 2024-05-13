import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
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
                <Route path='signin' element={<SignIn />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
