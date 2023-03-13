// import logo from './logo.svg';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const handleClick = () => {
    let clientes = ["ALT", "LP", "LS"]
    let str = ""
    let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbmlzdHJhZG9yMiIsImV4cCI6MTY3ODc0NjM3MiwiaWF0IjoxNjc4NzI4MzcyfQ.BFk6oWiLLchzNHXoxOzi-UUsgOLtIFPBU_1UxNPhhrzk1Luu8yvUShttScvKWEvPPteCjnvZ_8cXvI0Mz32ulg"
    // let asd = 'excel.xls'
    str += `comprobantes-comprobante-`
    clientes.map((cliente, index) => {
      str += `${cliente}${(index === clientes.length - 1) ? "" : "-"}`
    })
    console.log(str)
    saveAs(
      'http://desa-fabi.tecnoaccion.com.ar/api-user/reportes/getReportesComprobantesFile?anioId=2022&mesId=12&clienteId=ALT,LP',
      `${str}.xls`,
      {
        Accept: "application/octet-stream",
        Authorization: "Bearer " + token,
      }
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
