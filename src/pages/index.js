import React from 'react'
import SEO from '../components/seo';
import * as s from './index.module.scss';

import Layout from '../components/Layout';
import Header from '../components/Header/Header';

function IndexPage() {
    return (
        <Layout>
            <SEO/>
            <Header/>
        </Layout>   
    )
}

export default IndexPage
