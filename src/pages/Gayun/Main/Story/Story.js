import React from 'react';
import storiesData from '../../data/story.json';
import { v4 as uuid } from 'uuid';
import './Story.scss';

function Story() {
  return (
    <div className="story-top">
      {storiesData.map(story => (
        <span key={uuid()} class="container">
          <div class="img-container">
            <img
              class="profile-img"
              src={`images/Gayun/${story.profileImg}`}
              alt="story-img"
            />
          </div>
          <div class="top-story__id">{story.profileId}</div>
        </span>
      ))}
    </div>
  );
}

export default Story;
