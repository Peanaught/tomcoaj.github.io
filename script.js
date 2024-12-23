document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    // Toggle the menu and navbar visibility
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x'); // Toggles between menu and close icon
        navbar.classList.toggle('active'); // Toggles the navbar visibility
    });


    // Typed.js integration for dynamic text
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'UI/UX Designer'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
    });

    // Read More / Read Less functionality for Services section
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior of the link

            // Get the related full-text and short-text elements
            const fullText = button.previousElementSibling;
            const shortText = fullText.previousElementSibling;

            // Toggle the display of full-text
            if (fullText.style.display === 'none' || fullText.style.display === '') {
                fullText.style.display = 'block';  // Show the full text
                button.textContent = 'Read Less';  // Change button text to "Read Less"
            } else {
                fullText.style.display = 'none';  // Hide the full text
                button.textContent = 'Read More';  // Change button text to "Read More"
            }
        });
    });

    // Read More / Read Less functionality for About section
    const readMoreBtn = document.querySelector('#read-more-btn');
    const moreInfo = document.querySelector('#more-info');
    const initialText = document.querySelector('#initial-text');

    readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump

        // Toggle the visibility of the additional information
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block'; // Show content
            readMoreBtn.textContent = 'Read Less'; // Change button text
        } else {
            moreInfo.style.display = 'none'; // Hide content
            readMoreBtn.textContent = 'Read More'; // Change button text
        }
    });
});
