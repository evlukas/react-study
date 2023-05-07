import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="container">
      {post && (
        <>
          <h1>{post.title}</h1>
          <span style={{ color: "red" }}>{post.body}</span>
          <Link to={`/posts/${id}/edit`}>Edit</Link>
        </>
      )}
    </div>
  );
}

export default SinglePage;
