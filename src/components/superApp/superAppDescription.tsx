import React from "react";

export const SuperAppDescription: React.FC = () => {
  return (
    <section className="relative min-h-[460px] max-md:mt-10 max-md:max-w-full">
      <h1
        className="text-8xl font-bold bg-clip-text bg-[linear-gradient(347deg,#DE61E6_27.04%,#E4D2F3_58.95%)] max-md:max-w-full max-md:text-4xl"
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        DAK SuperApp
      </h1>
      <div className="mt-3.5 w-full max-md:max-w-full">
        <div className="w-full text-8xl font-bold min-h-[129px] max-md:max-w-full max-md:text-4xl">
          <h2
            className="bg-clip-text bg-[linear-gradient(347deg,#DE61E6_27.04%,#E4D2F3_58.95%)] max-md:max-w-full md:text-7xl"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Digital Twin
          </h2>
        </div>
        <div className="mt-16 max-w-full text-white w-[799px] max-md:mt-10">
          <h3 className="text-7xl font-bold max-md:max-w-full md:text-5xl">
          One App to Rule Your World
          </h3>
          <p className="mt-2.5 text-4xl leading-none max-md:max-w-full">
          Your face is the password, your voice is the command
          </p>
        </div>
      </div>
    </section>
  );
};
