import React, { useEffect, useRef } from 'react';
import Circle from '../../circles/circles';


interface CloudDetailFeaturesGridProps {
    setupAnimation: (element: HTMLElement) => void;
}

const CloudDetailFeaturesGrid: React.FC<CloudDetailFeaturesGridProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
        >
            <div className='flex flex-row md:flex relative align-top mt-8'>
                <div className='flex align-top max-md:flex-col relative'>
                    <div className='relative w-[266px] md:w-[150px] sm:w-[150px]'>
                        <Circle type="type1" className='' />
                    </div>
                    <div className='relative w-[310px] md:w-[178px] sm:w-[200px] left-[-39px] top-[-119px] md:left-[-20px] md:top-[-57px]'>
                        <Circle type="type2" className='' />
                    </div>
                    <div className='relative w-[269px] md:w-[154px] sm:w-[180px] left-[-74px] top-[-6px] md:left-[-38px] md:top-[-3px]'>
                        <Circle type="type3" className='' />
                    </div>
                </div>
                <div className='relative mt-4'>
                    {/* This div is now below the type1, type2, and type3 blocks */}
                    <p>Content below type1, type2, and type3 blocks</p>
                </div>
            </div>
        </div>
    );
};

export default CloudDetailFeaturesGrid;
