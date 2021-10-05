import './App.css';
import Weather from './components/Weather';
function App() {
  // const apikey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Weather apikey={process.env.REACT_APP_API_KEY}/>
    </>
  );
}
export default App;