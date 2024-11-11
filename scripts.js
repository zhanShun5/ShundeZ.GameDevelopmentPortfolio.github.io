document.querySelectorAll('.item img').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();  // stops multiple 'propergation'/calls of the same event from occurring


        // Get the text container within this item
        const item = this.parentElement;
        const textContainer = item.querySelector('.text-container');
        
        // Toggle the active class on the clicked item's text container
        textContainer.classList.toggle('active');
        
        // Close other text containers
        document.querySelectorAll('.text-container').forEach(container => {
            if (container !== textContainer) {
                container.classList.remove('active');
            }
        });
    });
})



// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when user scrolls down 100px from top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("visible");
    } else {
        scrollToTopBtn.classList.remove("visible");
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function() {
    // For smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});