import React from 'react'

import { CircleLoading } from 'react-loadingg'

const CircularProgress = (props) => {
    const { children, ...rest } = props
    return <CircleLoading {...rest}>{children}</CircleLoading>
}

CircularProgress = {
    color: PropTypes.string,
    size: PropTypes.string,
}

export default CircularProgress
