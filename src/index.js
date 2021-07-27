import './style.css';
import displaySection from './display';
import formSection from './form';

const main = document.querySelector('.main');

main.append(displaySection, formSection);