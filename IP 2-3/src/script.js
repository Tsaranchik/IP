
// получить контейнер
const imgContainer = document.querySelector(".blogue__img-blocks");
// его размеры относительно window
const parentRect = imgContainer.getBoundingClientRect();

// список блоков
const blockImage = imgContainer.querySelectorAll(".blogue__img-block");

// их размеры относительно контейнреа
const massivePositionImg = Array.from(blockImage).map(x => {
    childRect = x.getBoundingClientRect();
    return {
        left: childRect.left - parentRect.left,
        bottom: childRect.bottom - parentRect.bottom,
        right: childRect.right - parentRect.right,
        top: childRect.top - parentRect.top,
        width: childRect.width,
        height: childRect.height,
    }
});

// активный блок
let currentImgId = 1;


blockImage.forEach((element, index) => {
    /* говорим, что этот элемент будет позиционироваться относительно  "relative" элемента*/

    element.style.position = 'absolute';

    // задаём id для блоков        
    element.dataset.id = index;
    // фиксирусем размеры всех блоков
    setStyleImg(element, massivePositionImg[index]);
    // подписка на событие 
    element.addEventListener("click", showImage);
})


// функция для обновления размеров и позиции
function setStyleImg(elem, rect) {
    elem.style.left = `${rect.left}px`;
    elem.style.right = `${rect.right}px`;
    elem.style.bottom = `${rect.bottom}px`;
    elem.style.top = `${rect.top}px`;
    elem.style.width = `${rect.width}px`;
    elem.style.height = `${rect.height}px`;
}

function showImage(event) {
    // если кликнули на саму картинку, то берём родителя с классом .blogue__img-block
    const targetElement = event.target.closest(".blogue__img-block");
    // берём его id
    currentImgId = parseInt(targetElement.dataset.id);

    targetElement.style.zIndex = '10';
    // задаём стили. начиная от левого-верхнего угла
    setStyleImg(targetElement, {
        top: 0,
        left: 0,
        bottom: parentRect.bottom,
        right: parentRect.right,
        width: parentRect.width,
        height: parentRect.height,

    })

    document.addEventListener('click', detectOutsideClick);

    function detectOutsideClick(eventDocument) {
        // если кликнули на ЛЮБОЙ элемент, кроме активного

        const isClickInside = targetElement.contains(eventDocument.target);

        if (!isClickInside) {
            targetElement.style.zIndex = '1';
            // задаём изначальные размеры блока
            setStyleImg(targetElement, massivePositionImg[currentImgId])
            document.removeEventListener("click", detectOutsideClick)
        }
    }
}

