'use strict';

function calculateBMI() {
  // Get user inputs
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const sex = document.querySelector('input[name="sex"]:checked').value;

  // Convert height to meters
  const heightMeters = height / 100;

  // Calculate BMI
  const bmi = weight / (heightMeters * heightMeters);

  // Display result
  let message  = `Your BMI is ${bmi.toFixed(2)}.`

  if (bmi < 18.5) {
    message += "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
    message += "Your weight is normal.";
  } else if (bmi >= 25 && bmi < 30) {
    message += "You are overweight.";
  } else {
    message += "You are obese.";
  }

  document.getElementById("result").innerHTML = message;
}