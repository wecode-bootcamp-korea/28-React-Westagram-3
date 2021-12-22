import Comment from './Comment.js';

export default function CommentList({ commentList, deleteComment }) {
  return (
    <div className="post_reply">
      <ul className="reply_wrap">
        {commentList &&
          commentList.map(comment => {
            // return console.log(comment);
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                userId={comment.userId}
                comment={comment.comment}
                isLiked={comment.isLiked}
                deleteComment={deleteComment}
              />
            );
          })}
      </ul>
    </div>
  );
}
