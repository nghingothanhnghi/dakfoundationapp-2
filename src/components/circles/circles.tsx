import React from 'react';

interface CircleProps {
  type: 'type1' | 'type2' | 'type3'; // Define the types of circles you have
  fill?: string;
  className?: string; // Add className prop
}

const Circle: React.FC<CircleProps> = ({ type, fill = 'white', className }) => {
  switch (type) {
    case 'type1':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
          viewBox="0 0 266 267"
          fill="none"
          className={className} // Apply className
        >
          <path d="M109.788 266.103L0.724609 223.194C44.304 120.363 123.832 43.1437 218.771 0.466744L265.519 107.917C198.07 138.607 141.466 193.375 109.788 266.103Z" fill={fill} />
        </svg>
      );
    case 'type2':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
          viewBox="0 0 310 140"
          fill="none"
          className={className} // Apply className
        >
          <path d="M47.5805 139.943L0.816149 32.4864C96.2434 -6.3981 205.784 -11.022 309.556 27.3285L266.65 136.387C192.99 109.826 115.487 112.977 47.5805 139.943Z" fill={fill} />
        </svg>
      );
    case 'type3':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
          viewBox="0 0 269 263"
          fill="none"
          className={className} // Apply className
        >
          <path d="M161.547 262.96C129.826 196.111 74.2496 140.432 0.890838 109.914L43.7844 0.888275C147.224 43.2796 225.252 121.85 268.978 216.168L161.547 262.96Z" fill={fill} />
        </svg>
      );
    default:
      return null;
  }
};

export default Circle;
