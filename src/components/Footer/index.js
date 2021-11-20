import './style.scss'
import githubIcon from '../../assets/github_icon.png'
import emailIcon from '../../assets/email_icon.png'

const Footer = ({children}) => {
    return (
        <footer id="footer" className={`d-flex flex-wrap py-3 border-top bg-dark`}>
          <div className="footer-content">
          <div className="footer-text">
        {children}
      </div>
      <div className="footer-contatos">
        <a href="https://github.com/eduardo-marcondes" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Logo Gihtub Amarelo" title="eduardo-marcondes"/></a>
        <img src={emailIcon} alt="Logo Email Amarelo" title="eduardomarcondesbiz@gmail.com"/>
      </div>
      </div>
    </footer>


    )
};

export default Footer;