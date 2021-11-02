
import './App.css';
import Heading from './components/Heading';
import FirstParagraph from './components/FirstParagraph';
import SubHeading from './components/SubHeading';
import Title from './components/Title';
import SecondParagraph from './components/SecondParagraph';

function App() {
  return (
    <div className="container">
      <div>
        <Heading />
        <SubHeading />
        <FirstParagraph />
      </div>
      <div className="card">
        <div className="card__title">
          <Title />
        </div>
        <SecondParagraph />
      </div>
    </div>
  );
}

export default App;
