document.addEventListener("DOMContentLoaded", function () {
    var adSection = document.getElementById('adSection');
    var closeButton = document.querySelector('.close-btn');
    var learnMoreBtn = document.getElementById('learnMoreBtn');

    // Set initial position
    updateAdPosition();

    // Update position on scroll
    window.addEventListener('scroll', updateAdPosition);

    // Close ad on button click
    closeButton.addEventListener('click', closeAd);

    // Make the "Learn More" button cycle between RGB colors
    cycleButtonColors();

    function updateAdPosition() {
        var scrollY = window.scrollY || window.pageYOffset;
        adSection.style.center = scrollY + 'px';
    }

    function closeAd() {
        adSection.style.display = 'none';

        // Set a timeout to make the ad reappear after 1 minute (60,000 milliseconds)
        setTimeout(function () {
            adSection.style.display = 'flex';
            cycleButtonColors(); // Restart color cycling when ad reappears
        }, 60000);
    }

    function cycleButtonColors() {
        var colors = [
            'rgb(255, 0, 0)',   // Red
            'rgb(0, 255, 0)',   // Green
            'rgb(0, 0, 255)'    // Blue
            // Add more colors as needed
        ];

        var currentIndex = 0;

        // Set an interval to change the button color every 2 seconds (2000 milliseconds)
        setInterval(function () {
            learnMoreBtn.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }, 2000);
    }
});
