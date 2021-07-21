import React from 'react'

import '../styles/app.css';

function Layout({ children }) {
    return (
        <div>
            <nav>
                
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
