import React, { useEffect, useRef } from 'react';

interface CloudDetailHeadlineProps {
    setupAnimation: (element: HTMLElement) => void;
}

const CloudDetailHeadline: React.FC<CloudDetailHeadlineProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);
    return (

        <div
            ref={containerRef}
            className="gap-8 z-10"
        >
            <h1
                className='justify-start text-fuchsia-500 text-7xl font-bold bg-clip-text bg-gradient-to-l from-fuchsia-500 to-purple-200 [text-shadow:_10px_6px_5px_rgb(217_91_255_/_0.50)]'
                style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#4AD0FF",
                  }}
            >
                The World’s 1st Social Cloud
            </h1>
            <div
                className="self-stretch opacity-80 justify-start text-white text-4xl font-bold"
            >
                Where your unused device becomes a powerhouse for innovation
            </div>
        </div>

    );
};

export default CloudDetailHeadline;
