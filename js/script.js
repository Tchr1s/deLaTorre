//close mobile menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });    
});


window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

