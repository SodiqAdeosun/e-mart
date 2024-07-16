import Error from "./pages/ErroHandler";
import "./App.css";
import Blog from "./pages/blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Details from "./pages/Detais";
import PopularPost from "./Component/PopularPost";
import RecentPost from "./Component/RecentPost";


function App() {
  return (
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
        <Route path="blog" element={<Blog />}>
        <Route index element={<PopularPost/>}/>
        <Route path='popularpost' element={<PopularPost/>}/>
        <Route path='recentpost' element={<RecentPost/>}/>

        </Route>
            <Route path="details" element={<Details/>}></Route>
            <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
  
  );
}

export default App;
 