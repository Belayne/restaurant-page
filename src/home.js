import './home.css'

const heroSubtext = document.createElement('p');

const makeHeroTitle = (text = "Your favourite meal just a click away!") => {
    const heroTitle = document.createElement('h2');
    heroTitle.textContent = text;
    heroTitle.classList.add('heroTitle');
    return heroTitle;
}

const makeHeroText = (text = `Savor culinary excellence at our restaurant, where every dish is a masterpiece and every bite a journey of flavor. Experience the perfect blend of ambiance, taste, and hospitality in every visit.`) => {
    const heroText = document.createElement('p');
    heroText.textContent = text;
    heroText.classList.add('heroText');
    return heroText;
}

const makeHome = () => {
    const container = document.createElement('div');
    const heroText = makeHeroText();
    const heroTitle = makeHeroTitle();

    container.classList.add('homeContainer')
    container.appendChild(heroTitle);
    container.appendChild(heroText);
    
    return container;
}

export default makeHome;

