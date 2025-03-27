import React from "react";

import Header from "./Header";
import Info from "./Info";
import Prize from "./Prize";
import Eligibility from "./Eligibility";
import Date from "./Date";
import Query from "./Query";


const Contest = () => {
    return (
        <div>
            <Header />
            <Info />
            <Prize />
            <Eligibility />
            <Date />
            <Query />
        </div>
    );
};

export default Contest;

