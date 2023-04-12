import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/posts");
        setLoading(false);
        setData(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="container">
      <section>
        <h1 className="heading">Fetcher using useEffect</h1>
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </section>
    </div>
  );
};

export default Home;
