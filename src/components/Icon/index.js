import PropTypes from 'prop-types'

import Facebook from './facebook'
import Google from './google'
import Ninja from './ninja'
import { makeStyleIcon } from './style'

const propsType = {
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
}
export const GoogleIcon = (props) => makeStyleIcon(Google, props)
export const FacebookIcon = (props) => makeStyleIcon(Facebook, props)
export const NinjaIcon = (props) => makeStyleIcon(Ninja, props)

NinjaIcon.propTypes = propsType
GoogleIcon.propTypes = propsType
FacebookIcon.propTypes = propsType
