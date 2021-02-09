// import React, { Component } from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//     padding: 70px 0px;
//     background: #0c0b09;
//     padding: 0px 50px;
//     color: #fff;
//     @media (max-width: 550px) {
//         padding: 0px 20px;
//     }
//     .textarea-field {
//         width: 94%;
//         font-size: 16px;
//         min-height: 150px;
//         background: #0c0b09;
//         border-radius: 4px;
//         padding: 20px 0px 0px 15px;
//         border: 1px solid #ced4da;
//         font-family: "Open Sans", sans-serif;
//         :focus {
//           color: grey;
//           border-color: blue;
//           outline: 0;
//         }
//         :hover {
//           box-shadow: 0 5px 11px rgba(33,33,33,.2);
//         }
//         @media (max-width: 850px) {
//             width: 90%;
//         }
//     }
// `;

// const Title = styled.div`
//     color: #cda45e;
//     padding-top: 50px;
//     padding-bottom: 20px;
//     text-transform: uppercase;
//     ::after {
//         content: "";
//         height: 1px;
//         width: 120px;
//         margin: 4px 10px;
//         display: inline-block;
//         background-color: #cda45e;
//     }
// `;

// const Heading = styled.div`
//     font-size: 36px;
//     font-weight: 700;
//     padding: 20px 0px;
//     line-height: 56px;
//     span {
//         color: #cda45e;
//     }
//     font-family: "Poppins", sans-serif;
// `;

// const BookTable = styled.div`
// width: 98%;
// display: flex;
// flex-wrap: wrap;
// background: #0c0b09;
// @media (max-width: 850px) {
//     width: 100%;
//     flex-direction: column;
// }
// .field-name{
//     width: 33%;
//     display: flex;
//     padding-bottom: 30px;
//     flex-direction: column;
//     @media (max-width: 850px) {
//         width: 100%;
//     }
//   }
//   .input-field {
//     width: 90%;
//     height: 45px;
//     font-size: 16px;
//     border-radius: 4px;
//     background: #0c0b09;
//     padding-left: 15px;
//     border: 1px solid #ced4da;
//     outline-color: blue;
//     :hover {
//       box-shadow: 0 5px 11px rgba(33,33,33,.2);
//     }
//     :focus {
//         color: grey;
//         background-color: #fff;
//         border-color: blue;
//         outline: 0;
//     }
// }
// `;

// const SaveData = styled.div`
//     width: 100%;
//     padding-top: 40px;
//     text-align: center;
// `;


// const SubmitButton = styled.button`
//     outline: none;
//     min-width: 130px;
//     padding: 10px 15px;
//     cursor: pointer;
//     border-radius: 50px;
//     text-transform: uppercase;
//     :hover {
//         color: #fff; 
//         background: #cda45e;
//     }
//     border: 2px solid #cda45e;
// `;

// export class Reservation extends Component {
//     render() {
//         return (
//             <Container id="book-table">
//                 <Title>RESERVATION</Title>
//                 <Heading>Book a Table</Heading>
//                 <BookTable>
//                     <div className="field-name">
//                         <input
//                             type="text"
//                             id="fullname"
//                             name="full_name"
//                             className="input-field"
//                             placeholder="Your Name"
//                         />
//                     </div>
//                     <div className="field-name">
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="input-field"
//                             placeholder="Your Email"
//                         />
//                     </div>
//                     <div className="field-name">
//                         <input
//                             type="number"
//                             id="phone_number"
//                             name="phone_number"
//                             className="input-field"
//                             placeholder="Your Phone"
//                         />
//                     </div>
//                     <div className="field-name">
//                         <input
//                             type="text"
//                             id="date"
//                             name="date"
//                             className="input-field"
//                             placeholder="Date"
//                         />
//                     </div>
//                     <div className="field-name">
//                         <input
//                             type="text"
//                             id="time"
//                             name="time"
//                             className="input-field"
//                             placeholder="Time"
//                         />
//                     </div>
//                     <div className="field-name">
//                         <input
//                             type="number"
//                             id="number_of_people"
//                             name="number_of_people"
//                             className="input-field"
//                             placeholder="# of people"
//                         />
//                     </div>
//                 </BookTable>
//                 <div className="field-name">
//                     <textarea
//                         name="Text"
//                         id="textarea"
//                         type="textarea"
//                         className="textarea-field"
//                         placeholder="Enter Your Message"
//                     />
//                 </div>
//                 <SaveData>
//                     <SubmitButton>Book a Table</SubmitButton>
//                 </SaveData>
//             </Container>
//         )
//     }
// }

// export default Reservation