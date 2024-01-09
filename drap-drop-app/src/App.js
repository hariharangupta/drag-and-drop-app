import "./App.css";
import CustomComponent from "./CustomComponent";
import FormAdd from "./components/FormAdd";
import FormTable from "./components/FormTable";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FormTable />} />
          <Route path="/addUser" element={<FormAdd />} />
        </Routes>
      </Router>
      {/* <CustomComponent /> */}
    </div>
  );
}

export default App;
