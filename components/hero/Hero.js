/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import styled from 'styled-components';
import Image from "next/image";
import Aboutme from "../../public/aboutme.png";
import styles from "../../styles/Home.module.css";
import { useEffect } from 'react';



const Container = styled.div`
    width: 100%;
    height: 90vh;
    padding-inline: 15.5%;
    padding-bottom: 2rem;
    text-align: left;
    overflow-x: hidden;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: #222222;

    div.hero-content {
            position: relative;
            width: 40vw;
            margin-top: 3rem;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            gap: 1rem;
            left: -35vw;
            animation: heroContentContainer 500ms linear forwards;
            animation-delay: 1.1s;
            @keyframes heroContentContainer {
                to {
                    left: 0;
                }
            }

            h1 {
                font-size: 36px;
                font-weight: 500;
                padding: 0;
                margin: 0;
            }
            p {
                font-size: 18.5px;
                line-height: 1.4rem;
            }

            button {
                font-size: 1.4rem;
                width: 157px;
                height: 44px;
            }
        }

    div {
        
        :nth-child(1) {
            width: 59%;
            border: 15px solid #444444;
            background-color: #222222;
            z-index: 1;

            p.first-name {
                width: 0;
                position: absolute;
                font-weight: bolder;
                color: transparent;
                background: #fff;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: textclip 500ms linear forwards;
                animation-delay: 300ms;
            }
            @keyframes textclip {
                10% {
                    width: 5vw;
                }
                100% {
                    width: 20vw;
                }
            }
            

            p.last-name {
                width: 0;
                position: absolute;
                font-weight: 700;
                color: transparent;
                background: #007CED;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: lastTextclip 700ms linear forwards;
                animation-delay: 700ms;
            }
            @keyframes lastTextclip {
                10% {
                    width: 5vw;
                }
                100% {
                    width: 25vw;
                }
            }

            img {
                position: absolute;
                animation: imgAnimation 700ms linear forwards;
            }

            
            @keyframes imgAnimation {
                0% {
                    top: 40vh;
                }
                25% {
                    top: 10vh;
                }
                50% {
                    top: -10vh;
                }
                75% {
                    top: -24vh;
                }
                100% {
                    top: -34.7vh;
                }
            }
        }

        button {
            box-sizing: border-box;
            background-color: transparent;
            color: #fff;
            font-family: inherit;
            font-weight: 500;
            border: 2px solid #007CED;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
                background-color: #007CED;
            }
        }
    }
    

    div#hidden-block {
        width: 100%;
        height: 213px;
        position: absolute;
        left: 0;
        background: #222222;
        bottom: 0;
        z-index: 1;

        
        // 23 inch 
        @media(height: 937px) {
            height: 16.4vh;
        }

        // 22 inch
        @media(min-width: 1460px) and (max-width: 1900px) {
            height: 28.2vh;
        }
        // 22 inch in window mode
        @media(height: 907px) {
            height: 24vh;
        }

        // 19 inch 
        @media(min-width: 1380px) and (max-width: 1450px) {
            height: 27.6vh;
        }
        // 19 inch in window mode
        @media(height: 757px) {
            height: 22.4vh;
        }

        // 15 inch
        @media(min-width: 1300px) and (max-width: 1370px) {
            height: 19.5vh;
        }
        // 15 inch in window mode
        @media(height: 625px) {
            height: 12.5vh;
        }

        // 12 inch
        @media(min-width: 1040px) and (max-width: 1290px) {
            height: 22.2vh;
        }

        // 10 inch
        @media(max-width: 1030px) {
            height: 15.3vh;
        }
        @media(max-width: 992px) {
            display: none;
        }
    }

    @media(min-width: 541px) {
        .mobile-content {
            display: none;
        }
        
        img.about-img {
            display: none;
        }
    }
    @media(max-width: 540px) {
        div {
            h1.pc-content {
                display: none;
            }
            :nth-child(1) {
                display: none;
            }
        }


        height: 100vh;
        flex-flow: column nowrap;
        padding-inline: 1rem;
        align-items: center;
        justify-content: center;

        img.about-img {
            display: block;
            border: 15px solid #444444;
            border-radius: 50%;
            width: 14rem;
            height: 14rem;
            object-fit: cover;
        }

        



        div.hero-content {
                width: 100%;
                margin-top: 0.5rem;
                gap: 0;
                align-items: center;
                text-align: center;
                animation: none;
                animation-delay: none;
                left: unset;

                h1 {
                    font-size: xx-large;
                    margin: 0;
                }

                p {
                    font-size: 0.7rem;
                    line-height: 1rem;
                    padding-inline: 1.5rem;
                    
                    :nth-child(1) {
                        color: #ccc;
                        font-size: 0.75rem;
                        margin-bottom: 0;
                    };
                }

                button {
                    width: unset;
                    height: unset;
                    font-size: 1rem;
                    padding: 0.4rem 0.5rem;
                }
        }
    }

    
    @media(min-width: 541px) and (max-width: 992px){
        padding-inline: 2rem;
        gap: 1.5rem;
        
        div#hero-img {
            width: 51vw;
            height: 290px;

            p.first-name {
                font-size: 50px;
                left: 4.2rem;
                top: 25.3rem;
            }

            p.last-name {
                font-size: 70px;
                top: 27rem;
                left: 5.6rem;
            }

            img {
                width: auto;
                height: auto;
                left: 9.8rem;
            }

            @keyframes imgAnimation {
                0% {
                    top: 80rem;    
                }
                25% {
                    top: 50rem;
                }
                50% {
                    top: 30rem;
                }
                100% {
                    top: 22.3rem;
                }
            }
        }

        div.hero-content {
            width: 41%;
            margin-top: 1rem;
            gap: 0.5rem;

            h1 {
                font-size: 1.3rem;
            }

            p {
                font-size: 0.6rem;
                line-height: 0.8rem;
            }

            button {
                width: unset;
                height: unset;
                font-size: 0.9rem;
                padding: 0.3rem 0.5rem;
            }

        }
    }


    // large tablet
    @media(min-width: 769px) and (max-width: 992px) {
        padding-inline: 4rem;
        gap: 1.5rem;

        div#hero-img {
            height: 25vh;

            img {
                    top: 26.9rem;
                    left: 11.3rem;
            }

            @keyframes imgAnimation {
                0% {
                    top: 80rem;    
                }
                25% {
                    top: 50rem;
                }
                50% {
                    top: 50rem;
                }
                100% {
                    top: 26.9rem;
                }
            }

            p.first-name {
                top: 29.8rem;
                left: 6rem;
            }

            p.last-name {
                top: 31.6rem;
                left: 7.5rem;
            }
        }

        div.hero-content {
            gap: 0.5rem;

            button {
                width: unset;
                height: unset;
                padding: 0.3rem 0.5rem;
            }
        }
    }

    @media(width: 912px) {
        div#hero-img {
            img {
                top: 33.6rem;
                left: 13rem;
            }

            @keyframes imgAnimation {
                0% {
                    top: 80rem;    
                }
                25% {
                    top: 50rem;
                }
                50% {
                    top: 35rem;
                }
                100% {
                    top: 33.6rem;
                }
            }

            p.first-name {
                top: 36.5rem;
                left: 7.5rem;
            }

            p.last-name {
                top: 38.2rem;
                left: 9.3rem;
            }
        }
    }
    // 10 inch 
    @media(min-width: 993px) and (max-width: 1024px) {
        height: 590px;
        padding-inline: 13%;
        padding-bottom: 0;
        gap: 1.5rem;

        div#hero-img {
            height: 50%;
            
            img {
                width: auto;
                height: auto;
                left: 17rem;
                animation-duration: 1s;
            }

            @keyframes imgAnimation {
                0% {
                    top: 100rem;    
                }
                25% {
                    top: 75rem;
                }
                50% {
                    top: 50rem;
                }
                75% {
                    top: 25rem;
                }
                100% {
                    top: 13.15rem;
                }
            }

            p.first-name {
                font-size: 50px;
                top: 16.1rem;
                left: 11.5rem;
            } 
            
            p.last-name {
                font-size: 70px;
                top: 18rem;
                left: 13rem;
            }
        }

        div.hero-content {
            width: 35vw;
            margin-top: 1rem;
            gap: 0.5rem;


            p.mobile-content {
                display: none;
            }
            
            h1 {
                font-size: 1.3rem;
            }

            p {
                font-size: 0.6rem;
                line-height: 0.8rem;
            }

            button {
                width: unset;
                height: unset;
                background-color: transparent;
                color: #fff;
                font-family: inherit;
                font-size: 0.9rem;
                font-weight: 500;
                padding: 0.3rem 0.6rem;
                border: 2px solid #007CED;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                &:hover {
                    background-color: #007CED;
                }
            }
        }
    }


    // 12 inch
    @media(min-width: 1025px) and (max-width: 1280px) {
        height: 100vh;
        gap: 1.5rem;
        
        div {
            :nth-child(1) {
                height: 345px;
                width: 44vw;

                img {
                    width: auto;
                    height: auto;
                    height: 345px;
                    left: 21.5rem;
                    animation-duration: 1000ms;
                }

                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 16.4rem;
                    }
                }

                p.first-name {
                    font-size: 60px;
                    top: 20rem;
                    left: 15.1rem;
                }

                p.last-name {
                    font-size: 85px;
                    left: 16.8rem;
                    top: 22rem;
                }
            }

        }

        div.hero-content {
            width: 35vw;
            gap: 0;
            margin-top: 1rem;

            h1 {
                font-size: 1.7rem;
                font-weight: 500;
            }

            p {
                font-size: 0.87rem;
                line-height: 1rem;
            }

            button {
                font-size: 1.1rem;
                padding-block: 0.2rem;
            }
        }
    }


    @media(min-width: 1366px) and (max-width: 1430px) {
        height: 100vh;
        padding-inline-start: 17%;
        padding-inline-end: 13%;
        gap: 2rem;
        
        div {
            
            :nth-child(1) {
                border: 12px solid #444444;
                height: 370px;
                width: 54vw;

                img {
                    width: 23vw;
                    height: auto;
                    left: 26rem;
                    animation-duration: 1000ms;
                }

                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 15.55rem;
                    }
                }
                
                p.first-name {
                    font-size: 70px;
                    top: 18.4rem;
                    left: 18rem;
                }

                p.last-name {
                    font-size: 90px;
                    top: 21.3rem;
                    left: 20.7rem;
                }
            }


        }

        div.hero-content {
            width: 40vw;
            gap: 0;
            margin-top: 1rem;

            h1.pc-content {
                font-size: x-large;
                font-weight: 500;
                margin-bottom: 1.5rem;
            }

            p {
                font-size: 0.95rem;
                line-height: 1.2rem;
                margin-bottom: 1.5rem;
            }

            button {
                font-size: 0.9rem;
                padding: 0.4rem 1.2rem;
            }
        }
    }
    // 15 inch in window mode
    @media(height: 625px) {
        div {
            :nth-child(1) {
                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 11.1rem;
                    }
                }

                p.first-name {
                    top: 14.2rem;
                }
                p.last-name {
                    top: 16.8rem;
                }
            }
        }
    }

    // 19 inch
    @media(min-width: 1367px) and (max-width: 1440px) {
        padding-inline-start: 17%;
        padding-inline-end: 9.5%;
        gap: 2rem;

        div {
            :nth-child(1) {
                width: 47vw;
                height: 395px;

                img {
                    width: 23.5vw;
                    height: auto;
                    left: 26.5rem;
                    animation-duration: 1000ms;
                }

                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 15.8rem;
                    }
                }

                p.first-name {
                    font-size: 70px;
                    top: 19.5rem;
                    left: 18.7rem;
                }

                p.last-name {
                    font-size: 100px;
                    top: 21.6rem;
                    left: 20.5rem;
                }
            }
        }

        div.hero-content {
            width: 40vw;
            gap: 0;
            margin-top: 1rem;

            h1 {
                font-size: 1.8rem;
                font-weight: 500;
            }

            p {
                line-height: 1.3rem;
            }

            button {
                font-size: 1.2rem;
                padding-block: 0.2rem;
            }
        }
    }
    // 19 inch in window mode
    @media(height: 757px) {
        div {
            :nth-child(1) {
                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 11.7rem;
                    }
                }

                p.first-name {
                    top: 15.6rem;
                }
                p.last-name {
                    top: 17.7rem;
                }
            }
        }
    }

    // 22 inch
    @media(min-width: 1441px) and (max-width: 1680px) {
        gap: 2.5rem;
        padding-inline-start: 16%;
        padding-inline-end: 12%;

        div {
            :nth-child(1) {
                height: 465px;
                max-width: 40vw;

                img {
                    height: 460px;
                    width: auto;
                    top: 100rem;
                    left: 30rem;
                    animation-duration: 1000ms;
                }
                
                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 17.5rem;
                    }
                }

                p.first-name {
                    font-size: 80px;
                    top: 22.5rem;
                    left: 21.5rem;
                }

                p.last-name {
                    font-size: 110px;
                    top: 25rem;
                    left: 24rem;
                }
            }
        }

        div.hero-content {
            width: 41%;
            margin-top: 1rem;
            gap: 0;
            left: -41vw;

            h1.pc-content {
                font-size: 2rem;
                font-weight: 500;
                margin-bottom: 1.5rem;
            }

            p {
                font-size: 1.07rem;
                line-height: 1.5rem;
                margin-bottom: 1.5rem;
            }

            button {
                font-size: 1.3rem;
                padding: 0.4rem 1.2rem;
            }
        }
    }
    // 22 inch in window mode
    @media(height: 907px) {
        div {
            :nth-child(1) {
                @keyframes imgAnimation {
                    0% {
                        top: 100rem;    
                    }
                    25% {
                        top: 75rem;
                    }
                    50% {
                        top: 50rem;
                    }
                    75% {
                        top: 25rem;
                    }
                    100% {
                        top: 13.5rem;
                    }
                }

                p.first-name {
                    top: 18.5rem;
                }
                p.last-name {
                    top: 21rem;
                }
            }
        }
    }

    
    @media(min-width: 1681px) {
        height: 100vh;
        padding-inline-start: 16.5%;
        gap: 2.5rem;
        overflow: hidden;
        
        div {
            :nth-child(1) {
                width: 55vw;
                height: 33.3rem;

                img {
                    position: relative;
                    width: 495.9px;
                    height: 563.52px;
                    left: 200px;
                }

                @keyframes imgAnimation {
                    0% {
                        top: 40vh;
                    }
                    25% {
                        top: 10vh;
                    }
                    50% {
                        top: -10vh;
                    }
                    75% {
                        top: -24vh;
                    }
                    100% {
                        top: -367px;
                    }
                }

                p.first-name {
                    position: relative;
                    font-size: 96px;
                    top: 2.6rem;
                    left: 2.4rem;
                }

                p.last-name {
                    position: relative;
                    font-size: 144px;
                    top: -49.6rem;
                    left: 4.4rem;
                }
            }
        }
    }

`
const Hero = ({ onLinkClick }) => {

    useEffect(() => {
        if (window.scrollY > 0) {
            window.scrollTo(0, 0);
        }
    }, []);



    return (
        <Container id="about-me">
            <div id='hero-img'>
                <p className='first-name'>Kareem</p>
                <Image priority src={Aboutme} alt='personal picture' />
                <p className='last-name'>Abbas</p>
            </div>

            {/* Hero Image for mobile devices */}
            <Image priority className='about-img' src={Aboutme} alt='personal picture' />

            <div className='hero-content'>
                {/* <div className='hero-content-animation' /> */}
                <p className='mobile-content'>Web Developer</p>
                <h1 className='mobile-content'>Kareem Abbas</h1>

                <h1 className='pc-content'>
                    Full-Stack Developer and web<br /> designer based in Cairo, <br />Egypt
                </h1>
                <p>
                    A junior solution-driven MERN Stack Developer and UI/UX Designer. HI, I'm a freelance developer with one year of experience. I enjoy building all types of websites, from small business sites to rich interactive web apps.
                </p>
                <button goto='contact-me' onClick={(e) => onLinkClick(e)}>Contact Me</button>
            </div>
            <div id='hidden-block' />
            <div
                onClick={() => window.scrollTo({ top: document.getElementById("projects-section").offsetTop - 127 })}
                className={styles.scrollIcon}
                style={{ cursor: 'pointer' }}
            >
                <span />
                <span />
            </div>
        </Container>
    )
}

export default Hero