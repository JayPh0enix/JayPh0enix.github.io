document.addEventListener("DOMContentLoaded", function () {
    var adSection = document.getElementById('adSection');
    var closeButton = document.querySelector('.close-btn');

    // Set initial position
    updateAdPosition();

    // Update position on scroll
    window.addEventListener('scroll', updateAdPosition);

    // Close ad on button click
    closeButton.addEventListener('click', closeAd);

    function updateAdPosition() {
        var scrollY = window.scrollY || window.pageYOffset;
        adSection.style.center = scrollY + 'px';
    }

    function closeAd() {
        adSection.style.display = 'none';
    }
});
