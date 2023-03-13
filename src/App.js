// import logo from './logo.svg';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const handleClick = () => {
    let asd = 'excel.xls'
    saveAs(
      'http://desa-fabi.tecnoaccion.com.ar/api-user/reportes/getReportesComprobantesFile?anioId=2022&mesId=12&clienteId=ALT,LP',
      asd,
      { Accept: "application/octet-stream" }
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
