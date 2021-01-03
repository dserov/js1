'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

// Присвоим индексы текстов массиву ссылок. присваивать тексты будем по атрибуту data-text-id
const links = document.querySelectorAll('a.nav-link');
const textDiv = document.querySelector('div.text');
let index = 1;

links.forEach(link => {
    link.dataset['textid'] = 'text' + index;
    index++;
    link.addEventListener('click', clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.

    changeActiveClass(event);
    changeText(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    const prevActive = document.querySelector('.active');
    if (prevActive !== null) {
        prevActive.classList.remove('active');
    }

    event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    const element = event.target;
    const index  = element.dataset['textid'];
    if (index === undefined) {
        return;
    }

    if (!texts.hasOwnProperty(index)) {
        textDiv.textContent = 'Text not found';
    } else {
        textDiv.textContent = texts[index];
    }
}
