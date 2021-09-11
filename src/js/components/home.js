/* global Flickity */
import {
  templates,
  select,
} from '../settings.js';

class Home {

  constructor(element, routePage) {
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
    const links = document.querySelectorAll('.starter-text a');
    for (let link of links) {
      routePage(link);
    }
  }
  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    console.log('generatedHTML', generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
  initWidgets() {
    const element = document.querySelector(select.widgets.carousel);
    new Flickity (element, {
      autoPlay: 2500,
      prevNextButtons: false,
      imagesLoaded: true,
      wrapAround: true,
      pageDots: false,
    });
  }
}

export default Home;
