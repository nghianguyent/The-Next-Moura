import styled from 'styled-components'

const StyledBaseButton = styled.button`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    background: white;
    border: ${(props) =>
        props.border === null ? '1px solid' + props.theme.darkWhite : props.border};
    font-weight: 100;
    display: flex;
    justify-content: ${(props) => props.center};
    align-items: center;
    font-size: 12px;
    padding: ${(props) => props.padding};
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
`

StyledBaseButton.defaultProps = {
    fullWidth: false,
    padding: '3px 3px',
    center: 'unset',
}

export default StyledBaseButton
