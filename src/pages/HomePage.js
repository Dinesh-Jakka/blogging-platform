import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import BlogForm from '../components/BlogForm';
import { Container, MainHeading} from '../styles/StyledComponents';
import { initialPosts } from '../utils/data';

const HomePage = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Container>
      <MainHeading>Blog Posts</MainHeading>
      <BlogForm addPost={addPost} />
      <BlogList posts={posts} />
    </Container>
  );
};

export default HomePage;
