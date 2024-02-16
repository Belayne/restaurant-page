import '../styles/menu.css'

const Sashimi = {
    "Salmon": "€2/pz",
    "Tuna": "€2/pz",
    "Scallop": "2,5€/pz",
    "Bass": "2,5€/pz",
    "Red shrimp": "3€/pz",
    "Blue shrimp": "3€/pz"
}

const Nigiri = {
    "Salmon": "€2/pz",
    "Tuna": "€2/pz",
    "Scallop": "2€/pz",
    "Bass": "2,5€/pz",
    "Red shrimp": "2,5€/pz",
    "Blue shrimp": "3€/pz"
}

function makeMenuSection(name, prices) {
    const menuSection = document.createElement('div')
    menuSection.classList.add('.menuSection');
    const title = document.createElement('h3');
    title.classList.add('menuTitle');
    title.textContent = name;
    menuSection.appendChild(title);

    for(const [name, price] of Object.entries(prices)) {
        const dishName = document.createElement('p')
        const dishPrice = document.createElement('p')
        dishName.textContent = name;
        dishPrice.textContent = price;
        dishName.classList.add('dishName');
        dishPrice.classList.add('dishPrice');
        menuSection.appendChild(dishName);
        menuSection.appendChild(dishPrice);
    }

    return menuSection
}

function makeMenu() {
    const container = document.createElement('div');
    container.classList.add("menu");

    const nigiriMenu = makeMenuSection("Nigiri", Nigiri);
    const sashimiMenu = makeMenuSection("Sashihmi", Sashimi);

    container.appendChild(nigiriMenu);
    container.appendChild(sashimiMenu);

    return container;
}

export default makeMenu;

