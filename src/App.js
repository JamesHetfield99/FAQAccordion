import './App.css';
import FAQElement from './Components/FAQ/FAQElement';
import bgDesktop from "./Assets/images/background-pattern-desktop.svg"
import bgMobile from "./Assets/images/background-pattern-mobile.svg"

const phoneScreen = window.innerWidth == 375

function App() {
  return (
    <div className="App">
      <img src={phoneScreen ? bgMobile : bgDesktop} className='background' alt='Not loaded' />
      <FAQElement />
    </div>
  );
}

export default App;
