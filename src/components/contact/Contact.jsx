import React, { useEffect } from 'react'
import styled from 'styled-components'
import { contactData } from './conatant';

const Container = styled.div`
    color: #fff;
    padding: 60px 50px;
    background: #0c0b09;
    padding-bottom: 100px;
    @media (max-width: 550px) {
        padding: 70px 20px 0px 20px;
    }
`;

const Title = styled.div`
    color: #cda45e;
    padding-top: 50px;
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
    line-height: 56px;
    span {
        color: #cda45e;
    }
    font-family: "Poppins", sans-serif;
`;

const ContactInformation = styled.div`
    width: 35%;
    margin: 50px 0px;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const ContactData = styled.div`
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Header = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
    font-family: "Open Sans",sans-serif;
`;

const ContactDiv = styled.div`
    display: flex;
    padding: 20px 0px;
    :hover {
        cursor: pointer;
        .icon {
            background: #fff;
            color: black;
        }
    }
`;

const Icon = styled.i`
    width: 50px;
    font-size: 20px;
`;

const IconDiv = styled.div`
    display: flex;
    text-align: center;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    background: #cda45e;
    margin-right: 20px;
`;

const TextDiv = styled.div``;

const Text = styled.div`
    font-size: 14px;
    color: #bab3a6;
`;

const Form = styled.form`
    width: 75%;
    display: flex;
    margin-top: 70px;
    flex-direction: column;
    .input_field {
        height: 40px;
        color: #fff;
        outline: none;
        border-radius: 4px;
        padding-left: 24px;
        background: #0c0b09;
        margin: 0px 0px 20px 20px;
        border: 1px solid #ced4da;
        :focus {
            border-color: #cda45e;
        }
        @media (max-width: 900px){
            margin: 0px 0px 20px 0px;            
        }
    }
    .enter_message {
        color: #fff;
        outline: none;
        height: 200px;
        margin-left: 20px;
        padding-top: 20px;
        padding-left: 24px;
        border-radius: 5px;
        background: #0c0b09;
        :focus {
            border-color: #cda45e;
        }
        border: 1px solid #ced4da;
        @media (max-width: 900px){
            margin: 0px 0px 20px 0px;            
        }
    }
    @media (max-width: 900px) {
        width: 100%;
        margin-bottom: 40px;
        margin-top: 0px;
    }
`;

const OneLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .input_field {
        width: 44%;
        height: 40px;
        @media (max-width: 600px) {
            width: unset;
        }
    }
    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;


const SubmitData = styled.div`
    margin-top: 30px;
    text-align: center;
    button{
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
    }
`;

const Contact = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Container>
            <Title>CONTACT</Title>
            <Heading>Contact Us</Heading>
            <iframe
                src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Iframe Example"
                frameBorder="0" style={{ border: "0", width: "100%", height: "290px" }} allowFullScreen>
            </iframe>
            <ContactData>
                <ContactInformation>
                    {contactData.map((obj, index) => {
                        return (
                            <ContactDiv key={index}>
                                <IconDiv className="icon">
                                    <Icon className={obj.icon} />
                                </IconDiv>
                                <TextDiv>
                                    <Header>{obj.heading}</Header>
                                    <Text>{obj.text}</Text>
                                </TextDiv>
                            </ContactDiv>
                        )
                    })}
                </ContactInformation>
                <Form>
                    <OneLine>
                        <input
                            type="text"
                            id="full_name"
                            autoComplete="none"
                            className="input_field"
                            placeholder="Enter Your Name"
                        />
                        <input
                            type="text"
                            id="full_name"
                            autoComplete="none"
                            className="input_field"
                            placeholder="Enter Your Email"
                        />
                    </OneLine>
                    <input
                        type="text"
                        id="full_name"
                        placeholder="Subject"
                        className="input_field"
                    />
                    <textarea
                        type="text"
                        id="full_name"
                        className="enter_message"
                        placeholder="Message"
                    />
                    <SubmitData>
                        <button type="submit">
                            Send Message
                            </button>
                    </SubmitData>
                </Form>
            </ContactData>
        </Container>
    )
}

export default Contact