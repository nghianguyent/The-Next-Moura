import React from 'react'

import { Switch } from 'react-router-dom'

import { LOCALSTORAGE_TOKEN_NAME } from './../config'
import Authenticate from './../container/Authenticate'
import Auth from './../container/auth'
import LocalStorageUtils from './../utils/LocalStorageUtils'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const publicRoute = [
    {
        name: 'login',
        path: '/login',
        component: Auth,
    },
]

export const privateRoute = [
    {
        name: 'Authentication',
        path: '/',
        component: Authenticate,
    },
]
console.log(LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME))
export const Routes = (
    <Switch>
        {publicRoute.map((route) => (
            <PublicRoute
                key={route.name}
                exact={true}
                path={route.path}
                component={route.component}
            />
        ))}
        {privateRoute.map((route) => (
            <PrivateRoute
                key={route.name}
                exact={true}
                path={route.path}
                component={route.component}
            />
        ))}
    </Switch>
)
