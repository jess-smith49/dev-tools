// linking react, react middle ware, bootstrap templets, mutations and apollo middle ware. 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import Header from '../../components/Header'


// declaring initial signup state. 
const SignUp = () => {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' })
    //user mutation goes here
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = e => {
        console.log(e.target)
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        })
    };
    // handling signup form submission. 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(formState);
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data);
            Auth.login(data.addUser.token);

        } catch (err) {
            console.error(err);
        }
        // removing user input date after form submission. 
        setFormState({
            username: '',
            email: '',
            password: '',
        });
    };


    // returning jsk. 
    return (
        <section>
            <Header />
            <div className="form">
                <div className="form-container">
                    <h2>Sign Up Below</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                className="form-input"
                                placeholder="Your username"
                                name="username"
                                type="username"
                                id="username"
                                onChange={handleChange}
                            />
                            <br />
                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                            />
                            <br />
                            <input
                                className="form-input"
                                placeholder="******"
                                name="password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                            />
                            <br />
                            <button type="submit">Finish Signup</button>
                        </div>
                    </form>
                    {error && <div>Something Went Wrong</div>}
                </div>
                </div>
        </section >
    )

    // return (
    //     <section className="signup-container">
                //         <form>
                    //             <input name="email-input" className="form-input" placeholder="Enter your email here"></input>

    //             <input name="user-input" className="form-input" placeholder="Create a unique username"></input>

    //             <input name="pass-input" className="form-input" placeholder="Create a unique password"></input>

    //             <button type="submit">Get Learning!</button>

    //         </form>
    //     </section>  
    //   )
};
// making signup function visable to entire app. 
export default SignUp;