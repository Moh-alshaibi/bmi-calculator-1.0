'use strict';

function calculateBMI() {
  
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const sex = document.querySelector('input[name="sex"]:checked').value;

  const heightMeters = height / 100;

  const bmi = weight / (heightMeters * heightMeters);

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