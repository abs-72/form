 /* Ghulam Abbas
        Roll # 030, section A 
        sem 4, BS DFCS */
// Populate dropdown for months
function populateMonths() {
  var monthDropdown = document.getElementById("month");

  // Clear existing options
  monthDropdown.innerHTML = "";

  // Populate dropdown with months
  var months = [
    
   "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  for (var i = 0; i < months.length; i++) {
    var option = document.createElement("option");
    option.text = months[i];
    option.value = i + 1; // Month value is 1-indexed
    monthDropdown.appendChild(option);
  }
}

// Populate dropdown for days (1 to 31)
function populateDays() {
  var dayDropdown = document.getElementById("day");

  // Clear existing options
  dayDropdown.innerHTML = "";

  // Populate dropdown with days
  for (var day = 1; day <= 31; day++) {
    var option = document.createElement("option");
    option.text = day;
    option.value = day;
    dayDropdown.appendChild(option);
  }
}

// Populate dropdown for years (1950 to 2024)
function populateYears() {
  var yearDropdown = document.getElementById("year");
  var startYear = 1950;
  var endYear = 2024;

  // Clear existing options
  yearDropdown.innerHTML = "";

  // Populate dropdown with years
  for (var year = startYear; year <= endYear; year++) {
    var option = document.createElement("option");
    option.text = year;
    option.value = year;
    yearDropdown.appendChild(option);
  }
}

// Call functions to populate dropdowns when the page loads
window.onload = function() {
  populateMonths();
  populateDays();
  populateYears();
};
