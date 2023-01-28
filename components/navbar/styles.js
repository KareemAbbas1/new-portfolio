import styled from "styled-components";


export const Nav = styled.div`
    width: 100vw;
    padding-block: 1.5rem;
    /* padding-top: 1.9rem; */
    padding-inline: 3rem;
    top: 0;
    left: 0;
    position: fixed;
    background-color: #222222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    overflow-x: hidden;
    z-index: 10;
    
    // Mobile & tablet break point
    @media(max-width: 540px) {
        img.logo {
            width: 6rem;
            height: auto;
        }
    }
    
    @media(max-width: 990px) {
        padding-block: 1.5rem;
        padding-inline: 1rem;
        border-bottom: 1px solid #444444;
    }

    // Mini laptop break point
    @media(min-width: 1024px) {
        padding-inline-start: 2rem;
        padding-inline-end: 1rem;
        img.logo {
            width: 6rem;
            height: auto;
        }
    }

    // 13 inch laptop 
    @media(min-width: 1280px) {
        padding-inline-start: 2rem;
        padding-inline-end: 1rem;
        
        img.logo {
            width: 6.5rem;
            height: auto;
        }
    }

    // 15 inch laptop 
    @media(min-width: 1366px) {
        padding-inline-start: 2.3rem;
        padding-inline-end: 1.5rem;

        img.logo {
            width: 6.7rem;
            height: auto;
        }
    }

    // 19 inch 
    @media(min-width: 1440px) {
        padding-inline-start: 3rem;
        img.logo {
            width: 7.5rem;
            height: auto;
        }
    }

    // 22 inch
    @media(min-width: 1680px) {
        padding-top: 2.5rem;
        img.logo {
            width: 9rem;
            height: auto;
        }
    }
`