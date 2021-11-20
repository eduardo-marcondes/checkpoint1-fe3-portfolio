/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss'
import logo from '../../assets/logo_edz_tech.png'

const Header = () => {
    return (
        <>
            <header className="p-3 bg-dark sticky-top">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-light">Info</a></li>
                            <li><a href="#projetos" className="nav-link px-2 link-light">Projetos</a></li>
                            <li><a href="#footer" className="nav-link px-2 link-light">Contato</a></li>
                        </ul>

                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-dark text-decoration-none " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={logo} alt="Logo Eduardo Marcondes" width="50" height="50" className="rounded-circle"/>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
};

export default Header;