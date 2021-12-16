import React from 'react';

function Story() {
  return (
    <div className="story">
      <span class="container">
        <div class="img-container profile-container">
          <img class="profile-img" src={story.profileImg} alt="story-img" />
        </div>
        <div class="top-story__id">{story.profileId}</div>
      </span>
    </div>
  );
}

export default Story;
