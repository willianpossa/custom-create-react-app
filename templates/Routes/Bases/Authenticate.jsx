module.exports = `import React from "react"
import { Route, Redirect } from "react-router-dom"

import { isAuthenticated } from '../../Services/Authentication';

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => {

    return (
		<Route
            {...rest}
            render={ (props) => isAuthenticated() === true 
                ? (
                    <Layout { ...rest }>
                        <Component {...props} />
                    </Layout>
                ) : (
                    <Redirect to={{
                        pathname: '/login', 
                        state: { 
                            from: props.location 
                        }
                    }} />
                )} 
        />
    )
}

export default PrivateRoute;
`