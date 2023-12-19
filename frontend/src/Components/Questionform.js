
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // // import Cookies from 'js-cookie';
// // // import jwt from 'jsonwebtoken';
// // import { StyledDiv, StyledButton, StyledForm, StyledInnerDiv, StyledLabel, StyledInput } from './QuestionFormStyles';

// // const currentdate = new Date();
// // const year = currentdate.getFullYear();
// // const month = currentdate.getMonth();
// // const date = currentdate.getDate();
// // const time = currentdate.getHours();
// // const min = currentdate.getMinutes();
// // const sec = currentdate.getSeconds();

// // const QuestionForm = () => {
// //   const [question, setQuestion] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [answer, setAnswer] = useState('');
// //   const [userName, setUserName] = useState('');

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     setImage(file);
// //   };

// //   const handleQuestionChange = (e) => {
// //     setQuestion(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const imageData = reader.result.split(',')[1];
// //         sendRequest(imageData);
// //       };
// //       reader.readAsDataURL(image);
// //     } catch (error) {
// //       console.error('Error reading the image:', error);
// //     }
// //   };

// //   const sendRequest = async (imageData) => {
// //     try {
// //       const formData = {
// //         question: question,
// //         data: imageData,
// //       };

// //       const response = await axios.post('http://localhost:8000/predict', formData, {
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       setAnswer(response.data.prediction);
// //     } catch (error) {
// //       console.error('Error submitting the form:', error);
// //     }
// //   };
  
// //   return (
// //     <>
// //       <br />
// //       <StyledDiv>
// //         <StyledForm onSubmit={handleSubmit}>
// //           <div>
// //             <StyledLabel>Image:</StyledLabel>
// //             <StyledInput type="file" accept="image/*" onChange={handleImageChange} />
// //           </div>
// //           <div>
// //             <StyledLabel>Question:</StyledLabel>
// //             <StyledInput type="text" value={question} onChange={handleQuestionChange} />
// //           </div>
// //           <div>
// //             <StyledButton type="submit">Submit</StyledButton>
// //           </div>
// //         </StyledForm>
// //         {answer && <StyledInnerDiv>Answer: {answer}</StyledInnerDiv>}
// //         {answer && (
// //           <StyledInnerDiv>
// //             Answer occurred at: {date}/{month}/{year} .{time}:{min}:{sec}
// //           </StyledInnerDiv>
// //         )}
// //       </StyledDiv>
// //     </>
// //   );
// // };

// // export default QuestionForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   StyledDiv,
//   StyledButton,
//   StyledForm,
//   StyledInnerDiv,
//   StyledLabel,
//   StyledInput
// } from './QuestionFormStyles';

// const currentdate = new Date();
// const year = currentdate.getFullYear();
// // const year = currentdate.setFullYearl;
// const month = currentdate.getMonth();
// const date = currentdate.getDate();
// const time = currentdate.getHours();
// const min = currentdate.getMinutes();
// const sec = currentdate.getSeconds();
// const milsec = currentdate.getMilliseconds();
// console.log(year);
// console.log(month);
// console.log(date);
// console.log(time);
// console.log(min);
// console.log(sec);
// console.log(milsec);

// const QuestionForm = () => {
//   const [question, setQuestion] = useState('');
//   const [image, setImage] = useState(null);
//   const [answer, setAnswer] = useState('');
//   // const [userName, setUserName] = useState('');
//   const [timestamp, setTimestamp] = useState('');

//   useEffect(() => {
//     // Fetch user name when the component mounts
//     fetchUserName();
//   }, []);

//   const fetchUserName = async () => {
//     try {
//       // Make a request to the server to get the user name
//       const response = await axios.get('http://localhost:8000/getUserName', {
//         // Include any necessary headers or authentication tokens
//       });

//       // Assuming the response contains the user name
//       setUserName(response.data.userName);
//     } catch (error) {
//       console.error('Error fetching user name:', error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const imageData = reader.result.split(',')[1];
//         sendRequest(imageData);
//       };
//       reader.readAsDataURL(image);
//     } catch (error) {
//       console.error('Error reading the image:', error);
//     }
//   };

//   const sendRequest = async (imageData) => {
//     try {
//       const formData = {
//         question: question,
//         data: imageData,
//       };

//       const response = await axios.post('http://localhost:8000/predict', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       setAnswer(response.data.prediction);
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//     }
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentdate = new Date();
//       const year = currentdate.getFullYear();
//       const month = currentdate.getMonth();
//       const date = currentdate.getDate();
//       const time = currentdate.getHours();
//       const min = currentdate.getMinutes();
//       const sec = currentdate.getSeconds();

//       setTimestamp(
//         `${date}/${month}/${year} . ${time}:${min}:${sec}`
//       );
//     }, 1000);
  

//   return (
//     <>
//       <br />
//       <StyledDiv>
//         {/* Display the user name */}
//         <StyledForm onSubmit={handleSubmit}>
//           <div>
//             <StyledLabel>Image:</StyledLabel>
//             <StyledInput type="file" accept="image/*" onChange={handleImageChange} />
//           </div>
//           <div>
//             <StyledLabel>Question:</StyledLabel>
//             <StyledInput type="text" value={question} onChange={handleQuestionChange} />
//           </div>
//           <div>
//             <StyledButton type="submit">Submit</StyledButton>
//           </div>
//         </StyledForm>
//         {answer && <StyledInnerDiv>Answer: {answer}</StyledInnerDiv>}
//         {answer && <StyledInnerDiv>Answer: {timestamp}</StyledInnerDiv>}
//       </StyledDiv>
//     </>
//   );
// };

// export default QuestionForm;



// // // QuestionForm.js

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const QuestionForm = () => {
// //   const [userName, setUserName] = useState('');

// //   useEffect(() => {
// //     fetchUserName();
// //   }, []);

// //   const fetchUserName = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:8000/getUserName', { withCredentials: true });
// //       setUserName(response.data.userName);
// //     } catch (error) {
// //       console.error('Error fetching user name:', error);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await axios.get('http://localhost:8000/', { withCredentials: true });
// //       // Redirect or perform other actions after logout
// //     } catch (error) {
// //       console.error('Error logging out:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Welcome, {userName}!</h1>
// //       <button onClick={handleLogout}>Logout</button>
// //     </div>
// //   );
// // };

// // export default QuestionForm;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledDiv,
  StyledButton,
  StyledForm,
  StyledInnerDiv,
  StyledLabel,
  StyledInput
} from './QuestionFormStyles';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);
  const [answer, setAnswer] = useState('');
  const [userName, setUserName] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getUserName', { withCredentials: true });
      setUserName(response.data.userName);
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result.split(',')[1];
        sendRequest(imageData);
      };
      reader.readAsDataURL(image);
    } catch (error) {
      console.error('Error reading the image:', error);
    }
  };

  const sendRequest = async (imageData) => {
    try {
      const formData = {
        question: question,
        data: imageData,
      };

      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setAnswer(response.data.prediction);
      updateTimestamp(); // Add this line to update the timestamp
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const updateTimestamp = () => {
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
  };

  return (
    <>
      <br />
      <StyledDiv>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <StyledLabel>Image:</StyledLabel>
            <StyledInput type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div>
            <StyledLabel>Question:</StyledLabel>
            <StyledInput type="text" value={question} onChange={handleQuestionChange} />
          </div>
          <div>
            <StyledButton type="submit">Submit</StyledButton>
          </div>
        </StyledForm>
        {answer && <StyledInnerDiv>Answer: {answer}</StyledInnerDiv>}
        {answer && <StyledInnerDiv>Answer: {timestamp}</StyledInnerDiv>}
      </StyledDiv>
    </>
  );
};

export default QuestionForm;
