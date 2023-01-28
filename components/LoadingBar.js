import React from 'react';
import styled from 'styled-components';


const Loading = styled.div`
    position: absolute;
    width: 98%;
    top: ${(props) => props.align === "top" && 0};
    bottom: ${(props) => props.align === "bottom" && 0};
    left: 1%;

    div {
        width: 100%;
        padding-block: 1px;
        border-radius: 5px;
        background: rgba(0,124,222, 0.2);

        div.percentage {
            position: relative;
            height: 3px;
            border-radius: 5px;
            background: #007cde;
            animation: animate 1s linear infinite;
            
            @keyframes animate {
                0% {
                    width: 0;
                    left: 0;
                }
                50% {
                    width: 100%;
                    left: 0;
                }
                100% {
                    width: 0;
                    left: 100%;
                }
            }
        }

    }
`
const LoadingBar = ({ align }) => {
  return (
    <Loading align={align}>
        <div>
            <div className='percentage'></div>
        </div>
    </Loading>
  )
}

export default LoadingBar