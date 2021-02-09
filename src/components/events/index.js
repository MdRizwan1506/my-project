import React, { Component } from 'react'
import Events from './Events'
import styled from 'styled-components'
import Testimonials from './Testimonials';
import Reservation from '../../common/Reservation';

const Container  = styled.div``;

export class MyEvents extends Component {
    render() {
        return (
            <Container>
                <Events />
                <Reservation padding_top={true} />
                <Testimonials />
            </Container>
        )
    }
}

export default MyEvents
