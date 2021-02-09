import React, { Component } from 'react'
import Menu from './Menu'
import Specials from './Specials'

export class MenuList extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Specials />
            </div>
        )
    }
}

export default MenuList
