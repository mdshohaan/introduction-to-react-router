import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title,body}= post
    const navigate = useNavigate()


const handleShowDetail =()=>{
navigate(`/post/${id}`)
}

    return (
        <div className="bg-pink-500 text-white rounded-lg p-5 "> 
            <h4>Post Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link> 
            <button onClick={handleShowDetail}>Click to see Details</button>
        </div>
    );
};

export default Post;