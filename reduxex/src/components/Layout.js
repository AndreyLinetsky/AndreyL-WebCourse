import React from 'react';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import {
  Header,
  Body,
  Footer,
  SocialLinks
} from '../components'

import { Route } from 'react-router-dom';
import classNames from 'classnames';

const socialLinks = [
  {
    text: 'Facebook',
    icon: 'facebook',
    link: 'facebook.com'
  },
  {
    text: 'Github',
    icon: 'github',
    link: 'github.com'
  },
  {
    text: 'Email',
    icon: 'envelope',
    link: 'vnovick@gmail.comm'
  }
]

export default class Layout extends React.Component {
  state = {
    menuState: false
  }

  open = () => {
    this.setState({
      menuState: true
    })
  }


  close = (e) => {
    if (this.state.menuState) {
      this.setState({
        menuState: false
      })
    }
  }

  render() {
    const {
        open,
      close,
      state: { menuState },
      props: {
            heroContent: HeroArea,
        className,
        footerContent: FooterContent,
        children
        }
    } = this;
    return (
      <I18nextProvider i18n={i18n}>
        <div className={classNames(["App", className])} onClick={() => close()}>
          <Header menuConfig={{ menuState, open, socialLinks }}>
            {HeroArea && <HeroArea links={socialLinks} />}
          </Header>
          <Body>
            {children}
          </Body>
          <Footer>
            {FooterContent ? <FooterContent links={socialLinks} /> : <SocialLinks links={socialLinks} />}
          </Footer>
        </div>
      </I18nextProvider>
    )
  }
}