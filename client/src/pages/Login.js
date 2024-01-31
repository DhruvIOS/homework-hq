import Header from "../components/Header"

import Footer from "../components/Footer"

import "../styles/styless.css"

import { useState, useEffect, useRef } from "react"

import useSignIn from 'react-auth-kit/hooks/useSignIn';

import axios from 'axios'

import { useNavigate, useHistory, useLocation } from "react-router-dom"



export default function Login() {
    const location = useLocation();
    const [emailValue, setEmailValue] = useState('');

    const [passwordValue, setPassowrdValue] = useState('');




    const clearInput = useRef(null)






    const emailFunction = (e) => {
        setEmailValue(e.target.value);

    };

    const passwordFunction = (e) => {
        setPassowrdValue(e.target.value);




    };


    const [jsonData, setJsonData] = useState(null);

    const [token, setToken] = useState('')



    const signIn = useSignIn();

    const navigate = useNavigate()
   ;

    async function handleSubmit(e) {





        e.preventDefault();


        try {

            await fetch('/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailValue, password: passwordValue }),
            })
                .then((response) => response.json())
                .then((data) => {
                    clearInput.currentValue = ''

                    alert(data.message)

                    if(signIn({
                        auth: {
                            token: data.token,
                            type: 'Bearer',
                            expiresIn: 4600,
                            
                        },
                        userState: {email: emailValue}
                       
                    })){ // Only if you are using refreshToken feature
                        // Redirect or do-something
                        navigate('/tasks')

                    }else {
                        //Throw error

                        console.error(Error)
                    }

                    
                })
                .catch((error) => {
                    console.error(error);
                });


        } catch (error) {
            console.error(error)
        }














    }
    return (




        <>

            <Header />


            <div className="LoginMain">

                <form>

                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email address</label>
                        <input ref={clearInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={emailFunction} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Password</label>
                        <input ref={clearInput} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={passwordFunction} />
                        <i className="fa-regular fa-eye-slash" />

                    </div>


                    <button type="submit" onClick={handleSubmit}>Login</button>



                    <h3 className="linkToLogin">Don't have account <a href="/SignUp">SignUp</a></h3>


                </form>

            </div>


            <Footer />




        </>

    )
}