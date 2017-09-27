import React from 'react';
import {
    Layout,
    Heading,
    Section,
    InputField,
    Translate
} from '../../components/';
import { LoginHeroArea } from './components';

import { Link } from 'react-router-dom';
import './login.css';

export default ({ links }) => (
    <Layout heroContent={LoginHeroArea}>
        <Section>
            <Heading size={2}><Translate text="Login" /></Heading>
            <Link to={"/cart"}>
                <button
                    className="login-button"
                    onClick={() => localStorage.setItem('isAuthenticated', true)}>
                    <Translate text="Login" />
                </button>
            </Link>
        </Section>
    </Layout>
)