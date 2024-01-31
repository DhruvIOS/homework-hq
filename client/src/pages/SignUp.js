import Header from "../components/Header"

import Footer from "../components/Footer"

import "../styles/styless.css"

import { useState, useEffect, useRef } from "react"

import axios from 'axios'



export default function SignUp() {
    const [emailValue, setEmailValue] = useState('');

    const [passwordValue, setPassowrdValue] = useState('');

    const [RepasswordValue, setPReassowrdValue] = useState('');

    const [name, setName] = useState('');

    const clearInput = useRef(null)






    const emailFunction = (e) => {
        setEmailValue(e.target.value);

    };

    const passwordFunction = (e) => {
        setPassowrdValue(e.target.value);




    };

    const setPReassowrdFunction = (e) => {
        setPReassowrdValue(e.target.value);




    };

    function NameFunction(e) {
        setName(e.target.value);

    }

    const user = {
        key1: 'value1',
        key2: 'value2',
        // Add more key-value pairs as needed
    };

    const [jsonData, setJsonData] = useState(null);




   async function  handleSubmit(e) {




        e.preventDefault();
        if (RepasswordValue !== passwordValue) {


            alert("Password does not match")

        } else {


            fetch('/saveUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name, email: emailValue, password: passwordValue }),
            })
                .then((response) => response.json())
                .then((data) => {
                    clearInput.currentValue = ''

                    alert(data.message)
                })
                .catch((error) => {
                    console.error(error);
                });


                






        }
    }
    return (




        <>

            <Header />


            <div className="LoginMain">

                <form>
                    <div className="form-group">
                        <label htmlFor="InputName">Name</label>
                        <input ref={clearInput} type="name" className="form-control" id="exampleInputName" placeholder="Enter Name" onChange={NameFunction} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="InputEmail1">Email address</label>
                        <input ref={clearInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={emailFunction} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword1">Password</label>
                        <input ref={clearInput} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={passwordFunction} />
                        <i className="fa-regular fa-eye-slash" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="conformInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" onChange={setPReassowrdFunction} />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    
                    

                    <h3 className="linkToLogin">Already got account <a href="/Login">Login</a></h3>

                    
                </form>

            </div>


            <Footer />




        </>

    )
}