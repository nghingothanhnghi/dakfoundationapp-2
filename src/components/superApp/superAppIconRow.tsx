import * as React from "react";
import PhoneIcon from "../../assets/icons/phone_icon.png";
import ChartIcon from "../../assets/icons/chart_icon.png";
import ActivityIcon from "../../assets/icons/activity_icon.png";
import ShoppingIcon from "../../assets/icons/shopping_icon.png";
import AiIcon from "../../assets/products/ai_icon.svg";
import SmileIcon from "../../assets/icons/smile_icon.png";

export const SuperAppIconsRow: React.FC = () => {
  const icons = [
    { src: PhoneIcon, alt: "Cloud Service Icon 1", width: "w-28" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: ChartIcon, alt: "Cloud Service Icon 2", width: "w-28" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: ActivityIcon, alt: "Cloud Service Icon 2", width: "w-28" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: ShoppingIcon, alt: "Cloud Service Icon 2", width: "w-28" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/895c274d9d94f18b661fe6894d551d0d5466a121?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: AiIcon, alt: "Cloud Service Icon 4", width: "w-[122px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0b00e9b6f36a83a31ad0e10a7c336813c30a913?placeholderIfAbsent=true", alt: "Separator", width: "w-8" },
    { src: SmileIcon, alt: "Cloud Service Icon 5", width: "w-[100px]" },
  ];

  return (
    <section
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
};
