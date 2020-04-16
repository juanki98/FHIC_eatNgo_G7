const menuId = 'dropdown-menu';
const imageId = 'nav-menu-button';

const hambPath = 'images/menu-hamb.svg';
const crossPath = 'images/menu-cerrar.svg';


function displayMenu() 
{
    var x = document.getElementById(menuId);
    var button = document.getElementById(imageId);
    if (x.style.display === "block") {
        x.style.display = "none";
        button.src = hambPath;
    } else {
        x.style.display = "block";
        button.src = crossPath;
    }
}