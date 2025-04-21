import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera, useGLTF} from '@react-three/drei';

const HeroNeonGlobe: React.FC = () => {
    return (
        <div className="w-[1707.83px] h-[1106.49px] relative origin-top-left rotate-[162.85deg] overflow-hidden">
            <img className="w-[567.50px] h-[568.31px] left-[582.07px] top-[186.24px] absolute" src="https://placehold.co/567x568" />
            <img className="w-44 h-44 left-[979.96px] top-[494.28px] absolute" src="https://placehold.co/171x170" />
            <img className="w-[1521.47px] h-[952.29px] left-[98.36px] top-[95.30px] absolute" src="https://placehold.co/1521x952" />
        </div>
    );
};

export default HeroNeonGlobe;
