import React from "react";

import Line15 from '../../assets/circle/Line-15.svg'
import Line16 from '../../assets/circle/Line-16.svg'
import Line17 from '../../assets/circle/Line-17.svg'
import Line18 from '../../assets/circle/Line-18.svg'

import Part15 from '../../assets/circle/part-15.svg'
import Part16 from '../../assets/circle/part-16.svg'
import Part17 from '../../assets/circle/part-17.svg'
import Part18 from '../../assets/circle/part-18.svg'

import CloudIcon from "../../assets/products/cloud_icon.png"
import BlockIcon from "../../assets/products/block_icon.png"
import AiIcon from "../../assets/products/ai_icon.svg"
import SuperAppIcon from "../../assets/products/superApp_icon.png"


export const HeroFeaturesGrid: React.FC = () => {
  return (
    <div className="w-full max-w-[1370px] h-[508px]">
      <div className="relative h-[508px] w-full">
        {/* Feature 1: Globalization with Decentralized Cloud */}
        <div className="absolute w-[473px] h-[508px] top-0 left-0">
          <div className="relative h-[508px]">
            <img
              className="absolute w-[204px] h-[287px] top-0 left-[269px]"
              alt="Vector"
              src={Part15}
            />

            <div className="w-[351px] items-end gap-3.5 top-[156px] left-0 flex flex-col absolute">

              <img
                className="relative self-stretch w-[182px] h-[280.22px] top-0 left-0 "
                alt="Line"
                src={Line15}
              />
              <div className="w-[353px] relative h-[58px] mr-[-2.00px]">
                <div className="absolute w-[351px] top-0 left-0 font-sans font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Globalization <br />
                  with Decentralized Cloud
                </div>
              </div>
            </div>

            <div className="absolute w-[110px] h-[110px] top-[89px] left-[308px]">
              <img
                className="w-[110px] h-[110px]"
                alt="Cloud icon"
                src={CloudIcon}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Transparent Governance with Hybrid-Chain */}
        <div className="absolute w-[339px] h-[293px] top-[215px] left-[371px]">
          <div className="relative h-[293px]">
            <img
              className="absolute w-[285px] h-[201px] top-0 left-[30px]"
              alt="Vector"
              src={Part16}
            />

            <div className="w-[339px] items-center gap-3.5 top-[181px] left-0 flex flex-col absolute">
              <img
                className="relative self-stretch w-full h-10"
                alt="Line"
                src={Line16}
              />

              <div className="w-[341px] relative h-[58px] mr-[-2.00px]">
                <div className="absolute w-[339px] top-0 left-0 font-sans font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Transparent Governance with Hybrid-Chain
                </div>
              </div>
            </div>

            <div className="absolute w-[110px] h-[110px] top-[54px] left-[118px]">
              <img
                className="w-[110px] h-[110px]"
                alt="Block icon"
                src={BlockIcon}
              />
            </div>
          </div>
        </div>
        {/* Feature 3: Automatic Production with Personal AI */}
        <div className="absolute w-[317px] h-[293px] top-[215px] left-[702px]">
          <div className="relative h-[293px]">
            <img
              className="absolute w-72 h-[201px] top-0 left-0"
              alt="Vector"
              src={Part17}
            />

            <div className="w-[289px] items-center gap-5 top-[171px] left-7 flex flex-col absolute">
              <img
                className="relative self-stretch w-full h-11"
                alt="Line"
                src={Line17}
              />

              <div className="w-[291px] relative h-[58px] mr-[-2.00px]">
                <div className="absolute w-[289px] top-0 left-0 font-sans font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Automatic Production with Personal AI
                </div>
              </div>
            </div>

            <div className="absolute w-[63px] h-[90px] top-[66px] left-[113px]">
              <img
                className="w-[63px] h-[90px]"
                alt="Vector"
                src={AiIcon}
              />
            </div>
          </div>
        </div>

        {/* Feature 4: Ultimate Personalization with One-In-All SuperApp */}
        <div className="absolute w-[452px] h-[508px] top-0 left-[918px]">
          <div className="relative h-[508px]">
            <img
              className="absolute w-[204px] h-[287px] top-0 left-0"
              alt="Vector"
              src={Part18}
            />

            <div className="w-[331px] items-start gap-5 top-[156px] left-[121px] flex flex-col absolute">
            <img
                    className="relative w-[168px] h-[274px] object-cover"
                    alt="Line"
                    src={Line18}
                  />
              {/* <div className="relative w-[168px] h-[274px] rotate-180 opacity-50">
                <div className="relative h-[274px]">
    
                </div>
              </div> */}

              <div className="w-[333px] relative h-[58px] mr-[-2.00px]">
                <div className="absolute w-[331px] top-0 left-0 font-sans font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
                  Ultimate Personalization <br />
                  with One-In-All SuperApp
                </div>
              </div>
            </div>

            <div className="absolute w-[110px] h-[110px] top-[91px] left-[51px]">
              <img
                className="w-[87px] h-[52px]"
                alt="Vector"
                src={SuperAppIcon}
              />

            </div>
          </div>
        </div>


      </div>
    </div>

  );
};
