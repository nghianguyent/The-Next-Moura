import React from 'react'

import PropTypes from 'prop-types'
import { CircleLoading } from 'react-loadingg'

const CircularProgress = (props) => {
    const { children, ...rest } = props
    return <CircleLoading {...rest}>{children}</CircleLoading>
}

CircularProgress.propsTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
}

export default CircularProgress
