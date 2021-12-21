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
      const response = await fetch('http://localhost:3000/data/Minah/commentData.json');
      const data = await response.json();
      setCommentList(data);
    }
    fetchData();
  }, []);

  const postComment = useCallback((commentContent) => {
    setCommentList([...commentList, commentContent]);
    console.log(commentList.length);
  }, [commentList]);

  return (
    commentList.length > 0 && (
      <div className="main_minah">
        <NavigationBar />
        <main>
          <section>
            <Story />
            <Feed commentList={commentList} postComment={(commentContent) => postComment(commentContent)} />
          </section>
          <aside>
            <Aside />
          </aside>
        </main>
      </div>)
  );
}