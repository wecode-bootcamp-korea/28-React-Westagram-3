import { useRef, useState } from 'react';
import CommentList from '../Comment/CommentList';
import './Feed.scss';

export default function Feed(props) {

    const [commentContent, setCommentContent] = useState({
        "id": '',
        "userId": '',
        "comment": '',
        "isLiked": false
    });

    const writeComment = (e) => {
        const content = e.target.value;
        const id = props.commentList.length + 1;
        const comment = {
            "id": id,
            "userId": sessionStorage.getItem("userId"),
            "comment": content,
            "isLiked": false
        }
        setCommentContent(comment);
    }

    const textAreaHeight = useRef(null);
    const [taHeight, setTaHeight] = useState(0);

    const resizeTextarea = (e) => {
        e.target.style.height = '1px';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setTaHeight(e.target.scrollHeight);
        if (e.key === 'Enter') {
            if (!e.shiftKey) {
                writeComment(e);
                postNewComment(commentContent);
                e.preventDefault();
            }
            if (e.shiftKey) {
                e.target.value = `${e.target.value + '\t'}`;
            }
        }
    }

    const postNewComment = (commentContent) => {
        props.postComment(commentContent);
        textAreaHeight.current.value = '';
    }

    return (
        <div className="post_box">
            <article>
                <div className="post_wrap">
                    <div className="post_header">
                        <div className="post_account">
                            <img src="images/Minah/Main/profile1.jpg" className="post_profile" alt="프사" />
                            <a href="https://www.instagram.com/lee_heung_yong_cake/">lee_heung_yong_cake</a>
                        </div>
                        <button className="post_info">
                            <img src="images/Minah/Main/option.png" className="post_option" alt="더보기" />
                        </button>
                    </div>
                    <div className="post_body">
                        <div className="post_photo_wrap">
                            <div className="post_photo_container">
                                <img src="images/Minah/Main/christmas_cookies1.jpg" className="post_photos" alt="사진1" />
                                <img src="images/Minah/Main/christmas_cookies2.jpg" className="post_photos" alt="사진2" />
                            </div>
                            <img src="images/Minah/Main/left-chevron.png" className="post_prev btn_size" alt="이전" />
                            <img src="images/Minah/Main/right-chevron.png" className="post_next btn_size" alt="다음" />
                        </div>
                        <div className="post_footer">
                            <div className="post_icons_wrap">
                                <div className="post_icons_box1">
                                    <button className="post_icons_btn"><img src="images/Minah/Main/heart-blank.png"
                                        className="post_icons" alt="하트" />
                                    </button>
                                    <button className="post_icons_btn">
                                        <img src="images/Minah/Main/chat.png" className="post_icons" alt="댓글" />
                                    </button>
                                    <button className="post_icons_btn">
                                        <img src="images/Minah/Main/dm.png" className="post_icons" alt="다이렉트 메시지" />
                                    </button>
                                </div>
                                <div className="post_icons_box2">
                                    <button className="post_icons_btn">
                                        <img src="images/Minah/Main/bookmark_default.png" className="post_icons"
                                            alt="북마크" />
                                    </button>
                                </div>
                            </div>
                            <div className="post_content_wrap">
                                <div className="post_likes">
                                    <p>좋아요 28개</p>
                                </div>
                                <div className="post_content">
                                    <a
                                        href="https://www.instagram.com/lee_heung_yong_cake/">lee_heung_yong_cake</a>
                                    <p>달콤한 크리스마스 쿠키들이 준비되었습니다. 베이커리 각 지점 방문 시 구매할 수 있습니다.</p>
                                </div>
                                <CommentList commentList={props.commentList} />
                                <div className="post_created_at">
                                    <p>4시간 전</p>
                                </div>
                            </div>
                            <form className="post_reply_wrap">
                                <button className="emoticon_btn">
                                    <img alt="이모티콘" src="images/Minah/Main/smile.png" className="emoticon" />
                                </button>
                                <textarea placeholder="댓글 달기..." className="write_reply" onChange={writeComment} ref={textAreaHeight} onKeyDown={resizeTextarea}></textarea>
                                <button type="button" className="submit_reply" onClick={() => postNewComment(commentContent)} disabled={commentContent["comment"] ? false : true}>게시</button>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </div >
    );
}