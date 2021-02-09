import React, { Component } from 'react'
import styled from 'styled-components'
import { menuList } from './constent';

const Container = styled.div`
    padding: 70px 50px;
    background-color: #1a1814;
    color: #fff;
    @media (max-width: 500px) {
        padding: 70px 20px 20px 20px;
    }
`;

const MenuChoice = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0px 35px 0px;
    .menu-choice {
        :hover {
            color: #cda45e;
            cursor: pointer;
        }
        padding-left: 20px;
    }
    @media (max-width: 500px) {
        justify-content: unset;        
    }
`;

const Title = styled.div`
    color: #cda45e;
    padding-top: 50px;
    padding-bottom: 30px;
    text-transform: uppercase;
    ::after {
        content: '';
        height: 1px;
        width: 120px;
        margin: 4px 10px;
        display: inline-block;
        background-color: #cda45e;
    }
`;



const Heading = styled.div`
    font-weight: 600;
    font-size: 30px;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;
    padding-bottom: 20px;
    @media (max-width: 500px) {
        font-size: 26px;
    }
`;

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    @media (max-width: 500px) {
        width: 60px;
        height: 60px;
    }
    border: 5px solid rgba(255, 255, 255, 0.2);
`;

const MenuItems = styled.div`
    width: 48%;
    display: flex;
    padding: 15px 0px;
    @media (max-width: 1150px) {
        width: 100%;
    }
`;

const MenuList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1150px) {
        display: unset;
        flex-wrap: unset;
    }
`;

const InfoMenuList = styled.div`
    display: flex;
    justify-content: space-between
`;

const Name = styled.div`
    font-weight: bold;
    ::after {
        // content: ' ............................................................';
        font-family: "Open Sans", sans-serif;
    }
`;

const Price = styled.div`
    color: #cda45e;
    font-weight: bold;
    text-align: center;
    ::before {
        content: '$ ';
        font-family: "Open Sans", sans-serif;
    }
`;

const InfoMenuItems = styled.div`
    display: flex;
    padding: 0px 20px;
    width:100%;
    line-height: 25px;
    flex-direction: column;
    justify-content: center;
`;

const Description = styled.div`
    color: grey
`;

export class Menu extends Component {
    render() {
        return (
            <Container>
                <Title>Menu</Title>
                <Heading>Check Our Tasty Menu</Heading>
                <MenuChoice>
                    <div className="menu-choice">All</div>
                    <div className="menu-choice">Starters</div>
                    <div className="menu-choice">Salads</div>
                    <div className="menu-choice">Specialty</div>
                </MenuChoice>
                <MenuList>
                    {!!menuList && menuList.length > 0 && menuList.map((obj, index) => {
                        return (
                            <MenuItems key={index}>
                                <Image
                                    src={obj.img} alt="error"
                                />
                                <InfoMenuItems>
                                    <InfoMenuList>
                                        <Name>{obj.name}</Name>
                                        <Price>{obj.price}</Price>
                                    </InfoMenuList>
                                    <Description>{obj.description}</Description>
                                </InfoMenuItems>
                            </MenuItems>
                        )
                    })}
                </MenuList>
            </Container>
        )
    }
}

export default Menu