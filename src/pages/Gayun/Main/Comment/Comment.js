import React from 'react';
import { TiDelete } from 'react-icons/ti';

function Comment({ comment, deleteComment }) {
  const onDelete = () => {
    deleteComment(comment);
  };

  return (
    <li class="comment-container">
      <span class="comment">
        <p class="id">{comment.commentId}</p>
        <span>{comment.commentText}</span>
      </span>
      <button class="delete" onClick={onDelete}>
        <TiDelete size="15" />
      </button>
    </li>
  );
}

export default Comment;
