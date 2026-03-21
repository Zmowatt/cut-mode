import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import SuggestionsPage from "./components/SuggestionsPage";
import SummaryBar from "./components/SummaryBar";
import SettingsPage from "./components/SettingsPage";

function App() {
  //Stores all foods the user has added to the daily log.
  const [dailyLog, setDailyLog] = useState([]);

  //Stores the user's calorie and marco targets, which can be updated in Settings.
  const [targets, setTargets] = useState({
    calories: 2200,
    protein: 180,
    carbs: 200,
    fat: 70,
  });

  //Adds a selected food item from the search page into the daily log. 
  function handleAddFood(food) {
    setDailyLog((prev) => [...prev, food]);
  }

  //Removes a food item from the daily log by id.
  function handleRemoveFood(id) {
    setDailyLog((prev) => prev.filter((food) => food.id !== id));
  }

  //Defines the main app layout, shared summary bar, and all client-side routes. 
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