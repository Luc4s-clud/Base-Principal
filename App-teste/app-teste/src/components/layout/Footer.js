import Uniedu from '../images/uniedu1.png';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <ul className='social-list'>
                <li>
                    <div className="image-link-container">
                        <a href="https://bolsasuniedu.sed.sc.gov.br/wwpbaseobjects.home.aspx" target="_blank" rel="noreferrer" className="image-link">
                            <img src={Uniedu} alt="uniedu" className="uniedu-logo" />
                        </a>
                    </div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
