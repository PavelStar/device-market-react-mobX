import React from 'react'
import { Link } from 'react-router-dom'
import Brands from '../Brands/Brands'
import Logo from '../Header/Logo/Logo'
import "./Footer.scss"

const Footer = () => {



    return (
        <footer className='footer'>
            <div className="footer__inner">
                <Logo logoColor={'logo__footer'} />
            </div>
        </footer>
    )
}

export default Footer