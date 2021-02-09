import React, { Component } from 'react'
import styled from 'styled-components';
import Menubar from '../menubar/MenuBar';

const Container = styled.div`
    background-image: src(${require('../../assets/img/hero-bg.jpg')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 14px;
    .padding-left {
        padding-left: 8px; 
    }
    .padding-right {
        padding-right: 5px;
        color: rgb(217, 186, 133);
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    i {
        font-size: 12px;
        padding-right: 8px;
        color: rgb(217, 186, 133);
    }
    span {
        padding-left: 20px;
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

const Header = styled.div`
    display: flex;
    padding: 0px 40px;
    justify-content: space-between;
    ul {
        display: flex;
    }
    @media (max-width: 400px) {
        padding: 0px 15px;
    }
`;


class NavBar extends Component {
    render() {
        return (
            <Container>
                {/* <Header>
                    <Icons>
                        <i class="fas fa-phone-alt"></i> +1 5589 55488 55
                       <span><i class="fal fa-clock"></i> Mon-Sat: 11:00 AM - 23:00 PM</span>
                    </Icons>
                    <div>
                        <ul>
                            <ol className="padding-right">En</ol> /
                            <ol className="padding-left">De</ol>
                        </ul>
                    </div>
                </Header> */}
                <Menubar />
            </Container>
        )
    }
}

export default NavBar
