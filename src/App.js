
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

        <Title />

        <SecondParagraph />
      </div>
    </div>
  );
}

export default App;
