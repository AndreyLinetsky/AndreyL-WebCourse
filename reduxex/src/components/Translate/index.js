import React from 'react';
import { translate } from 'react-i18next';

const Translation = ({ text, t }) => (
    <span>{t(text)}</span>
)

export default translate('translations')(Translation)

