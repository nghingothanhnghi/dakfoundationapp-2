import React from 'react';
import HeroContent from './hero/heroContent';

const MasterLayout: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <main className="flex-grow">
                <HeroContent />
            </main>
        </div>
    );
};

export default MasterLayout;
