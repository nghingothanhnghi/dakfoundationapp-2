import React from 'react';

const CloudLogo = React.forwardRef<HTMLDivElement, any>((_props, ref) => {
  return (
    <section className="flex relative flex-col grow items-center mt-40 h-[412px] max-md:mt-10 max-md:max-w-full">
      <div ref={ref} className="flex overflow-hidden flex-col justify-center px-5 py-24 max-w-full rotate-[-1.757587853035147e-8rad] w-[411px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27ebc1d8844bc0bf0d626b849f1f891f146555ef?placeholderIfAbsent=true"
          alt="DAK Cloud Logo"
          className="object-contain w-full aspect-[1.78]"
        />
      </div>
    </section>
  );
});

export default CloudLogo;
