/** @format */

import React from 'react'
import Header from '../../components/Header.jsx'
import Form from '../../components/Form.jsx'
import Footer from '../../components/Footer.jsx'
import '../../sass/pages/_SignIn.scss'
function SignIn() {
    return (
        <div className='signin-page'>
            <Header />
            <main className='main bg-dark'>
                <Form />
            </main>
            <Footer />
        </div>
    )
}
export default SignIn
