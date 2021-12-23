import React from 'react';
import '../../../Main/Feed/Profile/ProfileBlock.scss';
const ProfileBlock = () => {
  return (
    <div className="profileBlock">
      <div className="profileAccount">
        <img
          className="profileImage"
          src="https://user-images.githubusercontent.com/93215875/145150249-bc2e2a6e-bdd0-4c02-9005-1b748cc1a428.jpg"
          alt="profile"
        />
        <span className="accId">Wecode-Jongho</span>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default ProfileBlock;
