function SuggestionsPage({ dailyLog }) {
  const totals = dailyLog.reduce(
    (acc, food) => {
      acc.calories += food.calories;
      acc.protein += food.protein;
      acc.carbs += food.carbs;
      acc.fat += food.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const targets = {
    calories: 2200,
    protein: 180,
    carbs: 200,
    fat: 70,
  };

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
            <p>{suggestions}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SuggestionsPage;