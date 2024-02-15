import './reset.css'
import './style.css';
import './header.css'
import '../fonts/fonts.css'
import makeHome from './home';

function appendHome() {
    const contentDiv = document.querySelector('#content');
    document.querySelector("#homeBtn").classList.add('selected')
    contentDiv.appendChild(makeHome());
}

appendHome();



