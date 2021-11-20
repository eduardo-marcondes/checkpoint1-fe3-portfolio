import './style.scss'
import fotoEdu from '../../assets/foto_du.jpg'

const Banner = ({ children }) => {
  return (
    <>
      <section id="banner">
      
        <div className="banner-text">
          {children}
        </div>
        
        <div className="foto-edu-div">
          <img src={fotoEdu} alt="Foto Eduardo Marcondes" className="foto-edu" />
        </div>

      </section>
    </>

  )
};

export default Banner;