function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert cm to m
    var bmi = weight / (height * height);
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is " + bmi.toFixed(1);
  
    if (bmi < 18.5) {
      resultElement.style.color = "#FFC107"; // yellow
      resultElement.innerHTML += " - Underweight";
    } else if (bmi < 25) {
      resultElement.style.color = "#4CAF50"; // green
      resultElement.innerHTML += " - Normal weight";
    } else if (bmi < 30) {
      resultElement.style.color = "#FF9800"; // orange
      resultElement.innerHTML += " - Overweight";
    } else {
      resultElement.style.color = "#F44336"; // red
      resultElement.innerHTML += " - Obese";
    }
  }
  