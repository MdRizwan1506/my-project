import React, { Component } from 'react'
import Contact from './Contact'
import styled from 'styled-components'

const Container = styled.div`
    // // padding: 0px 50px;
    // @media (max-width: 550px) {
    //     padding: 0px 20px;
    // }
`;

export class MyContact extends Component {
    render() {
        return (
            <Container>
                <Contact />
            </Container>
        )
    }
}

export default MyContact