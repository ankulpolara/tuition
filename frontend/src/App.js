import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { CreatePage } from "./pages/CreatePage";
import { PageDetails } from "./pages/PageDetails";
import { WaitList } from "./pages/WaitList";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/wait-list"} element={<WaitList />} />
        <Route path={"/create-page"} element={<CreatePage />} />
        <Route path={"/pages"} element={<Home />} />
        <Route path={"/pages/:id"} element={<PageDetails />} />
      
      
      </Routes>
    </main>
  );
}

export default App;
