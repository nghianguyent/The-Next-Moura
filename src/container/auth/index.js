/* eslint-disable prettier/prettier */
import React from 'react'

// import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FacebookIcon, GoogleIcon, MouraIcon } from '../../components/Icon'

import LocalStorageUtils from '../../utils/LocalStorageUtils'
//  import { get } from './../../utils/ApiCaller'
import { usePersistedState } from '../../utils/UsePersistedState'
import { LOCALSTORAGE_TOKEN_NAME } from './../../config'
import {
    Description,
    Footer,
    FullPageContainer,
    HintBox,
    LoginBox,
    LoginContainer,
    Logo,
} from './style'

function Authentication() {
    const { setError } = useForm()
    const [token, setToken] = usePersistedState(LOCALSTORAGE_TOKEN_NAME, '')

    let response = LocalStorageUtils.getItem('res')

    const Login = async () => {
        let newWindow = window.open('http://localhost:5000/api/v1/auth/google', '_self')
        // let response = new Promise(() => {
        //     let request = new XMLHttpRequest()
        //     request.open('GET', 'login')
        //     request.onload = () => {
        //         if (request.status === 200) {
        //             console.log(request.response);
        //         } else {
        //             console.log("not found")
        //         }
        //     }
        //     request.send()
        // })
        newWindow.addEventListener('close', () => {
            window.location.reload()
        })
    }
    // if (response !== null && token === ""){
    //     setToken(response.token)
    // }
    return (
        <FullPageContainer>
            <LoginBox>
                <LoginContainer>
                    <Logo>
                        <MouraIcon width="200px" height="80px" />
                    </Logo>
                    <Description>
                        Lorem ipsum dolor sit amer, consectetur adipiscing elit, sed do eiusmod
                        tempor
                    </Description>
                    <Box padding="4rem 0 0 0">
                        <Button onClick={() => Login('google')} padding="4px 8px" fullWidth>
                            <Box margin="0px 10px 0px 0px">
                                <GoogleIcon width="30px" />
                            </Box>
                            Continue with Google
                        </Button>
                    </Box>
                    <Box padding="1rem 0">
                        <Button padding="4px 8px" fullWidth>
                            <Box margin="0px 10px 0px 0px">
                                <FacebookIcon width="30px" />
                            </Box>
                            Continue with Facebook
                        </Button>
                    </Box>
                </LoginContainer>
                <HintBox>Login to start ask your question on Moura</HintBox>
                <Footer>© Moura Inc. 2021</Footer>
            </LoginBox>
        </FullPageContainer>
    )
}

export default Authentication
