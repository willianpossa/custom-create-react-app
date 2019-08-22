module.exports = `import React from 'react';
import { Link } from 'react-router-dom';

const View = () => {

    return (
        <div>
            This is our View Page
            <Link to="/">Back to home page</Link>
        </div>
    );
}

export default View;
`;