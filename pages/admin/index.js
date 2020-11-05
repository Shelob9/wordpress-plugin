import { Layout }  from "components";

import React from "react";
import { render } from "@wordpress/element";


window.addEventListener("load", function(){
    render(
        <Layout>Hi Roy</Layout>,
        document.getElementById("wordpress-plugin-admin")
    );

});
