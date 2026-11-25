const form = document.querySelector("#bmi-form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const result = document.querySelector("#result");
const summary = document.querySelector("#summary");
const detail = document.querySelector("#detail");

// These ranges catch common unit mistakes, such as entering 175 instead of 1.75.
function readMeasurement(input, label, minimum, maximum, unit) {
  const value = input.valueAsNumber;
  let message = "";

  if (!Number.isFinite(value) || value <= 0) {
    message = `Enter a ${label} greater than zero in ${unit}.`;
  } else if (value < minimum || value > maximum) {
    message = `Enter a ${label} between ${minimum} and ${maximum} ${unit}.`;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = readMeasurement(weightInput, "weight", 1, 700, "kg");
  const height = readMeasurement(heightInput, "height", 0.5, 3, "m");

  if (weight === null || height === null) {
    result.classList.remove("has-result");
    summary.textContent = "Check your measurements and try again.";
    detail.textContent = "";
    const firstInvalidInput = weight === null ? weightInput : heightInput;
    firstInvalidInput.focus();
    return;
  }

  const bmi = weight / (height * height);
  // Use the original value for the category, even near a cutoff.
  const category = getCategory(bmi);
  result.classList.add("has-result");
  summary.textContent = `BMI ${bmi.toFixed(1)} · ${category}`;
  detail.textContent = "The BMI shown is rounded. The category uses the value before rounding.";
});
