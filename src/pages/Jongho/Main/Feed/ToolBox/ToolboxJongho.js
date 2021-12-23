import React from 'react';
// import '../ToolBox/ToolboxJongho.scss';
import '../../../Main/Feed/ToolBox/ToolboxJongho.scss';

const ToolBox = () => {
  return (
    <div className="toolBox">
      <div className="toolBoxThree">
        <i className="far fa-heart toolBoxElement"></i>
        <i className="far fa-comment toolBoxElement" id="speechBubble"></i>
        <i className="fas fa-external-link-alt toolBoxElement" id="share"></i>
      </div>
      <i className="far fa-bookmark toolBoxElement"></i>
    </div>
  );
};

export default ToolBox;
