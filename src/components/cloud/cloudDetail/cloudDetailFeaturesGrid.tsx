import React, { useEffect, useRef } from 'react';
import Circle from '../../circles/circles';
import CloudLogoIcon from '../../../assets/products/cloud_icon.png';


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
            <div className='flex relative align-center'>
                <div className='md:w:[65%] flex flex-col md:flex relative align-top mt-8'>
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
                    <div className='relative md:left-[-23px] md:top-[-119px]'>
                        <img className='object-contain w-full md:aspect-[1.70]' src={CloudLogoIcon}/> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudDetailFeaturesGrid;
