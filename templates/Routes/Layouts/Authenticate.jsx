module.exports = `import React from "react";

const AuthLayout = (props) => {

    return (
        <div className="auth-layout">
            { props.children }
        </div>
    );
}

export default AuthLayout;
`
