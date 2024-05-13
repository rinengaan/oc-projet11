/** @format */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsername } from '../redux/actions/user.actions.jsx'
import { isValidName } from '../utils/regex.jsx'
import '../sass/components/_User.scss'

function User() {
    /* Updates user data on profile page from state redux */
    const token = useSelector((state) => state.auth.token)
    const firstname = useSelector((state) => state.user.firstname)
    const lastname = useSelector((state) => state.user.lastname)
    const username = useSelector((state) => state.user.username)
    /* Manages the appearance of the username modification form */
    const [display, setDisplay] = useState(true)
    /* Get username */
    const [userName, setUserName] = useState('')
    /* Handle error message */
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    /* Asynchronous username update function */
    const handleSubmitUsername = async (event) => {
        event.preventDefault()
        if (!isValidName(userName)) {
            setErrorMessage('Invalid username')
            return
        } else {
            setErrorMessage('')
        }
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ userName }),
                }
            )
            if (response.ok) {
                const data = await response.json()
                const username = data.body.userName
                console.log(data)
                dispatch(updateUsername(username))
                setDisplay(!display)
            } else {
                console.log('Invalid Fields')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='header'>
            {display ? (
                <div>
                    <h2>
                        Welcome back
                        <br />
                        {firstname} {lastname} !
                    </h2>
                    <button
                        className='edit-button'
                        onClick={() => setDisplay(!display)}
                    >
                        Edit Name
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Edit user info</h2>
                    <form>
                        <div className='edit-input'>
                            <label htmlFor='username'>User name:</label>
                            <input
                                type='text'
                                id='username'
                                defaultValue={username}
                                onChange={(event) =>
                                    setUserName(event.target.value)
                                }
                            />
                        </div>
                        <div className='edit-input'>
                            <label htmlFor='firstname'>First name:</label>
                            <input
                                type='text'
                                id='firstname'
                                defaultValue={firstname}
                                disabled={true}
                            />
                        </div>
                        <div className='edit-input'>
                            <label htmlFor='lastname'>Last name:</label>
                            <input
                                type='text'
                                id='lastname'
                                defaultValue={lastname}
                                disabled={true}
                            />
                        </div>
                        <div className='buttons'>
                            <button
                                className='edit-username-button'
                                onClick={handleSubmitUsername}
                            >
                                Save
                            </button>
                            <button
                                className='edit-username-button'
                                onClick={() => setDisplay(!display)}
                            >
                                Cancel
                            </button>
                        </div>
                        {errorMessage && (
                            <p className='error-message'>{errorMessage}</p>
                        )}
                    </form>
                </div>
            )}
        </div>
    )
}
export default User
