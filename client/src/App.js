// Styling files
import './App.css';

// JS Libraries
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import AllBlogs from './components/AllBlogs';
import OneBlog from './components/OneBlog';


function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' 
          element={<AllBlogs blogPosts={blogPosts} setBlogPosts={setBlogPosts}/>}/>
          <Route path='/blog/:id' element={<OneBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
