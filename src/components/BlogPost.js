// src/components/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, BlogTitle } from '../styles/StyledComponents';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts[parseInt(id, 10)];

  if (!post) return <p>Post not found</p>;

  return (
    <Container>
      <BlogTitle>{post.title}</BlogTitle>
      <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
    </Container>
  );
};

export default BlogPost;
