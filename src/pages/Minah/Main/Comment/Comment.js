import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Comment(props) {
  return (
    <li id={props.id}>
      {<a href="https://www.instagram.com/${props.userId}">{props.userId}</a>}
      <span>{props.comment}</span>
      <button type="button" class="like_reply">
        <img src="images/Minah/Main/heart-blank.png" class="heart_blank" />
        <img src="images/Minah/Main/heart-red.png" class="heart_red" />
      </button>
      <button type="button" class="delete_reply">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}