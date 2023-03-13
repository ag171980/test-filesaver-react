// import logo from './logo.svg';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const handleClick = () => {
    let clientes = ["ALT", "LP", "LS"]
    let formato = "Excel"
    let str = ""
    let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbmlzdHJhZG9yMiIsImV4cCI6MTY3ODc0NjM3MiwiaWF0IjoxNjc4NzI4MzcyfQ.BFk6oWiLLchzNHXoxOzi-UUsgOLtIFPBU_1UxNPhhrzk1Luu8yvUShttScvKWEvPPteCjnvZ_8cXvI0Mz32ulg"
    // let asd = 'excel.xls'
    str += `comprobantes-comprobante-`
    clientes.map((cliente, index) => (
      str += `${cliente}${(index === clientes.length - 1) ? "" : "-"}`
    ))
    str += `.${formato === "Excel" ? 'xls' : 'pdf'}`
    console.log(str)
    saveAs(
      'https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg',
      str,
      {
        Accept: `application/${formato === "Excel" ? 'octet-stream' : 'x-pdf'}`,
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
