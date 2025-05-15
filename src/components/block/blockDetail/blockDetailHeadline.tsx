import React, { useEffect, useRef } from 'react';

interface BlockDetailHeadlineProps {
    setupAnimation: (element: HTMLElement) => void;
}

const BlockDetailHeadline: React.FC<BlockDetailHeadlineProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);
    return (

        <div
            ref={containerRef}
            className="w-full gap-8 z-10"
        >
            <h1
                className='justify-start text-fuchsia-500 text-5xl lg:text-7xl font-bold bg-clip-text bg-gradient-to-l from-fuchsia-500 to-purple-200 [text-shadow:_10px_6px_5px_rgb(217_91_255_/_0.50)]'
                style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#4AD0FF",
                  }}
            >
                The World’s 1st Hybrid-Chain 
            </h1>
            <div
                className="mt-2 self-stretch opacity-80 justify-start text-white text-2xl lg:text-4xl font-bold"
            >
                A “Blockchain-DAG” hybrid that moves at the speed of thought perfect for micro-payments, DAOs and global governance
            </div>
        </div>

    );
};

export default BlockDetailHeadline;
