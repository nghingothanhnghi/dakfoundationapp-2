import * as React from "react";
import AiIcon from "../../assets/products/ai_icon.svg"

export const AiLogo: React.FC = () => {
  return (
    <section className="flex relative flex-col grow items-center mt-40 h-[412px] max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center px-5 py-24 max-w-full rotate-[-1.757587853035147e-8rad] w-[411px]">
        <img
          src={AiIcon}
          alt="DAK Cloud Logo"
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};
