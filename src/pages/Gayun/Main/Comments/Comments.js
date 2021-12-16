import React from 'react';
import Comment from '../Comment/Comment';

function Comments(comments) {
  console.log(comments);
  return (
    <li class="comments">
      {/* {comments.comments.map(com => (
        <Comment comment={com} />
      ))} */}
    </li>
  );
}

export default Comments;
