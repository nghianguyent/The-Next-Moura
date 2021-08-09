import PropTypes from 'prop-types'

import StyledBaseBox from './BaseBox'

const BoxWrapper = (Component, props) => {
    const { children, ...rest } = props
    return <Component {...rest}>{children}</Component>
}

const Box = (props) => BoxWrapper(StyledBaseBox, props)
/* Add Box variants here after define the Styled Component in the separate file */

Box.propTypes = {
    padding: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
}

export { Box }
