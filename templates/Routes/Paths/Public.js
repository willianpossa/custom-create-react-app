module.exports = `import React from "react";

import Home from '../../Pages/Home';
import Show from '../../Pages/Show';
import View from '../../Pages/View';

import Header from '../../Components/Shared/Header';
import Footer from '../../Components/Shared/Footer';

export default [
    {
        component: Home,
        path: "/",
        exact: true,
        header: <Header />,
        footer: <Footer />
    },
    {
        component: Show,
        path: "/show",
        exact: true,
        header: <Header />,
        footer: <Footer />
    },
    {
        component: View,
        path: "/view",
        exact: true,
        header: <Header />,
        footer: <Footer />
    },
];
`
