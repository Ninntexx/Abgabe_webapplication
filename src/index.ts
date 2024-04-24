import { page1, page2, modal, modalContent, addMenu, next } from './dom-utils';
import { isMenu } from './interface';
import './styles/styles.css';

function hideForm() {
    modal.style.display = 'none';
    page1.style.display = 'none';
    page2.style.display = 'none';
}hideForm();


addMenu.addEventListener("click", function(){
    modal.style.display = '';
    page1.style.display = '';
});

next.addEventListener("click", function (){
    page1.style.display = 'none';
    page2.style.display = '';
});

