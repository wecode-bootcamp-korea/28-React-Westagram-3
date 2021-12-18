import React from 'react';
import Comment from '../Comment/Comment';
import { v4 as uuid } from 'uuid';

function Comments({ comments, deleteComment }) {
  const commentList = comments;
  return (
    <ul class="comments">
      {commentList.map(com => (
        <Comment key={uuid()} comment={com} deleteComment={deleteComment} />
      ))}
    </ul>
  );
}

export default Comments;
