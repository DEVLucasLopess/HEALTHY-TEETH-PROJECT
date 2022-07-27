import React from "react";

import Footer from '../Footer';
import Top from '../Top';

const PageStructure = (props) => {
    return (
        <section>
            <Top />

                { props.children }

            <Footer />
        </section>
    );
}

export default PageStructure;