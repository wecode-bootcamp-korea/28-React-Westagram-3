import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Comment({ comment, deleteComment }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLikeComment = () => {
    if (isLiked === false) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  return (
    <li id={`"${comment.id}"`}>
      <a href={`https://www.instagram.com/${comment.userId}`}>
        {comment.userId}
      </a>
      <span>
        {comment.comment.split('\n').map((line, idx) => {
          return <div key={idx}>{line}</div>;
        })}
      </span>
      <button type="button" className="like_reply">
        <img
          alt="댓글 좋아요"
          src={`images/Minah/Main/${
            isLiked === false ? 'heart-blank.png' : 'heart-red.png'
          }`}
          onClick={toggleLikeComment}
        />
      </button>
      <button
        type="button"
        className="delete_reply"
        onClick={delComment => deleteComment(comment.id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}
