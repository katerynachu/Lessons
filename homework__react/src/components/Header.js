import Logo from './Logo.js'
import SocialItem from './SocialItem.js';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Logo />
                <h2 className="header__title">Blog name</h2>
                <div className='header__social'>
                    <SocialItem />
                    <SocialItem />
                    <SocialItem />
                    <SocialItem />
                    <SocialItem />
                </div>
            </div>
        </div>
    )
}
export default Header;