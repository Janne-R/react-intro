
import './sass/style.scss';
import Heading from './components/Heading';
import FirstParagraph from './components/FirstParagraph';
import SubHeading from './components/SubHeading';
import Title from './components/Title';
import SecondParagraph from './components/SecondParagraph';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div>
            <Heading />
            <SubHeading />
            <FirstParagraph />
          </div>
          <div className="card">
            <Title />
            <SecondParagraph />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
