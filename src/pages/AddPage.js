import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, FormField, FormTextarea, SubmitButton, ErrorMessage } from '../styles/StyledComponents';

const AddPage = ({ addPost }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !content || !date) {
      setError('Please fill out all fields.');
      return;
    }

    // Clear previous error message if any
    setError('');

    // Create new post object
    const newPost = {
      title,
      author,
      content,
      date,
      summary: content.slice(0, 100) + '...'
    };

    // Add new post to local storage
    addPost(newPost);

    // Navigate to home page after adding post
    navigate('/');
  };

  return (
    <FormWrapper as="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormField
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormField
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <FormTextarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <FormField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <SubmitButton type="submit">Add Post</SubmitButton>
    </FormWrapper>
  );
};

export default AddPage;
