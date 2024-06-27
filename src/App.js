import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';
import AddPage from './pages/AddPage'; 
import GlobalStyle from './styles/GlobalStyles';
import { initialPosts } from './utils/data';

const App = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const updatePost = (id, updatedPost) => {
    const updatedPosts = posts.map((post, index) =>
      index === parseInt(id, 10) ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post, index) => index !== id);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const addPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} setPosts={setPosts} addPost={addPost} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} deletePost={deletePost} />} />
        <Route path="/edit/:id" element={<EditPage posts={posts} updatePost={updatePost} />} />
        <Route path="/add" element={<AddPage addPost={addPost} />} />
      </Routes>
    </Router>
  );
};

export default App;
