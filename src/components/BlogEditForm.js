// src/components/BlogEditForm.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Updated import
import { FormWrapper, FormField, FormTextarea, SubmitButton } from '../styles/StyledComponents';

const BlogEditForm = ({ posts, updatePost }) => {
  const { id } = useParams();
  const post = posts[parseInt(id, 10)];
  const navigate = useNavigate(); // Updated hook

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const [date, setDate] = useState(post.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(id, { title, author, content, date, summary: content.slice(0, 100) + '...' });
    navigate('/'); // Updated navigation
  };

  return (
    <FormWrapper as="form" onSubmit={handleSubmit}>
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
      <SubmitButton type="submit">Update Post</SubmitButton>
    </FormWrapper>
  );
};

export default BlogEditForm;
