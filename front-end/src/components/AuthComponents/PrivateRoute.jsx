import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = (props) => {
    const { component: Component, isUserLoggedIn, ...rest } = props

    const renderComponentOrRedirect = (routeProps) => {

        if (isUserLoggedIn) {
            return <Component {...routeProps} />
        }
        return (
            <Redirect to={{
                pathname: '/login',
                state: { referrer: props.location.pathname }
            }} />
        )
    }

    return (
        <Route {...rest} render={renderComponentOrRedirect} />
    )
}
