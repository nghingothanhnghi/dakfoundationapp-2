import React from 'react';

const CloudIconsRow = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/79f49d5f6b335654f1dbe4c5ea751ddd326727e1?placeholderIfAbsent=true", alt: "Cloud Service Icon 1", width: "w-28" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/035c9caadcc4c19827cfab8bc50aef3c45111a52?placeholderIfAbsent=true", alt: "Cloud Service Icon 2", width: "w-28" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d71cafe5e6578e06cd4df5553bd59d525e8a8301?placeholderIfAbsent=true", alt: "Cloud Service Icon 3", width: "w-[107px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/895c274d9d94f18b661fe6894d551d0d5466a121?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/75b9e1d5c726571a99335d0d018aa9d8fb577de0?placeholderIfAbsent=true", alt: "Cloud Service Icon 4", width: "w-[122px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/90bab599c966a21bf069144bae868be162cd13b6?placeholderIfAbsent=true", alt: "Cloud Service Icon 5", width: "w-[100px]" },
  ];

  return (
    <section
      ref={ref}
      className="flex relative flex-wrap gap-2.5 items-center self-center mt-48 ml-32 max-w-full min-h-[122px] w-[753px] max-md:mt-10"
      aria-label="Cloud service partners"
    >
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className={`object-contain shrink-0 self-stretch my-auto ${icon.width} aspect-square`}
        />
      ))}
    </section>
  );
});

export default CloudIconsRow;
