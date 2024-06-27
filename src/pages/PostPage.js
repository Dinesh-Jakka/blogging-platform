import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, BlogTitle, SubmitButton, BlogOptionButtonsContainer } from '../styles/StyledComponents';
import { motion } from 'framer-motion';

const PostPage = ({ posts, deletePost }) => {
  const { id } = useParams();
  const post = posts[parseInt(id, 10)];
  const navigate = useNavigate();

  if (!post) return <p>Refresh Once</p>;

  const handleDelete = () => {
    deletePost(parseInt(id, 10));
    navigate('/'); 
  };

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BlogTitle>{post.title}</BlogTitle>
      <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <BlogOptionButtonsContainer>
        <Link to={`/edit/${id}`}>
          <SubmitButton>Edit Post</SubmitButton>
        </Link>
        <SubmitButton onClick={handleDelete} style={{ backgroundColor: '#e74c3c' }}>
          Delete Post
        </SubmitButton>
        <Link to="/">
          <SubmitButton style={{ backgroundColor: '#2ecc71' }}>Back to Home</SubmitButton>
        </Link>
      </BlogOptionButtonsContainer>
    </Container>
  );
};

export default PostPage;
