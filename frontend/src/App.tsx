import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import AnalyticsPage from "./pages/AnalyticsPage";
import "./styles/global.css";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/analytics/:code" element={<AnalyticsPage/>}/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;