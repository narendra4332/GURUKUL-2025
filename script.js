
const homeContant = document.querySelector(".home-content")
const toggleBtn = document.querySelector('.toggle-btn');
const menuContainer1 = document.querySelector('#menuContainer');

toggleBtn.addEventListener('click', () => {
    menuContainer1.classList.toggle('active');
    homeContant.classList.toggle('active');

});

const header = document.getElementById('headerContainer');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Check if the page has been scrolled down
    if (window.scrollY > 0) {
        header.classList.add('scrolled');  // Add the 'scrolled' class to change background color
    } else {
        header.classList.remove('scrolled');  // Remove the 'scrolled' class when at the top
    }
})




