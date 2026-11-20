
// Get the toggle buttons
const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");

// Get all prices and billing labels
const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

// Function to change the billing period
function setPeriod(period) {

    // Update all prices
    prices.forEach(function(price) {
        price.textContent = price.dataset[period];
    });

    // Update billing labels
    units.forEach(function(unit) {
        unit.textContent =
            period === "monthly" ? "per month" : "per year";
    });

    // Update active button styles
    monthlyButton.classList.toggle("active", period === "monthly");
    yearlyButton.classList.toggle("active", period === "yearly");

    // Update accessibility states
    monthlyButton.setAttribute(
        "aria-pressed",
        String(period === "monthly")
    );

    yearlyButton.setAttribute(
        "aria-pressed",
        String(period === "yearly")
    );
}

// Monthly button click
monthlyButton.addEventListener("click", function() {
    setPeriod("monthly");
});

// Yearly button click
yearlyButton.addEventListener("click", function() {
    setPeriod("yearly");
});

// Show monthly prices when the page opens
setPeriod("monthly");
