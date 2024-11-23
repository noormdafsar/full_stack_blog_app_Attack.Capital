# Vide Demo for complete running Blog Application, so please have a look


https://github.com/user-attachments/assets/f792f140-7717-4e56-a029-1da467a1fe9b


# Personal Blog Platform

A **Personal Blog Platform** where users can sign up, log in, and post articles. Users can view all posts, filter them by author, and manage their own posts with features like **edit** and **delete**. The backend is built with **Node.js** and **Express**, and the frontend is developed using **React.js** with **JavaScript**. The platform is styled using **Tailwind CSS** for a responsive and clean user interface.

---

## Features

### Backend (Node.js/Express)
- **API Endpoints**:
  - `POST /signup`: Registers a new user with email and password.
  - `POST /login`: Authenticates a user and returns a session token.
  - `POST /post`: Allows authenticated users to post a new article.
  - `GET /posts`: Retrieves all posts.
  - `GET /posts?author=userId`: Retrieves posts by a specific author.
  - **Additional Features**:
    - `PUT /post/:id`: Allows users to edit their existing posts.
    - `DELETE /post/:id`: Allows users to delete their posts.

- **Data Models**:
  - **User**:
    - `id`: Unique identifier for the user.
    - `email`: Email address of the user.
    - `passwordHash`: Securely hashed password.
  - **Post**:
    - `id`: Unique identifier for the post.
    - `title`: Title of the blog post.
    - `content`: Content of the blog post.
    - `authorId`: The user who created the post.
    - `createdAt`: Timestamp for when the post was created.

- **Authentication**:
  - JWT-based authentication for secure session handling.
  - Passwords are hashed and stored securely.

---

### Frontend (React.js/JavaScript)
- **Pages**:
  - `/`: Homepage that lists all blog posts.
  - `/login`: Login page for users to access their accounts.
  - `/signup`: Sign-up page for new users.
  - `/dashboard`: Private route where logged-in users can:
    - Post new articles.
    - View, edit, and delete their own posts.

- **Routing**:
  - Client-side routing with protected routes for authenticated users.

- **Rendering**:
  - Server-side rendering for the homepage to enhance performance.
  - Static generation for blog posts (if applicable).

- **Styling**:
  - Utilizes **Tailwind CSS** for a clean and responsive UI.
  - Ensures accessibility and mobile responsiveness.

---

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB for the database.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/noormdafsar/full_stack_blog_app_Attack.Capital
   cd full_stack_blog_app_Attack.Capital
