import React from 'react';

class NavBar extends React.Component {
    render () {
        return (
            <div className='NavBar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            </div>
        )
    }
}

export default NavBar;
