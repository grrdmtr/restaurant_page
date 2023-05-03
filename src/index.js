import './style.css';
import Page from './print.js';

document.getElementById('content').appendChild(Page.topBar());
document.getElementById('content').appendChild(Page.image());
document.getElementById('content').appendChild(Page.main());
