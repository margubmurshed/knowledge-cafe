import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    return (
        <main className='md:w-2/3'>
            <h2>{blogs.length} posts</h2>
        </main>
    );
};

export default Blogs;