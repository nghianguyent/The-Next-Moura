import React from 'react'

import { useLocation, Redirect } from 'react-router-dom'

import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FacebookIcon, GoogleIcon, MouraIcon } from '../../components/Icon'

import LocalStorageUtils from './../../utils/LocalStorageUtils'
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
    let location = useLocation()
    const UrlParams = new URLSearchParams(location.search)

    // save token to localStorage
    let response = {
        success: UrlParams.get('success'),
        token: UrlParams.get('token'),
    }
    LocalStorageUtils.setItem('token', JSON.stringify(response.token))

    if (response.success === 'true') {
        return <Redirect to="/" />
    }

    const Login = (media) => {
        const ApiUrl = process.env.REACT_APP_API_URL + 'api/v1/auth/' + media
        window.open(ApiUrl, '_self')
    }

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
