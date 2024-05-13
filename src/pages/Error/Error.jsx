/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import '../../sass/pages/_Error.scss'

function Error() {
    return (
        <div className='error-page'>
            <main>
                <section className='error'>
                    <h1 className='error-number'>404</h1>
                    <p className='error-text'>
                        The requested page doesn't exist...
                    </p>
                    <p className='error-text'>Please return to homepage</p>
                    <Link className='error-link' to='/'>
                        <button className='error-link-button'>
                            Back to the homepage
                        </button>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Error
