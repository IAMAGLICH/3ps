// // // // import React from "react";

// // // // import { useNavigate } from 'react-router-dom';
// // // // import { NavLink } from "react-router-dom";
// // // // import axios from "axios";
// // // // const Navbar=()=>{
// // // //     const isLoggedIn = localStorage.getItem('isLoggedIn');
// // // //     const Navigate = useNavigate();

// // // //     const handleLogout = async () => {
// // // //         try {
// // // //             await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
// // // //                 withCredentials: true
// // // //             });
// // // //             localStorage.removeItem('isLoggedIn');
// // // //             Navigate("/login");
// // // //             window.location.reload();
// // // //         } catch (err) {
// // // //             console.log(err);
// // // //         }
// // // //     }

// // // //     return (
// // // //         <nav className="navbar navbar-expand-md bg-dark">
// // // //         <div className="container-fluid">
// // // //           <button
// // // //             className="navbar-toggler text-light"
// // // //             type="button"
// // // //             data-bs-toggle="collapse"
// // // //             data-bs-target="#navbarTogglerDemo03"
// // // //             aria-controls="navbarTogglerDemo03"
// // // //             aria-expanded="false"
// // // //             aria-label="Toggle navigation"
// // // //           >
// // // //             <span className="navbar-toggler-icon"></span>
// // // //           </button>
// // // //           <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
// // // //           <ul className="navbar-nav nav-pills">
              
// // // //             {isLoggedIn ? (
// // // //               <>
// // // //               <li className="nav-item mx-2">
// // // //                 <button className="nav-link btn btn-link text-light" onClick={async()=>{
// // // //                         await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
// // // //                             withCredentials: true
// // // //                           })
// // // //                           localStorage.removeItem('isLoggedIn');
// // // //                           Navigate("/login");
// // // //                 }}>
// // // //                   Logout
// // // //                 </button>
// // // //               </li>
// // // //               </>
// // // //             ) : (
// // // //               <>
// // // //                 <li className="nav-item mx-2">
// // // //                   <NavLink
// // // //                     className="nav-link"
// // // //                     activeClassName="active"
// // // //                     to="/signup"
// // // //                     style={{ color: 'white' }}
// // // //                   >
// // // //                     Signup
// // // //                   </NavLink>
// // // //                 </li>
// // // //                 <li className="nav-item mx-2">
// // // //                   <NavLink
// // // //                     className="nav-link"
// // // //                     activeClassName="active"
// // // //                     to="/login"
// // // //                     style={{ color: 'white' }}
// // // //                   >
// // // //                     Login
// // // //                   </NavLink>
// // // //                 </li>
// // // //                 </>
// // // //             )}
// // // //           </ul>
// // // //           </div>
// // // //         </div>
// // // //       </nav>
// // // //     )
// // // // }
// // // // export default Navbar;


// // // import React from "react";
// // // import { useNavigate } from 'react-router-dom';
// // // import { NavLink } from "react-router-dom";
// // // import axios from "axios";
// // // // import './Navbar.css'; // Assuming this is your CSS file

// // // const Navbar = () => {
// // //   const isLoggedIn = localStorage.getItem('isLoggedIn');
// // //   const Navigate = useNavigate();

// // //   const handleLogout = async () => {
// // //     try {
// // //       await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
// // //         withCredentials: true
// // //       });
// // //       localStorage.removeItem('isLoggedIn');
// // //       Navigate("/login");
// // //       window.location.reload();
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   }

// // //   return (
// // //     <nav className="navbar navbar-expand-md bg-dark" style={{ backgroundImage: 'url("/Users/shashi/Downloads/MERN_vqa/frontend/src/pic/greenleaves.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
// // //       <div className="container-fluid">
// // //         <button
// // //           className="navbar-toggler text-light"
// // //           type="button"
// // //           data-bs-toggle="collapse"
// // //           data-bs-target="#navbarTogglerDemo03"
// // //           aria-controls="navbarTogglerDemo03"
// // //           aria-expanded="false"
// // //           aria-label="Toggle navigation"
// // //         >
// // //           <span className="navbar-toggler-icon"></span>
// // //         </button>
// // //         <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
// // //           <ul className="navbar-nav nav-pills">
// // //             {isLoggedIn ? (
// // //               <>
// // //                 <li className="nav-item mx-2">
// // //                   <button className="nav-link btn btn-link text-light" onClick={async () => {
// // //                     await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
// // //                       withCredentials: true
// // //                     })
// // //                     localStorage.removeItem('isLoggedIn');
// // //                     Navigate("/login");
// // //                   }}>
// // //                     Logout
// // //                   </button>
// // //                 </li>
// // //               </>
// // //             ) : (
// // //                 <>
// // //                   <li className="nav-item mx-2">
// // //                     <NavLink
// // //                       className="nav-link"
// // //                       activeClassName="active"
// // //                       to="/signup"
// // //                       style={{ color: 'white' }}
// // //                     >
// // //                       Signup
// // //                     </NavLink>
// // //                   </li>
// // //                   <li className="nav-item mx-2">
// // //                     <NavLink
// // //                       className="nav-link"
// // //                       activeClassName="active"
// // //                       to="/login"
// // //                       style={{ color: 'white' }}
// // //                     >
// // //                       Login
// // //                     </NavLink>
// // //                   </li>
// // //                 </>
// // //               )}
// // //           </ul>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   )
// // // }

// // // export default Navbar;



// // // Navbar.js

// // import React from "react";
// // import { useNavigate } from 'react-router-dom';
// // import { NavLink } from "react-router-dom";
// // import axios from "axios";
// // import './Navbar.css'; // Import the CSS file

// // const Navbar = () => {
// //   const isLoggedIn = localStorage.getItem('isLoggedIn');
// //   const Navigate = useNavigate();

// //   const handleLogout = async () => {
// //     try {
// //       await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
// //         withCredentials: true
// //       });
// //       localStorage.removeItem('isLoggedIn');
// //       Navigate("/login");
// //       window.location.reload();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   }

// //   return (
// //     <nav className="navbar navbar-expand-md bg-dark">
// //       <div className="container-fluid">
// //         <button
// //           className="navbar-toggler text-light"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarTogglerDemo03"
// //           aria-controls="navbarTogglerDemo03"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
// //           <ul className="navbar-nav nav-pills">
// //             {isLoggedIn ? (
// //               <>
// //                 <li className="nav-item mx-2">
// //                   <button className="nav-link btn btn-link text-light" onClick={async () => {
// //                     await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
// //                       withCredentials: true
// //                     })
// //                     localStorage.removeItem('isLoggedIn');
// //                     Navigate("/login");
// //                   }}>
// //                     Logout
// //                   </button>
// //                 </li>
// //               </>
// //             ) : (
// //                 <>
// //                   <li className="nav-item mx-2">
// //                     <NavLink
// //                       className="nav-link"
// //                       activeClassName="active"
// //                       to="/signup"
// //                       style={{ color: 'white' }}
// //                     >
// //                       Signup
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mx-2">
// //                     <NavLink
// //                       className="nav-link"
// //                       activeClassName="active"
// //                       to="/login"
// //                       style={{ color: 'white' }}
// //                     >
// //                       Login
// //                     </NavLink>
// //                   </li>
// //                 </>
// //               )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar;




// // Navbar.js
// import React from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import './Navbar.css'; // Import the CSS file

// const Navbar = () => {
//   const isLoggedIn = localStorage.getItem('isLoggedIn');
//   const Navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
//         withCredentials: true
//       });
//       localStorage.removeItem('isLoggedIn');
//       Navigate("/login");
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <nav className="navbar navbar-expand-md bg-dark">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler text-light"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarTogglerDemo03"
//           aria-controls="navbarTogglerDemo03"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
//           <ul className="navbar-nav nav-pills">
//             <li className="nav-item mx-2">
//               <NavLink
//                 className="nav-link"
//                 to="/"
//                 style={{ color: 'white' }}
//               >
//                 {/* <img
//                   src="home.png" // Replace with the path to your home image
//                   alt="Home"
//                   style={{ width: '30px', height: '30px', marginRight: '5px' }}
//                 /> */}
//                 Home
//               </NavLink>
//             </li>
//             {isLoggedIn ? (
//               <>
//                 <li className="nav-item mx-2">
//                   <button className="nav-link btn btn-link text-light" onClick={async () => {
//                     await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
//                       withCredentials: true
//                     })
//                     localStorage.removeItem('isLoggedIn');
//                     Navigate("/login");
//                   }}>
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//                 <>
//                   <li className="nav-item mx-2">
//                     <NavLink
//                       className="nav-link"
//                       activeClassName="active"
//                       to="/signup"
//                       style={{ color: 'white' }}
//                     >
//                       Signup
//                     </NavLink>
//                   </li>
//                   <li className="nav-item mx-2">
//                     <NavLink
//                       className="nav-link"
//                       activeClassName="active"
//                       to="/login"
//                       style={{ color: 'white' }}
//                     >
//                       Login
//                     </NavLink>
//                   </li>
//                 </>
//               )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;



// Navbar.js
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css'; // Import the CSS file
import myImage from './home.png';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
        withCredentials: true
      });
      localStorage.removeItem('isLoggedIn');
      Navigate("/login");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: 'white' }}
        >
          <img
            src={myImage} // Replace with the path to your home image
            alt="Home"
            style={{ width: '30px', height: '30px', marginRight: '5px' }}
          />
        </NavLink>
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
          <ul className="navbar-nav nav-pills">
            {isLoggedIn ? (
              <>
                <li className="nav-item mx-2">
                  <button className="nav-link btn btn-link text-light" onClick={async () => {
                    await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
                      withCredentials: true
                    })
                    localStorage.removeItem('isLoggedIn');
                    Navigate("/login");
                  }}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
                <>
                  <li className="nav-item mx-2">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/signup"
                      style={{ color: 'white' }}
                    >
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/login"
                      style={{ color: 'white' }}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
