import React from "react";

interface HeroBackgroundSectionProps {
  children: React.ReactNode;
  background: string; // Accepts either a CSS color/gradient or an image URL
  isImage?: boolean;  // Optional prop to specify if the background is an image
}

export const HeroBackgroundSection: React.FC<HeroBackgroundSectionProps> = ({
  children,
  background,
  isImage = false,
}) => {

    const backgroundStyle = isImage
    ? { backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: background }; // Allows for complex CSS backgrounds

  return (
    <main
     className="flex relative flex-col px-20 py-28 w-full min-h-[1117px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
     style={backgroundStyle}
     >
      {children}
    </main>
  );
};
