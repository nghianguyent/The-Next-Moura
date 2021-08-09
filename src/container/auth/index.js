import { useForm } from 'react-hook-form'

import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FacebookIcon, GoogleIcon, MouraIcon } from '../../components/Icon'

import { LOCALSTORAGE_TOKEN_NAME } from './../../config'
import { get } from './../../utils/ApiCaller'
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
    const Login = async (media) => {
        // try {
        //     const response = await post(
        //         'http://localhost:5000/api/v1/auth/google',
        //         {
        //             'Access-Control-Request-Method': HEAD,
        //             token: data.accessToken,
        //         },
        //         {}
        //     )
        //     if (response.data.success) {
        //         setToken(response.data.data.token)
        //         location.reload()
        //     }
        //     console.log(response.data)
        // } catch (ex) {
        //     if (ex.respond && ex.status === 401) {
        //         setError('user', {
        //             type: 'validate',
        //             message: 'cannot access token',
        //         })
        //     }
        // }
        const response = await get(
            '/api/v1/auth/' + media,
            {},
            {
                'Access-Control-Allow-Origin': 'https://accounts.google.com/',
            }
        )
        console.log(response.data.data.accessToken)
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
