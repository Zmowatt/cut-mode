function DashboardPage({ dailyLog, onRemoveFood, targets }) {
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

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>

      <div style={{ marginBottom: "1.5rem" }}>
        <p><strong>Calories:</strong> {totals.calories.toFixed(1)} / {targets.calories} </p>
        <p><strong>Protein:</strong> {totals.protein.toFixed(1)} g / {targets.protein} </p>
        <p><strong>Carbs:</strong> {totals.carbs.toFixed(1)} g / {targets.carbs} </p>
        <p><strong>Fat:</strong> {totals.fat.toFixed(1)} g/ {targets.fat} </p>
      </div>

      {dailyLog.length === 0 ? (
        <p>No foods added yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem "}}>
          {dailyLog.map((food) => (
            <div
              key={food.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
              }}
            >
              <h3>{food.name}</h3>
              <p>Calories: {food.calories}</p>
              <p>Protein: {food.protein} g</p>
              <p>Carbs: {food.carbs} g</p>
              <p>Fat: {food.fat} g</p>
              <button onClick={() => onRemoveFood(food.id)}>Remove</button>
           </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default DashboardPage;