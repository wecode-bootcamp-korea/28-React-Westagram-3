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

  const newComment = newUserComment => {
    newUserComment.id = comments.length;
    comments.push(newUserComment);

    setComment(state => [...state]); // 새 배열을 만들어 넣어준거
    // setComment(state => state); // 기존의 거 그대로 돌려준거 -> KEY값이 안변했겠죠 = 리액트가 바뀐걸 모른다
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
