import PropTypes from 'prop-types'

import Facebook from './facebook'
import Google from './google'
import Moura from './moura'
import { makeStyleIcon } from './style'

const GoogleIcon = (props) => makeStyleIcon(Google, props)
const FacebookIcon = (props) => makeStyleIcon(Facebook, props)
const MouraIcon = (props) => makeStyleIcon(Moura, props)

const propsType = {
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
}

GoogleIcon.propTypes = propsType
FacebookIcon.propTypes = propsType
MouraIcon.propTypes = propsType

export { GoogleIcon, FacebookIcon, MouraIcon }
