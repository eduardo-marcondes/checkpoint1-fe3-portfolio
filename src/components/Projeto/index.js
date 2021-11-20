import './style.scss';
import cafe from '../../assets/site_estacao_cafe.jpg';
import shotLock from '../../assets/form_shotlock.jpg'
import newYork from '../../assets/site_new_york.jpg'

const Projeto = () => {
    return (
        <>
            <section id="projetos">
                <div className="grid">

                <div className ="card" >
                <img src={cafe} className ="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">Estação do Café</h5>
                <p className ="card-text">Site feito em conjunto com os alunos do curso CTD-DH sobre a empresa (fictícia) Estação do Café, que produz conteúdo sobre os grãos de café e suas histórias.</p>
                <a href="https://bit.ly/3kV3xQp" className = "card-link" target="_blank" rel="noreferrer"><p>Link para o repositório do projeto. </p></a>
                <a href="https://vinnymendes.github.io/EstacaoCafe/" className ="btn btn-primary" target="_blank" rel="noreferrer">Site do Projeto</a>
                </div>
                </div>
                

                <div className ="card" >
                <img src={shotLock} className ="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">Form ShotLock</h5>
                <p className ="card-text">Site com o form (apenas Front-end) para inscrição na lista de espera do produto "ShotLock" da empresa <a href="https://www.emporiodotiro.com.br/" target="_blank" rel="noreferrer">Empório do Tiro&reg;</a>.</p>
                <a href="https://bit.ly/3DBxRqK" className = "card-link" target="_blank" rel="noreferrer"><p>Link para o repositório do projeto. </p></a>
                <a href="https://eduardo-marcondes.github.io/form-front1-ctd/" className ="btn btn-primary" target="_blank" rel="noreferrer">Site do Projeto</a>
                </div>
                </div>
                

                <div className ="card" >
                <img src={newYork} className ="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">Site New York City</h5>
                <p className ="card-text">Site com curiosidades sobre a famosa "Big Apple" - Cidade de Nova Iorque.</p>
                <a href="https://bit.ly/3kOlVun" className = "card-link" target="_blank" rel="noreferrer"><p>Link para o repositório do projeto. </p></a>
                <a href="https://eduardo-marcondes.github.io/site-cidade-front1-ctd/" className ="btn btn-primary" target="_blank" rel="noreferrer">Site do Projeto</a>
                </div>
                </div>
                


                </div>
                

            </section>
        </>

    )
};

export default Projeto;