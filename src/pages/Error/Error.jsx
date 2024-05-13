/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import '../../sass/pages/_Error.scss'

/* Error page if user uses unknown route */
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
        </div>
    )
}
export default Error
