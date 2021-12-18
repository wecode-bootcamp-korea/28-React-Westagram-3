import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './Feed.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { FiCornerDownLeft, FiShare2 } from 'react-icons/fi';
import { FaRegCommentDots } from 'react-icons/fa';
import { useRef } from 'react/cjs/react.development';
import { TiDelete } from 'react-icons/ti';
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
          <button dclass="more-text">...더보기</button>
        </>
      );
    } else {
      return text;
    }
  }

  return (
    <article class="feed">
      <section class="header">
        <span class="uploader">
          <span class="img-container profile-container">
            <img
              class="img profile-img"
              src="images/gayun/default_profile-img.png"
              alt=""
            />
          </span>
          <span class="id">{feed.feedId}</span>
        </span>
        <button>
          <i class="fas fa-ellipsis-h" />
        </button>
      </section>
      <section class="img-content">
        <img src={`images/Gayun/${feed.profileImg}`} alt="" />
      </section>
      <section class="contents-wrap">
        <div class="button-container">
          <span>
            <button class="button">
              <BsSuitHeart />
            </button>
            <button class="button">
              <FaRegCommentDots />
            </button>
            <button class="button">
              <FiShare2 />
            </button>
          </span>
          <span>
            <button class="button">
              <BsBookmark />
            </button>
          </span>
        </div>
        <div class="people-who-like">
          <img
            src="images/Gayun/profile-img2.jpg"
            alt=""
            // class={styles.people_who_like_img}
          />
          <p class="text">
            {feed.likesCount[0]}님 외 {feed.likesCount.length}명이 좋아합니다.
          </p>
        </div>
        <div class={styles.textContent}>
          {handleTextContent(feed.textContent)}
        </div>
        <Comments comments={comments} deleteComment={deleteComment} />
      </section>
      <form class="comment-input">
        <input
          type="text"
          placeholder=" 댓글 달기..."
          class="text"
          ref={commentRef}
        />
        <button onClick={addComment}>게시</button>
      </form>
    </article>
  );
}

export default Feed;
