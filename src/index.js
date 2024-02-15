import './reset.css'
import './style.css';
import './header.css'
import '../fonts/fonts.css'
import makeHome from './home';

function addListeners() {
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => button.addEventListener("click", loadContent))
}

function loadHome() {
    const contentDiv = document.querySelector('#content');
    document.querySelector("#homeBtn").classList.add('selected')
    contentDiv.appendChild(makeHome());
}

function loadContent() {
    if(this.classList.contains('selected')) return;
    else  {
        document.querySelector('.selected').classList.toggle('selected');
        this.classList.toggle('selected')
        clearContent();

        switch(this.id){
            case 'homeBtn': loadHome();
        }
    }
}

function clearContent() {
    const toRemove = document.querySelector('#content').firstChild;
    if(toRemove){
        document.querySelector('#content').removeChild(toRemove)
    }
}

addListeners();
loadHome();



