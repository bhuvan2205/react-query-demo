import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Posts = () => {
  const fetchData = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    return res.data;
  };

  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
      // select: (posts) => {
    //   const filteredPosts = posts.filter((post) => post.title.startsWith('r'));
    //   return filteredPosts;
    // },
    onSuccess: () => {
      console.log("Data fetched completed");
    },
    onError: () => {
      console.log("Data fetched failed");
    },
  });

  const { isLoading, data, isError, error } = query;

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="container">
      <h1 className="heading">Fetcher using React query</h1>
      {data &&
        data.map((item) => (
          <p key={item.id}>
            <Link to={`/posts/${item.id}`} className="links">{item.title}</Link>
          </p>
        ))}
    </div>
  );
};

export default Posts;
