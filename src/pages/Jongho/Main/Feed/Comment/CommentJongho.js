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
      user: '28기 김가윤',
      comment: '28기 김가윤입니다.',
    },
    {
      id: 3,
      user: '28기 유호진',
      comment: '28기 유호진입니다',
    },
  ]);

  const newComment = newUserComment => {
    newUserComment.id = 4;
    comments.push(newUserComment);

    setComment(state => {
      return comments.map(comt => comt);
    });
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
          {/* {refreshComment()} */}
        </ul>
      </div>
      <AddCommentJongho addUserInfo={newComment} />
      {/* <button onClick={() => func()}>확인버튼</button> */}
    </>
  );
};

export default CommentJongho;
