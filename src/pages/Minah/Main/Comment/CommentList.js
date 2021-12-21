import Comment from './Comment.js';

export default function CommentList(props) {
  return (
    <div className="post_reply">
      <ul className="reply_wrap">
        {props.commentList.map(comment => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              userId={comment.userId}
              comment={comment.comment}
              isLiked={comment.isLiked}
              deleteComment={props.deleteComment}
            />
          );
        })}
      </ul>
    </div>
  );
}
