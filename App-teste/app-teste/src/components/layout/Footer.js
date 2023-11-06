import Uniedu from '../images/uniedu-branco.png';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <ul className='social-list'>
                <li>
                    <a href="https://bolsasuniedu.sed.sc.gov.br/wwpbaseobjects.home.aspx" target="_blank" rel="noreferrer" className="image-link">
                        <div class="image-container">
                            <img src={Uniedu} alt="uniedu" className="uniedu-logo" />
                            <div class="overlay"></div>
                        </div>
                    </a>
                </li>
            </ul>
            <p className='copy_right'>
                <span>Controle de Horas - Uniedu</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;
