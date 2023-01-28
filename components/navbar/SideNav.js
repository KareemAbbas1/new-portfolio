import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const NavLinks = styled.ul`
    list-style: none;
    top: 0;
    width: ${({ open }) => open ? "100vw" : "fit-content"};
    height: ${({ open }) => open && "100vh"};
    background-color: ${({ open }) => open ? "#000" : "transparent"};
    position: ${({ open }) => open ? "fixed" : "relative"};
    top: 0;
    right: 0;
    margin: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${({ open, scroll, width }) => open ? 'translateX(0)' : !open && scroll < 70 && width > 990 ? 'unset' : `translateX(100%)`};
    transition: transform 300ms ease-in-out;


    div {
        display: flex;
        align-items: center;
        flex-flow: ${({ open }) => open ? "column nowrap" : "row"};
        width: 100%;

        li {
            margin-inline: ${({ open }) => open === false && "2.1rem"};
            margin-block: ${({ open }) => open && "1rem"};
            font-size: ${({ open }) => open ? "2rem" : "16px"};
            font-weight: 600;
            font-style: normal;
            cursor: pointer;

            &:nth-child(1) {
                color: ${({ open }) => !open && "#007CED"};
            }

            ::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: #007CED;
                transition: width .3s;
            }
            &:hover::after {
                width: 100%;
            }

            // Mini laptop break point
            @media(min-width: 1024px) {
                font-size: ${({ open }) => open ? "2rem" : "10px"};
                margin-inline: 1rem;
            }

            // 13 inch laptop
            @media(min-width: 1280px) {
                font-size: ${({ open }) => open ? "2rem" : "13px"};
                margin-inline: 1.3rem;
            }
            
            // 19 inch
            @media(min-width: 1440px) {
                margin-inline: 1.5rem;
            }
            
            // 22 inch
            @media(min-width: 1680px) {
                font-size: ${({ open }) => open ? "2rem" : "15px"};
                margin-inline: 1.7rem;
            }

            // 24 inch 
            @media(min-width: 1920px) {
                font-size: ${({ open }) => open ? "2rem" : "15px"};
                margin-inline: 2.5rem;
            }

            // Mobile & mini table
            @media(max-width: 540px) {
                margin-right: ${({ open }) => open && "2rem"};
            }
        }
    }
`

const SideNav = ({ open, setOpen, width, scroll, onLinkClick }) => {

   
    // useEffect(() => {
        
    //     const navbarVisibility = () => {
    //         if(scroll > 70 || width < 990) {
    //             document.getElementById("side-menu").style.display = "flex";
    //         }
    //         else if(scroll < 70 && width > 990) {
    //             document.getElementById("side-menu").style.display = "none";
    //         }
    //         else {
    //             document.getElementById("side-menu").style.display = "none";
    //         }
    //     }

    //     window.addEventListener('scroll', navbarVisibility);

    //     return () => {
    //         window.removeEventListener('scroll', navbarVisibility);
    //     }
    // }, [open, scroll, width]);

    return (
        <NavLinks id="top-nav" open={open} scroll={scroll} width={width}>
            <div>
                <li><Link goto='about-me' onClick={(e) => onLinkClick(e)} href=''>About</Link></li>
                <li><Link goto='projects-section' onClick={(e) => onLinkClick(e)} href=''>Projects</Link></li>
                <li><Link goto='services' onClick={(e) => onLinkClick(e)} href=''>Services</Link></li>
                <li><Link goto='education' onClick={(e) => onLinkClick(e)} href=''>Resume</Link></li>
                <li><Link goto='skills' onClick={(e) => onLinkClick(e)} href=''>Skills</Link></li>
                <li><Link goto='contact-me' onClick={(e) => onLinkClick(e)} href=''>Contact</Link></li>
            </div>
        </NavLinks>
    )
}

export default SideNav