import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = time => {
    const newReadTime = readTime + parseInt(time);
    setReadTime(newReadTime)
  }

  const handleBookmarks = (blog) => {
    const isAlreadyBookmarked = bookmarks.find(bookmark => bookmark.id == blog.id);
    let newBookmarks;
    if (isAlreadyBookmarked) {
      const restBookmarks = bookmarks.filter(bookmark => bookmark.id != blog.id);
      newBookmarks = restBookmarks;
    }
    else {
      newBookmarks = [...bookmarks, blog];
    }
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header />
      <div className='container mx-auto px-5'>
        <hr />
      </div>
      <div className='container mx-auto p-5 md:flex gap-5'>
        <Blogs handleBookmarks={handleBookmarks} bookmarks={bookmarks} handleReadTime={handleReadTime}/>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}/>
      </div>
    </>
  )
}

export default App
