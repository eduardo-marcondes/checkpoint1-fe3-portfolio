import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Projeto from './components/Projeto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Banner>
        <h1>Eduardo Marcondes</h1>
        <p>Nascido no estranho ano em que decidiram lançar não apenas 1, mas 2 Matrix, fui criado já no mundo da tecnologia, onde tudo estava evoluindo de forma muito rápida e impressionante.</p>
        <p>Sou um cara que aprecia muito a evolução. Se pudermos definí-la com luzes, contraste e design, melhor ainda.</p>
        <p>Se observar algo de errado ou que acha que possa ser melhorado, me diga, pois ainda estou iniciando no mundo do desenvolvimento &#x1F4BB; </p>
      </Banner>
      <Projeto />
      </main>
      <Footer>
      <h6>Criado por Eduardo Marcondes - todos os direitos reservados. &copy;Copyright </h6>
      </Footer>
    </div>
  );
}

export default App;
