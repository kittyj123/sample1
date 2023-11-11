document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the "Show Results" button click
    function handleShowResults() {
        var rollNumber = document.getElementById("rollNumber").value;
        var name = document.getElementById("name").value;

        // Replace this alert with your actual functionality based on rollNumber and name
        alert("Fetching results for Roll Number: " + rollNumber + ", Name: " + name);
    }

    // Add click event listener to the "Show Results" button
    var showResultsBtn = document.getElementById("showResultsBtn");
    if (showResultsBtn) {
        showResultsBtn.addEventListener("click", handleShowResults);
    }
});
