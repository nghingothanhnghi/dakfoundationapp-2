import * as React from "react";

interface CloudBackgroundSectionProps {
  children: React.ReactNode;
}

export const CloudBackgroundSection: React.FC<CloudBackgroundSectionProps> = ({
  children,
}) => {
  return (
    <main className="flex relative flex-col px-20 py-28 w-full min-h-[1117px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe850586a47258fd17035599f570eee37404e00?placeholderIfAbsent=true"
        alt="Background pattern"
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      {children}
    </main>
  );
};
