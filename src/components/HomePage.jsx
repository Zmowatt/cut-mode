import { useState } from "react";
import { searchFoods } from "../utils/api.js"

function HomePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!query.trim()) {
      setError("Please enter a food to search.");
      setResults({})
      return;
    }

    setLoading(true);
    setError("");

    try {
      const foods = await searchFoods(query);
      setResults(foods);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function getNutrientValue(food, nutrientName) {
    const nutrient = food.foodNutrients?.find(
      (item) => item.nutrientName === nutrientName
    );
    return nutrient ? nutrient.value : "N/A";
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Search Foods</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
        <input 
          type="text"
          placeholder="Search for a food..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "0.75rem",
            width: "300px",
            marginRight: "0.75rem",
          }}
        />
        <button type="submit" style={{ padding: "0.75 rem 1rem" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && results.length ===0 && (
        <p>No foods yet. Try searching for chicken, rice, oats, or yogurt.</p>
      )}

      <div style={{ display: "grid", gap: "1rem" }}>
        {results.map((food) => (
          <div 
            key={food.fdcId}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: "#fff"
            }}
          >
            <h3>{food.description}</h3>
            <p>
              <strong>Calories:</strong> {getNutrientValue(food, "Energy")}
            </p>
            <p>
              <strong>Protein:</strong> {getNutrientValue(food, "Protein")} g
            </p>
            <p>
              <strong>Carbs:</strong>{" "}
              {getNutrientValue(food, "Carbohydrate, by difference")} g
            </p>
            <p>
              <strong>Fat:</strong>{" "}
              {getNutrientValue(food, "Total lipid (fat)")} g
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;