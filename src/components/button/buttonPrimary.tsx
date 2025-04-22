import React from 'react';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: string; // Optional width prop
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, width = '18rem', ...props }) => {
  return (
    <div className="relative" style={{ width, height: '100px' }}>
      <div className="h-28 absolute bg-fuchsia-500 rounded-[100px] blur-md" style={{ width: '100%' }} />
      <button
        className="h-24 px-12 py-6 absolute bg-[radial-gradient(ellipse_85.59%_107.08%_at_86.30%_87.50%,_rgba(0,_0,_0,_0.23)_0%,_rgba(0,_0,_0,_0)_86%)] rounded-[109px] shadow-[4px_38px_62px_0px_rgba(0,0,0,0.50)] shadow-[inset_-3px_-4px_7px_0px_rgba(255,255,255,0.15)] inline-flex justify-center items-center"
        style={{ width: '100%', top: '9px' }}
        {...props}
      >
        <div className="text-white text-4xl font-bold font-['Inter'] [text-shadow:_10px_4px_5px_rgb(217_91_255_/_0.50)]">
          {label}
        </div>
      </button>
    </div>
  );
};

export default ButtonPrimary;
