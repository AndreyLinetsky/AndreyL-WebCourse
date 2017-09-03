import React, { Component } from 'react';
import PortfolioSocialLink from './portfolioSocialLink';
import './menuSocial.css';
import facebook from '../assets/facebook.svg'
import reddit from '../assets/reddit.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

class PortfolioMenuSocialLinks extends Component {
  render() {
    return (
      <ul className='socialLinksList'>
        <li><PortfolioSocialLink
          url='https://twitter.com/reactjs'
          imageSrc={twitter}
          key='twitter' />
        </li>
        <li><PortfolioSocialLink
          url='https://www.linkedin.com/company/react'
          imageSrc={linkedin}
          key='linkedin' />
        </li>
        <li><PortfolioSocialLink
          url='https://www.reddit.com/r/reactjs/'
          imageSrc={reddit}
          key='reddit' />
        </li>
        <li><PortfolioSocialLink
          url='https://www.facebook.com/groups/react.native.community/'
          imageSrc={facebook}
          key='facebook' />
        </li>
        <li><PortfolioSocialLink
          url='https://engineering.instagram.com/react-native-at-instagram-dd828a9a90c7'
          imageSrc={instagram}
          key='instagram' />
        </li>
      </ul>
    );
  }
}

export default PortfolioMenuSocialLinks;