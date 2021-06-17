import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import LocalStorageUtils from './../utils/LocalStorageUtils'

export const PrivateRoute = ({ components, ...rest }) => {
    const user = LocalStorageUtils.getUser()
    if (user && user.sub?.length > 0) {
        return <Route {...rest} component={components} />
    }
    return <Redirect path="/login" />
}
