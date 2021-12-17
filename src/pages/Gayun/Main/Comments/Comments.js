import React from 'react';
import Comment from '../Comment/Comment';

function Comments(comments, handleComment) {
  const commentList = comments.comments;
  return (
    <ul class="comments">
      {commentList.map(com => (
        <Comment comment={com} handleComment={handleComment} />
      ))}
    </ul>
  );
}

export default Comments;
