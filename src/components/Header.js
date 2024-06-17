import React from 'react'
import {Link} from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

function Header() {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We Are family owned Mediterraneran restuarant , focused on traditional recipes served with a mordern twist</p>
                <Link to="/booking"><button aria-label='on Click'>Reserve Table</button></Link>
            </div>

            <div className='banner-img'>
                <img src={bannerImg} alt="bannerImage"/>
            </div>
        </section>
    </header>
  )
}

export default Header
