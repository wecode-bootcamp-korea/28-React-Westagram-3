import React from 'react';
import Comment from '../Comment/Comment';

function Comments({ comments, deleteComment }) {
  console.log(comments);
  const commentList = comments;
  return (
    <ul class="comments">
      {commentList.map(com => (
        <Comment comment={com} deleteComment={deleteComment} />
      ))}
    </ul>
  );
}

export default Comments;
