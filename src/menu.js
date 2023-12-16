
let menuItems = [
    {name: "Pizza", cost: "$12.99"},
    {name: "Pizza", cost: "$12.99"},
    {name: "Pizza", cost: "$12.99"},
    {name: "Pizza", cost: "$12.99"},
];

function CreateMenuItem(item){
    const menuItem = document.createElement('div');
    menuItem.textContent = item.name + " - " + item.cost;
    return menuItem;
}

export default function() {
    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');

    const menuVertical = document.createElement('div');
    menuVertical.classList.add('menu-vertical');
    const menuHorizontal = document.createElement('div');
    menuHorizontal.classList.add('menu-horizontal');

    menuBox.appendChild(menuHorizontal);
    menuBox.appendChild(menuVertical);

    const title = document.createElement('div');
    title.classList.add('menu-title');
    title.textContent = "Menu";

    menuBox.appendChild(title);

    const hr = document.createElement('hr');
    hr.classList.add('menu-hr');

    menuBox.appendChild(hr);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');

    menuItems.forEach((item) => {
        menuItemsContainer.appendChild(CreateMenuItem(item));
    });

    menuBox.appendChild(menuItemsContainer);

    return menuBox;
}