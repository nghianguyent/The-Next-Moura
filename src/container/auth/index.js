/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FacebookIcon, GoogleIcon, MouraIcon } from '../../components/Icon'

// import LocalStorageUtils from '../../utils/LocalStorageUtils';
import { LOCALSTORAGE_TOKEN_NAME } from './../../config'
//  import { post } from './../../utils/ApiCaller'
import { usePersistedState } from './../../utils/UsePersistedState'
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
    const { token, setToken } = usePersistedState(LOCALSTORAGE_TOKEN_NAME, '')

    const getUrl = () => {
        window.open('http://localhost:5000/api/v1/auth/google', '_blank')
        return window.location.href
    }
    const Login = async () => {
        const newWindow = window.open('http://localhost:5000/api/v1/auth/google', '_blank')
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setToken(res.token)
            console.log(token)
        }, 1000)
        return clearInterval(interval)
    })
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
