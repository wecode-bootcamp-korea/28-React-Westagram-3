import { useEffect, useState } from 'react';
import Comment from './Comment.js';

export default function CommentList(props) {

  const commentList = props.commentList;

  return (
    <div className="post_reply">
      <ul className="reply_wrap">
        {commentList.map(comment => {
          return (
            <Comment key={comment.id} id={comment.id} userId={comment.userId} comment={comment.comment} isLiked={comment.isLiked} />
          );
        })}
      </ul>
    </div>
  );
}