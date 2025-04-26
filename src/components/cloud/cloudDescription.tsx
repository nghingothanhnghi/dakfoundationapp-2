import React from 'react';

const CloudDescription = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <section ref={ref} className="relative min-h-[460px] max-md:mt-10 max-md:max-w-full">
    <h1
      className="text-8xl font-bold bg-clip-text bg-[linear-gradient(347deg,#DE61E6_27.04%,#E4D2F3_58.95%)] max-md:max-w-full max-md:text-4xl"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      DAK CLOUD
    </h1>
    <div className="mt-3.5 w-full max-md:max-w-full">
      <div className="w-full text-8xl font-bold min-h-[129px] max-md:max-w-full max-md:text-4xl">
        <h2
          className="bg-clip-text bg-[linear-gradient(347deg,#DE61E6_27.04%,#E4D2F3_58.95%)] max-md:max-w-full max-md:text-4xl"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The People's Cloud
        </h2>
      </div>
      <div className="mt-16 max-w-full text-white w-[799px] max-md:mt-10">
        <h3 className="text-7xl font-bold max-md:max-w-full max-md:text-4xl">
          Powering the World
        </h3>
        <p className="mt-2.5 text-4xl leading-none max-md:max-w-full">
          Decentralized - Borderless - Rewarding
        </p>
      </div>
    </div>
  </section>
  );
});

export default CloudDescription;

