import styled from 'styled-components'

// import theme from '../../theme'

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0px;
    min-height: 50px;
    padding-right: 0;
    box-shadow: 0 3px 6px rgb(0 0 0 / 4%);
    width: 100%;
`
export const NavbarContent = styled.div`
    max-width: 1002px;
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
    margin-right: 8px;
    margin-left: 24px;
`

// export const SearchForm = styled.form``

export const SearchBar = styled.div`
    display: flex;
    border: 1px solid #dee0e1;
    width: 600px;
    border-radius: 3px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
`

// export const

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
