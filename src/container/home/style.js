import styled from 'styled-components'

import theme from '../../theme'

export const PageWrap = styled.div``

export const FullPageContainer = styled.div`
    min-height: 100vh;
    background-color: ${theme.homeBackgroundDarkWhite};
    padding-bottom: 16px;
`

export const HomeContent = styled.div`
    padding-top: 82px;
    width: 1228px;
    display: flex;
    margin: auto;
`

export const MainContent = styled.div`
    width: 768px;
`

export const AskingBox = styled.div`
    width: 100%;
    min-height: 83px;
    background-color: ${theme.white};
    padding: 16px 20px;
    cursor: pointer;
    text-align: left;
    border: 1px solid ${theme.borderDarkWhite};
    box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
    border-radius: 3px;
    margin-bottom: 8px;
`

export const AskingTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 14px;
`

export const UserIcon = styled.img`
    border-radius: 100%;
    width: 18px;
    height: 18px;
    margin-right: 4px;
`

export const UserName = styled.span`
    font-size: 13px;
    color: #939598;
`

export const AskQuestion = styled.span`
    font-weight: bold;
    line-height: 1.4;
    font-size: 18px;
    color: ${theme.textGray};
`

export const LoadingWrapper = styled.div`
    min-height: 100vh;
    background-color: ${theme.homeBackgroundDarkWhite};
    padding-bottom: 16px;
`
