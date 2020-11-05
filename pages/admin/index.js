import { Layout }  from "components";

import React from "react";
import ReactDOM,{ render } from "@wordpress/element";

//Start axe in development.
//@see https://www.npmjs.com/package/@axe-core/react
if (process.env.NODE_ENV !== 'production') {
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
}

window.addEventListener("load", function(){
    render(
        <Layout>Hi Roy</Layout>,
        document.getElementById("wordpress-plugin-admin")
    );

});
