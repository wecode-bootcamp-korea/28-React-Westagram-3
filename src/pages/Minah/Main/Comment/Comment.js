import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Comment({ id, userId, comment, deleteComment }) {
  const [isLike, setIsLike] = useState(false);

  const toggleLikeComment = () => {
    if (isLike === false) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };

  return (
    <li id={`"${id}"`}>
      <a href={`https://www.instagram.com/${userId}`}>{userId}</a>
      <span>
        {comment.includes('\n')
          ? comment.split('\n').map((line, idx) => {
              return <div key={idx}>{line}</div>;
            })
          : comment}
      </span>
      <button type="button" className="like_reply">
        <img
          alt="댓글 좋아요"
          src={`images/Minah/Main/${
            isLike === false ? 'heart-blank.png' : 'heart-red.png'
          }`}
          onClick={toggleLikeComment}
        />
      </button>
      <button
        type="button"
        className="delete_reply"
        onClick={delComment => deleteComment(id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}
