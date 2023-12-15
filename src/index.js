import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

let buttons = [{ title: "Home", element: Home}, {title: "Menu", element: Menu}, {title: "Content", element: Contact}];

const root = document.querySelector('body');
const content = document.querySelector('.content');

function CreateNavBar() {
    const navContainer = document.createElement('div');
    navContainer.id = "nav-container";
    
    buttons.forEach((item) => {
        let button = document.createElement('button');
        button.classList.add('button');
        button.textContent = item.title;
        button.addEventListener('click', () => {
            content.innerHTML = '';
            content.appendChild(item.element());
        })
        navContainer.appendChild(button);
    });

    root.appendChild(navContainer)
}

//Main Logic
CreateNavBar();
content.appendChild(Home());