import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPages from "./pages/layout";
import Home from "./pages/home/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<LayoutPages/>} path="/*">
            <Route path="" element={<Home/>} />

          </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
