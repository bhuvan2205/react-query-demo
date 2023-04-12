import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Spinner";

const Comment = ({ ids }) => {
  const fetchData = async (id) => {
    const res = await axios.get(`http://localhost:4000/comments/${id}`);
    return res.data;
  };

  const queryResults = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["comment", id],
        queryFn: () => fetchData(id),
      };
    }),
  });

  Array.from(queryResults).map((item) => {
    console.log(item);
  });
  console.log(queryResults);

  return (
    <div className="container">
      <h1>Comment</h1>
    </div>
  );
};

export default Comment;
