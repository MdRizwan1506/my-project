import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    border-bottom: 2px solid #37332a;
    background: black;
    z-index: 99;
}
`;

const Name = styled.div`
    cursor: pointer;
    line-height: 1;
    font-size: 28px;
    font-weight: 300;
    padding: 25px 0px;
    padding-left: 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (max-width: 400px) {
        padding-left: 15px;
        font-size: 22px;
    }
`;

const ListItems = styled.div`
    display: flex;
    font-size: 16px;
    align-items: center;
    padding-right: 40px;
    .bold {
        font-weight: bold;
        font-size: 18px;
        color: #cda45e;
    }
    label {
        cursor: pointer;
        :hover {
            color: #cda45e;
        }
    }
    .menu-list {
        padding-left: 28px;
        @media (max-width: 1160px) {
            border-bottom: 0.1px solid #cda45e;
        }
    }
    .menu-list-book-table {
        padding: 10px 30px;
        margin-left: 30px;
        border-radius: 50px;
        cursor: pointer;
        text-transform: uppercase;
        :hover {
            color: black; 
            background: #cda45e;
        }
        border: 1px solid #cda45e;
    }
    @media (max-width: 1160px) {
        display: ${props => props.openMenuBar ? 'block' : 'none'};
        background: #fff;
        position: absolute;
        top: 100%;
        width: 270px;
        color: black;
        line-height: 50px;
        min-height: 100vh;   
        overflow: scroll;
        padding-right: unset;       
        .menu-list-book-table {
            width: 50%;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 50px auto 50px auto;
        }
    }
}
`;


const HomeMenuIcon = styled.div`
  margin-left: 10px;
  display: none;
  cursor: pointer;
  color: #fff;
  @media (max-width: 1160px) {
    display: block;
    font-size: 25px;
    margin-right: 5%;
  }
`;

class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.winWrapper = React.createRef()
        this.state = {
            selectItems: '',
            openMenuBar: false
        }
    }

    selectedItems = event => {
        this.setState({selectItems: event.target.id})
        console.log("Rizwan -------------------------- ", event.target.id)
    }

    ShowMenuBar = () => {
        this.setState({ openMenuBar: !this.state.openMenuBar })
    }

    componentDidMount = () => {
        document.addEventListener('click', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside)
    }

    handleClickOutside = event => {
        const elemWrapper = this.winWrapper
        if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
            this.setState({ openMenuBar: false })
        }
    }


    render() {
        const { history } = this.props
        const { openMenuBar, selectItems } = this.state
        return (
            <Container>
                <Name onClick={() => history.push('/')}>Restaurantly</Name>
                <ListItems onClick={(e) => this.selectedItems(e)} openMenuBar={openMenuBar}>
                    <div className={`menu-list ${selectItems === '' ? "bold" : null}`} onClick={() => history.push('/')}><label id="home">Home</label></div>
                    <div className={`menu-list ${selectItems === 'about' ? "bold" : null}`} onClick={() => history.push('/about')}><label id="about">About</label></div>
                    <div className={`menu-list ${selectItems === 'menu' ? "bold" : null}`} onClick={() => history.push('/menu')}><label id="menu">Menu</label></div>
                    <div className={`menu-list ${selectItems === 'events' ? "bold" : null}`} onClick={() => history.push('/events')}><label id="events">Events</label></div>
                    <div className={`menu-list ${selectItems === 'gallery' ? "bold" : null}`} onClick={() => history.push('/gallery')}><label id="gallery">Gallery</label></div>
                    <div className={`menu-list ${selectItems === 'contact' ? "bold" : null}`} onClick={() => history.push('/contact')}><label id="contact">Contact</label></div>
                    <div id="book-table" className="menu-list-book-table" onClick={() => history.push('/book-table')}><label>Book a table</label></div>
                </ListItems>
                <HomeMenuIcon   ref={this.winWrapper} onClick={() => this.ShowMenuBar()}>{!openMenuBar ? <i className="fas fa-bars"></i> : <i class="fal fa-times"></i>} </HomeMenuIcon>
            </Container>
        )
    }
}

export default withRouter(MenuBar)