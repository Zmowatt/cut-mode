import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import SuggestionsPage from "./components/SuggestionsPage";

function App() {
  const [dailyLog, setDailyLog] = useState([]);

  function handleAddFood(food) {
    setDailyLog((prev) => [...prev, food]);
  }

  function handleRemoveFood(id) {
    setDailyLog((prev) => prev.filter((food.id) !== id));
  }

  return (
    <>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage onAddFood={handleAddFood} />} 
        />
        <Route 
          path="/dashboard" 
          element={
            <DashboardPage
              dailyLog={dailyLog}
              onRemoveFood={handleRemoveFood} 
            />
          } 
        />
        <Route 
          path="/suggestions" 
          element={<SuggestionsPage dailyLog={dailyLog} />} 
        />
      </Routes>
    </>
  );
}

export default App;