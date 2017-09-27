import React from 'react';
import { Layout } from '../../components/'
import { Route } from 'react-router-dom'
import { Translate } from '../../components/';

export default ({ links }) => (
    <Layout>
        <Translate text="About"/>
    </Layout>
)