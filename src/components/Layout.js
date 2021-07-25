import React from 'react'
import { Helmet } from 'react-helmet';
import CustomCursor from './CustomCursor/CustomCursor';

import '../styles/app.css';
import IconImage from '../images/assets/eslandscapesltd-london-landscaping-icon.png';

function Layout({ children }) {
    return (
        <div>
            <CustomCursor/>
            <Helmet>
                <link rel="icon" href={IconImage} type="image/x-icon"/>
            </Helmet>
            <nav>
                
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
