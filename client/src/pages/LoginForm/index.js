import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';
import Header from '../../components/Header';


const Login = props => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [Login, { error }] = useMutation(LOGIN_USER);

    const handleChange = e => {
        const { name, value } = e.target;

        //seting form state to value specified in form
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async e => {
        e.preventDefault();

        try {
            console.log(formState);
            const { data } = await Login({
                variables: { ...formState }
            });
            console.log(data);

            Auth.login(data.login.token);
        }
        catch (e) {
            console.log(e)
        }

        setFormState({
            email: '',
            password: ''
        })
    }


    return (
        <section>
            <Header />
            <div className="form">
                <div className="form-container">
                    <Link to="/signup">Sign-up instead</Link>

                    <h2>Login Below</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <br />
                        <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <br />
                        <button type="submit">
                            Submit
              </button>
                    </form>
                    {error && <div>Something Went Wrong</div>}
                </div>
            </div>
        </section>
    )
};

export default Login;