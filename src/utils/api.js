//Fetches food data from USDA API based on user query.

const API_KEY = import.meta.env.VITE_USDA_API_KEY;
const BASE_URL = "https://api.nal.usda.gov/fdc/v1/foods/search";

export async function searchFoods(query) {
    if (!query.trim()) {
        return [];
    }

    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            pageSize: 10,
        }),
    });

    if(!response.ok) {
        throw new Error("Failed to fetch food data.")
    }

    const data = await response.json();
    
    //Return the food array, or an empty arry if no results are found. 
    return data.foods || []
}

