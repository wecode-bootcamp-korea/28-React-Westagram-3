import React from 'react';

const CommentLiJongho = props => {
  return (
    <div>
      <li className="comments">
        <span class="commentId accId">{props.user}</span>
        <span class="commentSentence contText">{props.comment}</span>
      </li>
    </div>
  );
};

export default CommentLiJongho;
