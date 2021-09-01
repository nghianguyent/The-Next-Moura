import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import LocalStorageUtils from '../utils/LocalStorageUtils'

export const PrivateRoute = ({ component, ...rest }) => {
    const user = LocalStorageUtils.getUser()
    if (user) {
        return <Route {...rest} component={component} />
    }
    return <Redirect to="/login" />
}
