import React from 'react';
import classNames from 'classnames';
import Translate from '../Translate/';
import SocialLinks from '../SocialLinks/';
import LanguageSwitch from '../LanguageSwitch/';
import { Link } from 'react-router-dom';
import './menu.css';

const navigationLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

export default ({ children, menuConfig: { menuState, open, socialLinks } }) => (
    <div className="App-menubar">
        <label className="hamburger-icon fa fa-bars" onClick={() => open()} />
        <div className={classNames(['menu-content', menuState && 'opened'])}>
            <div className="links-container">
                {navigationLinks.map(({ name, path }, index) => (
                    <Link to={`${path}`} className="page-link" key={`page-${name.toLowerCase()}-${index}`}>
                        <Translate text={name} />
                    </Link>
                ))}
                {localStorage.getItem('isAuthenticated') === 'true' ? <Link className="page-link" to={{ pathname: '/cart' }}><Translate text="Cart" /></Link> :
                    <Link className="page-link" to={{ pathname: '/login' }}><Translate text="Login" /></Link>}
                <Link className="page-link" to={{ pathname: '/products', search: 'referral=Amazon' }}><Translate text="ReferralLink" /></Link>
            </div>
            <div className="language-switch">
                <LanguageSwitch />
            </div>
            <div className="socialLinks">
                <SocialLinks links={socialLinks} type="icons" />
            </div>
        </div>
        <div className={classNames(['overlay', menuState && 'active'])} />
    </div>
)