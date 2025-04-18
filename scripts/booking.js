/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // starting with full day rate
let daysSelected = 0;
let daysOfWeek = document.querySelectorAll(".day-selector li");
let fullDayBtn = document.getElementById("full");
let halfDayBtn = document.getElementById("half");
let clearButton = document.getElementById("clear-button");
let calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daysOfWeek.forEach(function(day) {
    day.addEventListener("click", function() {
        // Check if this day is already selected
        if (!day.classList.contains("clicked")) {
            // If not already selected, add the class and increment counter
            day.classList.add("clicked");
            daysSelected++;
            calculate();
        } else {
            // If already selected, remove the class and decrement counter
            day.classList.remove("clicked");
            daysSelected--;
            calculate();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
    // Remove "clicked" class from all days
    daysOfWeek.forEach(function(day) {
        day.classList.remove("clicked");
    });
    
    // Reset counter and cost
    daysSelected = 0;
    calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayBtn.addEventListener("click", function() {
    dailyRate = 20;
    halfDayBtn.classList.add("clicked");
    fullDayBtn.classList.remove("clicked");
    calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayBtn.addEventListener("click", function() {
    dailyRate = 35;
    fullDayBtn.classList.add("clicked");
    halfDayBtn.classList.remove("clicked");
    calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let totalCost = daysSelected * dailyRate;
    calculatedCost.innerHTML = totalCost;
}