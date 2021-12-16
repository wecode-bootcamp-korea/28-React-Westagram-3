import React from 'react';

function Feed() {
  return (
    <article class="feed">
      <section class="header">
        <span class="uploader">
          <span class="img-container profile-container">
            <img class="img profile-img" src={feed.profileImg} alt="" />
          </span>
          <span class="id">{feed.feedId}</span>
        </span>
        <button>
          <i class="fas fa-ellipsis-h" />
        </button>
      </section>
      <section class="img-container">
        <img src={feed.imgContent} alt="" class="img-content" />
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
            src="images/profile-img2.jpg"
            alt=""
            // class={styles.people_who_like_img}
          />
          <p class="comment">
            {feed.likesCount[0]}님 외 {feed.likesCount.length}명이 좋아합니다.
          </p>
        </div>
        <div class={styles.textContent}>
          {handleTextContent(feed.textContent)}
        </div>
        <li class="comments">
          <Comments
            comments={feed.comment}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        </li>
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
