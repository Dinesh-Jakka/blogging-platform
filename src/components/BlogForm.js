// src/components/BlogForm.js
import React, { useState } from 'react';
import { FormWrapper, FormField, FormTextarea, SubmitButton } from '../styles/StyledComponents';

const BlogForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, author, content, date, summary: content.slice(0, 100) + "..." });
    setTitle('');
    setAuthor('');
    setContent('');
    setDate('');
  };

  return (
    <FormWrapper as="form" onSubmit={handleSubmit}>
      <FormField
        required
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormField 
        required
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <FormTextarea 
        required
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <FormField
        required
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <SubmitButton type="submit">Add Post</SubmitButton>
    </FormWrapper>
  );
};

export default BlogForm;
