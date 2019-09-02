module.exports = `import React from 'react';

const PublicLayout = (props) => {
    return (
        <div className="public-layout">
            { props.header }

            <div className="content-holder">
                { props.children }
            </div>

            { props.footer }
        </div>
    );
}

export default PublicLayout;
`