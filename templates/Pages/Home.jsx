module.exports = `import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            This is our Home Page
            <Link to="/show">Access Show Page</Link>
            <Link to="/view">Access View Page</Link>
        </div>
    );
}

export default Home;
`;