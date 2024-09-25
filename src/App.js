import "./assets/css/style.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import Header_2 from "./components/Header_2";
import CategoriesPage from "./pages/CategoriesPage";
import Header_4 from "./components/Header_4";
import PilotsPage from "./pages/PilotsPage";
import {Routes, Route, Outlet} from "react-router-dom";
import Header_3 from "./components/Header_3";
import { useLocation } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWithHeader />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/post/:id" element={<LayoutWithHeader_2 />}>
          <Route index element={<PostDetailPage />} />
        </Route>
        <Route path="/category" element={<LayoutWithHeader_4 />}>
          <Route index element={<CategoriesPage />} />
        </Route>
        <Route path="/pilots" element={<LayoutWithHeader_3 />}>
          <Route index element={<PilotsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

// Компоненты с разными хедерами для каждой страницы
function LayoutWithHeader() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function LayoutWithHeader_2() {
  return (
    <div>
      <Header_2 />
      <Outlet />
    </div>
  );
}

function LayoutWithHeader_4() {
  return (
    <div>
      <Header_4 />
      <Outlet />
    </div>
  );
}

function LayoutWithHeader_3() {
  return (
    <div>
      <Header_3 />
      <Outlet />
    </div>
  );
}

export default App;


