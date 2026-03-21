function SuggestionsPage({ dailyLog, targets }) {
  const totals = dailyLog.reduce(
    (acc, food) => {
      acc.calories += Number(food.calories) || 0;
      acc.protein += Number(food.protein) || 0;
      acc.carbs += Number(food.carbs) || 0;
      acc.fat += Number(food.fat) || 0;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const suggestions = [];

  if (totals.protein <targets.protein) {
    suggestions.push("You are low on protein. Try chicken breast, Greek yogurt, tuna, or a protein shake.");
  }

  if (totals.carbs < targets.carbs) {
    suggestions.push("You are low on carbs. Try rice, oats, potatoes, or fruit.");
  }
  
  if (totals.fat < targets.fat) {
    suggestions.push("You are low on fats. Try eggs, avocado, nuts, or olive oil.");
  }

  if (totals.calories > targets.calories) {
    suggestions.push("You are over your calorie target. Focus on lean protein and lower-calorie foods next.");
  }

  if (suggestions.length === 0) {
    suggestions.push("You're in a solid range right now. Keep building balanced meals.");
  }


  return (
    <main style={{ padding: "2rem" }}>
      <h2>Suggestions</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: "#fff",
            }}
          >
            <p>{suggestion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SuggestionsPage;