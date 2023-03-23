import './App.css';
import Bar from './components/header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './pages/Loading'
import Table from './pages/Table'



function App() {

  return (
    <div className="App">
      <Bar />
      <BrowserRouter>
        <div>
          <Routes>
            <Route >
              <Route path='/' element={<Loading />} />
              <Route path="/table" element={<Table data />} >
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;

