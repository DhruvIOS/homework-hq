import { React, useState, useRef } from 'react'

import Header from "../components/Header"


import Footer from '../components/Footer'




const Home = () => {

    return (




        <>

            <Header />

            <div className="homepage">

                <h1>Welcome to Homework HQ</h1>

                <div className="buttons">
                    {/* <button className='LoginButton'> <a href='/login'>Login</a></button> */}
                    <a href='/Login'><button>Login</button></a>
                    <a href="/SignUp"><button>SignUp</button></a>
                    {/* <button className='SignUpButton'> <a>SignUp</a></button> */}

                </div>


                


            </div>

            <Footer/>


        </>

    )
}

export default Home





// const Home = () => {
//  const [show, setShow] = useState(false);
//  const modalRef = useRef(null);

//  const handleShow = () => {
//     setShow(true);
//     modalRef.current.style.display = 'block';
//  };

//  const handleClose = () => {
//     setShow(false);
//     modalRef.current.style.display = 'none';
//  };

//  return (
//     <>
//       <button variant="primary" onClick={handleShow}>
//         Show Modal
//       </button>

//       <div ref={modalRef} className="modal" style={{ display: show ? 'block' : 'none' }}>
//         <div className="modal-content">
//           <span className="close" onClick={handleClose}>&times;</span>
//           <p>Modal Content</p>
//         </div>
//         <div className="modal-footer">
//           <button variant="secondary" onClick={handleClose}>
//             Close
//           </button>
//           <button variant="primary" onClick={handleClose}>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </>
//  );
// };

// export default Home;