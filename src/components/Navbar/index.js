import { useState } from 'react'

import userIcon from '../../assets/images/user-icon.jpeg'
import DropDownMenu from '../Dropdown'
import { MouraIcon } from '../Icon'
import {
    NavbarContainer,
    NavbarContent,
    Logo,
    NavbarItem,
    SearchBox,
    SearchIcon,
    SearchBar,
    SearchInput,
    NavButton,
    ButtonWrapper,
    UserIcon,
    AskButton,
    AskButtonContent,
} from './style'

const Navbar = (props) => {
    const [open, setOpen] = useState(false)
    var trigger = false

    function toggleDropdown() {
        if (trigger) {
            trigger = false
        } else {
            setOpen(!open)
        }
    }

    function handleClickOutside() {
        setOpen(false)
        trigger = true
    }

    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo>
                    <MouraIcon width="100px" height="50px"></MouraIcon>
                </Logo>
                <NavbarItem>
                    <SearchBox>
                        <SearchBar>
                            <SearchIcon>🔎</SearchIcon>
                            <SearchInput placeholder="Search Moura"></SearchInput>
                        </SearchBar>
                    </SearchBox>
                    <ButtonWrapper>
                        <NavButton onMouseDown={() => toggleDropdown()}>
                            <UserIcon src={userIcon} alt="userIcon"></UserIcon>
                        </NavButton>
                        {open && (
                            <DropDownMenu
                                close={() => handleClickOutside()}
                                logout={props.logout}
                            ></DropDownMenu>
                        )}
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
