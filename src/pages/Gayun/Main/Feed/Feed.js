import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './Feed.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import { FaRegCommentDots } from 'react-icons/fa';
import { useRef } from 'react/cjs/react.development';
import { BsThreeDots } from 'react-icons/bs';
import Comments from '../Comments/Comments';

function Feed({ feed }) {
  const myId = 'me_2032';
  const commentData = feed.comment;
  const [comments, setComments] = useState(commentData);
  const commentRef = useRef();

  function deleteComment(comment) {
    const updated = comments;
    const filtered = updated.filter(com => {
      return com.id !== comment.id;
    });
    setComments(filtered);
  }

  function addComment(e) {
    e.preventDefault();
    let updated = comments;
    const newCommentVal = commentRef.current.value;
    updated = [
      ...updated,
      { id: uuid(), commentId: myId, commentText: newCommentVal },
    ];
    setComments(updated);
    commentRef.current.value = '';
  }

  function handleTextContent(text) {
    if (text.length > 30) {
      text = text.slice(0, 30);
      return (
        <>
          <p>{text}</p>
          <button className="more-text">...더보기</button>
        </>
      );
    } else {
      return text;
    }
  }

  return (
    <article className="feed-gayun">
      <section className="header">
        <span className="uploader">
          <span className="img-container profile-container">
            <img
              className="img profile-img"
              src={`images/Gayun/${feed.profileImg}`}
              alt=""
            />
          </span>
          <span className="id">{feed.feedId}</span>
        </span>
        <button>
          <BsThreeDots />
        </button>
      </section>
      <section className="img-content">
        <img src={`images/Gayun/${feed.imgContent}`} alt="" />
      </section>
      <section className="contents-wrap">
        <div className="button-container">
          <span>
            <button className="button">
              <BsSuitHeart />
            </button>
            <button className="button">
              <FaRegCommentDots />
            </button>
            <button className="button">
              <FiShare2 />
            </button>
          </span>
          <span>
            <button className="button">
              <BsBookmark />
            </button>
          </span>
        </div>
        <div className="people-who-like">
          <img src="images/Gayun/profile-img2.jpg" alt="" />
          <p className="text">
            {feed.likesCount[0]}님 외 {feed.likesCount.length}명이 좋아합니다.
          </p>
        </div>
        <div className="textContent">{handleTextContent(feed.textContent)}</div>
        <Comments comments={comments} deleteComment={deleteComment} />
      </section>
      <form className="comment-input">
        <input
          type="text"
          placeholder=" 댓글 달기..."
          className="text"
          ref={commentRef}
        />
        <button onClick={addComment}>게시</button>
      </form>
    </article>
  );
}

export default Feed;
