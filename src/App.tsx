import { Routes, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Home from "./components/Pages/Home";
import Stories from "./components/Pages/Stories";
import Features from "./components/Pages/Features";
import Pricing from "./components/Pages/Pricing";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
