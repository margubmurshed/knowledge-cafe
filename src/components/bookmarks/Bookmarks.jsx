import React from 'react';

const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className='md:w-1/3'>
            <div className='bg-[#6047ec1a] rounded-md mb-3 border border-[#6047EC] p-5 text-center'>
                <h2 className='font-bold text-[#6047EC] text-2xl'>Spent time on read : {readTime} min</h2>
            </div>
            <div className='bg-gray-100 border border-gray-500 p-5 rounded-md'>
                <h2 className='font-bold text-2xl text-gray-800 mb-3'>Bookmarked Blogs : {bookmarks.length}</h2>
                <div className='space-y-3'>
                    {bookmarks.map(bookmark => <div className='bg-white px-3 py-5 rounded-md font-semibold text-gray-700'>{bookmark?.title || ""}</div>)}
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;