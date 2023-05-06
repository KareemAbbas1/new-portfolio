/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { CaretLeftFill, CaretRightFill, Github, BoxArrowUpRight } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "../../public/projectImg.jpg";
import styles from "../../styles/Projects.module.css";

const SliderContainer = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    .grabbing {
        cursor: grabbing;
    }

    /* .grabbing .slide {
        transform: scale(0.9);
    } */

    div#indicators {
        display: none;
        gap: 0.5rem;
        position: fixed;
        bottom: -1.5rem;


        div {
            width: 10px;
            height: 10px;
            background-color: #444444;
            border-radius: 50%;
            opacity: 0.5;
            transition: all 200ms ease-in-out;

            :nth-child(1) {
                opacity: 1;
            }
        }
    }

    @media(min-width: 767px) {
        height: 100%;
    }
    @media(min-width: 1024px) {
        height: 100%;
        margin-top: -8rem;
    }
`

const Arrow = styled.div`
    width: 53px;
    height: 53px;
    border: 3px solid #474747;
    border-radius: 50%;
    background: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 123%;
    left: ${props => props.direction === "left" ? "16.8%" : "21.3%"};
    cursor: pointer;
    z-index: 9;
    transition: all 300ms ease-in-out;

    &:hover {
        opacity: 0.5;
    }

    @media(max-width: 540px) {
        display: none;
    }

    @media(min-width: 541px) and (max-width: 1023px) {
        top: 0;
        bottom: 0;
        margin: auto;
        left: ${props => props.direction === "left" && "2%"};
        right: ${props => props.direction === "right" && "-69%"};
    }

    @media(min-width: 993px) and (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }

    @media(min-width: 1024px) and (max-width: 1279px) {
        left: ${props => props.direction === "left" ? "4%" : "10%"};
    }

    @media(min-width: 1280px) and (max-width: 1366px) {
        width: 48px;
        height: 48px;
        left: ${props => props.direction === "left" ? "9%" : "14.5%"};
        top: 120%;
    }

    @media(min-width: 1366px) and (max-width: 1439px) {
        left: ${props => props.direction === "left" ? "13.2%" : "18.2%"};
    }

    @media(min-width: 1440px) and (max-width: 1679px) {
        left: ${props => props.direction === "left" ? "6%" : "11.2%"};
        top: 120%;
    }

    @media(min-width: 1680px) and (max-width: 1919px) {
        width: 50px;
        height: 50px;
        left: ${props => props.direction === "left" ? "8%" : "12.2%"};
    }
`

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 1s ease;
    cursor: grab;
    user-select: none;
    gap: 4.7rem;
    padding-inline-start: calc(100% - 871px - 10rem);
    
    // 19 inch
    @media(min-width: 1440px) and (max-width: 1679px) {
        padding-inline-start: calc(100% - 750px - 10rem);
    }

    // 15 inch
    @media(min-width: 1366px) and (max-width: 1439px) {
        padding-inline-start: calc(100% - 650px - 10rem);
        gap: 1.5rem;
    }

    // 12 inch
    @media(min-width: 1280px) and (max-width: 1365px) {
        padding-inline-start: calc(100% - 650px - 8rem);
        gap: 4rem;
    }
    
    // 10 inch
    @media(min-width: 1024px) and (max-width: 1279px) {
        padding-inline-start: calc(100% - 650px);
        gap: 4rem;
    }
`

const Slide = styled.div`
    min-width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 300ms ease-in-out;

    @media(min-width: 992px) {
        :nth-child(1) {
            div.project-data {
                transform: translateX(calc(-100% - 4.1rem));
            }
        }
    }


    div.project-data {
        width: 26vw;
        padding-top: 1.5rem;
        padding-inline: 0.35rem;
        /* z-index: 0; */
        position: absolute;
        /* transform: translateX(calc(-100% - 4.1rem)); */
        transition: all 500ms ease-in-out;
        
        
        h2 {
            font-size: 36px;
            font-weight: 500;
        }

        p {
            font-size: 24px;
            font-weight: 400;
            line-height: 29px;
            padding-inline-start: 1.4rem;
            padding-top: 0.3rem;
            margin-bottom: 2.5rem;
        }

        div.links-container {
            display: flex;
            align-items: flex-end;
            color: #007CED;
            font-weight: 700;

            a.project-link {
                color: #007CED;
                margin-right: 0.7rem;
            }
        }

    }
    
    
    div.project-img {
        width: 871px;
        height: 614px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* z-index: 2; */
        position: relative;
        
        div.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0.551263) 86.67%, #222222 100%);
            cursor: pointer;

            @media(max-width: 992px) {
                display: none;
            }
        }
        
        div.modal {
            width: 100%;
            height: 100%;
            cursor: pointer;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                padding: 0.5%;
                object-position: 0 0;
                transition: all 500ms ease;
                border: 3px solid #444444;
                border-radius: 7px;
            }

        }
        
        
    }
    


    // Mobile view
    @media(max-width: 540px) {
        div.project-data {
            h2 {
                font-size: 1.5rem;
                margin-top: 0;
            }

            p {
                font-size: 0.7rem !important;
                line-height: 1rem !important;
                padding-inline-end: 1rem;
                margin-bottom: 0;
            }

            div.links-container {
                font-size: 0.7rem !important;
            }
        }
    }


    // Tablet
    @media(max-width: 992px) {
        margin-inline: 10vw;
        flex-flow: column-reverse;
        border: 2px solid #444444;
        border-radius: 7px;

        div.project-data {
            width: 30vw;
            width: calc(100vw - 20vw - 6px);
            position: unset;
            padding-inline: unset;
            transform: unset;
            text-align: center;
            margin-bottom: 2rem;
            

            p {
                font-size: 1.1rem;
                line-height: 1.5rem;
            }

            div.links-container {
                font-size: 1.1rem;
                padding-top: 1rem;
                justify-content: center;
            }
        }

        div.project-img {
            height: 40vh;
            width: 80vw;

            div.modal {
                img {
                    border-width: 1px;
                    border-bottom-left-radius: 0px;
                    border-bottom-right-radius: 0px;
                }
            }
        }
    }

    // 10 inch 
    @media(min-width: 1024px) and (max-width: 1279px) {
        padding-bottom: 0;

        div.project-data {
            padding-top: 0;
            padding-inline: 0;

            h2 {
                font-size: 1.1rem;
            }

            p {
                font-size: 0.8rem;
                line-height: 1.1rem;
                margin-bottom: 1.3rem;
            }

            div.links-container {
                font-size: 0.8rem;
            }
        }

        div.project-img {
            width: 530px;
            height: 60vh;
    
            img {
                width: 100%;
                height: 100%;
                padding-block: 1px;
            }
        }
    }
 

    // 12 inch
    @media(min-width: 1280px) and (max-width: 1365px) {
        /* padding-inline-start: 17vw; */
        
        div.project-data {
            width: 34vw;
            padding-inline-start: 3rem;
            padding-inline-end: 6rem;
            transform: translateX(-100%) scale(1);
            
            h2 {
                font-size: 1.3rem;
            }

            p {
                font-size: 14px;
                line-height: 1.3rem;
                margin-bottom: 1.5rem;
            }

            div.links-container {
                font-size: 0.8rem;
            }
        }

        div.project-img {
            width: 650px;
            height: 51vh;
            
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                padding-block: 1px;
            }
        }
    }

    // 15 inch
    @media(min-width: 1366px) and (max-width: 1439px) {
        padding-inline-start: 3vw;
        
        
        div.project-data {
            width: 36vw;
            transform: translateX(calc(-100%)) scale(0.7);
            /* font-size: 14px; */
            /* font-size: 0.5rem; */
        }

        div.project-img {
            width: 650px;
            height: 55vh;

            img {
                height: 100%;
                width: 99.5%;
                padding-block: 2px;
            }
        }
    }

    // 19 inch
    @media(min-width: 1440px) and (max-width: 1679px) {

        div.project-data {
            h2 {
                font-size: 1.8rem;
            }

            p {
                font-size: 1.1rem;
                line-height: 1.5rem;
            }
        }
        
        div.project-img {
            width: 750px;
            height: 53vh;
            
            img {
                width: 99.4%;
                height: 100%;
                object-fit: cover;
                padding-block: 2px;
            }
        }
    }

    /* 22 inch */
    @media (min-width: 1680px) and (max-width: 1919px) {
        
         div.project-data {

            h2 {
                font-size: 1.8rem;
            }
            p {
                font-size: 1.3rem;
                line-height: 1.7rem;
            }
        }

        div.project-img {
            height: 53vh;

            img {
                height: 100%;
                width: 99.5%;
                object-fit: cover;
                padding-block: 3px;
            }
        }
    }

`


const Slider = ({ projects, scroll, width }) => {


    useEffect(() => {
        window.innerWidth <= 992 && (document.getElementById("indicators").style.display = "flex");
    }, [])


    let wrapper,
        slides,
        isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID = 0,
        currentIndex = 0;


    /* Start slide on click */
    const [slideIndex, setSlideIndex] = useState(0);



    const handleClick = (direction) => {
        if (direction === "left" && currentIndex > 0) {
            currentIndex -= 1;
            if (window.innerWidth > 992) {
                document.getElementById(`slide${currentIndex + 1}`).style.transform = "translateX(0%)";
                document.getElementById(`project-data${currentIndex + 2}`).style.transform = "translateX(50%)";
            }
        } else if (direction === "right" && currentIndex + 1 < projects.length) {
            currentIndex += 1;
            if (window.innerWidth > 992) {
                document.getElementById(`slide${currentIndex}`).style.transform = "translateX(-100%)";
                document.getElementById(`project-data${currentIndex + 1}`).style.transform = `
            ${window.innerWidth === 1366
                        ? "translateX(calc(-100% + 8px)) scale(0.8)"
                        : window.innerWidth < 1366 && window.innerWidth > 1024 ? "translateX(calc(-100% + 8px)) scale(1)"
                            : window.innerWidth === 1024 ? "translateX(calc(-100% - 3.2rem)) scale(1)"
                                : "translateX(calc(-100% - 4.1rem))"
                    }
            `;
            }
        }
        setPositionByIndex();
    }


    /* Start Slide on touch */

    const getPositionX = (event) => {
        return event.type.includes("mouse")
            ? event.pageX
            : event.touches[0].clientX
    }

    const setWrapperPosition = () => {
        wrapper.style.transform = `translateX(${currentTranslate}px)`
    }

    const setPositionByIndex = () => {
        currentTranslate = window.innerWidth === 1440
            ? currentIndex * -825
            : window.innerWidth < 1367 && window.innerWidth > 1024 ? currentIndex * -700
                : window.innerWidth < 1025 && window.innerWidth > 992 ? currentIndex * -600
                    : window.innerWidth < 992 && window.innerWidth > 540 ? currentIndex * -(window.innerWidth + ((9.5 / 100) * window.innerWidth))
                        : window.innerWidth <= 540 ? currentIndex * -(window.innerWidth + ((19 / 100) * window.innerWidth))
                            : currentIndex * -940;

        prevTranslate = currentTranslate
        setWrapperPosition()
    }

    const animation = () => {
        setWrapperPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    const touchStart = (index) => {
        return (event) => {
            currentIndex = index;
            startPos = getPositionX(event)
            isDragging = true;

            animationID = requestAnimationFrame(animation);
            wrapper.classList.add('grabbing');
        }
    }

    const touchEnd = () => {
        isDragging = false;
        cancelAnimationFrame(animationID);

        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentIndex < slides.length - 1) {
            currentIndex += 1;
            if (window.innerWidth > 992) {

                document.getElementById(`slide${currentIndex}`).style.transform = "translateX(-100%)";
                document.getElementById(`project-data${currentIndex + 1}`).style.transform = "translateX(calc(-100% - 4.1rem))";
            }


            (document.getElementById(`${currentIndex + 1}indicator`).style.opacity !== "1")
                && window.innerWidth <= 992
                && currentIndex < slides.length
                ? (document.getElementById(`${currentIndex + 1}indicator`).style.opacity = "1")
                : (document.getElementById(`${currentIndex}indicator`).style.opacity = "0.5");
        }

        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1
            if (window.innerWidth > 992) {
                document.getElementById(`slide${currentIndex + 1}`).style.transform = "translateX(0%)";
                document.getElementById(`project-data${currentIndex + 2}`).style.transform = "translateX(50%)";
            }

            (document.getElementById(`${currentIndex + 1}indicator`).style.opacity !== "1")
                && window.innerWidth <= 992
                && currentIndex + 1 !== 0
                ? (document.getElementById(`${currentIndex + 1}indicator`).style.opacity = "1")
                : (document.getElementById(`${currentIndex + 2}indicator`).style.opacity = "0.5");
        }

        setPositionByIndex()

        wrapper.classList.remove('grabbing');
    }

    const touchMove = (event) => {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos
        }
    }

    // Disable context menu
    if (typeof window !== "undefined") {
        wrapper = document.querySelector('.slides-wrapper')
        slides = Array.from(document.querySelectorAll('.slide'))

        wrapper.oncontextmenu = function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false
        }
    }



    if (typeof window !== "undefined") {
        slides.forEach((slide, index) => {
            const slideImage = slide.querySelector('img');
            slideImage.addEventListener('dragstart', (e) => e.preventDefault())


            // Touch events
            slide.addEventListener('touchstart', touchStart(index))
            slide.addEventListener('touchend', touchEnd)
            slide.addEventListener('touchmove', touchMove)

            // Mouse events
            slide.addEventListener('mousedown', touchStart(index))
            slide.addEventListener('mouseup', touchEnd)
            slide.addEventListener('mouseleave', touchEnd)
            slide.addEventListener('mousemove', touchMove)
        })


    }
    /* End Slide on touch */

    /* Handle open project modal (the close modal func is in the projects component)*/
    const openModal = (modlId) => {
        window.scrollTo({ top: document.getElementById("projects-section").offsetTop - 127 });
        document.getElementById(modlId).style.display = "flex";
        document.querySelector("body").style.overflow = "hidden";
    }

    return (
        <div className={scroll >= 250 ? styles.showSlider : styles.hideSlider}>
            <Arrow
                id="left-arrow"
                direction="left"
                onClick={() => handleClick("left")}
            >
                <CaretLeftFill color="#007CED" />
            </Arrow>

            <SliderContainer>
                <Wrapper className="slides-wrapper">
                    {
                        projects.map(project => (
                            <Slide key={project.num} className="slide" id={`slide${project.num}`}>
                                <div className="project-data" id={`project-data${project.num}`}>
                                    <h2>{project.title}</h2>
                                    <p>
                                        {project.description}
                                    </p>
                                    <div className="links-container">
                                        <Link href={project.url} className="project-link" target="_blank">{project.title}.com <BoxArrowUpRight color="#007ced" /></Link>
                                        <Link href={project.gitHub} target="_blank">
                                            <Github color="#007ced" />
                                        </Link>
                                    </div>
                                    {
                                        project.technologies && (
                                            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
                                                {
                                                    project.technologies.join(", ")
                                                }
                                            </span>
                                        )
                                    }
                                </div>
                                <div className="project-img" onClick={() => width <= 992 && openModal(`${project.num}modal-body`)}>
                                    <div className="overlay" onClick={() => openModal(`${project.num}modal-body`)} />
                                    <div className="modal" >
                                        <Image src={project.image[0]} width={700} height={1000} alt="project images" />
                                    </div>
                                </div>
                            </Slide>
                        ))
                    }
                </Wrapper>

                <div id="indicators">
                    {
                        projects.map(project => (
                            <div key={`${project.num}indicator`} id={`${project.num}indicator`} />
                        ))
                    }
                </div>
            </SliderContainer>
            <Arrow
                id="right-arrow"
                direction="right"
                onClick={() => handleClick("right")}
            >
                <CaretRightFill color="#007CED" />
            </Arrow>

        </div>
    )
}

export default Slider