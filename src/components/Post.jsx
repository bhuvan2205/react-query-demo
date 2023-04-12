import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";

const Post = () => {
  const { id } = useParams();

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4000/posts/${id}`);
    return res.data;
  };
  console.log(id);
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="container">
      <h1 className="heading">Post</h1>
      <p>{data.title}</p>
      <p>{data.author}</p>
    </div>
  );
};

export default Post;
