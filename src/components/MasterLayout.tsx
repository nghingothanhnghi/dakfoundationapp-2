import React from 'react';
import HeroContent from './hero/heroContent';
import CloudContent from './cloud/cloudContent';

const MasterLayout: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <main className="flex-grow">
                <HeroContent />
                <CloudContent/>
            </main>
        </div>
    );
};

export default MasterLayout;
