import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-5'>
        <hr />
      </div>
      <div className='container mx-auto p-5 md:flex'>
        <Blogs />
        <Bookmarks />
      </div>
    </>
  )
}

export default App
