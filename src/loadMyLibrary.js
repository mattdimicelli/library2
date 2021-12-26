import populateStats from './populateStats.js';
import renderBooks from './renderBooks.js';
import {
    newBookFormSubmitHandler,
    newBookFormCancelHandler,
    openNewBookForm 
} from './bookForm.js';

export default function loadMyLibrary() {
    window.newBookFormSubmitHandler = newBookFormSubmitHandler;
    window.newBookFormCancelHandler = newBookFormCancelHandler;
    /* the two inline event handlers in the HTML call these functions
    which are renamed when Webpack bundles the app.  Both of these functions
    are added to the global scope so that the HTML can call them even
    after the bundling */

    let openNewBookFormBtn = document.querySelector('button.open-new-book-form');
    openNewBookFormBtn.addEventListener('click', openNewBookForm);

    let wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('hidden');
    populateStats();
    renderBooks();
}