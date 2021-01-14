import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const ButtonText = styled(Link)`
    padding-right: 0;
    color: black;
    padding: 3px 25px;
    border: 2px solid black;
    background: ${props => props.primary ? '#D9A84E' : 'black'}; 
    border-radius: 6px;

    &:hover{
        background-color: black;
        text-decoration: none;
        color: #D9A84E;
    }

    @media screen and (max-width : 768px){
        & {
            font-size: 12px;
            color: black;
            padding: 3px 20px;
        }
    }    

    @media screen and (max-width : 540px){
        &{
            font-size: 10px;
        }
    }
`;

export const LinkMIK = styled(Link)`
    padding-right: 30px;
    color: black;
    font-weight: 500;

    &:hover{
        text-decoration: none;
        color: #A66038;      
    }

    @media screen and (max-width : 768px){
        & {
            font-size: 12px;
            color: #D9A84E;
        }
    }  

    @media screen and (max-width : 540px){
        &{
            font-size: 10px;
        }
    }
`; 

export const SkillSection = styled.section`
    position: relative;
`;

export const HabilityContainer = styled.div`
    height: 350px;
    width: 80%;
    position: absolute;
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: 65px;
    margin-left: auto; 
    margin-right: auto; 
`;

export const FirstCard = styled.div`
    position: absolute;
    width: 98%;
    height: 95%;
    z-index: 100;
    border-radius: 20px;
    top: 0;
    left: 0;
    background-color: #012326;
`;

export const SecondCard = styled.div`
    position: absolute;
    width: 98%;
    height: 95%;
    border-radius: 20px;
    bottom: 0;
    right: 0;
    background-color: #A66038;
`;



