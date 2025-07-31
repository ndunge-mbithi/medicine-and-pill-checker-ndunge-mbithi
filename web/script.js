const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Toggle dark/light mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Handle search form
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    results.innerHTML = "<p>Loading...</p>";

    const cacheKey = `fda_${query}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        const data = JSON.parse(cached);
        displayResults(data);
        return;
    }

    try {
        const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query}"&limit=5`);
        if (!response.ok) throw new Error("Failed to fetch data.");
        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        displayResults(data);
    } catch (err) {
        results.innerHTML = `<p class="error">Error: ${err.message}</p>`;
    }
});

// Display results
function displayResults(data) {
    if (!data.results || data.results.length === 0) {
        results.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.innerHTML = "";
    data.results.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const name = item.openfda?.brand_name?.[0] || "N/A";
        const purpose = item.purpose?.[0] || "No purpose listed.";
        const warnings = item.warnings?.[0] || "No warnings available.";

        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Purpose:</strong> ${purpose}</p>
            <p><strong>Warnings:</strong> ${warnings}</p>
        `;
        results.appendChild(card);
    });
}
