import "./App.css";
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
