import * as React from "react";

interface CloudBackgroundSectionProps {
  children: React.ReactNode;
  background: string; // CSS background value (color, gradient, etc.)
  isImage?: boolean;  // Optional prop to specify if the background is an image
}

export const CloudBackgroundSection: React.FC<CloudBackgroundSectionProps> = ({
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
    className="flex relative flex-col px-20 py-28 w-full min-h-[1117px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
    style={style}>
      {children}
    </main>
  );
};
