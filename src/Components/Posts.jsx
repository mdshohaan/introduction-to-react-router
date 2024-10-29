import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {   
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts:{posts.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
