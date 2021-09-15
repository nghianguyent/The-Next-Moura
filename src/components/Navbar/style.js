import styled from 'styled-components'

import theme from '../../theme'

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0px;
    min-height: 50px;
    padding-right: 0;
    box-shadow: 0 3px 6px rgb(0 0 0 / 4%);
    width: 100%;
    z-index: 100;
    background-color: ${theme.white};
`
export const NavbarContent = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    height: 100%;
`

export const Logo = styled.a`
    cursor: pointer;
    margin-right: 20px;
    transition-timing-function: ease-out;
    transition-duration: 180ms;
    &:hover {
        opacity: 0.7;
    }
`

export const NavbarItem = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
`

export const SearchBox = styled.div`
    margin-right: 16px;
    margin-left: 16px;
`

export const SearchIcon = styled.span`
    padding-top: 5px;
    padding-right: 4px;
`

export const SearchBar = styled.div`
    display: flex;
    border: 1px solid ${theme.borderDarkWhite};
    width: 580px;
    border-radius: 3px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    transition-timing-function: ease-out;
    transition-duration: 180ms;
    &:hover {
        border-color: ${theme.blue};
    }
`

export const SearchInput = styled.input`
    width: 100%;
    box-shadow: none;
    padding: 0;
    min-height: 26px;
    border: none;
    &:focus {
        outline: none;
    }
`

export const ButtonWrapper = styled.div`
    padding: auto;
    width: 40px;
`

export const NavButton = styled.button`
    cursor: pointer;
    padding: 0;
    margin: auto;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    transition-timing-function: ease-out;
    transition-duration: 180ms;
    &:hover {
        background-color: ${theme.hoverDarkWhite};
    }
`

export const UserIcon = styled.img`
    width: 24px;
    height: 24px;
    position: relative;
    border-radius: 100%;
    transition-timing-function: ease-out;
    transition-duration: 180ms;
    ${NavButton}:hover & {
        opacity: 0.7;
    }
`

export const AskButton = styled.button`
    margin-left: 16px;
    padding: 0 15px;
    cursor: pointer;
    height: 30px;
    min-width: 110px;
    border-width: 0px;
    outline: none;
    text-align: center;
    border-radius: 1000px;
    background-color: ${theme.buttonRed};
    transition-timing-function: ease-out;
    transition-duration: 60ms;
    &:hover {
        background-color: rgb(168, 39, 35);
    }
`

export const AskButtonContent = styled.div`
    font-size: 13px;
    color: ${theme.white};
`

export const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    width: 230px;
    min-height: 200px;
    transform: translateX(-40%);
    background-color: ${theme.white};
    border: 1px solid ${theme.borderDarkWhite};
    border-radius: 3px;
`

export const UserProfile = styled.div`
    border-bottom: 1px solid ${theme.borderDarkWhite};
    padding: 8px 16px;
`

export const DropDownUserIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-bottom: 8px;
    margin-top: 16px;
`

export const DropDownUserName = styled.span`
    display: block;
    word-break: break-word;
    line-height: 1.4;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
`

export const DropDownItems = styled.a`
    border-bottom: 1px solid ${theme.borderDarkWhite};
`

export const DropDownButtons = styled.a`
    display: block;
    cursor: pointer;
    align-items: center;
    font-size: 14px;
    padding: 10px 0;
    padding-left: 16px;
    padding-right: 16px;
    &:hover {
        background-color: ${theme.hoverDarkWhite};
    }
`

export const DropDownButtonsSpan = styled.span`
    padding-top: auto;
`

export const DropDownButtonsIcon = styled.span`
    margin-right: 8px;
`
export const DropDownInfo = styled.div`
    background-color: ${theme.hoverDarkWhite};
    text-align: center;
    padding: 10px;
    color: ${theme.gray};
`
