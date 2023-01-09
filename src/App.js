import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import List from "./page/List";
import Write from "./page/Write";

function App() {
  function prams(e) {
    console.log(e);
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/write" element={<Write fn={prams} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
