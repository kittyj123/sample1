document.addEventListener("DOMContentLoaded", function () {
function redirectTodetailsPage() {
        window.location.href = "details.html";
    }
    var enterButton = document.getElementById("enterButton");
    if (enterButton) {
        enterButton.addEventListener("click", redirectTodetailsPage);
    }

    // Back button functionality
    var backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            // Navigate back to the previous page
            window.history.back();
        });
    }
});
