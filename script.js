document.addEventListener("DOMContentLoaded", function () {
    function redirectToYearPage() {
        window.location.href = "year.html";
    }

    var getResultsBtn = document.getElementById("getResultsBtn");
    if (getResultsBtn) {
        getResultsBtn.addEventListener("click", redirectToYearPage);
    }

    function handleMoreKey() {
        alert("More information..."); // Replace this with your actual functionality
    }

    var moreKey = document.getElementById("moreKey");
    if (moreKey) {
        moreKey.addEventListener("click", handleMoreKey);
    }
});
