import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo as largeHeroVideo, smallHeroVideo } from '../utils';

function Hero() {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : largeHeroVideo);

    useGSAP(()=>{
        gsap.to('#hero', {opacity: 1, delay:2})
        gsap.to('#cta', {opacity: 1, y:-50, delay:2.5})
    }, [])

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(largeHeroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        };
    }, []);

    return (
        <section className='w-full nav-height bg-black  relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>iPhone 15 Pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted loop src={videoSrc} type="video/mp4">
                    </video>
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href='#highlights' className='btn'>
                    Buy
                </a>
                <p className='font-normal text-xl'> From $199/Month or $999</p>
            </div>
        </section>
    );
}

export default Hero;
