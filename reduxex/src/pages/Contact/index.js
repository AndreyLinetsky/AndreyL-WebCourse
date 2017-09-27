import React from 'react';
import {
    Layout,
    Heading,
    Section,
    InputField,
    Translate
} from '../../components/';
import { ContactHeroArea } from './components';
import './contact.css';

export default ({ links }) => (
    <Layout heroContent={ContactHeroArea}>
        <Section>
            <Heading size={2}><Translate text="Contact" /></Heading>
            <div className="form-group" >
                <InputField name="Name" type="text" />
                <InputField name="Email" type="email" />
                <InputField name="Message" type="textarea" />
            </div>
        </Section>
    </Layout>
)