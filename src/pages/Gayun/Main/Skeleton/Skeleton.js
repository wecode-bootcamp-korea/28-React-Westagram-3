import React from 'react';
import './Skeleton.scss';
import { BsThreeDots } from 'react-icons/bs';

function Skeleton() {
  return (
    <div className="skeleton">
      <header className="header">
        <span className="uploader">
          <div className="img" />
          <p />
        </span>
        <BsThreeDots color="white" />
      </header>
      <section className="img-content" />
      <section className="comments">
        <div className="comment">
          <div className="profile" />
          <div className="commentText" />
        </div>
        <div className="comment">
          <div className="profile" />
          <div className="commentText" />
        </div>
      </section>
    </div>
  );
}

export default Skeleton;
