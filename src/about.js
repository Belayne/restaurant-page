import '../styles/about.css'

const title = "Welcome to our restaurant"

const textList = [
            `Experience the art of sushi at its finest at Sushi Zen.`,
            `Our restaurant blends traditional Japanese techniques with innovative flavors, offering a unique culinary journey.`,
            `We are dedicated to delivering top-notch quality and impeccable service. With a commitment to both tradition and innovation, we ensure every dish is a masterpiece of flavor and presentation.`
        ]

function makeAboutText(textList) {
    const cont = document.createElement('div');
    for(const text of textList) {
        const aboutText = document.createElement('p');
        aboutText.textContent = text;
        aboutText.classList.add('aboutText');
        cont.appendChild(aboutText)
    }

    cont.classList.add('aboutTextContainer');
    return cont
}

function makeAbout() {
    const container = document.createElement('div')
    const aboutTitle = document.createElement('h2')
    const aboutText = makeAboutText(textList);

    aboutTitle.classList.add('aboutTitle')
    aboutTitle.textContent = title;
    container.classList.add('about')

    container.appendChild(aboutTitle)
    container.appendChild(aboutText)

    return container
}

export default makeAbout
