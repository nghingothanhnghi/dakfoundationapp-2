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
            <div className='flex relative align-top'>
                <div className='flex align-top'>
                    <div className='relative w-266'>
                        <Circle type="type1" className='' />
                    </div>
                    <div className='relative w-310 left-[-39px] top-[-119px]'>
                        <Circle type="type2" className='' />
                    </div>
                    <div className='relative w-269 left-[-74px] top-[-6px]'>
                        <Circle type="type3" className='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudDetailFeaturesGrid;
