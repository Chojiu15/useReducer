import React from "react";
import { Link } from "react-router-dom";
import { posts } from "./posts";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Blog Posts</h1>
      </header>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h4>{post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;