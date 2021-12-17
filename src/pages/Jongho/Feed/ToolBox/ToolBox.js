import React from 'react';

const ToolBox = () => {
  return (
    <div class="toolBox">
      <div class="toolBoxThree">
        <i class="far fa-heart toolBoxElement"></i>
        <i class="far fa-comment toolBoxElement" id="speechBubble"></i>
        <i class="fas fa-external-link-alt toolBoxElement" id="share"></i>
      </div>
      <i class="far fa-bookmark toolBoxElement"></i>
    </div>
  );
};

export default ToolBox;
