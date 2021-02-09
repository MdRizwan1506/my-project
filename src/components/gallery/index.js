import React, { Component } from 'react'
import Gallery from './Gallery'
import styled from 'styled-components'
import Chefs from './Chefs';

const Container  = styled.div``;

export class MyGallery extends Component {
    render() {
        return (
            <Container>
               <Gallery /> 
               <Chefs />
            </Container>
        )
    }
}

export default MyGallery
