import React from 'react';
import { TiDelete } from 'react-icons/ti';
import './Comment.scss';

function Comment({ comment, deleteComment }) {
  const onDelete = () => {
    deleteComment(comment);
  };

  return (
    <li className="comment-gayun">
      <span className="comment-container">
        <span className="id">{comment.commentId}</span>
        <span>{comment.commentText}</span>
      </span>
      <button className="delete" onClick={onDelete}>
        <TiDelete className="delete-icon" />
      </button>
    </li>
  );
}

export default Comment;
