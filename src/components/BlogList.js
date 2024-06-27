// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogListWrapper, BlogItem, BlogTitle, BlogSummary, ReadMore } from '../styles/StyledComponents';
import { motion } from 'framer-motion';

const BlogList = ({ posts }) => (
  <BlogListWrapper>
    {posts.map((post, index) => (
      <BlogItem
        key={index}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BlogTitle>{post.title}</BlogTitle>
        <p>By {post.author}</p>
        <BlogSummary>{post.summary}</BlogSummary>
        <p>{new Date(post.date).toLocaleDateString()}</p>
        <ReadMore>
          <Link to={`/post/${index}`}>Read More 
          </Link>
        </ReadMore>
      </BlogItem>
    ))}
  </BlogListWrapper>
);

export default BlogList;
