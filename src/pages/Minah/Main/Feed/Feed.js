import { useCallback, useEffect, useRef, useState } from 'react';
import CommentList from '../Comment/CommentList';
import './Feed.scss';

export default function Feed({ feed }) {
  const [comments, setComments] = useState([...feed.commentList]);
  const [commentContent, setCommentContent] = useState('');

  const writeComment = e => {
    const content = e.target.value;
    const commentsLength = comments.length;
    const maxId = comments[commentsLength - 1].id;
    let tempId;
    if (commentsLength < maxId) {
      tempId = maxId + 1;
    } else {
      tempId = commentsLength + 1;
    }
    const id = tempId;
    const comment = {
      id: id,
      userId: sessionStorage.getItem('userId'),
      comment: content,
      isLiked: false,
    };
    setCommentContent(comment);
  };

  const textAreaHeight = useRef(null);
  const [taHeight, setTaHeight] = useState(0);

  const resizeTextarea = e => {
    e.target.style.height = '1px'; // 댓글입력창 초기화
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTaHeight(e.target.scrollHeight);

    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        writeComment(e);
        postNewComment(commentContent);
        e.target.style.height = '1px';
        e.preventDefault();
      }

      if (e.shiftKey) {
      }
    }
  };

  const postComment = useCallback(
    commentContent => {
      setComments([...comments, commentContent]);
    },
    [comments]
  );

  const postNewComment = commentContent => {
    postComment(commentContent);
    textAreaHeight.current.value = null;
    setCommentContent('');
  };

  const deleteComment = delComment => {
    const tempComments = comments.filter(comment => comment.id !== delComment);
    setComments(tempComments);
  };

  const totalPhotoWidth = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const totalPhotoNum = feed.postImg.length;

  useEffect(() => {
    const photoWidth = totalPhotoWidth.current.clientWidth;
    totalPhotoWidth.current.style.transform = `translateX(${
      -photoWidth * currentIdx
    }px)`;
  }, [currentIdx]);

  const showNextPhoto = () => {
    if (currentIdx < totalPhotoNum - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const showPrevPhoto = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  return (
    <div className="post_box">
      <article>
        <div className="post_wrap">
          <div className="post_header">
            <div className="post_account">
              <img
                alt="프사"
                src={`images/Minah/Main/${feed.profileImg}`}
                className="post_profile"
              />
              <a href={`https://www.instagram.com/${feed.userId}`}>
                {feed.userId}
              </a>
            </div>
            <button className="post_info">
              <img
                alt="더보기"
                src="images/Minah/Main/option.png"
                className="post_option"
              />
            </button>
          </div>
          <div className="post_body">
            <div className="post_photo_wrap">
              <div className="post_photo_container" ref={totalPhotoWidth}>
                {feed.postImg &&
                  feed.postImg.map((img, idx) => {
                    return (
                      <img
                        key={idx}
                        alt={`사진${idx + 1}`}
                        src={`images/Minah/Main/${img}`}
                        className="post_photos"
                      />
                    );
                  })}
              </div>
              {feed.postImg.length > 1 && (
                <>
                  <img
                    src="images/Minah/Main/left-chevron.png"
                    className="post_prev btn_size"
                    alt="이전"
                    onClick={showPrevPhoto}
                  />
                  <img
                    src="images/Minah/Main/right-chevron.png"
                    className="post_next btn_size"
                    alt="다음"
                    onClick={showNextPhoto}
                  />
                </>
              )}
            </div>
            <div className="post_footer">
              <div className="post_icons_wrap">
                <div className="post_icons_box1">
                  <button className="post_icons_btn">
                    <img
                      alt="하트"
                      src="images/Minah/Main/heart-blank.png"
                      className="post_icons"
                    />
                  </button>
                  <button className="post_icons_btn">
                    <img
                      alt="댓글"
                      src="images/Minah/Main/chat.png"
                      className="post_icons"
                    />
                  </button>
                  <button className="post_icons_btn">
                    <img
                      alt="다이렉트 메시지"
                      src="images/Minah/Main/dm.png"
                      className="post_icons"
                    />
                  </button>
                </div>
                <div className="post_icons_box2">
                  <button className="post_icons_btn">
                    <img
                      alt="북마크"
                      src="images/Minah/Main/bookmark_default.png"
                      className="post_icons"
                    />
                  </button>
                </div>
              </div>
              <div className="post_content_wrap">
                <div className="post_likes">
                  <p>좋아요 {feed.likes}개</p>
                </div>
                <div className="post_content">
                  <a href={`https://www.instagram.com/${feed.userId}`}>
                    {feed.userId}
                  </a>
                  <p>{feed.content}</p>
                </div>
                <CommentList
                  commentList={comments}
                  deleteComment={delComment => deleteComment(delComment)}
                />
                <div className="post_created_at">
                  <p>{feed.createdAt}</p>
                </div>
              </div>
              <form className="post_reply_wrap">
                <button className="emoticon_btn">
                  <img
                    alt="이모티콘"
                    src="images/Minah/Main/smile.png"
                    className="emoticon"
                  />
                </button>
                <textarea
                  placeholder="댓글 달기..."
                  className="write_reply"
                  onChange={writeComment}
                  ref={textAreaHeight}
                  onKeyDown={resizeTextarea}
                />
                <button
                  type="button"
                  className="submit_reply"
                  onClick={() => postNewComment(commentContent)}
                  disabled={!commentContent.comment}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
