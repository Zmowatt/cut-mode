import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import SuggestionsPage from "./components/SuggestionsPage";
import SummaryBar from "./components/SummaryBar";
import SettingsPage from "./components/SettingsPage";

function App() {
  const [dailyLog, setDailyLog] = useState([]);

  const [targets, setTargets] = useState({
    calories: 2200,
    protein: 180,
    carbs: 200,
    fat: 70,
  });

  function handleAddFood(food) {
    setDailyLog((prev) => [...prev, food]);
  }

  function handleRemoveFood(id) {
    setDailyLog((prev) => prev.filter((food) => food.id !== id));
  }

  return (
    <>
      <Header />
      <SummaryBar dailyLog={dailyLog} targets={targets} />

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
              targets={targets} 
            />
          } 
        />
        <Route 
          path="/suggestions" 
          element={<SuggestionsPage dailyLog={dailyLog} targets={targets} />} 
        />
        <Route
          path="/settings"
          element={<SettingsPage targets={targets} setTargets={setTargets} />}
        />
      </Routes>
    </>
  );
}

export default App;