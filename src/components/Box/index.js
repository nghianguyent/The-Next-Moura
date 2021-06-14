import PropTypes from 'prop-types'

import { StyledBox } from './style'

export const Box = (props) => {
    return <StyledBox {...props}></StyledBox>
}

Box.propTypes = {
    padding: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
}
