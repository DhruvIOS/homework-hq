import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/styless.css"
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import axios from 'axios'

export default function Tasks(){
    const signOut = useSignOut()
    const navigate = useNavigate();

    const [jsonData , setJsonData] = useState({})




    const singOut = () => {

        signOut();
       
        navigate('/Login')

    };

    useEffect(() =>{

        
        axios.get('/getInfo')
        .then((response) => {
            // setJsonData(response); 

           setJsonData(response.data);

            // console.log("APi hitting")
            

        })
        .catch((error) => {
            console.error(error);


        });



          

          
    })
    return(
        
        <>

            <Header />
            <h1 className="TaskPage">Task Page</h1>
            <h1 className="TaskPage">Welcome {jsonData.name}</h1>



            <button onClick={singOut}>SignOut</button>

            <Footer />
        
        
        </>

    )
}