import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    color: #fff;
    background: #0c0b09;
    font-family: "Playfair Display", serif;
`;

const FooterDiv = styled.div`
    display: flex;
    padding: 60px 0px;
    border-top: 1px solid #37332a;
    border-bottom: 1px solid #37332a;
    justify-content: space-around;
    @media (max-width: 900px) {
        padding: 0px 30px 40px 30px;
        flex-direction: column;
    }
    .list_items {
        display: flex;
        align-items: center;
        line-height: 40px;
    }

`;

const Info = styled.div`
    padding-top: 20px;
    span {
        font-weight: bold;
    }
`;

const ReturantName = styled.div`
    padding-top: 10px;
`;

const UsefulLink = styled.div`
    i {
        width: 20px;
        font-size: 25px;
    }
`;

const OurServices = styled.div`
    i {
        width: 20px;
        font-size: 25px;
    }
`;

const OurNewsletter = styled.div`
    padding-top: 10px;
    max-width: 30%;
    @media (max-width:900px){
        max-width: unset;
    }
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 30px;
    @media (max-width: 900px) {
        padding: 50px 0px 20px 0px;
    }
`;

const Icon = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    i {
        width: 36px;
        height: 36px;
        display: flex;
        border-radius: 50%;
        text-align: center;
        background: #28251f;
        align-items: center;
        justify-content: center;
        :hover {
            cursor: pointer;
            background: #cda45e;
        }
    }
    @media (max-width: 900px) {
        max-width: 50%;
    }
    @media (max-width: 430px) {
        max-width: 100%;
    }
`;

const ListItems = styled.div`
    line-height: 30px;
    span{
        :hover {
            cursor: pointer;
            color: #cda45e;
        }
    }
`;

const FooterContant = styled.div`
    padding: 30px 0px;
`;

const Contant = styled.div`
    text-align: center;
    line-height: 30px;
    font-family: "Playfair Display", serif;
    span {
        font-size: 18px;
        font-weight: bold;
    }
    label {
        color: #cda45e;
        text-transform: uppercase;
    }
`;

const Form = styled.form`
    height: 30px; 
    margin-top: 50px;
    background: #28251f;
    padding: 6px 10px;
    position: relative;
    border-radius: 50px;
    border: 1px solid #454035;
    input {
        border: 0;
        color: white;
        outline: none;
        font-size: 16px;
        margin-top: 3px;
        background: #28251f;
        padding: 4px 4px 4px 10px;
    }
`;

const Subscribe = styled.button`
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0 30px 2px 30px;
    background: #cda45e;
    color: #fff;
    border-radius: 50px;
    :hover {
        color: black;
        background: #fff;
    }
`;

export class Footer extends Component {
    render() {
        return (
            <Container>
                <FooterDiv>
                    <ReturantName>
                        <Name>RESTAURANTLY</Name>
                        <ListItems>
                            <div>H No. 23 Block No A JSL Colony <br />HR 125001 , Haryana , India </div>
                            <Info><span>Phone : </span> +91 8383944926 <br /> <span>Email : </span> info@example.com</Info>
                            <Icon>
                                <div className="icon"><i className="fab fa-twitter"></i></div>
                                <div className="icon"><i className="fab fa-facebook-f"></i></div>
                                <div className="icon"><i className="fab fa-instagram"></i></div>
                                <div className="icon"><i className="fab fa-skype"></i></div>
                                <div className="icon"><i className="fab fa-linkedin-in"></i></div>
                            </Icon>
                        </ListItems>
                    </ReturantName>
                    <UsefulLink>
                        <Name>Useful Links</Name>
                        <ListItems>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Home</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>About Us</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Services</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Terms of service</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Privacy policy</span></div>
                        </ListItems>
                    </UsefulLink>
                    <OurServices>
                        <Name>Our Services</Name>
                        <ListItems>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Web Design</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Web Development</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Product Management</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Marketing</span></div>
                            <div className="list_items"> <i class="fad fa-caret-right"></i><span>Graphic Design</span></div>
                        </ListItems>
                    </OurServices>
                    <OurNewsletter>
                        <Name>Our Newsletter</Name>
                        <div>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</div>
                        <Form>
                            <input 
                                type="text"
                                placeholder="Message"
                            />
                            <Subscribe>Subscribe</Subscribe>
                        </Form>
                    </OurNewsletter>
                </FooterDiv>
                <FooterContant>
                    <Contant>
                        © Copyright <span>Restaurantly.</span> All Rights Reserved <br />
                        Designed by <label>Md Rizwan</label>
                    </Contant>
                </FooterContant>
            </Container>
        )
    }
}

export default Footer