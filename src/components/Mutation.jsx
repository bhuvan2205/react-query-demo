import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postData = async () => {
  const res = await axios.post("http://localhost:4000/comments", {
    comment: "This is for testing",
  });
  return res.data;
};

const Mutation = () => {
  const {
    mutate: addPost,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(postData);
  return (
    <div className="container">
      <h1 className="heading">Mutation</h1>

      <button onClick={() => addPost()} disabled={isLoading}>
        {isLoading ? "Submitting..." : "Add Post"}
      </button>

      {isError && <div className="error">Error submitting data</div>}

      {isSuccess && <div className="success">Data submitted successfully!</div>}
    </div>
  );
};

export default Mutation;
