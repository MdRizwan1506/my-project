import React, { Component } from 'react'
import styled from 'styled-components'
import { testimonialsList } from './constant';
import quote_left from '../../assets/img/quotes/quote-alt-left.svg'
import quote_right from '../../assets/img/quotes/quote-alt-right.svg'

const Container = styled.div`
    color: #fff;
    padding: 0px 50px;
    background-color: #1a1814;
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

const ListData = styled.div`
    left: 0px;
    display: flex;
    flex-wrap: wrap;
`;

const TestimonialList = styled.div`
    width: 33%;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

const Text = styled.div`
    padding: 30px;
    position: relative;
    margin: 0px 15px;
    background: #26231d;
    min-height: auto;
    border-radius: 8px;
    max-height: 250px;
    min-height: 200px;
    line-height: 26px;
    height: 40%;
    .quote_left, .quote_right {
    position: relative;
    top: 4px;
    width: 25px;
    padding-right: 10px;
    }
    @media (max-width: 1024px) {
        min-height: 190px;
    }
    @media (max-width: 500px) {
        min-height: 220px;
        margin: 0px;
    }
    @media (max-width: 400px) {
        min-height: 250px;
    }
`;

const Image = styled.img`
    width: 100px;
    border-radius: 50%;
    border: 6px solid rgba(0, 0, 0, 0.2);
`;

const Information = styled.div`
    padding-left: 50px;
    position: relative;
    bottom: 60px;    
    // top: -60px;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    font-family: "Playfair Display", serif;
`;

const Post = styled.div``;


export class Testimonials extends Component {
    render() {
        return (
            <Container>
                <Title>TESTIMONIALS</Title>
                <Heading>What they're saying about us</Heading>
                <ListData>
                    {testimonialsList.map((obj, index) => {
                        return (
                            <TestimonialList key={index}>
                                <Text><img src={quote_left} alt="quote_left" className="quote_left" />
                                        {obj.text}
                                    <img src={quote_right} alt="quote_right" className="quote_right" />
                                </Text>
                                <Information>
                                    <Image src={obj.img} />
                                    <Name>{obj.name}</Name>
                                    <Post>{obj.post}</Post>
                                </Information>
                            </TestimonialList>
                        )
                    })}
                </ListData>
            </Container>
        )
    }
}

export default Testimonials