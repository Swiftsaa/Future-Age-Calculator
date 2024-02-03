var ageInFuture;

// Define the calculateAge function outside the event listener
function calculateAge(currentAge, futureYear) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  ageInFuture = futureYear - currentYear + currentAge;
  
  // Display result
  document.getElementById('ageResult').textContent = ageInFuture;
}

// Getting the values from the input fields
document.getElementById('ageCalc').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var currentAge = parseInt(document.getElementById('currentAge').value);
  var futureYear = parseInt(document.getElementById('futureYear').value);

  // Check if the inputs are valid numbers
  if (!isNaN(currentAge) && !isNaN(futureYear)) {
    // Call calculateAge function with form values
    calculateAge(currentAge, futureYear);
  } else {
    // Display an error message if inputs are not valid numbers
    alert("Please Enter a valid age and/or date");
    document.getElementById('ageResult').textContent = 'Please enter valid numbers';
  }
});
