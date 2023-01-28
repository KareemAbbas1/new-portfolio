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
    top: 42%;
    left: ${props => props.direction === "left" && "3%"};
    right: ${props => props.direction === "right" && "2%"};
    display: ${props => props.direction === "left" && "none"};;
    cursor: pointer;
    z-index: 9;
    transition: all 300ms ease-in-out;

    &:hover {
        opacity: 0.5;
    }

    @media(max-width: 540px) {
        display: none;
    }

    @media(min-width: 541px) and (max-width: 1024px) {
        left: ${props => props.direction === "left" && "2%"};
    }

    @media(min-width: 993px) and (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }

    @media(min-width: 1280px) and (max-width: 1366px) {
        width: 48px;
        height: 48px;
    }

    @media(min-width: 1680px) and (max-width: 1919px) {
        width: 50px;
        height: 50px;
    }
`

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    transition: 1s ease;
    cursor: grab;
    user-select: none;
    
`

const Slide = styled.div`
    min-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-inline-start: 18%;
    padding-inline-end: 8%;
    padding-bottom: 5rem;
    transition: all 300ms ease-in-out;


    div.project-data {
        width: 34%;
        padding-top: 1.5rem;
        padding-left: 0.35rem;
        z-index: 1;

        
        h2 {
            font-size: 36px;
            font-weight: 600;
        }

        p {
            font-size: 20px;
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
        width: 61%;
        height: 610px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 5px solid #444444;
        
        div.modal {
            width: 100%;
            height: 100%;
            cursor: pointer;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                padding: 0.5%;
                object-position: top;
                opacity: 0.5;
                transition: all 500ms ease;

                &:hover {
                    opacity: 1;
                }
            }

        }
        
        
    }
    


    // Mobile view
    @media(max-width: 539px) {
        div.project-data {
            padding-top: calc(52vh - 3.5rem - 2px) !important;

            p {
                padding-top: 0.5rem !important; 
                font-size: 12px !important;
                line-height: 15px !important;
            }
        }
    }
    @media(max-width: 992px) {
        height: 74vh;
        padding-bottom: 0;
        padding-inline: 1rem;
        gap: 0;
        
        div.project-data {
            position: absolute;
            width: calc(100vw - 2rem - 6px);
            height: 74vh;
            margin: 0;
            text-align: center;
            padding: 0.7rem 0rem;
            border-top: none;
            bottom: 0;
            padding-top: calc(52vh - 3.5rem);
            margin-left: 3px;
            
            h2 {
                width: calc(100vw - 2rem - 6px);
                font-size: 1.3rem;
                margin: 0;
                position: absolute;
                top: 0.4%;
                padding-block: 0.8rem;
                background: rgba(34, 34, 34, 0.8);
            }

            p {
                height: 22vh;
                padding: 0;
                font-size: 0.8rem;
                line-height: 1.3rem;
                margin-block: 0;
                padding-inline: 1rem;
                padding-top: 1rem;
                background: rgb(34, 34, 34);
                border-top: 1px solid #444444;
            }

            div.links-container {
                justify-content: center;
                font-size: 0.8rem;
                padding-top: 1.5rem;
                padding-bottom: 1rem;
                background: rgb(34, 34, 34);
                

                a.project-link {
                    margin-right: 1.1rem;
                }
            }
        }

        div.project-img {
            width: 100%;
            height: 74vh;
            margin: 0;
            padding-top: calc(3rem - 3px);
            border: none;
            padding: 0;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                padding-inline: 3px;
                border: 3px solid #444444;
            }
        }
    }


    // Tablet
    @media(min-width: 767px) and (max-width: 992px) {
        padding-inline: 10vw;

        div.project-data {
            width: calc(100vw - 20vw - 6px);

            h2 {
                width: calc(100vw - 20vw - 6px);
            }

            p {
                font-size: 1.1rem;
                line-height: 1.5rem;
                padding-top: 3rem;
            }

            div.links-container {
                font-size: 1.1rem;
                padding-top: 1rem;
            }
        }
    }

    // 10 inch 
    @media(min-width: 1024px) and (max-width: 1279px) {
        padding-inline: 5rem;
        padding-bottom: 0;

        div.project-data {
            padding-top: 0;
            padding-left: 0;

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
            height: 60vh;
    
            img {
                width: 100%;
                height: 100%;
                padding-block: 1px;
            }
        }
    }
 

    // 12 inch
    @media(min-width: 1280px) and (max-width: 1366px) {
        padding-inline-start: 17vw;
        
        div.project-data {
            width: 36%;
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
            width: 59%;
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
        padding-inline-start: 18vw;

        div.project-img {
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
        padding-inline-start: 18vw;

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
            rotateSquare(direction);
            document.getElementById("project-number").innerText = currentIndex + 1;
            currentIndex === 0 && (document.getElementById("left-arrow").style.display = "none");
            currentIndex + 1 < slides.length && (document.getElementById("right-arrow").style.display = "flex");
        } else if (direction === "right" && currentIndex + 1 < projects.length) {
            currentIndex += 1;
            rotateSquare(direction);
            document.getElementById("project-number").innerText = currentIndex + 1;
            document.getElementById("left-arrow").style.display = "flex";
            currentIndex + 1 === slides.length && (document.getElementById("right-arrow").style.display = "none");
        }
        setPositionByIndex();
    }


    const rotateSquare = (direction) => {
        let rotateDeg = (currentIndex + 1) * 315;
        const mySquare = document.getElementById("mySquare");
        if (direction === "left") {
            mySquare.style.transform = `rotate(-${rotateDeg}deg)`;
        } else {
            mySquare.style.transform = `rotate(${rotateDeg}deg)`;
        }
    }
    /* End slide on click */


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
        currentTranslate = currentIndex * -window.innerWidth
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
            rotateSquare("right");
            document.getElementById("project-number").innerText = currentIndex + 1;


            (document.getElementById(`${currentIndex + 1}indicator`).style.opacity !== "1")
                && window.innerWidth <= 992
                && currentIndex < slides.length
                ? (document.getElementById(`${currentIndex + 1}indicator`).style.opacity = "1")
                : (document.getElementById(`${currentIndex}indicator`).style.opacity = "0.5");

            window.innerWidth > 540 && (document.getElementById("left-arrow").style.display = "flex");

            window.innerWidth > 540 &&
                currentIndex + 1 === slides.length && (document.getElementById("right-arrow").style.display = "none");
        }

        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1
            rotateSquare("left");
            document.getElementById("project-number").innerText = currentIndex + 1;

            (document.getElementById(`${currentIndex + 1}indicator`).style.opacity !== "1")
                && window.innerWidth <= 992
                && currentIndex + 1 !== 0
                ? (document.getElementById(`${currentIndex + 1}indicator`).style.opacity = "1")
                : (document.getElementById(`${currentIndex + 2}indicator`).style.opacity = "0.5");

            window.innerWidth > 540 &&
                currentIndex === 0 && (document.getElementById("left-arrow").style.display = "none");

            window.innerWidth > 540 &&
                currentIndex + 1 < slides.length && (document.getElementById("right-arrow").style.display = "flex");
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
                <Wrapper slideIndex={slideIndex} className="slides-wrapper">
                    {
                        projects.map(project => (
                            <Slide key={project.num} className="slide">
                                <div className="project-data" onClick={() => width <= 992 && openModal(`${project.num}modal-body`)}>
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
                                </div>
                                <div className="project-img">
                                    <div className="modal" onClick={() => openModal(`${project.num}modal-body`)}>
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