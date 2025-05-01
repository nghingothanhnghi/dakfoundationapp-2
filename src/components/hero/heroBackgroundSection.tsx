import React from "react";

interface HeroBackgroundSectionProps {
  children: React.ReactNode;
  background: string; // CSS background value (color, gradient, etc.)
  isImage?: boolean;  // Optional prop to specify if the background is an image
}

export const HeroBackgroundSection: React.FC<HeroBackgroundSectionProps> = ({
  children,
  background,
  isImage = false,
}) => {
  // Create the style object based on the type of background
  const style = isImage 
    ? { backgroundImage: `url(${background})` } 
    : { background };

  return (
    <main
      className="flex relative flex-col px-20 py-10 w-full min-h-[1117px] overflow-hidden bg-cover bg-center"
      style={style}
    >
      {children}
    </main>
  );
};
