import React, { Component } from 'react'

const headerStyle = {
    border: '2px, solid, green'
};

export class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>Header</div>
        )
    }
}

export default Header