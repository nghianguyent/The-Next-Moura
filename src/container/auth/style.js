import styled from 'styled-components'

import background from '../../assets/images/bg.jpg'

export const FullPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 3rem;
    min-height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const LoginBox = styled.div`
    width: 300px;
    /* height: 350px; */
    background-color: white;
    /* display: flex;
    flex-direction: column; */
    /* justify-content: space-between; */
    border: 1px solid #dee0e1;
    border-radius: 2px;
`
export const LoginContainer = styled.div`
    border-radius: 2px;
    padding: 0 1rem;
    margin-bottom: 50px;

    /* flex-direction: column; */
    /* justify-content: center; */
`
export const Footer = styled.div`
    width: 100%;
    /* height: 30px; */
    background-color: #dee0e1;
    align-self: flex-start;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
export const HintBox = styled.div`
    border-top-style: solid;
    border-width: 1px;
    border-color: #dee0e1;
    padding: 15px;
    text-align: center;
`
export const Description = styled.span`
    text-align: center;
    width: 100%;
    display: block;
`
export const Logo = styled.div`
    text-align: center;
    padding-bottom: 20px;
`
