import React from 'react';
import BlockFeaturedHow from '../../../assets/Block-featured-how.svg';

interface BlockShowCaseProps {
  // Add any props you need here
}

const BlockShowCase: React.FC<BlockShowCaseProps> = (props) => {
  return (
    <div className="block-showcase">
      <img src={BlockFeaturedHow} alt="Block Featured How" />
      {/* You can add more content here */}
    </div>
  );
};

export default BlockShowCase;