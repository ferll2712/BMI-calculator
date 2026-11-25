const form = document.querySelector("#bmi-form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const inchesInput = document.querySelector("#inches");
const inchesField = document.querySelector("#inches-field");
const result = document.querySelector("#result");
const summary = document.querySelector("#summary");
const detail = document.querySelector("#detail");

// These ranges catch common unit mistakes, such as entering 175 instead of 1.75.
function readMeasurement(input, label, minimum, maximum, unit) {
  const value = input.valueAsNumber;
  let message = "";

  if (input === inchesInput && (!Number.isFinite(value) || value < 0 || value >= 12)) {
    message = "Enter additional inches from 0 to below 12.";
  } else if (!Number.isFinite(value) || value < 0 || (value === 0 && minimum > 0)) {
    message = `Enter a ${label} greater than zero in ${unit}.`;
  } else if (value < minimum || value > maximum) {
    message = `Enter a ${label} between ${minimum} and ${maximum} ${unit}.`;
  } else if (input === heightInput && unit === "ft" && !Number.isInteger(value)) {
    message = "Enter whole feet and put the rest in the inches field.";
  }

  document.querySelector(`#${input.id}-error`).textContent = message;
  input.setAttribute("aria-invalid", String(Boolean(message)));
  return message ? null : value;
}

function getCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

function clearResult(message) {
  result.classList.remove("has-result");
  summary.textContent = message;
  detail.textContent = "";
}

let imperial = false;
form.addEventListener("change", (event) => {
  if (event.target.name !== "units") return;

  imperial = event.target.value === "imperial";
  weightInput.labels[0].textContent = imperial ? "Weight (lb)" : "Weight (kg)";
  heightInput.labels[0].textContent = imperial ? "Height (ft)" : "Height (m)";
  weightInput.placeholder = imperial ? "154" : "70";
  heightInput.placeholder = imperial ? "5" : "1.75";
  heightInput.step = imperial ? "1" : "any";
  heightInput.inputMode = imperial ? "numeric" : "decimal";
  inchesField.hidden = !imperial;
  inchesInput.disabled = !imperial;
  form.classList.toggle("imperial", imperial);

  for (const input of [weightInput, heightInput, inchesInput]) {
    input.value = "";
    input.removeAttribute("aria-invalid");
    document.querySelector(`#${input.id}-error`).textContent = "";
  }
  clearResult("Enter your measurements to calculate your BMI.");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = imperial
    ? readMeasurement(weightInput, "weight", 2.2, 1543, "lb")
    : readMeasurement(weightInput, "weight", 1, 700, "kg");
  const height = imperial
    ? readMeasurement(heightInput, "height", 1, 9, "ft")
    : readMeasurement(heightInput, "height", 0.5, 3, "m");
  const inches = imperial ? readMeasurement(inchesInput, "height", 0, 12, "in") : 0;
  const invalidInput = form.querySelector('input[aria-invalid="true"]');

  if (invalidInput) {
    clearResult("Check your measurements and try again.");
    invalidInput.focus();
    return;
  }

  // Convert imperial measurements to metric so both systems use the same formula.
  const kilograms = imperial ? weight * 0.45359237 : weight;
  const totalInches = height * 12 + inches;

  if (imperial && (totalInches < 20 || totalInches > 118)) {
    document.querySelector("#height-error").textContent =
      "Enter a total height from 20 to 118 inches.";
    heightInput.setAttribute("aria-invalid", "true");
    clearResult("Check your measurements and try again.");
    heightInput.focus();
    return;
  }

  const meters = imperial ? totalInches * 0.0254 : height;
  const bmi = kilograms / (meters * meters);
  // Use the original value for the category, even near a cutoff.
  const category = getCategory(bmi);
  result.classList.add("has-result");
  summary.textContent = `BMI ${bmi.toFixed(1)} · ${category}`;
  detail.textContent = "The BMI shown is rounded. The category uses the value before rounding.";
});
