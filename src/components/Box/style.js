import styled from 'styled-components'

export const StyledBox = styled.div`
    display: flex;
    width: ${(props) => props.width || 'auto'};
    margin: ${(props) => props.margin || 'unset'};
    height: ${(props) => props.height || 'auto'};
    padding: ${(props) => props.padding || '3px 0px'};
`
