import React from 'react';

const CommentLiJongho = props => {
  return (
    <div>
      <li id={props.id} className="comments">
        <div>
          <span className="commentId accId">{props.user}</span>
          <span className="commentSentence contText">{props.comment}</span>
        </div>
        <img
          // onClick={}
          class="delIcon"
          src="/images/Jongho/Main/bin.png"
        />
      </li>
    </div>
  );
};

export default CommentLiJongho;
