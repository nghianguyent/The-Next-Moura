import styled from 'styled-components'

import background from '../../assets/images/bg.jpg'

export const FullPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 1.5rem;
    min-height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const LoginBox = styled.div`
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 2px;
    padding: 0 1rem;
`
