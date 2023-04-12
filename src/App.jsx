import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Mutation from "./components/Mutation";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comment ids={[1, 2]} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/mutation" element={<Mutation />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </Router>
  );
};

export default App;
