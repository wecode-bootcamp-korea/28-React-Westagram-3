import { useEffect, useState } from 'react';
import Comment from './Comment.js';

export default function CommentList() {

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/Minah/commentData.json')
      .then(res => res.json())
      .then(data => setCommentList(data))
      .catch(error => console.log(error));
  }, []);

  console.log(commentList);

  return (
    <div className="post_reply">
      <ul className="reply_wrap">
        {commentList.map(comment => {
          return (
            <Comment key={comment.id} userId={comment.userId} comment={comment.comment} isLiked={comment.isLiked} />
          );
        })}
      </ul>
    </div>
  );
}