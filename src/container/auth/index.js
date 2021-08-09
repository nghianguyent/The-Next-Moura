import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FacebookIcon, GoogleIcon, MouraIcon } from '../../components/Icon'

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
                        <Button padding="4px 8px" fullWidth>
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
