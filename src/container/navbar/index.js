import { Button } from '../../components/Button'
import { MouraIcon } from '../../components/Icon'

import userIcon from '../../assets/images/user-icon.jpeg'
import {
    NavbarContainer,
    NavbarContent,
    Logo,
    NavbarItem,
    SearchBox,
    SearchBar,
    SearchInput,
    NavButton,
    ButtonWrapper,
    UserIcon,
} from './style'

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo>
                    <MouraIcon width="100px" height="50px"></MouraIcon>
                </Logo>
                <NavbarItem>
                    <SearchBox>
                        <SearchBar>
                            <SearchInput placeholder="Search Moura"></SearchInput>
                        </SearchBar>
                    </SearchBox>
                    <NavButton>
                        <ButtonWrapper>
                            <Button padding="0 8px 0 8px" border="none">
                                <UserIcon src={userIcon}></UserIcon>
                            </Button>
                        </ButtonWrapper>
                    </NavButton>
                </NavbarItem>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
