
let menuItems = [
    {
        heading: "Appetizers",
        items: [
            { name: "Garlic Bread", cost: "$7.99" },
            { name: "Bruschetta", cost: "$8.99" },
            { name: "Calamari", cost: "$10.99" },
            { name: "Quesadillas", cost: "$12.99" }
        ]
    },
    {
        heading: "Drinks",
        items: [
            { name: "Merlot", cost: "$7.99" },
            { name: "Long Island Iced Tea", cost: "$9.99" },
            { name: "Sangria", cost: "$7.99" },
            { name: "White Russian", cost: "$10.99" }
        ]
    },
    {
        heading: "Entrees",
        items: [
            { name: "Sirloin Steak", cost: "$20.99" },
            { name: "Lobster", cost: "$24.99" },
            { name: "Chicken Parmasan", cost: "$18.99" },
            { name: "Pizza", cost: "$17.99" }
        ]
    },
    {
        heading: "Desserts",
        items: [
            { name: "Carrot Cake", cost: "$12.99" },
            { name: "Chocolate Lava Cake", cost: "$11.99" },
            { name: "Pumpkin Pie", cost: "$9.99" },
            { name: "Apple Crumble", cost: "$8.99" }
        ]
    }
];

function CreateMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuName = document.createElement('div');
    menuName.textContent = item.name;

    const menuDivide = document.createElement('hr');

    const menuCost = document.createElement('div');
    menuCost.textContent = item.cost;

    menuItem.appendChild(menuName);
    menuItem.appendChild(menuDivide);
    menuItem.appendChild(menuCost);
    return menuItem;
}

export default function () {
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
        const section = document.createElement('div');
        section.classList.add('menu-section');
        
        const sectionTitle = document.createElement('div');
        sectionTitle.classList.add('menu-section-title');
        sectionTitle.textContent = item.heading;

        section.appendChild(sectionTitle);

        item.items.forEach((menuItem) => {
            section.appendChild(CreateMenuItem(menuItem));
        });

        menuItemsContainer.appendChild(section);
    });

    menuBox.appendChild(menuItemsContainer);

    return menuBox;
}