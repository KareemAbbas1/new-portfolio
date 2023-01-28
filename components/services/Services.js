/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from "../../styles/Projects.module.css";
import { Tools } from "react-bootstrap-icons";
import debounce from "lodash/debounce";
import LoadingBar from '../LoadingBar';
import { useForm } from "react-hook-form";
import axios from 'axios';




const services = [
    {
        type: "Front-End",
        price: 10,
        serviceDetails: [
            "UI/UX Design",
            "Front-End Development",
            "Integrate APIs",
        ]
    },
    {
        type: "Full-Stack",
        price: 16,
        serviceDetails: [
            "UI/UX Design",
            "Front-End Developmnt",
            "Build Server or Serveless functions",
            "MongoDB Database",
            "REST API"
        ]
    },
    {
        type: "Back-End",
        price: 12,
        serviceDetails: [
            "Node.js Sever(CRUD)",
            "MongoDB Database",
            "REST APIs",
            "JWT authentication",
        ]
    },
]

const Container = styled.div`
    width: 100%;
    height: 81vh;
    position: relative;


    div.service-modal {
        display: none;
        position: absolute;
        top: -11vh;
        left: 0;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        z-index: 10;

        // 19 inch
        @media(max-width: 1440px) {
            transform: scale(0.9);
            top: -15vh;
        }
        

        // 15 inch
        @media(max-width: 1366px) {
            transform: scale(0.8);
            top: -18vh;
            height: 110vh;
        }
        // 15 inch in window mode
        @media(height: 625px) {
            top: -24vh;
        }

        @media(max-width: 992px) {
            width: 100vw;
            z-index: 10;
        }
        @media(max-width: 539px) {
            width: 120vw;
            margin-inline-start: -10vw;
        }
        


        div.service-modal-body {
            position: relative;
            width: 42%;
            min-height: 50%;
            max-height: 92%;
            border: 1px solid #444444;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #222222;
            z-index: 1;

            // 19 inch
            @media(max-width: 1440px) {
                width: 45vw;
                max-height: 94vh;
            }
            // 19 inch in window mode
            @media(height: 757px) {
                max-height: 100vh;
            }

            // 15 inch
            @media(max-width: 1366px) {
                width: 45vw;
                max-height: 109vh;
            }
            // 15 inch in window mode
            @media(height: 625px) {
                /* height: 115vh; */
            }

            @media(max-width: 1024px) {
                width: 50vw;
            }

            @media(max-width: 992px) {
                width: 80vw;
            }

            @media(max-width: 540px) {
                width: 100%;
            }

            h3 {
                position: absolute;
                width: calc(100% - 2rem);
                top: 0;
                left: 1rem;
                margin-top: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid #444444;
                font-size: 1.3rem;
            }

            span.close-modal {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 1.3rem;
                height: 1.2rem;
                padding-bottom: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                background-color: #444444;
                border: 1px solid #444444;
                border-radius: 3px;
                cursor: pointer;
                transition: all 300ms ease-in-out;
                z-index: 11;

                &:hover {
                    background-color: #222222;
                }
            }

            div.modal-content {
                width: 100%;
                height: 100%;
                background-color: rgba(40, 40, 40, 0.1);
                padding-inline: 1rem;
                padding-top: 3rem;
                z-index: 10;
                @media(min-width: 1025px) and (max-width: 1366px) {
                    padding-top: 6rem;
                }
                
                form {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-between;
                    padding-top: 1rem;

                    div {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                        margin-bottom: 1.5rem;
                        @media(min-width: 1024px) and (max-width: 1365px) {
                            margin-bottom: 1rem; 
                        }


                        :nth-child(1),
                        :nth-child(4) {
                            display: block;
                        }
                        :nth-child(5) {
                            flex-flow: column nowrap;
                            align-items: flex-start;
                        }

                        label {
                            display: block;
                            font-size: 1.2rem;
                            margin-bottom: -0.3rem;
                        }

                        input {
                            display: block;
                            width: 15vw;
                            height: 4vh;
                            background-color: #222222;
                            color: #fff;
                            border: 1px solid #444444;
                            border-radius: 5px;
                            color-scheme: dark;
                            font-size: 1rem;
                            padding-inline: 0.5rem;
                            @media(max-width: 992px) {
                                width: 30vw
                            }
                            @media(max-width: 539px) {
                                width: 45vw;
                            }
                        }

                        textarea {
                            width: 100%;
                            background-color: #222222;
                            resize: none;
                            border: 1px solid #444444;
                            border-radius: 5px;
                            color: #fff;
                            font-size: 0.9rem;
                            font-family: inherit;
                            padding: 0.5rem;

                            @media(min-width: 1024px) and (max-width: 1365px) {
                                height: 10vh;
                            }
                            @media(max-width: 375px) {
                                height: 20vh;
                            }
                        }

                        span.items {
                            width: 100%;
                            max-height: 10vh;
                            display: flex;
                            flex-flow: row wrap;
                            gap: 1rem;
                            overflow-y: auto;

                            ::-webkit-scrollbar {
                                width: 2px;
                            }
                            ::-webkit-scrollbar-track {
                                background: #222222;
                            }
                            ::-webkit-scrollbar-thumb {
                                background: #444444;
                            }

                            input {
                                width: 32.5vw;
                                @media(max-width: 992px) {
                                    width: 60vw
                                }
                                @media(max-width: 539px) {
                                    width: 75vw;
                                }
                            }
                            span {
                                display: flex;
                                gap: 0.5rem;
                                align-items: center;

                                span.remove-item {
                                    width: 1.5rem;
                                    height: 1.5rem;
                                    display: flex;
                                    align-items: flex-start;
                                    justify-content: center;
                                    border: 1px solid #444444;
                                    border-radius: 50%;
                                    cursor: pointer;
                                    transition: all 200ms ease;

                                    &:hover {
                                        background-color: #444444;
                                    }
                                }
                            }
                        }

                        button.add-item {
                            position: absolute;
                            height: 4vh;
                            font-weight: bold;
                            background-color: transparent;
                            color: #fff;
                            border: 1px solid #444444;
                            border-radius: 5px;
                            padding-inline: 0.7rem;;
                            right: 3px;
                            bottom: 1px;
                            cursor: pointer;
                            transition: all 200ms ease;

                            &:hover {
                                background-color: #444444;
                            }
                        }

                        :nth-last-of-type(1) {
                            border-top: 1px solid #444444;
                            padding-top: 1rem;

                            button {
                                font-size: 1rem;
                                font-weight: bold;
                                color: #fff;
                                border-radius: 5px;
                                width: 5vw;
                                height: 3.5vh;
                                cursor: pointer;
                                transition: all 300ms ease;
                                
                                :nth-child(2) {
                                    background-color: #007cde;
                                    border: 1px solid #007cde;
                                    &:hover {
                                        background-color: transparent;
                                    }
                                }
                                
                                :nth-child(1) {
                                    background-color: transparent;
                                    border: 1px solid #444444;
                                    &:hover {
                                        background-color: #444444;
                                    }
                                }

                                @media(min-width: 1024px) and (max-width: 1365px) {
                                    height: 4.5vh;
                                    width: 6vw;
                                }
                                @media(max-width: 992px) {
                                    width: 10vw;
                                }
                                @media(max-width: 539px) {
                                    width: 18vw;
                                }
                            }
                        }
                    }

                    // 19 inch in window mode
                    @media(height: 757px) {
                        transform: scale(0.96)
                    }
                    // 15 inch in window mode
                    @media(height: 625px) {
                        padding-top: 0;
                        margin-top: -1rem;
                        transform: scale(0.88, 0.85);
                    }
                }

                div.quote-sent {
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
                        justify-content: center;
                        align-items: center;
                        font-size: 4rem;
                        color: #007cde;
                    }
                    p {
                        font-size: 1.5rem;
                        text-align: center;
                    }
                }
            }
        }
    }
    

    @media(max-width: 540px) {
        min-height: 85rem;
    }

    @media(max-width: 992px) {
        height: 70vh;
    }

    @media(min-width: 993px) and (max-width: 1024px) {
        height: 100vh;
    }
`

const CardsContainer = styled.div`
    width: 100%;
    height: fit-content;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;



    @media(max-width: 540px) {
        flex-direction: column;
        pad ding-top: 3rem;
    }

    @media(max-width: 992px) {
        padding-inline: 1rem;
    }

    @media(min-width: 993px) and (max-width: 1024px) {
        padding-inline: 6rem;
    }


    @media(min-width: 1280px) and (max-width: 1439px) {
        padding-inline: 21vw;
    }

    @media(min-width: 1440px) and (max-width: 1679px) {
        padding-inline: 22vw;
    }
`

const ServiceCard = styled.div`
    width: 20.5rem;
    height: 22.4rem;
    border: 1px solid #444444;
    border-radius: 10px;
    transition: all 300ms ease-in-out;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    color: #cfcfcf;

    :nth-child(2) {
        height: 23.6rem;
        box-shadow: 0 0 7px rgb(255 255 255 / 12%);
    }



    &:hover {
        transform: translateY(-4%);
        margin-inline: 0.3rem;
        box-shadow: 0 0 12px rgb(255 255 255 / 12%);
    }
        

    h4{
        margin: 0;
        font-size: medium;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #007CED;
    }

    p.price {
        font-size: xx-large;
        font-weight: 600;
        margin-top: 1.3rem;
        margin-bottom: 0;
    }

    button {
        background-color: transparent;
        color: #cfcfcf;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.7rem 1.2rem;
        margin-top: 1.3rem;
        margin-bottom: 1.7rem;
        border: 1px solid #007CED;
        border-radius: 20px;
        cursor: pointer;
        transition: background-color 300ms ease-in-out;

        &:hover {
            background-color: #007cde;
        }
    }

    p.service {
        margin-block: 0.3rem;
    }

   
    // Tablets responsiveness
    @media(min-width: 993px) and (max-width: 1024px) {
        height: 20rem;

        :nth-child(2) {
            height: 21rem;
        }
    }

    @media(min-width: 1280px) and (max-width: 1365px) {
        height: 18rem;

        :nth-child(2) {
            height: 19rem;
        }

        h4 {
            font-size: 0.8rem;
        }

        p.price {
            font-size: 1.7rem;
        }

        button {
            font-size: 0.7rem;
            padding: 0.5rem 0.9rem;
        }

        p.service {
            font-size: 0.8rem;
            margin-block: 0.1rem;
        }
    }

    @media(min-width: 1366px) and (max-width: 1439px) {
        height: 19rem;

        :nth-child(2) {
            height: 20.5rem;
        }

        h4,p.price,button,p.service {
            transform: scale(0.85);
        }
    }


    @media(min-width: 1440px) and (max-width: 1679px) {
        height: 20rem;

        :nth-child(2) {
            height: 21rem;
        }

        h4,p.price,button,p.service {
            transform: scale(0.9);
        }
    }
`

const Services = () => {

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setScroll(window.scrollY);

        let handleHeight = debounce(() => setHeight(window.innerHeight, 10));
        let handleWidth = debounce(() => setWidth(window.innerWidth), 10);
        let handleScroll = debounce(() => setScroll(window.scrollY), 1);

        window.addEventListener('resize', handleWidth);
        window.addEventListener('resize', handleHeight);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleWidth);
            window.removeEventListener('resize', handleHeight);
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);



    /* Handle request quote modal */
    const openModla = (modalId) => {
        window.scrollTo({ top: document.getElementById("services").offsetTop - 127 });
        document.getElementById(modalId).style.display = "flex";
        document.querySelector("body").style.overflow = "hidden";
        setIsSent(false);
        setItemsArray([1, 2]);
    }

    const closeModal = (e, modalId) => {
        e.preventDefault();
        document.getElementById(modalId).style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    }

    // Handle add item
    const [itemsArray, setItemsArray] = useState([1, 2]);
    const addItem = (e) => {
        e.preventDefault();
        let newElNum = itemsArray.indexOf(itemsArray[itemsArray.length - 1]) + 2;
        const newEl = newElNum;
        const newArr1 = [...itemsArray, newEl];
        setItemsArray(newArr1);
        const newArr2 = [...itemsArray, newEl];
        setItemsArray(newArr2);
    };

    const deleteItem = (item) => {
        let elIndex = itemsArray.indexOf(item);
        if (elIndex > -1) {
            itemsArray.splice(elIndex, 1);
            const newArr1 = [...itemsArray];
            setItemsArray(newArr1);
        }
    };

    // add item content to array
    const addItemsToArray = (arr, id, serviceType) => {
        let newArr = [],
            newEl;
        for (let i = 0; i <= arr.length - 1; i++) {
            newEl = document.getElementById(`${serviceType}${id}${i}`).value
            newArr = [...newArr, newEl]
        }
        return newArr
    }


    // Handle send quote
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const [projectType, setProjectType] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");


    const submit = async (e, serviceType) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('/api/submitQuoteRequest', {
                subject: `${serviceType} Quote Request`,
                projectType: projectType,
                clientEmail: clientEmail,
                startDate: startDate,
                endDate: endDate,
                description: description,
                items: addItemsToArray(itemsArray, "item", serviceType)
            })
            setIsSent(true);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    };

    /* End Handle request quote modal */

    return (
        <Container id="services">
            <svg className={styles.servicesLine} viewBox="0 0 1597 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={
                    scroll >= 1300
                        || (height === 625 && scroll >= 1000)
                        || (height === 757 && scroll >= 1000)
                        ? styles.drawServicesLine : null
                }
                    d="M0 128C0 128 315.5 128 318 128C320.5 128 322.5 126 322.5 123.5V1H1597"
                />
            </svg>

            <h1 className={
                (width > 992 && scroll >= 1300)
                    || (width <= 1024 && scroll >= 1000)
                    || (height === 625 && scroll >= 1000)
                    || (height === 757 && scroll >= 1000)
                    ? styles.servicesTitleShow : styles.servicesTitleHide}
            >
                Services
            </h1>

            <div className={
                scroll >= 1300
                    || (height === 625 && scroll >= 1000)
                    || (height === 757 && scroll >= 1000)
                    ? styles.servicesCircleShow : styles.servicesCircleHide
            }
            >
                <div className={
                    scroll >= 1300
                        || (height === 625 && scroll >= 1000)
                        || (height === 757 && scroll >= 1000)
                        ? styles.servicesSquareShow : styles.servicesSquareHide}
                />
            </div>

            <span className={
                scroll >= 1300
                    || (height === 625 && scroll >= 1000)
                    || (height === 757 && scroll >= 1000)
                    ? styles.showIcon : styles.hideIcon
            }
            >
                <Tools />
            </span>

            {/* Mobile view */}
            <svg className={styles.mobileViewLine} viewBox="0 0 654 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={
                    scroll > 900 ? styles.drawMobileLine : null} d="M0 1H654" stroke="url(#paint0_linear_605_1903)" />
                <defs>
                    <linearGradient id="paint0_linear_605_1903" x1="169" y1="1" x2="654" y2="1" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#007CED" />
                        <stop stopColor="#75B8F5" />
                        <stop stopColor="#444444" />
                    </linearGradient>
                </defs>
            </svg>

            <CardsContainer className={
                (width > 992 && scroll >= 1300)
                    || (width <= 1024 && scroll >= 1000)
                    || (height === 625 && scroll >= 1000)
                    || (height === 757 && scroll >= 1000)
                    ? styles.showCardsContainer : styles.hideCardsContainer
            }
            >
                {
                    services && services.map(service => (
                        <ServiceCard key={service.type}>
                            <h4>{service.type}</h4>
                            <p className='price'>${service.price}/h</p>
                            <button onClick={() => openModla(`${service.price}service-modal`)}>Request a quote</button>
                            {
                                service && service.serviceDetails.map(item => (
                                    <p key={item} className='service'>{item}</p>
                                ))
                            }
                        </ServiceCard>
                    ))
                }
            </CardsContainer>
            {
                services && services.map(service => (
                    <div
                        key={`${service.price}service-modal`}
                        id={`${service.price}service-modal`}
                        className='service-modal'
                    >
                        <div className='service-modal-body'>
                            {
                                loading &&
                                <LoadingBar align="bottom" />
                            }
                            <span className='close-modal' onClick={(e) => closeModal(e, `${service.price}service-modal`)}>x</span>
                            <h3>{service.type} Quote Request</h3>
                            <div className='modal-content'>
                                {
                                    !isSent
                                        ?
                                        <form onSubmit={(e) => submit(e, service.type)}>
                                            <div>
                                                <label>Project Type:</label><br />
                                                <input
                                                    type="text"
                                                    placeholder='Enter project type'
                                                    onChange={(e) => setProjectType(e.target.value)}
                                                    required
                                                />

                                            </div>

                                            <div>
                                                <span>
                                                    <label>From:</label><br />
                                                    <input
                                                        type="email"
                                                        placeholder='Enter your email'
                                                        onChange={(e) => setClientEmail(e.target.value)}
                                                        required
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                    />

                                                </span>

                                                <span>

                                                    <label>To:</label><br />
                                                    <span>kareemabbas066@gmail.com</span>
                                                </span>
                                            </div>

                                            <div>
                                                <span>
                                                    <label>Start Date:</label><br />
                                                    <input
                                                        type='date'
                                                        onChange={(e) => setStartDate(e.target.value)}
                                                        required
                                                    />

                                                </span>

                                                <span>
                                                    <label>End Date:</label><br />
                                                    <input
                                                        type='date'
                                                        onChange={(e) => setEndDate(e.target.value)}
                                                        required
                                                    />

                                                </span>
                                            </div>

                                            <div>
                                                <label>Project Description:</label><br />
                                                <textarea
                                                    rows="10"
                                                    type="text"
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    required
                                                />

                                            </div>

                                            <div>
                                                <p>Items</p>
                                                <span className='items'>
                                                    {
                                                        itemsArray && itemsArray.map(item => (
                                                            <span key={item}>
                                                                <input
                                                                    className='items'
                                                                    type="text"
                                                                    id={`${service.type}item${itemsArray.indexOf(item)}`}
                                                                />
                                                                <span className='remove-item' onClick={() => deleteItem(item)}>x</span>
                                                            </span>

                                                        ))
                                                    }
                                                </span>
                                                <button className='add-item' onClick={(e) => addItem(e)}>Add Item</button>
                                            </div>

                                            <div>
                                                <button onClick={(e) => closeModal(e, `${service.price}service-modal`)}>Cancel</button>
                                                <button >Send</button>
                                            </div>
                                        </form>
                                        :
                                        <div className='quote-sent'>
                                            <div>
                                                &#10003;
                                            </div>
                                            <p>Your quote request has been sent successfully,<br /> I will send you the project's quote soon.<br /><br />Thanks for choosing my service.</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}

export default Services