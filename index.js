'use strict'

//Задаём начальный индекс(начальный слайд)
let slideIndex = 1;

//Вызываем функцию showSlides(), в параметр передаём slideIndex - это индекс первого слайда(в функции showSlides - slideIndex будет равен n)
showSlides(slideIndex);

//Переключение слайдов, засчёт изменения индекса slideIndex
function prevSlide() {
    showSlides(slideIndex += 1);
}

function nextSlide() {
    showSlides(slideIndex -= 1);
}

//Фуннкция переключения слаййдов(n==slideIndex)
function showSlides(n) {
    //Получаем массив оюъектов(тут все 3 слайда)
    let slides = document.getElementsByClassName('mySlide');

    //проверка на то, что если slideIndex (или n) = длине масива(т.е. конечному объкту массива), то снова включается первый слайд с индексом=1
    if (n > slides.length) {
        slideIndex = 1;
    }
    //Тут тоже самое просто в другую сторону. Если индекс меньше массива, то индекс равен длине массива
    if (n < 1) {
        slideIndex = slides.length;
    }

    //цикл для того, чтобы скрыть все слайды
    for (let slide of slides) {
        slide.style.display = 'none'
    }
    //Идём по массиву slides[тут передаём индекс] и применяем дисплей блок(т.е. просто показываем слайд)
    slides[slideIndex - 1].style.display = "block";
}