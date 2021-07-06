import { useForm } from 'react-hook-form'

import { Box } from '../../components/Box'
import { Button } from '../../components/Button/index'
import { FacebookIcon, GoogleIcon, NinjaIcon } from '../../components/Icon'

import { LOCALSTORAGE_TOKEN_NAME } from './../../config'
import { post } from './../../utils/ApiCaller'
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
    const Login = async (data) => {
        try {
            const response = await post(
                '/api/v1/auth/google/',
                {
                    token: data.accessToken,
                },
                {}
            )
            if (response.data.success) {
                setToken(response.data.data.token)
                location.reload()
            }
            console.log(response.data.data.token)
        } catch (ex) {
            if (ex.respond && ex.status === 401) {
                setError('user', {
                    type: 'validate',
                    message: 'cannot access token',
                })
            }
        }
    }
    return (
        <FullPageContainer>
            <LoginBox>
                <LoginContainer>
                    <Logo>
                        <NinjaIcon width="100px" height="120px" />
                    </Logo>
                    <Description>
                        Lorem ipsum dolor sit amer, consectetur adipiscing elit, sed do eiusmod
                        tempor
                    </Description>
                    <Box padding="4rem 0 0 0">
                        <Button onClick={Login} padding="4px 8px" fullWidth>
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
