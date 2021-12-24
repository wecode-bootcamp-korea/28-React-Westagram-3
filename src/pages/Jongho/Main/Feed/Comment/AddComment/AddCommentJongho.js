import React, { useState } from 'react';

const AddCommentJongho = props => {
  const [newInfo, setInfo] = useState({});
  const [commentInput, setInput] = useState('');

  function submitComment(event) {
    if (event.key === 'Enter') {
      setInput('');
      return props.addUserInfo(newInfo);
    }
  }

  return (
    <div className="postComment">
      <input
        onKeyPress={event => submitComment(event)}
        onChange={event => {
          const { value } = event.target;
          setInput(value);
          setInfo({
            id: null,
            user: '28기 윤종호',
            comment: value,
          });
        }}
        className="inputComment"
        type="text"
        placeholder="댓글 달기..."
      />
      <button
        onClick={() => {
          setInput('');
          props.addUserInfo(newInfo);
        }}
        className="pushComment-Btn"
      >
        게시
      </button>
    </div>
  );
};

export default AddCommentJongho;
