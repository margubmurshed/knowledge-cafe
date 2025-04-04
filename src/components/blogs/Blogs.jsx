import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({ handleBookmarks, bookmarks, handleReadTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <main className='md:w-2/3 '>
            {blogs.map(blog => <Blog blog={blog} handleBookmarks={handleBookmarks} bookmarks={bookmarks} handleReadTime={handleReadTime} key={blog.id} />)}
        </main>
    );
};

export default Blogs;