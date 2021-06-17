import React from 'react'

import { Switch } from 'react-router-dom'

import Authenticate from '../container/Authenticate'
import Home from '../container/Home'
import Auth from '../container/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const publicRoute = [
    {
        name: 'login',
        path: '/login',
        component: Auth,
    },
    {
        name: 'home',
        path: '/',
        component: Home,
    },
]

export const privateRoute = [
    {
        name: 'Authentication',
        path: '/',
        component: Authenticate,
    },
]
export const Routes = (
    <Switch>
        {publicRoute.map((route) => (
            <PublicRoute
                key={route.name}
                exact={true}
                path={route.path}
                components={route.component}
            />
        ))}
        {privateRoute.map((route) => (
            <PrivateRoute
                key={route.name}
                exact={true}
                path={route.path}
                components={route.component}
            />
        ))}
    </Switch>
)
