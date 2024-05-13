import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import UserProfile from './pages/UserProfile/UserProfile.jsx'
import Error from './pages/Error/Error.jsx'
import './sass/_Main.scss'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {
                // Create Route with React Router
            }
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='SignIn' element={<SignIn />} />
                    <Route path='Profile' element={<UserProfile />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
)
