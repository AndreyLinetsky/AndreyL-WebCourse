import React from 'react';
import Translate from '../Translate/';
import i18n from '../../i18n';
import './languageSwitch.css';

export default () => (
    <div >
        <span><Translate text="Language" />:</span>
        <span
            className="language-span"
            onClick={() => i18n.changeLanguage('en')}>
            en
         </span>
        <span
            className="language-span"
            onClick={() => i18n.changeLanguage('fr')} >
            fr
         </span>
    </div>
)
