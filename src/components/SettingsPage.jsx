//SettingsPage: Allows users to update their daily macro targets.

import { useState } from "react";

function SettingsPage ({ targets, setTargets }) {
    
    //Form state starts with the user's current saved targets.
    const [formData, setFormData] = useState({
        calories: targets.calories,
        protein: targets.protein,
        carbs: targets.carbs,
        fat: targets.fat,
    });

    const [savedMessage, setSavedMessage] = useState("");

    //Updates the matching form field as the user types. 
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    //Saves the user's updated targets
    function handleSubmit(event) {
        event.preventDefault();

        setTargets({
            calories: Number(formData.calories),
            protein: Number(formData.protein),
            carbs: Number(formData.carbs),
            fat: Number(formData.fat),
        });

        setSavedMessage("Targets updated successfully.")
    }

    return (
        <main style={styles.page}>
            <h2>Settings</h2>
            <p>Update your daily calorie and macro targets.</p>

            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                    Calories
                    <input 
                        type="number"
                        name="calories"
                        value={formData.calories}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    Protein
                    <input
                        type="number"
                        name="protein"
                        value={formData.protein}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    Carbs
                    <input 
                        type="number"
                        name="carbs"
                        value={formData.carbs}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>

                <label style={styles.label}>
                    Fat
                    <input 
                        type="number"
                        name="fat"
                        value={formData.fat}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </label>

                <button type="submit" style={styles.button}>
                    Save Targets
                </button>
            </form>

            {savedMessage && <p style={styles.success}>{savedMessage}</p>}
        </main>
    );
}

const styles = {
    page: {
        padding: "2rem",
    },
    form: {
        display: "grid",
        gap: "1rem",
        maxWidth: "400px",
        marginTop: "1rem",
    },
    label: {
        display: "grid",
        gap: "0.5rem",
        fontWeight: "600",
    },
    input: {
        padding: "0.75rem",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "0.75rem 1rem",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
    },
    success: {
        marginTop: "1rem",
        color: "green",
        fontWeight: "600",
    },
};

export default SettingsPage;