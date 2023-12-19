import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate, NavLink } from "react-router-dom";
import Signup from "./Components/signup";
import Login from "./Components/login";
import QuestionForm from "./Components/Questionform";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";

const currentdate = new Date();
const year = currentdate.getFullYear();
// const year = currentdate.setFullYearl;
const month = currentdate.getMonth();
const date = currentdate.getDate();
const time = currentdate.getHours();
const min = currentdate.getMinutes();
const sec = currentdate.getSeconds();
const milsec = currentdate.getMilliseconds();
console.log(year);
console.log(month);
console.log(date);
console.log(time);
console.log(min);
console.log(sec);
console.log(milsec);

// ...

function App() {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentdate = new Date();
      const year = currentdate.getFullYear();
      const month = currentdate.getMonth();
      const date = currentdate.getDate();
      const time = currentdate.getHours();
      const min = currentdate.getMinutes();
      const sec = currentdate.getSeconds();

      setTimestamp(
        `${date}/${month}/${year} . ${time}:${min}:${sec}`
      );
    }, 1000); // Update every second (1000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myapp" element={<QuestionForm />} />
        </Routes>
      </Router>
      <br/>
      <hr/>
      <br/>
      <div className="container" id="tst" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>
          <b>Active Stamp © </b> {timestamp}
        </p>
      </div>
    </>
  );
}

export default App;
