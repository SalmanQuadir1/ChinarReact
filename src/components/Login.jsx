import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [errorFlag, setErrorFlag] = useState(false);


    const username = useRef(null);
    const password = useRef(null);

    const handleLogin = (e) => {

        if (username.current.value === "admin" && password.current.value === "admin") {
            dispatch(addUser({ user: { username: username?.current?.value, password: password?.current?.value } }))
            navigate("/admin");

        } else {
            setErrorFlag(true);
            setErrorMessage("Username or password is wrong !!");
            navigate("/login");
        }



    }

    return (
        <div className="contact-content mt-5">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 offset-md-4">
                        <form onSubmit={(e) => e.preventDefault()} id="contact-form" action="" method="post">
                            <div className="row">
                                <div className="col-lg-4 offset-md-4 mb-4">
                                    <fieldset>
                                        <i className='fa fa-circle-user fa-3x p-2'></i>
                                    </fieldset>
                                </div>

                                <div className="col-lg-12">
                                    <fieldset>

                                        <input
                                            type="username"
                                            name="username"
                                            ref={username}
                                            id="username"
                                            placeholder="Your userName..."
                                            autoComplete="on"
                                            required=""
                                        />
                                    </fieldset>
                                </div>

                                <div className="col-lg-12">
                                    <fieldset>

                                        <input
                                            type="password"
                                            name="password"
                                            ref={password}
                                            id="password"
                                            placeholder="password..."
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                {errorFlag && <p className='text-white bg-danger p-3 my-3'>{errorMessage}</p>}

                                <div className="col-lg-4 offset-md-4">
                                    <fieldset>
                                        <button
                                            type="submit"
                                            id="form-submit"
                                            className="orange-button"
                                            onClick={handleLogin}
                                        >
                                            Login
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login