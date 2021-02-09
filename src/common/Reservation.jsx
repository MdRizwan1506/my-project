import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: #0c0b09;
    padding: ${props => props.paddingTop ? '50px' : '70px 50px 50px 50px'};
    .textarea-field {
        width: 96%;
        color: #fff;
        font-size: 16px;
        min-height: 150px;
        border-radius: 4px;
        background: #0c0b09;
        padding: 20px 0px 0px 15px;
        border: 1px solid #ced4da;
        :focus {
            outline: 0;
            border-color: #cda45e;
        }
        @media (max-width: 850px) {
            width: 95%;
        }
    }
    @media (max-width: 550px) {
        padding: 50px 20px;
    }
`;

const Title = styled.div`
    color: #cda45e;
    padding-top: ${props => props.paddingTop ? '0' : '50'}px;
    padding-bottom: 20px;
    text-transform: uppercase;
    ::after {
        content: "";
        height: 1px;
        width: 120px;
        margin: 4px 10px;
        display: inline-block;
        background-color: #cda45e;
    }
`;

const Heading = styled.div`
    font-size: 36px;
    font-weight: 700;
    padding: 20px 0px;
    color: #fff;
    line-height: 56px;
    span {
        color: #cda45e;
    }
    font-family: "Poppins", sans-serif;
`;

const BookTable = styled.div`
width: 100%;
flex-wrap: wrap;
background: #0c0b09;
@media (max-width: 850px) {
    width: 97%;
    flex-direction: column;
}
.field-name{
    width: 33%;
    background: #0c0b09;
    padding-bottom: 30px;
    flex-direction: column;
    @media (max-width: 850px) {
        width: 100%;
    }
  }
  .input-field {
    width: 90%;
    height: 45px;
    font-size: 16px;
    border-radius: 4px;
    background: #0c0b09;
    color: #fff;
    padding-left: 15px;
    border: 1px solid #ced4da;
    outline-color: blue;
    :hover {
      box-shadow: 0 5px 11px rgba(33,33,33,.2);
    }
    :focus {
        outline: 0;
        background: #0c0b09;;
        border-color: #cda45e;
    }
    @media (max-width: 850px) {
        width: 97%;
    }
}
`;

const SaveData = styled.div`
    width: 100%;
    padding-top: 40px;
    text-align: center;
`;

const SubmitButton = styled.button`
    outline: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50px;
    text-transform: uppercase;
    min-width: 200px;
    height: 45px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    color: #fff; 
    background: #cda45e;
    :hover {
        color: #333333; 
        background: #fff;
    }
`;

export class Reservation extends Component {
    render() {
        const { padding_top } = this.props
        return (
            <Container paddingTop={padding_top} id="book-table">
                <Title paddingTop={padding_top}>RESERVATION</Title>
                <Heading>Book a Table</Heading>
                <BookTable autocomplete={"none"} className="d-flex">
                    <div className="field-name">
                        <input
                            type="text"
                            id="fullname"
                            name="full_name"
                            autocomplete={"none"}
                            className="input-field"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="field-name">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autocomplete={"none"}
                            className="input-field"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="field-name">
                        <input
                            type="number"
                            id="phone_number"
                            name="phone_number"
                            className="input-field"
                            placeholder="Your Phone"
                        />
                    </div>
                    <div className="field-name">
                        <input
                            id="date"
                            type="text"
                            name="date"
                            placeholder="Date"
                            className="input-field"
                        />
                    </div>
                    <div className="field-name">
                        <input
                            type="text"
                            id="time"
                            name="time"
                            className="input-field"
                            placeholder="Time"
                        />
                    </div>
                    <div className="field-name">
                        <input
                            type="number"
                            id="number_of_people"
                            name="number_of_people"
                            className="input-field"
                            placeholder="# of people"
                        />
                    </div>
                </BookTable>
                <div className="field-name">
                    <textarea
                        name="Text"
                        id="textarea"
                        type="textarea"
                        className="textarea-field"
                        placeholder="Enter Your Message"
                    />
                </div>
                <SaveData>
                    <SubmitButton>Book a Table</SubmitButton>
                </SaveData>
            </Container>
        )
    }
}

export default Reservation