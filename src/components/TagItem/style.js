import styled from 'styled-components'

import theme from '../../theme'

export const BoardContent = styled.div`
    position: fixed;
    width: 200px;
    background-color: ${theme.white};
    border: 1px solid ${theme.borderDarkWhite};
    box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
    border-radius: 3px;
`
export const BoardTitle = styled.div`
    padding: 10px 0;
`

export const BoardHeader = styled.h3`
    text-align: center;
`

export const BoardItem = styled.div`
    display: block;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    padding-left: 16px;
    padding-right: 16px;
    &:hover {
        background-color: ${theme.almostWhite};
    }
`

export const BoardText = styled.a`
    font-size: 14px;
`
