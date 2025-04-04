import React from 'react';
import authorImage from '../../assets/author.jpg';

const Header = () => {
    return (
        <header>
            <div className="container mx-auto flex justify-between items-center p-5">
                <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
                <img src={authorImage} alt="author_image" className='w-12 h-12 rounded-full object-cover'/>
            </div>
        </header>
    );
};

export default Header;