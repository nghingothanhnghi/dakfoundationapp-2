import React, { useEffect, useRef } from 'react';
import Circle from '../../circles/circles';



interface BlockDetailFeaturesGridProps {
    setupAnimation: (element: HTMLElement, options?: { type?: string; direction?: 'vertical' | 'horizontal' }) => void;
}

const BlockDetailFeaturesGrid: React.FC<BlockDetailFeaturesGridProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
        if (logoRef.current) {
            setupAnimation(logoRef.current, { type: 'cloudLogo' });
        }
    }, [setupAnimation]);

    return (
        <div
            ref={containerRef}
            className='md:w:[65%] flex flex-col md:flex relative align-top mt-8'
        >
            <div className='relative md:left-[-23px] md:top-[-119px]'>

            </div>
            <div className='flex align-top max-md:flex-col relative'>
                <div className='relative w-[100px] md:w-[109px] 3xl:w-[295px]'>
                    <Circle
                        type="type4"
                        className=''
                    // icon={<img src={SmeIcon} alt="icon" style={{ width: '100', height: '100px' }} />}
                    />
                </div>
                <div className='relative w-[100px] md:w-[108px] md:top-[20px] 3xl:w-[285px]'>
                    <Circle
                        type="type5"
                        className=''
                    // icon={<img src={SmeIcon} alt="icon" style={{ width: '100', height: '100px' }} />}
                    />
                </div>
                <div className='relative w-[100px] md:w-[107px] 3xl:w-[288px]'>
                    <Circle
                        type="type6"
                        className=''
                    // icon={<img src={SmeIcon} alt="icon" style={{ width: '100', height: '100px' }} />}
                    />
                </div>
            </div>

        </div>
    );
};

export default BlockDetailFeaturesGrid;
