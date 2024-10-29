import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title,body}= post
    return (
        <div className="bg-pink-500 text-white rounded-lg p-5 "> 
            <h4>Post Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link> 
        </div>
    );
};

export default Post;