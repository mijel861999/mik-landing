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