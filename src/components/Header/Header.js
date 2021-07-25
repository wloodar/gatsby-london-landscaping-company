import React, { useEffect, useRef } from 'react'
import * as s from './Header.module.scss';

import gsap from 'gsap';
import SplitText from '../../utils/Split3.min';
import FirstPic from '../../images/london-landscaping-beautiful-garden-renovation.jpg';

function Header() {

    const headerTextRef = useRef(null);
    const actionBtnRef = useRef(null);

    useEffect(() => {
        const split = new SplitText(headerTextRef.current, {
            type: "lines",
            linesClass: "lineChildren",
        });
        
        const splitParent = new SplitText(headerTextRef.current, {
            type: "lines",
            linesClass: "lineParent",
        });

        gsap.to(split.lines, {
            duration: 1.5,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        });

        gsap.to(actionBtnRef.current, {
            duration: 1,
            opacity: 1,
            ease: "power2" 
        }).delay(1.2);
    }, []);

    return (
        <header className={s.header}>
            <div className={s.header__pic1}>
                <img src={FirstPic} alt="" />
            </div>

            <div className={s.header__overlay}>
                <h1 ref={headerTextRef}>
                    ESlandscapesltd
                    <span>London Landscaping & Garden Maintenance</span>
                </h1>
                <a href="#" className="btn" ref={actionBtnRef}>Contact us</a>
            </div>
        </header>
    )
}

export default Header
