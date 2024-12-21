
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        const navbar = document.getElementById('navbarNav');
        navbar.classList.toggle('show');
    });


    // Function to handle the scroll animations
    window.addEventListener('scroll', function () {
        // Check if the image has entered the viewport
        const aboutImage = document.getElementById('about-image');
        const imagePosition = aboutImage.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Add animation class when the image is in view
        if (imagePosition < windowHeight) {
            aboutImage.classList.add('animate-image');
        }

        // Check if each paragraph line is in view and animate it
        const aboutParagraph = document.getElementById('about-paragraph');
        const lines = aboutParagraph.getElementsByClassName('about-line');
        
        for (let i = 0; i < lines.length; i++) {
            const linePosition = lines[i].getBoundingClientRect().top;
            if (linePosition < windowHeight) {
                setTimeout(function () {
                    lines[i].classList.add('animate-line');
                }, i * 200); // Stagger the animation for each line
            }
        }
    });
    
    // JavaScript for 360-degree flip on scroll

// Function to detect if an element is visible in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add flip effect to visible cards
function handleScroll() {
    const cards = document.querySelectorAll('.carousel .card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.style.transform = 'rotateY(360deg)';
        } else {
            card.style.transform = 'rotateY(0deg)';
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);



document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbar = document.getElementById('navbarNav');
    const isExpanded = navbar.classList.contains('show');
    if (isExpanded) {
        navbar.classList.remove('show');
    } else {
        navbar.classList.add('show');
    }
});

    document.addEventListener('DOMContentLoaded', () => {
        const toggler = document.querySelector('.navbar-toggler');
        toggler.addEventListener('click', () => {
            console.log('Navbar toggler clicked');
        });
    });



    document.addEventListener('DOMContentLoaded', () => {
        const options = document.querySelectorAll('.option');
        const images = document.querySelectorAll('.image-item');
  
        options.forEach(option => {
          option.addEventListener('click', () => {
 
            options.forEach(opt => opt.classList.remove('active'));
         
            option.classList.add('active');
  
            // Filter images based on the data-filter
            const filter = option.getAttribute('data-filter');
            images.forEach(image => {
              if (filter === 'all' || image.classList.contains(filter)) {
                image.style.display = 'block';
              } else {
                image.style.display = 'none';
              }
            });
          });
        });
      });

      