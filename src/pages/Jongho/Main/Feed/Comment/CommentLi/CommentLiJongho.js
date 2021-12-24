import React from 'react';

const CommentLiJongho = ({ comment, deleteComment }) => {
  const onDelete = () => {
    deleteComment(comment);
  };

  return (
    <li className="comments">
      <div>
        <span className="commentId accId">{comment.user}</span>
        <span className="commentSentence contText">{comment.comment}</span>
      </div>
      {/* <button name={props.id} onClick={props.delComment}> */}
      <img
        onClick={onDelete}
        className="delIcon"
        src="/images/Jongho/Main/bin.png"
      />
      {/* <p>login</p> */}
      {/* </button> */}
    </li>
  );
};

export default CommentLiJongho;
