import styled from 'styled-components'

import theme from '../../theme'

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
