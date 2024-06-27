
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { FormWrapper, FormField, FormTextarea, SubmitButton } from '../styles/StyledComponents';

const AddPostForm = ({ posts, setPosts }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length, // Use length to generate a new ID
      title,
      author,
      content,
      date,
      summary: content.slice(0, 100) + '...',
    };
    setPosts([...posts, newPost]);
    navigate(`/post/${newPost.id}`); // Navigate to new post page
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
      <SubmitButton type="submit">Add Post</SubmitButton>
    </FormWrapper>
  );
};

export default AddPostForm;
