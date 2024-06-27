// src/pages/EditPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormWrapper, FormField, FormTextarea, SubmitButton } from '../styles/StyledComponents';

const EditPage = ({ posts, updatePost }) => {
  const { id } = useParams();
  const post = posts[parseInt(id, 10)];
  const navigate = useNavigate();

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [content, setContent] = useState(post.content);
  const [date, setDate] = useState(post.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(id, { title, author, content, date, summary: content.slice(0, 100) + '...' });
    navigate(`/post/${id}`); // Redirect to post page after editing
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

export default EditPage;
