import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
          <div className={s.item}>
            <img src='https://avatarfiles.alphacoders.com/247/thumb-247810.jpg'></img>
            { props.message }
            <div>
            <span>like</span> { props.likesCount }
          </div>
        </div>
    )
}

export default Post;