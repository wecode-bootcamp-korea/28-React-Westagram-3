import Aside from "./Aside/Aside";
import Feed from "./Feed/Feed";
import NavigationBar from "./NavigationBar/NavigationBar";
import Story from "./Story/Story";
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './MainMinah.scss';
import { useCallback, useEffect, useState } from "react";

export default function MainMinah() {

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/data/Minah/feedData.json');
      const data = await response.json();
      setCommentList(data[0]["commentList"]);
    }
    fetchData();
  }, []);

  const postComment = useCallback((commentContent) => {
    setCommentList([...commentList, commentContent]);
  }, [commentList]);

  const deleteComment = (delComment) => {
    const tempComments = commentList.filter(comment => comment.id !== delComment);
    setCommentList(tempComments);
  }

  return (
    commentList.length >= 0 && (
      <div className="main_minah">
        <NavigationBar />
        <main>
          <section>
            <Story />
            <Feed commentList={commentList} postComment={(commentContent) => postComment(commentContent)} deleteComment={(delComment) => deleteComment(delComment)} />
          </section>
          <aside>
            <Aside />
          </aside>
        </main>
      </div>)
  );
}