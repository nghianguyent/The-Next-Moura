import styled from 'styled-components'

const StyledBaseBox = styled.div`
    display: flex;
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
`

StyledBaseBox.defaultProps = {
    width: 'auto',
    margin: 'unset',
    height: 'auto',
    padding: '3px 0px',
}

export default StyledBaseBox
