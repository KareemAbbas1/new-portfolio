import React from 'react'
import styled from 'styled-components';
import { Phone, GeoAlt, Envelope } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import LoadingBar from '../LoadingBar';


const Section = styled.div`
    width: 100%;
    height: 644px;
    padding-inline: 16%;
    padding-block: 3rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 5rem;
    position: relative;

    h1 {
        font-weight: 600;
        font-size: 48px;
        border-bottom: 2px solid #007cde;
        padding-bottom: 0.8rem;
    }

    div.message-sent {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        div {
            width: 10rem;
            height: 10rem;
            border: 1px solid #007cde;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
        }
        p {
            font-size: 1.5rem;
        }
    }

    @media(max-width: 1024px) {
        height: 100%;
        padding: 1rem;
        gap: 1rem;
        
        h1 {
            font-size: 2rem;
        }
    }

    // tablet
    @media(min-width: 769px) and (max-width: 1024px) {
        padding-inline: 2rem;
    }

    // 12 inch
    @media(min-width: 1025px) and (max-width: 1440px) {
        padding-inline: 2rem;
        transform: scale(0.8)
    }

    // 22 inch
    @media(min-width: 1680px) and (max-width: 1919px) {
        padding-inline: 11vw;
    }

`

const Container = styled.div`
    width: 100%;
    height: 46%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    div.contact-info {
        height: 100%;
        border-right: 1px solid #444444;
        width: 28%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        padding-top: 0.9rem;
        padding-bottom: 1.1rem;

        p {
            font-weight: 600;
            font-size: 20px;

            :nth-child(1) {
                margin-top: 0;
            }
            :nth-child(3) {
                margin-bottom: 0;
            }
        }

        div.contact-element {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            div {
                color: #007cde;
                font-size: 2.1rem;
            }
        }
    }

    form {
        height: 100%;
        width: 70%;
        padding-left: 3rem;
        display: flex;
        justify-content: space-between;


        div {
            width: 390px;
            height: 100%;
            padding-top: 2.3rem;
            padding-bottom: 2.7rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            align-items: flex-end;
            
            :nth-child(1) {
                
                input {
                    width: 100%;
                    height: 40px;
                    background-color: #222222;
                    border: 1px solid #444444;
                    border-radius: 4px;
                    padding-inline: 0.7rem;
                    font-size: 1.1rem;
                    color: #fff;
                }
            }
            
            :nth-child(2) {
                height: 126.3%;
                gap: 2rem;
                
                textarea {
                    width: 100%;
                    height: 100%;
                    resize: none;
                    background-color: #222222;
                    color: #fff;
                    border: 1px solid #444444;
                    border-radius: 4px;
                    font-family: inherit;
                    font-size: 1.1rem;
                    padding: 0.5rem 0.7rem;
                }

                button {
                    font-size: large;
                    font-weight: 600;
                    background-color: #222222;
                    color: #fff;
                    border: 1px solid #007cde;
                    border-radius: 4px;
                    padding: 0.4rem 2rem;
                    cursor: pointer;
                    transition: all 300ms ease-in-out;

                    &:hover {
                        background-color: #007cde;
                    }
                }

            }

            span.error {
                width: 100%;
                color: red;
            }
        }
    }

    

    @media(max-width: 1024px) {
        height: 100%;
        flex-direction: column;

        div.contact-info {
            width: 100%;
            border-right: none;
            padding: 0;
        }

        form {
            width: 100%;
            padding-left: 0;
            flex-direction: column;

            div {
                width: 100%;
                padding-block: 1rem;
                align-items: center;

                :nth-child(1) {
                    gap: 1rem;
                }

                :nth-child(2) {
                    textarea {
                        height: 30vh;
                    }
                } 
            }
        }
    }

    // 19 inch
    @media(min-width: 1440px) and (max-width: 1680px) {
        form {
            div {
                width: 48%;
            }
        }
    }
`


const Contact = () => {


    // Handel send message
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);


    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();


    async function onFormSubmit(values) {
        setLoading(true);
        try {
            await axios.post(`/api/submitContactForm`, {
                name: values.fullName,
                email: values.email,
                subject: values.subject,
                message: values.message
            });
            reset();
            setIsSent(true);
            setLoading(false);
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (isSent === true) {

            setTimeout(() => {
                setIsSent(false)
            }, 5000)
        }
    }, [isSent]);



    return (
        <Section id="contact-me">
            <h1>Contact</h1>
            {
                loading &&
                <LoadingBar align="bottom"/>
            }
            {
                !isSent
                    ?
                    <Container>
                        <div className='contact-info'>
                            <div className='contact-element'>
                                <div><Phone /></div>
                                <p>+201279719992</p>
                            </div>

                            <div className='contact-element'>
                                <div><GeoAlt /></div>
                                <p>Caro, Egypt</p>
                            </div>

                            <div className='contact-element'>
                                <div><Envelope /></div>
                                <p>kareemabbas066@gmail.com</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Full Name'
                                    {
                                    ...register("fullName", {
                                        required: {
                                            value: true,
                                            message: "Please enter your full name"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "This name is too short"
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: "This name is too long"
                                        }
                                    })
                                    }
                                />
                                {
                                    errors.fullName && <span className='error'>
                                        {errors.fullName.message}
                                    </span>
                                }

                                <input
                                    type="email"
                                    placeholder='Email'
                                    {
                                    ...register("email", {
                                        required: {
                                            value: true,
                                            message: "Please enter your email address"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "This email is too short"
                                        },
                                        maxLength: {
                                            value: 254,
                                            message: "This email is too long"
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Please enter a valid email address"
                                        }
                                    })
                                    }
                                />
                                {
                                    errors.email && <span className='error'>
                                        {errors.email.message}
                                    </span>
                                }

                                <input
                                    type="test"
                                    placeholder='Subject'
                                    {
                                    ...register("subject", {
                                        required: {
                                            value: true,
                                            message: "Please enter a subject to your message"
                                        }
                                    })
                                    }
                                />
                                {
                                    errors.subject && <span className='error'>
                                        {errors.subject.message}
                                    </span>
                                }
                            </div>

                            <div>
                                <textarea
                                    type="textarea"
                                    placeholder='Message'
                                    {
                                    ...register("message", {
                                        required: {
                                            value: true,
                                            message: "Please enter a message"
                                        }
                                    })
                                    }
                                />
                                {
                                    errors.message && <span className='error'>
                                        {errors.message.message}
                                    </span>
                                }

                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </Container>
                    :
                    <div className='message-sent'>
                        <div>
                            &#10003;
                        </div>
                        <p>Message sent successfully.</p>
                    </div>
            }
        </Section>
    )
}

export default Contact