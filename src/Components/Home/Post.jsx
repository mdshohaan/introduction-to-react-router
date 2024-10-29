import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post
    const userStyle ={
        border:'2px solid yellow',
        padding: '5px',
        borderRadius:'20px'
    }
    
    return (
        <div style={userStyle}>
            <h4>Post of Id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post ${id}`}>Post details</Link>
        </div>
    );
};

export default Post;