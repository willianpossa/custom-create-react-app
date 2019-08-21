module.exports = `import React from "react"
import { Route } from "react-router-dom"

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route {...rest} render={ props => (
            <Layout { ...rest }>
                <Component {...props} />
            </Layout>
        )} />
    );
}

export default PublicRoute;
`