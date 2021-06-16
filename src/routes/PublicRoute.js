import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import LocalStorageUtils from './utils/LocalStorageUtils'

export const PublicRoute = (props) => {
    const user = LocalStorageUtils.getUser()
    if (!user || user.sub?.length <= 0) {
        return <Route {...props} />
    }
    return <Redirect path="/home" />
}
