import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='leftNav'>
                    Coupons Code Plateform
                </div>
                <div className='rightLogo'>
                    <ul>
                        <li>
                            <img className='svg' src='https://freesvg.org/img/1515716962.png' />
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <img className='svg' src='https://freesvg.org/img/abstract-user-flat-1.png' />
                            <a href='#'>About</a>
                        </li>
                        <li> <img className='svg' src='https://freesvg.org/img/1653009807e-commerce-svgrepo-com.png' />
                            <a href='#'>Products</a>
                        </li>
                        <li><img className='svg' src='https://freesvg.org/img/abstract-user-flat-1.png' />
                            <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
