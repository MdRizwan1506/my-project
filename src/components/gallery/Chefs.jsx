import React, { Component } from 'react'
import styled from 'styled-components';
import { chefsImage } from './constant';

const Container = styled.div`
    padding: 0px 50px 60px 50px;
    color: #fff;
    background: #0c0b09;
    @media (max-width: 550px) {
        padding: 0px 20px;
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

const ChefsData = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Image = styled.img`
    width: 30%;
    padding: 0px 19px;
    @media (max-width: 1200px) {
        width: 46%;
        padding-bottom: 50px;
        justify-content: center;
    }
    @media (max-width: 880px) {
        width: 100%;
        padding-bottom: 50px;
        justify-content: center;
    }
`;

export class Chefs extends Component {
    render() {
        return (
            <Container>
                <Title>CHEFS</Title>
                <Heading>Our Proffesional Chefs</Heading>
                <ChefsData>
                    {!!chefsImage && !!chefsImage.length && chefsImage.map(obj =>
                        <Image src={obj.img} alt="chefs_photos" />
                    )}
                </ChefsData>
            </Container>
        )
    }
}

export default Chefs