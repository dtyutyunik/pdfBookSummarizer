import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PDFSummary from "./screens/PDFSummary/PdfSummary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PDFSummary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
