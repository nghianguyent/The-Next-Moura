import styled from 'styled-components'

export const StyledButton = styled.button`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    background: white;
    border: 1px solid #dee0e1;
    font-weight: 100;
    display: flex;
    justify-content: ${(props) => (props.center ? 'center' : 'unset')};
    align-items: center;
    font-size: 12px;
    padding: ${(props) => props.padding || '3px 3px'};
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
    /* min-width: 100px; */
    /* min-height: 15px; */
`
