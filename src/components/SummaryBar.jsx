function SummaryBar({dailyLog, targets}) {
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

    function metricsBlock(label, total, target) {
        const remaining = target - total;

        return (
            <div style={styles.metricCard}>
                <p style={styles.metricTitle}>{label}</p>
                <p style={styles.metricText}>
                    {total.toFixed(1)} / {target}
                </p>
                <p style={styles.remainingText}>
                    Remaining: {remaining.toFixed(1)}
                </p>
            </div>
        );
    }

    return (
        <section style={styles.bar}>
            {metricsBlock("Calories", totals.calories, targets.calories)}
            {metricsBlock("Protein", totals.protein, targets.protein)}
            {metricsBlock("Carbs", totals.carbs, targets.carbs)}
            {metricsBlock("Fat", totals.fat, targets.fat)}
        </section>
    );
}

const styles = {
    bar: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
        padding: "1rem 2rem",
        backgroundColor: "#1a1a1a",
        color: "white",
    },
    metricCard: {
        backgroundColor: "#2a2a2a",
        borderRadius: "8px",
        padding: "0.75rem 1rem"
    },
    metricTitle: {
        margin: "0 0 0.25rem 0",
        fontWeight: "700",
        color: "lime",
    },
    metricText: {
        margin: "0.25rem 0",
    },
    remainingText: {
        margin: 0,
        fontSize: "0.9rem",
        color: "#ccc",
    },
};

export default SummaryBar;