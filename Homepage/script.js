window.onload = function(){
    window.scrollTo(0, 0);
};

function toggleMenu() {
    const MenuToggle = document.querySelector('.toggle');
    const Sidebar = document.querySelector('.sidebar');
    MenuToggle.classList.toggle('active');
    Sidebar.classList.toggle('active');
};