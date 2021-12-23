import React, { useState } from 'react';
import '../Comment/CommentJongho.scss';
import AddCommentJongho from './AddComment/AddCommentJongho';
import CommentLiJongho from './CommentLi/CommentLiJongho';
import '../Comment/AddComment/AddCommentJongho.scss';
import { useEffect } from 'react/cjs/react.development';

const CommentJongho = () => {
  const [comments, setComment] = useState([]); //초기값 []을 넣어준 이유는 초기 렌더링 시 유저정보 가져오는 기능을 useEffect에 넣어줬기 때문에 첫 렌더링 할때 초기값이 없으면 밑에 map() 메서드에서 오류가 발생한다

  useEffect(() => {
    //첫 렌더링 시 유저정보 가져오기
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
    // console.log(newUserComment);
    comments.push(newUserComment);

    setComment(state => [...state]);
  };
  const deleteComment = e => {
    console.log(e.target);
  };
  return (
    <>
      <div className="commentsAndButton">
        <ul className="commentList">
          {comments.map(comt => (
            <CommentLiJongho
              key={comt.id}
              id={comt.id}
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
