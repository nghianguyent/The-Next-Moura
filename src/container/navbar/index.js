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
    AskButton,
    AskButtonContent,
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
                    <ButtonWrapper>
                        <NavButton>
                            <UserIcon src={userIcon}></UserIcon>
                        </NavButton>
                    </ButtonWrapper>
                    <AskButton>
                        <AskButtonContent>Đặt câu hỏi</AskButtonContent>
                    </AskButton>
                </NavbarItem>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
