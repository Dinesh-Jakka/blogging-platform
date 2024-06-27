# Blogging Platform

A simple blogging platform built with React that allows users to read, write, edit, and delete blog posts. The platform uses React hooks for state management, local storage for data persistence, and styled-components for styling.

## Features

- **Blog Post List**: Display a list of blog posts with title, author, summary, and publication date.
- **View Post**: Click on a blog post to view the full content.
- **Add Post**: Form to add a new blog post with title, author, content, and publication date.
- **Edit Post**: Ability to edit an existing blog post.
- **Delete Post**: Ability to delete a blog post.
- **Responsive Design**: Supports both mobile and desktop views.
- **Animations**: Includes subtle animations for a better user experience.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Dinesh-Jakka/blogging-platform.git
    ```
   
2. Navigate to the project directory:
    ```bash
    cd blogging-platform
    ```
   
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- **`src`**: Contains the main source code.
  - **`components`**: Reusable UI components like `BlogList`, `BlogItem`, `BlogForm`, etc.
  - **`pages`**: Pages for the app like `HomePage`, `PostPage`, `AddPage`, and `EditPage`.
  - **`styles`**: Contains styled-components for styling.
  - **`utils`**: Utility functions and data.

## Components

### `App.js`

Handles routing and state management for blog posts. It defines routes for listing posts, adding a new post, viewing a post, and editing a post.

### `HomePage.js`

Displays the list of blog posts. It includes buttons for adding a new post and links for viewing and editing each post.

### `PostPage.js`

Shows the full content of a selected blog post. It includes options to edit or delete the post.

### `AddPage.js`

Provides a form for adding a new blog post. It validates input to ensure that all fields are filled before adding the post to local storage.

### `EditPage.js`

Allows editing of an existing blog post. It updates the post in local storage upon saving.

## Styling

Styled using `styled-components` for modular and reusable styles. Includes global styles and component-specific styles.


