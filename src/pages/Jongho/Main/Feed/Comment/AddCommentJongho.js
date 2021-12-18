import React from 'react';
import './AddCommentJongho.scss';

const AddCommentJongho = () => {
  return (
    <div class="postComment">
      <input class="inputComment" type="text" placeholder="댓글 달기..." />
      <button class="pushComment-Btn">게시</button>
    </div>
  );
};

export default AddCommentJongho;
