import "./App.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./MyDocument";

const App = () => {
  return (
    <div className="App">
      <PDFViewer>
      <PDFFile />
      </PDFViewer>
      <PDFDownloadLink document={<PDFFile />} fileName="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default App;