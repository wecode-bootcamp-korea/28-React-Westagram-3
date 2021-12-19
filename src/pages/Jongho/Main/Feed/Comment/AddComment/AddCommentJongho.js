import React, { useState } from 'react';

const AddCommentJongho = props => {
  const [newInfo, setInfo] = useState({});

  function test1() {
    console.log('jongho');
  }

  return (
    <div class="postComment">
      <input
        onChange={event =>
          setInfo({
            id: null,
            user: '28기 윤종호',
            comment: event.target.value,
          })
        }
        class="inputComment"
        type="text"
        placeholder="댓글 달기..."
      />
      <button
        onClick={() => props.addUserInfo(newInfo)}
        class="pushComment-Btn"
      >
        게시
      </button>
    </div>
  );
};

export default AddCommentJongho;
