import './Post.css'
import { Link } from "react-router-dom";
import React from 'react'
import images from '../../Images/Blog1.png'
import { Button } from '@mui/material'
export default function Post(props) {

  const image = props.image;
  const body = props.body;
  const date = props.date;
  const title = props.title;
  const DeleteHandler = props.deleteHandler;

  return (
    <div className="post">
      <img
        className="postImage"
        src={images}
        alt=""
      />
      <div className="postInfo">

        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {title}
          </Link>
        </span>
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">
        {body}
      </p>
      <div className='buttonDiv'>
        <Button variant="outlined" color="error" onClick={() => DeleteHandler(props.id)}>Delete</Button>
      </div>
    </div>
  );
}