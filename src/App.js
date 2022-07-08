import "./styles.css";
import { Main } from "./components/Main";
import { Home } from "./components/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
