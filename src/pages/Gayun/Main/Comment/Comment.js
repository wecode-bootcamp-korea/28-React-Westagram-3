import React from 'react';
import { TiDelete } from 'react-icons/ti';

function Comment({ comment }) {
  console.log(comment);
  return (
    <ul class="comment-container">
      {/* <span class="comment">
        <p class="id">dd</p>
        <span>{comment.commentText}</span>
      </span>
      <button class="delete">
        <TiDelete />
      </button> */}
    </ul>
  );
}

export default Comment;
