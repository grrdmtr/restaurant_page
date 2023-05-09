import Page from './print.js';

export default {
  createPage() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
    document.getElementById('content').appendChild(Page.topBar());
  }
}