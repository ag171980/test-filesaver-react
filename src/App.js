// import logo from './logo.svg';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const handleClick = () => {
    saveAs(
      'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/09/WhatsApp-logo-12.png?fit=1200%2C771&quality=60&strip=all&ssl=1',
      'imagen.png',
      { Accept: "image/png" }
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleClick()}>Descargar</button>
      </header>
    </div>
  );
}

export default App;
