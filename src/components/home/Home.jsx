import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import hero_bg from '../../assets/img/hero-bg.jpg'
import { withRouter } from 'react-router-dom';


const Container = styled.div`
    color: #fff;
    display: flex;
    min-height: 100vh;
    align-items: center;
    background-image: url(${hero_bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: space-between;
    ::before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
    }
`;

const Content = styled.div`
    top: 40%;
    width: 100%;
    display: flex;
    text-align: center;
    position: absolute;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
    }
    @media (max-width: 500px) {
        top: 25%;
    }
`;

const Heading = styled.div`
    font-size: 50px;
    font-weight: 700;
    line-height: 56px;
    span {
        color: #cda45e;
    }
    @media (max-width: 400px) {
        font-size: 45px;
    }
    font-family: "Poppins", sans-serif;
`;

const TextDiv = styled.div`
    width: 100%;
    opacity: .99;
    line-height: 40px;
    @media (max-width: 800px) {
        width: unset;
        padding-bottom: 25px;
    }
`;

const Name = styled.div`
    color: #cda45e;
    font-size: 40px;
    font-weight: bold;
    padding: 30px 0px;
    font-family: "Poppins", sans-serif;
`;

const Text = styled.div`
    font-size: 22px;
    margin: 10px 0px;
    font-family: "Playfair Display", serif;
`;

const MenuButton = styled.button`
    outline: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50px;
    text-transform: uppercase;
    min-width: 15%;
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

const BookTable = styled.button`
    outline: none;
    padding: 10px 15px;
    margin-left: 30px;
    cursor: pointer;
    border-radius: 50px;
    text-transform: uppercase;
    min-width: 15%;
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
    @media (max-width: 600px) {
        margin-left: unset;
        margin-top: 20px;
    }
`;

const ButtonDiv = styled.div`
    @media (max-width: 600px) {
        display: flex;
        padding: 0px 50px;
        flex-direction: column;
    }
`;


const Home = ({ history }) => {
     
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);

    return (
        <Container>
            <Content>
                <TextDiv>
                    <Heading> Welcome to <span>Restaurantly</span> </Heading>
                    <Text> Delivering great food for more than 18 years! </Text>
                    <ButtonDiv>
                        <MenuButton onClick={() => history.push('/menu')}>our menu</MenuButton>
                        <BookTable onClick={() => history.push('/book-table')}>Book a Table</BookTable>
                    </ButtonDiv>
                    <Name>Md Rizwan</Name>
                </TextDiv>
            </Content>
        </Container>
    )
}

export default withRouter(Home)