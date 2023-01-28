/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components';
import { Link45deg } from "react-bootstrap-icons";
import Image from 'next/image';
import Cap from '../../public/Square academic cap.png';
import Link from 'next/link';



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding-inline: 16%;
    margin-block: 5rem;
    

    div.middle {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-end;
        position: relative;

        h1 {
            width: fit-content;
            font-size: 48px;
            padding-bottom: 1.5rem;
            margin-bottom: 0;
        }
    
        div.h-line {
            width: 16.5%;
            height: 1px;
            background-color: #444444;
            top: -0.10%;
            position: relative;

            div {
                width: 21%;
                height: 3px;
                background-color: #007cde;
                position: absolute;
                top: -1pt;
                left: 0;
                right: 0;
                margin: auto;
            }
        }

        div.v-line {
            height: 82.5%;
            width: 1px;
            background-color: #444444;
            position: relative;

            div {
                width: 3px;
                height: 2.4%;
                background-color: #007cde;
                position: absolute;
                top: -1pt;
                left: -1px;
            }
        }
        
        a.circle {
            position: relative;
            width: 1.5rem;
            height: 1.5rem;
            background-color: #007cde;
            border: 2px solid #444444;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #ccc;
            cursor: pointer;
            transition: all 300ms ease;

            p {
                width: 6rem;
                position: absolute;
                bottom: -3vh;
                text-align: center;


                // 10 inch
                @media(width: 1024px) {
                    bottom: -5vh;
                }
                // 15 inch in window mode
                @media(height: 625px) {
                    bottom: -4vh;
                }
            }

            &:hover {
                background: #222;
                color: #007cde;
            }
        }

        div.certificates-container {
            position: absolute;
            height: 85%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            align-items: center;
            top: 0;
            bottom: 0;
            margin: auto;
            padding-top: 15rem;

            div.certificate-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 3rem;

                div.certificate-data {
                    width: 515px;
                    height: 69px;

                    h2 {
                        font-size: 36px;
                        font-weight: 600;
                        margin-top: -0.5rem;
                        margin-bottom: 0.5rem;
                        color: #007cde;
                    }

                    a {
                        display: flex;
                        align-items: flex-end;
                        font-size: 18px;
                        margin: 0;
                        background-color: transparent;

                        &:hover {
                            color: #007cde;
                        }
                    }

                    :nth-child(1),
                    :nth-child(4) {
                        h2 {
                            text-align: right;
                        }
                    }
                }

                div.date {
                    font-size: 16px;
                    font-weight: 600;
                    background-color: #222222;
                    border: 1px solid #007cde;
                    padding: 0.2rem 1rem;
                    border-radius: 103px;
                }

                :nth-child(1) {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    border: 2px solid #007cde;
                    border-radius: 50%;
                    top: 17%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #222222;

                    img {
                        height: 2.5rem;
                        width: 2.5rem;
                    }
                }
            }
        }


        @media(min-height: 280px) and (max-height: 667px) {
            min-height: 187vh;
        }

        @media(min-height: 668px) and (max-height: 915px) {
            min-height: 173vh;
        }


        @media(max-width: 992px) {

            h1 {
                font-size: 2rem;
                padding-bottom: 1rem;
            }

            div.h-line {
                width: 50%;
                div {
                    height: 2px;
                    top: 0;
                }
            }

            div.v-line {
                height: 95%;
            }

            

            div.certificates-container {
                height: 85%;
                padding-top: 6rem;
                top: 7%;
                
                div.certificate-container {
                    flex-direction: column;
                    gap: 1rem;
                    
                    h2,p {
                        background-color: #222222;
                    }
                    :nth-child(1) {
                        width: 40px;
                        height: 40px;
                        top: 0;

                        img {
                            width: 2rem;
                            height: 2rem;
                        }
                    }

                    :nth-child(3),
                    :nth-child(5) {
                        flex-direction: column-reverse;
                    }

                    div.certificate-data {
                        width: calc(100vw - 2rem);
                        height: auto;

                        h2 {
                            font-size: 1.5rem;
                            text-align: center;
                        }

                        a {
                            align-items: center;
                            justify-content: center;
                            font-size: 0.8rem;
                            text-align: center;
                        }
                        p {
                            text-align: center;
                        }

                        

                        :nth-child(1),
                        :nth-child(4) {
                            h2 {
                                text-align: center;
                            }
                        }
                        
                    }
                }
            }
        }

        // 10 inch
        @media(min-width: 1024px) and (max-width: 1279px) {
            transform: scale(0.8);
            height: 170vh;

            h1 {
                font-size: 1.8rem;
                padding-bottom: 1rem;
            }

            div.v-line {
                div {
                    height: 2vh;
                }
            }
            
            div.certificates-container {
                min-width: 100vw;
            }

            div.certificate-data {
                width: 400px !important;
                h2,a {
                    transform: scale(0.9);
                }
            }

        }
    }

    // 12 inch
    @media(min-width: 1280px) and (max-width: 1440px) {
        transform: scale(0.8);

        div.h-line {
            width: 13rem !important;

            div {
                width: 15% !important;
            }
        }

        div.v-line {
            div {
                height: 2vh !important;
            }
        }

        div.certificates-container {
            min-width: 100vw;

            div.certificate-container {
                :nth-child(1) {
                    top: 15% !important;
                }
            }
        }
    }
    
    @media(max-width: 540px) {
        height: 100%;
        margin-block: 0;
    }
    
    @media(min-width: 993px) and (max-width: 1440px) {
        height: 100%;
        margin-bottom: -5rem;
        margin-top: -10rem;
    }

    // 22 inch in window mode
    @media(height: 907px) {

        div.middle {
            justify-content: flex-start;
            
            div.v-line {
                height: 52%;
            }
            div.certificates-container {
                height: 58%;
                margin: 0 auto;
            }
        }
    }

    @media(min-width: 1680px) and (max-width: 1919px) {
        div.certificates-container {
            min-width: 100vw;
        }
    }

`

const Education = () => {
    return (
        <Container id="education">

            <div className='middle'>

                <h1>
                    Education
                </h1>
                <div className='h-line'>
                    <div />
                </div>
                <div className='v-line'>
                    <div />
                </div>

                <Link href="https://docs.google.com/document/d/1XEm_-j6AhYksRHkWCDE6OnaPKLHyq3xHcXMXQEnJr6k/edit?usp=sharing" target="_blank" className='circle'>
                    &#8891;
                    <p>resume</p>
                </Link>

                <div className='certificates-container'>

                    <div className='certificate-container'>
                        <Image src={Cap} alt="academic cap icon" />
                    </div>

                    <div className='certificate-container'>
                        <div className='certificate-data'>
                            <h2 className='certificate-title'>
                                Udacity, Web Development
                            </h2>
                            <Link href="https://graduation.udacity.com/confirm/ZUDP92KF" target="_blank"> &#x2022; React Development, Cross-Skilling Nanodegree Program (FWD)<Link45deg size={18} /></Link>
                        </div>
                        <div className='date'>Mar - 2022</div>
                        <div className='certificate-data'>
                            <p>
                                In this course we enhanced our React development skills alongside learning about Agile core values, principles, and its most famous frameworks like Scrum, Kanban, and XP.
                            </p>
                        </div>
                    </div>

                    <div className='certificate-container'>
                        <div className='certificate-data'>
                            <p>
                                Learnt the foundational parts of the React ecosystem that are necessary to build production-ready apps, and how Redux and React work together to make the application's state bulletproof.
                            </p>
                        </div>
                        <div className='date'>Nov - 2021</div>
                        <div className='certificate-data'>
                            <h2 className='certificate-title'>
                                Udacity, Web Development
                            </h2>
                            <Link href="https://graduation.udacity.com/confirm/MATSEK4A" target="_blank">&#x2022; Advanced Front-End Web Development. Nanodegree Program <Link45deg size={18} /></Link>
                        </div>
                    </div>

                    <div className='certificate-container'>
                        <div className='certificate-data'>
                            <h2 className='certificate-title'>
                                Udacity, Web Development
                            </h2>
                            <Link href="https://graduation.udacity.com/confirm/CYYM5HPH" target="_blank">&#x2022; Professional FrontEnd Web Development. Nanodegree Program <Link45deg size={13} /></Link>
                        </div>
                        <div className='date'>Aug - 2021</div>
                        <div className='certificate-data'>
                            <p>
                                Advanced JavaScript and the Dom, how to dynamically add content to a web page, and combine JavaScript, Html, and CSS skills to build a dynamic web page. Also, we learnt about APIs and Asynchronous JavaScript and created a web app with a Node server that uses Web API and user data to dynamically update the UI.
                            </p>
                        </div>
                    </div>

                    <div className='certificate-container'>
                        <div className='certificate-data'>
                            <p>
                                In this course we learnt about the fundamentals of Front-End web Development and how to combine HTML, CSS, and JavaScript to build basic modern web application.
                            </p>
                        </div>
                        <div className='date'>Apr - 2021</div>
                        <div className='certificate-data'>
                            <h2 className='certificate-title'>
                                Udacity, Web Development
                            </h2>
                            <Link href="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/0d0dfa0f-0144-4c5f-8e0e-45a7cd3a1c4c.pdf" target="_blank">&#x2022; Web Development fundamentals, ES6, CSS3, HTML5<Link45deg size={18} /></Link>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
    )
}

export default Education