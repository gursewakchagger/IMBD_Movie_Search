import Main from "./components/Main-page/main.jsx";
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Singlemovie from "./components/Singlemovie/Singlemovie.jsx";
function App() {
  let { id } = useParams();
  return (
    <>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>}>
     </Route>
     <Route path="/singlemovie/:id" element={<Singlemovie/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
