import React, { useEffect } from 'react'
import styled from 'styled-components'
import { eventsList } from './constant'
import Slider from 'react-slick'
import './events.css'

const Container = styled.div`
    color: #fff;
    padding: 50px 50px;
    .slick-prev:before {
        display: none;
    }
    .slick-next:before, .slick-prev:before {
        display: none;
        background: black
    }
    @media (max-width: 550px) {
        padding: 70px 20px;
    }
`;

const Contant = styled.div`
    padding: 50px 0px;
    @media (max-width: 550px) {
        padding: 50px 0px;
    }
`;

const Title = styled.div`
    color: #cda45e;
    margin-top: 80px;
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

const Data = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    width: 50%;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

const EventsList = styled.div``;

const ListData = styled.div`
    padding-left: 40px;
    // overflow-x: scroll;
    // ::-webkit-scrollbar{
    //     width: 0px
    //     }
    @media (max-width: 1000px) {
        padding-left: unset;
        padding-top: 40px;
    }
`;

const Name = styled.div`
    font-weight: 600;
    font-size: 26px;
    color: #cda45e;
`;

const Price = styled.div`
    font-size: 26px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    margin: 15px 0px;
`;

const Description = styled.div`
    padding: 20px 0px;
    line-height: 26px;
`;

const Text = styled.div`
    padding-bottom: 20px;
    line-height: 26px;
`;

const ItemList = styled.div`
    display: flex;
    padding: 6px 0px;
    i {
        color: #cda45e;
        padding-right: 10px;
    }
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Events = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    
    return (
        <Container>
            <Title>Events</Title>
            <Heading>Organize Your Events in our Restaurant</Heading>
            <Contant>
                <Slider {...settings}>
                    {!!eventsList && eventsList.map((obj, index) => {
                        return (
                            <EventsList>
                                <Data key={index} className="crausoel_container">
                                    <Image src={obj.img} className="crausoel_image" alt="events image" />
                                    <ListData>
                                        <Name>{obj.name}</Name>
                                        <Price>{obj.price}</Price>
                                        <Text>{obj.text}</Text>
                                        {obj.eventsPoint.map((data, key) => {
                                            return (
                                                <ItemList key={key}>
                                                    <i class="far fa-check-circle"></i>
                                                    <div>{data}</div>
                                                </ItemList>
                                            )
                                        })}
                                        <Description>{obj.description}</Description>
                                    </ListData>
                                </Data>
                            </EventsList>
                        )
                    })}
                </Slider>
            </Contant>
        </Container>
    )
}

export default Events