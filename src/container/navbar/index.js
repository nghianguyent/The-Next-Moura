import { useState, useRef, useEffect } from 'react'

import { MouraIcon } from '../../components/Icon'

import userIcon from '../../assets/images/user-icon.jpeg'
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
    DropDown,
    UserProfile,
    DropDownUserIcon,
    DropDownUserName,
    DropDownItems,
    DropDownButtons,
    DropDownButtonsSpan,
    DropDownButtonsIcon,
    DropDownInfo,
} from './style'

const DropDownMenu = (props) => {
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    props.close()
                }
            }
            window.addEventListener('mousedown', handleClickOutside)
            return () => {
                window.addEventListener('mousedown', handleClickOutside)
            }
        }, [ref])
    }

    return (
        <DropDown ref={wrapperRef}>
            <UserProfile>
                <DropDownUserIcon src={userIcon} alt="userIcon"></DropDownUserIcon>
                <DropDownUserName>Hoang Hiep</DropDownUserName>
            </UserProfile>
            <DropDownItems>
                <DropDownButtons>
                    <DropDownButtonsIcon>🔔</DropDownButtonsIcon>
                    <DropDownButtonsSpan>Thông báo</DropDownButtonsSpan>
                </DropDownButtons>
                <DropDownButtons>
                    <DropDownButtonsIcon>🌙</DropDownButtonsIcon>
                    <DropDownButtonsSpan>Dark mode</DropDownButtonsSpan>
                </DropDownButtons>
                <DropDownButtons>
                    <DropDownButtonsIcon>👋</DropDownButtonsIcon>
                    <DropDownButtonsSpan>Đăng xuất</DropDownButtonsSpan>
                </DropDownButtons>
            </DropDownItems>
            <DropDownInfo>Moura team</DropDownInfo>
        </DropDown>
    )
}

function Navbar() {
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
                        {open && <DropDownMenu close={() => handleClickOutside()}></DropDownMenu>}
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
