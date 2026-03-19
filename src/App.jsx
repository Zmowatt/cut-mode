import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import SuggestionsPage from "./components/SuggestionsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />      
      </Routes>
    </>
  );
}

export default App;
