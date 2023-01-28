import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';
import debounce from 'lodash/debounce';


const BurgerMenu = styled.div`
    width: 3rem;
    height: 2.1rem;
    position: fixed;
    right: 4rem;
    z-index: 10;
    display: ${({ width, scroll }) => width <= 990
        ? "flex"
        : width > 990 && scroll > 70 ? "flex"
            : "none"
    };
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    div {
        width: 2.8rem;
        height: 0.20rem;
        background-color: ${({ open }) => open ? "#ccc" : "#fff"};
        transform-origin: 6px;
        transition: all 300ms ease-in-out;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    // Mobile & tablet break point
    @media(max-width: 540px) {
        transform: scale(0.7);
        right: 0.5rem;
    }

    @media(min-width: 768px) {
        right: 1rem;
    }


    // Mini laptop
    @media(min-width: 1024px) {
        transform: scale(0.75);
        right: 1.5rem;
    }

    // 13 inch laptop
    @media(min-width: 1280px) {
        transform: scale(0.75);
        right: 1.5rem;
    }
    
    // 19 inch
    @media(min-width: 1440px) {
        width: 3rem;
        height: 2.1rem;
        right: 2rem;
    }

    // 22 inch
    @media(min-width: 1440px) {
        transform: scale(0.9);
        right: 2rem;
    }
`

const Burger = ({ open, setOpen, scroll, width, onLinkClick }) => {

    
    const handleSideNav = () => {
        if (open === false) {
            setOpen(true);
            document.querySelector('body').style.overflowY = "hidden";
            document.getElementById("hero-img").style.zIndex = -1;
        } else if (open === true) {
            setOpen(false);
            document.querySelector('body').style.overflowY = "auto";
            document.getElementById("hero-img").style.zIndex = 'unset';
        }
    }

    return (
        <>
            <BurgerMenu id="side-menu" open={open} width={width} scroll={scroll} onClick={handleSideNav}>
                <div />
                <div />
                <div />
            </BurgerMenu>
            <SideNav
                open={open}
                setOpen={setOpen}
                width={width}
                scroll={scroll}
                onLinkClick={onLinkClick}
            />
        </>
    )
}

export default Burger