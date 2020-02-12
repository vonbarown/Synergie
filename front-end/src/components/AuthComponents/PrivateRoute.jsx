import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = (props) => {
    const { component: Component, isUserLoggedIn, ...rest } = props

    const renderComponentOrRedirect = () => {
        if (isUserLoggedIn) {
            return <Component />
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
