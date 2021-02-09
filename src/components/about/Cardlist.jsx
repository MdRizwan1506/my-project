import React, { Component } from 'react'
import styled from 'styled-components'
import { aboutCardList } from './constent';

const Container = styled.div`
    padding: 50px 50px;
    @media (max-width: 500px) {
        padding: 0px 0px 50px 0px;
    }
`;

const Title = styled.div`
    color: #cda45e;
    padding-top: 50px;
    padding-bottom: 20px;
    text-transform: uppercase;
    padding-left: 15px;
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
    padding-bottom: 20px;
    padding-left: 15px;
    font-family: "Playfair Display", serif;
`;

const ListItems = styled.div`
    color: #fff;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 900px) {
        justify-content: center;
    }
`;

const ListData = styled.div`
    width: 31%;
    margin: 10px 10px;
    padding: 60px 30px;
    background: #0c0b09;
    box-sizing: border-box;
    :hover {
        .data-id {
            color: #fff;
        }
        box-sizing: border-box;
        transition-delay: .1s;
        cursor: pointer;
        background: #cda45e;
        padding: 40px 30px;
        box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
    }
    @media (max-width: 950px) {
        width: 47%;
        justify-content: center;
        margin: 20px 10px;
    }
    @media (max-width: 800px) {
        width: 100%;
        margin: 20px 10px;
    }
`;

const ListId = styled.div`
    color: #cda45e;
    font-size: 28px;
    font-weight: 700;
`;


const ListName = styled.div`
    font-size: 30px;
    margin: 20px 0;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.8);
    font-family: "Playfair Display", serif;
`;

const ListDescription = styled.div`
    color: #aaaaaa;
    font-size: 15px;
`;


export class Cardlist extends Component {
    render() {
        return (
            <Container>
                <Title>WHY US</Title>
                <Heading>Why Choose Our Restaurant</Heading>
                <ListItems>
                {aboutCardList.map((data, index) => {
                    return (
                        <ListData key={index} className="make-it-fast">
                            <ListId className="data-id">{data.id}</ListId>
                            <ListName>{data.name}</ListName>
                            <ListDescription className="data-id">{data.description}</ListDescription>
                        </ListData>
                    )
                })}
                </ListItems>
            </Container>
        )
    }
}

export default Cardlist