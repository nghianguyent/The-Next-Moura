import styled from 'styled-components'

import background from '../../assets/images/bg.jpg'

export const FullPageContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    background-color: white;
    border: 1px solid #dee0e1;
    border-radius: 2px;
`
export const LoginContainer = styled.div`
    border-radius: 2px;
    padding: 0 1rem;
    margin-bottom: 50px;
`
export const Footer = styled.div`
    width: 100%;
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
    padding-bottom: 50px;
    margin-top: 30px;
`
export const LinkToApi = styled.a`
    text-decoration: none;
    width: 100%;
`
