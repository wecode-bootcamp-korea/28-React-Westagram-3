import React from 'react';
import { v4 as uuid } from 'uuid';
import './Story.scss';

function Story({ stories }) {
  return (
    <div className="story-top-gayun">
      {stories &&
        stories.map(story => (
          <span key={uuid()} className="container">
            <div className="img-container">
              <img
                className="profile-img"
                src={`images/Gayun/${story.profileImg}`}
                alt="story-img"
              />
            </div>
            <div className="top-story__id">{story.profileId}</div>
          </span>
        ))}
    </div>
  );
}

export default Story;
