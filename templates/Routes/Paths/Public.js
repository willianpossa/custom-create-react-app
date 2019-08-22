module.exports = `import React from "react";

import Home from '../../Pages/Home';
import Show from '../../Pages/Show';
import View from '../../Pages/View';

export default [
    {
        component: Home,
        path: "/",
        exact: true
    },
    {
        component: Show,
        path: "/show",
        exact: true
    },
    {
        component: View,
        path: "/view",
        exact: true
    },
];
`
