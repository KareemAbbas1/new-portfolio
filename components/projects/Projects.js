import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import styles from "../../styles/Projects.module.css";
import debounce from "lodash/debounce";
import Image from "next/image";


const Container = styled.div`
    width: 100%;
    height: 110vh;
    padding-top: 7rem;
    padding-inline: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;


    div.modal-body {
        display: none;
        width: 100%;
        height: 100%;
        align-items: center;
        flex-flow: column;
        gap: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-top: 10vh;
        padding-bottom: 30vh;

        span.close-modal {
            position: fixed;
            right: 5%;
            top: 20%;
            z-index: 11;
            font-weight: bold;
            background-color: #ccc;
            color: #000;
            padding-top: 1px;
            padding-bottom: 4px;
            padding-inline: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            transition: all 300ms ease;
            &:hover {
                background: #000;
                color: #fff;
            }

            @media(min-width: 542px) and (max-width: 992px) {
                right: 3%;
                top: 10%;
            }
            @media(max-width: 540px) {
                top: 15%;
            }
        }


        @media(min-width: 542px) and (max-width: 992px) {
            padding-top: 15vh;
            margin-top: -20vh;
            gap: 1rem;
            img {
                transform: scale(0.8);
            }
        }
        @media(max-width: 540px) {
            position: fixed;
            align-items: bottom;
            justify-content: center;
            gap: 0;
            padding-top: 260%;
            img {
                transform: scale(0.4);
            }
        }

        ::-webkit-scrollbar {
            display: none;  
        }
    }

    @media(max-width: 992px) {
        align-items: flex-start;
    }
    @media(max-width: 992px) and (min-width: 542px) {
        padding-top: 20vh;
    }

    @media(min-width: 993px) and (max-width: 1024px) {
        padding-top: 0;
    }

    @media(min-width: 1440px) and (max-width: 1679px) {
        padding-top: 2rem;
    }
`



const Projects = ({ width, projects }) => {

    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        setScroll(window.scrollY);

        const handleScroll = debounce(() => setScroll(window.scrollY), 10);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    /* Handle close project modal */
    const closeModal = (modalId) => {
        document.getElementById(modalId).style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
    }

    const [projectNum, setProjectNum] = useState(1);

    return (
        <Container id="projects-section">
            <svg className={styles.line} width="217" height="80" viewBox="0 0 217 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_818_1937" fill="white">
                    <path d="M0 7C0 3.13401 3.13401 0 7 0H217V80H0V7Z" />
                </mask>
                <path d="M-2 7C-2 2.02944 2.02944 -2 7 -2H217V2H7C4.23858 2 2 4.23858 2 7H-2ZM217 80H0H217ZM-2 80V7C-2 2.02944 2.02944 -2 7 -2V2C4.23858 2 2 4.23858 2 7V80H-2ZM217 0V80V0Z" fill="#444444" mask="url(#path-1-inside-1_818_1937)" />
                <mask id="path-3-inside-2_818_1937" fill="white">
                    <path d="M0 7C0 3.13401 3.13401 0 7 0H34V32H0V7Z" />
                </mask>
                <path d="M-2 7C-2 2.02944 2.02944 -2 7 -2H34V2H7C4.23858 2 2 4.23858 2 7H-2ZM34 32H0H34ZM-2 32V7C-2 2.02944 2.02944 -2 7 -2V2C4.23858 2 2 4.23858 2 7V32H-2ZM34 0V32V0Z" fill="#007CED" mask="url(#path-3-inside-2_818_1937)" />
            </svg>
            {/* <svg className={styles.line} viewBox="0 0 1597 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={scroll >= 250 ? styles.draw : null} d="M0 0.5C0 0.5 315.5 0.5 318 0.5C320.5 0.5 322.5 2.5 322.5 5V127.5H1597" />
            </svg> */}

            <h1 className={scroll >= 250 ? styles.titleShow : styles.titleHide}>Projects</h1>

            {/* <div className={scroll >= 250 ? styles.circleShow : styles.circleHide}>
                <div id="mySquare" className={scroll >= 250 ? styles.squareShow : styles.squareHide} />
            </div> */}

            {/* <span id="project-number" className={scroll >= 250 ? styles.showNumber : styles.hideNumber}>
                1
            </span> */}

            {/* Mobile view */}
            <svg className={styles.mobileViewLine} viewBox="0 0 654 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={scroll > 250 ? styles.drawMobileLine : null} d="M0 1H654" stroke="url(#paint0_linear_605_1903)" />
                <defs>
                    <linearGradient id="paint0_linear_605_1903" x1="169" y1="1" x2="654" y2="1" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#007CED" />
                        <stop stopColor="#75B8F5" />
                        <stop stopColor="#444444" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Project modal & close project modal */}
            {
                projects && projects.map(project => (

                    <div
                        key={`${project.num}modal-body`}
                        id={`${project.num}modal-body`}
                        className="modal-body"
                        onClick={() => closeModal(`${project.num}modal-body`)}
                    >
                        <span className="close-modal">x</span>
                        {
                            project.image.map(img => (
                                <Image
                                    key={img}
                                    src={img}
                                    width={
                                        project.title === "My Reads"
                                            ? 1300
                                            : project.title === "Finanace Manager" ? 1500
                                                : 900
                                    }
                                    height={
                                        3700
                                    }
                                    alt="project images"
                                />
                            ))
                        }
                    </div>
                ))
            }

            <Slider projects={projects} scroll={scroll} width={width} />
        </Container>
    )
}

export default Projects
