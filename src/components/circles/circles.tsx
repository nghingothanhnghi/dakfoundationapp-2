import React from 'react';

interface CircleProps {
  type: 'type1' | 'type2' | 'type3' | 'type4' | 'type5' | 'type6'; // Define the types of circles you have
  fill?: string;
  className?: string; // Add className prop
  icon?: React.ReactNode; // Add icon prop
}

const Circle: React.FC<CircleProps> = ({ type, fill = 'white', className, icon }) => {
  const renderIcon = () => {
    if (icon) {
      return (
        <foreignObject x="0" y="0" width="100%" height="100%">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          {icon}
        </div>
      </foreignObject>
      );
    }
    return null;
  };
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
          {renderIcon()}
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
          {renderIcon()}
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
          {renderIcon()}
        </svg>
      );
      case 'type4':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
            viewBox="0 0 266 267"
            fill="none"
            className={className} // Apply className
          >
            <path d="M109.794 0.847988L0.730713 43.7563C44.3101 146.587 123.838 223.807 218.777 266.484L265.525 159.034C198.076 128.344 141.473 73.5758 109.794 0.847988Z" fill={fill} />
            {renderIcon()}
          </svg>
        );
        case 'type5':
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%' }}
              viewBox="0 0 310 140"
              fill="none"
              className={className} // Apply className
            >
              <path d="M47.1059 0.00793015L0.341539 107.465C95.7688 146.349 205.309 150.973 309.082 112.622L266.175 3.56419C192.516 30.1244 115.013 26.9741 47.1059 0.00793015Z" fill={fill} />
              {renderIcon()}
            </svg>
          );
          case 'type6':
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
                viewBox="0 0 269 263"
                fill="none"
                className={className} // Apply className
              >
                <path d="M161.552 -0.0083453C129.831 66.84 74.2545 122.519 0.895721 153.038L43.7892 262.063C147.229 219.672 225.257 141.101 268.983 46.7836L161.552 -0.0083453Z" fill={fill} />
                {renderIcon()}
              </svg>
            );
    default:
      return null;
  }
};

export default Circle;
