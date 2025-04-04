import React from 'react';
import PropTypes from 'prop-types';
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, bookmarks, handleReadTime }) => {
    const { title, featuredImage, authorImage, authorName, postDate, readingTime, hashtags } = blog;
    const isBookmarked = bookmarks.find(bookmark => bookmark.id == blog.id);
    return (
        <div className='mb-10 space-y-5'>
            <img src={featuredImage} alt={title} className='w-full rounded-md' />
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <img src={authorImage} alt={authorName} className='w-14 h-14 rounded-full object-cover' />
                    <div>
                        <h4 className='font-bold'>{authorName}</h4>
                        <p className='text-gray-600'>{postDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{readingTime} min read</p>
                    {isBookmarked ? <FaBookmark onClick={() => handleBookmarks(blog)} className="cursor-pointer select-none"/>
                        : <FaRegBookmark onClick={() => handleBookmarks(blog)} className="cursor-pointer select-none"/>}
                </div>
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='flex gap-5 text-gray-600'>{hashtags.map(hashtag => <span key={hashtag}>{hashtag}</span>)}</p>
            <button className='text-[#6047EC] underline font-semibold' onClick={() => handleReadTime(readingTime)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;