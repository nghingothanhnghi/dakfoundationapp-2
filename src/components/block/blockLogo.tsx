import React from "react";
import BlockIcon from "../../assets/products/block_icon.png"


const BlockLogo = React.forwardRef<HTMLDivElement, any>((_props, ref) => {
  return (
    <section className="flex relative flex-col grow items-center mt-40 max-md:mt-10 max-md:max-w-full">
      <div ref={ref} className="flex flex-col justify-center px-5 py-24 max-w-full">
        <img
          src={BlockIcon}
          alt="DAK Cloud Logo"
          className="object-contain w-full aspect-[1.78]"
        />
      </div>
    </section>
  );
});

export default BlockLogo;
