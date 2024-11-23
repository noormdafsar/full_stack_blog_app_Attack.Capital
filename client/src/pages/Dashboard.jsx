import { useState, useEffect } from 'react';
import { getPosts, createPost, deletePost } from '../services/api';
import { PostCard } from '../components/PostCard';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const { user } = useAuth();

  useEffect(() => {
    fetchUserPosts();
  }, [user._id]);

  const fetchUserPosts = async () => {
    try {
      const response = await getPosts(user._id);
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(newPost);
      setNewPost({ title: '', content: '' });
      await fetchUserPosts(); // fetch posts immediately after creating a new post
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      fetchUserPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Content"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Post
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Your Posts</h2>
        <div className="space-y-6">
          {posts && posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              canEdit={true}
              onDelete={handleDelete}
            />
          ))}
          {posts.length === 0 && (
            <p className="text-gray-500">You haven't created any posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};