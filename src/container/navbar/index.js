import { MouraIcon } from '../../components/Icon'

import {
    NavbarContainer,
    NavbarContent,
    Logo,
    NavbarItem,
    SearchBox,
    SearchBar,
    SearchInput,
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
                </NavbarItem>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar
