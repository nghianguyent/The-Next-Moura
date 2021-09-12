import React from 'react'

import { Switch, Redirect } from 'react-router-dom'

import Auth from '../container/auth'
import Home from '../container/home'
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
        name: 'home',
        path: '/',
        component: Home,
    },
]

export const Routes = () => {
    return (
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
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes
