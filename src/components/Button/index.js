import PropTypes from 'prop-types'

import StyledBaseButton from './BaseButton'

const ButtonWrapper = (Component, props) => {
    const { children, ...rest } = props
    return <Component {...rest}>{children}</Component>
}

const Button = (props) => ButtonWrapper(StyledBaseButton, props)
/* Add Button variants here after define the Styled Component in the separate file s*/

Button.propTypes = {
    fullWidth: PropTypes.bool,
    padding: PropTypes.string,
    center: PropTypes.bool,
    border: PropTypes.string,
}

export { Button }
