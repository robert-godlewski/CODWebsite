import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <img alt='Comet of Dreams Logo' src='#'/>
            <nav>
                <Link to={`/`}>Blog</Link>
                {/* 
                Later create an actual eCommerse store for my music.
                Also might change the a tag to a Link tag
                */}
                <a href='https://cometofdreams.bandcamp.com/' alt='Link to the Comet of Dreams Bandcamp store'>Store</a>
                <Link to={`#`}>About</Link>
                <Link to={`#`}>Contact</Link>
            </nav>
        </header>
    );
};


export default NavBar;
