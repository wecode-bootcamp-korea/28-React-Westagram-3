import React, { useState } from 'react';
import '../Comment/CommentJongho.scss';
import AddCommentJongho from './AddComment/AddCommentJongho';
import CommentLiJongho from './CommentLi/CommentLiJongho';
import '../Comment/AddComment/AddCommentJongho.scss';
import { useEffect } from 'react/cjs/react.development';

const CommentJongho = () => {
  const [comments, setComment] = useState([]);

  const deleteComment = comment => {
    setComment(comments.filter(x => x.id !== comment.id));
  };
  //   setComment(prev => {
  //     return [...prev].filter(x => {
  //       if (x.id !== idNum) {
  //         return x;
  //       }
  //     });
  //   });
  // };

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
    setComment([...comments, newUserComment]);
  };

  return (
    <>
      <div className="commentsAndButton">
        <ul className="commentList">
          {comments.map(comment => (
            <CommentLiJongho
              key={comment.id}
              comment={comment}
              deleteComment={deleteComment}
            />
          ))}
        </ul>
      </div>
      <AddCommentJongho addUserInfo={addUserInfo} />
    </>
  );
};
export default CommentJongho;
