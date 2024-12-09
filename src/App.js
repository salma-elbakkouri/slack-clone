import './styles/App.css';
import Header from './components/Header'; 
import MainSection from './components/MainSection';
import '@fontsource/inter';
import '@fontsource/barlow';


function App() {
  return (
    <div className="App">
    <Header />
    <MainSection/>
  </div>
  );
}

export default App;
