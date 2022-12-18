import React, { Component } from 'react';
import '../assets/scss/header.scss';
import Logo from './Logo.js';
import SocialItem from './SocialItem.js';
import logo from "../assets/images/pikachu.png"
import facebook from '../assets/images/facebook.svg'
import youtube from '../assets/images/youtube.svg'
import instagram from '../assets/images/instagram.svg'
import telegram from '../assets/images/telegram.png'
import linkedin from '../assets/images/linkedin.png'


export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="header">
                <div className="header__container">
                   <div className='header__wrapper'>
                   <Logo image={logo} />
                    <h2 className="header__title">{this.props.title}</h2>
                    <div className='header__social'>
                        <SocialItem image={facebook} />
                        <SocialItem image={youtube} />
                        <SocialItem image={instagram}/>
                        <SocialItem image={telegram} />
                        <SocialItem image={linkedin} />
                    </div>
                   </div>
                </div>
            </div>
        )
    }
}





