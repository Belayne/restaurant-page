import '../styles/reset.css'
import '../styles/style.css';
import '../styles/header.css'
import '../fonts/fonts.css'
import makeHome from './home';
import makeMenu from './menu';
import makeAbout from './about';

function addListeners() {
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => button.addEventListener("click", loadContent))
}

function clearContent() {
    const toRemove = document.querySelector('#content').firstChild;
    if(toRemove){
        toRemove.parentNode.removeChild(toRemove)
    }
}


function loadContent() {
    const contentDiv = document.querySelector('#content');
    if(this){
        if(!this.classList.contains('selected'))
        {
            clearContent();
            document.querySelector('.selected').classList.toggle('selected');
            this.classList.toggle('selected')
            

            switch(this.id){
                case 'homeBtn': {
                    contentDiv.appendChild(makeHome());
                    break;
                }
                case 'menuBtn':{
                    contentDiv.appendChild(makeMenu());
                    break;
                }
                case 'aboutBtn': {
                    contentDiv.appendChild(makeAbout());
                    break;
                }
            }
        }
    }
    else {
        contentDiv.appendChild(makeHome());
        document.querySelector('#homeBtn').classList.add('selected') 
    }
}
    


addListeners();



loadContent();



