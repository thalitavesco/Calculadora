import Calculadora from "./components/Calculadora";
function App() {
  return (
    <div className="App">
      <Calculadora title={process.env.REACT_APP_TITLE || 'Calculadora'}/>
    </div>
  );
}

export default App;
