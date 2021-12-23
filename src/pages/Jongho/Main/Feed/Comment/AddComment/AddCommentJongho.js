import React, { useState } from 'react';

const AddCommentJongho = props => {
  const [newInfo, setInfo] = useState({});
  const inputElement = document.getElementsByClassName('inputComment')[0];

  function confirmEnter(event) {
    if (event.key === 'Enter') {
      inputElement.value = null;
      return props.addUserInfo(newInfo);
    }
  }

  return (
    <div className="postComment">
      <input
        onKeyPress={event => confirmEnter(event)}
        onChange={event => {
          console.log(event);
          console.log(event.target);
          setInfo({
            id: null,
            user: '28기 윤종호',
            comment: event.target.value,
          });
        }}
        className="inputComment"
        type="text"
        placeholder="댓글 달기..."
      />
      <button
        onClick={() => {
          inputElement.value = null;
          return props.addUserInfo(newInfo);
        }}
        className="pushComment-Btn"
      >
        게시
      </button>
    </div>
  );
};

export default AddCommentJongho;
