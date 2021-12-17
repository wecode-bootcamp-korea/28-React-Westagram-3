import React from 'react';
import Comment from '../Comment/Comment';

function Comments(comments) {
  const commentList = comments.comments;
  console.log(commentList);
  return (
    <li class="comments">
      {commentList.map(com => (
        <Comment comment={com} />
      ))}
    </li>
  );
}

export default Comments;
