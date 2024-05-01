const bookBlock = document.querySelector('.books');
const booksItem = document.querySelectorAll('.book');
const booksTitles = document.querySelectorAll('.book a');
const promo = document.querySelector('.adv');
const bookChaptersList = document.querySelectorAll('.book ul');
const bookChaptersItem = document.querySelectorAll('.book li');

bookBlock.prepend(booksItem[1]);
booksItem[3].before(booksItem[4]);
bookBlock.append(booksItem[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

booksTitles[4].textContent = 'Книга 3. this и Прототипы Объектов';

promo.remove();

bookChaptersList[0].children[10].before(bookChaptersList[0].children[2]);
bookChaptersList[0].children[3].before(bookChaptersList[0].children[5]);
bookChaptersList[0].children[4].before(bookChaptersList[0].children[7]);

bookChaptersList[5].children[2].before(bookChaptersList[5].children[9]);
bookChaptersList[5].children[6].before(bookChaptersList[5].children[3]);
bookChaptersList[5].children[9].before(bookChaptersList[5].children[6]);

const createbookChaptersItem = document.createElement('li');
createbookChaptersItem.textContent = 'Глава 8: За пределами ES6';

bookChaptersList[2].children[8].append(createbookChaptersItem);


