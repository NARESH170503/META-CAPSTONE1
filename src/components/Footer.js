import React from 'react';
import small_logo from '../images/small_logo.png';

const Footer = () => {
    return (
        <footer className=''>
            <section>
                <div className='company-info'>
                    <img src={small_logo} alt='' />
                    <p>We Are family owned Mediterraneran restuarant , focused on traditional recipes served with a mordern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About</a>
                        </li>
                        <li>
                            <a href='/'>Services</a>
                        </li>
                        <li>
                            <a href='/'>Menu</a>
                        </li>
                        <li>
                            <a href='/'>Reservation</a>
                        </li>
                        <li>
                            <a href='/'>Order Online</a>
                        </li>
                        <li>
                            <a href='/'>Login</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>contact</h3>
                    <ul>
                        <li>address: <br/> 123 town street, Chicago</li>
                        <li>phone: <br/> +00 123 456 7892</li>
                        <li>email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>social media links</h3>
                    <ul>
                        <li><a href='/'>facebook</a></li>
                        <li><a href='/'>instagram</a></li>
                        <li><a href='/'>twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
