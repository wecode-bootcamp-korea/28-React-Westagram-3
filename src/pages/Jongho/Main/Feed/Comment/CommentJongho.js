import React, { useState } from 'react';
import '../Comment/CommentJongho.scss';
import AddCommentJongho from './AddComment/AddCommentJongho';
import CommentLiJongho from './CommentLi/CommentLiJongho';
import '../Comment/AddComment/AddCommentJongho.scss';
import { useEffect } from 'react/cjs/react.development';

const CommentJongho = () => {
  const [comments, setComment] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/Jongho/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(userData => {
        // console.log;
        setComment(userData);
      });
  }, []);

  const addUserInfo = newUserComment => {
    newUserComment.id = comments.length + 1;
    console.log(newUserComment);
    comments.push(newUserComment);

    setComment(state => [...state]);
  };

  return (
    <>
      <div class="commentsAndButton">
        <ul class="commentList">
          {comments.map(comt => (
            <CommentLiJongho
              key={comt.id}
              user={comt.user}
              comment={comt.comment}
            />
          ))}
        </ul>
      </div>
      <AddCommentJongho addUserInfo={addUserInfo} />
    </>
  );
};

export default CommentJongho;
