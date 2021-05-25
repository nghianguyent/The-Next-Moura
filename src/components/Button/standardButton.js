import { StyledButton } from './style'

function StandardButton(props) {
    const { children, ...rest } = props
    return <StyledButton {...rest}>{children}</StyledButton>
}

export default StandardButton
