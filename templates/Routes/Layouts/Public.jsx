module.exports = `import React from 'react';

const PublicLayout = (props) => {
    return (
        <div className="public-layout">
            { props.children }
        </div>
    );
}

export default PublicLayout;
`