module.exports = `import React from 'react';
import { Link } from 'react-router-dom';

const Show = () => {

    return (
        <div>
            This is our Show Page
            <Link to="/">Back to home page</Link>
        </div>
    );
}

export default Show;
`;