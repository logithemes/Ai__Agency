// ============================================
// STICKY HEADER
// ============================================

window.addEventListener("scroll", function() {
    const topVal = window.scrollY || document.documentElement.scrollTop;
    const navbars = document.querySelectorAll(".navbar, .navbar-three");
    
    navbars.forEach((navbar) => {
        if (topVal >= 100) {
            navbar.classList.add("header-sticky");
        } else {
            navbar.classList.remove("header-sticky");
        }
    });
});