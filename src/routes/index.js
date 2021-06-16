import React from 'react'

import { Switch } from 'react-router-dom'

import Authentication from './../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const publicRoute = [
    {
        name: 'login',
        path: '/login',
        component: Authentication,
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
    },
]

export const privateRoute = [
    {
        name: 'Authentication',
        path: '/home',
        component: Authentication,
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
