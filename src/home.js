import '../styles/home.css'
import sushiImage from '../images/Sushi_home.png'

const makeHeroTitle = (text = "Your favourite meal just a click away!") => {
    const heroTitle = document.createElement('h2');
    heroTitle.textContent = text;
    heroTitle.classList.add('heroTitle');
    return heroTitle;
}

const makeImage = (src = sushiImage) => {
    const heroImage = new Image();
    heroImage.src = src;
    heroImage.alt = "A sushi plate."
    heroImage.classList.add("heroImage")
    return heroImage;
}

const makeHeroText = (text = `Savor culinary excellence at our restaurant, where every dish is a masterpiece and every bite a journey of flavor. Experience the perfect blend of ambiance, taste, and hospitality in every visit.`) => {
    const heroText = document.createElement('p');
    heroText.textContent = text;
    heroText.classList.add('heroText');
    return heroText;
}

const makeOrderBtn = (text = "Order now!") => {
    const orderBtn = document.createElement('button');
    orderBtn.textContent = text;
    orderBtn.classList.add('orderBtn');
    return orderBtn;
}

const makeHome = () => {
    const container = document.createElement('div');
    const heroText = makeHeroText();
    const heroTitle = makeHeroTitle();
    const heroImage = makeImage();
    const orderBtn = makeOrderBtn();

    container.classList.add('homeContainer')
    container.appendChild(heroTitle);
    container.appendChild(heroImage);
    container.appendChild(heroText);
    container.append(orderBtn);
    
    return container;
}

export default makeHome;

