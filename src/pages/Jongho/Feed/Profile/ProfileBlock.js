import React from 'react';
import '../Profile/ProfileBlock.scss';

const ProfileBlock = () => {
  return (
    <div class="profileBlock">
      <div class="profileAccount">
        <img
          class="profileImage"
          src="https://user-images.githubusercontent.com/93215875/145150249-bc2e2a6e-bdd0-4c02-9005-1b748cc1a428.jpg"
          alt="profile"
        />
        <span class="accId">Wecode-Jongho</span>
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default ProfileBlock;
