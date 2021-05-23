import PropTypes from 'prop-types'

import StandardButton from './standardButton'

const propsType = {
    fullWidth: PropTypes.bool,
    padding: PropTypes.string,
    center: PropTypes.bool,
}
const ButtonWrapper = (Component, props) => {
    const { children, ...rest } = props
    return <Component {...rest}>{children}</Component>
}

const Button = (props) => ButtonWrapper(StandardButton, props)
Button.propTypes = propsType
export { Button, ButtonWrapper }
