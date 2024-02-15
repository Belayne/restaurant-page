import './reset.css'
import './style.css';
import './header.css'
import '../fonts/fonts.css'
import makeHome from './home';

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(makeHome());
