import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Comment(props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLikeComment = () => {
    if (isLiked === false) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  return (
    <li id={`"${props.id}"`}>
      <a href={`https://www.instagram.com/${props.userId}`}>{props.userId}</a>
      <span>
        {/* {props.comment} */}
        {props.comment.split('\n').map(line => {
          return <div>{line}</div>;
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
        onClick={delComment => props.deleteComment(props.id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}
