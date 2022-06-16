// Styling files
import './App.css';

// JS Libraries
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import AllBlogs from './components/AllBlogs';


function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  // For testing
  /*
  let blogPosts = [];
  blogPosts.push({
    'title': 'Test',
    'description': "This is a Test."
  });
  */

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' 
          element={<AllBlogs blogPosts={blogPosts} setBlogPosts={setBlogPosts}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
