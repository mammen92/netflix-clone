import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div>
            <div className='navbar'>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
                
                {/* <div className='menu-bar'>
                <h3 className='menu-link'>Home</h3>
                <h3 className='menu-link'>Movies</h3>    
                <h3 className='menu-link'>Series</h3>
                </div> */}
                
                <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="netflix-avatar" />
            </div>
        </div>
    )
}

export default NavBar