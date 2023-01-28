import { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from "../../styles/Home.module.css";




const Container = styled.div`
    width: 100%;
    height: 504px;
    background-color: #252525;
    padding-inline: 16%;
    position: relative;

    div.scrollable-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
        overflow-y: scroll;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            display: none;  
        }
        
        div.sides {
            height: 55%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            margin-bottom: 2rem;

            div {
                @media(min-width: 992px) {
                    :nth-child(4) {
                        margin-bottom: 4.1rem;
                    }
                }

                div.skill-data {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    
                    p {            
                        margin-bottom: -5px;
                        
                        :nth-child(1) {
                            font-size: 1.2rem;
                            font-weight: 500;
                        }
                        
                        :nth-child(2) {
                            font-size: 0.7rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 992px) {
        padding-inline: 1rem;
        margin-block: 5rem;
        height: 55vh;

        div.scrollable-container {
            flex-direction: column;
        }

        div.sides {
            min-height: 190%;
        }
    }

    // 10 inch
    @media(min-width: 1024px) and (max-width: 1279px) {
        padding-inline: 2rem;
        height: 80vh;
    }

    // 12 inch
    @media(min-width: 1280px) and (max-width: 1680px) {
        padding-inline: 11.5vw;
        height: 64vh;
    }

    // 19 inch
    @media(min-width: 1440px) and (max-width: 1679px) {
        height: 56.9vh;
    }

    // 22 inch 
    @media(min-width: 1680px) and (max-width: 1919px) {
        height: 48.8vh;
    }
`

const SkillBar = styled.div`
    width: 620px;
    height: 12px;
    border: 2px solid #434343;
    border-radius: 54px;
    position: relative;
    margin-block: 1rem;

    div.progress-bar {
        width: ${({ percent }) => percent};
        height: 0px;
        border: 2px solid #007CED;
        border-radius: 12px;
        margin: 2px;
    }

    @media(max-width: 992px) {
        width: 90vw;
    }

    // 10 inch
    @media(min-width: 1024px) and (max-width: 1279px) {
        width: 44vw;
    }

    @media(min-width: 1280px) and (max-width: 1680px) {
        width: 36vw;
    }
`

const Skills = ({ skills }) => {

    // split skills inot two columns
    const [firstCol, setFirstCol] = useState([]);
    const [secondCol, setSecondCol] = useState([]);

    useEffect(() => {
        const left = skills.slice(0, skills.length / 2);
        const right = skills.slice(skills.length / 2, skills.length - 1);

        // check if there is a remainder and add it to the left col
        if (skills.length % 2 > 0) {
            const arr = [...left, skills[skills.length - 1]];
            setFirstCol(arr);
        } else {
            setFirstCol(left);
        }
        setSecondCol(right);
    }, [skills])



    const scrollFunc = () => {
        const element = document.getElementById("skills-container");

        if (element.scrollTop === (element.scrollHeight - element.offsetHeight)) {
            document.getElementById("skills-scroll-icon").style.transform = 'rotate(180deg)';
            document.getElementById("skills-scroll-icon").style.animation = "unset";
            // document.getElementById("skills-scroll-icon").style.bottom = "1vh";
        }
        else {
            document.getElementById("skills-scroll-icon").style.transform = 'unset';
            document.getElementById("skills-scroll-icon").style.bottom = "2vh";
        }
    }


    return (
        <Container id="skills">
            <div className='scrollable-container' id='skills-container' onScroll={scrollFunc}>
                <div className='sides'>
                    {
                        skills && firstCol.map(skill => (
                            <div key={skill.skill} style={{
                                marginBottom: `${skills.indexOf(skill) === 8 && 5}rem`
                            }}
                            >
                                <div className='skill-data'>
                                    <p>{skill.skill}</p>
                                    <p>{skill.proficiency}</p>
                                </div>
                                <SkillBar percent={skill.proficiency}>
                                    <div className='progress-bar' />
                                </SkillBar>
                            </div>
                        ))
                    }
                </div>

                <div className='sides'>
                    {
                        skills && secondCol.map(skill => (
                            <div key={skill.skill}>
                                <div className='skill-data'>
                                    <p>{skill.skill}</p>
                                    <p>{skill.proficiency}</p>
                                </div>
                                <SkillBar percent={skill.proficiency}>
                                    <div className='progress-bar' />
                                </SkillBar>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className={styles.skillsScrollIcon} id="skills-scroll-icon">
                <span />
                <span />
            </div>
            {/* <p id="scroll-text" className={styles.scrollText}>scroll</p> */}
        </Container>
    )
}

export default Skills