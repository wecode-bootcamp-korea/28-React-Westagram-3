import React, { useState } from 'react';
import '../Comment/CommentJongho.scss';
import AddCommentJongho from './AddComment/AddCommentJongho';
import CommentLiJongho from './CommentLi/CommentLiJongho';
import '../Comment/AddComment/AddCommentJongho.scss';

const CommentJongho = () => {
  const [comments, setComment] = useState([
    {
      id: 1,
      user: '28기 정민아',
      comment: '28기 정민아입니다.',
    },
    {
      id: 2,
      user: '28기 이가윤',
      comment: '28기 김가윤입니다.',
    },
    {
      id: 3,
      user: '28기 유호진',
      comment: '28기 유호진입니다',
    },
  ]);

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
